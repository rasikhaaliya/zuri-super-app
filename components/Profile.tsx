import React from 'react';
import { motion } from "framer-motion";
import { User, Settings, ShieldCheck, CreditCard, LogOut, HeartHandshake } from 'lucide-react';

export default function Profile() {
  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="p-4 pb-24 max-w-md mx-auto space-y-6">
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex items-center gap-4">
         <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
            <User className="w-8 h-8 text-primary" />
         </div>
         <div>
            <h2 className="text-xl font-bold text-gray-800">Arya S.</h2>
            <p className="text-sm text-gray-500">arya.s@example.com</p>
            <div className="bg-teal-50 text-teal-700 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded mt-1 inline-block">
               Verified User
            </div>
         </div>
      </div>

      <div className="space-y-3">
         <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500 ml-2">Medical Preferences</h4>
         <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden text-sm">
            <button className="w-full flex justify-between items-center p-4 hover:bg-gray-50 transition-colors">
               <div className="flex flex-col items-start gap-0.5">
                  <span className="font-semibold text-gray-700">Primary Hospital</span>
                  <span className="text-[10px] text-gray-500">Siloam Hospitals Kebon Jeruk</span>
               </div>
               <span className="text-xs font-bold text-primary">Change</span>
            </button>
         </div>
      </div>

      <div className="space-y-3">
         <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500 ml-2">Account Settings</h4>
         
         <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden text-sm">
            <button className="w-full flex items-center gap-3 p-4 hover:bg-gray-50 transition-colors border-b border-gray-50">
               <ShieldCheck className="w-5 h-5 text-primary" />
               <span className="font-semibold text-gray-700">Insurance Policies</span>
            </button>
            <button className="w-full flex flex-col items-start p-4 hover:bg-gray-50 transition-colors border-b border-gray-50 text-left">
               <div className="flex items-center justify-between w-full">
                 <div className="flex items-center gap-3">
                    <CreditCard className="w-5 h-5 text-gray-500 shrink-0" />
                    <span className="font-semibold text-gray-700">Premium Billing & Payment</span>
                 </div>
               </div>
               <div className="text-[10px] text-gray-500 ml-8 mt-2 space-y-1.5 bg-gray-50 p-2.5 rounded-lg border border-gray-100 w-[calc(100%-2rem)]">
                  <div className="flex items-start gap-1.5">
                     <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1 shrink-0"></span>
                     <p><strong className="text-gray-700">Individual:</strong> Manage credit cards & e-wallets for personal top-ups.</p>
                  </div>
                  <div className="flex items-start gap-1.5">
                     <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1 shrink-0"></span>
                     <p><strong className="text-gray-700">Corporate:</strong> Premium is automatically billed to your employer.</p>
                  </div>
               </div>
            </button>
            <button className="w-full flex items-center gap-3 p-4 hover:bg-gray-50 transition-colors border-b border-gray-50">
               <Settings className="w-5 h-5 text-gray-500" />
               <span className="font-semibold text-gray-700">App Preferences</span>
            </button>
            <button className="w-full flex items-center gap-3 p-4 hover:bg-gray-50 transition-colors">
               <HeartHandshake className="w-5 h-5 text-gray-500" />
               <span className="font-semibold text-gray-700">Help & Support</span>
            </button>
         </div>
      </div>

      <button className="w-full bg-red-50 text-red-600 font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 mt-8 transition-colors hover:bg-red-100">
         <LogOut className="w-4 h-4" /> Sign Out
      </button>

    </motion.div>
  );
}