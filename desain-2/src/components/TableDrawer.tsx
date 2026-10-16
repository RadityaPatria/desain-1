"use client";

import React, { useState } from "react";
import { TableItem } from "../data/tablesData";
import { X, Crown, Users, CheckCircle2, Shield, Utensils, MessageSquare, Send, Sparkles } from "lucide-react";

interface TableDrawerProps {
  table: TableItem | null;
  onClose: () => void;
}

export default function TableDrawer({ table, onClose }: TableDrawerProps) {
  const [protocolMessage, setProtocolMessage] = useState("");
  const [messageSent, setMessageSent] = useState(false);

  if (!table) return null;

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!protocolMessage.trim()) return;
    setMessageSent(true);
    setTimeout(() => {
      setProtocolMessage("");
      setMessageSent(false);
    }, 3500);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm transition-all"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg h-full bg-[#07191c]/95 border-l border-[#d8a21a]/30 shadow-2xl p-5 sm:p-7 overflow-y-auto flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm ${
                table.id === 1 
                  ? "bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700 text-teal-950 shadow-md shadow-amber-500/20" 
                  : "bg-teal-900/60 text-amber-300 border border-amber-400/30"
              }`}>
                {table.id}
              </div>
              <div>
                <h2 className="text-lg font-bold text-white flex items-center gap-2 font-serif-gold">
                  {table.name}
                  {table.id === 1 && <Crown className="w-4 h-4 text-amber-400 fill-amber-400" />}
                </h2>
                <p className="text-xs text-amber-300/80 font-medium tracking-wide">
                  {table.tier} · Sayap {table.wing === "left" ? "Kiri" : "Kanan"}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* User Table Notice */}
          {table.id === 1 && (
            <div className="mt-4 p-3.5 rounded-xl bg-gradient-to-r from-amber-500/15 via-[#0f2a2e] to-amber-500/10 border border-amber-500/40 flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-xs font-bold text-amber-300 block">Meja Kehormatan Anda (VVIP Utama)</strong>
                <p className="text-[11px] text-slate-300 mt-0.5">
                  Menghadap catwalk tengah dengan akses karpet merah terdepan ke podium penyerahan trofi.
                </p>
              </div>
            </div>
          )}

          {/* Table Meta Summary */}
          <div className="grid grid-cols-2 gap-2.5 mt-4 text-xs">
            <div className="p-3 rounded-xl bg-teal-950/40 border border-white/5">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Institusi / Instansi</span>
              <strong className="text-white font-semibold block mt-0.5 truncate">{table.institution}</strong>
            </div>
            <div className="p-3 rounded-xl bg-teal-950/40 border border-white/5">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Kapasitas Kursi</span>
              <strong className="text-emerald-400 font-semibold block mt-0.5 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                8 Kursi Penuh (Confirmed)
              </strong>
            </div>
          </div>

          {/* 8 Seats Roster */}
          <div className="mt-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center justify-between pb-2 mb-3 border-b border-white/5">
              <span>Susunan Tamu (8 Kursi Round Table)</span>
              <span className="text-amber-400 font-mono text-[11px]">Kapasitas: 8</span>
            </h3>

            <div className="space-y-2.5">
              {table.guests.map((g) => (
                <div
                  key={g.seat}
                  className={`p-3 rounded-xl transition-all border flex items-center justify-between gap-3 ${
                    g.name.includes("Sulastri")
                      ? "bg-amber-500/10 border-amber-500/50 shadow-md shadow-amber-500/10"
                      : "bg-[#0b2126]/60 border-white/5 hover:border-amber-400/30"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${
                      g.name.includes("Sulastri")
                        ? "bg-amber-400 text-teal-950"
                        : "bg-teal-900/60 text-slate-300"
                    }`}>
                      {g.seat}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <strong className="text-xs font-semibold text-white truncate block">
                          {g.name}
                        </strong>
                        {g.name.includes("Sulastri") && (
                          <span className="px-1.5 py-0.2 rounded text-[9px] font-bold bg-amber-400 text-teal-950">
                            ANDA
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] text-slate-400 block truncate">{g.role}</span>
                    </div>
                  </div>

                  <div className="shrink-0 text-right">
                    {g.dietary && (
                      <span className="inline-flex items-center gap-1 text-[10px] text-amber-300/80 bg-amber-500/10 px-2 py-0.5 rounded-md">
                        <Utensils className="w-2.5 h-2.5" />
                        {g.dietary}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Protocol Message / Request Box (Especially relevant for Meja 1) */}
        <div className="mt-6 pt-5 border-t border-white/10">
          <form onSubmit={handleSendMessage} className="space-y-2.5">
            <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
              <span>Sampaikan Catatan Protokol / Ajudan untuk Meja {table.id}</span>
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={protocolMessage}
                onChange={(e) => setProtocolMessage(e.target.value)}
                placeholder="Misal: Perubahan nama ajudan atau kebutuhan diet khusus..."
                className="flex-1 px-3 py-2 rounded-xl text-xs bg-black/40 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
              />
              <button
                type="submit"
                className="px-3.5 py-2 rounded-xl bg-[#d8a21a] hover:bg-amber-400 text-teal-950 font-bold text-xs flex items-center gap-1 transition-all"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Kirim</span>
              </button>
            </div>
            {messageSent && (
              <p className="text-[11px] text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                Catatan protokoler berhasil disampaikan ke meja sekretariat panitia.
              </p>
            )}
          </form>
        </div>

      </div>
    </div>
  );
}
