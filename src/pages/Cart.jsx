import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ShoppingCart, ArrowLeft, Trash2, Minus, Plus, Tag,
  CheckCircle, Package, X, DollarSign, MapPin
} from 'lucide-react';

import Button from '../components/UI/Button';
import { useCart } from '../context/CartContext'; 

/**
 * Cart Page component to display items, calculate totals, and link to checkout.
 * ENHANCEMENT: Refactored for clearer layout and professional styling.
 * FIX: Removed unnecessary props; uses useCart() hook.
 * @returns {JSX.Element}
 */
const Cart = () => {
  const navigate = useNavigate();
  // FIX: Destructure cart and dispatchCart directly from the hook
  const { cart, dispatchCart } = useCart();
  const [notification, setNotification] = useState(null);

  // --- Calculations ---
  // FIX: cart is now guaranteed to be an array from the hook, fixing the error.
  const SUB_TOTAL = useMemo(
    () => cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
    [cart]
  );

  // Simplified fixed calculations for Phase 1
  const SHIPPING_FEE = 100; 
  const TAX_RATE = 0.05; 

  const TAX_AMOUNT = SUB_TOTAL * TAX_RATE;
  const actualShipping = SUB_TOTAL > 0 ? SHIPPING_FEE : 0;
  const GRAND_TOTAL = SUB_TOTAL + TAX_AMOUNT + actualShipping;

  // --- Handlers ---
  const formatCurrency = price =>
    `₹${Math.round(price).toLocaleString('en-IN')}`;

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      removeItem(itemId);
    } else {
      dispatchCart({
        type: 'UPDATE_QUANTITY',
        payload: { itemId, quantity: newQuantity }
      });
    }
  };

  const removeItem = itemId => {
    dispatchCart({ type: 'REMOVE_ITEM', payload: { itemId } });
    setNotification({ message: 'Item removed from cart.', type: 'danger' });
    setTimeout(() => setNotification(null), 3000);
  };

  const proceedToCheckout = () => {
    if (cart.length > 0) {
      navigate('/checkout');
    } else {
      setNotification({
        message: 'Your cart is empty! Please add items before checking out.',
        type: 'warning'
      });
      setTimeout(() => setNotification(null), 3000);
    }
  };

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 min-h-[80vh]'>
      <h1 className='text-4xl font-extrabold text-gray-900 mb-8 border-b pb-2 flex items-center'>
        <ShoppingCart className='w-8 h-8 mr-3 text-indigo-600' /> Your Shopping Cart
      </h1>

      {/* Global Notification/Toast */}
      {notification && (
        <div
          className={`p-4 mb-4 rounded-xl shadow-lg flex items-center justify-between animate-fadeInUp 
          ${notification.type === 'danger' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'}`}
        >
          <span>{notification.message}</span>
          <X className='w-5 h-5 cursor-pointer' onClick={() => setNotification(null)} />
        </div>
      )}

      {cart.length === 0 ? (
        <div className='text-center py-20 bg-gray-50 rounded-2xl shadow-lg border-4 border-dashed border-gray-300'>
          <ShoppingCart className='w-16 h-16 text-gray-400 mx-auto mb-4' />
          <h2 className='text-2xl text-gray-600 font-semibold'>Your cart is empty!</h2>
          <p className='text-gray-500 mt-2'>Time to fill it with awesome prints.</p>
          <Button onClick={() => navigate('/products')} className='mt-6'>
            <ArrowLeft className='w-4 h-4 mr-2' /> Start Shopping
          </Button>
        </div>
      ) : (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* Cart Items List - Span 2 columns on large screens */}
          <div className='lg:col-span-2 space-y-6'>
            {cart.map(item => (
              <div
                key={item.itemId}
                className='flex flex-col sm:flex-row items-center bg-white p-4 rounded-2xl shadow-xl border border-gray-100 transition duration-300 hover:shadow-2xl'
              >
                {/* Item Image */}
                <div className='w-24 h-24 flex-shrink-0 overflow-hidden rounded-xl mr-4 mb-4 sm:mb-0 border border-gray-200'>
                  <img
                    src={item.product.thumbnail || item.product.images?.[0] || 'https://placehold.co/100x100/e0e7ff/1e40af?text=PR'}
                    alt={item.product.name}
                    className='w-full h-full object-cover'
                  />
                </div>

                {/* Item Details */}
                <div className='flex-grow text-center sm:text-left'>
                  <h3 className='text-lg font-bold text-gray-900 mb-1'>{item.product.name}</h3>
                  <p className='text-sm text-gray-500 mb-2'>
                    <span className='font-semibold text-indigo-500'>Size: {item.selectedSize}</span> | 
                    <span className='font-semibold text-indigo-500'> Type: {item.selectedType}</span>
                  </p>
                  <p className='text-xl font-bold text-indigo-600'>
                    {formatCurrency(item.price * item.quantity)}
                  </p>
                </div>

                {/* Quantity Control */}
                <div className='flex items-center space-x-2 mt-3 sm:mt-0 sm:ml-4'>
                  <div className='flex items-center border border-gray-300 rounded-xl'>
                    <button
                      onClick={() => updateQuantity(item.itemId, item.quantity - 1)}
                      className='p-2 text-gray-600 hover:bg-gray-100 rounded-l-xl transition'
                      aria-label='Decrease quantity'
                    >
                      <Minus className='w-4 h-4' />
                    </button>
                    <span className='w-8 text-center text-md font-medium'>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.itemId, item.quantity + 1)}
                      className='p-2 text-gray-600 hover:bg-gray-100 rounded-r-xl transition'
                      aria-label='Increase quantity'
                    >
                      <Plus className='w-4 h-4' />
                    </button>
                  </div>

                  {/* Remove Button */}
                  <Button
                    variant='danger'
                    onClick={() => removeItem(item.itemId)}
                    className='p-3 ml-4'
                  >
                    <Trash2 className='w-5 h-5' />
                  </Button>
                </div>
              </div>
            ))}

            <div className='p-4 bg-gray-100 rounded-xl text-gray-600 flex items-center shadow-inner'>
              <Package className='w-5 h-5 mr-3 flex-shrink-0 text-indigo-600' />
              Shipping is estimated. Final cost confirmed upon entering address in checkout.
            </div>
          </div>

          {/* Order Summary Card */}
          <div className='lg:col-span-1 sticky top-24 h-fit bg-indigo-50 p-6 rounded-3xl shadow-2xl border border-indigo-100 animate-fadeInRight'>
            <h2 className='text-2xl font-bold text-indigo-800 mb-4 border-b border-indigo-200 pb-3'>
              Order Summary
            </h2>

            {/* Summary Details */}
            <div className='space-y-3 text-gray-700 text-md mb-6'>
              <div className='flex justify-between'>
                <span>Subtotal ({cart.length} unique items)</span>
                <span className='font-semibold'>{formatCurrency(SUB_TOTAL)}</span>
              </div>
              <div className='flex justify-between'>
                <span>Estimated Shipping</span>
                <span className='font-semibold'>{actualShipping > 0 ? formatCurrency(actualShipping) : 'FREE'}</span>
              </div>
              <div className='flex justify-between'>
                <span>Taxes (5% GST)</span>
                <span className='font-semibold'>{formatCurrency(TAX_AMOUNT)}</span>
              </div>

              <div className='flex justify-between pt-3 border-t border-indigo-200 text-xl font-extrabold text-indigo-900'>
                <span>Grand Total</span>
                <span>{formatCurrency(GRAND_TOTAL)}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <Button
              onClick={proceedToCheckout}
              className='w-full py-3 text-lg mt-4 flex items-center justify-center'
              disabled={cart.length === 0}
            >
              <CheckCircle className='w-5 h-5 mr-2' /> Proceed to Checkout
            </Button>

            {/* Local Pickup Note */}
            <div className='mt-6 text-xs text-gray-500 flex items-center justify-center border-t border-indigo-200 pt-4'>
              <MapPin className='w-4 h-4 mr-2 flex-shrink-0' />
              Option to "Pay at Store" available at checkout.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;