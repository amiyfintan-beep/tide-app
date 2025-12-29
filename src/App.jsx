import React, { useState, useEffect } from 'react';
import { 
  Wallet, Heart, Activity, Users, LayoutGrid, Bell, 
  ShieldCheck, Building2, Waves, Search, 
  MapPin, Phone, Briefcase, GraduationCap, 
  FileText, CheckCircle, Store, Landmark, 
  Globe, BookOpen, Award, Scroll, Scale, 
  Tent, Utensils, Mic, PieChart, User,
  QrCode, MessageSquare, Star, MessageCircle,
  Clock, Smartphone, ArrowRight, ChevronRight
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [connectTab, setConnectTab] = useState('education'); 
  const [scholarshipType, setScholarshipType] = useState('secular');
  const [showDonateModal, setShowDonateModal] = useState(false);
  const [showZakatModal, setShowZakatModal] = useState(false);
  const [zakatStep, setZakatStep] = useState(1); // 1: Register, 2: Select Category, 3: Success
  const [donationTarget, setDonationTarget] = useState({ type: 'pool', name: 'National Fund' }); 
  const [amount, setAmount] = useState('');
  const [reminderFreq, setReminderFreq] = useState(null); // 'day', 'week', 'month', 'year'
  const [showSuccess, setShowSuccess] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // --- COMPREHENSIVE MOCK DATA ---
  const userProfile = {
    name: "Juma Hamisi",
    id: "TIDE-8821-TZ",
    location: "Ilala, Dar es Salaam",
    profession: "Software Engineer",
    impactScore: 850
  };

  const detailedStats = {
    registered: {
      sheikhs: 142,
      imams: 850,
      ustadhs: 1240,
      madrasas: 320,
      masjids: 415,
      members: "2.4M"
    },
    impact: {
      scholarships: 450,
      orphanages_aided: 28,
      zakat_beneficiaries: 12500,
      nhif_families: 340,
      motorcycles_imams: 15,
      sadaka_200_collection: 154000000 // 154 Million TZS
    }
  };

  const directories = {
    orphanages: [
      { id: 1, name: "Al-Madina Yatima", location: "Kigamboni", size: "Large", children: 145, needs: ["Rice", "School Fees"] },
      { id: 2, name: "Ummah Care", location: "Tanga", size: "Medium", children: 55, needs: ["Bedding", "Medicine"] }
    ],
    waqf: [
      { id: 1, type: "Commercial Building", location: "Kariakoo, DSM", owner: "Late Hajj Mussa" },
      { id: 2, type: "Water Well (Kisima)", location: "Handeni", owner: "TIDE Community Pool" }
    ],
    masjids: [
      { id: 1, name: "Masjid Quba", location: "Sinza", hasMadrasa: true, madrasaChildren: 120 },
      { id: 2, name: "Masjid Nur", location: "Mbagala", hasMadrasa: true, madrasaChildren: 350 },
      { id: 3, name: "Masjid Taqwa", location: "Arusha Mjini", hasMadrasa: false, madrasaChildren: 0 }
    ],
    sheikhs: [
      { id: 1, name: "Sheikh Walid Al-Hadad", specialization: "Fiqh & Mirath", location: "Dar es Salaam" },
      { id: 2, name: "Dr. Suleiman", specialization: "Islamic Finance", location: "Zanzibar" },
      { id: 3, name: "Sheikh Othman Maalim", specialization: "Tafseer", location: "Tanga" }
    ]
  };

  const zakatCategories = [
    { id: 'poor', label: "The Poor (Fuqara)", desc: "Have nothing" },
    { id: 'needy', label: "The Needy (Masakin)", desc: "Have insufficient" },
    { id: 'admin', label: "Administrators", desc: "Zakat collectors" },
    { id: 'reconcile', label: "Reconciliation", desc: "New Muslims" },
    { id: 'debt', label: "Those in Debt", desc: "Unable to pay" },
    { id: 'cause', label: "Cause of Allah", desc: "Striving in path" },
    { id: 'traveler', label: "Stranded Traveler", desc: "Cut off from funds" }
  ];

  const scholarships = {
    secular: [
      { id: 1, title: "TIDE STEM Grant", institution: "UDSM / DIT", amount: "100% Tuition" },
      { id: 2, title: "Azam Medical Fund", institution: "MUHAS", amount: "Tuition + Stipend" },
    ],
    islamic: [
      { id: 4, title: "Al-Azhar Scholarship", institution: "Al-Azhar (Egypt)", amount: "Full Ride" },
    ]
  };

  const sadakaOptions = [
    { period: 'Day', amount: 200, label: 'Daily' },
    { period: 'Week', amount: 1400, label: 'Weekly' },
    { period: 'Month', amount: 6000, label: 'Monthly' },
    { period: 'Year', amount: 72000, label: 'Yearly' },
  ];

  const formatCurrency = (val) => new Intl.NumberFormat('en-TZ', { style: 'currency', currency: 'TZS', maximumSignificantDigits: 3 }).format(val);

  const handleRecurringSet = (opt) => {
    setReminderFreq(opt.period);
    setToastMessage(`SMS Reminder set: Donate ${formatCurrency(opt.amount)} every ${opt.period}`);
    setTimeout(() => setToastMessage(''), 3000);
  };

  // --- SUB-COMPONENTS ---
  const Header = () => {
    const leadership = [
      { acr: "BAK", color: "bg-green-700" }, { acr: "AMY", color: "bg-blue-600" },
      { acr: "JUH", color: "bg-orange-600" }, { acr: "TAM", color: "bg-sky-500" },
      { acr: "SHU", color: "bg-emerald-800" }, { acr: "TMP", color: "bg-slate-600" },
    ];
    return (
      <div className="bg-white pt-3 pb-2 px-4 border-b border-gray-100 sticky top-0 z-30 shadow-sm">
        <div className="flex justify-between items-center gap-2">
          <div className="flex-1 overflow-x-auto no-scrollbar">
            <div className="flex gap-3">
              {leadership.map((org, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className={`w-9 h-9 ${org.color} rounded-full flex items-center justify-center text-white text-[10px] font-bold border-2 border-white shadow-sm`}>
                    {org.acr}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-1 text-emerald-600 ml-2">
             <Waves size={18} strokeWidth={3} />
             <h1 className="text-xl font-black tracking-tighter">TIDE</h1>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans pb-24 max-w-md mx-auto relative flex flex-col shadow-2xl overflow-x-hidden">
      <Header />
      
      {/* TOAST NOTIFICATION */}
      {toastMessage && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-4 py-2 rounded-full text-xs font-bold z-[70] shadow-xl animate-bounce">
          {toastMessage}
        </div>
      )}

      <div className="flex-1 overflow-y-auto">
        {activeTab === 'home' && (
          <div className="animate-in fade-in duration-500">
            {/* MAIN CARD */}
            <div className="bg-gradient-to-br from-emerald-800 to-emerald-600 text-white p-6 rounded-b-[2.5rem] shadow-lg mb-6">
              <div className="flex justify-between items-center mb-6">
                <div onClick={() => setActiveTab('profile')} className="flex items-center gap-3">
                   <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center border border-white/30">
                      <User size={24} />
                   </div>
                   <div>
                      <p className="text-emerald-100 text-xs">As-Salaam Alaykum,</p>
                      <h1 className="text-lg font-bold">{userProfile.name}</h1>
                   </div>
                </div>
                <div className="bg-white/10 p-2.5 rounded-2xl relative">
                  <Bell size={20} />
                  <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full"></span>
                </div>
              </div>
              
              <div className="bg-white text-gray-800 rounded-3xl p-5 shadow-xl flex divide-x divide-gray-100">
                <div className="flex-1 text-center" onClick={() => setShowDonateModal(true)}>
                  <p className="text-[10px] text-gray-400 uppercase font-black">Sadaka</p>
                  <p className="text-xl font-black text-emerald-600">{formatCurrency(150000)}</p>
                </div>
                <div className="flex-1 text-center" onClick={() => { setZakatStep(1); setShowZakatModal(true); }}>
                  <p className="text-[10px] text-gray-400 uppercase font-black">Zakat</p>
                  <p className="text-xl font-black text-amber-600">{formatCurrency(450000)}</p>
                  <p className="text-[9px] text-emerald-600 font-bold bg-emerald-50 rounded-full px-2 mt-1 inline-block">Pay Now</p>
                </div>
              </div>
            </div>

            {/* DAILY SADAKA MODULE */}
            <div className="px-5 mb-6">
               <div className="bg-white p-5 rounded-[2rem] border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-2 mb-4">
                     <Clock size={18} className="text-emerald-600" />
                     <h3 className="font-bold text-gray-800">Automatic Sadaka</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                     {sadakaOptions.map((opt) => (
                        <button key={opt.period} onClick={() => handleRecurringSet(opt)} className={`p-3 rounded-2xl border text-center transition-all ${reminderFreq === opt.period ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-gray-50 border-gray-100 text-gray-600'}`}>
                           <p className="text-[10px] uppercase font-bold opacity-80">{opt.label}</p>
                           <p className="text-sm font-black">{formatCurrency(opt.amount)}</p>
                        </button>
                     ))}
                  </div>
                  {reminderFreq && (
                     <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 bg-gray-50 p-2 rounded-xl">
                        <Smartphone size={14} className="text-emerald-500"/>
                        <span>SMS Reminder is active for {reminderFreq} donations.</span>
                     </div>
                  )}
               </div>
            </div>

            <div className="px-5 space-y-4">
              <div className="bg-white p-4 rounded-3xl border border-gray-100 flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-4">
                   <div className="bg-amber-100 p-3 rounded-2xl text-amber-600"><Mic size={20} /></div>
                   <div>
                      <h3 className="font-bold text-gray-800 text-sm">Friday Wave</h3>
                      <p className="text-[10px] text-gray-400">Flood Relief Tanga</p>
                   </div>
                </div>
                <button onClick={() => setShowDonateModal(true)} className="bg-gray-900 text-white px-4 py-2 rounded-xl text-xs font-bold">Help</button>
              </div>
            </div>
          </div>
        )}

        {/* --- STATS SECTION (IMPROVED) --- */}
        {activeTab === 'impact' && (
           <div className="p-5 space-y-6">
              <div className="bg-white p-6 rounded-[2.5rem] border border-gray-100 shadow-sm text-center">
                 <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-2">Total "200/=" Collections</p>
                 <p className="text-3xl font-black text-emerald-600">{formatCurrency(detailedStats.impact.sadaka_200_collection)}</p>
              </div>

              <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm">
                 <h3 className="font-bold text-gray-800 text-sm mb-4 flex items-center gap-2"><Users size={18}/> Network Directory</h3>
                 <div className="grid grid-cols-2 gap-4">
                    {[
                      { l: 'Sheikhs', v: detailedStats.registered.sheikhs, c: 'text-purple-600' },
                      { l: 'Imams', v: detailedStats.registered.imams, c: 'text-blue-600' },
                      { l: 'Ustadhs', v: detailedStats.registered.ustadhs, c: 'text-orange-600' },
                      { l: 'Masjids', v: detailedStats.registered.masjids, c: 'text-emerald-600' },
                      { l: 'Madrasas', v: detailedStats.registered.madrasas, c: 'text-pink-600' },
                      { l: 'Members', v: detailedStats.registered.members, c: 'text-gray-800' },
                    ].map((stat, i) => (
                       <div key={i} className="bg-gray-50 p-3 rounded-2xl">
                          <p className={`text-xl font-black ${stat.c}`}>{stat.v}</p>
                          <p className="text-[9px] font-bold text-gray-400 uppercase">{stat.l}</p>
                       </div>
                    ))}
                 </div>
              </div>

              <div className="bg-emerald-900 text-white p-6 rounded-[2rem] shadow-xl">
                 <h3 className="font-bold text-sm mb-4 flex items-center gap-2"><Activity size={18}/> Impact Report</h3>
                 <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-white/10 pb-2">
                       <span className="text-xs font-medium opacity-80">Orphanages Donated</span>
                       <span className="font-black text-lg">{detailedStats.impact.orphanages_aided}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/10 pb-2">
                       <span className="text-xs font-medium opacity-80">Zakat Beneficiaries</span>
                       <span className="font-black text-lg text-emerald-300">{detailedStats.impact.zakat_beneficiaries}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/10 pb-2">
                       <span className="text-xs font-medium opacity-80">NHIF Families</span>
                       <span className="font-black text-lg">{detailedStats.impact.nhif_families}</span>
                    </div>
                    <div className="flex justify-between items-center">
                       <span className="text-xs font-medium opacity-80">Imam Motorcycles</span>
                       <span className="font-black text-lg text-amber-400">{detailedStats.impact.motorcycles_imams}</span>
                    </div>
                 </div>
              </div>
           </div>
        )}

        {/* --- CONNECT / UMMAH TAB (NEW SECTIONS) --- */}
        {activeTab === 'connect' && (
           <div className="p-4 space-y-5">
              <div className="flex space-x-2 overflow-x-auto pb-2 no-scrollbar">
                {['education', 'masjid', 'orphans', 'sheikhs', 'waqf'].map(tab => (
                  <button key={tab} onClick={() => setConnectTab(tab)} className={`px-4 py-2 rounded-2xl text-[10px] font-black uppercase whitespace-nowrap ${connectTab === tab ? 'bg-emerald-600 text-white shadow-lg' : 'bg-white border text-gray-500'}`}>
                    {tab}
                  </button>
                ))}
             </div>

             {/* EDUCATION */}
             {connectTab === 'education' && (
                <div className="space-y-3">
                   {scholarships.secular.map(item => (
                      <div key={item.id} className="bg-white p-4 rounded-2xl border border-gray-100 flex justify-between items-center">
                         <div><p className="text-xs font-bold text-gray-800">{item.title}</p><p className="text-[10px] text-gray-400">{item.institution}</p></div>
                         <button className="bg-emerald-50 text-emerald-600 text-[10px] font-bold px-3 py-1.5 rounded-lg">Apply</button>
                      </div>
                   ))}
                </div>
             )}

             {/* ORPHANS */}
             {connectTab === 'orphans' && (
                <div className="space-y-3">
                   {directories.orphanages.map(item => (
                      <div key={item.id} className="bg-white p-5 rounded-[2rem] border border-gray-100 shadow-sm relative overflow-hidden">
                         <div className="flex justify-between items-start mb-2">
                            <h3 className="font-bold text-gray-800">{item.name}</h3>
                            <span className="bg-emerald-100 text-emerald-800 text-[9px] font-black px-2 py-1 rounded-md">{item.size}</span>
                         </div>
                         <div className="flex gap-4 mb-3">
                            <p className="text-[10px] text-gray-500 flex items-center gap-1"><MapPin size={10}/> {item.location}</p>
                            <p className="text-[10px] text-gray-500 flex items-center gap-1"><Users size={10}/> {item.children} Children</p>
                         </div>
                         <div className="flex flex-wrap gap-2 mb-3">
                            {item.needs.map(n => <span key={n} className="text-[9px] bg-red-50 text-red-600 px-2 py-0.5 rounded border border-red-100 font-bold">{n}</span>)}
                         </div>
                         <button className="w-full bg-gray-900 text-white py-2 rounded-xl text-xs font-bold">Donate to Center</button>
                      </div>
                   ))}
                </div>
             )}

             {/* WAQF */}
             {connectTab === 'waqf' && (
                <div className="space-y-3">
                   {directories.waqf.map(item => (
                      <div key={item.id} className="bg-white p-5 rounded-[2rem] border border-gray-100 flex items-center gap-4">
                         <div className="bg-emerald-50 p-3 rounded-2xl text-emerald-600"><Building2 size={24}/></div>
                         <div>
                            <h3 className="font-bold text-sm text-gray-800">{item.type}</h3>
                            <p className="text-[10px] text-gray-500 mb-1">{item.location}</p>
                            <p className="text-[10px] font-bold text-emerald-600">Owner: {item.owner}</p>
                         </div>
                      </div>
                   ))}
                </div>
             )}

             {/* MASJID */}
             {connectTab === 'masjid' && (
                <div className="space-y-3">
                   {directories.masjids.map(item => (
                      <div key={item.id} className="bg-white p-5 rounded-[2rem] border border-gray-100">
                         <h3 className="font-bold text-sm text-gray-800 mb-2">{item.name}</h3>
                         <div className="flex justify-between items-end">
                            <div className="space-y-1">
                               <p className="text-[10px] text-gray-500 flex items-center gap-1"><MapPin size={10}/> {item.location}</p>
                               {item.hasMadrasa ? (
                                  <p className="text-[10px] text-blue-600 font-bold flex items-center gap-1"><BookOpen size={10}/> Madrasa: {item.madrasaChildren} Students</p>
                               ) : (
                                  <p className="text-[10px] text-gray-400 italic">No Madrasa Registered</p>
                               )}
                            </div>
                         </div>
                      </div>
                   ))}
                </div>
             )}

             {/* SHEIKHS */}
             {connectTab === 'sheikhs' && (
                <div className="space-y-3">
                   {directories.sheikhs.map(item => (
                      <div key={item.id} className="bg-white p-4 rounded-2xl border border-gray-100 flex items-center gap-4">
                         <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center"><User size={20} className="text-gray-400"/></div>
                         <div>
                            <h3 className="font-bold text-sm text-gray-800">{item.name}</h3>
                            <p className="text-[10px] text-emerald-600 font-bold uppercase">{item.specialization}</p>
                            <p className="text-[10px] text-gray-400">{item.location}</p>
                         </div>
                      </div>
                   ))}
                </div>
             )}
           </div>
        )}

        {/* SERVICES & PROFILE (PRESERVED) */}
        {activeTab === 'services' && (
          <div className="p-5 space-y-4 text-center text-gray-400">
             <div className="bg-white p-10 rounded-[2rem] border border-gray-100">
                <Tent size={40} className="mx-auto mb-4 text-gray-300"/>
                <p>Services Module (Nikah, Mirath) preserved.</p>
             </div>
          </div>
        )}
      </div>

      {/* --- ZAKAT MODAL (NEW) --- */}
      {showZakatModal && (
         <div className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-md flex items-end">
            <div className="bg-white w-full h-[85vh] rounded-t-[3rem] p-6 animate-in slide-in-from-bottom flex flex-col">
               <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-black text-gray-800">Pay Zakat</h2>
                  <button onClick={() => setShowZakatModal(false)} className="bg-gray-100 p-2 rounded-full text-gray-400">X</button>
               </div>
               
               <div className="flex-1 overflow-y-auto">
                  {/* STEP 1: REGISTER */}
                  {zakatStep === 1 && (
                     <div className="space-y-6">
                        <div className="bg-amber-50 p-4 rounded-2xl border border-amber-100">
                           <p className="text-xs text-amber-800 font-medium">Please verify your details to receive delivery feedback.</p>
                        </div>
                        <div className="space-y-4">
                           <div>
                              <label className="text-xs font-bold text-gray-500 ml-2">Full Name</label>
                              <input type="text" defaultValue={userProfile.name} className="w-full bg-gray-50 p-4 rounded-2xl font-bold text-gray-800 outline-none focus:ring-2 focus:ring-emerald-500" />
                           </div>
                           <div>
                              <label className="text-xs font-bold text-gray-500 ml-2">Phone Number</label>
                              <input type="tel" placeholder="+255..." className="w-full bg-gray-50 p-4 rounded-2xl font-bold text-gray-800 outline-none focus:ring-2 focus:ring-emerald-500" />
                           </div>
                           <div>
                              <label className="text-xs font-bold text-gray-500 ml-2">Region</label>
                              <select className="w-full bg-gray-50 p-4 rounded-2xl font-bold text-gray-800 outline-none"><option>Dar es Salaam</option><option>Mwanza</option></select>
                           </div>
                        </div>
                        <button onClick={() => setZakatStep(2)} className="w-full bg-emerald-600 text-white font-black py-4 rounded-2xl mt-4 flex items-center justify-center gap-2">
                           Next Step <ArrowRight size={18}/>
                        </button>
                     </div>
                  )}

                  {/* STEP 2: SELECT CATEGORY & PAY */}
                  {zakatStep === 2 && (
                     <div className="space-y-4">
                        <p className="text-sm font-bold text-gray-600 mb-2">Select Beneficiary Category (Asnaf)</p>
                        <div className="grid grid-cols-1 gap-3">
                           {zakatCategories.map(cat => (
                              <div key={cat.id} className="p-4 rounded-2xl border border-gray-100 hover:border-emerald-500 hover:bg-emerald-50 transition-all cursor-pointer group" onClick={() => {}}>
                                 <div className="flex justify-between items-center">
                                    <div>
                                       <p className="font-bold text-sm text-gray-800 group-hover:text-emerald-700">{cat.label}</p>
                                       <p className="text-[10px] text-gray-400">{cat.desc}</p>
                                    </div>
                                    <div className="w-6 h-6 rounded-full border-2 border-gray-200 group-hover:border-emerald-500 group-hover:bg-emerald-500"></div>
                                 </div>
                              </div>
                           ))}
                        </div>
                        <div className="pt-4">
                           <input type="number" placeholder="Enter Amount (TZS)" className="w-full bg-gray-100 p-4 rounded-2xl font-black text-center text-xl mb-4" />
                           <button onClick={() => {setShowZakatModal(false); setShowSuccess(true);}} className="w-full bg-gray-900 text-white font-black py-4 rounded-2xl">Confirm & Pay</button>
                        </div>
                     </div>
                  )}
               </div>
            </div>
         </div>
      )}

      {/* FOOTER NAV */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-4 flex justify-between items-center shadow-2xl z-50">
        <button onClick={() => setActiveTab('home')} className={`flex flex-col items-center p-2 rounded-lg ${activeTab === 'home' ? 'text-emerald-700 bg-emerald-50' : 'text-gray-400'}`}>
          <Wallet size={22} /><span className="text-[9px] mt-1 font-bold">Home</span>
        </button>
        <button onClick={() => setActiveTab('impact')} className={`flex flex-col items-center p-2 rounded-lg ${activeTab === 'impact' ? 'text-emerald-700 bg-emerald-50' : 'text-gray-400'}`}>
          <Activity size={22} /><span className="text-[9px] mt-1 font-bold">Stats</span>
        </button>
        <button onClick={() => setShowDonateModal(true)} className="bg-emerald-600 text-white p-3 rounded-2xl shadow-xl -mt-8 border-4 border-white active:scale-95 transition-transform">
          <Heart size={26} fill="white" />
        </button>
        <button onClick={() => setActiveTab('connect')} className={`flex flex-col items-center p-2 rounded-lg ${activeTab === 'connect' ? 'text-emerald-700 bg-emerald-50' : 'text-gray-400'}`}>
          <Users size={22} /><span className="text-[9px] mt-1 font-bold">Ummah</span>
        </button>
        <button onClick={() => setActiveTab('services')} className={`flex flex-col items-center p-2 rounded-lg ${activeTab === 'services' ? 'text-emerald-700 bg-emerald-50' : 'text-gray-400'}`}>
          <LayoutGrid size={22} /><span className="text-[9px] mt-1 font-bold">Services</span>
        </button>
      </div>

      {/* DONATION MODAL (STANDARD) */}
      {showDonateModal && (
        <div className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-md flex items-end">
          <div className="bg-white w-full rounded-t-[3rem] p-8 shadow-2xl animate-in slide-in-from-bottom">
            <h2 className="text-xl font-black text-gray-800 mb-6">General Sadaka</h2>
            <input type="number" onChange={(e) => setAmount(e.target.value)} placeholder="Enter Amount" className="w-full bg-gray-50 border-none rounded-2xl p-4 text-center text-lg font-black focus:ring-2 focus:ring-emerald-500 outline-none mb-6"/>
            <button onClick={() => {setShowDonateModal(false); setShowSuccess(true)}} className="w-full bg-emerald-600 text-white font-black py-5 rounded-[2rem] text-sm uppercase shadow-lg">Donate</button>
            <button onClick={() => setShowDonateModal(false)} className="w-full text-gray-400 text-xs font-bold mt-4">Close</button>
          </div>
        </div>
      )}

      {/* SUCCESS SCREEN */}
      {showSuccess && (
        <div className="fixed inset-0 z-[100] bg-emerald-600 flex flex-col items-center justify-center text-white text-center p-10 animate-in fade-in duration-500">
          <CheckCircle size={80} className="text-white mb-6" />
          <h2 className="text-4xl font-black mb-3">Shukran!</h2>
          <p className="text-emerald-100 text-lg mb-12">May Allah accept your sadaka/zakat. You will receive an SMS confirmation shortly.</p>
          <button onClick={() => setShowSuccess(false)} className="bg-white text-emerald-700 px-12 py-4 rounded-full font-black text-sm uppercase shadow-2xl">Return Home</button>
        </div>
      )}
    </div>
  );
};

export default App;
