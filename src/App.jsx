import React, { useState } from 'react';
import { 
  Wallet, Heart, Activity, Users, LayoutGrid, Bell, 
  Building2, Waves, MapPin, Phone, CheckCircle, 
  Globe, BookOpen, Scale, Tent, Utensils, Mic, User,
  MessageSquare, Star, MessageCircle, Clock, 
  Smartphone, ArrowRight, HelpCircle, FileHeart, Users2
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [connectTab, setConnectTab] = useState('education'); 
  const [showDonateModal, setShowDonateModal] = useState(false);
  const [showZakatModal, setShowZakatModal] = useState(false);
  const [zakatStep, setZakatStep] = useState(1); 
  const [donationTarget, setDonationTarget] = useState({ type: 'pool', name: 'National Fund' }); 
  const [amount, setAmount] = useState('');
  const [reminderFreq, setReminderFreq] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // --- DATA ---
  const userProfile = {
    name: "Juma Hamisi",
    id: "TIDE-8821-TZ",
    contributions: {
      sadaka: 15400,    // User's total Sadaka history
      zakat: 450000     // User's total Zakat history
    }
  };

  const detailedStats = {
    registered: {
      sheikhs: 142, imams: 850, ustadhs: 1240,
      madrasas: 320, masjids: 415, members: "2.4M"
    },
    impact: {
      scholarships: 450, orphanages_aided: 28,
      zakat_beneficiaries: 12500, nhif_families: 340,
      motorcycles_imams: 15, sadaka_200_collection: 154000000
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
    ],
    sheikhs: [
      { id: 1, name: "Sheikh Walid Al-Hadad", specialization: "Fiqh & Mirath", location: "Dar es Salaam" },
      { id: 2, name: "Dr. Suleiman", specialization: "Islamic Finance", location: "Zanzibar" },
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

  const sadakaOptions = [
    { period: 'Day', amount: 200, label: 'Daily' },
    { period: 'Week', amount: 1400, label: 'Weekly' },
    { period: 'Month', amount: 6000, label: 'Monthly' },
    { period: 'Year', amount: 72000, label: 'Yearly' },
  ];

  const formatCurrency = (val) => new Intl.NumberFormat('en-TZ', { style: 'currency', currency: 'TZS', maximumSignificantDigits: 3 }).format(val);

  // --- ACTIONS ---
  const handleSadakaClick = (opt) => {
    setAmount(opt.amount);
    setDonationTarget({ type: 'sadaka', name: `${opt.label} Sadaka (${formatCurrency(opt.amount)})` });
    setShowDonateModal(true);
  };

  const Header = () => (
    <div className="bg-white pt-3 pb-2 px-4 border-b border-gray-100 sticky top-0 z-30 shadow-sm">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1 text-emerald-600">
           <Waves size={18} strokeWidth={3} />
           <h1 className="text-xl font-black tracking-tighter">TIDE</h1>
        </div>
        <div className="flex gap-2">
            <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-bold text-xs">JH</div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans pb-24 max-w-md mx-auto relative flex flex-col shadow-2xl overflow-x-hidden">
      <Header />
      
      {toastMessage && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-4 py-2 rounded-full text-xs font-bold z-[70] shadow-xl animate-bounce">
          {toastMessage}
        </div>
      )}

      <div className="flex-1 overflow-y-auto">
        
        {/* === HOME TAB === */}
        {activeTab === 'home' && (
          <div className="animate-in fade-in duration-500">
            {/* USER STATS CARD */}
            <div className="bg-gradient-to-br from-emerald-800 to-emerald-600 text-white p-6 rounded-b-[2.5rem] shadow-lg mb-6">
              <div className="mb-6">
                <p className="text-emerald-100 text-xs">As-Salaam Alaykum,</p>
                <h1 className="text-xl font-bold">{userProfile.name}</h1>
              </div>
              
              <div className="bg-white text-gray-800 rounded-3xl p-5 shadow-xl flex divide-x divide-gray-100">
                <div className="flex-1 text-center">
                  <p className="text-[10px] text-gray-400 uppercase font-black">My Sadaka</p>
                  <p className="text-xl font-black text-emerald-600">{formatCurrency(userProfile.contributions.sadaka)}</p>
                </div>
                <div className="flex-1 text-center">
                  <p className="text-[10px] text-gray-400 uppercase font-black">My Zakat</p>
                  <p className="text-xl font-black text-amber-600">{formatCurrency(userProfile.contributions.zakat)}</p>
                </div>
              </div>
            </div>

            {/* QUICK ACTIONS */}
            <div className="px-5 mb-6 space-y-4">
               {/* Sadaka Grid */}
               <div className="bg-white p-5 rounded-[2rem] border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-2 mb-4">
                     <Clock size={18} className="text-emerald-600" />
                     <h3 className="font-bold text-gray-800">Give Sadaka</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                     {sadakaOptions.map((opt) => (
                        <button key={opt.period} onClick={() => handleSadakaClick(opt)} className="p-3 rounded-2xl border text-center bg-gray-50 border-gray-100 text-gray-600 active:scale-95 transition-transform hover:border-emerald-500 hover:bg-emerald-50">
                           <p className="text-[10px] uppercase font-bold opacity-80">{opt.label}</p>
                           <p className="text-sm font-black">{formatCurrency(opt.amount)}</p>
                        </button>
                     ))}
                  </div>
               </div>

               {/* Zakat Action */}
               <button onClick={() => { setZakatStep(1); setShowZakatModal(true); }} className="w-full bg-amber-50 border border-amber-100 p-5 rounded-[2rem] flex items-center justify-between group active:scale-95 transition-transform">
                  <div className="flex items-center gap-4">
                     <div className="bg-amber-500 text-white p-3 rounded-2xl"><Activity size={24}/></div>
                     <div className="text-left">
                        <h3 className="font-bold text-gray-800">Pay Zakat</h3>
                        <p className="text-xs text-gray-500">Calculate & Distribute</p>
                     </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                     <ArrowRight size={20} />
                  </div>
               </button>
            </div>
          </div>
        )}

        {/* === SERVICES TAB (ACTIVATED) === */}
        {activeTab === 'services' && (
          <div className="p-5 animate-in fade-in space-y-6">
             <h2 className="text-xl font-black text-gray-800 mb-2">Services</h2>
             
             {/* Main Services Grid */}
             <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                   <Heart size={28} className="text-red-500 mb-3" />
                   <h4 className="font-bold text-sm text-gray-800">Nikah</h4>
                   <p className="text-[10px] text-gray-400 mt-1">Registration & Certificates</p>
                </div>
                <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                   <Scale size={28} className="text-blue-500 mb-3" />
                   <h4 className="font-bold text-sm text-gray-800">Mirath</h4>
                   <p className="text-[10px] text-gray-400 mt-1">Inheritance Calculator</p>
                </div>
                <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                   <HelpCircle size={28} className="text-purple-500 mb-3" />
                   <h4 className="font-bold text-sm text-gray-800">Ask Sheikh</h4>
                   <p className="text-[10px] text-gray-400 mt-1">Fatwa & Q&A</p>
                </div>
                <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                   <Users2 size={28} className="text-orange-500 mb-3" />
                   <h4 className="font-bold text-sm text-gray-800">Community</h4>
                   <p className="text-[10px] text-gray-400 mt-1">Discussion Forums</p>
                </div>
             </div>

             {/* Seasonal */}
             <div className="bg-white rounded-[2rem] p-5 border border-gray-100 shadow-sm">
                <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2 text-sm uppercase">
                   <Tent size={18} className="text-amber-600"/> Seasonal Hub
                </h3>
                <div className="space-y-3">
                   <div className="flex items-center justify-between p-3 bg-gray-50 rounded-2xl">
                      <div className="flex items-center gap-3"><Utensils size={18} className="text-orange-500" /><span className="text-xs font-bold">Eid Qurbani</span></div>
                      <button className="text-[10px] font-black bg-white px-3 py-1.5 rounded-lg border">Order</button>
                   </div>
                </div>
             </div>

             {/* Waqf Registry CTA */}
             <div className="bg-emerald-900 text-white p-6 rounded-[2.5rem] relative overflow-hidden">
                <h3 className="font-bold text-xl mb-1">Waqf Registry</h3>
                <p className="text-emerald-200 text-xs mb-4">Digitally secure land or wells.</p>
                <button className="bg-white text-emerald-900 text-[10px] font-black px-5 py-2.5 rounded-xl uppercase">Register Property</button>
                <Building2 size={80} className="absolute -right-4 -bottom-4 text-emerald-700 opacity-20" />
             </div>
          </div>
        )}

        {/* === STATS TAB (PRESERVED) === */}
        {activeTab === 'impact' && (
           <div className="p-5 space-y-6">
              <div className="bg-white p-6 rounded-[2.5rem] border border-gray-100 shadow-sm text-center">
                 <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-2">Total "200/=" Collections</p>
                 <p className="text-3xl font-black text-emerald-600">{formatCurrency(detailedStats.impact.sadaka_200_collection)}</p>
              </div>
              <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm">
                 <h3 className="font-bold text-gray-800 text-sm mb-4 flex items-center gap-2"><Users size={18}/> Network Directory</h3>
                 <div className="grid grid-cols-2 gap-4">
                    {Object.entries(detailedStats.registered).map(([key, val], i) => (
                       <div key={i} className="bg-gray-50 p-3 rounded-2xl">
                          <p className="text-xl font-black text-gray-800">{val}</p>
                          <p className="text-[9px] font-bold text-gray-400 uppercase">{key}</p>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        )}

        {/* === CONNECT / UMMAH TAB (PRESERVED) === */}
        {activeTab === 'connect' && (
           <div className="p-4 space-y-5">
              <div className="flex space-x-2 overflow-x-auto pb-2 no-scrollbar">
                {['education', 'masjid', 'orphans', 'sheikhs', 'waqf'].map(tab => (
                  <button key={tab} onClick={() => setConnectTab(tab)} className={`px-4 py-2 rounded-2xl text-[10px] font-black uppercase whitespace-nowrap ${connectTab === tab ? 'bg-emerald-600 text-white shadow-lg' : 'bg-white border text-gray-500'}`}>
                    {tab}
                  </button>
                ))}
             </div>
             {connectTab === 'education' && <div className="p-4 text-center text-gray-400 text-xs">Education List (As previously built)</div>}
             {connectTab === 'orphans' && (
                <div className="space-y-3">
                   {directories.orphanages.map(item => (
                      <div key={item.id} className="bg-white p-5 rounded-[2rem] border border-gray-100 shadow-sm">
                         <div className="flex justify-between items-start mb-2">
                            <h3 className="font-bold text-gray-800">{item.name}</h3>
                            <span className="bg-emerald-100 text-emerald-800 text-[9px] font-black px-2 py-1 rounded-md">{item.size}</span>
                         </div>
                         <div className="flex gap-4 mb-3">
                            <p className="text-[10px] text-gray-500 flex items-center gap-1"><MapPin size={10}/> {item.location}</p>
                            <p className="text-[10px] text-gray-500 flex items-center gap-1"><Users size={10}/> {item.children} Children</p>
                         </div>
                         <button className="w-full bg-gray-900 text-white py-2 rounded-xl text-xs font-bold">Donate to Center</button>
                      </div>
                   ))}
                </div>
             )}
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
      </div>

      {/* --- ZAKAT MODAL --- */}
      {showZakatModal && (
         <div className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-md flex items-end">
            <div className="bg-white w-full h-[85vh] rounded-t-[3rem] p-6 animate-in slide-in-from-bottom flex flex-col">
               <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-black text-gray-800">Pay Zakat</h2>
                  <button onClick={() => setShowZakatModal(false)} className="bg-gray-100 p-2 rounded-full text-gray-400">X</button>
               </div>
               
               <div className="flex-1 overflow-y-auto">
                  {zakatStep === 1 && (
                     <div className="space-y-6">
                        <div className="bg-amber-50 p-4 rounded-2xl border border-amber-100">
                           <p className="text-xs text-amber-800 font-medium">Verify details for Zakat delivery receipt.</p>
                        </div>
                        <div className="space-y-4">
                           <div><label className="text-xs font-bold text-gray-500 ml-2">Name</label><input type="text" defaultValue={userProfile.name} className="w-full bg-gray-50 p-4 rounded-2xl font-bold text-gray-800" /></div>
                           <div><label className="text-xs font-bold text-gray-500 ml-2">Phone</label><input type="tel" placeholder="+255..." className="w-full bg-gray-50 p-4 rounded-2xl font-bold text-gray-800" /></div>
                           <div><label className="text-xs font-bold text-gray-500 ml-2">Region</label><select className="w-full bg-gray-50 p-4 rounded-2xl font-bold text-gray-800"><option>Dar es Salaam</option><option>Mwanza</option></select></div>
                        </div>
                        <button onClick={() => setZakatStep(2)} className="w-full bg-emerald-600 text-white font-black py-4 rounded-2xl mt-4 flex items-center justify-center gap-2">Next Step <ArrowRight size={18}/></button>
                     </div>
                  )}

                  {zakatStep === 2 && (
                     <div className="space-y-4">
                        <p className="text-sm font-bold text-gray-600 mb-2">Select Beneficiary Category (Asnaf)</p>
                        <div className="grid grid-cols-1 gap-3">
                           {zakatCategories.map(cat => (
                              <div key={cat.id} className="p-4 rounded-2xl border border-gray-100 hover:border-emerald-500 hover:bg-emerald-50 transition-all cursor-pointer group">
                                 <div className="flex justify-between items-center">
                                    <div><p className="font-bold text-sm text-gray-800">{cat.label}</p><p className="text-[10px] text-gray-400">{cat.desc}</p></div>
                                    <div className="w-6 h-6 rounded-full border-2 border-gray-200 group-hover:bg-emerald-500"></div>
                                 </div>
                              </div>
                           ))}
                        </div>
                        <div className="pt-4">
                           <input type="number" placeholder="Enter Amount (TZS)" className="w-full bg-gray-100 p-4 rounded-2xl font-black text-center text-xl mb-4" />
                           <button onClick={() => {setShowZakatModal(false); setShowSuccess(true);}} className="w-full bg-gray-900 text-white font-black py-4 rounded-2xl">Pay Zakat</button>
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

      {/* DONATION MODAL */}
      {showDonateModal && (
        <div className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-md flex items-end">
          <div className="bg-white w-full rounded-t-[3rem] p-8 shadow-2xl animate-in slide-in-from-bottom">
            <h2 className="text-xl font-black text-gray-800 mb-6">{donationTarget.name}</h2>
            <input type="number" defaultValue={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter Amount" className="w-full bg-gray-50 border-none rounded-2xl p-4 text-center text-lg font-black focus:ring-2 focus:ring-emerald-500 outline-none mb-6"/>
            <button onClick={() => {setShowDonateModal(false); setShowSuccess(true)}} className="w-full bg-emerald-600 text-white font-black py-5 rounded-[2rem] text-sm uppercase shadow-lg">Confirm Donation</button>
            <button onClick={() => setShowDonateModal(false)} className="w-full text-gray-400 text-xs font-bold mt-4">Close</button>
          </div>
        </div>
      )}

      {/* SUCCESS SCREEN */}
      {showSuccess && (
        <div className="fixed inset-0 z-[100] bg-emerald-600 flex flex-col items-center justify-center text-white text-center p-10 animate-in fade-in duration-500">
          <CheckCircle size={80} className="text-white mb-6" />
          <h2 className="text-4xl font-black mb-3">Shukran!</h2>
          <p className="text-emerald-100 text-lg mb-12">May Allah accept your contribution. You will receive an SMS shortly.</p>
          <button onClick={() => setShowSuccess(false)} className="bg-white text-emerald-700 px-12 py-4 rounded-full font-black text-sm uppercase shadow-2xl">Return Home</button>
        </div>
      )}
    </div>
  );
};

export default App;
