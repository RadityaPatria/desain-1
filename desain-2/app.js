/**
 * JAWAPOS AWARDS 2026 — DESAIN 2 ENGINE (PURE HTML/CSS/JS)
 * Features:
 * - 40 Round Tables · Strictly 8 Chairs per Table (CAD Blueprint Layout)
 * - Mobile-First Responsive SVG (Dynamic ViewBox: All / Left Wing / Right Wing)
 * - Zero Horizontal Scrolling on Mobile Devices
 * - Interactive Bottom Sheet Drawer (Native Mobile Feel)
 * - Real-time Search & Highlighting
 */

// 40 Tables Full Database
const BALLROOM_DATABASE = {
  1: {
    id: 1,
    name: "Meja 1",
    tier: "VVIP FRONT ROW (PRESIDIUM)",
    wing: "left",
    x: 180,
    y: 80,
    institution: "Pemerintah Provinsi Jawa Timur",
    status: "8 dari 8 Kursi Terisi",
    isUserTable: true,
    note: "Posisi terdepan paling terhormat, menghadap langsung panggung utama dan catwalk persembahan.",
    guests: [
      { seat: 1, name: "Dra. Hj. Sulastri Hadiningrat, M.Si.", role: "Gubernur Jawa Timur (Tamu Utama)", confirmed: true, dietary: "Bebas Gluten / Diet Formal" },
      { seat: 2, name: "Siti Rahmawati, S.STP.", role: "Protokol Utama Gubernur Jatim", confirmed: true, dietary: "Standard Gala" },
      { seat: 3, name: "Ajudan Gubernur (Bpk. Bambang, S.H.)", role: "Pengawal Pribadi VVIP", confirmed: true, dietary: "Standard Gala" },
      { seat: 4, name: "ADC Gubernur (Ibu Indah P., S.I.Kom.)", role: "Staf Pendamping Protokoler", confirmed: true, dietary: "Standard Gala" },
      { seat: 5, name: "Mayor Jenderal TNI Rafael G.", role: "Pangdam V/Brawijaya", confirmed: true, dietary: "Standard Gala" },
      { seat: 6, name: "Irjen Pol. Dr. H. Siswanto, M.H.", role: "Kapolda Jawa Timur", confirmed: true, dietary: "Standard Gala" },
      { seat: 7, name: "Dr. Mia Amiati, S.H., M.H.", role: "Kajati Jawa Timur", confirmed: true, dietary: "Standard Gala" },
      { seat: 8, name: "Kusnadi, S.H., M.Hum.", role: "Ketua DPRD Provinsi Jatim", confirmed: true, dietary: "Standard Gala" }
    ]
  },
  2: {
    id: 2,
    name: "Meja 2",
    tier: "VVIP FORKOPIMDA PROVINSI",
    wing: "right",
    x: 620,
    y: 80,
    institution: "Sekretariat Daerah Provinsi Jawa Timur",
    status: "8 dari 8 Kursi Terisi",
    isUserTable: false,
    note: "Sekretaris Daerah Provinsi Jatim, Kasdam V/Brawijaya & Wakapolda Jatim.",
    guests: [
      { seat: 1, name: "Adhy Karyono, A.Ks., M.A.P.", role: "Sekda Provinsi Jatim", confirmed: true },
      { seat: 2, name: "Dr. Akhmad Jazuli, M.Si.", role: "Asisten Administrasi Umum", confirmed: true },
      { seat: 3, name: "Ir. Joko Irianto, M.Si.", role: "Asisten Perekonomian & Pembangunan", confirmed: true },
      { seat: 4, name: "Brigjen TNI Fahmi Sudirman", role: "Kasdam V/Brawijaya", confirmed: true },
      { seat: 5, name: "Brigjen Pol. Akhmad Yusep Gunawan", role: "Wakapolda Jawa Timur", confirmed: true },
      { seat: 6, name: "Jehezkiel Devy Sudarso, S.H.", role: "Wakajati Jawa Timur", confirmed: true },
      { seat: 7, name: "Anik Maslachah, M.Si.", role: "Wakil Ketua DPRD Jatim", confirmed: true },
      { seat: 8, name: "Sahat Tua Simandjuntak", role: "Tokoh Parlemen Jatim", confirmed: true }
    ]
  },
  3: {
    id: 3,
    name: "Meja 3",
    tier: "VVIP UTAMA FORKOPIMDA",
    wing: "left",
    x: 290,
    y: 80,
    institution: "Koarmada II & Polda Jatim",
    status: "8 dari 8 Kursi Terisi",
    isUserTable: false,
    guests: [
      { seat: 1, name: "Laksamana Pertama TNI Bambang S.", role: "Danguspurla Koarmada II", confirmed: true },
      { seat: 2, name: "Kolonel Laut (P) Hendra K.", role: "Asops Pangkoarmada II", confirmed: true },
      { seat: 3, name: "Marsma TNI Fairlyanto, S.T.", role: "Danlanud Iswahjudi", confirmed: true },
      { seat: 4, name: "Kombes Pol. Pasma Royce", role: "Kapolrestabes Surabaya", confirmed: true },
      { seat: 5, name: "Dr. K.H. Marzuki Mustamar", role: "Tokoh Ulama Jatim", confirmed: true },
      { seat: 6, name: "Uskup Surabaya Mgr. Vincentius", role: "Tokoh Lintas Agama", confirmed: true },
      { seat: 7, name: "Drs. Benny Sampirwanto, M.Si.", role: "Asisten I Sekdaprov Jatim", confirmed: true },
      { seat: 8, name: "Dra. Restu Novi Widiani, M.M.", role: "Kadis Sosial Provinsi Jatim", confirmed: true }
    ]
  },
  4: {
    id: 4,
    name: "Meja 4",
    tier: "VVIP DEWAN KEHORMATAN",
    wing: "right",
    x: 730,
    y: 80,
    institution: "Yayasan Perintis Jawa Pos",
    status: "8 dari 8 Kursi Terisi",
    isUserTable: false,
    guests: [
      { seat: 1, name: "Dahlan Iskan", role: "Senior Advisor / Mantan CEO Jawa Pos", confirmed: true },
      { seat: 2, name: "Nafsiah Dahlan Iskan", role: "Tamu Kehormatan", confirmed: true },
      { seat: 3, name: "Azrul Ananda", role: "Presiden Persebaya & DBL Indonesia", confirmed: true },
      { seat: 4, name: "Ivo Ananda", role: "Direktur Komunikasi DBL", confirmed: true },
      { seat: 5, name: "H. Suhendro Boroma", role: "Komisaris Jawa Pos Group", confirmed: true },
      { seat: 6, name: "Zuhro Latifah", role: "Direktur Keuangan Jawa Pos", confirmed: true },
      { seat: 7, name: "Suparno Wonokromo", role: "Direktur Produksi Grafika", confirmed: true },
      { seat: 8, name: "Nurwahid", role: "Ketua SPS Jawa Timur", confirmed: true }
    ]
  },
  5: {
    id: 5,
    name: "Meja 5",
    tier: "VVIP DIREKSI JAWA POS",
    wing: "left",
    x: 400,
    y: 80,
    institution: "PT Jawa Pos Koran & Percetakan",
    status: "8 dari 8 Kursi Terisi",
    isUserTable: false,
    guests: [
      { seat: 1, name: "Ir. H. Leak Kustiyo", role: "Direktur Utama Jawa Pos", confirmed: true },
      { seat: 2, name: "Cipto Rusbandi", role: "Pemimpin Redaksi Jawa Pos", confirmed: true },
      { seat: 3, name: "Dhimam Abror Djabbar", role: "Dewan Redaksi Senior", confirmed: true },
      { seat: 4, name: "Eko Dimas Prasetyo", role: "Direktur Bisnis Digital", confirmed: true },
      { seat: 5, name: "Retno Palupi", role: "Head of Corporate Communication", confirmed: true },
      { seat: 6, name: "Taufik Hidayat", role: "GM Advertising & Event", confirmed: true },
      { seat: 7, name: "Drs. Hendro Basuki", role: "Dewan Kehormatan PWI Jatim", confirmed: true },
      { seat: 8, name: "Lutfil Hakim", role: "Ketua PWI Jawa Timur", confirmed: true }
    ]
  },
  6: {
    id: 6,
    name: "Meja 6",
    tier: "DEWAN JURI INDEPENDEN",
    wing: "right",
    x: 840,
    y: 80,
    institution: "Dewan Pakar JawaPos Awards",
    status: "8 dari 8 Kursi Terisi",
    isUserTable: false,
    guests: [
      { seat: 1, name: "Prof. Dr. Mahfud MD", role: "Ketua Dewan Kehormatan Juri", confirmed: true },
      { seat: 2, name: "Prof. Dr. Komaruddin Hidayat", role: "Panel Dewan Pakar", confirmed: true },
      { seat: 3, name: "Dr. Errol Jonathans", role: "Pakar Komunikasi Publik", confirmed: true },
      { seat: 4, name: "Dr. Zainuddin Maliki", role: "Dewan Juri Otonomi", confirmed: true },
      { seat: 5, name: "Prof. Dr. Siti Zuhro, M.A.", role: "Peneliti Senior BRIN Otonomi", confirmed: true },
      { seat: 6, name: "Prof. Dr. Hotman Siahaan", role: "Sosiolog Senior Jatim", confirmed: true },
      { seat: 7, name: "Emil Elestianto Dardak, Ph.D.", role: "Pakar Planologi & Pembangunan", confirmed: true },
      { seat: 8, name: "Arumi Bachsin, S.E.", role: "Ketua Dekranasda Jatim", confirmed: true }
    ]
  }
};

// Fill in remaining tables 7 to 40 with 8 chairs each
const POS_MAP = {
  // Left Wing (3, 4, 3, 4, 3, 3)
  7: { x: 125, y: 200, wing: 'left', name: "Wali Kota Surabaya & Pimpinan Daerah" },
  9: { x: 235, y: 200, wing: 'left', name: "Bank Jatim & BUMN Perbankan" },
  11: { x: 345, y: 200, wing: 'left', name: "Petrokimia Gresik & Industri Energi" },
  13: { x: 455, y: 200, wing: 'left', name: "Dewan Rektor PTN (ITS & Unair)" },
  15: { x: 180, y: 320, wing: 'left', name: "Pemkab Gresik & Pemkab Sidoarjo" },
  17: { x: 290, y: 320, wing: 'left', name: "Pelindo Regional 3 & Maritim" },
  19: { x: 400, y: 320, wing: 'left', name: "JTV Surabaya & Aliansi Media" },
  21: { x: 125, y: 440, wing: 'left', name: "Kepala Daerah Wilayah Mataraman" },
  23: { x: 235, y: 440, wing: 'left', name: "Ciputra & Pakuwon Real Estate" },
  25: { x: 345, y: 440, wing: 'left', name: "Dinas Penanaman Modal & OPD Jatim" },
  27: { x: 455, y: 440, wing: 'left', name: "Telkomsel & Ekosistem Digital" },
  29: { x: 180, y: 560, wing: 'left', name: "Pemerintah Tuban, Lamongan, Bojonegoro" },
  31: { x: 290, y: 560, wing: 'left', name: "Koperasi & UMKM Ekspor Binaan" },
  33: { x: 400, y: 560, wing: 'left', name: "Litbang Riset Otonomi (JPIP)" },
  35: { x: 180, y: 680, wing: 'left', name: "RSUD Dr. Soetomo & IDI Jatim" },
  37: { x: 290, y: 680, wing: 'left', name: "Dinas LH & Proper Hijau Jatim" },
  39: { x: 400, y: 680, wing: 'left', name: "KONI Jatim & Atlet Kebanggaan" },

  // Right Wing
  8: { x: 565, y: 200, wing: 'right', name: "Pemerintah Wilayah Malang Raya" },
  10: { x: 675, y: 200, wing: 'right', name: "Wings Surya & Korporasi FMCG" },
  12: { x: 785, y: 200, wing: 'right', name: "KAI Daop 8 & AP I Bandara Juanda" },
  14: { x: 895, y: 200, wing: 'right', name: "Auto2000 & Mobilitas Listrik" },
  16: { x: 620, y: 320, wing: 'right', name: "Pemerintah Wilayah Tapal Kuda" },
  18: { x: 730, y: 320, wing: 'right', name: "BPD PHRI & Dewan Kesenian Jatim" },
  20: { x: 840, y: 320, wing: 'right', name: "AJI Surabaya & Radio Suara Surabaya" },
  22: { x: 565, y: 440, wing: 'right', name: "Pemkot Probolinggo & Pasuruan" },
  24: { x: 675, y: 440, wing: 'right', name: "PT Jamkrida & BPR UMKM Jatim" },
  26: { x: 785, y: 440, wing: 'right', name: "Tim Penggerak PKK Provinsi Jatim" },
  28: { x: 895, y: 440, wing: 'right', name: "DPD PERADI & Pakar Hukum" },
  30: { x: 620, y: 560, wing: 'right', name: "Pemerintah Wilayah Pulau Madura" },
  32: { x: 730, y: 560, wing: 'right', name: "DPD KNPI & Pegiat Kreatif Jatim" },
  34: { x: 840, y: 560, wing: 'right', name: "Perum Bulog & Ketahanan Pangan" },
  36: { x: 620, y: 680, wing: 'right', name: "Forum Kerukunan Umat Beragama (FKUB)" },
  38: { x: 730, y: 680, wing: 'right', name: "BAZNAS & Lembaga Filantropi Jatim" },
  40: { x: 840, y: 680, wing: 'right', name: "Satgas Pengamanan VVIP Korem 084" }
};

for (let id = 7; id <= 40; id++) {
  if (!BALLROOM_DATABASE[id]) {
    const p = POS_MAP[id] || { x: 500, y: 500, wing: id % 2 === 1 ? 'left' : 'right', name: 'Delegasi Tamu Khusus' };
    const seats = [];
    for (let s = 1; s <= 8; s++) {
      seats.push({
        seat: s,
        name: s === 1 ? "Pimpinan Delegasi Meja " + id : "Anggota Tamu Delegasi " + s,
        role: s === 1 ? "Ketua Rombongan" : "Undangan Resmi Kehormatan",
        confirmed: true,
        dietary: "Menu Perjamuan Resmi"
      });
    }
    BALLROOM_DATABASE[id] = {
      id: id,
      name: "Meja " + id,
      tier: id <= 6 ? "VVIP PRESIDIUM" : (p.wing === 'left' ? "SAYAP KIRI" : "SAYAP KANAN"),
      wing: p.wing,
      x: p.x,
      y: p.y,
      institution: p.name,
      status: "8 dari 8 Kursi Terisi",
      isUserTable: false,
      note: "Meja bundar perjamuan 8 kursi pada " + (p.wing === 'left' ? "Sayap Kiri" : "Sayap Kanan") + " Grand Ballroom.",
      guests: seats
    };
  }
}

// Current active mobile view
let currentWingView = "all"; // 'all', 'left', 'right'

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  renderBallroomSvg();
  setupEventListeners();
});

// Render SVG Tables (Strictly 8 Chairs Each, CAD Blueprint Layout)
function renderBallroomSvg() {
  const gTables = document.getElementById("svgTablesGroup");
  if (!gTables) return;

  gTables.innerHTML = "";

  for (let id = 1; id <= 40; id++) {
    const t = BALLROOM_DATABASE[id];
    if (!t) continue;

    const isMeja1 = t.id === 1;

    // Table Group
    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.setAttribute("class", "table-item " + (isMeja1 ? "table-meja1" : ""));
    g.setAttribute("data-id", t.id);
    g.style.cursor = "pointer";

    // 8 Chairs around the table (radius 34px, 45 degree angle step)
    const angles = [0, 45, 90, 135, 180, 225, 270, 315];
    angles.forEach((angle, idx) => {
      const rad = (angle * Math.PI) / 180;
      const cx = t.x + 34 * Math.cos(rad);
      const cy = t.y + 34 * Math.sin(rad);

      const chair = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      chair.setAttribute("cx", cx.toFixed(1));
      chair.setAttribute("cy", cy.toFixed(1));
      chair.setAttribute("r", "3.4");
      chair.setAttribute("fill", isMeja1 ? "#fbbf24" : "#64748b");
      chair.setAttribute("stroke", isMeja1 ? "#b45309" : "#0f2a2e");
      chair.setAttribute("stroke-width", "0.8");
      g.appendChild(chair);
    });

    // Pulsing Ring for Meja 1
    if (isMeja1) {
      const pulseRing = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      pulseRing.setAttribute("cx", t.x);
      pulseRing.setAttribute("cy", t.y);
      pulseRing.setAttribute("r", "44");
      pulseRing.setAttribute("fill", "none");
      pulseRing.setAttribute("stroke", "#f59e0b");
      pulseRing.setAttribute("stroke-width", "2");
      pulseRing.setAttribute("class", "pulse-ring-gold");
      g.appendChild(pulseRing);
    }

    // Main Round Table (Radius 25px)
    const tableCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    tableCircle.setAttribute("cx", t.x);
    tableCircle.setAttribute("cy", t.y);
    tableCircle.setAttribute("r", "25");
    tableCircle.setAttribute("fill", isMeja1 ? "url(#goldMejaGrad)" : (t.id <= 6 ? "#0f363d" : "#0b2126"));
    tableCircle.setAttribute("stroke", isMeja1 ? "#ffffff" : (t.id <= 6 ? "#d8a21a" : "rgba(216, 162, 26, 0.45)"));
    tableCircle.setAttribute("stroke-width", isMeja1 ? "2.5" : "1.2");
    g.appendChild(tableCircle);

    // Table Number Text
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", t.x);
    text.setAttribute("y", t.y + 4.5);
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("fill", isMeja1 ? "#061417" : "#f1f5f9");
    text.setAttribute("font-size", isMeja1 ? "12" : "10");
    text.setAttribute("font-weight", "800");
    text.textContent = t.id;
    g.appendChild(text);

    // Crown icon for Meja 1
    if (isMeja1) {
      const crown = document.createElementNS("http://www.w3.org/2000/svg", "text");
      crown.setAttribute("x", t.x);
      crown.setAttribute("y", t.y - 10);
      crown.setAttribute("text-anchor", "middle");
      crown.setAttribute("font-size", "9");
      crown.textContent = "👑";
      g.appendChild(crown);
    }

    // Click handler
    g.addEventListener("click", () => {
      openTableDrawer(t.id);
    });

    gTables.appendChild(g);
  }
}

// Mobile ViewBox Switcher (Prevents horizontal shift on phones)
function setWingView(view) {
  currentWingView = view;
  const svg = document.getElementById("ballroomSvg");
  if (!svg) return;

  // Update button states
  document.querySelectorAll(".seg-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.view === view);
  });

  if (view === "left") {
    // Zoom focus on Left Wing (Meja 1-39)
    svg.setAttribute("viewBox", "40 -30 500 820");
  } else if (view === "right") {
    // Zoom focus on Right Wing (Meja 2-40)
    svg.setAttribute("viewBox", "484 -30 500 820");
  } else {
    // Full Ballroom
    svg.setAttribute("viewBox", "0 -30 1024 820");
  }
}

// Open Table Details Bottom Sheet / Side Drawer
function openTableDrawer(tableId) {
  const t = BALLROOM_DATABASE[tableId];
  if (!t) return;

  const drawer = document.getElementById("tableDrawer");
  const drawerSheet = document.getElementById("drawerSheet");
  if (!drawer || !drawerSheet) return;

  const titleEl = document.getElementById("drawerTableTitle");
  const tierEl = document.getElementById("drawerTableTier");
  const numEl = document.getElementById("drawerTableNum");
  const instEl = document.getElementById("drawerTableInst");
  const seatsListEl = document.getElementById("drawerSeatsList");

  if (titleEl) titleEl.textContent = t.name + " (" + t.tier + ")";
  if (tierEl) tierEl.textContent = "Sayap " + (t.wing === "left" ? "Kiri" : "Kanan") + " · Grand Ballroom";
  if (numEl) numEl.textContent = t.id;
  if (instEl) instEl.textContent = t.institution;

  // Render 8 Seats
  if (seatsListEl) {
    seatsListEl.innerHTML = "";
    t.guests.forEach(g => {
      const isGubernur = g.name.includes("Sulastri");
      const div = document.createElement("div");
      div.className = "seat-row-item " + (isGubernur ? "is-user-target" : "");
      div.innerHTML = `
        <div style="display:flex; align-items:center; gap:10px; min-width:0;">
          <span class="seat-num-badge" style="${isGubernur ? 'background:var(--gold-primary); color:#061417;' : ''}">${g.seat}</span>
          <div style="min-width:0;">
            <strong style="font-size:0.78rem; color:#fff; display:block; text-overflow:ellipsis; overflow:hidden; white-space:nowrap;">
              ${g.name} ${isGubernur ? '<span style="font-size:9px; background:var(--gold-primary); color:#061417; padding:2px 5px; border-radius:4px; font-weight:800; margin-left:4px;">ANDA</span>' : ''}
            </strong>
            <span style="font-size:0.7rem; color:var(--text-muted); display:block; text-overflow:ellipsis; overflow:hidden; white-space:nowrap;">${g.role}</span>
          </div>
        </div>
        <span style="font-size:0.7rem; color:var(--emerald); font-weight:600; white-space:nowrap;">Terkonfirmasi</span>
      `;
      seatsListEl.appendChild(div);
    });
  }

  drawer.classList.add("open");
}

function closeTableDrawer() {
  const drawer = document.getElementById("tableDrawer");
  if (drawer) drawer.classList.remove("open");
}

// Live Search Functionality
function handleMapSearch(query) {
  const q = query.toLowerCase().trim();
  const tables = document.querySelectorAll("#svgTablesGroup .table-item");

  tables.forEach(el => {
    const id = parseInt(el.getAttribute("data-id"));
    const t = BALLROOM_DATABASE[id];
    if (!t) return;

    if (!q) {
      el.style.opacity = "1";
      return;
    }

    const matchesName = t.name.toLowerCase().includes(q);
    const matchesInst = t.institution.toLowerCase().includes(q);
    const matchesGuest = t.guests.some(g => g.name.toLowerCase().includes(q) || g.role.toLowerCase().includes(q));

    if (matchesName || matchesInst || matchesGuest) {
      el.style.opacity = "1";
    } else {
      el.style.opacity = "0.2";
    }
  });
}

// Copy Access Code
function copyPassCode() {
  navigator.clipboard.writeText("JP26-GUB-001");
  alert("Kode akses 'JP26-GUB-001' berhasil disalin!");
}

// Setup Event Listeners
function setupEventListeners() {
  const searchInput = document.getElementById("mapSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      handleMapSearch(e.target.value);
    });
  }

  // Backdrop click to close drawer
  const drawer = document.getElementById("tableDrawer");
  if (drawer) {
    drawer.addEventListener("click", (e) => {
      if (e.target === drawer) {
        closeTableDrawer();
      }
    });
  }
}
