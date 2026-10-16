"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import VipPassCard from "../components/VipPassCard";
import BallroomRadar from "../components/BallroomRadar";
import TableDrawer from "../components/TableDrawer";
import AgendaTimeline from "../components/AgendaTimeline";
import ProtocolGuide from "../components/ProtocolGuide";
import DirectoryGrid from "../components/DirectoryGrid";
import { TableItem, TABLES_DATA } from "../data/tablesData";
import { Map, Calendar, Users, Shield, Sparkles, Crown } from "lucide-react";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<"map" | "agenda" | "directory" | "protocol">("map");
  const [selectedTable, setSelectedTable] = useState<TableItem | null>(null);

  const handleSelectTable = (table: TableItem) => {
    setSelectedTable(table);
  };

  const handleCloseDrawer = () => {
    setSelectedTable(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#071518] text-[#eef2ee]">
      
      {/* Top Navbar */}
      <Header />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-9 space-y-8">
        
        {/* VIP PASS HERO SECTION */}
        <section className="relative">
          <div className="flex flex-col lg:flex-row items-stretch gap-6">
            
            {/* Left: Holographic VIP Pass Card */}
            <div className="w-full lg:w-[460px] shrink-0">
              <VipPassCard />
            </div>

            {/* Right: Event Briefing & Quick Stats Cockpit */}
            <div className="flex-1 rounded-2xl border border-[#d8a21a]/25 bg-[#0b2126]/60 backdrop-blur-xl p-6 sm:p-7 flex flex-col justify-between shadow-2xl">
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-amber-400 text-teal-950">
                    Undangan Resmi VIP
                  </span>
                  <span className="text-xs text-amber-300/80 font-mono">Grand Ballroom No. 1</span>
                </div>

                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white font-serif-gold tracking-tight mt-3">
                  Malam Penganugerahan Prestasi &amp; Kepemimpinan Jawa Timur 2026
                </h2>

                <p className="text-xs sm:text-sm text-slate-300 mt-2.5 leading-relaxed">
                  Kami mengundang dengan penuh rasa hormat <strong>Ibu Gubernur Jawa Timur, Dra. Hj. Sulastri Hadiningrat, M.Si.</strong> beserta jajaran delegasi pada puncak penganugerahan tahunan Jawa Pos Group.
                </p>

                {/* Event Highlights Metric Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-5">
                  <div className="p-3 rounded-xl bg-teal-950/50 border border-white/5">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Nomor Meja</span>
                    <strong className="text-base font-bold text-amber-300 mt-0.5 block">Meja 1 VVIP</strong>
                  </div>
                  <div className="p-3 rounded-xl bg-teal-950/50 border border-white/5">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Kapasitas Tamu</span>
                    <strong className="text-base font-bold text-white mt-0.5 block">40 Meja (320 Kursi)</strong>
                  </div>
                  <div className="p-3 rounded-xl bg-teal-950/50 border border-white/5">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Waktu Acara</span>
                    <strong className="text-base font-bold text-white mt-0.5 block">18.00 WIB</strong>
                  </div>
                  <div className="p-3 rounded-xl bg-teal-950/50 border border-white/5">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Status RSVP</span>
                    <strong className="text-base font-bold text-emerald-400 mt-0.5 block">Terkonfirmasi (4)</strong>
                  </div>
                </div>
              </div>

              {/* Protocol Assistance Note */}
              <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-amber-300/90">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  Staf Narahubung VVIP siap mendampingi di Lobi Utama Karpet Merah
                </span>
                <button
                  onClick={() => {
                    const meja1 = TABLES_DATA.find((t) => t.id === 1);
                    if (meja1) setSelectedTable(meja1);
                  }}
                  className="px-3 py-1.5 rounded-lg bg-amber-400/15 hover:bg-amber-400/25 text-amber-300 border border-amber-400/30 text-xs font-semibold transition-all"
                >
                  Lihat Meja 1 Anda &rarr;
                </button>
              </div>

            </div>

          </div>
        </section>

        {/* INTERACTIVE NAVIGATION CONTROLLER TABS */}
        <section className="space-y-6">
          <div className="flex items-center justify-center sm:justify-start gap-2 overflow-x-auto pb-2 border-b border-white/10 scrollbar-none">
            {[
              { id: "map", label: "Denah Interaktif Ballroom", icon: Map },
              { id: "agenda", label: "Rundown Acara (Run of Show)", icon: Calendar },
              { id: "directory", label: "Direktori Tamu & Meja", icon: Users },
              { id: "protocol", label: "Pedoman Protokol VVIP", icon: Shield },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                    isActive
                      ? "bg-gradient-to-r from-[#d8a21a] to-amber-500 text-teal-950 shadow-lg shadow-amber-500/20"
                      : "bg-[#0b2126]/60 text-slate-300 hover:text-white hover:bg-teal-900/40 border border-white/5"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* ACTIVE VIEW CONTENT */}
          <div>
            {activeTab === "map" && (
              <BallroomRadar
                selectedTable={selectedTable}
                onSelectTable={handleSelectTable}
              />
            )}

            {activeTab === "agenda" && <AgendaTimeline />}

            {activeTab === "directory" && (
              <DirectoryGrid onSelectTable={handleSelectTable} />
            )}

            {activeTab === "protocol" && <ProtocolGuide />}
          </div>
        </section>

      </main>

      {/* TABLE INSPECTION SLIDE DRAWER */}
      <TableDrawer table={selectedTable} onClose={handleCloseDrawer} />

      {/* FOOTER */}
      <footer className="border-t border-[#d8a21a]/20 bg-[#051114] py-8 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-serif-gold font-bold text-amber-400 text-base">JP</span>
            <div>
              <p className="font-semibold text-slate-200">JawaPos Media Group © 2026</p>
              <p className="text-[11px] text-slate-500">Malam Penganugerahan Tahunan JawaPos Awards · Grand Ballroom Hotel Surabaya</p>
            </div>
          </div>
          <div className="text-right text-[11px] text-slate-500">
            <span>Sistem Undangan &amp; Penataan Meja Kehormatan VVIP</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
