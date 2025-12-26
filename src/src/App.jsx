import React, { useState, useEffect } from 'react';
import { 
  Wallet, Heart, Activity, Users, LayoutGrid, Bell, ChevronRight, 
  ShieldCheck, Building2, CreditCard, Waves, MoonStar, Search, 
  MessageCircle, MapPin, Phone, Briefcase, GraduationCap, 
  FileText, Download, ArrowUpRight, ArrowDownLeft, CheckCircle,
  Store, Landmark, ExternalLink, Globe, BookOpen, Award,
  Scroll, Scale, Tent, Utensils, Mic, PieChart, Users2, User,
  QrCode, Share2, MessageSquare, Star
} from 'lucide-react';

const TideApp = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [connectTab, setConnectTab] = useState('education'); 
  const [scholarshipType, setScholarshipType] = useState('secular');
  const [selectedMasjid, setSelectedMasjid] = useState(null); 
  const [showDonateModal, setShowDonateModal] = useState(false);
  const [donationTarget, setDonationTarget] = useState({ type: 'pool', name: 'National Fund' }); 
  const [amount, setAmount] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  // --- COMPREHENSIVE MOCK DATA ---

  const userProfile = {
    name: "Juma Hamisi",
    id: "TIDE-8821-TZ",
    location: "Ilala, Dar es Salaam",
    role: "Professional Member",
    profession: "Software Engineer",
    joinDate: "March 2024",
    impactScore: 850
  };

  const networkStats = {
    totalMembers: "2.4M",
    regions: [
      { name: "Dar es Salaam", count: "850k" },
      { name: "Mwanza", count: "320k" },
      { name: "Arusha", count: "180k" },
      { name: "Zanzibar", count: "450k" }
    ],
    professions: [
      { name: "Medical", count: "12,400" },
      { name: "Education", count: "45,000" },
      { name: "Engineering", count: "8,200" },
      { name: "Business", count: "110,000" }
    ]
  };

  const orphanages = [
    { id: 1, name: "Al-Madina Yatima Centre", location: "Kigamboni", children: 45, needs: ["Food", "School Fees"], urgent: true },
    { id: 2, name: "Ummah Care House", location: "Tanga", children: 120, needs: ["Bedding"], urgent: false }
  ];

  const discussions = [
    { id: 1, title: "Zakat on Digital Assets", author: "Sheikh Mussa", replies: 24, category: "Fatawa" },
    { id: 2, title: "Islamic Fin-Tech in East Africa", author: "Dr. Salim", replies: 115, category: "Economy" }
  ];

  const scholarships = {
    secular: [
      { id: 1, title: "TIDE STEM Grant", institution: "UDSM / DIT", amount: "100% Tuition", deadline: "Jan 15", level: "University", icon: Briefcase },
      { id: 2, title: "Azam Medical Fund", institution: "MUHAS", amount: "Tuition + Stipend", deadline: "Feb 01", level: "University", icon: Activity },
    ],
    islamic: [
      { id: 4, title: "Al-Azhar Scholarship", institution: "Al-Azhar (Egypt)", amount: "Full Ride + Travel", deadline: "Mar 10", level: "International", icon: Globe },
      { id: 5, title: "Future Imams Program", institution: "Markaz (Local)", amount: "Living Allowance", deadline: "Jan 30", level: "Local", icon: MoonStar },
    ]
  };

  const formatCurrency = (val) => new Intl.NumberFormat('en-TZ', { style: 'currency', currency: 'TZS', maximumSignificantDigits: 3 }).format(val);

  // --- SUB-COMPONENTS ---

  const Header = () => {
    const leadership = [
      { acr: "BAKWATA", name: "Baraza Kuu", color: "bg-green-700" },
      { acr: "AMYC", name: "Ansaar Youth", color: "bg-blue-600" },
      { acr: "JUHIMTA", name: "Mihadhara", color: "bg-orange-600" },
      { acr: "TAMSA", name: "Students", color: "bg-sky-500" },
      { acr: "SHURA", name: "Maimamu", color: "bg-emerald-800" },
      { acr: "TMP", name: "Professionals", color: "bg-slate-600" },
    ];

    return (
      <div className="bg-white pt-3 pb-2 px-4 border-b border-gray-100 sticky top-0 z-30 shadow-sm">
        <div className="flex justify-between items-center gap-2">
          <div className="flex-1 overflow-x-auto scrollbar-hide">
            <div className="flex gap-3 pr-2">
              {leadership.map((org, i) => (
                <div key={i} className="flex flex-col items-center min-w-[38px]">
                  <div className={`w-9 h-9 ${org.color} rounded-full flex items-center justify-center text-white text-[9px] font-bold shadow-sm border-2 border-white`}>
                    {org.acr.substring(0, 1)}
                  </div>
                  <span className="text-[0.45rem] font-black text-gray-500 mt-1 whitespace-nowrap uppercase">{org.acr}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="h-8 w-px bg-gray-200 mx-1 flex-shrink-0"></div>
          <div className="flex flex-col items-end flex-shrink-0 cursor-pointer" onClick={() => setActiveTab('profile')}>
            <div className="flex items-center gap-1 text-emerald-600">
               <Waves size={18} strokeWidth={2.5} />
               <h1 className="text-xl font-black tracking-tighter">TIDE</h1>
            </div>
            <p className="text-[0.5rem] text-gray-400 font-bold uppercase tracking-wider text-right">Master Hub</p>
          </div>
        </div>
      </div>
    );
  };

  const Navigation = () => (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-4 flex justify-between items-center shadow-2xl z-50 max-w-md mx-auto">
      <button onClick={() => {setActiveTab('home'); setSelectedMasjid(null)}} className={`flex flex-col items-center p-2 rounded-lg transition-all ${activeTab === 'home' ? 'text-emerald-700 bg-emerald-50' : 'text-gray-400'}`}>
        <Wallet size={22} />
        <span className="text-[9px] mt-1 font-bold">Home</span>
      </button>
      <button onClick={() => {setActiveTab('impact'); setSelectedMasjid(null)}} className={`flex flex-col items-center p-2 rounded-lg transition-all ${activeTab === 'impact' ? 'text-emerald-700 bg-emerald-50' : 'text-gray-400'}`}>
        <Activity size={22} />
        <span className="text-[9px] mt-1 font-bold">Stats</span>
      </button>
      <button 
        onClick={() => { setShowDonateModal(true); setDonationTarget({type: 'pool', name: 'National Fund'})}}
        className="bg-emerald-600 text-white p-3 rounded-2xl shadow-xl -mt-8 border-4 border-gray-50 active:scale-95 transition-transform">
        <Heart size={26} fill="white" />
      </button>
      <button onClick={() => {setActiveTab('connect'); setSelectedMasjid(null)}} className={`flex flex-col items-center p-2 rounded-lg transition-all ${activeTab === 'connect' ? 'text-emerald-700 bg-emerald-50' : 'text-gray-400'}`}>
        <Users size={22} />
        <span className="text-[9px] mt-1 font-bold">Ummah</span>
      </button>
      <button onClick={() => {setActiveTab('services'); setSelectedMasjid(null)}} className={`flex flex-col items-center p-2 rounded-lg transition-all ${activeTab === 'services' ? 'text-emerald-700 bg-emerald-50' : 'text-gray-400'}`}>
        <LayoutGrid size={22} />
        <span className="text-[9px] mt-1 font-bold">Services</span>
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans pb-20 max-w-md mx-auto border-x border-gray-100 relative overflow-hidden flex flex-col shadow-2xl">
      <Header />

      <div className="flex-1 overflow-y-auto">
        
        {/* === HOME TAB === */}
        {activeTab === 'home' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
            <div className="bg-gradient-to-br from-emerald-800 to-emerald-600 text-white p-6 rounded-b-[2.5rem] shadow-lg mb-6">
              <div className="flex justify-between items-center mb-6">
                <div onClick={() => setActiveTab('profile')} className="flex items-center gap-3 cursor-pointer">
                   <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center border border-white/30">
                      <User size={24} />
                   </div>
                   <div>
                      <p className="text-emerald-100 text-xs font-medium">As-Salaam Alaykum,</p>
                      <h1 className="text-lg font-bold">{userProfile.name}</h1>
                   </div>
                </div>
                <div className="bg-white/10 p-2.5 rounded-2xl backdrop-blur-md border border-white/20 relative cursor-pointer">
                  <Bell size={20} />
                  <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border border-emerald-700"></span>
                </div>
              </div>
              <div className="bg-white text-gray-800 rounded-3xl p-5 shadow-xl flex divide-x divide-gray-100">
                <div className="flex-1 px-2 text-center">
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest font-black">Sadaka</p>
                  <p className="text-xl font-black text-emerald-600 mt-1">{formatCurrency(150000)}</p>
                </div>
                <div className="flex-1 px-2 text-center">
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest font-black">Zakat</p>
                  <p className="text-xl font-black text-amber-600 mt-1">{formatCurrency(450000)}</p>
                </div>
              </div>
            </div>

            <div className="px-5 space-y-6">
              <div className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-4">
                   <div className="bg-amber-100 p-3 rounded-2xl text-amber-600">
                      <Mic size={20} />
                   </div>
                   <div>
                      <h3 className="font-bold text-gray-800 text-sm">Friday Wave</h3>
                      <p className="text-[10px] text-gray-400">Target: Flood Relief Tanga</p>
                   </div>
                </div>
                <button onClick={() => { setShowDonateModal(true); setDonationTarget({type: 'pool', name: 'Flood Relief'})}} className="bg-gray-900 text-white px-4 py-2 rounded-xl text-xs font-bold">Help</button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center text-center gap-3">
                  <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center">
                    <Scroll size={24} />
                  </div>
                  <span className="text-xs font-bold text-gray-700">Digital Certificates</span>
                </div>
                <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center text-center gap-3">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
                    <Globe size={24} />
                  </div>
                  <span className="text-xs font-bold text-gray-700">Hajj & Umrah</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* === SERVICES TAB === */}
        {activeTab === 'services' && (
          <div className="p-5 space-y-6 animate-in fade-in">
             <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm">
                   <Heart size={24} className="text-red-500 mb-3" />
                   <h4 className="font-bold text-gray-800 text-sm">Nikah</h4>
                   <p className="text-[10px] text-gray-400 mt-1">Reg & Booking</p>
                </div>
                <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm">
                   <Scale size={24} className="text-blue-500 mb-3" />
                   <h4 className="font-bold text-gray-800 text-sm">Mirath</h4>
                   <p className="text-[10px] text-gray-400 mt-1">Asset Calculator</p>
                </div>
             </div>

             <div className="bg-white rounded-[2rem] p-5 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                   <Tent size={18} className="text-amber-600"/> Seasonal Hub
                </h3>
                <div className="space-y-3">
                   <div className="flex items-center justify-between p-3 bg-gray-50 rounded-2xl">
                      <div className="flex items-center gap-3">
                         <Utensils size={18} className="text-orange-500" />
                         <span className="text-xs font-bold">Eid Qurbani Order</span>
                      </div>
                      <button className="text-[10px] font-black bg-white px-3 py-1.5 rounded-lg border">Order</button>
                   </div>
                   <div className="flex items-center justify-between p-3 bg-gray-50 rounded-2xl">
                      <div className="flex items-center gap-3">
                         <Globe size={18} className="text-blue-500" />
                         <span className="text-xs font-bold">Hajj Savings (Amana)</span>
                      </div>
                      <button className="text-[10px] font-black bg-white px-3 py-1.5 rounded-lg border">Start</button>
                   </div>
                </div>
             </div>

             <div className="bg-emerald-900 text-white p-6 rounded-[2.5rem] shadow-xl relative overflow-hidden">
                <div className="relative z-10">
                   <h3 className="font-bold text-xl mb-1">Waqf Registry</h3>
                   <p className="text-emerald-200 text-xs mb-4 opacity-80">Digitally secure land, buildings, or water wells for the Ummah.</p>
                   <button className="bg-white text-emerald-900 text-[10px] font-black px-5 py-2.5 rounded-xl uppercase tracking-wider">Register Waqf</button>
                </div>
                <Building2 size={120} className="absolute -right-6 -bottom-6 text-emerald-700 opacity-20" />
             </div>
          </div>
        )}

        {/* === IMPACT / STATS TAB === */}
        {activeTab === 'impact' && (
           <div className="p-5 space-y-6 animate-in fade-in">
              <div className="grid grid-cols-2 gap-4">
                 <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm">
                    <p className="text-2xl font-black text-emerald-600">{networkStats.totalMembers}</p>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Total Users</p>
                 </div>
                 <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm">
                    <p className="text-2xl font-black text-blue-600">320</p>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Masjids Audited</p>
                 </div>
              </div>

              <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm">
                 <h3 className="font-bold text-gray-800 text-sm mb-4 flex items-center gap-2 uppercase tracking-wider">
                    <PieChart size={16} className="text-emerald-500" /> Network Capacity
                 </h3>
                 <div className="space-y-4">
                    {networkStats.professions.map((prof, i) => (
                       <div key={i}>
                          <div className="flex justify-between text-[11px] font-bold mb-1.5 text-gray-600">
                             <span>{prof.name}</span>
                             <span>{prof.count}</span>
                          </div>
                          <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                             <div className="bg-emerald-500 h-full rounded-full" style={{width: `${(parseInt(prof.count.replace(',','')) / 150000) * 100}%`}}></div>
                          </div>
                       </div>
                    ))}
                 </div>
              </div>

              <div className="bg-white p-5 rounded-[2rem] border border-gray-100 shadow-sm">
                 <h3 className="font-bold text-gray-800 text-sm mb-3">Regional Density</h3>
                 <div className="grid grid-cols-2 gap-3">
                    {networkStats.regions.map((reg, i) => (
                       <div key={i} className="bg-gray-50 p-3 rounded-2xl flex justify-between items-center">
                          <span className="text-[10px] font-bold text-gray-600">{reg.name}</span>
                          <span className="text-[10px] font-black text-emerald-600">{reg.count}</span>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        )}

        {/* === COMMUNITY / UMMAH TAB === */}
        {activeTab === 'connect' && (
           <div className="p-4 space-y-5 animate-in fade-in">
              <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-hide">
                {['education', 'masjids', 'yatima', 'baraza'].map(tab => (
                  <button key={tab} onClick={() => setConnectTab(tab)} className={`px-5 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-wider transition-all ${connectTab === tab ? 'bg-emerald-600 text-white shadow-lg' : 'bg-white border border-gray-100 text-gray-500'}`}>
                    {tab}
                  </button>
                ))}
             </div>

             {connectTab === 'education' && (
                <div className="space-y-4">
                   <div className="bg-blue-900 text-white p-6 rounded-[2.5rem] relative overflow-hidden">
                      <h2 className="text-xl font-bold mb-1">Scholarship Hub</h2>
                      <p className="text-blue-200 text-xs mb-4">54 Active Opportunities</p>
                      <div className="flex bg-white/10 p-1 rounded-2xl mb-4">
                         <button onClick={() => setScholarshipType('secular')} className={`flex-1 py-2 text-[10px] font-black rounded-xl ${scholarshipType === 'secular' ? 'bg-white text-blue-900' : 'text-blue-100'}`}>Academic</button>
                         <button onClick={() => setScholarshipType('islamic')} className={`flex-1 py-2 text-[10px] font-black rounded-xl ${scholarshipType === 'islamic' ? 'bg-white text-blue-900' : 'text-blue-100'}`}>Islamic</button>
                      </div>
                      <div className="space-y-3">
                         {scholarships[scholarshipType].map(item => (
                            <div key={item.id} className="bg-white/5 p-4 rounded-2xl border border-white/10 flex items-center justify-between">
                               <div>
                                  <p className="text-xs font-bold">{item.title}</p>
                                  <p className="text-[10px] text-blue-200">{item.institution}</p>
                               </div>
                               <button className="bg-white text-blue-900 text-[9px] font-black px-3 py-1.5 rounded-lg uppercase">Apply</button>
                            </div>
                         ))}
                      </div>
                   </div>
                </div>
             )}

             {connectTab === 'yatima' && (
                <div className="space-y-4">
                   {orphanages.map(org => (
                      <div key={org.id} className="bg-white p-5 rounded-[2rem] border border-gray-100 shadow-sm relative overflow-hidden">
                         {org.urgent && <span className="absolute top-0 right-0 bg-red-500 text-white text-[8px] font-black px-3 py-1 rounded-bl-xl uppercase">Urgent</span>}
                         <h3 className="font-bold text-gray-800">{org.name}</h3>
                         <p className="text-[10px] text-gray-400 mb-4 flex items-center gap-1"><MapPin size={10}/> {org.location} • {org.children} Children</p>
                         <div className="flex flex-wrap gap-2 mb-4">
                            {org.needs.map((n, i) => <span key={i} className="text-[9px] font-bold bg-gray-100 text-gray-600 px-2 py-1 rounded-lg">{n}</span>)}
                         </div>
                         <button className="w-full bg-emerald-50 text-emerald-700 text-xs font-bold py-3 rounded-2xl border border-emerald-100">Sponsor A Child</button>
                      </div>
                   ))}
                </div>
             )}

             {connectTab === 'baraza' && (
                <div className="space-y-4">
                   {discussions.map(post => (
                      <div key={post.id} className="bg-white p-5 rounded-[2rem] border border-gray-100 shadow-sm">
                         <div className="flex justify-between items-start mb-2">
                            <span className="text-[9px] font-black text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg uppercase tracking-wider">{post.category}</span>
                            <span className="text-[9px] text-gray-400 font-medium flex items-center gap-1"><MessageSquare size={10}/> {post.replies} Replies</span>
                         </div>
                         <h3 className="font-bold text-gray-800 text-sm mb-1">{post.title}</h3>
                         <p className="text-[10px] text-gray-500 font-medium">Started by {post.author}</p>
                      </div>
                   ))}
                </div>
             )}
           </div>
        )}

        {/* === PROFILE TAB === */}
        {activeTab === 'profile' && (
           <div className="p-5 animate-in fade-in">
              <div className="bg-white p-6 rounded-[2.5rem] shadow-xl border border-gray-100 flex flex-col items-center mb-6">
                 <div className="w-24 h-24 bg-emerald-50 rounded-[2rem] flex items-center justify-center border-4 border-white shadow-inner mb-4">
                    <User size={48} className="text-emerald-600" />
                 </div>
                 <h2 className="text-xl font-black text-gray-800">{userProfile.name}</h2>
                 <p className="text-xs text-emerald-600 font-bold mb-6">{userProfile.id}</p>
                 
                 <div className="w-full bg-gray-50 p-4 rounded-3xl border border-dashed border-gray-300 flex flex-col items-center">
                    <QrCode size={140} className="text-gray-800 mb-4" />
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Digital Ummah ID</p>
                 </div>
              </div>

              <div className="space-y-3">
                 <div className="bg-white p-4 rounded-2xl flex items-center justify-between border border-gray-100">
                    <div className="flex items-center gap-3">
                       <Award size={20} className="text-amber-500" />
                       <span className="text-xs font-bold">Impact Score</span>
                    </div>
                    <span className="text-xs font-black text-emerald-600">{userProfile.impactScore}</span>
                 </div>
                 <div className="bg-white p-4 rounded-2xl flex items-center justify-between border border-gray-100">
                    <div className="flex items-center gap-3">
                       <Briefcase size={20} className="text-blue-500" />
                       <span className="text-xs font-bold">Profession</span>
                    </div>
                    <span className="text-xs font-bold text-gray-500">{userProfile.profession}</span>
                 </div>
              </div>
           </div>
        )}

      </div>

      <Navigation />

      {/* DONATION MODAL */}
      {showDonateModal && (
        <div className="absolute inset-0 z-[60] bg-black/60 backdrop-blur-md flex items-end justify-center">
          <div className="bg-white w-full max-w-md rounded-t-[3rem] p-8 shadow-2xl animate-in slide-in-from-bottom-20">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-black text-gray-800">Support</h2>
              <button onClick={() => setShowDonateModal(false)} className="bg-gray-100 p-2 rounded-full text-gray-400"><LayoutGrid size={20}/></button>
            </div>
            <div className="bg-emerald-50 p-5 rounded-3xl flex items-center gap-4 mb-8 border border-emerald-100">
              <div className="bg-emerald-600 p-3 rounded-2xl text-white">
                <Heart size={24} fill="white"/>
              </div>
              <div>
                <p className="text-[10px] text-emerald-600 font-black uppercase tracking-widest">Project</p>
                <p className="font-bold text-gray-800">{donationTarget.name}</p>
              </div>
            </div>
            <div className="mb-8">
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[1000, 5000, 10000].map(val => (
                  <button key={val} onClick={() => setAmount(val)} className="bg-gray-50 border border-gray-100 rounded-2xl py-3 text-xs font-black hover:bg-emerald-600 hover:text-white transition-all">
                    {val.toLocaleString()}
                  </button>
                ))}
              </div>
              <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Other amount" className="w-full bg-gray-50 border-none rounded-2xl p-4 text-center text-lg font-black focus:ring-2 focus:ring-emerald-500 outline-none"/>
            </div>
            <button onClick={() => {setShowDonateModal(false); setShowSuccess(true); setAmount('')}} className="w-full bg-emerald-600 text-white font-black py-5 rounded-[2rem] text-sm uppercase tracking-widest shadow-lg shadow-emerald-200 active:scale-95 transition-all">
              Complete Payment
            </button>
          </div>
        </div>
      )}

      {/* SUCCESS SCREEN */}
      {showSuccess && (
        <div className="absolute inset-0 z-[100] bg-emerald-600 flex flex-col items-center justify-center text-white text-center p-10 animate-in fade-in duration-500">
          <div className="bg-white/20 p-8 rounded-full mb-8 backdrop-blur-xl animate-bounce">
            <CheckCircle size={80} className="text-white" />
          </div>
          <h2 className="text-4xl font-black mb-3">Shukran!</h2>
          <p className="text-emerald-100 text-lg mb-12 opacity-90 font-medium">Your contribution has been recorded in the National Audit.</p>
          <button onClick={() => setShowSuccess(false)} className="bg-white text-emerald-700 px-12 py-4 rounded-full font-black text-sm uppercase tracking-widest shadow-2xl">Return Home</button>
        </div>
      )}
    </div>
  );
};

export default TideApp;
