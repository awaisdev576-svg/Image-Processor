import React, { useState } from 'react';
import { Folder, Upload, BarChart3, Users, Key, Link, LogOut, ChevronDown } from 'lucide-react';

export default function ArchAiDashboard() {
    const [activeTab, setActiveTab] = useState('documents');

    const menuItems = [
        { id: 'documents', icon: Folder, label: 'Documents', admin: false },
        { id: 'upload', icon: Upload, label: 'Upload', admin: false },
        { id: 'usage', icon: BarChart3, label: 'Usage & Quotas', admin: false },
        { id: 'members', icon: Users, label: 'Members', admin: true },
        { id: 'api-keys', icon: Key, label: 'API Keys', admin: true },
        { id: 'webhooks', icon: Link, label: 'Webhooks', admin: true },
    ];

    return (
            <div className="w-64 bg-[#1A1A1A] text-white flex flex-col">
                {/* Logo/Brand */}
                <div className="p-4 border-b border-gray-800 text-[#FCFCFC]">
                    <button className="flex items-center justify-between w-full text-lg font-semibold rounded px-2 py-1 transition">
                        <span>ArchAi</span>
                        <ChevronDown size={20}  className='cursor-pointer'/>
                    </button>
                </div>

                {/* Menu Items */}
                <nav className="flex-1 p-4 space-y-1">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <button
                                key={item.id}
                                onClick={() => setActiveTab(item.id)}
                                className={`w-full flex items-center justify-between px-3 py-2 rounded transition cursor-pointer text-[#CECECE] ${activeTab === item.id
                                        ? 'bg-[#2A2A2A] text-white border-l-2 border-[#3761F3]'
                                        : 'text-gray-300 hover:bg-[#2A2A2A]'
                                    }`}
                            >
                                <div className="flex items-center font-medium gap-3">
                                    <Icon size={20} />
                                    <span>{item.label}</span>
                                </div>
                                {item.admin && (
                                    <span className="text-[10px] bg-[#2A2A2A] text-[#6E6E6E] px-2 py-0.5 rounded-full">
                                        admin
                                    </span>
                                )}
                            </button>
                        );
                    })}
                </nav>

                {/* User Profile */}
                <div>
                    <div className="p-4 ml-2">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-9 h-9 bg-[#3A3A3A] rounded-full text-gray-300 flex items-center justify-center font-semibold text-md">
                                JD
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="font-semibold text-sm text-[#E4E4E4]">John Doe</div>
                                <div className="text-xs text-[#777777] truncate">
                                    john@archai.com
                                </div>
                            </div>
                        </div>
                        <button className="w-full flex items-center gap-2 px-1 py-2 text-[#E4E4E4] cursor-pointer rounded transition">
                            <LogOut size={18} />
                            <span className='text-sm'>Logout</span>
                        </button>
                    </div>
                </div>
            </div>
    )
}