import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
    Truck, MapPin, DollarSign, CreditCard, ShoppingBag, 
    CheckCircle, User, ArrowRight, Home, LogIn, AlertTriangle
} from 'lucide-react';
import Button from '../components/UI/Button';
import Input from '../components/UI/Input';
import { useCart } from '../context/CartContext'; // Import the hook

/**
 * Checkout Page component for collecting shipping/payment details and finalizing the order.
 * @param {object} props - Component props
 * @param {object | null} props.user - The current user object (null if logged out).
 * @returns {JSX.Element}
 */
const Checkout = ({ user }) => {
    const navigate = useNavigate();
    const { cart, dispatchCart } = useCart();

    // --- CHECK LOGIN STATUS & REDIRECT ---
    useEffect(() => {
        if (user === null) {
            localStorage.setItem('redirect_after_login', '/checkout');
            navigate('/login');
        }
    }, [user, navigate]);


    // --- State Management ---
    const [formData, setFormData] = useState({
        name: user?.name || '',
        email: user?.email || '',
        phone: '',
        address: '',
        city: '',
        pincode: '',
    });
    const [paymentMethod, setPaymentMethod] = useState('cod');
    const [isPlacingOrder, setIsPlacingOrder] = useState(false);
    const [orderStatus, setOrderStatus] = useState(null); 
    const [formErrors, setFormErrors] = useState({}); 

    // FIX: Update form data when the user object finally loads
    useEffect(() => {
        if (user) {
            setFormData(prev => ({
                ...prev,
                name: user.name || prev.name,
                email: user.email || prev.email,
            }));
        }
    }, [user]);

    // --- Calculations (Dynamic Shipping Logic) ---
    const SUB_TOTAL = useMemo(() => cart.reduce((acc, item) => acc + item.price * item.quantity, 0), [cart]);
    const TAX_RATE = 0.05; 
    const TAX_AMOUNT = SUB_TOTAL * TAX_RATE;
    
    // FIX: SHIPPING LOGIC: If "store" is selected, shipping is 0. Otherwise, it's 100 (if cart > 0).
    const actualShipping = useMemo(() => {
        if (cart.length === 0) return 0;
        return paymentMethod === 'store' ? 0 : 100;
    }, [cart, paymentMethod]);

    const GRAND_TOTAL = SUB_TOTAL + TAX_AMOUNT + actualShipping;
    const formatCurrency = (price) => `₹${Math.round(price).toLocaleString('en-IN')}`;

    // --- Handlers & Validation ---
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setFormErrors(prev => ({ ...prev, [name]: undefined }));
    };
    
    const validateForm = () => {
        const errors = {};
        if (!formData.name.trim()) errors.name = "Full Name is required.";
        
        // Check fields required even for local pickup (Name, Phone)
        if (!formData.phone.match(/^\d{10}$/)) errors.phone = "Valid 10-digit Phone is required.";

        // Check shipping fields only if delivery (not paying at store)
        if (paymentMethod !== 'store') {
            if (!formData.address.trim()) errors.address = "Address is required.";
            if (!formData.city.trim()) errors.city = "City is required.";
            if (!formData.pincode.match(/^\d{6}$/)) errors.pincode = "Valid 6-digit Pincode is required.";
        }
        
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };


    const handlePlaceOrder = (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            window.scrollTo(0, 0); 
            return;
        }
        
        setIsPlacingOrder(true);
        
        // --- 1. Persist Contact/Shipping Data to Local Storage ---
        const shippingData = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            address: formData.address,
            city: formData.city,
            pincode: formData.pincode,
        };
        localStorage.setItem('pragya_shipping_details', JSON.stringify(shippingData));


        setTimeout(() => {
            setIsPlacingOrder(false);
            setOrderStatus('success');
            
            // 2. Clear Context Cart
            dispatchCart({ type: 'CLEAR_CART' });
            localStorage.removeItem('redirect_after_login');
        }, 2000);
    };


    // --- Conditional Rendering Guards ---
    if (user === null) {
         return (
             <div className="max-w-4xl mx-auto px-4 py-20 text-center min-h-[70vh]">
                 <LogIn className="w-16 h-16 text-indigo-500 mx-auto mb-4 animate-bounce" />
                 <h1 className="text-3xl font-bold text-indigo-700 mb-4">Securing your Checkout...</h1>
                 <p className="text-gray-600 mb-6">Redirecting to login to verify your identity before purchase.</p>
             </div>
         );
    }
    
    if (cart.length === 0 && !orderStatus) {
        return (
            <div className="max-w-4xl mx-auto px-4 py-20 text-center min-h-[70vh]">
                <ShoppingBag className="w-16 h-16 text-red-500 mx-auto mb-4" />
                <h1 className="text-3xl font-bold text-red-600 mb-4">Cart is Empty</h1>
                <p className="text-gray-600 mb-6">Please add items to your cart before checking out.</p>
                <Button onClick={() => navigate('/products')} className="flex items-center mx-auto">
                    <ArrowRight className="w-4 h-4 mr-2" /> Go to Shop
                </Button>
            </div>
        );
    }

    // --- Success View ---
    if (orderStatus === 'success') {
        return (
            <div className="max-w-4xl mx-auto px-4 py-20 text-center min-h-[70vh] bg-green-50 rounded-3xl shadow-2xl">
                <CheckCircle className="w-20 h-20 text-green-600 mx-auto mb-6 animate-pulse" />
                <h1 className="text-4xl font-extrabold text-green-800 mb-3">Order Placed Successfully!</h1>
                <p className="text-xl text-gray-700 mb-6">Thank you, {formData.name.split(' ')[0]}! Your order has been received.</p>
                <p className="text-gray-600 mb-8">We'll notify you once processing is complete.</p>
                
                <div className="flex justify-center gap-4">
                    <Button onClick={() => navigate('/products')} variant="outline" className="text-green-600 border-green-600 hover:bg-green-100">
                        <ShoppingBag className="w-5 h-5 mr-2" /> Shop More
                    </Button>
                    <Button onClick={() => navigate('/')} variant="primary">
                        <Home className="w-5 h-5 mr-2" /> Go to Home
                    </Button>
                </div>
            </div>
        );
    }

    // --- Checkout Form View ---
    const isLocalPickup = paymentMethod === 'store';
    const isDelivery = !isLocalPickup;

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-8 border-b pb-2">
                Secure Checkout
            </h1>

            {/* Global Error Message */}
            {Object.keys(formErrors).length > 0 && (
                <div className="p-4 mb-6 bg-red-100 border-l-4 border-red-500 text-red-700 rounded-lg flex items-center shadow-md">
                    <AlertTriangle className="w-6 h-6 mr-3 flex-shrink-0" />
                    <p className="font-semibold">Please correct the {Object.keys(formErrors).length} errors below before placing your order.</p>
                </div>
            )}

            <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Column 1 & 2: Shipping and Payment */}
                <div className="lg:col-span-2 space-y-8">
                    
                    {/* Payment Method Section (Always Visible) */}
                    <div className="bg-white p-6 rounded-3xl shadow-xl border border-gray-100">
                        <h2 className="text-2xl font-bold text-indigo-700 mb-6 flex items-center">
                            <DollarSign className="w-6 h-6 mr-3" /> 1. Payment Method
                        </h2>
                        
                        <div className="space-y-4">
                            {/* Option 1: Cash on Delivery (COD) */}
                            <label className={`flex items-center p-4 rounded-xl cursor-pointer transition-all duration-200 border-2 ${paymentMethod === 'cod' ? 'bg-indigo-50 border-indigo-600' : 'bg-gray-50 border-gray-200 hover:bg-gray-100'}`}>
                                <input 
                                    type="radio" 
                                    name="payment" 
                                    value="cod" 
                                    checked={paymentMethod === 'cod'} 
                                    onChange={() => setPaymentMethod('cod')} 
                                    className="h-5 w-5 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                                />
                                <div className="ml-4 flex items-center justify-between w-full">
                                    <span className="font-semibold text-gray-800">Cash on Delivery (COD)</span>
                                    <Truck className="w-6 h-6 text-blue-600" />
                                </div>
                            </label>
                            
                            {/* Option 2: Pay at Store (Local Pickup/Service) - WAIVES SHIPPING FEE */}
                            <label className={`flex items-center p-4 rounded-xl cursor-pointer transition-all duration-200 border-2 ${paymentMethod === 'store' ? 'bg-indigo-50 border-indigo-600' : 'bg-gray-50 border-gray-200 hover:bg-gray-100'}`}>
                                <input 
                                    type="radio" 
                                    name="payment" 
                                    value="store" 
                                    checked={paymentMethod === 'store'} 
                                    onChange={() => setPaymentMethod('store')} 
                                    className="h-5 w-5 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                                />
                                <div className="ml-4 flex items-center justify-between w-full">
                                    <span className="font-semibold text-gray-800">Pay at Store (Local Pickup)</span>
                                    <MapPin className="w-6 h-6 text-red-600" />
                                </div>
                                {isLocalPickup && (
                                     <span className='ml-4 text-sm text-green-600 font-bold'>+ FREE Shipping</span>
                                )}
                            </label>

                            {/* Option 3: Online Payment (Disabled in Phase 1) */}
                            <div className="flex items-center p-4 rounded-xl border-2 border-dashed bg-gray-100 opacity-60 cursor-not-allowed">
                                <input type="radio" disabled className="h-5 w-5 border-gray-300" />
                                <div className="ml-4 flex items-center justify-between w-full">
                                    <span className="font-semibold text-gray-500">Online Payment (Coming Soon)</span>
                                    <CreditCard className="w-6 h-6 text-gray-400" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Shipping Address Section (Conditional Visibility/Requirement based on Payment) */}
                    <div className="bg-white p-6 rounded-3xl shadow-xl border border-gray-100">
                        <h2 className="text-2xl font-bold text-indigo-700 mb-6 flex items-center">
                            <Truck className="w-6 h-6 mr-3" /> 2. Delivery Information {isDelivery && <span className='text-sm text-red-500 ml-2'>(Required)</span>}
                        </h2>
                        
                        {isLocalPickup && (
                            <div className="p-4 mb-4 bg-yellow-100 rounded-xl text-yellow-800">
                                <p className='font-semibold'>Local Pickup Selected:</p>
                                <p className='text-sm'>Please confirm your name and contact details below for notification when your order is ready at the store (Madhya Pradesh).</p>
                            </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            
                            {/* Full Name */}
                            <Input label="Full Name" name="name" value={formData.name} onChange={handleChange} required error={formErrors.name} />
                            
                            {/* Email Address (Disabled for logged-in user) */}
                            <Input 
                                label="Email Address" 
                                name="email" 
                                type="email" 
                                value={formData.email} 
                                onChange={!user ? handleChange : undefined} 
                                required 
                                disabled={!!user} 
                                className="bg-gray-100 cursor-not-allowed" 
                            />
                            
                            {/* Phone Number (Required only for Delivery) */}
                            <Input 
                                label="Phone Number" 
                                name="phone" 
                                type="tel" 
                                value={formData.phone} 
                                onChange={handleChange} 
                                required 
                                error={formErrors.phone} 
                            />
                            
                            {/* Pincode (Required only for Delivery) */}
                            <Input 
                                label="Pincode" 
                                name="pincode" 
                                value={formData.pincode} 
                                onChange={isDelivery ? handleChange : undefined} 
                                required={isDelivery} 
                                disabled={isLocalPickup}
                                error={formErrors.pincode} 
                                className={isLocalPickup ? 'bg-gray-100' : ''}
                            />
                            
                            {/* Address (Required only for Delivery) */}
                            <div className="md:col-span-2">
                                <Input 
                                    label="Street Address / Locality" 
                                    name="address" 
                                    value={formData.address} 
                                    onChange={isDelivery ? handleChange : undefined} 
                                    required={isDelivery} 
                                    disabled={isLocalPickup}
                                    error={formErrors.address} 
                                    className={isLocalPickup ? 'bg-gray-100' : ''}
                                />
                            </div>
                            
                            {/* City (Required only for Delivery) */}
                            <Input 
                                label="City / Town" 
                                name="city" 
                                value={formData.city} 
                                onChange={isDelivery ? handleChange : undefined} 
                                required={isDelivery} 
                                disabled={isLocalPickup}
                                error={formErrors.city} 
                                className={isLocalPickup ? 'bg-gray-100' : ''}
                            />
                            
                            {/* State (Always disabled, but clear for IN/MP) */}
                            <Input label="State" value="Madhya Pradesh" disabled className="bg-gray-100 cursor-not-allowed" />
                        </div>
                    </div>
                </div>

                {/* Column 3: Order Summary (Sticky) */}
                <div className="lg:col-span-1 sticky top-24 h-fit">
                    <div className="bg-indigo-50 p-6 rounded-3xl shadow-2xl border border-indigo-100">
                        <h2 className="text-2xl font-bold text-indigo-800 mb-4 border-b border-indigo-200 pb-3 flex items-center">
                            <ShoppingBag className='w-5 h-5 mr-2' /> Order Summary
                        </h2>
                        
                        {/* Item List (Condensed) */}
                        <div className="border-b border-indigo-200 pb-4 mb-4 space-y-2 max-h-48 overflow-y-auto">
                            {cart.map(item => (
                                <div key={item.itemId} className="flex justify-between text-sm text-gray-700">
                                    <span className='truncate pr-2'>{item.quantity}x {item.product.name} ({item.selectedSize})</span>
                                    <span>{formatCurrency(item.price * item.quantity)}</span>
                                </div>
                            ))}
                        </div>

                        {/* Totals */}
                        <div className="space-y-3 text-gray-700 text-md mb-6">
                            <div className="flex justify-between"><span>Subtotal</span><span className="font-semibold">{formatCurrency(SUB_TOTAL)}</span></div>
                            <div className="flex justify-between">
                                <span>Shipping Fee</span>
                                <span className="font-semibold">
                                    {actualShipping === 0 ? 'FREE' : formatCurrency(actualShipping)}
                                </span>
                            </div>
                            <div className="flex justify-between"><span>Taxes (5%)</span><span className="font-semibold">{formatCurrency(TAX_AMOUNT)}</span></div>
                            <div className="flex justify-between pt-3 border-t border-indigo-200 text-xl font-extrabold text-indigo-900">
                                <span>Total Payable</span>
                                <span>{formatCurrency(GRAND_TOTAL)}</span>
                            </div>
                        </div>

                        {/* Place Order Button */}
                        <Button
                            type="submit"
                            className="w-full py-3 text-lg mt-4 flex items-center justify-center"
                            disabled={isPlacingOrder || cart.length === 0}
                        >
                            {isPlacingOrder ? (
                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                            ) : (
                                <CheckCircle className='w-5 h-5 mr-2'/>
                            )}
                            {isPlacingOrder ? 'Processing...' : `Place Order (${formatCurrency(GRAND_TOTAL)})`}
                        </Button>
                        
                        <p className='mt-3 text-xs text-center text-gray-600'>You are paying via {paymentMethod === 'cod' ? 'Cash on Delivery' : 'Pay at Store'}.</p>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Checkout;