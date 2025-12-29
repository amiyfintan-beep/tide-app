import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { 
  Wallet, Heart, Activity, Users, LayoutGrid, 
  Waves, MapPin, CheckCircle, 
  Globe, BookOpen, Scale, User,
  MessageCircle, Clock, 
  ArrowRight, HelpCircle, 
  Languages, School, Calculator, PlusCircle,
  Building2, Tent, Utensils, Star, Smartphone,
  Baby, GraduationCap, Bike, FileHeart
} from 'lucide-react';

// --- LIVE SUPABASE CONNECTION ---
const supabaseUrl = 'https://sljifarjqsdanumqvncl.supabase.co';
const supabaseAnonKey = 'sb_publishable_7-5-eF554a-Rw-eTIRqyXA_1fywtPO0';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const App = () => {
  // --- STATE ---
  const [lang, setLang] = useState('sw'); 
  const [activeTab, setActiveTab] = useState('home');
  const [connectTab, setConnectTab] = useState('education'); 
  const [eduFilter, setEduFilter] = useState('circular'); 
  const [showDonateModal, setShowDonateModal] = useState(false);
  const [showZakatModal, setShowZakatModal] = useState(false);
  const [zakatStep, setZakatStep] = useState(1); 
  const [amount, setAmount] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // Live Form Data
  const [regName, setRegName] = useState('Juma Hamisi');
  const [regPhone, setRegPhone] = useState('');

  // --- TRANSLATIONS ---
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
      asnaf: "Select Beneficiary (Asnaf)",
      successMsg: "Data synced with TIDE. May Allah accept your contribution.",
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
      nhif: "NHIF Support",
      mem: "Members",
      sch: "Scholarships",
      students: "Students",
      children: "Children",
      needs: "Needs",
      motos: "Imam Motos",
      imams: "Imams",
      ustadhs: "Ustadhs",
      madrasas: "Madrasas"
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
      asnaf: "Chagua Walengwa (Asnaf)",
      successMsg: "Taarifa zimehifadhiwa TIDE. Allah apokee mchango wako.",
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
      nhif: "Bima ya NHIF",
      mem: "Wanachama",
      sch: "Scholarships",
      students: "Wanafunzi",
      children: "Watoto",
      needs: "Mahitaji",
      motos: "Pikipiki za Maimamu",
      imams: "Maimamu",
      ustadhs: "Maustadhi",
      madrasas: "Madrasa"
    }
  };

  // --- DETAILED MOCK DATA ---
  const detailedStats = {
    total_200: 154200500,
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
      orphans_donated: 28,
      zakat_beneficiaries: 12500,
      nhif_cards: 340,
      motorcycles: 15
    }
  };

  const directoryData = {
    masjid: [
      { id: 1, name: "Masjid Quba", loc: "Sinza, DSM", students: 120, hasMadrasa: true },
      { id: 2, name: "Masjid Taqwa", loc: "Mbagala, DSM", students: 350, hasMadrasa: true },
      { id: 3, name: "Masjid Nur", loc: "Arusha Mjini", students: 0, hasMadrasa: false }
    ],
    orphans: [
      { id: 1, name: "Al-Madina Center", loc: "Kigamboni", children: 145, needs: "Rice, Oil, Books" },
      { id: 2, name: "Ummah Care", loc: "Tanga", children: 55, needs: "Medicine, Beds" }
    ],
    sheikhs: [
      { id: 1, name: "Sheikh Walid", loc: "Ilala", spec: "Fiqh & Mirath" },
      { id: 2, name: "Dr. Suleiman", loc: "Zanzibar", spec: "Islamic Finance" }
    ],
    waqf: [
      { id: 1, name: "Commercial Building", loc: "Kariakoo", owner: "Late Hajj Mussa" },
      { id: 2, name: "Water Well", loc: "Handeni", owner: "TIDE Community Pool" }
    ]
  };

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

  // --- LIVE FUNCTIONS ---
  const handleLiveSync = async (type, category = "General") => {
    setLoading(true);
    if (regPhone) {
      await supabase.from('members').insert([{ full_name: regName, phone_number: regPhone, role: 'Donor' }]);
    }
    const { error } = await supabase.from('donations').insert([{ 
      donor_name: regName, amount: parseInt(amount) || 200, type: type, asnaf: category 
    }]);

    setLoading(false);
    if (error) alert("Error: " + error.message);
    else { setShowZakatModal(false); setShowDonateModal(false); setShowSuccess(true); }
  };

  const formatCurrency = (val) => new Intl.NumberFormat('en-TZ', { style: 'currency', currency: 'TZS', maximumFractionDigits: 0 }).format(val);

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans pb-24 max-w-md mx-auto relative flex flex-col shadow-2xl">
      
      {/* HEADER */}
      <div className="bg-white pt-4 pb-2 px-4 border-b border-gray-100 sticky top-0 z-30 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-1 text-emerald-600">
           <Waves size={18} strokeWidth={3} />
           <h1 className="text-xl font-black tracking-tighter">TIDE</h1>
        </div>
        <button onClick={() => setLang(lang === 'en' ? 'sw' : 'en')} className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-full text-[10px] font-black uppercase">
          <Languages size={14} /> {lang === 'en' ? 'SWAHILI' : 'ENGLISH'}
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        
        {/* === HOME TAB === */}
        {activeTab === 'home' && (
          <div className="animate-in fade-in">
            <div className="bg-gradient-to-br from-emerald-800 to-emerald-600 text-white p-6 rounded-b-[2.5rem] shadow-lg mb-6">
              <p className="text-emerald-100 text-[10px] uppercase font-bold tracking-widest">{t[lang].welcome}</p>
              <h1 className="text-2xl font-black mb-6">{regName}</h1>
              <div className="bg-white text-gray-800 rounded-3xl p-5 shadow-xl flex divide-x divide-gray-100">
                <div className="flex-1 text-center">
                  <p className="text-[10px] text-gray-400 uppercase font-black">{t[lang].mySadaka}</p>
                  <p className="text-lg font-black text-emerald-600">15,400/=</p>
                </div>
                <div className="flex-1 text-center">
                  <p className="text-[10px] text-gray-400 uppercase font-black">{t[lang].myZakat}</p>
                  <p className="text-lg font-black text-amber-600">450,000/=</p>
                </div>
              </div>
            </div>

            <div className="px-5 space-y-4">
               {/* Sadaka Buttons */}
               <div className="bg-white p-5 rounded-[2rem] border border-gray-100 shadow-sm">
                  <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2 text-sm uppercase">
                    <Clock size={16} className="text-emerald-600"/> {t[lang].giveSadaka}
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                     {[200, 1400, 6000, 72000].map((amt, i) => (
                        <button key={i} onClick={() => {setAmount(amt); setShowDonateModal(true)}} className="p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:bg-emerald-50 transition-all">
                           <p className="text-[9px] text-gray-400 font-bold uppercase tracking-tight">{['Daily', 'Weekly', 'Monthly', 'Yearly'][i]}</p>
                           <p className="font-black text-gray-800 text-sm">{amt}/=</p>
                        </button>
                     ))}
                  </div>
               </div>

               {/* Zakat Button */}
               <button onClick={() => {setZakatStep(1); setShowZakatModal(true)}} className="w-full bg-amber-500 text-white p-6 rounded-[2.5rem] flex items-center justify-between shadow-xl active:scale-95 transition-transform">
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

        {/* === IMPACT / STATS TAB (FIXED: SHOWS ALL ITEMS) === */}
        {activeTab === 'impact' && (
           <div className="p-5 space-y-6 animate-in fade-in pb-10">
              <div className="bg-white p-6 rounded-[2.5rem] border border-gray-100 shadow-sm text-center">
                 <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-2">{t[lang].total200}</p>
                 <p className="text-3xl font-black text-emerald-600">{formatCurrency(detailedStats.total_200)}</p>
              </div>

              {/* Registration Grid */}
              <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm">
                 <h3 className="font-bold text-sm mb-4 flex items-center gap-2 text-gray-800"><Users size={16}/> Registered Network</h3>
                 <div className="grid grid-cols-2 gap-4">
                    {Object.entries(detailedStats.registered).map(([key, val], i) => (
                       <div key={i} className="bg-gray-50 p-3 rounded-2xl">
                          <p className="text-xl font-black text-gray-800">{val}</p>
                          <p className="text-[9px] font-bold text-gray-400 uppercase tracking-tighter">{t[lang][key] || key}</p>
                       </div>
                    ))}
                 </div>
              </div>

              {/* Impact Grid */}
              <div className="bg-emerald-900 text-white p-6 rounded-[2rem] shadow-xl">
                 <h3 className="font-bold text-sm mb-4 flex items-center gap-2 uppercase tracking-widest"><Activity size={16}/> {t[lang].impact}</h3>
                 <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-white/10 pb-2">
                       <span className="text-xs opacity-70">{t[lang].sch}</span>
                       <span className="font-black">{detailedStats.impact.scholarships}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/10 pb-2">
                       <span className="text-xs opacity-70">{t[lang].orphans} Donated</span>
                       <span className="font-black">{detailedStats.impact.orphans_donated}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/10 pb-2">
                       <span className="text-xs opacity-70">{t[lang].beneficiaries} (Zakat)</span>
                       <span className="font-black text-emerald-300">{detailedStats.impact.zakat_beneficiaries}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/10 pb-2">
                       <span className="text-xs opacity-70">{t[lang].nhif}</span>
                       <span className="font-black text-amber-400">{detailedStats.impact.nhif_cards}</span>
                    </div>
                    <div className="flex justify-between items-center">
                       <span className="text-xs opacity-70">{t[lang].motos}</span>
                       <span className="font-black text-amber-400">{detailedStats.impact.motorcycles}</span>
                    </div>
                 </div>
              </div>
           </div>
        )}

        {/* === UMMAH / CONNECT TAB (FIXED: SHOWS ALL DETAILS) === */}
        {activeTab === 'connect' && (
           <div className="p-4 space-y-5 animate-in fade-in">
              <div className="flex space-x-2 overflow-x-auto pb-2 no-scrollbar">
                {['education', 'masjid', 'orphans', 'sheikhs', 'waqf'].map(tab => (
                  <button key={tab} onClick={() => setConnectTab(tab)} className={`px-5 py-2.5 rounded-2xl text-[10px] font-black uppercase whitespace-nowrap transition-all ${connectTab === tab ? 'bg-emerald-600 text-white shadow-lg' : 'bg-white border text-gray-400'}`}>
                    {t[lang][tab] || tab}
                  </button>
                ))}
             </div>

             {/* 1. Education Logic */}
             {connectTab === 'education' && (
                <div className="space-y-4">
                   <div className="flex gap-2 bg-gray-100 p-1.5 rounded-2xl">
                      <button onClick={() => setEduFilter('circular')} className={`flex-1 py-2.5 rounded-xl text-[10px] font-bold flex items-center justify-center gap-2 ${eduFilter === 'circular' ? 'bg-white shadow-sm text-emerald-700' : 'text-gray-500'}`}><School size={14}/> {t[lang].circular}</button>
                      <button onClick={() => setEduFilter('islamic')} className={`flex-1 py-2.5 rounded-xl text-[10px] font-bold flex items-center justify-center gap-2 ${eduFilter === 'islamic' ? 'bg-white shadow-sm text-emerald-700' : 'text-gray-500'}`}><BookOpen size={14}/> {t[lang].islamic}</button>
                   </div>
                   {scholarships[eduFilter].map(i => (
                     <div key={i.id} className="bg-white p-4 rounded-2xl border border-gray-100 flex justify-between items-center">
                        <div><p className="text-xs font-bold text-gray-800">{i.title}</p><p className="text-[10px] text-gray-400">{i.institution}</p></div>
                        <button className="bg-emerald-50 text-emerald-600 text-[10px] font-black px-4 py-2 rounded-xl uppercase">{t[lang].apply}</button>
                     </div>
                   ))}
                </div>
             )}

             {/* 2. Masjid Logic (Shows Madrasa & Students) */}
             {connectTab === 'masjid' && (
                <div className="space-y-3">
                   {directoryData.masjid.map((m, i) => (
                      <div key={i} className="bg-white p-5 rounded-3xl border border-gray-100">
                         <div className="flex justify-between items-start mb-2">
                             <h3 className="font-bold text-gray-800">{m.name}</h3>
                             {m.hasMadrasa && <span className="bg-blue-50 text-blue-600 text-[9px] font-black px-2 py-1 rounded-md">MADRASA ACTIVE</span>}
                         </div>
                         <p className="text-[10px] text-gray-500 flex items-center gap-1 mb-3"><MapPin size={10}/> {m.loc}</p>
                         <div className="bg-gray-50 p-3 rounded-2xl flex items-center gap-2">
                            <GraduationCap size={16} className="text-gray-400"/>
                            <div>
                               <p className="text-[9px] font-bold text-gray-400 uppercase">{t[lang].students}</p>
                               <p className="text-xs font-black text-gray-800">{m.students}</p>
                            </div>
                         </div>
                      </div>
                   ))}
                </div>
             )}

             {/* 3. Orphans Logic (Shows Children & Needs) */}
             {connectTab === 'orphans' && (
                <div className="space-y-3">
                   {directoryData.orphans.map((o, i) => (
                      <div key={i} className="bg-white p-5 rounded-3xl border border-gray-100">
                         <h3 className="font-bold text-gray-800 mb-2">{o.name}</h3>
                         <div className="flex gap-4 mb-3">
                            <div className="flex items-center gap-1 bg-emerald-50 px-2 py-1 rounded-lg">
                               <Baby size={12} className="text-emerald-600"/>
                               <span className="text-[10px] font-bold text-emerald-700">{o.children} {t[lang].children}</span>
                            </div>
                            <div className="flex items-center gap-1">
                               <MapPin size={12} className="text-gray-400"/>
                               <span className="text-[10px] text-gray-500">{o.loc}</span>
                            </div>
                         </div>
                         <div className="border-t pt-2">
                            <p className="text-[9px] font-bold text-red-400 uppercase">{t[lang].needs}:</p>
                            <p className="text-xs font-bold text-gray-700">{o.needs}</p>
                         </div>
                      </div>
                   ))}
                </div>
             )}

             {/* 4. Sheikhs & Waqf Logic */}
             {['sheikhs', 'waqf'].includes(connectTab) && (
                <div className="space-y-3">
                   {directoryData[connectTab]?.map((item, i) => (
                      <div key={i} className="bg-white p-5 rounded-3xl border border-gray-100 flex items-center gap-4">
                         <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center"><User size={20} className="text-gray-400"/></div>
                         <div>
                            <h3 className="font-bold text-sm text-gray-800">{item.name}</h3>
                            <p className="text-[10px] text-emerald-600 font-bold uppercase">{item.sub}</p>
                            <p className="text-[10px] text-gray-400">{item.loc}</p>
                         </div>
                      </div>
                   ))}
                </div>
             )}
           </div>
        )}

        {/* === SERVICES TAB === */}
        {activeTab === 'services' && (
           <div className="p-5 grid grid-cols-2 gap-4 animate-in fade-in">
              {[
                 { id: 'nikah', icon: Heart, color: 'text-red-500' },
                 { id: 'mirath', icon: Scale, color: 'text-blue-500' },
                 { id: 'askSheikh', icon: HelpCircle, color: 'text-purple-500' },
                 { id: 'baraza', icon: MessageCircle, color: 'text-orange-500' }
              ].map(s => (
                 <div key={s.id} className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm text-center active:bg-emerald-50 transition-all">
                    <div className="w-10 h-10 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-3"><s.icon size={20} className={s.color}/></div>
                    <h4 className="font-black text-[9px] uppercase text-gray-800">{t[lang][s.id]}</h4>
                    <p className="text-[9px] text-gray-400 mt-1">Open Module</p>
                 </div>
              ))}
           </div>
        )}
      </div>

      {/* FOOTER NAV */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 py-3 px-6 flex justify-between items-center shadow-2xl z-50">
        {[
          { id: 'home', icon: Wallet, label: t[lang].home },
          { id: 'impact', icon: Activity, label: t[lang].stats },
          { id: 'connect', icon: Users, label: t[lang].ummah },
          { id: 'services', icon: LayoutGrid, label: t[lang].services }
        ].map(btn => (
          <button key={btn.id} onClick={() => setActiveTab(btn.id)} className={`flex flex-col items-center gap-1 transition-all ${activeTab === btn.id ? 'text-emerald-700 scale-110' : 'text-gray-300'}`}>
            <btn.icon size={22} strokeWidth={activeTab === btn.id ? 3 : 2} />
            <span className="text-[8px] font-black uppercase tracking-tighter">{btn.label}</span>
          </button>
        ))}
      </div>

      {/* ZAKAT MODAL */}
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
                       <input type="text" onChange={(e) => setRegName(e.target.value)} placeholder="Full Name" className="w-full bg-gray-50 p-5 rounded-2xl font-bold border-none" />
                       <input type="tel" onChange={(e) => setRegPhone(e.target.value)} placeholder="Phone (+255...)" className="w-full bg-gray-50 p-5 rounded-2xl font-bold border-none" />
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
                       <input type="number" onChange={(e) => setAmount(e.target.value)} placeholder="Total Asset Value (TZS)" className="w-full bg-gray-50 p-5 rounded-2xl font-black text-center text-xl border-none" />
                       <button onClick={() => setZakatStep(3)} className="w-full bg-emerald-600 text-white font-black py-5 rounded-2xl mt-4 shadow-lg uppercase">{lang === 'en' ? 'Select Category' : 'Chagua Walengwa'}</button>
                    </div>
                  )}

                  {/* Step 3: Areas / Asnaf */}
                  {zakatStep === 3 && (
                    <div className="space-y-3 animate-in slide-in-from-right">
                       <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-2">{t[lang].asnaf}</p>
                       {["The Poor", "The Needy", "Debt Relief", "Way of Allah", "Traveler"].map(cat => (
                          <div key={cat} onClick={() => handleLiveSync('Zakat', cat)} className="p-5 bg-white border border-gray-100 rounded-2xl flex items-center justify-between active:bg-emerald-50 cursor-pointer transition-all">
                             <span className="font-bold text-gray-700 text-sm">{cat}</span>
                             <div className="w-6 h-6 rounded-full border-2 border-emerald-500 flex items-center justify-center">
                                <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                             </div>
                          </div>
                       ))}
                       {loading && <p className="text-center text-xs font-bold text-emerald-600 animate-pulse uppercase">Syncing to TIDE Cloud...</p>}
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
            <button onClick={() => handleLiveSync('Sadaka', 'General')} className="w-full bg-emerald-600 text-white font-black py-6 rounded-full shadow-xl mb-4 text-sm uppercase tracking-widest">{loading ? '...' : t[lang].donate}</button>
            <button onClick={() => setShowDonateModal(false)} className="w-full text-gray-400 text-[10px] font-black uppercase tracking-widest">Cancel</button>
          </div>
        </div>
      )}

      {/* SUCCESS SCREEN */}
      {showSuccess && (
        <div className="fixed inset-0 z-[100] bg-emerald-600 flex flex-col items-center justify-center text-white text-center p-12 animate-in fade-in">
          <CheckCircle size={80} className="mb-6 animate-bounce" />
          <h2 className="text-4xl font-black mb-4 uppercase tracking-tighter">Shukran!</h2>
          <p className="text-emerald-100 text-lg mb-12 font-medium opacity-90">{t[lang].successMsg}</p>
          <button onClick={() => setShowSuccess(false)} className="bg-white text-emerald-700 px-16 py-5 rounded-full font-black text-sm uppercase shadow-2xl active:scale-95 transition-all">Return</button>
        </div>
      )}
    </div>
  );
};

export default App;
