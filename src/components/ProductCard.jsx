import React from 'react';
import { 
  Heart, 
  MessageCircle, 
  ShoppingBag, 
  Star, 
  CheckCircle2, 
  Eye,
  Truck
} from 'lucide-react';
import { storeInfo } from '../data/products';

export default function ProductCard({ 
  product, 
  onSelectProduct, 
  onAddToCart, 
  onToggleWishlist, 
  isWishlisted 
}) {
  const whatsappUrl = `https://wa.me/${storeInfo.whatsappNumber.replace('+', '')}?text=${encodeURIComponent(
    `Hello! I want to order/inquire about: *${product.name}* (Price: ₹${product.price.toLocaleString('en-IN')}). Is it currently available for doorstep delivery?`
  )}`;

  return (
    <div className="group bg-white rounded-2xl border border-gray-200/90 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300 flex flex-col overflow-hidden relative">
      
      {/* Top Image Container */}
      <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden cursor-pointer" onClick={() => onSelectProduct(product)}>
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            // High reliability fallback image if offline or blocked
            e.target.src = 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80';
          }}
        />

        {/* Overlay Dark Gradient on hover */}
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition-colors"></div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1 items-start z-10">
          {product.badge && (
            <span className="px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider rounded-lg bg-amber-600 text-white shadow-sm">
              {product.badge}
            </span>
          )}
          <span className="px-2 py-0.5 text-[10px] font-bold rounded-md bg-emerald-600 text-white shadow-sm">
            {product.discount}
          </span>
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product);
          }}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition shadow-md z-10 ${
            isWishlisted 
              ? 'bg-rose-500 text-white scale-110' 
              : 'bg-white/80 hover:bg-white text-gray-700 hover:text-rose-600'
          }`}
          aria-label="Save to Wishlist"
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
        </button>

        {/* Hover Quick View Pill */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
          <span className="px-3.5 py-1.5 rounded-full bg-white/95 text-gray-800 text-xs font-semibold shadow-md flex items-center gap-1.5 whitespace-nowrap">
            <Eye className="w-3.5 h-3.5 text-amber-600" /> Quick View & Specs
          </span>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Category & Rating */}
          <div className="flex items-center justify-between text-xs text-gray-500 mb-1.5">
            <span className="font-semibold text-amber-700 uppercase tracking-wider text-[11px]">
              {product.categoryLabel}
            </span>
            <div className="flex items-center gap-1 bg-amber-50 px-2 py-0.5 rounded-md text-amber-900 font-bold">
              <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
              <span>{product.rating}</span>
              <span className="text-gray-400 font-normal">({product.reviewsCount})</span>
            </div>
          </div>

          {/* Product Title */}
          <h3 
            onClick={() => onSelectProduct(product)}
            className="font-bold text-gray-900 text-sm sm:text-base line-clamp-2 hover:text-amber-700 cursor-pointer transition leading-snug"
          >
            {product.name}
          </h3>

          {/* Key Spec highlights */}
          <p className="text-xs text-gray-500 mt-2 line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          {/* Material / Guarantee snippet */}
          <div className="mt-3 flex items-center gap-2 text-[11px] text-gray-600">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
            <span className="truncate">{product.material}</span>
          </div>
        </div>

        {/* Pricing & Action Area */}
        <div className="mt-4 pt-3.5 border-t border-gray-100">
          <div className="flex items-baseline justify-between mb-3">
            <div>
              <span className="text-lg sm:text-xl font-extrabold text-gray-900">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              <span className="ml-2 text-xs text-gray-400 line-through">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
            </div>
            <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
              Save ₹{(product.originalPrice - product.price).toLocaleString('en-IN')}
            </span>
          </div>

          {/* Dual Action Buttons */}
          <div className="grid grid-cols-2 gap-2">
            {/* Direct WhatsApp Order */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full py-2.5 px-2 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm transition"
              title="Direct Order on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp</span>
            </a>

            {/* Add to Cart */}
            <button
              onClick={() => onAddToCart(product)}
              className="w-full py-2.5 px-2 bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 active:scale-95 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-amber-700" />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
