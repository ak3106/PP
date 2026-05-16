import Razorpay from 'razorpay';

// NOTE: In a real app, this MUST be a backend call.
// For now, we are setting up the structure.
export const createRazorpayOrder = async (amount) => {
  // Amount is in paisa (100 paisa = 1 INR)
  const options = {
    amount: amount * 100, 
    currency: "INR",
    receipt: `receipt_${Date.now()}`,
  };

  // This part usually happens on your server
  // const order = await instance.orders.create(options);
  // return order;
};