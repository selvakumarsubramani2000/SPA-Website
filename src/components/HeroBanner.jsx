import React from 'react';
import { 
  ShieldCheck, 
  Truck, 
  CreditCard, 
  MessageCircle, 
  Sparkles, 
  ArrowRight,
  PhoneCall
} from 'lucide-react';
import { storeInfo } from '../data/products';

export default function HeroBanner({ onExploreClick }) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-amber-50/60 via-white to-white py-8 sm:py-12 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-100/80 border border-amber-200/80 text-amber-900 text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span>Direct Showroom Wholesale & Retail Deals</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight leading-[1.15]">
              Furnish Your Dream Home with <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-700 via-amber-800 to-amber-900">
                Premium Furniture & Appliances
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-600 max-w-xl font-normal leading-relaxed">
              Explore our complete collection of durable steel bureaus, solid wood beds, 
              dining sets, kitchen mixies, grinders, and cooling fans. No complicated forms — 
              order in 1-click via WhatsApp or call our store directly!
            </p>

            {/* Quick Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onExploreClick}
                className="px-6 py-3.5 bg-amber-600 hover:bg-amber-700 text-white font-semibold text-sm rounded-xl shadow-lg shadow-amber-600/30 flex items-center gap-2 active:scale-95 transition"
              >
                <span>Browse All 24 Products</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/${storeInfo.whatsappNumber.replace('+', '')}?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20furniture%20and%20home%20appliances.`}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm rounded-xl shadow-lg shadow-emerald-600/25 flex items-center gap-2 active:scale-95 transition"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Instant WhatsApp Inquiry</span>
              </a>
            </div>

            {/* Micro stats */}
            <div className="pt-2 flex items-center gap-6 text-xs text-gray-500 border-t border-gray-100">
              <div>
                <span className="font-extrabold text-gray-900 text-base">2,500+</span>
                <p>Happy Households</p>
              </div>
              <div className="w-px h-8 bg-gray-200"></div>
              <div>
                <span className="font-extrabold text-gray-900 text-base">Up to 10 Yrs</span>
                <p>Structure Warranty</p>
              </div>
              <div className="w-px h-8 bg-gray-200"></div>
              <div>
                <span className="font-extrabold text-emerald-600 text-base">0% EMI</span>
                <p>Easy Finance Available</p>
              </div>
            </div>
          </div>

          {/* Right Featured Grid Banner */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-br from-amber-100 to-amber-50 p-2">
              <img
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80"
                alt="Modern Living & Furniture Showroom"
                className="w-full h-80 sm:h-96 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/20 to-transparent rounded-2xl flex flex-col justify-end p-6 text-white">
                <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">Showroom Exclusive</span>
                <h3 className="text-xl font-bold">Complete Home Furniture Combo</h3>
                <p className="text-xs text-gray-200 mt-1">Steel Bureau + King Bed + Dining Table Set + Dressing Table</p>
                <div className="mt-3 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-gray-300">Package Starting at</span>
                    <p className="text-lg font-black text-amber-300">₹39,999 <span className="line-through text-xs text-gray-400">₹54,999</span></p>
                  </div>
                  <span className="px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-lg text-xs font-semibold">Special Package</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Trust & Zero Confusion Guarantee Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-8 pt-8 border-t border-gray-100">
          <div className="flex items-center gap-3 p-3.5 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center flex-shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-gray-900">Free Safe Delivery</h4>
              <p className="text-[11px] text-gray-500">Careful doorstep delivery</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-gray-900">Original Warranty</h4>
              <p className="text-[11px] text-gray-500">100% Genuine guaranteed</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center flex-shrink-0">
              <CreditCard className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-gray-900">Pay on Delivery</h4>
              <p className="text-[11px] text-gray-500">Inspect first, pay later</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center flex-shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-gray-900">No App Confusion</h4>
              <p className="text-[11px] text-gray-500">Direct WhatsApp order</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
