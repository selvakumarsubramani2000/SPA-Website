import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  MessageCircle, 
  ShieldCheck, 
  Truck,
  ArrowRight
} from 'lucide-react';
import { storeInfo } from '../data/products';

export default function CartDrawer({ 
  isOpen, 
  onClose, 
  cartItems, 
  onUpdateQuantity, 
  onRemoveItem,
  onClearCart 
}) {
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);

  if (!isOpen) return null;

  const totalAmount = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const totalOriginal = cartItems.reduce((acc, item) => acc + (item.originalPrice * item.quantity), 0);
  const totalSavings = totalOriginal - totalAmount;

  const handleWhatsAppCheckout = () => {
    let orderText = `*NEW ORDER - ${storeInfo.name}*\n\n`;
    orderText += `*ITEMS ORDERED:*\n`;
    cartItems.forEach((item, idx) => {
      orderText += `${idx + 1}. *${item.name}*\n   Qty: ${item.quantity} × ₹${item.price.toLocaleString('en-IN')} = ₹${(item.price * item.quantity).toLocaleString('en-IN')}\n`;
    });
    orderText += `\n*TOTAL ORDER VALUE:* ₹${totalAmount.toLocaleString('en-IN')}\n`;
    orderText += `*TOTAL SAVINGS:* ₹${totalSavings.toLocaleString('en-IN')}\n\n`;
    
    if (customerName) orderText += `*Customer Name:* ${customerName}\n`;
    if (customerPhone) orderText += `*Phone Number:* ${customerPhone}\n`;
    if (deliveryAddress) orderText += `*Delivery Address:* ${deliveryAddress}\n`;
    orderText += `*Preferred Payment:* Cash on Delivery (COD) / UPI at Doorstep\n\n`;
    orderText += `Please confirm my order and send the estimated delivery time. Thank you!`;

    const encoded = encodeURIComponent(orderText);
    const url = `https://wa.me/${storeInfo.whatsappNumber.replace('+', '')}?text=${encoded}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm animate-fade-in flex justify-end">
      <div 
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 border-b border-gray-200 flex items-center justify-between bg-amber-50/50">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-amber-600 text-white rounded-xl shadow-sm">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-base">Your Order Cart</h3>
              <p className="text-xs text-gray-500">
                {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} selected
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {cartItems.length === 0 ? (
            <div className="text-center py-16 space-y-4">
              <div className="w-16 h-16 bg-amber-100/70 text-amber-700 rounded-2xl flex items-center justify-center mx-auto">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-gray-800 text-base">Your cart is currently empty</h4>
              <p className="text-xs text-gray-500 max-w-xs mx-auto">
                Browse our collection of home furniture and kitchen appliances and add items to your cart.
              </p>
              <button
                onClick={onClose}
                className="px-5 py-2.5 bg-amber-600 text-white font-semibold text-xs rounded-xl shadow-md hover:bg-amber-700 transition"
              >
                Browse Products
              </button>
            </div>
          ) : (
            <>
              {/* Items List */}
              <div className="space-y-3">
                {cartItems.map((item) => (
                  <div 
                    key={item.id} 
                    className="p-3 bg-white border border-gray-200 rounded-2xl flex gap-3 shadow-xs hover:border-amber-300 transition"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-18 h-18 sm:w-20 sm:h-20 rounded-xl object-cover bg-gray-100 flex-shrink-0"
                    />

                    <div className="flex-1 flex flex-col justify-between">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h4 className="font-bold text-xs sm:text-sm text-gray-900 line-clamp-1">
                            {item.name}
                          </h4>
                          <span className="text-[11px] text-amber-700 font-medium">
                            ₹{item.price.toLocaleString('en-IN')} each
                          </span>
                        </div>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="text-gray-400 hover:text-rose-600 p-1"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Quantity Controls & Subtotal */}
                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-100">
                        <div className="flex items-center gap-2 border border-gray-200 rounded-lg p-0.5 bg-gray-50">
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-white rounded text-gray-600 hover:text-gray-900"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-bold px-2 text-gray-800">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-white rounded text-gray-600 hover:text-gray-900"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <span className="font-extrabold text-xs sm:text-sm text-gray-900">
                          ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Delivery Details Accordion / Fields */}
              <div className="pt-2">
                <button
                  onClick={() => setShowCheckoutForm(!showCheckoutForm)}
                  className="w-full py-2 px-3 text-xs font-semibold text-amber-800 bg-amber-50 rounded-xl border border-amber-200/80 flex items-center justify-between"
                >
                  <span>{showCheckoutForm ? 'Hide Delivery Details' : '+ Add Name & Address for Fast Order (Optional)'}</span>
                  <span className="text-amber-600">{showCheckoutForm ? '▲' : '▼'}</span>
                </button>

                {showCheckoutForm && (
                  <div className="mt-2.5 p-3.5 bg-gray-50 rounded-xl border border-gray-200 space-y-2.5 text-xs animate-fade-in">
                    <div>
                      <label className="block font-medium text-gray-700 mb-1">Your Full Name</label>
                      <input
                        type="text"
                        placeholder="e.g. Suresh Kumar"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        className="w-full px-3 py-1.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block font-medium text-gray-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="e.g. 9876543210"
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        className="w-full px-3 py-1.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block font-medium text-gray-700 mb-1">Delivery Address & Town</label>
                      <textarea
                        rows={2}
                        placeholder="Street, Landmark, City & Pincode"
                        value={deliveryAddress}
                        onChange={(e) => setDeliveryAddress(e.target.value)}
                        className="w-full px-3 py-1.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-500"
                      />
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        {/* Drawer Footer / Checkout Area */}
        {cartItems.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-gray-200 bg-gray-50/80 space-y-3">
            {/* Price Breakdown */}
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-gray-500">
                <span>Items Total (MRP)</span>
                <span className="line-through">₹{totalOriginal.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-emerald-700 font-medium">
                <span>Special Discount Savings</span>
                <span>- ₹{totalSavings.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Doorstep Delivery</span>
                <span className="text-emerald-700 font-bold">FREE</span>
              </div>
              <div className="flex justify-between text-base font-extrabold text-gray-900 pt-2 border-t border-gray-200">
                <span>Final Payable</span>
                <span className="text-amber-700">₹{totalAmount.toLocaleString('en-IN')}</span>
              </div>
            </div>

            {/* Direct WhatsApp Checkout Button */}
            <button
              onClick={handleWhatsAppCheckout}
              className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold text-sm rounded-xl shadow-lg shadow-emerald-600/25 flex items-center justify-center gap-2 transition"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Checkout Order on WhatsApp</span>
              <ArrowRight className="w-4 h-4 ml-auto" />
            </button>

            <p className="text-[11px] text-center text-gray-500">
              No online card needed • Inspect products and pay Cash on Delivery!
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
