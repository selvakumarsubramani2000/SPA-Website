import React from 'react';
import { 
  Armchair, 
  Search, 
  ShoppingBag, 
  Heart, 
  PhoneCall, 
  MessageCircle, 
  X,
  MapPin
} from 'lucide-react';
import { storeInfo } from '../data/products';

export default function Navbar({ 
  searchQuery, 
  setSearchQuery, 
  cartCount, 
  wishlistCount, 
  onOpenCart, 
  onOpenWishlist 
}) {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm transition-all">
      {/* Top micro announcement bar */}
      <div className="bg-gradient-to-r from-amber-700 via-amber-800 to-amber-900 text-amber-50 text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Free Doorstep Delivery on Furniture & Appliances across Tamil Nadu | Cash On Delivery Available</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-amber-200">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" /> Showroom: 9:00 AM - 9:30 PM Everyday
            </span>
            <span>|</span>
            <a 
              href={`https://wa.me/${storeInfo.whatsappNumber.replace('+', '')}`} 
              target="_blank" 
              rel="noreferrer"
              className="hover:text-white flex items-center gap-1 font-medium underline"
            >
              Direct WhatsApp Help
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-3 flex-shrink-0 cursor-pointer">
            <div className="w-11 h-11 rounded-xl bg-amber-600 text-white flex items-center justify-center shadow-md shadow-amber-600/20">
              <Armchair className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-gray-900 flex items-center gap-1">
                Home Comforts <span className="text-amber-600 font-bold">& Living</span>
              </span>
              <p className="text-xs text-gray-500 hidden sm:block">
                Premium Furniture • Kitchen Appliances • Cookware
              </p>
            </div>
          </div>

          {/* Search bar with instant filter */}
          <div className="flex-1 max-w-lg hidden md:block">
            <div className="relative">
              <input
                type="text"
                placeholder="Search mixie, bureau, bed, dining table, tawa..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-10 py-2.5 bg-gray-50 hover:bg-gray-100/70 focus:bg-white text-sm text-gray-900 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all shadow-inner"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick Call */}
            <a
              href={`tel:${storeInfo.displayPhone}`}
              className="hidden lg:flex items-center gap-2 px-3 py-2 text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition"
              title="Call Store Showroom"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-700" />
              <span>{storeInfo.displayPhone}</span>
            </a>

            {/* Direct WhatsApp chat button */}
            <a
              href={`https://wa.me/${storeInfo.whatsappNumber.replace('+', '')}?text=Hi,%20I%20am%20browsing%20your%20furniture%20and%20appliances%20website%20and%20have%20an%20inquiry.`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600 fill-emerald-600" />
              <span className="hidden sm:inline">WhatsApp Help</span>
            </a>

            {/* Wishlist */}
            <button
              onClick={onOpenWishlist}
              className="relative p-2.5 text-gray-700 hover:text-amber-700 hover:bg-amber-50 rounded-xl transition"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 w-5 h-5 bg-rose-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-scale">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-2 px-4 py-2 bg-amber-600 hover:bg-amber-700 active:scale-95 text-white font-medium text-xs sm:text-sm rounded-xl shadow-md shadow-amber-600/25 transition"
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">Order Cart</span>
              <span className="bg-amber-800 text-amber-100 font-bold px-2 py-0.5 rounded-full text-xs">
                {cartCount}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Search Input */}
        <div className="pb-3 md:hidden">
          <div className="relative">
            <input
              type="text"
              placeholder="Search bureau, bed, mixie, cooker, fan..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-10 py-2 bg-gray-100 focus:bg-white text-xs text-gray-900 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
