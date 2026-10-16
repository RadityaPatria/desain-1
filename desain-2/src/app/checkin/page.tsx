"use client";

import React, { useState } from "react";
import Link from "next/link";
import confetti from "canvas-confetti";
import { 
  QrCode, 
  Search, 
  Camera, 
  CheckCircle2, 
  Printer, 
  Volume2, 
  VolumeX, 
  ArrowLeft, 
  ShieldCheck, 
  Crown, 
  Users, 
  Sparkles, 
  X, 
  Download 
} from "lucide-react";

// Web Audio API Synthesizer for high-tech check-in chime
function playSuccessChime() {
  try {
    const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const now = audioCtx.currentTime;

    const osc1 = audioCtx.createOscillator();
    const osc2 = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    osc1.type = "sine";
    osc2.type = "triangle";

    // Play pleasant high chime chord (E5, G#5, B5)
    osc1.frequency.setValueAtTime(659.25, now);
    osc1.frequency.exponentialRampToValueAtTime(1046.5, now + 0.15); // Ramp to C6
    osc2.frequency.setValueAtTime(830.61, now);
    osc2.frequency.exponentialRampToValueAtTime(1318.51, now + 0.15); // Ramp to E6

    gainNode.gain.setValueAtTime(0.3, now);
    gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.7);

    osc1.connect(gainNode);
    osc2.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + 0.7);
    osc2.stop(now + 0.7);
  } catch (err) {
    console.error("Audio chime error:", err);
  }
}

export default function CheckinPage() {
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [showBadgeModal, setShowBadgeModal] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [manualCode, setManualCode] = useState("");
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Delegation seats presence status
  const [delegation, setDelegation] = useState([
    { seat: 1, name: "Dra. Hj. Sulastri Hadiningrat, M.Si.", role: "Gubernur Jawa Timur", present: true },
    { seat: 2, name: "Siti Rahmawati, S.STP.", role: "Protokol Utama", present: true },
    { seat: 3, name: "Ajudan Gubernur (Bpk. Bambang, S.H.)", role: "Pengawal Pribadi VVIP", present: true },
    { seat: 4, name: "ADC Gubernur (Ibu Indah P., S.I.Kom.)", role: "Staf Pendamping", present: true },
  ]);

  const triggerCheckinSuccess = () => {
    setIsCheckedIn(true);
    if (soundEnabled) {
      playSuccessChime();
    }
    // Confetti celebration
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#d8a21a", "#f59e0b", "#10b981", "#ffffff"],
    });
  };

  const handleScanGubernur = () => {
    triggerCheckinSuccess();
  };

  const handleManualSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!manualCode.trim()) return;
    triggerCheckinSuccess();
    setShowSearchModal(false);
  };

  const toggleSeat = (seatNum: number) => {
    setDelegation((prev) =>
      prev.map((d) => (d.seat === seatNum ? { ...d, present: !d.present } : d))
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#071518] text-[#eef2ee]">
      
      {/* Top Kiosk Bar */}
      <header className="border-b border-[#d8a21a]/20 bg-[#071518]/90 backdrop-blur-xl px-4 sm:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          <div className="flex items-center gap-3">
            <Link 
              href="/"
              className="p-2 rounded-xl bg-teal-950/60 hover:bg-teal-900 border border-white/10 text-slate-300 hover:text-white transition-all flex items-center gap-1.5 text-xs font-semibold"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Halaman Undangan</span>
            </Link>

            <div className="flex items-center gap-2.5">
              <span className="font-serif-gold text-lg font-bold text-amber-300">JP</span>
              <div>
                <h1 className="text-sm sm:text-base font-bold text-white leading-tight">
                  Terminal Kiosk Registrasi Mandiri
                </h1>
                <p className="text-[11px] text-slate-400">
                  Lobi Utama Grand Ballroom Hotel Surabaya · JawaPos Awards 2026
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              title={soundEnabled ? "Nonaktifkan Nada Suara" : "Aktifkan Nada Suara"}
              className="p-2 rounded-xl bg-teal-950/60 border border-white/10 text-slate-300 hover:text-amber-400 transition-all text-xs flex items-center gap-1.5"
            >
              {soundEnabled ? <Volume2 className="w-4 h-4 text-emerald-400" /> : <VolumeX className="w-4 h-4 text-slate-500" />}
              <span className="hidden md:inline">{soundEnabled ? "Audio Aktif" : "Mute"}</span>
            </button>

            <button
              onClick={() => setShowSearchModal(true)}
              className="px-3.5 py-2 rounded-xl bg-amber-400/15 hover:bg-amber-400/25 border border-amber-400/40 text-amber-300 font-semibold text-xs flex items-center gap-1.5 transition-all"
            >
              <Search className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Cari Manual</span>
            </button>
          </div>

        </div>
      </header>

      {/* Main Kiosk Layout (2 Columns) */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* LEFT COLUMN: Camera Scanner Terminal (5 cols) */}
        <section className="lg:col-span-5 rounded-2xl border border-[#d8a21a]/25 bg-[#0b2126]/60 backdrop-blur-xl p-6 shadow-2xl flex flex-col justify-between space-y-6">
          
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest flex items-center gap-1.5">
                <Camera className="w-4 h-4" />
                Optical Scanner Sensor
              </span>
              <span className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Kamera Aktif
              </span>
            </div>

            {/* Simulated Camera Viewfinder */}
            <div className="relative mt-4 w-full aspect-square rounded-xl bg-black/60 border-2 border-dashed border-[#d8a21a]/40 flex items-center justify-center overflow-hidden">
              
              {/* Laser scan line animation */}
              <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent animate-laser z-20 pointer-events-none" />

              {/* Viewfinder crosshairs */}
              <div className="absolute inset-8 border border-amber-400/30 rounded-lg pointer-events-none flex flex-col justify-between p-2">
                <div className="flex justify-between">
                  <div className="w-4 h-4 border-t-2 border-l-2 border-amber-400"></div>
                  <div className="w-4 h-4 border-t-2 border-r-2 border-amber-400"></div>
                </div>
                <div className="flex justify-between">
                  <div className="w-4 h-4 border-b-2 border-l-2 border-amber-400"></div>
                  <div className="w-4 h-4 border-b-2 border-r-2 border-amber-400"></div>
                </div>
              </div>

              {/* Scanner prompt / Target icon */}
              <div className="text-center p-6 space-y-3 z-10">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
                  <QrCode className="w-8 h-8" />
                </div>
                <div>
                  <strong className="text-xs sm:text-sm font-bold text-white block">
                    Arahkan Kode QR Undangan ke Kamera
                  </strong>
                  <span className="text-[11px] text-slate-400 mt-1 block">
                    Sistem akan memvalidasi data meja dan delegasi secara otomatis
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Quick Simulation Trigger Buttons */}
          <div className="space-y-2.5">
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
              Simulasi Pindai Tamu Undangan
            </span>
            <button
              onClick={handleScanGubernur}
              className="w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-[#d8a21a] via-amber-400 to-amber-600 text-teal-950 hover:brightness-110 shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
            >
              <Crown className="w-4 h-4" />
              <span>Simulasi Scan QR Ibu Gubernur (Meja 1)</span>
            </button>
            <p className="text-[11px] text-center text-slate-400">
              Kode Akses Uji Coba: <code className="text-amber-300 font-mono">JP26-GUB-001</code>
            </p>
          </div>

        </section>

        {/* RIGHT COLUMN: Verification Dashboard & Badge Printing (7 cols) */}
        <section className="lg:col-span-7 rounded-2xl border border-[#d8a21a]/25 bg-[#0b2126]/60 backdrop-blur-xl p-6 sm:p-8 shadow-2xl space-y-6">
          
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
                Status Verifikasi Kehadiran
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-serif-gold tracking-tight mt-0.5">
                {isCheckedIn ? "Tamu Berhasil Terverifikasi" : "Menunggu Pemindaian QR"}
              </h2>
            </div>

            {isCheckedIn && (
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center gap-1.5 animate-pulse">
                <CheckCircle2 className="w-4 h-4" />
                VERIFIED (MEJA 1)
              </span>
            )}
          </div>

          {/* If verified, show VIP Guest Card */}
          {isCheckedIn ? (
            <div className="space-y-6 animate-fadeIn">
              
              {/* Highlight verified banner */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-teal-900/60 to-[#0f2a2e] border border-[#d8a21a]/40 shadow-xl space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 block">
                      Tamu Kehormatan VVIP
                    </span>
                    <h3 className="text-xl font-bold text-white font-serif-gold mt-0.5">
                      Dra. Hj. Sulastri Hadiningrat, M.Si.
                    </h3>
                    <p className="text-xs text-amber-300/90 font-medium">
                      Gubernur Jawa Timur · Pemerintah Provinsi Jawa Timur
                    </p>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="text-[10px] text-slate-400 block uppercase">Penempatan Meja</span>
                    <span className="text-2xl font-extrabold text-amber-300 font-serif-gold block">
                      MEJA 1
                    </span>
                    <span className="text-[10px] text-emerald-400 font-semibold">Sayap Kiri Depan</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                  <span>Kode Registrasi: <strong className="font-mono text-amber-300">JP26-GUB-001</strong></span>
                  <span>Waktu Check-in: <strong>{new Date().toLocaleTimeString("id-ID")} WIB</strong></span>
                </div>
              </div>

              {/* Roster of 4 delegation escorts with presence toggles */}
              <div>
                <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/5">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-amber-400" />
                    Konfirmasi Kehadiran Fisik Delegasi (Klik untuk Toggle):
                  </span>
                  <span className="text-xs font-bold text-emerald-400">
                    {delegation.filter((d) => d.present).length} dari 4 Hadir
                  </span>
                </div>

                <div className="space-y-2">
                  {delegation.map((person) => (
                    <div
                      key={person.seat}
                      onClick={() => toggleSeat(person.seat)}
                      className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                        person.present
                          ? "bg-teal-950/70 border-emerald-500/40 shadow-sm"
                          : "bg-black/30 border-white/5 opacity-50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-6 h-6 rounded-md flex items-center justify-center font-bold text-xs ${
                          person.present ? "bg-emerald-500 text-teal-950" : "bg-slate-700 text-slate-400"
                        }`}>
                          {person.seat}
                        </div>
                        <div>
                          <strong className="text-xs font-semibold text-white block">
                            {person.name}
                          </strong>
                          <span className="text-[11px] text-slate-400 block">{person.role}</span>
                        </div>
                      </div>

                      <span className={`text-[11px] font-bold px-2 py-0.5 rounded ${
                        person.present ? "bg-emerald-500/20 text-emerald-300" : "bg-slate-800 text-slate-400"
                      }`}>
                        {person.present ? "Hadir di Tempat" : "Belum Hadir"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action row: Print Badge & Reset */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setShowBadgeModal(true)}
                  className="flex-1 py-3 px-4 rounded-xl bg-[#d8a21a] hover:bg-amber-400 text-teal-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all active:scale-[0.98]"
                >
                  <Printer className="w-4 h-4" />
                  <span>Cetak Badge Lanyard VIP</span>
                </button>

                <button
                  onClick={() => setIsCheckedIn(false)}
                  className="py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 text-xs sm:text-sm font-semibold transition-all"
                >
                  Pindai Tamu Lain
                </button>
              </div>

            </div>
          ) : (
            /* Placeholder state before scanning */
            <div className="py-16 text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-teal-950/60 border border-white/10 flex items-center justify-center text-slate-500">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div className="max-w-sm mx-auto">
                <strong className="text-sm font-bold text-slate-200 block">
                  Belum Ada Data Terverifikasi
                </strong>
                <p className="text-xs text-slate-400 mt-1">
                  Gunakan tombol &quot;Simulasi Scan QR Ibu Gubernur&quot; pada panel kiri atau cari manual menggunakan nama instansi.
                </p>
              </div>
            </div>
          )}

        </section>

      </main>

      {/* PRINT PHYSICAL BADGE MODAL */}
      {showBadgeModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
          onClick={() => setShowBadgeModal(false)}
        >
          <div 
            className="relative w-full max-w-sm rounded-2xl bg-[#07191c] border-2 border-[#d8a21a] p-6 shadow-2xl space-y-5 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setShowBadgeModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Badge Preview (Lanyard Style) */}
            <div className="p-6 rounded-xl bg-gradient-to-b from-[#0f2a2e] to-[#071518] border border-amber-400/40 shadow-inner space-y-4">
              
              <div className="w-12 h-1.5 mx-auto rounded-full bg-amber-400/60 mb-2"></div>

              <div className="space-y-1">
                <span className="text-[10px] uppercase font-bold tracking-widest text-amber-400">
                  JAWAPOS AWARDS 2026
                </span>
                <span className="text-xs font-serif-gold font-bold text-slate-300 block">
                  Grand Ballroom Hotel Surabaya
                </span>
              </div>

              <div className="py-3 border-y border-white/10">
                <span className="w-fit mx-auto px-3 py-1 rounded-full text-xs font-bold bg-amber-400 text-teal-950 block">
                  VVIP PASS · MEJA 1
                </span>
                <h4 className="text-base font-bold text-white font-serif-gold mt-2">
                  Dra. Hj. Sulastri Hadiningrat
                </h4>
                <p className="text-[11px] text-amber-300">Gubernur Jawa Timur</p>
              </div>

              {/* Barcode graphic */}
              <div className="pt-2">
                <div className="w-full h-10 bg-white rounded p-1 flex items-center justify-center">
                  <div className="font-mono text-black font-extrabold text-xs tracking-widest">
                    ||||| | |||| ||| ||||| || |
                  </div>
                </div>
                <span className="text-[10px] font-mono text-slate-400 mt-1 block">JP26-GUB-001</span>
              </div>
            </div>

            <div className="space-y-2">
              <button 
                onClick={() => {
                  window.print();
                }}
                className="w-full py-2.5 rounded-xl bg-[#d8a21a] hover:bg-amber-400 text-teal-950 font-bold text-xs flex items-center justify-center gap-1.5"
              >
                <Printer className="w-4 h-4" />
                <span>Kirim Perintah Cetak (Thermal / Lanyard)</span>
              </button>
              <button 
                onClick={() => setShowBadgeModal(false)}
                className="w-full py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs"
              >
                Tutup Pratinjau
              </button>
            </div>

          </div>
        </div>
      )}

      {/* MANUAL SEARCH MODAL */}
      {showSearchModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
          onClick={() => setShowSearchModal(false)}
        >
          <div 
            className="relative w-full max-w-md rounded-2xl bg-[#0b2126] border border-[#d8a21a]/40 p-6 shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Search className="w-4 h-4 text-amber-400" />
                Cari Data Tamu / Nomor Meja
              </h3>
              <button 
                onClick={() => setShowSearchModal(false)}
                className="text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleManualSearch} className="space-y-4">
              <div>
                <label className="text-xs text-slate-300 font-semibold block mb-1.5">
                  Masukkan Nama Pejabat / Instansi / Kode Tiket
                </label>
                <input
                  type="text"
                  value={manualCode}
                  onChange={(e) => setManualCode(e.target.value)}
                  placeholder="Ketik 'Sulastri', 'Gubernur', atau 'JP26-GUB-001'..."
                  className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-black/40 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  autoFocus
                />
              </div>

              <div className="flex gap-2">
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl bg-[#d8a21a] hover:bg-amber-400 text-teal-950 font-bold text-xs"
                >
                  Verifikasi Data Tamu
                </button>
                <button
                  type="button"
                  onClick={() => setShowSearchModal(false)}
                  className="py-2.5 px-4 rounded-xl bg-white/5 text-slate-300 text-xs"
                >
                  Batal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
