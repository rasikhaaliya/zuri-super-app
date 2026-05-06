/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Onboarding from '../components/Onboarding';
import Dashboard from '../components/Dashboard';
import Insurance from '../components/Insurance';
import Health from '../components/Health';
import Partners from '../components/Partners';
import Profile from '../components/Profile';
import Hospital from '../components/Hospital';
import { Home, Activity, ShieldCheck, Users, User, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';;

export type Screen = 'onboarding' | 'dashboard' | 'insurance' | 'health' | 'partners' | 'hospital' | 'profile';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('onboarding');

  const navigate = (screen: Screen) => setCurrentScreen(screen);

  return (
    <div className="min-h-[100dvh] max-w-md mx-auto bg-gray-50 text-slate-800 font-sans relative sm:shadow-2xl sm:border-x sm:border-gray-200 overflow-hidden flex flex-col">
      {currentScreen === 'onboarding' && <Onboarding onComplete={() => navigate('dashboard')} />}
      
      {currentScreen !== 'onboarding' && (
        <div className="flex-1 flex flex-col pb-20">
          {/* Top Header */}
          <header className="absolute top-0 w-full h-16 bg-primary flex items-center justify-between px-6 text-white shadow-lg z-50">
             <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('dashboard')}>
               <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                 <div className="w-4 h-4 bg-primary rotate-45"></div>
               </div>
               <span className="text-xl font-bold tracking-tight">ZURI <span className="font-light opacity-80 uppercase text-[10px] tracking-widest ml-1">Super App</span></span>
             </div>
          </header>

          {/* Main Content Area */}
          <main className="pt-20 flex-1 overflow-y-auto relative">
             {currentScreen === 'dashboard' && <Dashboard navigate={navigate} />}
             {currentScreen === 'insurance' && <Insurance />}
             {currentScreen === 'health' && <Health />}
             {currentScreen === 'partners' && <Partners />}
             {currentScreen === 'hospital' && <Hospital />}
             {currentScreen === 'profile' && <Profile />}
          </main>

          {/* Floating Chat Message (Only on Dashboard) */}
          {currentScreen === 'dashboard' && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 1 }}
              className="absolute bottom-20 right-5 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-100 p-4 rounded-2xl rounded-br-none max-w-[200px] z-[60] pointer-events-none"
            >
              <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center shadow-lg pointer-events-auto cursor-pointer">
                <MessageSquare className="w-5 h-5" />
              </div>
              <p className="text-xs text-slate-600 font-medium leading-relaxed pr-2">
                Hi Arya! 👋 Need help claiming your doctor visit reimbursement?
              </p>
            </motion.div>
          )}

          {/* Bottom Navigation */}
          <nav className="absolute bottom-0 w-full bg-white border-t border-gray-100 pb-safe z-50">
             <div className="flex justify-around items-center h-16">
                <NavItem icon={Home} label="Home" isActive={currentScreen === 'dashboard'} onClick={() => navigate('dashboard')} />
                <NavItem icon={ShieldCheck} label="Insurance" isActive={currentScreen === 'insurance'} onClick={() => navigate('insurance')} />
                <div className="relative -top-5">
                   <button onClick={() => navigate('health')} className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg border-4 border-white transition-transform active:scale-95 ${currentScreen === 'health' ? 'bg-secondary text-white' : 'bg-primary text-white'}`}>
                      <Activity className="w-6 h-6" />
                   </button>
                </div>
                <NavItem icon={Users} label="Partners" isActive={currentScreen === 'partners'} onClick={() => navigate('partners')} />
                <NavItem icon={User} label="Profile" isActive={currentScreen === 'profile'} onClick={() => navigate('profile')} />
             </div>
          </nav>
        </div>
      )}
    </div>
  );
}

function NavItem({ icon: Icon, label, isActive, onClick }: { icon: any, label: string, isActive: boolean, onClick: () => void }) {
   return (
      <button onClick={onClick} className="flex flex-col items-center justify-center w-16 h-full transition-colors">
         <Icon className={`w-6 h-6 mb-1 ${isActive ? 'text-primary' : 'text-slate-400'}`} />
         <span className={`text-[10px] font-medium leading-none ${isActive ? 'text-primary' : 'text-slate-400'}`}>{label}</span>
      </button>
   );
}