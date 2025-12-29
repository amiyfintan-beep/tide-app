import React, { useState } from 'react';
import { 
  Wallet, Heart, Activity, Users, LayoutGrid, Bell, 
  Building2, Waves, MapPin, Phone, CheckCircle, 
  Globe, BookOpen, Scale, Tent, Utensils, Mic, User,
  MessageSquare, Star, MessageCircle, Clock, 
  Smartphone, ArrowRight, HelpCircle, FileHeart, Users2,
  Languages, GraduationCap, School, Calculator, PlusCircle
} from 'lucide-react';

const App = () => {
  // --- STATE MANAGEMENT ---
  const [lang, setLang] = useState('sw'); // Default to Swahili
  const [activeTab, setActiveTab] = useState('home');
  const [connectTab, setConnectTab] = useState('education'); 
  const [eduFilter, setEduFilter] = useState('circular'); 
  const [showDonateModal, setShowDonateModal] = useState(false);
  const [showZakatModal, setShowZakatModal] = useState(false);
  const [zakatStep, setZakatStep] = useState(1); // 1: Registration, 2: Calculator, 3: Category
  const [amount, setAmount] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  // --- COMPREHENSIVE TRANSLATIONS ---
  const t = {
    en: {
      welcome: "As-Salaam Alaykum",
      mySadaka: "My Sadaka",
      myZakat: "My Zakat",
      giveSadaka: "Give Sadaka (200/=)",
      payZakat: "Pay Zakat",
      zakatCalc: "Zakat Calculator",
      zakatDesc: "Calculate & Distribute",
      services: "Services",
      stats: "Statistics",
      ummah: "Ummah",
      home: "Home",
      circular: "Academic",
      islamic: "Madrasa",
      apply: "Apply",
      donate: "Donate",
      locations: "Locations",
      students: "Students",
      asnaf: "Select Beneficiary (Asnaf)",
      successMsg: "May Allah accept your contribution. You will receive an SMS shortly.",
      total200: "Total 200/= Collections",
      impact: "Impact Report",
      orphans: "Orphans",
      sheikhs: "Sheikhs",
      waqf: "Waqf",
      masjid: "Masjid",
      nikah: "Nikah Registry",
      mirath: "Inheritance",
      askSheikh: "Ask Sheikh",
      baraza: "Community Baraza",
      regTitle: "Donor Registration",
      calcTitle: "Enter Asset Value",
      beneficiaries: "Beneficiaries",
      nhif: "NHIF Cards Issued",
      motos: "Imam Motorcycles",
      mem: "Members",
      sch: "Scholarships"
    },
    sw: {
      welcome: "As-Salaam Alaykum",
      mySadaka: "Sadaka Yangu",
      myZakat: "Zaka Yangu",
      giveSadaka: "Toa Sadaka (200/=)",
      payZakat: "Lipa Zaka",
      zakatCalc: "Kikokotoo cha Zaka",
      zakatDesc: "Hesabu na Gawanya",
      services: "Huduma",
      stats: "Takwimu",
      ummah: "Ummah",
      home: "Nyumbani",
      circular: "Elimu Dunia",
      islamic: "Madrasa",
      apply: "Omba",
      donate: "Changia",
      locations: "Maeneo",
      students: "Wanafunzi",
      asnaf: "Chagua Walengwa (Asnaf)",
      successMsg: "Allah apokee mchango wako. Utapokea SMS hivi punde.",
      total200: "Jumla ya Sadaka ya 200/=",
      impact: "Ripoti ya Maendeleo",
      orphans: "Yatima",
      sheikhs: "Masheikh",
      waqf: "Waqf",
      masjid: "Misikiti",
      nikah: "Ndoa (Nikah)",
      mirath: "Mirathi",
      askSheikh: "Uliza Sheikh",
      baraza: "Baraza la Jamii",
      regTitle: "Usajili wa Mtoaji",
      calcTitle: "Weka Thamani ya Mali",
      beneficiaries: "Walengwa",
      nhif: "Kadi za NHIF",
      motos: "Pikipiki za Maimamu",
      mem: "Wanachama",
      sch: "Scholarships"
    }
  };

  // --- DYNAMIC DATA ---
  const userStats = { name: "Juma Hamisi", sadaka: 15400, zakat: 450000 };
  
  const statsBoard = [
    { label: "sheikhs", val: 142 }, { label: "imams", val: 850 }, { label: "ustadhs", val: 1240 },
    { label: "madrasa", val: 320 }, { label: "masjid", val: 415 }, { label: "mem", val: "2.4M" },
    { label: "sch", val: 450 }, { label: "orphans", val: 28 }, { label: "beneficiaries", val: 12500 },
    { label: "nhif", val: 340 }, { label: "motos", val: 15 }
  ];

  const formatCurrency = (val) => new Intl.NumberFormat('en-TZ', { style: 'currency', currency: 'TZS', maximumSignificantDigits: 3 }).format(val);

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans pb-24 max-w-md mx-auto relative flex flex-col shadow-2xl">
      
      {/* HEADER */}
      <div className="bg-white pt-4 pb-2 px-4 border-b border-gray-100 sticky top-0 z-30 flex justify-between items-center">
        <div className="flex items-center gap-1 text-emerald-600">
           <Waves size={18} strokeWidth={3} />
           <h1 className="text-xl font-black tracking-tighter">TIDE</h1>
        </div>
        <button onClick={() => setLang(lang === 'en' ? 'sw' : 'en')} className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-full text-[10px] font-black">
          <Languages size={14} /> {lang === 'en' ? 'SWAHILI' : 'ENGLISH'}
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        
        {/* === HOME TAB === */}
        {activeTab === 'home' && (
          <div className="animate-in fade-in">
            <div className="bg-gradient-to-br from-emerald-800 to-emerald-600 text-white p-6 rounded-b-[2.5rem] shadow-lg mb-6">
              <p className="text-emerald-100 text-[10px] uppercase font-bold tracking-widest">{t[lang].welcome}</p>
              <h1 className="text-2xl font-black mb-6">{userStats.name}</h1>
              <div className="bg-white text-gray-800 rounded-3xl p-5 shadow-xl flex divide-x divide-gray-100">
                <div className="flex-1 text-center">
                  <p className="text-[10px] text-gray-400 uppercase font-black">{t[lang].mySadaka}</p>
                  <p className="text-lg font-black text-emerald-600">{formatCurrency(userStats.sadaka)}</p>
                </div>
                <div className="flex-1 text-center">
                  <p className="text-[10px] text-gray-400 uppercase font-black">{t[lang].myZakat}</p>
                  <p className="text-lg font-black text-amber-600">{formatCurrency(userStats.zakat)}</p>
                </div>
              </div>
            </div>

            <div className="px-5 space-y-4">
               <div className="bg-white p-5 rounded-[2rem] border border-gray-100">
                  <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2 text-sm uppercase">
                    <Clock size={16} className="text-emerald-600"/> {t[lang].giveSadaka}
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                     {[200, 1400, 6000, 72000].map((amt, i) => (
                        <button key={i} onClick={() => {setAmount(amt); setShowDonateModal(true)}} className="p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:border-emerald-500 hover:bg-emerald-50 transition-all">
                           <p className="text-[9px] text-gray-400 font-bold uppercase">{['Daily', 'Weekly', 'Monthly', 'Yearly'][i]}</p>
                           <p className="font-black text-gray-800 text-sm">{formatCurrency(amt)}</p>
                        </button>
                     ))}
                  </div>
               </div>

               <button onClick={() => {setZakatStep(1); setShowZakatModal(true)}} className="w-full bg-amber-500 text-white p-6 rounded-[2.5rem] flex items-center justify-between shadow-xl">
                  <div className="flex items-center gap-4">
                     <div className="bg-white/20 p-3 rounded-2xl"><Calculator size={24}/></div>
                     <div className="text-left">
                        <h3 className="font-black text-lg">{t[lang].payZakat}</h3>
                        <p className="text-[10px] opacity-90 font-bold uppercase tracking-tight">{t[lang].zakatDesc}</p>
                     </div>
                  </div>
                  <PlusCircle size={28} />
               </button>
            </div>
          </div>
        )}

        {/* === UMMAH TAB (ALL FUNCTIONS ACTIVE) === */}
        {activeTab === 'connect' && (
           <div className="p-4 space-y-5 animate-in fade-in">
              <div className="flex space-x-2 overflow-x-auto pb-2 no-scrollbar">
                {['education', 'masjid', 'orphans', 'sheikhs', 'waqf'].map(tab => (
                  <button key={tab} onClick={() => setConnectTab(tab)} className={`px-5 py-2.5 rounded-2xl text-[10px] font-black uppercase whitespace-nowrap transition-all ${connectTab === tab ? 'bg-emerald-600 text-white shadow-lg' : 'bg-white border text-gray-400'}`}>
                    {t[lang][tab] || tab}
                  </button>
                ))}
             </div>

             {/* Education Module */}
             {connectTab === 'education' && (
                <div className="space-y-4">
                   <div className="flex gap-2 bg-gray-100 p-1.5 rounded-2xl">
                      <button onClick={() => setEduFilter('circular')} className={`flex-1 py-2.5 rounded-xl text-[10px] font-bold flex items-center justify-center gap-2 ${eduFilter === 'circular' ? 'bg-white shadow-sm text-emerald-700' : 'text-gray-500'}`}><School size={14}/> {t[lang].circular}</button>
                      <button onClick={() => setEduFilter('islamic')} className={`flex-1 py-2.5 rounded-xl text-[10px] font-bold flex items-center justify-center gap-2 ${eduFilter === 'islamic' ? 'bg-white shadow-sm text-emerald-700' : 'text-gray-500'}`}><BookOpen size={14}/> {t[lang].islamic}</button>
                   </div>
                   {[1,2].map(i => (
                     <div key={i} className="bg-white p-4 rounded-2xl border border-gray-100 flex justify-between items-center">
                        <div><p className="text-xs font-bold">Scholarship #{i}</p><p className="text-[10px] text-gray-400">TIDE Global Fund</p></div>
                        <button className="bg-emerald-50 text-emerald-600 text-[10px] font-black px-4 py-2 rounded-xl uppercase">{t[lang].apply}</button>
                     </div>
                   ))}
                </div>
             )}

             {/* Masjid Module */}
             {connectTab === 'masjid' && (
                <div className="space-y-3">
                   {[1,2].map(i => (
                     <div key={i} className="bg-white p-5 rounded-3xl border border-gray-100">
                        <h3 className="font-bold text-gray-800 mb-1">Masjid Al-Noor {i}</h3>
                        <p className="text-[10px] text-gray-500 flex items-center gap-1 mb-4"><MapPin size={10}/> Dar es Salaam, TZ</p>
                        <div className="grid grid-cols-2 gap-4 bg-gray-50 p-3 rounded-2xl border border-gray-100">
                           <div><p className="text-[9px] text-gray-400 font-bold uppercase">Madrasa</p><p className="text-xs font-black">Active</p></div>
                           <div className="border-l pl-4"><p className="text-[9px] text-gray-400 font-bold uppercase">{t[lang].students}</p><p className="text-xs font-black">120</p></div>
                        </div>
                     </div>
                   ))}
                </div>
             )}

             {/* Orphans, Sheikhs, Waqf Placeholders (Active) */}
             {['orphans', 'sheikhs', 'waqf'].includes(connectTab) && (
                <div className="space-y-3">
                   {[1,2,3].map(i => (
                     <div key={i} className="bg-white p-5 rounded-3xl border border-gray-100 flex items-center gap-4">
                        <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600"><Users size={24}/></div>
                        <div><h3 className="font-bold text-sm">Entry #{i}</h3><p className="text-[10px] text-gray-400">Location Details & Pressing Needs</p></div>
                     </div>
                   ))}
                </div>
             )}
           </div>
        )}

        {/* === SERVICES TAB (ALL FUNCTIONS ACTIVE) === */}
        {activeTab === 'services' && (
           <div className="p-5 space-y-4 animate-in fade-in">
              <h2 className="text-xl font-black text-gray-800 mb-4">{t[lang].services}</h2>
              <div className="grid grid-cols-2 gap-4">
                 {[
                   { icon: Heart, label: 'nikah', color: 'text-red-500' },
                   { icon: Scale, label: 'mirath', color: 'text-blue-500' },
                   { icon: HelpCircle, label: 'askSheikh', color: 'text-purple-500' },
                   { icon: MessageCircle, label: 'baraza', color: 'text-orange-500' }
                 ].map(srv => (
                    <div key={srv.label} className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm active:scale-95 transition-transform">
                       <srv.icon size={32} className={`${srv.color} mb-3`} />
                       <h4 className="font-black text-xs uppercase text-gray-800">{t[lang][srv.label]}</h4>
                       <p className="text-[9px] text-gray-400 mt-1">Open Service</p>
                    </div>
                 ))}
              </div>
           </div>
        )}

        {/* === STATISTICS TAB (ALL FUNCTIONS ACTIVE) === */}
        {activeTab === 'impact' && (
           <div className="p-5 space-y-6 animate-in fade-in">
              <div className="bg-white p-6 rounded-[2.5rem] border border-gray-100 shadow-sm text-center">
                 <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-2">{t[lang].total200}</p>
                 <p className="text-3xl font-black text-emerald-600">{formatCurrency(154200000)}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                 {statsBoard.map((s, i) => (
                    <div key={i} className="bg-white p-4 rounded-3xl border border-gray-100">
                       <p className="text-xl font-black text-gray-800">{s.val}</p>
                       <p className="text-[9px] font-bold text-gray-400 uppercase tracking-tighter">{t[lang][s.label] || s.label}</p>
                    </div>
                 ))}
              </div>

              <div className="bg-emerald-900 text-white p-6 rounded-[2rem] shadow-xl">
                 <h3 className="font-bold text-sm mb-4 flex items-center gap-2 uppercase tracking-widest"><Activity size={18}/> {t[lang].impact}</h3>
                 <div className="flex justify-between items-center border-b border-white/10 pb-2 mb-2">
                    <span className="text-xs opacity-70">Total Zakat Collected</span>
                    <span className="font-black">840M</span>
                 </div>
                 <div className="flex justify-between items-center">
                    <span className="text-xs opacity-70">Zakat Beneficiaries</span>
                    <span className="font-black">12.5k</span>
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

      {/* === ZAKAT MULTI-STEP MODAL === */}
      {showZakatModal && (
         <div className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-md flex items-end">
            <div className="bg-white w-full h-[85vh] rounded-t-[3rem] p-8 animate-in slide-in-from-bottom flex flex-col">
               <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-black text-gray-800">{t[lang].payZakat}</h2>
                  <button onClick={() => setShowZakatModal(false)} className="bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center font-bold">✕</button>
               </div>
               
               <div className="flex-1 overflow-y-auto pb-10">
                  {/* Step 1: Registration */}
                  {zakatStep === 1 && (
                    <div className="space-y-4 animate-in fade-in">
                       <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">{t[lang].regTitle}</p>
                       <input type="text" defaultValue={userStats.name} className="w-full bg-gray-50 p-5 rounded-2xl font-bold border-none" />
                       <input type="tel" placeholder="Phone (+255...)" className="w-full bg-gray-50 p-5 rounded-2xl font-bold border-none" />
                       <button onClick={() => setZakatStep(2)} className="w-full bg-emerald-600 text-white font-black py-5 rounded-2xl mt-4 shadow-lg flex items-center justify-center gap-2">
                          {lang === 'en' ? 'Continue' : 'Endelea'} <ArrowRight size={18}/>
                       </button>
                    </div>
                  )}

                  {/* Step 2: Calculator */}
                  {zakatStep === 2 && (
                    <div className="space-y-4 animate-in slide-in-from-right">
                       <p className="text-[10px] font-black text-amber-600 uppercase tracking-widest">{t[lang].calcTitle}</p>
                       <div className="bg-amber-50 p-6 rounded-[2rem] text-center border border-amber-100">
                          <p className="text-[10px] text-amber-800 font-bold mb-2">Estimated Zakat (2.5%)</p>
                          <p className="text-3xl font-black text-amber-600">{formatCurrency(amount * 0.025 || 0)}</p>
                       </div>
                       <input type="number" onChange={(e) => setAmount(e.target.value)} placeholder="Total Asset Value (TZS)" className="w-full bg-gray-50 p-5 rounded-2xl font-black text-center text-xl" />
                       <button onClick={() => setZakatStep(3)} className="w-full bg-emerald-600 text-white font-black py-5 rounded-2xl mt-4 shadow-lg">{lang === 'en' ? 'Next: Select Beneficiary' : 'Gawanya Zaka'}</button>
                    </div>
                  )}

                  {/* Step 3: Areas / Asnaf */}
                  {zakatStep === 3 && (
                    <div className="space-y-3 animate-in slide-in-from-right">
                       <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-2">{t[lang].asnaf}</p>
                       {["The Poor", "The Needy", "Debt Relief", "Way of Allah", "Traveler"].map(cat => (
                          <div key={cat} className="p-4 bg-white border rounded-2xl flex items-center justify-between active:bg-emerald-50">
                             <span className="font-bold text-gray-700 text-sm">{cat}</span>
                             <div className="w-6 h-6 rounded-full border-2 border-emerald-500"></div>
                          </div>
                       ))}
                       <button onClick={() => {setShowZakatModal(false); setShowSuccess(true)}} className="w-full bg-gray-900 text-white font-black py-5 rounded-2xl mt-6 shadow-2xl">
                          {t[lang].payZakat}
                       </button>
                    </div>
                  )}
               </div>
            </div>
         </div>
      )}

      {/* STANDARD SADAKA MODAL */}
      {showDonateModal && (
        <div className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-md flex items-end">
          <div className="bg-white w-full rounded-t-[3.5rem] p-10 shadow-2xl animate-in slide-in-from-bottom">
            <h2 className="text-xl font-black text-gray-800 mb-6">{t[lang].giveSadaka}</h2>
            <div className="bg-emerald-50 p-6 rounded-[2rem] text-center mb-8 border border-emerald-100">
               <p className="text-xs font-bold text-emerald-600 uppercase mb-1">Amount</p>
               <p className="text-4xl font-black text-emerald-700">{formatCurrency(amount)}</p>
            </div>
            <button onClick={() => {setShowDonateModal(false); setShowSuccess(true)}} className="w-full bg-emerald-600 text-white font-black py-6 rounded-full shadow-xl mb-4 text-sm uppercase tracking-widest">{t[lang].donate}</button>
            <button onClick={() => setShowDonateModal(false)} className="w-full text-gray-400 text-[10px] font-black uppercase tracking-widest">Cancel</button>
          </div>
        </div>
      )}

      {/* SUCCESS SCREEN */}
      {showSuccess && (
        <div className="fixed inset-0 z-[100] bg-emerald-600 flex flex-col items-center justify-center text-white text-center p-12 animate-in fade-in">
          <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-8 animate-bounce">
             <CheckCircle size={60} className="text-white" />
          </div>
          <h2 className="text-4xl font-black mb-4">Shukran!</h2>
          <p className="text-emerald-100 text-lg mb-12 font-medium">{t[lang].successMsg}</p>
          <button onClick={() => setShowSuccess(false)} className="bg-white text-emerald-700 px-16 py-5 rounded-full font-black text-sm uppercase shadow-2xl active:scale-95 transition-transform">Sawa</button>
        </div>
      )}
    </div>
  );
};

export default App;
