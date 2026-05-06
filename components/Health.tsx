import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Flame, Trophy, Lock, ActivitySquare, HeartPulse, Database, Clock, History, Calendar, Plus, X } from 'lucide-react';

export default function Health() {
  const [activeTab, setActiveTab] = useState<'daily' | 'history'>('daily');
  const [showLogForm, setShowLogForm] = useState(false);
  const [showActivityHistory, setShowActivityHistory] = useState(false);
  
  const [activityType, setActivityType] = useState('Walking');
  const [activityDuration, setActivityDuration] = useState('30');
  const [loggedActivities, setLoggedActivities] = useState([
     { id: 1, type: 'Walking', duration: 45, date: 'May 4th, 08:30 AM' },
     { id: 2, type: 'Yoga', duration: 20, date: 'May 3rd, 06:15 PM' },
  ]);

  const handleSaveActivity = () => {
     const newLog = {
        id: Date.now(),
        type: activityType,
        duration: Number(activityDuration),
        date: 'Just now'
     };
     setLoggedActivities([newLog, ...loggedActivities]);
     setShowLogForm(false);
  };

  const [missions, setMissions] = useState([
    { id: 1, title: 'Morning Brisk Walk', desc: '15 mins light walk to kickstart metabolism without straining joints.', completed: true, points: 50, metric: '15 min' },
    { id: 2, title: 'Post-Lunch Stretch', desc: '10 mins desk yoga focusing on lower back and posture.', completed: false, points: 20, metric: '10 min' },
    { id: 3, title: 'Hydration Goal', desc: 'Drink 2.5L of water today to support healthy weight management.', completed: false, points: 30, metric: '2.5L' },
  ]);

  const [history] = useState([
    { id: 4, date: 'Yesterday', title: 'Evening Yoga Flow', points: 40, status: 'completed' },
    { id: 5, date: 'Yesterday', title: 'Avoid Sugary Drinks', points: 30, status: 'completed' },
    { id: 6, date: 'May 3rd', title: 'Light Swimming', points: 0, status: 'missed' },
  ]);

  const toggleMission = (id: number) => {
    setMissions(missions.map(m => m.id === id ? { ...m, completed: !m.completed } : m));
  };

  const totalPoints = missions.filter(m => m.completed).reduce((acc, m) => acc + m.points, 1250);

  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="p-4 pb-24 max-w-md mx-auto space-y-6">
      
      {/* Gamification Headers */}
      <div className="flex gap-4">
        <div className="flex-1 bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-3">
           <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
              <Trophy className="w-5 h-5 text-amber-500" />
           </div>
           <div>
              <div className="text-xs text-slate-500 uppercase font-semibold tracking-wide">Zuri Points</div>
              <div className="text-xl font-bold text-slate-800">{totalPoints}</div>
           </div>
        </div>
        <div className="flex-1 bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-3">
           <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
              <Flame className="w-5 h-5 text-orange-500" />
           </div>
           <div>
              <div className="text-xs text-slate-500 uppercase font-semibold tracking-wide">Streak</div>
              <div className="text-xl font-bold text-slate-800">5 Days</div>
           </div>
        </div>
      </div>

      {/* BMI Tracker */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
         <h4 className="text-sm font-bold uppercase tracking-widest text-slate-800 mb-4">BMI & Health Metrics</h4>
         
         <div className="flex gap-4 mb-4">
            <div className="flex-1 bg-slate-50 p-3 rounded-xl border border-slate-100">
               <label className="text-[10px] uppercase font-bold text-slate-500 block mb-1">Height (cm)</label>
               <input type="number" defaultValue="175" className="w-full bg-transparent font-bold text-lg text-slate-800 focus:outline-none" />
            </div>
            <div className="flex-1 bg-slate-50 p-3 rounded-xl border border-slate-100">
               <label className="text-[10px] uppercase font-bold text-slate-500 block mb-1">Weight (kg)</label>
               <input type="number" defaultValue="86" className="w-full bg-transparent font-bold text-lg text-slate-800 focus:outline-none" />
            </div>
         </div>
         
         <div className="flex items-center gap-4 bg-orange-50 border border-orange-100 p-4 rounded-xl">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm border border-orange-200">
               <span className="font-bold text-orange-600 text-lg">28.1</span>
            </div>
            <div>
               <div className="font-bold text-orange-800 text-sm">Overweight</div>
               <div className="text-[10px] text-orange-700/80 leading-relaxed mt-0.5">
                  Your intelligent gamification missions have been dynamically adjusted to prioritize low-impact cardio.
               </div>
            </div>
         </div>
         
         <button className="w-full mt-4 bg-slate-900 hover:bg-slate-800 text-white py-3 rounded-xl text-xs font-bold transition-colors">
            Update Measurements
         </button>
      </div>

      {/* Smart Exercises Based on Profiling */}
      <div className="space-y-3">
        <h3 className="font-bold text-lg text-gray-800 px-1">Smart Activity Guide</h3>
        <div className="bg-teal-50 border border-teal-100 rounded-xl p-4 mb-4">
           <p className="text-[11px] text-teal-800 leading-relaxed font-medium">
             Missions are strictly tailored for your Health Score (83) and BMI profile to avoid overexertion. We recommend low-impact activities.
           </p>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
           {/* Recommended */}
           <div className="bg-white rounded-2xl p-4 flex gap-3 shadow-sm border border-teal-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-10 h-10 bg-teal-50 rounded-bl-3xl flex items-start justify-end p-2 opacity-50"><Check className="w-4 h-4 text-teal-600"/></div>
              <ActivitySquare className="w-6 h-6 text-teal-600 shrink-0" />
              <div>
                 <span className="text-[13px] font-bold text-gray-800 block mb-0.5">Light Cardio</span>
                 <span className="text-[10px] text-gray-500">Brisk walking, yoga</span>
              </div>
           </div>
           {/* Restricted */}
           <div className="bg-white rounded-2xl p-4 flex gap-3 shadow-sm border border-gray-200 relative overflow-hidden opacity-60 grayscale">
              <div className="absolute top-0 right-0 w-10 h-10 bg-gray-50 rounded-bl-3xl flex items-start justify-end p-2"><Lock className="w-3 h-3 text-gray-400"/></div>
              <Flame className="w-6 h-6 text-gray-400 shrink-0" />
              <div>
                 <span className="text-[13px] font-bold text-gray-800 block mb-0.5">Heavy HIIT</span>
                 <span className="text-[10px] text-gray-500">Not recommended</span>
              </div>
           </div>
        </div>
      </div>

      {/* Device Sync & Activity Logging */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col gap-4">
         <h4 className="text-sm font-bold uppercase tracking-widest text-slate-800 mb-2">Connected Devices & Logs</h4>
         
         {/* Sync Device */}
         <div className="space-y-2">
            <div className="flex items-center justify-between p-3 border border-slate-100 rounded-xl bg-slate-50">
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white shadow-sm border border-slate-100 rounded-full flex items-center justify-center shrink-0">
                     <ActivitySquare className="w-5 h-5 text-rose-500" />
                  </div>
                  <div>
                     <p className="text-[11px] font-bold text-slate-800">Apple Health</p>
                     <p className="text-[9px] text-slate-500">Synced 2 hours ago • 4,230 steps</p>
                  </div>
               </div>
               <button className="text-[10px] font-bold text-primary border border-primary/30 px-3 py-1 rounded hover:bg-primary/5 transition-colors">
                  Sync
               </button>
            </div>
            <button className="w-full border border-dashed border-slate-200 text-slate-500 hover:text-slate-700 hover:border-slate-300 hover:bg-slate-50 py-3 rounded-xl text-xs font-bold transition-colors flex justify-center items-center gap-2">
               <Plus className="w-4 h-4" /> Add Data Source
            </button>
         </div>

         {/* Manual Log */}
         <div className="border-t border-slate-100 pt-4 mt-2">
            <div className="flex items-center justify-between mb-3">
               <h5 className="text-xs font-bold uppercase tracking-widest text-slate-600">Manual Activity</h5>
               <button onClick={() => setShowActivityHistory(true)} className="text-[10px] font-bold text-primary hover:underline">
                  View History
               </button>
            </div>

            {!showLogForm ? (
               <button onClick={() => setShowLogForm(true)} className="w-full bg-slate-900 hover:bg-slate-800 text-white py-3 rounded-xl text-xs font-bold transition-colors flex justify-center items-center gap-2">
                  <Plus className="w-4 h-4" /> Log Activity Manually
               </button>
            ) : (
               <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="space-y-3 bg-white p-4 border border-slate-200 rounded-xl shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                     <h5 className="text-xs font-bold text-slate-800">Log Activity</h5>
                     <button onClick={() => setShowLogForm(false)} className="p-1 hover:bg-slate-100 rounded-full transition-colors"><X className="w-4 h-4 text-slate-400" /></button>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                     <div>
                        <label className="text-[10px] uppercase font-bold text-slate-500 block mb-1">Activity Type</label>
                        <select 
                           value={activityType}
                           onChange={(e) => setActivityType(e.target.value)}
                           className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-primary"
                        >
                           <option>Walking</option>
                           <option>Running</option>
                           <option>Cycling</option>
                           <option>Swimming</option>
                           <option>Yoga</option>
                        </select>
                     </div>
                     <div>
                        <label className="text-[10px] uppercase font-bold text-slate-500 block mb-1">Duration (mins)</label>
                        <input 
                           type="number" 
                           value={activityDuration}
                           onChange={(e) => setActivityDuration(e.target.value)}
                           className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-primary" 
                        />
                     </div>
                  </div>
                  <button onClick={handleSaveActivity} className="w-full bg-primary hover:bg-blue-800 text-white py-2 rounded-lg text-xs font-bold transition-colors">
                     Save Activity
                  </button>
               </motion.div>
            )}
         </div>
      </div>

      {/* Daily Missions */}
      <div className="bg-primary rounded-3xl p-6 shadow-sm overflow-hidden text-white relative">
         <div className="absolute top-0 right-0 p-6 opacity-10">
           <Trophy className="w-24 h-24" />
         </div>
         
         <div className="flex items-center justify-between mb-6 relative z-10">
            <h4 className="text-sm font-bold uppercase tracking-widest opacity-90">Missions</h4>
            <div className="flex bg-white/10 rounded-lg p-1">
               <button 
                 onClick={() => setActiveTab('daily')}
                 className={`px-3 py-1 text-[10px] font-bold rounded-md transition-colors ${activeTab === 'daily' ? 'bg-white text-primary' : 'text-white/70 hover:text-white'}`}
               >
                 Today
               </button>
               <button 
                 onClick={() => setActiveTab('history')}
                 className={`px-3 py-1 text-[10px] font-bold rounded-md transition-colors ${activeTab === 'history' ? 'bg-white text-primary' : 'text-white/70 hover:text-white'}`}
               >
                 History
               </button>
            </div>
         </div>
         
         <AnimatePresence mode="wait">
            {activeTab === 'daily' ? (
              <motion.div key="daily" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} className="space-y-3 relative z-10">
                 {missions.map(mission => (
                    <label 
                      key={mission.id} 
                      onClick={(e) => { e.preventDefault(); toggleMission(mission.id); }}
                      className={`flex flex-col bg-white/10 hover:bg-white/20 p-3 rounded-xl cursor-pointer transition-colors border ${mission.completed ? 'border-white/30 bg-white/20' : 'border-transparent'}`}
                    >
                       <div className="flex items-start gap-3 w-full">
                         <div className="pt-0.5">
                            <input type="checkbox" checked={mission.completed} readOnly className="accent-teal-400 w-4 h-4" />
                         </div>
                         <div className="flex-1">
                            <div className="flex justify-between items-start mb-1">
                               <span className={`text-sm font-bold ${mission.completed ? 'opacity-70 line-through text-teal-100' : 'text-white'}`}>
                                  {mission.title}
                               </span>
                               <div className="text-xs font-bold text-teal-300 whitespace-nowrap ml-2">
                                  +{mission.points} QP
                               </div>
                            </div>
                            <p className={`text-[11px] leading-relaxed ${mission.completed ? 'opacity-60 line-through text-teal-50' : 'text-blue-100'}`}>
                               {mission.desc}
                            </p>
                            <div className="mt-2 text-[10px] bg-black/20 self-start inline-block px-2 py-0.5 rounded text-white/80 font-medium">
                               <Clock className="w-3 h-3 inline pb-0.5 mr-1" /> {mission.metric}
                            </div>
                         </div>
                       </div>
                    </label>
                 ))}
              </motion.div>
            ) : (
              <motion.div key="history" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} className="space-y-3 relative z-10">
                 <div className="max-h-[300px] overflow-y-auto pr-2 space-y-3 custom-scrollbar">
                    {history.map(item => (
                       <div key={item.id} className="flex items-center justify-between bg-white/5 p-3 rounded-xl border border-white/10">
                          <div className="flex items-center gap-3">
                             <div className={`w-8 h-8 rounded-full flex items-center justify-center ${item.status === 'completed' ? 'bg-teal-500/20 text-teal-300' : 'bg-red-500/20 text-red-300'}`}>
                                {item.status === 'completed' ? <Check className="w-4 h-4" /> : <Clock className="w-4 h-4" />}
                             </div>
                             <div>
                                <div className="text-xs font-bold text-white mb-0.5">{item.title}</div>
                                <div className="text-[10px] text-white/50">{item.date}</div>
                             </div>
                          </div>
                          <div className={`text-xs font-bold ${item.status === 'completed' ? 'text-teal-300' : 'text-white/40'}`}>
                             {item.status === 'completed' ? `+${item.points} QP` : '0 QP'}
                          </div>
                       </div>
                    ))}
                 </div>
                 <button className="w-full py-2 mt-2 bg-white/10 hover:bg-white/20 text-white text-[11px] font-bold rounded-lg transition-colors">
                    See Full History
                 </button>
              </motion.div>
            )}
         </AnimatePresence>
      </div>

      {/* B2B Data Engine Privacy Notice */}
      <div className="flex items-start gap-3 bg-indigo-50 border border-indigo-100 rounded-xl p-4">
         <Database className="w-5 h-5 text-indigo-500 mt-0.5 shrink-0" />
         <div>
            <div className="text-xs font-bold uppercase tracking-wider text-indigo-800 mb-1">Corporate Gamification Sync</div>
            <p className="text-[11px] text-indigo-700/90 leading-relaxed">
               Your completed missions, achievements, and points are synced directly to your Corporate HR Dashboard for the company-wide health leaderboards and wellness rewards.
            </p>
         </div>
      </div>

      {/* Activity History Modal */}
      <AnimatePresence>
        {showActivityHistory && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-slate-900/40 z-50 flex items-end justify-center sm:items-center">
            <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} className="bg-white w-full max-w-md rounded-t-3xl sm:rounded-3xl p-6 shadow-xl h-[80vh] sm:h-[60vh] flex flex-col">
               <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-lg text-slate-800 flex items-center gap-2"><History className="w-5 h-5 text-primary"/> Activity History</h3>
                  <button onClick={() => setShowActivityHistory(false)} className="p-2 hover:bg-slate-100 rounded-full transition-colors"><X className="w-5 h-5 text-slate-400" /></button>
               </div>
               
               <div className="flex-1 overflow-y-auto space-y-3 custom-scrollbar pr-2">
                 {loggedActivities.map((log) => (
                    <div key={log.id} className="flex items-center justify-between p-4 border border-slate-100 bg-slate-50 rounded-xl">
                       <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-white rounded-full shadow-sm flex flex-col items-center justify-center border border-slate-100">
                             <ActivitySquare className="w-4 h-4 text-primary mb-0.5" />
                          </div>
                          <div>
                             <div className="text-xs font-bold text-slate-800">{log.type}</div>
                             <div className="text-[10px] text-slate-500 flex items-center gap-1 mt-0.5"><Calendar className="w-3 h-3"/> {log.date}</div>
                          </div>
                       </div>
                       <div className="text-right">
                          <div className="text-sm font-bold text-slate-800">{log.duration}</div>
                          <div className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Mins</div>
                       </div>
                    </div>
                 ))}
                 
                 {loggedActivities.length === 0 && (
                   <div className="text-center text-slate-500 text-sm py-10">No activities logged yet.</div>
                 )}
               </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
}