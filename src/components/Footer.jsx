import React from 'react';
import { 
  Armchair, 
  PhoneCall, 
  MessageCircle, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Truck, 
  Heart 
} from 'lucide-react';
import { storeInfo, categories } from '../data/products';

export default function Footer({ onSelectCategory }) {
  return (
    <footer className="bg-gray-950 text-gray-300 pt-12 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Col 1: Store Intro */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 text-white">
              <div className="w-9 h-9 rounded-xl bg-amber-600 flex items-center justify-center">
                <Armchair className="w-5 h-5 text-white" />
              </div>
              <span className="font-extrabold text-lg tracking-tight">
                Home Comforts <span className="text-amber-500">& Living</span>
              </span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Your one-stop destination for durable home furniture, steel almirahs, wooden beds, kitchen mixies, grinders, and cooling fans at wholesale prices.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Open 7 Days a Week • Doorstep Delivery</span>
            </div>
          </div>

          {/* Col 2: Categories */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Product Categories
            </h4>
            <ul className="space-y-2 text-xs">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => {
                      onSelectCategory(cat.id);
                      window.scrollTo({ top: 400, behavior: 'smooth' });
                    }}
                    className="hover:text-amber-400 transition flex items-center justify-between w-full text-left"
                  >
                    <span>{cat.name}</span>
                    <span className="text-[10px] text-gray-500 bg-gray-900 px-1.5 py-0.5 rounded">
                      {cat.count} items
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact & Showroom */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Showroom & Helpline
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                <span>{storeInfo.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <a href={`tel:${storeInfo.displayPhone}`} className="hover:text-white">
                  {storeInfo.displayPhone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <a 
                  href={`https://wa.me/${storeInfo.whatsappNumber.replace('+', '')}`} 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:text-white font-medium text-emerald-400"
                >
                  WhatsApp: {storeInfo.displayPhone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>{storeInfo.email}</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick WhatsApp Chat Card */}
          <div className="bg-gray-900 p-4 rounded-2xl border border-gray-800 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Need Help Choosing?
            </h4>
            <p className="text-[11px] text-gray-400 leading-relaxed">
              Not sure whether to buy a 20-gauge steel bureau or teak wood wardrobe? Ask our furniture specialist directly on WhatsApp.
            </p>
            <a
              href={`https://wa.me/${storeInfo.whatsappNumber.replace('+', '')}?text=Hello!%20I%20need%20help%20choosing%20the%20right%20furniture%20and%20appliances.`}
              target="_blank"
              rel="noreferrer"
              className="w-full py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Chat with Showroom Expert</span>
            </a>
          </div>

        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-8 border-t border-gray-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-500">
          <p>© {new Date().getFullYear()} {storeInfo.name}. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <span>Open-Source Ready SPA</span>
            <span>•</span>
            <span>Static Host Compatible (GitHub Pages / Cloudflare)</span>
            <span>•</span>
            <span>Cash on Delivery</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
