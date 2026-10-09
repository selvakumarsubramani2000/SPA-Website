import React, { useState } from 'react';
import { 
  MapPin, 
  Clock, 
  PhoneCall, 
  MessageCircle, 
  HelpCircle, 
  ChevronDown, 
  ShieldCheck, 
  CheckCircle,
  Truck
} from 'lucide-react';
import { storeInfo } from '../data/products';

const faqs = [
  {
    q: "Can I inspect the furniture or appliances before paying?",
    a: "Yes, absolutely! We offer Cash on Delivery (COD) for most orders. Our delivery team will carefully unpack and show you the item. You can inspect the finish, dimensions, and condition before making the payment."
  },
  {
    q: "Do you offer free doorstep delivery in my town/village?",
    a: "Yes, we provide free safe doorstep delivery within 30 km of our showroom. For outstation delivery across Tamil Nadu, we provide safe vehicle transport at nominal government freight rates."
  },
  {
    q: "Is there any warranty on steel bureaus and wooden cots?",
    a: "Yes! All our steel bureaus come with a 10-Year Anti-Rust Warranty. Our solid wood cots, dining tables, and wardrobes carry up to 5 years structural and termite warranty with free service support."
  },
  {
    q: "How does ordering via WhatsApp work?",
    a: "Simply click 'Order via WhatsApp' on any product. A WhatsApp chat with our showroom manager will open with the product name and price pre-filled. You can request more photos/videos, ask for colors, give your address, and confirm delivery in minutes."
  },
  {
    q: "Are mixer grinders and wet grinders 100% original brand quality?",
    a: "Yes! Every electrical item comes sealed in its original box with an official manufacturer warranty card, 100% pure copper motor guarantee, and local service center support."
  }
];

export default function StoreInfo() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section className="bg-amber-50/40 py-12 sm:py-16 border-t border-gray-200" id="store-location">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Section: Showroom Visit Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-5 space-y-5">
            <span className="text-amber-700 font-bold text-xs uppercase tracking-wider">
              Visit Our Retail Showroom
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 leading-tight">
              Experience the Quality in Person
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              We welcome you and your family to visit our large display showroom. Touch the solid wood, test the smooth glide drawers of our steel bureaus, and see our kitchen appliances live.
            </p>

            <div className="space-y-3.5 pt-2 text-xs sm:text-sm text-gray-700">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-amber-100 text-amber-800 flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-gray-900">Showroom Address:</strong>
                  <span>{storeInfo.address}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-emerald-100 text-emerald-800 flex-shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-gray-900">Showroom Timings:</strong>
                  <span>{storeInfo.timings}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-blue-100 text-blue-800 flex-shrink-0 mt-0.5">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-gray-900">Customer Helpline:</strong>
                  <a href={`tel:${storeInfo.displayPhone}`} className="text-amber-800 font-semibold hover:underline">
                    {storeInfo.displayPhone}
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${storeInfo.whatsappNumber.replace('+', '')}?text=Hello!%20I%20would%20like%20directions%20to%20visit%20your%20furniture%20showroom.`}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl flex items-center gap-2 shadow-sm transition"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Get Directions on WhatsApp</span>
              </a>

              <a
                href={`tel:${storeInfo.displayPhone}`}
                className="px-5 py-2.5 bg-gray-900 hover:bg-gray-800 text-white font-bold text-xs rounded-xl flex items-center gap-2 transition"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call Store Now</span>
              </a>
            </div>
          </div>

          {/* Right Visual Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
              
              <div className="flex items-center justify-between pb-6 border-b border-gray-100">
                <div>
                  <h3 className="font-extrabold text-lg text-gray-900">Why Customers Trust Us</h3>
                  <p className="text-xs text-gray-500">Over 15+ years of trusted retail service in Tamil Nadu</p>
                </div>
                <div className="p-2 bg-emerald-50 text-emerald-700 rounded-xl">
                  <ShieldCheck className="w-6 h-6" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-100">
                  <span className="font-bold text-xs text-amber-900 block mb-1">Direct Factory Pricing</span>
                  <p className="text-[11px] text-gray-600 leading-relaxed">
                    We source directly from premium iron and steel mills and solid wood craftsmen, saving you 25% to 35% compared to big malls.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100">
                  <span className="font-bold text-xs text-emerald-900 block mb-1">Expert Home Installation</span>
                  <p className="text-[11px] text-gray-600 leading-relaxed">
                    Our own experienced delivery technicians assemble your beds, wardrobes, and test all electrical appliances in front of you.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100">
                  <span className="font-bold text-xs text-blue-900 block mb-1">No Confusion Ordering</span>
                  <p className="text-[11px] text-gray-600 leading-relaxed">
                    No complicated passwords or OTP delays. One message on WhatsApp connects you directly to our showroom staff.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-100">
                  <span className="font-bold text-xs text-purple-900 block mb-1">Transparent Replacement</span>
                  <p className="text-[11px] text-gray-600 leading-relaxed">
                    In the rare case of any transit scratch or defect, we provide instant replacement without asking questions.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Section: Customer Confusion Prevention (FAQ) */}
        <div className="pt-6">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-amber-700 font-bold text-xs uppercase tracking-wider">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-1">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1.5">
              Everything you need to know about buying furniture and appliances from us.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-gray-900 hover:text-amber-700"
                >
                  <span className="flex items-center gap-2.5">
                    <HelpCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${openFaq === idx ? 'rotate-180 text-amber-600' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
