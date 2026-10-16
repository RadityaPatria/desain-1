"use client";

import React, { useState, useMemo } from "react";
import { TableItem, TABLES_DATA } from "../data/tablesData";
import { Search, ZoomIn, ZoomOut, RotateCcw, Target, Crown, Users, Sparkles, Info } from "lucide-react";

interface BallroomRadarProps {
  selectedTable: TableItem | null;
  onSelectTable: (table: TableItem) => void;
}

export default function BallroomRadar({ selectedTable, onSelectTable }: BallroomRadarProps) {
  const [filterCategory, setFilterCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [hoveredTable, setHoveredTable] = useState<TableItem | null>(null);

  // Filtered tables based on search and category
  const filteredTableIds = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return new Set(
      TABLES_DATA.filter((t) => {
        const matchesCategory = filterCategory === "all" || t.category === filterCategory;
        if (!matchesCategory) return false;
        if (!q) return true;
        const matchesName = t.name.toLowerCase().includes(q);
        const matchesTier = t.tier.toLowerCase().includes(q);
        const matchesInst = t.institution.toLowerCase().includes(q);
        const matchesGuest = t.guests.some((g) => g.name.toLowerCase().includes(q) || g.role.toLowerCase().includes(q));
        return matchesName || matchesTier || matchesInst || matchesGuest;
      }).map((t) => t.id)
    );
  }, [filterCategory, searchQuery]);

  const handleZoom = (delta: number) => {
    setZoomLevel((prev) => Math.min(Math.max(0.7, prev + delta), 1.8));
  };

  const handleReset = () => {
    setZoomLevel(1);
    setSearchQuery("");
    setFilterCategory("all");
  };

  const handleFocusMeja1 = () => {
    const meja1 = TABLES_DATA.find((t) => t.id === 1);
    if (meja1) {
      onSelectTable(meja1);
      setZoomLevel(1.25);
    }
  };

  return (
    <div className="relative flex flex-col rounded-2xl border border-[#d8a21a]/25 bg-[#0b2126]/60 backdrop-blur-xl shadow-2xl overflow-hidden">
      
      {/* Top Controller Bar */}
      <div className="p-4 sm:p-5 border-b border-[#d8a21a]/15 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3.5 bg-[#071518]/70">
        
        {/* Left: Category Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
          {[
            { id: "all", label: "Semua Meja (40)" },
            { id: "vvip", label: "VVIP Presidium (6)" },
            { id: "pemda", label: "Pemerintah Daerah (18)" },
            { id: "bumn", label: "BUMN & Korporasi (12)" },
            { id: "media", label: "Media & Pers (4)" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilterCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                filterCategory === cat.id
                  ? "bg-gradient-to-r from-[#d8a21a] to-amber-500 text-teal-950 font-bold shadow-md shadow-amber-500/20"
                  : "bg-teal-950/40 text-slate-300 hover:text-white hover:bg-teal-900/50 border border-white/5"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Right: Search & Zoom cluster */}
        <div className="flex items-center gap-2">
          {/* Search Box */}
          <div className="relative flex-1 sm:w-64">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari nama pejabat, meja..."
              className="w-full pl-8 pr-3 py-1.5 rounded-lg text-xs bg-black/40 border border-[#d8a21a]/20 text-white placeholder-slate-400 focus:outline-none focus:border-[#d8a21a] focus:ring-1 focus:ring-[#d8a21a] transition-all"
            />
          </div>

          {/* Zoom Buttons */}
          <div className="flex items-center gap-1 bg-black/40 p-1 rounded-lg border border-white/10">
            <button
              onClick={() => handleZoom(0.15)}
              title="Perbesar Denah"
              className="p-1.5 rounded text-slate-300 hover:text-amber-400 hover:bg-white/5 transition-all"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => handleZoom(-0.15)}
              title="Perkecil Denah"
              className="p-1.5 rounded text-slate-300 hover:text-amber-400 hover:bg-white/5 transition-all"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={handleReset}
              title="Reset Tampilan"
              className="p-1.5 rounded text-slate-300 hover:text-amber-400 hover:bg-white/5 transition-all"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={handleFocusMeja1}
              title="Fokus Meja 1 (Ibu Gubernur)"
              className="px-2 py-1 rounded bg-[#d8a21a]/20 hover:bg-[#d8a21a]/30 text-amber-300 text-[11px] font-semibold flex items-center gap-1 transition-all"
            >
              <Target className="w-3 h-3 text-amber-400" />
              <span>Meja 1</span>
            </button>
          </div>
        </div>

      </div>

      {/* SVG Canvas Container */}
      <div className="relative w-full overflow-auto bg-[#051114]/90 p-3 sm:p-6 flex items-center justify-center min-h-[560px]">
        
        {/* Subtle grid pattern background */}
        <div 
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#d8a21a 1px, transparent 1px)",
            backgroundSize: "28px 28px"
          }}
        />

        {/* Hover Floating Tooltip */}
        {hoveredTable && (
          <div 
            className="absolute z-30 pointer-events-none px-3.5 py-2.5 rounded-xl bg-[#071518]/95 border border-[#d8a21a]/50 text-white shadow-2xl backdrop-blur-md transition-all text-xs"
            style={{
              top: 24,
              left: "50%",
              transform: "translateX(-50%)"
            }}
          >
            <div className="flex items-center gap-2 font-bold text-amber-300">
              {hoveredTable.id === 1 && <Crown className="w-3.5 h-3.5 text-amber-400" />}
              <span>{hoveredTable.name} — {hoveredTable.tier}</span>
            </div>
            <p className="text-[11px] text-slate-300 mt-0.5">{hoveredTable.institution}</p>
            <div className="flex items-center gap-2 mt-1.5 text-[10px] text-slate-400">
              <span className="text-emerald-400 font-semibold">{hoveredTable.status}</span>
              <span>•</span>
              <span>Klik untuk inspeksi 8 kursi &rarr;</span>
            </div>
          </div>
        )}

        {/* SVG Ballroom Layout */}
        <div 
          className="transition-transform duration-300 ease-out origin-top"
          style={{ transform: `scale(${zoomLevel})` }}
        >
          <svg
            viewBox="0 0 1024 820"
            className="w-[980px] h-[780px] select-none"
            aria-label="Denah Ballroom 40 Meja JawaPos Awards 2026"
          >
            <defs>
              {/* Gold gradient for Table 1 */}
              <linearGradient id="goldMejaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fffbeb" />
                <stop offset="40%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#b45309" />
              </linearGradient>

              {/* Stage Gradient */}
              <linearGradient id="stageGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0f2a2e" />
                <stop offset="100%" stopColor="#071518" />
              </linearGradient>

              {/* Catwalk Gradient */}
              <linearGradient id="catwalkGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#b98a22" />
                <stop offset="100%" stopColor="#d8a21a" />
              </linearGradient>

              {/* Glow filter */}
              <filter id="vipGlow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* ============================================================== */}
            {/* PANGGUNG UTAMA & CATWALK RUNWAY (NO METER TECHNICAL ANNOTATION) */}
            {/* ============================================================== */}
            <g id="stage-group" transform="translate(0, 0)">
              {/* Curved Giant LED Screen Backdrop */}
              <path
                d="M 230 -15 Q 512 -38 794 -15"
                fill="none"
                stroke="url(#goldMejaGrad)"
                strokeWidth="5"
                strokeLinecap="round"
                opacity="0.9"
              />
              <path
                d="M 230 -15 Q 512 -38 794 -15"
                fill="none"
                stroke="#38bdf8"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                opacity="0.6"
              />

              {/* Main Stage Podium */}
              <rect
                x="262"
                y="-10"
                width="500"
                height="46"
                rx="6"
                fill="url(#stageGrad)"
                stroke="#d8a21a"
                strokeWidth="1.8"
              />
              <text
                x="512"
                y="18"
                textAnchor="middle"
                fill="#fde047"
                fontSize="13"
                fontWeight="700"
                letterSpacing="3"
              >
                PANGGUNG UTAMA PENGANUGERAHAN
              </text>

              {/* Catwalk Runway (Central Aisle Extension) */}
              <rect
                x="462"
                y="36"
                width="100"
                height="65"
                rx="3"
                fill="url(#catwalkGrad)"
                stroke="#ffffff"
                strokeWidth="1.2"
              />
              <text
                x="512"
                y="75"
                textAnchor="middle"
                fill="#071518"
                fontSize="10"
                fontWeight="800"
                letterSpacing="1"
              >
                CATWALK
              </text>

              {/* Central Aisle / Red Carpet Lane Indicator */}
              <line
                x1="512"
                y1="102"
                x2="512"
                y2="760"
                stroke="#d8a21a"
                strokeWidth="2"
                strokeDasharray="6 6"
                opacity="0.35"
              />
              <text
                x="512"
                y="780"
                textAnchor="middle"
                fill="#94a3b8"
                fontSize="9"
                fontWeight="600"
                letterSpacing="2"
              >
                LORONG UTAMA RED CARPET
              </text>
            </g>

            {/* Wing Boundary Labels */}
            <text x="180" y="30" fill="#94a3b8" fontSize="10" fontWeight="700" letterSpacing="1.5" opacity="0.6">
              SAYAP KIRI (20 MEJA)
            </text>
            <text x="840" y="30" fill="#94a3b8" fontSize="10" fontWeight="700" letterSpacing="1.5" textAnchor="end" opacity="0.6">
              SAYAP KANAN (20 MEJA)
            </text>

            {/* ============================================================== */}
            {/* 40 ROUND TABLES WITH EXACTLY 8 CHAIRS PER TABLE                 */}
            {/* ============================================================== */}
            <g id="tables-group">
              {TABLES_DATA.map((t) => {
                const isSelected = selectedTable?.id === t.id;
                const isHovered = hoveredTable?.id === t.id;
                const isMatch = filteredTableIds.has(t.id);
                const isUserMeja1 = t.id === 1;

                // 8 Chairs positioned around the table (radius 34px, angle 45 deg step)
                const chairs = [0, 45, 90, 135, 180, 225, 270, 315].map((angle, idx) => {
                  const rad = (angle * Math.PI) / 180;
                  const cx = t.x + 34 * Math.cos(rad);
                  const cy = t.y + 34 * Math.sin(rad);
                  return { cx, cy, idx };
                });

                return (
                  <g
                    key={t.id}
                    className="cursor-pointer transition-opacity duration-200"
                    opacity={isMatch ? 1 : 0.25}
                    onClick={() => onSelectTable(t)}
                    onMouseEnter={() => setHoveredTable(t)}
                    onMouseLeave={() => setHoveredTable(null)}
                  >
                    {/* Pulsing ring for Meja 1 (Ibu Gubernur) */}
                    {isUserMeja1 && (
                      <circle
                        cx={t.x}
                        cy={t.y}
                        r="44"
                        fill="none"
                        stroke="#f59e0b"
                        strokeWidth="2"
                        className="animate-pulse-gold"
                      />
                    )}

                    {/* Selected Table Ring */}
                    {isSelected && (
                      <circle
                        cx={t.x}
                        cy={t.y}
                        r="41"
                        fill="none"
                        stroke="#38bdf8"
                        strokeWidth="2.5"
                        strokeDasharray="4 2"
                      />
                    )}

                    {/* 8 Chairs */}
                    {chairs.map((chair) => (
                      <circle
                        key={chair.idx}
                        cx={chair.cx}
                        cy={chair.cy}
                        r="3.4"
                        fill={
                          isUserMeja1
                            ? "#fbbf24"
                            : isSelected
                            ? "#38bdf8"
                            : isHovered
                            ? "#ffffff"
                            : "#64748b"
                        }
                        stroke={isUserMeja1 ? "#b45309" : "#0f2a2e"}
                        strokeWidth="0.8"
                      />
                    ))}

                    {/* Table Center Circle */}
                    <circle
                      cx={t.x}
                      cy={t.y}
                      r="25"
                      fill={
                        isUserMeja1
                          ? "url(#goldMejaGrad)"
                          : isSelected
                          ? "#0284c7"
                          : isHovered
                          ? "#134e4a"
                          : t.category === "vvip"
                          ? "#0f363d"
                          : "#0b2126"
                      }
                      stroke={
                        isUserMeja1
                          ? "#ffffff"
                          : isSelected
                          ? "#38bdf8"
                          : isHovered
                          ? "#d8a21a"
                          : t.category === "vvip"
                          ? "#d8a21a"
                          : "rgba(216, 162, 26, 0.4)"
                      }
                      strokeWidth={isUserMeja1 ? "2.5" : isSelected ? "2" : "1.2"}
                      filter={isUserMeja1 ? "url(#vipGlow)" : undefined}
                    />

                    {/* Table Number Text */}
                    <text
                      x={t.x}
                      y={t.y + 4.5}
                      textAnchor="middle"
                      fill={isUserMeja1 ? "#071518" : isSelected ? "#ffffff" : "#f1f5f9"}
                      fontSize={isUserMeja1 ? "12" : "10"}
                      fontWeight="800"
                    >
                      {t.id}
                    </text>

                    {/* Meja 1 VIP Crown Indicator */}
                    {isUserMeja1 && (
                      <text
                        x={t.x}
                        y={t.y - 10}
                        textAnchor="middle"
                        fill="#071518"
                        fontSize="9"
                        fontWeight="900"
                      >
                        👑
                      </text>
                    )}
                  </g>
                );
              })}
            </g>

          </svg>
        </div>

      </div>

      {/* Bottom Status bar */}
      <div className="p-3.5 px-5 border-t border-[#d8a21a]/15 bg-[#071518]/90 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 border border-white"></span>
            <span>Meja 1 (Ibu Gubernur)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0f363d] border border-amber-400"></span>
            <span>VVIP Presidium</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0b2126] border border-amber-400/40"></span>
            <span>Meja Perjamuan (8 Kursi)</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-slate-400">
          <Info className="w-3.5 h-3.5 text-amber-400" />
          <span>Klik salah satu meja untuk memeriksa rincian susunan 8 kursi &amp; tamu kehormatan</span>
        </div>
      </div>

    </div>
  );
}
