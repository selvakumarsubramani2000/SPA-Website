import React, { useState } from 'react';
import { 
  X, 
  MessageCircle, 
  ShoppingBag, 
  Star, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  Check, 
  Calculator,
  Heart,
  Share2
} from 'lucide-react';
import { storeInfo } from '../data/products';

export default function ProductModal({ 
  product, 
  onClose, 
  onAddToCart, 
  onToggleWishlist, 
  isWishlisted 
}) {
  const [pincode, setPincode] = useState('');
  const [pincodeStatus, setPincodeStatus] = useState(null);
  const [copiedLink, setCopiedLink] = useState(false);

  if (!product) return null;

  const handlePincodeCheck = (e) => {
    e.preventDefault();
    if (pincode.trim().length === 6) {
      setPincodeStatus({
        success: true,
        message: 'Delivery Available! Free doorstep delivery in 24-48 hours.'
      });
    } else {
      setPincodeStatus({
        success: false,
        message: 'Please enter a valid 6-digit pin code.'
      });
    }
  };

  const emi3Month = Math.round(product.price / 3);
  const emi6Month = Math.round((product.price * 1.05) / 6);

  const whatsappMessage = encodeURIComponent(
    `Hello! I want to order/inquire about: *${product.name}*\nPrice: ₹${product.price.toLocaleString('en-IN')}\nCategory: ${product.categoryLabel}\nPlease let me know delivery schedule and payment on delivery options.`
  );
  const whatsappUrl = `https://wa.me/${storeInfo.whatsappNumber.replace('+', '')}?text=${whatsappMessage}`;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: `Check out ${product.name} at ${storeInfo.name} for ₹${product.price}!`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div 
        className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-gray-100 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/90 hover:bg-gray-100 text-gray-700 shadow-md transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 sm:p-8">
          
          {/* Left Column: Image Preview & Badges */}
          <div className="space-y-4">
            <div className="relative rounded-2xl overflow-hidden bg-gray-100 aspect-square border border-gray-200">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80';
                }}
              />
              <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                {product.badge && (
                  <span className="px-3 py-1 text-xs font-bold uppercase rounded-lg bg-amber-600 text-white shadow">
                    {product.badge}
                  </span>
                )}
                <span className="px-2.5 py-0.5 text-xs font-bold rounded-md bg-emerald-600 text-white shadow">
                  {product.discount}
                </span>
              </div>
            </div>

            {/* Quick action bar below image */}
            <div className="flex items-center justify-between text-xs text-gray-600 bg-gray-50 p-3 rounded-xl border border-gray-200/80">
              <button
                onClick={() => onToggleWishlist(product)}
                className="flex items-center gap-1.5 font-semibold hover:text-rose-600 transition"
              >
                <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-rose-500 text-rose-500' : ''}`} />
                <span>{isWishlisted ? 'Saved in Wishlist' : 'Add to Wishlist'}</span>
              </button>
              <button
                onClick={handleShare}
                className="flex items-center gap-1.5 font-semibold hover:text-amber-700 transition"
              >
                <Share2 className="w-4 h-4" />
                <span>{copiedLink ? 'Link Copied!' : 'Share Product'}</span>
              </button>
            </div>

            {/* EMI estimation badge */}
            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs">
              <div className="flex items-center gap-2 font-bold text-amber-900 mb-1">
                <Calculator className="w-4 h-4 text-amber-700" />
                <span>Easy Monthly Installment (EMI)</span>
              </div>
              <p className="text-gray-600 text-[11px] leading-relaxed">
                Pay in 3 months at <strong>₹{emi3Month.toLocaleString('en-IN')}/month</strong> or 6 months at <strong>₹{emi6Month.toLocaleString('en-IN')}/month</strong> with Bajaj Finserv / Credit Cards.
              </p>
            </div>
          </div>

          {/* Right Column: Details, Specs, Actions */}
          <div className="flex flex-col justify-between space-y-5">
            <div>
              {/* Category & Rating */}
              <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                <span className="font-bold text-amber-700 uppercase tracking-wider">
                  {product.categoryLabel}
                </span>
                <div className="flex items-center gap-1 bg-amber-50 px-2.5 py-1 rounded-md text-amber-900 font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  <span>{product.rating}</span>
                  <span className="text-gray-400 font-normal">({product.reviewsCount} reviews)</span>
                </div>
              </div>

              {/* Title */}
              <h2 className="text-xl sm:text-2xl font-black text-gray-900 leading-snug">
                {product.name}
              </h2>

              {/* Price Row */}
              <div className="mt-3 flex items-baseline gap-3">
                <span className="text-2xl sm:text-3xl font-black text-gray-900">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                <span className="text-base text-gray-400 line-through">
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </span>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-md">
                  {product.discount}
                </span>
              </div>
              <p className="text-xs text-emerald-700 font-semibold mt-0.5">
                Inclusive of all taxes & local warranty
              </p>

              {/* Description */}
              <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                {product.description}
              </p>

              {/* Technical Specifications Table */}
              <div className="mt-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-2.5">
                  Technical Specifications
                </h4>
                <div className="bg-gray-50 rounded-xl p-3 border border-gray-200 text-xs divide-y divide-gray-200">
                  {Object.entries(product.specs || {}).map(([key, val]) => (
                    <div key={key} className="py-1.5 flex justify-between gap-4">
                      <span className="font-semibold text-gray-600">{key}</span>
                      <span className="text-gray-900 font-medium text-right">{val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pincode Delivery Check */}
              <div className="mt-5">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-900 block mb-1.5">
                  Check Delivery in Your Area
                </label>
                <form onSubmit={handlePincodeCheck} className="flex gap-2">
                  <input
                    type="text"
                    maxLength={6}
                    placeholder="Enter 6-digit Pincode"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    className="flex-1 px-3.5 py-2 text-xs border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white text-xs font-bold rounded-xl transition"
                  >
                    Check
                  </button>
                </form>
                {pincodeStatus && (
                  <p className={`text-xs mt-1.5 font-medium flex items-center gap-1 ${
                    pincodeStatus.success ? 'text-emerald-700' : 'text-rose-600'
                  }`}>
                    {pincodeStatus.success && <Check className="w-3.5 h-3.5" />}
                    {pincodeStatus.message}
                  </p>
                )}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-5 border-t border-gray-200 space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20 transition"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Order via WhatsApp</span>
                </a>

                <button
                  onClick={() => {
                    onAddToCart(product);
                    onClose();
                  }}
                  className="w-full py-3 px-4 bg-amber-600 hover:bg-amber-700 active:scale-95 text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 shadow-md shadow-amber-600/25 transition"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Cart</span>
                </button>
              </div>

              {/* Trust Guarantee Snippet */}
              <div className="flex items-center justify-around text-[11px] text-gray-500 pt-2">
                <span className="flex items-center gap-1">
                  <Truck className="w-3.5 h-3.5 text-amber-600" /> Free Delivery
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Genuine Warranty
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <RotateCcw className="w-3.5 h-3.5 text-blue-600" /> 7-Day Exchange
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
