import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Search, ExternalLink, Building2, MapPin } from 'lucide-react';

export default function Hospital() {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const hospitals = [
    { id: 1, name: 'Siloam Hospitals Kebon Jeruk', desc: 'Comprehensive medical care with 24/7 emergency trauma center.', tag: 'Primary', img: 'https://placehold.co/150x150/0284c7/white?text=SH', location: 'Kebon Jeruk, 2.4 km' },
    { id: 5, name: 'RS Pondok Indah - Puri Indah', desc: 'Premium healthcare services with state-of-the-art medical technology.', tag: 'Preferred', img: 'https://placehold.co/150x150/16a34a/white?text=PI', location: 'Puri Indah, 4.1 km' },
    { id: 6, name: 'Mitra Keluarga Kemayoran', desc: 'Specialized hospital equipped for modern and comprehensive treatments.', tag: 'Partner', img: 'https://placehold.co/150x150/ea580c/white?text=MK', location: 'Kemayoran, 8.2 km' },
    { id: 7, name: 'RSUP Nasional Dr. Cipto Mangunkusumo', desc: 'National referral hospital with extensive specialized care units.', tag: 'Partner', img: 'https://placehold.co/150x150/dc2626/white?text=C', location: 'Menteng, 10.5 km' },
  ];

  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="p-4 pb-24 max-w-md mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2"><Building2 className="w-6 h-6 text-primary" /> Hospitals</h2>
      </div>

      {/* Search & Filter */}
      <div className="relative">
        <Search className="w-5 h-5 absolute left-4 top-3.5 text-gray-400" />
        <input 
          type="text" 
          placeholder="Search by name, location, or specialty..." 
          className="w-full bg-white border border-gray-200 rounded-2xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary shadow-sm"
        />
      </div>

      {/* Recommend Hospital */}
      <div className="bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-100 rounded-3xl p-5 mb-4 shadow-sm relative overflow-hidden">
        <div className="absolute -right-6 -top-6 text-blue-500/10 w-32 h-32">
            <Building2 className="w-full h-full" />
        </div>
        <div className="relative z-10">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-blue-600 mb-3 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span> Your Primary Hospital
            </h4>
            <div className="flex gap-4 items-center">
              <img src="https://placehold.co/150x150/0284c7/white?text=SH" alt="Hospital" className="w-16 h-16 rounded-2xl object-cover shadow-sm border border-blue-200 shrink-0" />
              <div>
                  <h3 className="font-bold text-gray-800 leading-tight">Siloam Hospitals</h3>
                  <p className="text-[10px] text-gray-500 mt-1 flex items-center gap-1"><MapPin className="w-3 h-3"/> Kebon Jeruk (2.4 km)</p>
                  <button className="text-[10px] font-bold text-white bg-blue-600 px-3 py-1.5 rounded-lg mt-2 shadow-sm hover:bg-blue-700 transition-colors">Route & Appoint</button>
              </div>
            </div>
        </div>
      </div>

      {/* Other Hospitals */}
      <div className="space-y-4">
         <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500 ml-2 mb-2 pt-2">Nearby Network Facilities</h4>
         {hospitals.map(p => (
            <div key={p.id} className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 flex items-start gap-4 cursor-pointer hover:border-gray-300 transition-colors">
               <img src={p.img} alt={p.name} className="w-14 h-14 rounded-2xl object-cover shadow-sm shrink-0" />
               <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                     <h4 className="font-bold text-gray-800">{p.name}</h4>
                     <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shrink-0 ml-2 ${p.tag === 'Primary' || p.tag === 'Preferred' ? 'bg-blue-100 text-primary' : 'bg-green-100 text-green-700'}`}>{p.tag}</span>
                  </div>
                  <p className="text-[10px] text-gray-400 font-medium mb-1.5 flex items-center gap-1"><MapPin className="w-3 h-3"/> {p.location}</p>
                  <p className="text-[11px] text-gray-500 leading-relaxed mb-3">{p.desc}</p>
                  <button className="text-[11px] font-bold text-primary flex items-center gap-1 hover:underline">
                     Book Visit <ExternalLink className="w-3 h-3" />
                  </button>
               </div>
            </div>
         ))}
      </div>

    </motion.div>
  );
}