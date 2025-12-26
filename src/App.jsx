import React, { useState } from 'react';
import { 
  Wallet, Heart, Activity, Users, LayoutGrid, Bell, 
  ShieldCheck, Building2, Waves, Search, 
  MapPin, Phone, Briefcase, GraduationCap, 
  FileText, CheckCircle, Store, Landmark, 
  Globe, BookOpen, Award, Scroll, Scale, 
  Tent, Utensils, Mic, PieChart, User,
  QrCode, MessageSquare, Star, MessageCircle
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [connectTab, setConnectTab] = useState('education'); 
  const [scholarshipType, setScholarshipType] = useState('secular');
  const [showDonateModal, setShowDonateModal] = useState(false);
  const [donationTarget, setDonationTarget] = useState({ type: 'pool', name: 'National Fund' }); 
  const [amount, setAmount] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  // --- COMPREHENSIVE MOCK DATA ---
  const userProfile = {
    name: "Juma Hamisi",
    id: "TIDE-8821-TZ",
    location: "Ilala, Dar es Salaam",
    profession: "Software Engineer",
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

  const scholarships = {
    secular: [
      { id: 1, title: "TIDE STEM Grant", institution: "UDSM / DIT", amount: "100% Tuition" },
      { id: 2, title: "Azam Medical Fund", institution: "MUHAS", amount: "Tuition + Stipend" },
    ],
    islamic: [
      { id: 4, title: "Al-Azhar Scholarship", institution: "Al-Azhar (Egypt)", amount: "Full Ride" },
      { id: 5, title: "Future Imams Program", institution: "Markaz (Local)", amount: "Living Allowance" },
    ]
  };

  const discussions = [
    { id: 1, title: "Zakat on Digital Assets", author: "Sheikh Mussa", replies: 24, category: "Fatawa" },
    { id: 2, title: "Islamic Fin-Tech in East Africa", author: "Dr. Salim", replies: 115, category: "Economy" }
  ];

  const formatCurrency = (val) => new Intl.NumberFormat('en-TZ', { style: 'currency', currency: 'TZS', maximumSignificantDigits: 3 }).format(val);

  // --- SUB-COMPONENTS ---
  const Header = () => {
    const leadership = [
      { acr: "BAK", color: "bg-green-700" },
      { acr: "AMY", color: "bg-blue-600" },
      { acr: "JUH", color: "bg-orange-600" },
      { acr: "TAM", color: "bg-sky-500" },
      { acr: "SHU", color: "bg-emerald-800" },
      { acr: "TMP", color: "bg-slate-600" },
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
          <div className="flex flex-col items-end flex-shrink-0 ml-2">
            <div className="flex items-center gap-1 text-emerald-600">
               <Waves size={18} strokeWidth={3} />
               <h1 className="text-xl font-black tracking-tighter">TIDE</h1>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans pb-20 max-w-md mx-auto relative flex flex-col shadow-2xl overflow-x-hidden">
      <Header />

      <div className="flex-1 overflow-y-auto">
        {activeTab === 'home' && (
          <div className="animate-in fade-in duration-500">
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
                <div className="flex-1 text-center">
                  <p className="text-[10px] text-gray-400 uppercase font-black">Sadaka</p>
                  <p className="text-xl font-black text-emerald-600">{formatCurrency(150000)}</p>
                </div>
                <div className="flex-1 text-center">
                  <p className="text-[10px] text-gray-400 uppercase font-black">Zakat</p>
                  <p className="text-xl font-black text-amber-600">{formatCurrency(450000)}</p>
                </div>
              </div>
            </div>

            <div className="px-5 space-y-6">
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

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center gap-2">
                  <Scroll size={24} className="text-purple-600" />
                  <span className="text-xs font-bold">Certificates</span>
                </div>
                <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center gap-2">
                  <Globe size={24} className="text-blue-600" />
                  <span className="text-xs font-bold">Hajj Hub</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'services' && (
          <div className="p-5 space-y-6">
             <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm">
                   <Heart size={24} className="text-red-500 mb-3" />
                   <h4 className="font-bold text-sm text-gray-800">Nikah</h4>
                   <p className="text-[10px] text-gray-400">Reg & Booking</p>
                </div>
                <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm">
                   <Scale size={24} className="text-blue-500 mb-3" />
                   <h4 className="font-bold text-sm text-gray-800">Mirath</h4>
                   <p className="text-[10px] text-gray-400">Calculator</p>
                </div>
             </div>

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

             <div className="bg-emerald-900 text-white p-6 rounded-[2.5rem] relative overflow-hidden">
                <h3 className="font-bold text-xl mb-1">Waqf Registry</h3>
                <p className="text-emerald-200 text-xs mb-4">Digitally secure land or wells.</p>
                <button className="bg-white text-emerald-900 text-[10px] font-black px-5 py-2.5 rounded-xl uppercase">Register</button>
                <Building2 size={80} className="absolute -right-4 -bottom-4 text-emerald-700 opacity-20" />
             </div>
          </div>
        )}

        {activeTab === 'impact' && (
           <div className="p-5 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                 <div className="bg-white p-5 rounded-3xl border border-gray-100">
                    <p className="text-2xl font-black text-emerald-600">{networkStats.totalMembers}</p>
                    <p className="text-[10px] text-gray-400 font-bold uppercase">Users</p>
                 </div>
                 <div className="bg-white p-5 rounded-3xl border border-gray-100">
                    <p className="text-2xl font-black text-blue-600">320</p>
                    <p className="text-[10px] text-gray-400 font-bold uppercase">Audits</p>
                 </div>
              </div>

              <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm">
                 <h3 className="font-bold text-gray-800 text-sm mb-4 uppercase">Network Capacity</h3>
                 <div className="space-y-4">
                    {networkStats.professions.map((prof, i) => (
                       <div key={i}>
                          <div className="flex justify-between text-[11px] font-bold mb-1.5 text-gray-600">
                             <span>{prof.name}</span>
                             <span>{prof.count}</span>
                          </div>
                          <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                             <div className="bg-emerald-500 h-full" style={{width: '60%'}}></div>
                          </div>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        )}

        {activeTab === 'connect' && (
           <div className="p-4 space-y-5">
              <div className="flex space-x-2 overflow-x-auto pb-2">
                {['education', 'baraza'].map(tab => (
                  <button key={tab} onClick={() => setConnectTab(tab)} className={`px-6 py-2 rounded-2xl text-[10px] font-black uppercase tracking-wider ${connectTab === tab ? 'bg-emerald-600 text-white shadow-lg' : 'bg-white border text-gray-500'}`}>
                    {tab}
                  </button>
                ))}
             </div>

             {connectTab === 'education' && (
                <div className="space-y-3">
                   <div className="bg-blue-900 text-white p-6 rounded-3xl mb-4">
                      <h2 className="text-xl font-bold mb-1">Scholarships</h2>
                      <div className="flex bg-white/10 p-1 rounded-xl mt-4">
                         <button onClick={() => setScholarshipType('secular')} className={`flex-1 py-2 text-[10px] font-bold rounded-lg ${scholarshipType === 'secular' ? 'bg-white text-blue-900' : ''}`}>Academic</button>
                         <button onClick={() => setScholarshipType('islamic')} className={`flex-1 py-2 text-[10px] font-bold rounded-lg ${scholarshipType === 'islamic' ? 'bg-white text-blue-900' : ''}`}>Islamic</button>
                      </div>
                   </div>
                   {scholarships[scholarshipType].map(item => (
                      <div key={item.id} className="bg-white p-4 rounded-2xl border border-gray-100 flex justify-between items-center">
                         <div><p className="text-xs font-bold text-gray-800">{item.title}</p><p className="text-[10px] text-gray-400">{item.institution}</p></div>
                         <button className="bg-emerald-50 text-emerald-600 text-[10px] font-bold px-3 py-1.5 rounded-lg">Apply</button>
                      </div>
                   ))}
                </div>
             )}

             {connectTab === 'baraza' && (
                <div className="space-y-4">
                   {discussions.map(post => (
                      <div key={post.id} className="bg-white p-5 rounded-[2rem] border border-gray-100">
                         <div className="flex justify-between items-start mb-2">
                            <span className="text-[9px] font-black text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg uppercase">{post.category}</span>
                            <span className="text-[9px] text-gray-400 flex items-center gap-1"><MessageCircle size={10}/> {post.replies}</span>
                         </div>
                         <h3 className="font-bold text-gray-800 text-sm mb-1">{post.title}</h3>
                         <p className="text-[10px] text-gray-500">By {post.author}</p>
                      </div>
                   ))}
                </div>
             )}
           </div>
        )}

        {activeTab === 'profile' && (
           <div className="p-5 animate-in fade-in">
              <div className="bg-white p-6 rounded-[2.5rem] shadow-xl border border-gray-100 flex flex-col items-center">
                 <div className="w-24 h-24 bg-emerald-50 rounded-[2rem] flex items-center justify-center border-4 border-white shadow-inner mb-4">
                    <User size={48} className="text-emerald-600" />
                 </div>
                 <h2 className="text-xl font-black text-gray-800">{userProfile.name}</h2>
                 <p className="text-xs text-emerald-600 font-bold mb-6">{userProfile.id}</p>
                 <div className="w-full bg-gray-50 p-4 rounded-3xl border border-dashed border-gray-300 flex flex-col items-center">
                    <QrCode size={140} className="text-gray-800 mb-4" />
                    <p className="text-[10px] font-black text-gray-400 uppercase">Digital Ummah ID</p>
                 </div>
              </div>
           </div>
        )}
      </div>

      {/* FIXED NAVIGATION */}
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
            <h2 className="text-xl font-black text-gray-800 mb-6">Support Project</h2>
            <div className="bg-emerald-50 p-5 rounded-3xl flex items-center gap-4 mb-8">
              <div className="bg-emerald-600 p-3 rounded-2xl text-white"><Heart size={24} fill="white"/></div>
              <div><p className="text-[10px] text-emerald-600 font-black uppercase">Project</p><p className="font-bold text-gray-800">{donationTarget.name}</p></div>
            </div>
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter Amount" className="w-full bg-gray-50 border-none rounded-2xl p-4 text-center text-lg font-black focus:ring-2 focus:ring-emerald-500 outline-none mb-6"/>
            <button onClick={() => {setShowDonateModal(false); setShowSuccess(true)}} className="w-full bg-emerald-600 text-white font-black py-5 rounded-[2rem] text-sm uppercase shadow-lg">Complete Payment</button>
            <button onClick={() => setShowDonateModal(false)} className="w-full text-gray-400 text-xs font-bold mt-4">Close</button>
          </div>
        </div>
      )}

      {/* SUCCESS SCREEN */}
      {showSuccess && (
        <div className="fixed inset-0 z-[100] bg-emerald-600 flex flex-col items-center justify-center text-white text-center p-10 animate-in fade-in duration-500">
          <CheckCircle size={80} className="text-white mb-6" />
          <h2 className="text-4xl font-black mb-3">Shukran!</h2>
          <p className="text-emerald-100 text-lg mb-12">Your contribution has been recorded.</p>
          <button onClick={() => setShowSuccess(false)} className="bg-white text-emerald-700 px-12 py-4 rounded-full font-black text-sm uppercase shadow-2xl">Return Home</button>
        </div>
      )}
    </div>
  );
};

export default App;
