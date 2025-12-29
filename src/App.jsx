import React, { useState } from 'react';
import { 
  Wallet, Heart, Activity, Users, LayoutGrid, Bell, 
  Building2, Waves, MapPin, Phone, CheckCircle, 
  Globe, BookOpen, Scale, Tent, Utensils, Mic, User,
  MessageSquare, Star, MessageCircle, Clock, 
  Smartphone, ArrowRight, HelpCircle, FileHeart, Users2,
  Languages, GraduationCap, School
} from 'lucide-react';

const App = () => {
  // --- STATE MANAGEMENT ---
  const [lang, setLang] = useState('en'); // 'en' or 'sw'
  const [activeTab, setActiveTab] = useState('home');
  const [connectTab, setConnectTab] = useState('education'); 
  const [eduFilter, setEduFilter] = useState('circular'); // 'circular' or 'islamic'
  const [showDonateModal, setShowDonateModal] = useState(false);
  const [showZakatModal, setShowZakatModal] = useState(false);
  const [zakatStep, setZakatStep] = useState(1); 
  const [amount, setAmount] = useState('');
  const [reminderFreq, setReminderFreq] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  // --- TRANSLATIONS ---
  const t = {
    en: {
      welcome: "As-Salaam Alaykum",
      mySadaka: "My Sadaka",
      myZakat: "My Zakat",
      giveSadaka: "Give Sadaka",
      payZakat: "Pay Zakat",
      zakatDesc: "Calculate & Distribute",
      services: "Services",
      stats: "Statistics",
      ummah: "Ummah",
      home: "Home",
      circular: "Academic",
      islamic: "Madrasa/Islamic",
      apply: "Apply",
      donate: "Donate",
      locations: "Locations",
      students: "Students",
      asnaf: "Select Beneficiary (Asnaf)",
      successMsg: "May Allah accept your contribution. You will receive an SMS shortly.",
      total200: "Total '200/=' Collection",
      impact: "Impact Report",
      orphans: "Orphans",
      sheikhs: "Sheikhs",
      waqf: "Waqf",
      masjid: "Masjid"
    },
    sw: {
      welcome: "As-Salaam Alaykum",
      mySadaka: "Sadaka Yangu",
      myZakat: "Zaka Yangu",
      giveSadaka: "Toa Sadaka",
      payZakat: "Lipa Zaka",
      zakatDesc: "Hesabu na Gawanya",
      services: "Huduma",
      stats: "Takwimu",
      ummah: "Ummah",
      home: "Nyumbani",
      circular: "Elimu Dunia",
      islamic: "Madrasa/Elimu Akhera",
      apply: "Omba",
      donate: "Changia",
      locations: "Maeneo",
      students: "Wanafunzi",
      asnaf: "Chagua Walengwa (Asnaf)",
      successMsg: "Allah apokee mchango wako. Utapokea ujumbe (SMS) hivi punde.",
      total200: "Jumla ya Sadaka ya 200/=",
      impact: "Ripoti ya Maendeleo",
      orphans: "Yatima",
      sheikhs: "Masheikh",
      waqf: "Waqf",
      masjid: "Misikiti"
    }
  };

  // --- MOCK DATA ---
  const userProfile = { name: "Juma Hamisi", id: "TIDE-8821-TZ", sadaka: 15400, zakat: 450000 };

  const scholarships = {
    circular: [
      { id: 1, title: "TIDE STEM Grant", institution: "UDSM / DIT", amount: "100% Tuition" },
      { id: 2, title: "Azam Medical Fund", institution: "MUHAS", amount: "Full Support" },
    ],
    islamic: [
      { id: 3, title: "Al-Azhar Scholarship", institution: "Egypt", amount: "Full Board" },
      { id: 4, title: "Madrasa Teacher Grant", institution: "Local Markaz", amount: "Stipend" },
    ]
  };

  const directories = {
    masjids: [
      { id: 1, name: "Masjid Quba", location: "Sinza, DSM", students: 120, hasMadrasa: true },
      { id: 2, name: "Masjid Nur", location: "Mbagala, DSM", students: 350, hasMadrasa: true },
      { id: 3, name: "Masjid Taqwa", location: "Arusha Mjini", students: 0, hasMadrasa: false },
    ],
    orphanages: [
      { id: 1, name: "Al-Madina Yatima", location: "Kigamboni", children: 145, needs: "Food, Uniforms" },
      { id: 2, name: "Ummah Care", location: "Tanga", children: 55, needs: "Medicine" }
    ],
    sheikhs: [
      { id: 1, name: "Sheikh Walid Al-Hadad", spec: "Fiqh & Mirath", loc: "Dar es Salaam" },
      { id: 2, name: "Dr. Suleiman", spec: "Islamic Finance", loc: "Zanzibar" },
    ]
  };

  const formatCurrency = (val) => new Intl.NumberFormat('en-TZ', { style: 'currency', currency: 'TZS', maximumSignificantDigits: 3 }).format(val);

  // --- UI COMPONENTS ---
  const LanguageToggle = () => (
    <button onClick={() => setLang(lang === 'en' ? 'sw' : 'en')} className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full text-[10px] font-black text-gray-600">
      <Languages size={14} /> {lang === 'en' ? 'SWAHILI' : 'ENGLISH'}
    </button>
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans pb-24 max-w-md mx-auto relative flex flex-col shadow-2xl overflow-x-hidden">
      {/* HEADER */}
      <div className="bg-white pt-4 pb-2 px-4 border-b border-gray-100 sticky top-0 z-30 flex justify-between items-center">
        <div className="flex items-center gap-1 text-emerald-600">
           <Waves size={18} strokeWidth={3} />
           <h1 className="text-xl font-black tracking-tighter">TIDE</h1>
        </div>
        <LanguageToggle />
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* === HOME TAB === */}
        {activeTab === 'home' && (
          <div className="animate-in fade-in">
            <div className="bg-gradient-to-br from-emerald-800 to-emerald-600 text-white p-6 rounded-b-[2.5rem] shadow-lg mb-6">
              <p className="text-emerald-100 text-xs mb-1">{t[lang].welcome},</p>
              <h1 className="text-xl font-bold mb-6">{userProfile.name}</h1>
              <div className="bg-white text-gray-800 rounded-3xl p-5 shadow-xl flex divide-x divide-gray-100">
                <div className="flex-1 text-center">
                  <p className="text-[10px] text-gray-400 uppercase font-black">{t[lang].mySadaka}</p>
                  <p className="text-lg font-black text-emerald-600">{formatCurrency(userProfile.sadaka)}</p>
                </div>
                <div className="flex-1 text-center">
                  <p className="text-[10px] text-gray-400 uppercase font-black">{t[lang].myZakat}</p>
                  <p className="text-lg font-black text-amber-600">{formatCurrency(userProfile.zakat)}</p>
                </div>
              </div>
            </div>

            <div className="px-5 space-y-4">
               <div className="bg-white p-5 rounded-[2rem] border border-gray-100 shadow-sm">
                  <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2 text-sm uppercase tracking-tight">
                    <Clock size={16} className="text-emerald-600"/> {t[lang].giveSadaka} (200/=)
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                     {[200, 1400, 6000, 72000].map((amt, i) => (
                        <button key={i} onClick={() => {setAmount(amt); setShowDonateModal(true)}} className="p-3 bg-gray-50 rounded-2xl border border-gray-100 hover:border-emerald-500 hover:bg-emerald-50 text-center transition-all">
                           <p className="text-[10px] text-gray-400 font-bold uppercase">{['Daily', 'Weekly', 'Monthly', 'Yearly'][i]}</p>
                           <p className="font-black text-gray-800">{formatCurrency(amt)}</p>
                        </button>
                     ))}
                  </div>
               </div>

               <button onClick={() => {setZakatStep(1); setShowZakatModal(true)}} className="w-full bg-amber-500 text-white p-5 rounded-[2rem] flex items-center justify-between shadow-lg active:scale-95 transition-transform">
                  <div className="flex items-center gap-4">
                     <div className="bg-white/20 p-2 rounded-xl"><Activity size={24}/></div>
                     <div className="text-left">
                        <h3 className="font-bold text-lg">{t[lang].payZakat}</h3>
                        <p className="text-xs opacity-80">{t[lang].zakatDesc}</p>
                     </div>
                  </div>
                  <ArrowRight size={24} />
               </button>
            </div>
          </div>
        )}

        {/* === UMMAH / CONNECT TAB === */}
        {activeTab === 'connect' && (
           <div className="p-4 space-y-5 animate-in fade-in">
              <div className="flex space-x-2 overflow-x-auto pb-2 no-scrollbar">
                {['education', 'masjid', 'orphans', 'sheikhs', 'waqf'].map(tab => (
                  <button key={tab} onClick={() => setConnectTab(tab)} className={`px-4 py-2 rounded-2xl text-[10px] font-black uppercase whitespace-nowrap ${connectTab === tab ? 'bg-emerald-600 text-white shadow-lg' : 'bg-white border text-gray-500'}`}>
                    {t[lang][tab] || tab}
                  </button>
                ))}
             </div>

             {/* EDUCATION REFINED */}
             {connectTab === 'education' && (
                <div className="space-y-4">
                   <div className="flex gap-2 bg-gray-100 p-1 rounded-2xl">
                      <button onClick={() => setEduFilter('circular')} className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-[10px] font-bold ${eduFilter === 'circular' ? 'bg-white shadow-sm text-emerald-700' : 'text-gray-500'}`}>
                        <School size={14}/> {t[lang].circular}
                      </button>
                      <button onClick={() => setEduFilter('islamic')} className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-[10px] font-bold ${eduFilter === 'islamic' ? 'bg-white shadow-sm text-emerald-700' : 'text-gray-500'}`}>
                        <BookOpen size={14}/> {t[lang].islamic}
                      </button>
                   </div>
                   {scholarships[eduFilter].map(item => (
                      <div key={item.id} className="bg-white p-4 rounded-2xl border border-gray-100 flex justify-between items-center">
                         <div><p className="text-xs font-bold text-gray-800">{item.title}</p><p className="text-[10px] text-gray-400">{item.institution}</p></div>
                         <button className="bg-emerald-50 text-emerald-600 text-[10px] font-bold px-4 py-2 rounded-xl">{t[lang].apply}</button>
                      </div>
                   ))}
                </div>
             )}

             {/* MASJID RESTORED */}
             {connectTab === 'masjid' && (
                <div className="space-y-3">
                   {directories.masjids.map(m => (
                      <div key={m.id} className="bg-white p-5 rounded-[2rem] border border-gray-100">
                         <div className="flex justify-between items-start mb-2">
                            <h3 className="font-bold text-gray-800">{m.name}</h3>
                            <div className="bg-blue-50 text-blue-600 text-[9px] font-black px-2 py-1 rounded-lg">MASJID</div>
                         </div>
                         <p className="text-[10px] text-gray-500 flex items-center gap-1 mb-3"><MapPin size={12}/> {m.location}</p>
                         <div className="flex items-center gap-4 bg-gray-50 p-3 rounded-2xl">
                            <div className="flex-1">
                               <p className="text-[10px] text-gray-400 font-bold uppercase">Madrasa</p>
                               <p className="text-xs font-black">{m.hasMadrasa ? 'Active' : 'N/A'}</p>
                            </div>
                            <div className="flex-1 border-l border-gray-200 pl-4">
                               <p className="text-[10px] text-gray-400 font-bold uppercase">{t[lang].students}</p>
                               <p className="text-xs font-black">{m.students}</p>
                            </div>
                         </div>
                      </div>
                   ))}
                </div>
             )}
           </div>
        )}

        {/* === SERVICES TAB === */}
        {activeTab === 'services' && (
           <div className="p-5 space-y-4 animate-in fade-in">
              <h2 className="text-xl font-black text-gray-800 mb-4">{t[lang].services}</h2>
              <div className="grid grid-cols-2 gap-4">
                 <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm">
                    <Heart size={24} className="text-red-500 mb-3" />
                    <h4 className="font-bold text-sm">Nikah</h4>
                    <p className="text-[9px] text-gray-400 mt-1">Registry & Booking</p>
                 </div>
                 <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm">
                    <Scale size={24} className="text-blue-500 mb-3" />
                    <h4 className="font-bold text-sm">Mirath</h4>
                    <p className="text-[9px] text-gray-400 mt-1">Inheritance Calc</p>
                 </div>
                 <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm">
                    <HelpCircle size={24} className="text-purple-500 mb-3" />
                    <h4 className="font-bold text-sm">Ask Sheikh</h4>
                    <p className="text-[9px] text-gray-400 mt-1">Private Fatwa</p>
                 </div>
                 <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm">
                    <Users2 size={24} className="text-orange-500 mb-3" />
                    <h4 className="font-bold text-sm">Baraza</h4>
                    <p className="text-[9px] text-gray-400 mt-1">Discussions</p>
                 </div>
              </div>
           </div>
        )}

        {/* === STATISTICS TAB === */}
        {activeTab === 'impact' && (
           <div className="p-5 space-y-6 animate-in fade-in">
              <div className="bg-white p-6 rounded-[2.5rem] border border-gray-100 shadow-sm text-center">
                 <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-2">{t[lang].total200}</p>
                 <p className="text-3xl font-black text-emerald-600">{formatCurrency(154000000)}</p>
              </div>
              <div className="bg-emerald-900 text-white p-6 rounded-[2rem] shadow-xl">
                 <h3 className="font-bold text-sm mb-4 flex items-center gap-2"><Activity size={18}/> {t[lang].impact}</h3>
                 <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 p-4 rounded-2xl">
                       <p className="text-lg font-black">450</p>
                       <p className="text-[8px] uppercase font-bold opacity-60">Beneficiaries</p>
                    </div>
                    <div className="bg-white/10 p-4 rounded-2xl">
                       <p className="text-lg font-black">15</p>
                       <p className="text-[8px] uppercase font-bold opacity-60">Motorcycles</p>
                    </div>
                 </div>
              </div>
           </div>
        )}
      </div>

      {/* FOOTER NAV */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-3 px-6 flex justify-between items-center shadow-2xl z-50">
        {[
          { id: 'home', icon: Wallet, label: t[lang].home },
          { id: 'impact', icon: Activity, label: t[lang].stats },
          { id: 'connect', icon: Users, label: t[lang].ummah },
          { id: 'services', icon: LayoutGrid, label: t[lang].services }
        ].map(btn => (
          <button key={btn.id} onClick={() => setActiveTab(btn.id)} className={`flex flex-col items-center gap-1 ${activeTab === btn.id ? 'text-emerald-700' : 'text-gray-400'}`}>
            <btn.icon size={22} fill={activeTab === btn.id ? "currentColor" : "none"} strokeWidth={activeTab === btn.id ? 2.5 : 2} />
            <span className="text-[8px] font-black uppercase tracking-tighter">{btn.label}</span>
          </button>
        ))}
      </div>

      {/* ZAKAT MODAL */}
      {showZakatModal && (
         <div className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-md flex items-end">
            <div className="bg-white w-full h-[80vh] rounded-t-[3rem] p-6 animate-in slide-in-from-bottom flex flex-col">
               <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-black text-gray-800">{t[lang].payZakat}</h2>
                  <button onClick={() => setShowZakatModal(false)} className="bg-gray-100 w-8 h-8 rounded-full font-bold">✕</button>
               </div>
               <div className="flex-1 overflow-y-auto pb-10">
                  {zakatStep === 1 ? (
                    <div className="space-y-4">
                       <p className="text-xs font-bold text-gray-500 px-1 uppercase tracking-widest">Verify Details</p>
                       <input type="text" defaultValue={userProfile.name} className="w-full bg-gray-50 p-4 rounded-2xl font-bold" />
                       <input type="tel" placeholder="Phone Number (Required for SMS Feedback)" className="w-full bg-gray-50 p-4 rounded-2xl font-bold" />
                       <button onClick={() => setZakatStep(2)} className="w-full bg-emerald-600 text-white font-black py-4 rounded-2xl mt-4 shadow-lg flex items-center justify-center gap-2">
                          Continue <ArrowRight size={18}/>
                       </button>
                    </div>
                  ) : (
                    <div className="space-y-4 animate-in slide-in-from-right">
                       <p className="text-xs font-bold text-gray-500 uppercase px-1">{t[lang].asnaf}</p>
                       <div className="space-y-2">
                          {["The Poor", "The Needy", "Administrators", "New Muslims", "Those in Debt", "In the Way of Allah", "Traveler"].map(cat => (
                             <div key={cat} className="p-4 border rounded-2xl flex items-center justify-between hover:bg-emerald-50">
                                <span className="text-sm font-bold text-gray-700">{cat}</span>
                                <div className="w-5 h-5 rounded-full border-2 border-emerald-500"></div>
                             </div>
                          ))}
                       </div>
                       <div className="pt-4 sticky bottom-0 bg-white">
                          <input type="number" placeholder="Enter Amount (TZS)" className="w-full bg-gray-100 p-4 rounded-2xl font-black text-center mb-4" />
                          <button onClick={() => {setShowZakatModal(false); setShowSuccess(true)}} className="w-full bg-gray-900 text-white font-black py-4 rounded-2xl shadow-xl">{t[lang].payZakat}</button>
                       </div>
                    </div>
                  )}
               </div>
            </div>
         </div>
      )}

      {/* SADAKA MODAL */}
      {showDonateModal && (
        <div className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-md flex items-end">
          <div className="bg-white w-full rounded-t-[3rem] p-8 shadow-2xl animate-in slide-in-from-bottom">
            <h2 className="text-xl font-black text-gray-800 mb-6">{t[lang].giveSadaka}</h2>
            <div className="bg-gray-100 p-6 rounded-3xl text-center mb-6">
               <p className="text-xs font-bold text-gray-400 uppercase mb-1">Amount</p>
               <p className="text-3xl font-black text-emerald-600">{formatCurrency(amount || 0)}</p>
            </div>
            <button onClick={() => {setShowDonateModal(false); setShowSuccess(true)}} className="w-full bg-emerald-600 text-white font-black py-5 rounded-[2rem] shadow-lg mb-4">{t[lang].donate}</button>
            <button onClick={() => setShowDonateModal(false)} className="w-full text-gray-400 text-xs font-bold uppercase tracking-widest">Cancel</button>
          </div>
        </div>
      )}

      {/* SUCCESS SCREEN */}
      {showSuccess && (
        <div className="fixed inset-0 z-[100] bg-emerald-600 flex flex-col items-center justify-center text-white text-center p-10 animate-in fade-in">
          <CheckCircle size={80} className="mb-6 animate-bounce" />
          <h2 className="text-4xl font-black mb-3">Shukran!</h2>
          <p className="text-emerald-100 text-lg mb-12">{t[lang].successMsg}</p>
          <button onClick={() => setShowSuccess(false)} className="bg-white text-emerald-700 px-12 py-4 rounded-full font-black text-sm uppercase shadow-2xl">Sawa</button>
        </div>
      )}
    </div>
  );
};

export default App;
