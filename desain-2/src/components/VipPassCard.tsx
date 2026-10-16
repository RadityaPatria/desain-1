"use client";

import React, { useState } from "react";
import { Crown, Sparkles, QrCode, ShieldCheck, Download, Share2, Check, Copy } from "lucide-react";

export default function VipPassCard() {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText("JP26-GUB-001");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="relative rounded-2xl p-[1.5px] bg-gradient-to-b from-[#fde047] via-[#d8a21a] to-[#0f2a2e] shadow-2xl shadow-amber-500/10 overflow-hidden">
      
      {/* Background ambient light */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative rounded-[15px] bg-[#07191c]/90 backdrop-blur-xl p-6 sm:p-7">
        
        {/* Pass Top Badge */}
        <div className="flex items-center justify-between gap-3 pb-5 border-b border-[#d8a21a]/25">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-[#d8a21a]/20 border border-[#d8a21a]/50 flex items-center justify-center text-amber-300">
              <Crown className="w-4 h-4 fill-amber-400" />
            </span>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-amber-400 block">
                Official Access Pass
              </span>
              <strong className="text-sm font-bold text-white tracking-wide">
                PREMIUM VVIP DELEGATION
              </strong>
            </div>
          </div>

          <div className="text-right">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-400/15 text-amber-300 border border-amber-400/30">
              <Sparkles className="w-3 h-3 text-amber-400" />
              MEJA 1 VVIP
            </span>
          </div>
        </div>

        {/* Guest Information Roster */}
        <div className="py-5 space-y-4">
          <div>
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
              Nama Tamu Utama Kehormatan
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-serif-gold tracking-tight mt-0.5">
              Dra. Hj. Sulastri Hadiningrat, M.Si.
            </h3>
            <p className="text-xs font-medium text-amber-300/90 mt-0.5">
              Gubernur Jawa Timur · Pemerintah Provinsi Jawa Timur
            </p>
          </div>

          {/* Delegation Members List */}
          <div className="p-3.5 rounded-xl bg-teal-950/50 border border-white/5 space-y-2">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center justify-between">
              <span>Rombongan Delegasi Terkonfirmasi</span>
              <span className="text-emerald-400 font-semibold">4 Orang Hadir</span>
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="flex items-center gap-2 text-slate-200">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                <span className="truncate">Siti Rahmawati (Protokol)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                <span className="truncate">Bpk. Bambang (Ajudan VVIP)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                <span className="truncate">Ibu Indah P. (ADC Pendamping)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span className="truncate font-semibold text-emerald-300">Akses Masuk Meja 1</span>
              </div>
            </div>
          </div>

          {/* QR Code & Pass Details */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            
            {/* Simulated Vector QR Code */}
            <div className="flex items-center gap-3">
              <div className="w-20 h-20 rounded-xl bg-white p-2 flex items-center justify-center shadow-lg border border-amber-400/40 shrink-0">
                {/* Clean QR Graphic */}
                <svg viewBox="0 0 100 100" className="w-full h-full text-black">
                  <path
                    fill="currentColor"
                    d="M10 10h30v30H10z m5 5v20h20V15z m5 5h10v10H20z
                       M60 10h30v30H60z m5 5v20h20V15z m5 5h10v10H70z
                       M10 60h30v30H10z m5 5v20h20V65z m5 5h10v10H20z
                       M50 10h5v15h-5z M50 35h10v10h-10z M60 50h15v5h-15z
                       M50 60h5v30h-5z M60 70h10v10h-10z M80 60h10v10h-10z
                       M70 80h20v10h-20z M35 50h10v5h-10z"
                  />
                </svg>
              </div>

              <div>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest block">Kode Akses QR</span>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="font-mono text-sm font-bold text-amber-300">JP26-GUB-001</span>
                  <button 
                    onClick={handleCopyCode}
                    title="Salin Kode Akses"
                    className="p-1 rounded hover:bg-white/10 text-slate-400 hover:text-white transition-all"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
                <span className="text-[10px] text-emerald-400 font-medium block mt-1 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> Siap Dipindai di Kiosk Lobi
                </span>
              </div>
            </div>

            {/* Quick action buttons */}
            <div className="flex flex-col gap-2 w-full sm:w-auto">
              <button 
                onClick={handleCopyCode}
                className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-[#d8a21a]/20 hover:bg-[#d8a21a]/30 text-amber-300 border border-[#d8a21a]/40 flex items-center justify-center gap-1.5 transition-all"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Bagikan ke Ajudan</span>
              </button>
              <button 
                onClick={() => alert("E-Pass VIP telah disiapkan untuk dicetak atau ditunjukkan di meja registrasi.")}
                className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 flex items-center justify-center gap-1.5 transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Simpan Tiket Digital</span>
              </button>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
