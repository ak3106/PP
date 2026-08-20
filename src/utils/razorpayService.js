// Keep track of an in-flight script load to prevent duplicate script tags
let razorpayScriptPromise = null;

/**
 * Dynamically loads the Razorpay checkout script safely
 */
export const loadRazorpayScript = () => {
  if (window.Razorpay) {
    return Promise.resolve(true);
  }

  // If already loading, return the existing promise
  if (razorpayScriptPromise) {
    return razorpayScriptPromise;
  }

  razorpayScriptPromise = new Promise((resolve) => {
    // Double check if script tag was manually added to document
    const existingScript = document.querySelector('script[src="https://checkout.razorpay.com/v1/checkout.js"]');
    if (existingScript) {
      existingScript.addEventListener("load", () => resolve(true));
      existingScript.addEventListener("error", () => resolve(false));
      return;
    }

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    
    script.onload = () => {
      razorpayScriptPromise = null;
      resolve(true);
    };
    
    script.onerror = () => {
      razorpayScriptPromise = null;
      resolve(false);
    };

    document.body.appendChild(script);
  });

  return razorpayScriptPromise;
};

/**
 * Calls backend to create a Razorpay order
 */
export const createBackendOrder = async (backendUrl, amount, currency = "INR") => {
  try {
    const response = await fetch(`${backendUrl}/createOrder`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: Math.round(amount), currency }),
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(data.error || `Server error (${response.status})`);
    }

    return data; // Expected: { order_id, amount, currency }
  } catch (err) {
    throw new Error(err.message || "Failed to create order on server");
  }
};

/**
 * Sends signature data to backend for verification
 */
export const verifyBackendPayment = async (
  backendUrl, 
  { razorpay_order_id, razorpay_payment_id, razorpay_signature }
) => {
  try {
    const response = await fetch(`${backendUrl}/verifyPayment`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
      }),
    });

    const result = await response.json().catch(() => ({}));

    if (!response.ok || result.status !== "success") {
      throw new Error(result.error || "Payment verification failed");
    }

    return result;
  } catch (err) {
    throw new Error(err.message || "Payment verification failed");
  }
};