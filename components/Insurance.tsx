import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Zap, Info, Bot, HeartHandshake, CheckCircle2, FileText, UploadCloud, Clock, AlertTriangle, Activity } from 'lucide-react';

export default function Insurance() {
  const [showAIModal, setShowAIModal] = useState(false);
  const [claimType, setClaimType] = useState<'auto' | 'manual' | 'predict'>('auto');
  
  const [autoStep, setAutoStep] = useState<'upload' | 'analyzing' | 'result' | 'approved'>('upload');
  const [manualStep, setManualStep] = useState<'upload' | 'analyzing' | 'result' | 'submitted'>('upload');
  const [predictStep, setPredictStep] = useState<'form' | 'analyzing' | 'result'>('form');
  
  const [isProcessingAuto, setIsProcessingAuto] = useState(false);

  const handleAutoAnalyze = () => {
    setAutoStep('analyzing');
    setTimeout(() => {
      setAutoStep('result');
    }, 2000);
  };

  const handleManualAnalyze = () => {
    setManualStep('analyzing');
    setTimeout(() => {
      setManualStep('result');
    }, 2000);
  };

  const handlePredict = () => {
    setPredictStep('analyzing');
    setTimeout(() => {
      setPredictStep('result');
    }, 2000);
  };

  const handleSmartClaim = () => {
    setIsProcessingAuto(true);
    setTimeout(() => {
      setIsProcessingAuto(false);
      setAutoStep('approved');
    }, 1500);
  };
  
  const PreAnalyzeBanner = () => (
    <div className="p-4 mb-5 border border-teal-200 rounded-2xl bg-teal-50/50 flex items-start gap-3 relative overflow-hidden">
        <div className="absolute -right-6 -top-6 text-teal-500/10 w-32 h-32">
            <Bot className="w-full h-full" />
        </div>
        <Bot className="w-5 h-5 text-teal-600 mt-0.5 shrink-0 relative z-10" />
        <div className="relative z-10">
            <div className="text-sm font-bold text-teal-900">{claimType === 'predict' ? 'AI Predictor' : 'AI Pre-Analyze'}</div>
            <div className="text-[11px] text-teal-800 mt-1 leading-relaxed">{claimType === 'predict' ? 'Our AI simulates your planned treatments against your policy to estimate coverage probabilities without needing any documents.' : 'Our AI instantly pre-analyzes your digital receipts to estimate approval rates and accelerate payouts.'}</div>
        </div>
    </div>
  );

  const getZoneLogic = (score: number, mode: 'document' | 'predict' = 'document') => {
    if (score >= 80) {
      return {
        title: 'High Probability',
        msg: mode === 'document' ? 'Dokumen dan polis Anda sinkron sempurna. Klaim diprediksi akan cair instan!' : 'Rencana tindakan sesuai dengan cakupan polis Anda. Klaim diprediksi berpeluang besar untuk disetujui!',
        color: 'text-green-600',
        bg: 'bg-green-50',
        border: 'border-green-200',
        icon: <CheckCircle2 className="w-8 h-8 mx-auto mb-2 text-green-500" />
      };
    } else if (score >= 50) {
       return {
        title: 'Further Review Needed',
        msg: mode === 'document' ? 'Dokumen kurang lengkap. Mohon unggah ulang untuk menaikkan skor.' : 'Limit Anda hampir habis atau ada kondisi khusus yang memerlukan peninjauan lebih lanjut.',
        color: 'text-amber-600',
        bg: 'bg-amber-50',
        border: 'border-amber-200',
        icon: <Clock className="w-8 h-8 mx-auto mb-2 text-amber-500" />
      };
    } else {
       return {
        title: 'Action Required',
        msg: 'Penyakit/tindakan ini tampaknya tidak dicover dalam polis Anda. Segera hubungi Advisor untuk opsi bantuan lainnya.',
        color: 'text-red-600',
        bg: 'bg-red-50',
        border: 'border-red-200',
        icon: <AlertTriangle className="w-8 h-8 mx-auto mb-2 text-red-500" />
      };
    }
  };

  const PreAnalyzeResult = ({ score, mode = 'document' }: { score: number, mode?: 'document' | 'predict' }) => {
    const zone = getZoneLogic(score, mode);
    return (
        <div className="space-y-4">
            <div className={`p-5 border-2 border-dashed ${zone.border} rounded-2xl ${zone.bg} flex flex-col items-center text-center mt-2`}>
                {zone.icon}
                <p className={`text-[11px] font-bold uppercase tracking-widest ${zone.color} mb-1`}>{zone.title}</p>
                <p className={`text-5xl font-bold ${zone.color} mb-2`}>{score}%</p>
                <p className={`text-[11px] font-medium leading-relaxed opacity-90 max-w-[240px] text-slate-800`}>{zone.msg}</p>
            </div>
            
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
               <h4 className="text-center font-bold text-slate-800 mb-2">AI Claim Predictor</h4>
               <p className="text-center text-[11px] text-slate-500 mb-5 px-2 leading-relaxed">
                   Before submitting a standard reimbursement to our team, AI evaluates your claim to give you a success probability.
               </p>
               
               <div className="space-y-4">
                  <div>
                     <div className="flex justify-between text-[11px] font-bold mb-1.5">
                        <span className="text-slate-700">Policy Eligibility & Limits</span>
                        <span className="text-slate-900">35%</span>
                     </div>
                     <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-[#0D47A1] rounded-full" style={{ width: '35%' }}></div>
                     </div>
                  </div>
                  <div>
                     <div className="flex justify-between text-[11px] font-bold mb-1.5">
                        <span className="text-slate-700">Time Limit (Max 60 Days)</span>
                        <span className="text-slate-900">25%</span>
                     </div>
                     <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-[#00BFA5] rounded-full" style={{ width: '25%' }}></div>
                     </div>
                  </div>
                  <div>
                     <div className="flex justify-between text-[11px] font-bold mb-1.5">
                        <span className="text-slate-700">Document Completeness</span>
                        <span className="text-slate-900">20%</span>
                     </div>
                     <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-[#6554C0] rounded-full" style={{ width: '20%' }}></div>
                     </div>
                  </div>
                  <div>
                     <div className="flex justify-between text-[11px] font-bold mb-1.5">
                        <span className="text-slate-700">Medical Coverage Logic</span>
                        <span className="text-slate-900">20%</span>
                     </div>
                     <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-[#FF6D00] rounded-full" style={{ width: '20%' }}></div>
                     </div>
                  </div>
               </div>
            </div>
        </div>
    );
  };


  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="p-4 pb-24 max-w-md mx-auto space-y-6">
      <div className="bg-primary text-white rounded-3xl p-6 shadow-xl relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-4 opacity-90">
             <ShieldCheck className="w-5 h-5" />
             <span className="text-sm font-medium">Active Policy • ZOHA Health</span>
          </div>
          <h2 className="text-3xl font-bold mb-1">ZURI SmartHealth</h2>
          <p className="text-blue-200 text-sm mb-6">Polis #ZH-2026-9901</p>
          
          <div className="flex justify-between items-end border-t border-blue-800/50 pt-4">
             <div>
                <div className="text-xs text-blue-200 mb-1">Coverage Limit Remaining</div>
                <div className="text-xl font-bold">Rp 45.500.000</div>
             </div>
          </div>
        </div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-600 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-5">
          <h3 className="text-lg font-bold text-primary flex items-center gap-2">
            Claim Center
          </h3>
          <button onClick={() => setShowAIModal(true)} className="p-1 text-gray-400 hover:text-primary transition-colors flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider bg-gray-50 px-2 py-1 rounded">
            <Bot className="w-3.5 h-3.5" /> AI Rules
          </button>
        </div>

        {/* Claim Type Selector */}
        <div className="flex bg-gray-100 p-1 rounded-xl mb-4">
           <button 
             onClick={() => setClaimType('manual')}
             className={`flex-1 py-2 text-[10px] font-bold rounded-lg transition-colors ${claimType === 'manual' ? 'bg-white text-primary shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
           >
             Standard
           </button>
           <button 
             onClick={() => setClaimType('auto')}
             className={`flex-1 py-2 text-[10px] font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5 ${claimType === 'auto' ? 'bg-white text-teal-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
           >
             <Zap className="w-3.5 h-3.5" /> FAST
           </button>
           <button 
             onClick={() => setClaimType('predict')}
             className={`flex-1 py-2 text-[10px] font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5 ${claimType === 'predict' ? 'bg-white text-indigo-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
           >
             <Activity className="w-3.5 h-3.5" /> Predict
           </button>
        </div>

        <PreAnalyzeBanner />

        <AnimatePresence mode="wait">
          {claimType === 'auto' && (
            <motion.div key="auto" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
              
              {autoStep === 'upload' && (
                <div className="space-y-4">
                  <div className="text-xs text-gray-500 leading-relaxed bg-blue-50/50 p-3 rounded-xl border border-blue-100/50">
                    Upload your digital receipt from any telemedicine, clinic, or hospital for our FAST Engine reimbursement. <strong>Valid for doctor consultation visits only.</strong>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 border border-gray-200 rounded-xl bg-gray-50">
                    <div className="flex items-center gap-3">
                       <FileText className="w-5 h-5 text-gray-400" />
                       <div>
                          <p className="text-[11px] font-bold text-gray-800">Kwitansi Konsultasi / RS</p>
                          <p className="text-[9px] text-gray-500">Doctor visit or hospital receipt</p>
                       </div>
                    </div>
                    <button className="text-[10px] font-bold text-primary border border-primary/30 px-3 py-1 rounded hover:bg-primary hover:text-white transition-colors">Upload</button>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mt-4">
                     <button 
                       onClick={handleSmartClaim}
                       disabled={isProcessingAuto}
                       className="w-full bg-primary hover:bg-blue-800 text-white py-3 rounded-xl text-xs font-bold flex justify-center items-center gap-1 shadow-md transition-all active:scale-95 disabled:opacity-70 disabled:scale-100"
                     >
                       {isProcessingAuto ? (
                         <span className="flex items-center gap-2"><div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin"/> Processing...</span>
                       ) : (
                         <span className="flex items-center gap-1"><Zap className="w-3.5 h-3.5"/> Submit FAST Claim</span>
                       )}
                     </button>
                     <button 
                       onClick={handleAutoAnalyze}
                       className="w-full bg-gray-900 text-white py-3 rounded-xl text-xs font-bold flex justify-center items-center gap-1 shadow-md transition-all active:scale-95 hover:bg-gray-800"
                     >
                       <Bot className="w-3.5 h-3.5"/> Pre-Analyze
                     </button>
                  </div>
                </div>
              )}

              {autoStep === 'analyzing' && (
                <div className="py-8 flex flex-col items-center justify-center text-center">
                   <div className="relative w-20 h-20 mb-6">
                      <div className="absolute inset-0 bg-teal-100 rounded-full animate-ping opacity-50"></div>
                      <div className="absolute inset-0 bg-teal-600 rounded-full flex items-center justify-center">
                         <Bot className="w-8 h-8 text-white animate-pulse" />
                      </div>
                   </div>
                   <h4 className="font-bold text-gray-800 text-lg">AI Extracting Receipt</h4>
                   <p className="text-xs text-gray-500 mt-2 max-w-[250px]">Analyzing telemedicine data and matching with FAST Engine rules...</p>
                </div>
              )}

              {autoStep === 'result' && (
                <div className="space-y-4">
                  <PreAnalyzeResult score={95} />
                  
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 space-y-3">
                     <p className="text-[10px] font-bold uppercase text-gray-500 tracking-wider">Analysis Breakdown</p>
                     <div className="flex justify-between items-center text-[11px]">
                        <span className="text-gray-600">Konsultasi Dokter Umum</span>
                        <span className="font-bold text-green-600">Rp 150.000 (Approved)</span>
                     </div>
                  </div>

                  <button onClick={handleSmartClaim} className="w-full bg-primary hover:bg-blue-800 text-white py-3.5 rounded-xl font-bold flex justify-center items-center gap-2 shadow-md transition-all active:scale-95">
                    Submit FAST Claim
                  </button>
                  <button onClick={() => setAutoStep('upload')} className="w-full py-2 text-xs font-bold text-gray-500">
                    Cancel
                  </button>
                </div>
              )}

              {autoStep === 'approved' && (
                <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-green-50 text-green-700 border border-green-200 rounded-xl p-4 text-center">
                  <CheckCircle2 className="w-8 h-8 mx-auto mb-2 text-green-500" />
                  <div className="font-bold">Claim Approved!</div>
                  <div className="text-[11px] mt-1">Funds will be disbursed automatically via FAST Engine.</div>
                  <button onClick={() => setAutoStep('upload')} className="mt-4 text-xs font-bold text-green-800 hover:underline">
                    Submit Another Claim
                  </button>
                </motion.div>
              )}
            </motion.div>
          )}

          {claimType === 'manual' && (
            <motion.div key="manual" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
              
              {manualStep === 'upload' && (
                <div className="space-y-4">
                  <div className="text-xs text-gray-500 leading-relaxed">
                    Upload your documents. You can use our AI Pre-Analysis to check your approval probability, or submit directly to our human review team. Max 60 days from incident.
                  </div>
                  
                  <div className="space-y-2">
                     <div className="flex items-center justify-between p-3 border border-gray-200 rounded-xl bg-gray-50">
                        <div className="flex items-center gap-3">
                           <FileText className="w-5 h-5 text-primary" />
                           <div>
                              <p className="text-[11px] font-bold text-gray-800">Formulir Klaim</p>
                              <p className="text-[9px] text-gray-500">Filled & signed</p>
                           </div>
                        </div>
                        <button className="text-xs font-bold text-primary bg-blue-50 px-3 py-1 rounded">Upload</button>
                     </div>
                     <div className="flex items-center justify-between p-3 border border-gray-200 rounded-xl bg-gray-50">
                        <div className="flex items-center gap-3">
                           <FileText className="w-5 h-5 text-gray-400" />
                           <div>
                              <p className="text-[11px] font-bold text-gray-800">Kwitansi Asli & Rincian</p>
                              <p className="text-[9px] text-gray-500">Original receipt with details</p>
                           </div>
                        </div>
                        <button className="text-[10px] font-bold text-primary border border-primary/30 px-3 py-1 rounded">Select</button>
                     </div>
                     <div className="flex items-center justify-between p-3 border border-gray-200 rounded-xl bg-gray-50">
                        <div className="flex items-center gap-3">
                           <FileText className="w-5 h-5 text-gray-400" />
                           <div>
                              <p className="text-[11px] font-bold text-gray-800">Resume Medis (Opsional)</p>
                              <p className="text-[9px] text-gray-500">Medical resume / lab results</p>
                           </div>
                        </div>
                        <button className="text-[10px] font-bold text-primary border border-primary/30 px-3 py-1 rounded">Select</button>
                     </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mt-4">
                     <button 
                       onClick={() => setManualStep('submitted')}
                       className="w-full bg-primary hover:bg-blue-800 text-white py-3 rounded-xl text-xs font-bold flex justify-center items-center shadow-md transition-all active:scale-95"
                     >
                       Submit Claim
                     </button>
                     <button 
                       onClick={handleManualAnalyze}
                       className="w-full bg-gray-900 text-white py-3 rounded-xl text-xs font-bold flex justify-center items-center gap-1 shadow-md transition-all active:scale-95 hover:bg-gray-800"
                     >
                       <Bot className="w-3.5 h-3.5"/> Pre-Analyze
                     </button>
                  </div>
                </div>
              )}

              {manualStep === 'analyzing' && (
                <div className="py-8 flex flex-col items-center justify-center text-center">
                   <div className="relative w-20 h-20 mb-6">
                      <div className="absolute inset-0 bg-teal-100 rounded-full animate-ping opacity-50"></div>
                      <div className="absolute inset-0 bg-primary rounded-full flex items-center justify-center">
                         <Bot className="w-8 h-8 text-white animate-pulse" />
                      </div>
                   </div>
                   <h4 className="font-bold text-gray-800 text-lg">AI Reviewing Documents</h4>
                   <p className="text-xs text-gray-500 mt-2 max-w-[250px]">Extracting receipt amounts, checking coverage limits, and verifying dates...</p>
                </div>
              )}

              {manualStep === 'result' && (
                <div className="space-y-4">
                  <PreAnalyzeResult score={65} />
                  
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 space-y-3">
                     <p className="text-[10px] font-bold uppercase text-gray-500 tracking-wider">Analysis Breakdown</p>
                     <div className="flex justify-between items-center text-[11px]">
                        <span className="text-gray-600">Dokumen Lengkap</span>
                        <span className="font-bold text-green-600">Valid</span>
                     </div>
                     <div className="flex justify-between items-center text-[11px]">
                        <span className="text-gray-600">Batas Waktu (&lt; 60 Hari)</span>
                        <span className="font-bold text-green-600">Valid (12 Hari)</span>
                     </div>
                     <div className="flex justify-between items-center text-[11px]">
                        <span className="text-gray-600">Sisa Limit Tahunan</span>
                        <span className="font-bold text-green-600">Mencukupi</span>
                     </div>
                     <div className="flex justify-between items-center text-[11px]">
                        <span className="text-gray-600">Diagnosis/Tindakan</span>
                        <span className="font-bold text-orange-500">Need Review</span>
                     </div>
                  </div>

                  <button onClick={() => setManualStep('submitted')} className="w-full bg-primary hover:bg-blue-800 text-white py-3.5 rounded-xl font-bold flex justify-center items-center gap-2 shadow-md transition-all active:scale-95">
                    Submit to Zurich Team
                  </button>
                  <button onClick={() => setManualStep('upload')} className="w-full py-2 text-xs font-bold text-gray-500">
                    Re-upload Documents
                  </button>
                </div>
              )}

              {manualStep === 'submitted' && (
                <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-blue-50 text-blue-900 border border-blue-200 rounded-xl p-6 text-center">
                  <CheckCircle2 className="w-10 h-10 mx-auto mb-3 text-primary" />
                  <div className="font-bold text-lg mb-1">Claim Submitted!</div>
                  <div className="text-xs text-blue-800/80 mb-4">Your documents have been securely sent to our human review team. We will notify you once the review is complete (ETA: 1-2 business days).</div>
                  <button onClick={() => setManualStep('upload')} className="text-xs font-bold text-primary hover:underline">
                    Submit Another Claim
                  </button>
                </motion.div>
              )}

            </motion.div>
          )}

          {claimType === 'predict' && (
            <motion.div key="predict" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
               {predictStep === 'form' && (
                 <div className="space-y-4">
                    <div className="text-xs text-gray-500 leading-relaxed bg-indigo-50/50 p-3 rounded-xl border border-indigo-100/50">
                       Check your coverage completely document-free before any treatment. Enter details below to see expected approval rates.
                    </div>

                    <div className="space-y-3">
                       <div>
                          <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1 block">Diagnosis / Procedure</label>
                          <input type="text" placeholder="e.g. Root Canal, Lasik, Dengue Fever..." className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-shadow" />
                       </div>
                       <div>
                          <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1 block">Facility & Doctor Type</label>
                          <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 text-gray-700 appearance-none">
                             <option>Hospital - General Practitioner (Reimbursement)</option>
                             <option>Hospital - Specialist (Reimbursement)</option>
                             <option>Telemedicine - General Practitioner (Reimbursement)</option>
                             <option>Telemedicine - Specialist (Reimbursement)</option>
                             <option>Clinic - General Practitioner (Reimbursement)</option>
                          </select>
                       </div>
                       <div>
                          <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1 block">Estimated Cost</label>
                          <div className="relative">
                            <span className="absolute left-4 top-3 text-gray-400 text-sm">Rp</span>
                            <input type="text" placeholder="5.000.000" className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-shadow" />
                          </div>
                       </div>
                    </div>

                    <button 
                       onClick={handlePredict}
                       className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3.5 rounded-xl text-sm font-bold flex justify-center items-center gap-2 shadow-md transition-all active:scale-95 mt-4"
                    >
                       <Bot className="w-4 h-4"/> Predict Coverage
                    </button>
                 </div>
               )}

               {predictStep === 'analyzing' && (
                 <div className="py-8 flex flex-col items-center justify-center text-center">
                    <div className="relative w-20 h-20 mb-6">
                       <div className="absolute inset-0 bg-indigo-100 rounded-full animate-ping opacity-50"></div>
                       <div className="absolute inset-0 bg-indigo-600 rounded-full flex items-center justify-center">
                          <Bot className="w-8 h-8 text-white animate-pulse" />
                       </div>
                    </div>
                    <h4 className="font-bold text-gray-800 text-lg">AI Checking Policies</h4>
                    <p className="text-[10px] font-bold text-gray-500 mt-2 max-w-[250px]">Running simulation against your policy limits...</p>
                 </div>
               )}

               {predictStep === 'result' && (
                 <div className="space-y-4">
                    <PreAnalyzeResult score={98} mode="predict" />
                    
                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 space-y-3">
                       <p className="text-[10px] font-bold uppercase text-gray-500 tracking-wider">Prediction Factors</p>
                       <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-green-500 mt-0.5 shrink-0" />
                          <p className="text-[11px] text-gray-600">Procedure <strong className="text-gray-800">Dengue Fever Treatment</strong> is fully covered under Inpatient Rider.</p>
                       </div>
                       <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-green-500 mt-0.5 shrink-0" />
                          <p className="text-[11px] text-gray-600">Estimated cost <strong>Rp 5.000.000</strong> is well within your <strong>Rp 50.000.000</strong> annual limit.</p>
                       </div>
                    </div>

                    <button onClick={() => setPredictStep('form')} className="w-full py-2 text-xs font-bold text-gray-500">
                      Predict Another Case
                    </button>
                 </div>
               )}
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      <AnimatePresence>
        {showAIModal && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 backdrop-blur-sm sm:items-center p-4"
            onClick={() => setShowAIModal(false)}
          >
            <motion.div 
              initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={e => e.stopPropagation()}
              className="bg-white w-full max-w-md rounded-t-3xl sm:rounded-3xl p-6 pb-12 shadow-2xl space-y-6"
            >
              <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-2 sm:hidden" />
              <h3 className="text-xl font-bold text-gray-800 text-center">AI Claim Predictor</h3>
              <p className="text-[11px] text-gray-500 text-center mb-6 max-w-[280px] mx-auto leading-relaxed">
                Before submitting a manual reimbursement to our team, AI evaluates your claim to give you a success probability.
              </p>
              
              <div className="space-y-4">
                {[
                  { label: 'Policy Eligibility & Limits', value: 35, color: 'bg-primary' },
                  { label: 'Time Limit (Max 60 Days)', value: 25, color: 'bg-teal-500' },
                  { label: 'Document Completeness', value: 20, color: 'bg-indigo-500' },
                  { label: 'Medical Coverage Logic', value: 20, color: 'bg-orange-500' },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between text-[11px] mb-1">
                      <span className="font-bold text-gray-700">{item.label}</span>
                      <span className="font-bold text-gray-900">{item.value}%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }} animate={{ width: `${item.value}%` }} 
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className={`h-full rounded-full ${item.color}`} 
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              <button onClick={() => setShowAIModal(false)} className="w-full py-3 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 transition-colors mt-4">
                Understood
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
}