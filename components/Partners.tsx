import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Search, ExternalLink, ActivitySquare } from 'lucide-react';

export default function Partners() {
  const categories = ['All', 'Telemedicine', 'Fitness Facilities', 'Clinics'];
  const [activeCategory, setActiveCategory] = useState('All');
  
  const partners = [
    { id: 2, name: 'Halodoc', desc: 'Consult with 20,000+ doctors directly from the app.', type: 'Telemedicine', tag: 'Integrated', img: 'https://placehold.co/150x150/ef4444/white?text=H' },
    { id: 3, name: 'GoodDoctor', desc: '24/7 medical consultation and prescription delivery.', type: 'Telemedicine', tag: 'Partner', img: 'https://placehold.co/150x150/0ea5e9/white?text=GD' },
    { id: 4, name: 'Gold\'s Gym', desc: 'Access to 40+ premier fitness centers nationwide.', type: 'Fitness Facilities', tag: 'Discounted', img: 'https://placehold.co/150x150/eab308/white?text=GG' },
  ];

  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="p-4 pb-24 max-w-md mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Partner Integrations</h2>
      </div>

      {/* Search & Filter */}
      <div className="relative">
        <Search className="w-5 h-5 absolute left-4 top-3.5 text-gray-400" />
        <input 
          type="text" 
          placeholder="Search partner organizations..." 
          className="w-full bg-white border border-gray-200 rounded-2xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary shadow-sm"
        />
      </div>

      {/* Categories */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4">
        {categories.map((c) => (
           <button 
             key={c} 
             onClick={() => setActiveCategory(c)}
             className={`whitespace-nowrap px-4 py-2 rounded-full text-[11px] font-bold border transition-colors ${activeCategory === c ? 'bg-primary text-white border-primary shadow-sm' : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'}`}
           >
              {c}
           </button>
        ))}
      </div>

      {/* Corporate Partner List */}
      <div className="space-y-4">
         {partners.filter(p => activeCategory === 'All' || p.type === activeCategory).map(p => (
            <div key={p.id} className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 flex items-start gap-4 cursor-pointer hover:border-gray-300 transition-colors">
               <img src={p.img} alt={p.name} className="w-14 h-14 rounded-2xl object-cover shadow-sm shrink-0" />
               <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                     <h4 className="font-bold text-gray-800">{p.name}</h4>
                     <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${p.tag === 'Integrated' ? 'bg-blue-100 text-primary' : 'bg-gray-100 text-gray-500'}`}>{p.tag}</span>
                  </div>
                  <p className="text-[11px] text-gray-500 leading-relaxed mb-3">{p.desc}</p>
                  <button className="text-[11px] font-bold text-primary flex items-center gap-1 hover:underline">
                     Connect Access <ExternalLink className="w-3 h-3" />
                  </button>
               </div>
            </div>
         ))}
      </div>
      
      {/* Independent Coaches Notice */}
      <div className="bg-gray-50 border border-gray-200 rounded-3xl p-6 text-center mt-6 flex flex-col items-center">
         <ActivitySquare className="w-8 h-8 text-gray-400 mb-2" />
         <h4 className="text-sm font-bold text-gray-700 mb-1">Looking for a personal coach?</h4>
         <p className="text-[11px] text-gray-500 mb-4 max-w-[250px]">Connect directly with independent fitness trainers and mental health specialists.</p>
         <button className="text-xs font-bold text-gray-800 bg-white border border-gray-300 px-5 py-3 rounded-xl shadow-sm w-full hover:bg-gray-50 transition-colors">
            Browse Independent Network
         </button>
      </div>

    </motion.div>
  );
}