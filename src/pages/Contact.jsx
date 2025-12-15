import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquareText,
  AlertTriangle,
  CheckCircle,
  Star,
  Truck,
  ShoppingBag,
  Globe,
  DollarSign,
  CreditCard,
  Home,
} from "lucide-react";
import Button from "../components/UI/Button";
import Input from "../components/UI/Input";

/**
 * Contact Us Page component featuring contact form, shop details, and Google Map/Review integration.
 * @returns {JSX.Element}
 */
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // 'idle', 'submitting', 'success', 'error'

  const shopDetails = {
    name: "Pragya Printing Press",
    addressLine1: "A.B. Road, Traffic Point, Bus stand, Shajapur, ",
    addressLine2: " Agra - Mumbai Hwy, Laxmi Nagar",
    city: "Shajapur, Madhya Pradesh",
    pincode: "465001",
    // Using the number provided by the user
    phone: "+919425083910",
    email: "pragyaprintingpress@yahoo.com",
    hours: "Mon - Sat: 9:00 AM - 7:30 PM",
    // Using a reliable embed format based on the known coordinates (23.4187738, 76.2750312)
    googleMapsLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2836.5781309854497!2d76.27303038661644!3d23.4187738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396350a13a6cf99f%3A0x60482b21760ac104!2sPragya%20Printing%20Press!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    googleReviewsLink:
      "https://www.google.com/search?q=Pragya+Printing+Press+Shajapur&ludocid=6937172793138837764#lrd=0x396350a13a6cf99f:0x60482b21760ac104,3",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status === "error" || status === "success") setStatus("idle");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("submitting");

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      return;
    }

    // --- Phase 1: Simulate Form Submission ---
    // In Phase 2, this would capture formData and send it to a backend service/email endpoint.
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  const isSubmitting = status === "submitting";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-primary mb-3">
          Get In Touch
        </h1>
        <p className="text-xl text-gray-900 max-w-3xl mx-auto">
          We're here for your e-commerce orders and local custom printing needs.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Column 1: Contact Form */}
        <div className="lg:col-span-2 bg-white p-8 rounded-3xl shadow-2xl border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <MessageSquareText className="w-6 h-6 mr-3 text-green-950" /> Send
            Us a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <Input
                label="Your Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <Input
              label="Subject (Optional)"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />

            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Your Message
              </label>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="p-3 border border-gray-300 rounded-xl focus:ring-indigo-500 focus:border-indigo-500 transition w-full shadow-sm"
              />
            </div>

            {status === "error" && (
              <div className="p-3 bg-red-100 text-red-700 rounded-xl flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2" /> Please fill all
                required fields correctly.
              </div>
            )}
            {status === "success" && (
              <div className="p-3 bg-green-100 text-green-700 rounded-xl flex items-center animate-pulse">
                <CheckCircle className="w-5 h-5 mr-2" /> Message sent
                successfully! We will respond shortly.
              </div>
            )}

            <Button
              type="submit"
              className="py-3 px-8 text-lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
              ) : (
                <Send className="w-5 h-5 mr-2" />
              )}
              {isSubmitting ? "Sending..." : "Submit Inquiry"}
            </Button>
          </form>
        </div>

        {/* Column 2: Shop Details & Contact Info */}
        <div className="lg:col-span-1 space-y-8">
          {/* General Contact Info */}
          <div className="bg-gray-50 p-6 rounded-3xl shadow-xl border border-accent">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Quick Contacts
            </h3>
            <div className="space-y-3">
              <div className="flex items-start text-gray-700">
                <Mail className="w-5 h-5 mr-3 mt-1 text-gray-900 flex-shrink-0" />
                <div>
                  <span className="font-semibold block">Email:</span>
                  {/* FIX: Use mailto: protocol */}
                  <a
                    href={`mailto:${shopDetails.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-indigo-950 font-semibold"
                  >
                    {shopDetails.email}
                  </a>

                  {/* ✅ Fallback Gmail Button */}
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${shopDetails.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-2 text-xs text-primary underline"
                  >
                    Open in Gmail
                  </a>
                </div>
              </div>
              <div className="flex items-start text-gray-700">
                <Phone className="w-5 h-5 mr-3 mt-1 text-gray-900 flex-shrink-0" />
                <div>
                  <span className="font-semibold block">Phone/WhatsApp:</span>
                  {/* FIX: Ensure phone link uses tel: protocol */}
                  <a
                    href={`tel:${shopDetails.phone}`}
                    className="text-sm hover:text-indigo-950 font-semibold"
                  >
                    {shopDetails.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start text-gray-700">
                <Clock className="w-5 h-5 mr-3 mt-1 text-gray-900 flex-shrink-0" />
                <div>
                  <span className="font-semibold block">Hours:</span>
                  <p className="text-sm">{shopDetails.hours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Shop Location */}
          <div className="bg-white p-6 rounded-3xl shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <MapPin className="w-6 h-6 mr-3 text-red-500" /> Our Location
            </h3>
            <p className="text-gray-700 font-semibold">{shopDetails.name}</p>
            <p className="text-sm text-gray-600 mb-4">
              {shopDetails.addressLine1}, {shopDetails.addressLine2},{" "}
              {shopDetails.city} - {shopDetails.pincode}
            </p>

            {/* Google Reviews Link */}
            <a
              href={shopDetails.googleReviewsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-yellow-600 hover:text-yellow-700 flex items-center mb-4"
            >
              <Star className="w-4 h-4 mr-1 fill-yellow-500" /> Read Our Google
              Reviews
            </a>

            {/* Google Maps Embed (Responsive) */}
            <div className="aspect-video overflow-hidden rounded-xl shadow-md border border-gray-200">
              <iframe
                // FIX: Updated to a standard embed link format for reliable display in iframes.
                src={shopDetails.googleMapsLink}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full border-0"
                title="Pragya Printing Press Location"
              />
            </div>
            <p className="mt-4 text-xs text-gray-500">
              **Note on Map & Reviews:** The Reviews link above should lead
              directly to the Google Business Profile page (which is best found
              by searching Google for your business name). The embedded map
              should now display reliably.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
