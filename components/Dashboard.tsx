import React from 'react';
import { motion } from 'motion/react';
import { Heart, ShieldCheck, PhoneCall, Building2, Users, AlertTriangle, ArrowRight, MessageSquare } from 'lucide-react';
import type { Screen } from '../App';

export default function Dashboard({ navigate }: { navigate: (s: Screen) => void }) {
  const menuItems = [
    { id: 'health', icon: Heart, label: 'My Health', color: 'bg-blue-50 text-primary border border-blue-100', screen: 'health' },
    { id: 'insurance', icon: ShieldCheck, label: 'Insurance', color: 'bg-blue-50 text-primary border border-blue-100', screen: 'insurance' },
    { id: 'medicall', icon: PhoneCall, label: 'Medicall', color: 'bg-blue-50 text-primary border border-blue-100' },
    { id: 'hospital', icon: Building2, label: 'Hospital', color: 'bg-blue-50 text-primary border border-blue-100', screen: 'hospital' },
    { id: 'partner', icon: Users, label: 'Partner', color: 'bg-blue-50 text-primary border border-blue-100', screen: 'partners' },
    { id: 'panic', icon: AlertTriangle, label: 'Emergency', color: 'bg-red-50 text-red-600 border border-red-100 shadow-sm' },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4 pb-24 max-w-md mx-auto space-y-6">
      
      {/* Header section */}
      <div className="pt-2">
        <h1 className="text-2xl font-bold text-slate-800">Good morning, Arya 👋</h1>
        <p className="text-slate-500">Your health looks great today.</p>
      </div>

      {/* ZURI Strategy Banner */}
      <div className="bg-teal-50 rounded-2xl p-5 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <Heart className="w-24 h-24 text-teal-800" />
        </div>
        <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-teal-200 rounded-full opacity-50"></div>
        <div className="relative z-10">
          <div className="text-xs font-semibold uppercase tracking-wider text-teal-800 mb-1">WELLNESS MISSION</div>
          <h3 className="text-lg font-bold text-primary mb-2">Personalized Wellness Mission</h3>
          <p className="text-sm text-gray-600 mb-4 max-w-[85%]">Walk 5,000 steps today to maintain your Low-Risk profile and stay healthy!</p>
          <button onClick={() => navigate('health')} className="bg-primary text-white text-xs font-semibold px-4 py-2 rounded-lg flex items-center gap-1 active:scale-95 transition-transform shadow-md">
            View Mission <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Grid Menu (Evolved Medicillin) */}
      <div className="grid grid-cols-3 gap-3">
        {menuItems.map((item) => (
          <button 
            key={item.id}
            onClick={() => item.screen && navigate(item.screen as Screen)}
            className="flex flex-col items-center justify-center gap-2 p-2 active:scale-95 transition-transform"
          >
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm ${item.color}`}>
              <item.icon className="w-6 h-6" />
            </div>
            <span className="text-[11px] font-bold text-gray-800 text-center">{item.label}</span>
          </button>
        ))}
      </div>

      {/* Recent Activity Mini */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
         <h3 className="font-semibold text-slate-800 mb-4 text-sm">Recent Activity</h3>
         <div className="flex items-center justify-between py-2 border-b border-slate-50 last:border-0">
            <div className="flex items-center gap-3">
               <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                  <Activity className="w-5 h-5 text-slate-500" />
               </div>
               <div>
                  <div className="text-sm font-medium">Health Sync Completed</div>
                  <div className="text-xs text-slate-400">Today, 08:30 AM</div>
               </div>
            </div>
         </div>
      </div>

    </motion.div>
  );
}

// Temporary inline Activity icon to prevent import errors if not included above
function Activity(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>;
}