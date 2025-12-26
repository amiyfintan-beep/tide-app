import React, { useState } from 'react';
// These icons are imported from the lucide-react library
import { 
  Wallet, Heart, Activity, Users, LayoutGrid, Bell, 
  ShieldCheck, Building2, Waves, Search, 
  MapPin, Phone, Briefcase, GraduationCap, 
  FileText, CheckCircle, Store, Landmark, 
  Globe, BookOpen, Award, Scroll, Scale, 
  Tent, Utensils, Mic, PieChart, User,
  QrCode, MessageSquare
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [connectTab, setConnectTab] = useState('education'); 
  const [scholarshipType, setScholarshipType] = useState('secular');
  const [showDonateModal, setShowDonateModal] = useState(false);
  const [donationTarget, setDonationTarget] = useState({ type: 'pool', name: 'National Fund' }); 
  const [amount, setAmount] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  // --- MOCK DATA ---
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

  const formatCurrency = (val) => new Intl.NumberFormat('en-TZ', { style: 'currency', currency: 'TZS' }).format(val);

  // --- SUB-COMPONENTS ---
  const Header = () => (
    <div className="bg-white pt-3 pb-2 px-4 border-b border-gray-100 sticky top-0 z-30 shadow-sm">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1 text-emerald-600">
           <Waves size={24} strokeWidth={2.5} />
           <h1 className="text-2xl font-black tracking-tighter">TIDE</h1>
        </div>
        <div className="bg-gray-100 p-2 rounded-full" onClick={() => setActiveTab('profile')}>
           <User size={20} className="text-gray-600" />
        </div>
      </div>
    </div>
  );

  const Navigation = () => (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-4 flex justify-between items-center shadow-2xl z-50">
      <button onClick={() => setActiveTab('home')} className={`flex flex-col items-center p-2 ${activeTab === 'home' ? 'text-emerald-700' : 'text-gray-400'}`}>
        <Wallet size={22} />
        <span className="text-[9px] mt-1 font-bold">Home</span>
      </button>
      <button onClick={() => setActiveTab('impact')} className={`flex flex-col items-center p-2 ${activeTab === 'impact' ? 'text-emerald-700' : 'text-gray-400'}`}>
        <Activity size={22} />
        <span className="text-[9px] mt-1 font-bold">Stats</span>
      </button>
      <button 
        onClick={() => { setShowDonateModal(true); setDonationTarget({type: 'pool', name: 'National Fund'})}}
        className="bg-emerald-600 text-white p-3 rounded-2xl shadow-xl -mt-8 border-4 border-white">
        <Heart size={26} fill="white" />
      </button>
      <button onClick={() => setActiveTab('connect')} className={`flex flex-col items-center p-2 ${activeTab === 'connect' ? 'text-emerald-700' : 'text-gray-400'}`}>
        <Users size={22} />
        <span className="text-[9px] mt-1 font-bold">Ummah</span>
      </button>
      <button onClick={() => setActiveTab('services')} className={`flex flex-col items-center p-2 ${activeTab === 'services' ? 'text-emerald-700' : 'text-gray-400'}`}>
        <LayoutGrid size={22} />
        <span className="text-[9px] mt-1 font-bold">Services</span>
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans pb-20 max-w-md mx-auto relative flex flex-col shadow-2xl overflow-x-hidden">
      <Header />

      <div className="flex-1 overflow-y-auto">
        {/* HOME TAB */}
        {activeTab === 'home' && (
          <div className="p-4 space-y-6">
            <div className="bg-gradient-to-br from-emerald-800 to-emerald-600 text-white p-6 rounded-3xl shadow-lg">
               <p className="text-emerald-100 text-xs">As-Salaam Alaykum,</p>
               <h1 className="text-xl font-bold mb-4">{userProfile.name}</h1>
               <div className="bg-white/10 p-4 rounded-2xl flex justify-between">
                  <div>
                    <p className="text-[10px] uppercase font-bold">Sadaka</p>
                    <p className="text-lg font-black">{formatCurrency(150000)}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold">Zakat</p>
                    <p className="text-lg font-black">{formatCurrency(450000)}</p>
                  </div>
               </div>
            </div>

            <div className="bg-white p-4 rounded-3xl border border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                 <Mic size={20} className="text-amber-600" />
                 <div>
                    <h3 className="font-bold text-sm text-gray-800">Friday Wave</h3>
                    <p className="text-[10px] text-gray-400">Flood Relief Tanga</p>
                 </div>
              </div>
              <button onClick={() => setShowDonateModal(true)} className="bg-gray-900 text-white px-4 py-2 rounded-xl text-xs font-bold">Help</button>
            </div>
          </div>
        )}

        {/* STATS TAB */}
        {activeTab === 'impact' && (
           <div className="p-5 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                 <div className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100">
                    <p className="text-2xl font-black text-emerald-600">{networkStats.totalMembers}</p>
                    <p className="text-[10px] text-gray-400 uppercase font-bold">Total Users</p>
                 </div>
                 <div className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100">
                    <p className="text-2xl font-black text-blue-600">320</p>
                    <p className="text-[10px] text-gray-400 uppercase font-bold">Audits</p>
                 </div>
              </div>
           </div>
        )}

        {/* SERVICES TAB */}
        {activeTab === 'services' && (
           <div className="p-5 space-y-4">
              <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm flex items-center gap-4">
                 <Scale size={24} className="text-blue-500" />
                 <div>
                    <h4 className="font-bold text-gray-800">Mirath Calculator</h4>
                    <p className="text-xs text-gray-400">Inheritance Laws</p>
                 </div>
              </div>
              <div className="bg-emerald-900 text-white p-6 rounded-3xl relative overflow-hidden">
                 <h3 className="font-bold text-lg">Waqf Registry</h3>
                 <p className="text-xs text-emerald-200 mb-4">Register land or buildings</p>
                 <button className="bg-white text-emerald-900 text-[10px] font-black px-4 py-2 rounded-lg">Register</button>
              </div>
           </div>
        )}

        {/* CONNECT TAB */}
        {activeTab === 'connect' && (
           <div className="p-4 space-y-4">
              <div className="flex space-x-2">
                 <button onClick={() => setConnectTab('education')} className={`flex-1 py-2 rounded-xl text-xs font-bold ${connectTab === 'education' ? 'bg-emerald-600 text-white' : 'bg-gray-100'}`}>Education</button>
                 <button onClick={() => setConnectTab('baraza')} className={`flex-1 py-2 rounded-xl text-xs font-bold ${connectTab === 'baraza' ? 'bg-emerald-600 text-white' : 'bg-gray-100'}`}>Baraza</button>
              </div>
              {connectTab === 'education' && scholarships.secular.map(item => (
                <div key={item.id} className="bg-white p-4 rounded-2xl border border-gray-100 flex justify-between items-center">
                   <div>
                      <p className="text-sm font-bold">{item.title}</p>
                      <p className="text-xs text-gray-400">{item.institution}</p>
                   </div>
                   <button className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-lg">Apply</button>
                </div>
              ))}
           </div>
        )}

        {/* PROFILE TAB */}
        {activeTab === 'profile' && (
           <div className="p-5 flex flex-col items-center">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                 <User size={40} className="text-emerald-600" />
              </div>
              <h2 className="text-xl font-bold">{userProfile.name}</h2>
              <p className="text-emerald-600 text-sm font-bold mb-6">{userProfile.id}</p>
              <div className="bg-white p-4 rounded-3xl border border-dashed border-gray-300">
                 <QrCode size={150} />
              </div>
           </div>
        )}
      </div>

      <Navigation />

      {/* DONATION MODAL */}
      {showDonateModal && (
        <div className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm flex items-end">
          <div className="bg-white w-full rounded-t-[2.5rem] p-8 animate-in slide-in-from-bottom">
            <h2 className="text-xl font-bold mb-4">Support {donationTarget.name}</h2>
            <input 
              type="number" 
              value={amount} 
              onChange={(e) => setAmount(e.target.value)} 
              placeholder="Enter Amount" 
              className="w-full bg-gray-100 rounded-2xl p-4 mb-4 outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button 
              onClick={() => {setShowDonateModal(false); setShowSuccess(true)}}
              className="w-full bg-emerald-600 text-white font-bold py-4 rounded-2xl">
              Pay Now
            </button>
            <button onClick={() => setShowDonateModal(false)} className="w-full text-gray-400 mt-4 text-sm font-bold">Cancel</button>
          </div>
        </div>
      )}

      {/* SUCCESS SCREEN */}
      {showSuccess && (
        <div className="fixed inset-0 z-[100] bg-emerald-600 flex flex-col items-center justify-center text-white p-10">
          <CheckCircle size={80} className="mb-6" />
          <h2 className="text-3xl font-black mb-2">Shukran!</h2>
          <p className="text-center opacity-90 mb-8">Your contribution has been recorded.</p>
          <button onClick={() => setShowSuccess(false)} className="bg-white text-emerald-700 px-10 py-3 rounded-full font-bold">Return</button>
        </div>
      )}
    </div>
  );
};

export default App;
