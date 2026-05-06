import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ScanFace, Activity, ShieldCheck, ArrowRight, UserCheck } from 'lucide-react';

export default function Onboarding({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('register');
  const [userType, setUserType] = useState<'individual' | 'corporate'>('individual');
  const [scanningProgress, setScanningProgress] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState<string | null>('smart_saver');

  useEffect(() => {
    if (step === 2) {
      const interval = setInterval(() => {
        setScanningProgress(p => {
          if (p >= 100) {
            clearInterval(interval);
            setTimeout(() => setStep(3), 500);
            return 100;
          }
          return p + 2;
        });
      }, 50);
      return () => clearInterval(interval);
    }
  }, [step]);

  return (
    <div className="min-h-screen bg-zuri-bg flex flex-col items-center justify-center p-6 pb-24">
      <div className="w-full max-w-md mx-auto">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div key="step0" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="flex flex-col items-center space-y-6 text-center">
              <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center text-white font-bold text-3xl shadow-lg">
                <div className="w-10 h-10 bg-white rotate-45 flex items-center justify-center">
                  <div className="w-5 h-5 bg-primary"></div>
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-primary tracking-tight mb-1">ZURI Super App</h1>
                <p className="text-gray-500 text-sm">Human-Centered Digital Insurance</p>
              </div>
              
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 w-full text-left">
                <div className="flex bg-gray-100 p-1 rounded-xl mb-6">
                  <button 
                    onClick={() => setAuthMode('register')}
                    className={`flex-1 py-2 text-xs font-bold rounded-lg transition-colors ${authMode === 'register' ? 'bg-white text-primary shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                  >
                    Register
                  </button>
                  <button 
                    onClick={() => setAuthMode('login')}
                    className={`flex-1 py-2 text-xs font-bold rounded-lg transition-colors ${authMode === 'login' ? 'bg-white text-primary shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                  >
                    Login
                  </button>
                </div>

                {authMode === 'register' ? (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-2 mb-2">
                       <button 
                         onClick={() => setUserType('individual')}
                         className={`py-2 text-[10px] uppercase tracking-wider font-bold rounded-lg border flex flex-col items-center justify-center gap-1 transition-all ${userType === 'individual' ? 'border-primary bg-blue-50 text-primary' : 'border-gray-200 text-gray-500 hover:bg-gray-50'}`}
                       >
                          Individual
                       </button>
                       <button 
                         onClick={() => setUserType('corporate')}
                         className={`py-2 text-[10px] uppercase tracking-wider font-bold rounded-lg border flex flex-col items-center justify-center gap-1 transition-all ${userType === 'corporate' ? 'border-primary bg-blue-50 text-primary' : 'border-gray-200 text-gray-500 hover:bg-gray-50'}`}
                       >
                          Corporate / Employee
                       </button>
                    </div>

                    {userType === 'corporate' && (
                       <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} className="overflow-hidden">
                          <label className="text-[10px] uppercase font-bold text-gray-500 tracking-wider mb-1 block">Company / Partner Code</label>
                          <input type="text" placeholder="e.g. TELKOM-2026" className="w-full bg-blue-50/50 border border-blue-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary mb-2" />
                       </motion.div>
                    )}

                    <div>
                      <label className="text-[10px] uppercase font-bold text-gray-500 tracking-wider mb-1 block">Full Name</label>
                      <input type="text" placeholder="Arya S." className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
                    </div>
                    <div>
                      <label className="text-[10px] uppercase font-bold text-gray-500 tracking-wider mb-1 block">Email Address</label>
                      <input type="email" placeholder="arya.s@example.com" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
                    </div>
                    <div>
                      <label className="text-[10px] uppercase font-bold text-gray-500 tracking-wider mb-1 block">Phone Number</label>
                      <input type="tel" placeholder="+62 812 3456 7890" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
                    </div>
                    <div>
                      <label className="text-[10px] uppercase font-bold text-gray-500 tracking-wider mb-1 block">Password</label>
                      <input type="password" placeholder="••••••••" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
                    </div>
                    
                    <div>
                      <label className="text-[10px] uppercase font-bold text-gray-500 tracking-wider mb-1 block">Preferred Hospital (Optional)</label>
                      <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-gray-700">
                        <option value="">Select a primary hospital nearest to you...</option>
                        <option value="siloam_kj">Siloam Hospitals Kebon Jeruk</option>
                        <option value="mitra_kemayoran">Mitra Keluarga Kemayoran</option>
                        <option value="pondok_indah">RS Pondok Indah - Puri Indah</option>
                        <option value="rscm">RSUP Nasional Dr. Cipto Mangunkusumo</option>
                      </select>
                      <p className="text-[9px] text-gray-400 mt-1">This helps us recommend the best facilities around your location.</p>
                    </div>
                    
                    <button onClick={() => setStep(1)} className="w-full bg-primary text-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-800 transition-colors shadow-md mt-6">
                      Create Account & Continue <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <label className="text-[10px] uppercase font-bold text-gray-500 tracking-wider mb-1 block">Email Address</label>
                      <input type="email" placeholder="arya.s@example.com" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
                    </div>
                    <div>
                      <label className="text-[10px] uppercase font-bold text-gray-500 tracking-wider mb-1 block">Password</label>
                      <input type="password" placeholder="••••••••" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
                    </div>
                    
                    <button onClick={onComplete} className="w-full bg-primary text-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-800 transition-colors shadow-md mt-6">
                      Login to ZURI <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div key="step1" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center space-y-6 text-center w-full">
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 w-full text-left space-y-4">
                <h3 className="font-bold text-lg flex items-center gap-2 text-gray-800">
                  <Activity className="w-5 h-5 text-teal-500"/> Seleris Onboarding
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  To provide you with the most accurate insurance options and gamified missions, we use Seleris AI to scan your vitals.
                </p>
                <div className="bg-gray-50 h-32 rounded-2xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-gray-400 gap-2">
                  <ScanFace className="w-8 h-8 opacity-50" />
                  <span className="text-xs font-bold uppercase tracking-widest">Setup Camera</span>
                </div>
                <button onClick={() => setStep(2)} className="w-full bg-primary text-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-800 transition-colors shadow-md">
                  Start Face & Health Scan <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div key="step2" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center w-full">
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 w-full text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center justify-center gap-2">
                  <ScanFace className="w-6 h-6 text-primary"/> Face Scanning
                </h3>
                <p className="text-sm text-gray-500 mb-8">Instantly scan face to verify user health identity.</p>
                <div className="relative w-48 h-64 mx-auto bg-gray-100 rounded-[100px] border-4 border-dashed border-gray-300 overflow-hidden mb-8 flex flex-col items-center justify-center">
                  <div className="absolute inset-0 bg-teal-400/10 animate-pulse"></div>
                  <ScanFace className="w-16 h-16 text-gray-300 mb-4" />
                  <div className="bg-teal-50 px-3 py-1 rounded-full text-[10px] font-bold text-teal-700">Stay in your position</div>
                  
                  {/* Progress Circle overlay */}
                  <div className="mt-4 relative w-16 h-16">
                     <svg className="w-full h-full transform -rotate-90">
                       <circle cx="32" cy="32" r="28" fill="transparent" strokeDasharray="175" strokeDashoffset={Math.max(0, 175 - (175 * scanningProgress) / 100)} strokeWidth="6" stroke="var(--color-secondary)" className="transition-all duration-75 ease-linear"></circle>
                     </svg>
                     <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-teal-800">{scanningProgress}%</div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div key="step3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full space-y-6">
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 border-b border-gray-100 pb-4 mb-4">
                  <div className="relative w-20 h-20">
                     <svg className="w-full h-full transform -rotate-180">
                       <circle cx="40" cy="40" r="36" fill="transparent" stroke="#f3f4f6" strokeWidth="8"></circle>
                       <circle cx="40" cy="40" r="36" fill="transparent" stroke="url(#score-gradient)" strokeDasharray="226" strokeDashoffset="40" strokeWidth="8" className="drop-shadow-sm"></circle>
                     </svg>
                     <div className="absolute inset-0 flex flex-col items-center justify-center">
                       <span className="text-xl font-bold text-primary leading-tight">83</span>
                       <span className="text-[8px] font-bold text-primary uppercase tracking-tighter">Very Good</span>
                     </div>
                     <defs>
                       <linearGradient id="score-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                         <stop offset="0%" stopColor="#ef4444" />
                         <stop offset="50%" stopColor="#eab308" />
                         <stop offset="100%" stopColor="#22c55e" />
                       </linearGradient>
                     </defs>
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-1">Health Score</div>
                    <div className="font-bold text-gray-800 text-lg">Arya S.</div>
                    <div className="text-xs text-gray-500 mt-0.5">Male <span className="mx-1">•</span> 28 Years</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                   <div className="p-3 border border-gray-100 rounded-xl bg-gray-50 flex items-center gap-3">
                      <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center shrink-0 border border-gray-200">
                         <span className="text-xs font-bold text-gray-800">119</span>
                      </div>
                      <div>
                         <p className="text-[11px] font-bold text-teal-700">BP Systole <span className="text-gray-500 font-normal ml-1">mmHg</span></p>
                         <p className="text-[10px] text-gray-500 mt-0.5">Your Result: <span className="font-bold text-gray-800">Normal</span></p>
                      </div>
                   </div>
                   <div className="p-3 border border-gray-100 rounded-xl bg-gray-50 flex items-center gap-3">
                      <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center shrink-0 border border-gray-200">
                         <span className="text-xs font-bold text-gray-800">80</span>
                      </div>
                      <div>
                         <p className="text-[11px] font-bold text-teal-700">BP Diastole <span className="text-gray-500 font-normal ml-1">mmHg</span></p>
                         <p className="text-[10px] text-gray-500 mt-0.5">Your Result: <span className="font-bold text-gray-800">Normal</span></p>
                      </div>
                   </div>
                   <div className="p-3 border border-gray-100 rounded-xl bg-gray-50 flex items-center gap-3">
                      <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center shrink-0 border border-gray-200">
                         <span className="text-xs font-bold text-gray-800">98%</span>
                      </div>
                      <div>
                         <p className="text-[11px] font-bold text-teal-700">Oxygen Saturation</p>
                         <p className="text-[10px] text-gray-500 mt-0.5">Your Result: <span className="font-bold text-gray-800">Normal</span></p>
                      </div>
                   </div>
                </div>

                <div className="mt-6 border-t border-gray-100 pt-6">
                  <div className="flex items-start gap-2 mb-4">
                    <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
                    <div>
                      {userType === 'corporate' ? (
                        <>
                          <h4 className="font-bold text-primary text-sm mb-1">Corporate Health Plan</h4>
                          <p className="text-[10px] text-gray-500 leading-relaxed">Your company has provided a standardized health insurance plan for you.</p>
                        </>
                      ) : (
                        <>
                          <h4 className="font-bold text-primary text-sm mb-1">Tailored Product Matches</h4>
                          <p className="text-[10px] text-gray-500 leading-relaxed">Based on your Health Score, select the base plan that fits you best. Recommendations are highlighted.</p>
                        </>
                      )}
                    </div>
                  </div>
                  
                  {userType === 'corporate' ? (
                    <div className="space-y-3">
                      <div className="p-4 rounded-xl border-2 border-primary bg-blue-50">
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-bold text-sm text-gray-800">Corporate Comprehensive</span>
                          <span className="bg-primary text-white text-[9px] uppercase tracking-wider font-bold px-2 py-0.5 rounded">Active</span>
                        </div>
                        <p className="text-[10px] text-gray-500 mb-2">Fully covered by your employer.</p>
                        <span className="font-bold text-primary text-sm">Rp 0 <span className="text-[10px] text-gray-500 font-normal">/mo</span></span>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <label className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${selectedPlan === 'smart_saver' ? 'border-primary bg-blue-50' : 'border-gray-100 bg-white hover:border-blue-200'}`}>
                        <input type="radio" name="plan" checked={selectedPlan === 'smart_saver'} onChange={() => setSelectedPlan('smart_saver')} className="mt-1" />
                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-bold text-sm text-gray-800">Smart Life Saver</span>
                            <span className="bg-teal-100 text-teal-700 text-[9px] uppercase tracking-wider font-bold px-2 py-0.5 rounded">Recommended</span>
                          </div>
                          <p className="text-[10px] text-gray-500 mb-2">Optimal coverage tailored for your 'Very Good' health profile.</p>
                          <span className="font-bold text-primary text-sm">Rp 150.000 <span className="text-[10px] text-gray-500 font-normal">/mo</span></span>
                        </div>
                      </label>
                      <label className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${selectedPlan === 'comprehensive' ? 'border-primary bg-blue-50' : 'border-gray-100 bg-white hover:border-blue-200'}`}>
                        <input type="radio" name="plan" checked={selectedPlan === 'comprehensive'} onChange={() => setSelectedPlan('comprehensive')} className="mt-1" />
                        <div>
                          <div className="font-bold text-sm text-gray-800 mb-1">Comprehensive Health+</div>
                          <p className="text-[10px] text-gray-500 mb-2">Maximum limits and global coverage. Optional upgrade.</p>
                          <span className="font-bold text-gray-800 text-sm">Rp 350.000 <span className="text-[10px] text-gray-500 font-normal">/mo</span></span>
                        </div>
                      </label>
                    </div>
                  )}
                </div>
              </div>
              
              <button onClick={onComplete} className="w-full bg-primary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-800 transition-colors shadow-lg shadow-blue-900/20 active:scale-95">
                {userType === 'corporate' ? 'Proceed with Corporate Plan' : 'Proceed with Selected Plan'} <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}