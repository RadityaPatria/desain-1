"use client";

import React from "react";
import { Shield, Car, Shirt, PhoneCall, CheckCircle2, AlertCircle } from "lucide-react";

export default function ProtocolGuide() {
  return (
    <div className="rounded-2xl border border-[#d8a21a]/25 bg-[#0b2126]/60 backdrop-blur-xl p-6 sm:p-8 shadow-2xl space-y-6">
      
      <div className="pb-5 border-b border-white/10">
        <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
          Pedoman ProtokoIer Resmi
        </span>
        <h2 className="text-xl sm:text-2xl font-bold text-white font-serif-gold tracking-tight mt-1">
          Tata Cara Kedatangan &amp; Fasilitas VVIP
        </h2>
        <p className="text-xs text-slate-300 mt-1">
          Informasi khusus bagi jajaran protokol, pengawal pribadi (ADC), dan staf pendamping Ibu Gubernur.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Drop-off & Parking Lane */}
        <div className="p-5 rounded-xl bg-teal-950/40 border border-white/5 space-y-3">
          <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <Car className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-bold text-white">Jalur Akses Drop-Off Khusus VVIP</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Rangkaian kendaraan dinas VVIP (Gubernur Jawa Timur) diarahkan langsung menuju <strong>Lobi Utama Barat (Pintu Khusus Karpet Merah)</strong> Grand Ballroom Hotel Surabaya.
          </p>
          <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 text-[11px] font-mono text-amber-300 flex items-center justify-between">
            <span>Stiker Parkir Ring 1:</span>
            <span className="font-bold text-white">VVIP-1-GUB (Prioritas Lobi)</span>
          </div>
        </div>

        {/* Dress Code */}
        <div className="p-5 rounded-xl bg-teal-950/40 border border-white/5 space-y-3">
          <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <Shirt className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-bold text-white">Ketentuan Busana (Dress Code)</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Pakaian Sipil Lengkap (PSL) Gelap / Jas Resmi Berdasi, Pakaian Kebesaran Adat / Kebaya Formal Jawa Timur, atau Batik Tulis Sutra Lengan Panjang Resmi.
          </p>
          <div className="flex items-center gap-2 text-[11px] text-emerald-400">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Pin Kehormatan dibagikan di meja registrasi VVIP</span>
          </div>
        </div>

        {/* Security & Health Protocol */}
        <div className="p-5 rounded-xl bg-teal-950/40 border border-white/5 space-y-3">
          <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <Shield className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-bold text-white">Pengamanan &amp; Satgas Medis</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Koordinasi pengamanan Ring 1 dikomandoi langsung oleh Satgas Pam VVIP Korem 084/Bhaskara Jaya dan Tim Dokter Siaga RSUD Dr. Soetomo (Meja 40).
          </p>
        </div>

        {/* Protocol Hotline Desk */}
        <div className="p-5 rounded-xl bg-teal-950/40 border border-white/5 space-y-3">
          <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <PhoneCall className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-bold text-white">Narahubung Protokoler Acara</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Bagi ajudan atau protokol yang membutuhkan penyesuaian kursi tambahan atau konfirmasi kedatangan lebih awal:
          </p>
          <div className="text-[11px] text-amber-300 font-mono">
            <span>Sekretariat VVIP: +62 811-3400-2026 (Ibu Retno Palupi)</span>
          </div>
        </div>

      </div>

    </div>
  );
}
