"use client";

import React, { useState } from "react";
import { TableItem, TABLES_DATA } from "../data/tablesData";
import { Search, Crown, Users, ArrowUpRight, CheckCircle2 } from "lucide-react";

interface DirectoryGridProps {
  onSelectTable: (table: TableItem) => void;
}

export default function DirectoryGrid({ onSelectTable }: DirectoryGridProps) {
  const [query, setQuery] = useState("");
  const [selectedWing, setSelectedWing] = useState<"all" | "left" | "right">("all");

  const filtered = TABLES_DATA.filter((t) => {
    const matchesWing = selectedWing === "all" || t.wing === selectedWing;
    if (!matchesWing) return false;
    if (!query) return true;
    const q = query.toLowerCase();
    const matchName = t.name.toLowerCase().includes(q);
    const matchTier = t.tier.toLowerCase().includes(q);
    const matchInst = t.institution.toLowerCase().includes(q);
    const matchGuest = t.guests.some((g) => g.name.toLowerCase().includes(q) || g.role.toLowerCase().includes(q));
    return matchName || matchTier || matchInst || matchGuest;
  });

  return (
    <div className="rounded-2xl border border-[#d8a21a]/25 bg-[#0b2126]/60 backdrop-blur-xl p-6 sm:p-8 shadow-2xl space-y-6">
      
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-white/10">
        <div>
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
            Daftar Lengkap 40 Meja
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white font-serif-gold tracking-tight mt-1">
            Direktori Meja &amp; Tamu Kehormatan
          </h2>
          <p className="text-xs text-slate-300 mt-1">
            Total 320 kursi perjamuan terbagi dalam Sayap Kiri dan Sayap Kanan.
          </p>
        </div>

        {/* Wing Switcher */}
        <div className="flex items-center gap-1 bg-black/40 p-1 rounded-xl border border-white/10 text-xs">
          {[
            { id: "all", label: "Semua (40)" },
            { id: "left", label: "Sayap Kiri (20)" },
            { id: "right", label: "Sayap Kanan (20)" },
          ].map((w) => (
            <button
              key={w.id}
              onClick={() => setSelectedWing(w.id as any)}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                selectedWing === w.id
                  ? "bg-[#d8a21a] text-teal-950 font-bold"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              {w.label}
            </button>
          ))}
        </div>
      </div>

      {/* Search Input */}
      <div className="relative">
        <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ketik nama pejabat, instansi, atau nomor meja untuk mencari..."
          className="w-full pl-10 pr-4 py-2.5 rounded-xl text-xs sm:text-sm bg-black/40 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
        />
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {filtered.map((t) => (
          <div
            key={t.id}
            onClick={() => onSelectTable(t)}
            className={`p-4 rounded-xl border transition-all cursor-pointer group flex flex-col justify-between ${
              t.id === 1
                ? "bg-amber-500/15 border-amber-400/60 shadow-lg shadow-amber-500/10 hover:border-amber-400"
                : "bg-teal-950/40 border-white/5 hover:border-amber-400/40 hover:bg-teal-900/40"
            }`}
          >
            <div>
              <div className="flex items-center justify-between pb-2 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <span className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs ${
                    t.id === 1 ? "bg-amber-400 text-teal-950" : "bg-teal-900/60 text-amber-300"
                  }`}>
                    {t.id}
                  </span>
                  <strong className="text-xs sm:text-sm font-bold text-white group-hover:text-amber-300 transition-colors flex items-center gap-1.5">
                    {t.name}
                    {t.id === 1 && <Crown className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />}
                  </strong>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>

              <div className="mt-2.5">
                <span className="text-[10px] uppercase tracking-wider text-amber-300/80 font-semibold block">
                  {t.tier}
                </span>
                <p className="text-xs text-slate-300 mt-1 line-clamp-1">
                  {t.institution}
                </p>
              </div>
            </div>

            <div className="mt-3.5 pt-2.5 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
              <span className="flex items-center gap-1 text-emerald-400">
                <CheckCircle2 className="w-3 h-3" />
                8 Kursi Penuh
              </span>
              <span>Sayap {t.wing === "left" ? "Kiri" : "Kanan"}</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
