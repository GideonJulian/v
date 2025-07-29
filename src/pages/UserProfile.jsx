import React, { useState } from "react";
import { Mail, Phone, MapPin, Calendar, Edit, Save } from "lucide-react";

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState("Profile");
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    firstName: "Alex",
    lastName: "Johnson",
    email: "alex.johnson@email.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    joined: "January 2024",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const tabs = ["Profile", "Security", "Activity"];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0c15] to-[#0e0f1c] text-white p-4 md:p-10 font-sans">
      {/* Tabs */}
             <div className="flex bg-[#0b0c15] rounded-lg overflow-hidden mb-6 p-3">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 text-sm font-semibold capitalize transition-all rounded-sm ${
                  activeTab === tab
                    ? "bg-[#000] text-white"
                    : "bg-[#0b0c15] text-gray-400 hover:bg-purple-700/10"
                }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === "Profile" && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Profile Card */}
            <div className="border border-[#141E38] p-6 rounded-lg space-y-4">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-white text-black flex items-center justify-center text-2xl font-semibold">
                  AJ
                </div>
                <h2 className="text-xl font-bold mt-2">
                  {profile.firstName} {profile.lastName}
                </h2>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <span className="bg-purple-600 text-white px-3 py-1 text-xs rounded-full">
                    Quantum Pro
                  </span>
                  <span className="bg-[#1E1E1E] text-white px-3 py-1 text-xs rounded-full border border-gray-600">
                    ✅ Verified
                  </span>
                </div>
              </div>

              <div className="text-sm space-y-2 text-gray-300">
                <p className="flex items-center gap-2">
                  <Mail size={16} /> {profile.email}
                </p>
                <p className="flex items-center gap-2">
                  <Phone size={16} /> {profile.phone}
                </p>
                <p className="flex items-center gap-2">
                  <MapPin size={16} /> {profile.location}
                </p>
                <p className="flex items-center gap-2">
                  <Calendar size={16} /> Joined {profile.joined}
                </p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="border border-[#141E38] p-6 rounded-lg space-y-4">
              <h3 className="text-lg font-semibold">📈 Quick Stats</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex justify-between">
                  <span>Portfolio Value</span>
                  <span className="text-white">
                    $45,230.89{" "}
                    <span className="text-green-500 text-xs">+12.5%</span>
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Total Trades</span>
                  <span className="text-white">
                    1,247 <span className="text-green-500 text-xs">+8.2%</span>
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Success Rate</span>
                  <span className="text-white">
                    87.3% <span className="text-green-500 text-xs">+2.1%</span>
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Quantum Score</span>
                  <span className="text-white">
                    945 <span className="text-green-500 text-xs">+15</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Editable Personal Info */}
          <div className="lg:col-span-2 border border-[#141E38] p-6 rounded-lg space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Personal Information</h2>
              <button
                onClick={() => setIsEditing((prev) => !prev)}
                className="text-sm bg-gray-800 px-3 py-1 rounded-md flex items-center gap-2"
              >
                {isEditing ? <Save size={14} /> : <Edit size={14} />}
                {isEditing ? "Save" : "Edit"}
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
              <div>
                <label className="block text-gray-500 mb-1">First Name</label>
                <input
                  className="w-full bg-[#05080F] border border-[#141E38] px-3 py-3 placeholder:text-[#F8FAFC] rounded text-[#F8FAFC]"
                  type="text"
                  name="firstName"
                  value={profile.firstName}
                  disabled={!isEditing}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-gray-500 mb-1">Last Name</label>
                <input
                  className="w-full bg-[#05080F] border border-[#141E38] px-3 py-3 placeholder:text-[#F8FAFC] rounded text-[#F8FAFC]"
                  type="text"
                  name="lastName"
                  value={profile.lastName}
                  disabled={!isEditing}
                  onChange={handleChange}
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-500 mb-1">
                  Email Address
                </label>
                <input
                  className="w-full bg-[#05080F] border border-[#141E38] px-3 py-3 placeholder:text-[#F8FAFC] rounded text-[#F8FAFC]"
                  type="email"
                  name="email"
                  value={profile.email}
                  disabled={!isEditing}
                  onChange={handleChange}
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-500 mb-1">
                  Phone Number
                </label>
                <input
                  className="w-full bg-[#05080F] border border-[#141E38] px-3 py-3 placeholder:text-[#F8FAFC] rounded text-[#F8FAFC]"
                  type="tel"
                  name="phone"
                  value={profile.phone}
                  disabled={!isEditing}
                  onChange={handleChange}
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-500 mb-1">Location</label>
                <input
                  className="w-full bg-[#05080F] border border-[#141E38] px-3 py-3 placeholder:text-[#F8FAFC] rounded text-[#F8FAFC]"
                  type="text"
                  name="location"
                  value={profile.location}
                  disabled={!isEditing}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "Security" && (
        <div className="bg-[#101012] p-6 rounded-lg text-center text-gray-400">
          <p>🔒 Security settings coming soon...</p>
        </div>
      )}

      {activeTab === "Activity" && (
        <div className="bg-[#101012] p-6 rounded-lg text-center text-gray-400">
          <p>📊 User activity data will show here.</p>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
