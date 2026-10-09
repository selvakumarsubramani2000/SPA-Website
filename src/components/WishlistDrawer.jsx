import React from 'react';
import { 
  X, 
  Trash2, 
  Heart, 
  ShoppingBag, 
  MessageCircle 
} from 'lucide-react';
import { storeInfo } from '../data/products';

export default function WishlistDrawer({ 
  isOpen, 
  onClose, 
  wishlistItems, 
  onRemoveWishlist, 
  onAddToCart 
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm animate-fade-in flex justify-end">
      <div 
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-gray-200 flex items-center justify-between bg-rose-50/50">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-rose-500 text-white rounded-xl shadow-sm">
              <Heart className="w-5 h-5 fill-current" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-base">Your Saved Items</h3>
              <p className="text-xs text-gray-500">{wishlistItems.length} items saved for later</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Wishlist Items */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3">
          {wishlistItems.length === 0 ? (
            <div className="text-center py-16 space-y-4">
              <div className="w-16 h-16 bg-rose-100 text-rose-500 rounded-2xl flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-gray-800 text-base">No saved items yet</h4>
              <p className="text-xs text-gray-500 max-w-xs mx-auto">
                Click the heart icon on any product to save it here while you decide.
              </p>
            </div>
          ) : (
            wishlistItems.map((item) => {
              const whatsappUrl = `https://wa.me/${storeInfo.whatsappNumber.replace('+', '')}?text=${encodeURIComponent(
                `Hello! I saved *${item.name}* (₹${item.price.toLocaleString('en-IN')}) in my wishlist. Can you share more photos and details?`
              )}`;

              return (
                <div 
                  key={item.id} 
                  className="p-3 bg-white border border-gray-200 rounded-2xl flex gap-3 shadow-xs hover:border-amber-300 transition"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-xl object-cover bg-gray-100 flex-shrink-0"
                  />

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-1">
                        <h4 className="font-bold text-xs sm:text-sm text-gray-900 line-clamp-1">
                          {item.name}
                        </h4>
                        <button
                          onClick={() => onRemoveWishlist(item.id)}
                          className="text-gray-400 hover:text-rose-600 p-1"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="flex items-baseline gap-2 mt-1">
                        <span className="font-extrabold text-sm text-gray-900">
                          ₹{item.price.toLocaleString('en-IN')}
                        </span>
                        <span className="text-xs text-gray-400 line-through">
                          ₹{item.originalPrice.toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mt-3">
                      <button
                        onClick={() => {
                          onAddToCart(item);
                          onRemoveWishlist(item.id);
                        }}
                        className="flex-1 py-1.5 px-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-xs font-bold flex items-center justify-center gap-1 shadow-xs transition"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Move to Cart</span>
                      </button>

                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="py-1.5 px-2.5 bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 rounded-lg text-xs font-bold flex items-center justify-center transition"
                        title="Chat on WhatsApp"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <button
            onClick={onClose}
            className="w-full py-2.5 bg-gray-900 text-white rounded-xl text-xs font-bold hover:bg-gray-800 transition"
          >
            Continue Browsing
          </button>
        </div>
      </div>
    </div>
  );
}
