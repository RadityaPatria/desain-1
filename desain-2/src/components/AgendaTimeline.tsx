"use client";

import React from "react";
import { RUN_OF_SHOW } from "../data/tablesData";
import { Clock, Calendar, MapPin, Sparkles } from "lucide-react";

export default function AgendaTimeline() {
  return (
    <div className="rounded-2xl border border-[#d8a21a]/25 bg-[#0b2126]/60 backdrop-blur-xl p-6 sm:p-8 shadow-2xl">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
            Rundown Acara Resmi
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white font-serif-gold tracking-tight mt-1">
            Run of Show — JawaPos Awards 2026
          </h2>
          <p className="text-xs text-slate-300 mt-1 flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5 text-amber-400" />
            <span>Rabu, 28 Oktober 2026</span>
            <span>•</span>
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>Grand Ballroom Hotel Surabaya</span>
          </p>
        </div>

        <div className="px-3.5 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Protokol Kehadiran VVIP: 17.45 WIB</span>
        </div>
      </div>

      <div className="relative mt-8 pl-6 sm:pl-8 border-l border-[#d8a21a]/30 space-y-6">
        {RUN_OF_SHOW.map((item, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline node */}
            <div className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-[#071518] transition-all ${
              idx === 1 || idx === 5
                ? "bg-amber-400 ring-4 ring-amber-400/20 scale-125"
                : "bg-teal-700 group-hover:bg-amber-400"
            }`} />

            <div className="p-4 rounded-xl bg-teal-950/40 border border-white/5 hover:border-[#d8a21a]/40 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                <span className="font-mono text-xs font-bold text-amber-300 flex items-center gap-1.5">
                  <Clock className="w-3 h-3 text-amber-400" />
                  {item.time} WIB
                </span>
                {(idx === 1 || idx === 5) && (
                  <span className="w-fit text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-400 text-teal-950">
                    Agenda Utama VVIP
                  </span>
                )}
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white mt-1">
                {item.title}
              </h3>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
