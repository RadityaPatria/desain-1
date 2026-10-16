"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Sparkles, QrCode, Clock, ShieldCheck, MapPin } from "lucide-react";

export default function Header() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Target event: 28 October 2026 18:00 WIB (UTC+7)
    const targetDate = new Date("2026-10-28T18:00:00+07:00").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const diff = Math.max(0, targetDate - now);
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-[#d8a21a]/20 bg-[#071518]/85 backdrop-blur-xl transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        
        {/* Brand & Title */}
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#d8a21a] via-[#b98a22] to-[#0f2a2e] p-[1.5px] shadow-lg shadow-amber-500/10">
            <div className="w-full h-full bg-[#071518] rounded-[10px] flex items-center justify-center">
              <span className="font-serif-gold text-lg font-bold text-amber-300 tracking-wider">JP</span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-base sm:text-lg font-bold tracking-tight text-white flex items-center gap-1.5">
                JawaPos Awards 2026
                <Sparkles className="w-4 h-4 text-amber-400 fill-amber-400/20" />
              </h1>
              <span className="hidden md:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Official VIP Portal
              </span>
            </div>
            <p className="text-xs text-slate-400 flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-amber-400/70" />
              Grand Ballroom Hotel Surabaya · Malam Penganugerahan Tahunan
            </p>
          </div>
        </div>

        {/* Live Event Countdown */}
        <div className="hidden lg:flex items-center gap-3 px-3.5 py-1.5 rounded-xl bg-[#0b2126]/80 border border-[#d8a21a]/25 text-xs text-amber-200">
          <Clock className="w-3.5 h-3.5 text-amber-400" />
          <div className="flex items-center gap-1.5 font-mono text-[13px] font-semibold text-white">
            <span>{timeLeft.days}h</span> : 
            <span>{String(timeLeft.hours).padStart(2, "0")}j</span> : 
            <span>{String(timeLeft.minutes).padStart(2, "0")}m</span> : 
            <span className="text-amber-400">{String(timeLeft.seconds).padStart(2, "0")}d</span>
          </div>
          <span className="text-[11px] text-amber-300/70 border-l border-[#d8a21a]/30 pl-2">
            Rabu, 28 Okt 2026
          </span>
        </div>

        {/* Action button to Kiosk mode */}
        <div className="flex items-center gap-2.5">
          <Link
            href="/checkin"
            className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-teal-800 to-[#0f2a2e] hover:from-teal-700 hover:to-teal-900 border border-[#d8a21a]/40 shadow-md shadow-teal-950/50 hover:shadow-amber-500/10 transition-all active:scale-[0.98]"
          >
            <QrCode className="w-4 h-4 text-amber-400 group-hover:rotate-12 transition-transform" />
            <span className="hidden sm:inline">Layar Kiosk Registrasi</span>
            <span className="sm:hidden">Kiosk</span>
            <span className="text-amber-400 font-bold">&rarr;</span>
          </Link>
        </div>

      </div>
    </header>
  );
}
