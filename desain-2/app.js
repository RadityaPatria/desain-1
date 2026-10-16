/**
 * JAWAPOS AWARDS 2026 — DESAIN 2 ENGINE
 * Split-Cockpit High Contrast Architecture
 * Features:
 * - 40 Banquet Round Tables · Strictly 8 Chairs per Table (CAD Blueprint)
 * - Zero Horizontal Scroll on Mobile (Responsive viewBox Control)
 * - Immediate Table Inspector (Left Column Roster Updates on Click)
 * - Guest Directory Search & Protocol Form
 */

// Comprehensive 40 Tables Database
const BALLROOM_TABLES_DATA = {
  1: {
    id: 1,
    name: "Meja 1",
    tier: "VVIP FRONT ROW (PRESIDIUM)",
    wing: "Sayap Kiri (Depan Catwalk)",
    status: "8 dari 8 Kursi Terisi",
    isUserTable: true,
    institution: "Pemerintah Provinsi Jawa Timur",
    note: "Posisi terdepan paling terhormat menghadap langsung panggung utama dan catwalk tengah.",
    guests: [
      { seat: 1, name: "Dra. Hj. Sulastri Hadiningrat, M.Si.", role: "Gubernur Jawa Timur (Tamu Utama)", isUser: true },
      { seat: 2, name: "Siti Rahmawati, S.STP.", role: "Staf Protokol Gubernur", isUser: false },
      { seat: 3, name: "Bpk. Bambang, S.H.", role: "Ajudan Pengawal Pribadi VVIP", isUser: false },
      { seat: 4, name: "Ibu Indah P., S.I.Kom.", role: "ADC Pendamping Protokoler", isUser: false },
      { seat: 5, name: "Mayor Jenderal TNI Rafael G.", role: "Pangdam V/Brawijaya", isUser: false },
      { seat: 6, name: "Irjen Pol. Dr. H. Siswanto, M.H.", role: "Kapolda Jawa Timur", isUser: false },
      { seat: 7, name: "Dr. Mia Amiati, S.H., M.H.", role: "Kajati Jawa Timur", isUser: false },
      { seat: 8, name: "Kusnadi, S.H., M.Hum.", role: "Ketua DPRD Provinsi Jatim", isUser: false }
    ]
  },
  2: {
    id: 2,
    name: "Meja 2",
    tier: "VVIP FORKOPIMDA PROVINSI",
    wing: "Sayap Kanan",
    status: "8 dari 8 Kursi Terisi",
    isUserTable: false,
    institution: "Sekretariat Daerah Provinsi Jawa Timur",
    note: "Sekda Provinsi Jatim, Kasdam V/Brawijaya & Wakapolda Jatim.",
    guests: [
      { seat: 1, name: "Adhy Karyono, A.Ks., M.A.P.", role: "Sekda Provinsi Jatim" },
      { seat: 2, name: "Dr. Akhmad Jazuli, M.Si.", role: "Asisten Administrasi Umum" },
      { seat: 3, name: "Ir. Joko Irianto, M.Si.", role: "Asisten Perekonomian & Pembangunan" },
      { seat: 4, name: "Brigjen TNI Fahmi Sudirman", role: "Kasdam V/Brawijaya" },
      { seat: 5, name: "Brigjen Pol. Akhmad Yusep Gunawan", role: "Wakapolda Jawa Timur" },
      { seat: 6, name: "Jehezkiel Devy Sudarso, S.H.", role: "Wakajati Jawa Timur" },
      { seat: 7, name: "Anik Maslachah, M.Si.", role: "Wakil Ketua DPRD Jatim" },
      { seat: 8, name: "Sahat Tua Simandjuntak", role: "Tokoh Parlemen Jatim" }
    ]
  },
  3: {
    id: 3,
    name: "Meja 3",
    tier: "VVIP UTAMA FORKOPIMDA",
    wing: "Sayap Kiri",
    status: "8 dari 8 Kursi Terisi",
    isUserTable: false,
    institution: "Koarmada II & Polda Jatim",
    guests: [
      { seat: 1, name: "Laksamana Pertama TNI Bambang S.", role: "Danguspurla Koarmada II" },
      { seat: 2, name: "Kolonel Laut (P) Hendra K.", role: "Asops Pangkoarmada II" },
      { seat: 3, name: "Marsma TNI Fairlyanto, S.T.", role: "Danlanud Iswahjudi" },
      { seat: 4, name: "Kombes Pol. Pasma Royce", role: "Kapolrestabes Surabaya" },
      { seat: 5, name: "Dr. K.H. Marzuki Mustamar", role: "Tokoh Ulama Jatim" },
      { seat: 6, name: "Uskup Surabaya Mgr. Vincentius", role: "Tokoh Lintas Agama" },
      { seat: 7, name: "Drs. Benny Sampirwanto, M.Si.", role: "Asisten I Sekdaprov Jatim" },
      { seat: 8, name: "Dra. Restu Novi Widiani, M.M.", role: "Kadis Sosial Provinsi Jatim" }
    ]
  },
  4: {
    id: 4,
    name: "Meja 4",
    tier: "VVIP DEWAN KEHORMATAN",
    wing: "Sayap Kanan",
    status: "8 dari 8 Kursi Terisi",
    isUserTable: false,
    institution: "Yayasan Perintis Jawa Pos",
    guests: [
      { seat: 1, name: "Dahlan Iskan", role: "Senior Advisor / Mantan CEO Jawa Pos" },
      { seat: 2, name: "Nafsiah Dahlan Iskan", role: "Tamu Kehormatan" },
      { seat: 3, name: "Azrul Ananda", role: "Presiden Persebaya & DBL Indonesia" },
      { seat: 4, name: "Ivo Ananda", role: "Direktur Komunikasi DBL" },
      { seat: 5, name: "H. Suhendro Boroma", role: "Komisaris Jawa Pos Group" },
      { seat: 6, name: "Zuhro Latifah", role: "Direktur Keuangan Jawa Pos" },
      { seat: 7, name: "Suparno Wonokromo", role: "Direktur Produksi Grafika" },
      { seat: 8, name: "Nurwahid", role: "Ketua SPS Jawa Timur" }
    ]
  },
  5: {
    id: 5,
    name: "Meja 5",
    tier: "VVIP DIREKSI JAWA POS",
    wing: "Sayap Kiri",
    status: "8 dari 8 Kursi Terisi",
    isUserTable: false,
    institution: "PT Jawa Pos Koran & Percetakan",
    guests: [
      { seat: 1, name: "Ir. H. Leak Kustiyo", role: "Direktur Utama Jawa Pos" },
      { seat: 2, name: "Cipto Rusbandi", role: "Pemimpin Redaksi Jawa Pos" },
      { seat: 3, name: "Dhimam Abror Djabbar", role: "Dewan Redaksi Senior" },
      { seat: 4, name: "Eko Dimas Prasetyo", role: "Direktur Bisnis Digital" },
      { seat: 5, name: "Retno Palupi", role: "Head of Corporate Communication" },
      { seat: 6, name: "Taufik Hidayat", role: "GM Advertising & Event" },
      { seat: 7, name: "Drs. Hendro Basuki", role: "Dewan Kehormatan PWI Jatim" },
      { seat: 8, name: "Lutfil Hakim", role: "Ketua PWI Jawa Timur" }
    ]
  },
  6: {
    id: 6,
    name: "Meja 6",
    tier: "DEWAN JURI INDEPENDEN",
    wing: "Sayap Kanan",
    status: "8 dari 8 Kursi Terisi",
    isUserTable: false,
    institution: "Dewan Pakar JawaPos Awards",
    guests: [
      { seat: 1, name: "Prof. Dr. Mahfud MD", role: "Ketua Dewan Kehormatan Juri" },
      { seat: 2, name: "Prof. Dr. Komaruddin Hidayat", role: "Panel Dewan Pakar" },
      { seat: 3, name: "Dr. Errol Jonathans", role: "Pakar Komunikasi Publik" },
      { seat: 4, name: "Dr. Zainuddin Maliki", role: "Dewan Juri Otonomi" },
      { seat: 5, name: "Prof. Dr. Siti Zuhro, M.A.", role: "Peneliti Senior BRIN Otonomi" },
      { seat: 6, name: "Prof. Dr. Hotman Siahaan", role: "Sosiolog Senior Jatim" },
      { seat: 7, name: "Emil Elestianto Dardak, Ph.D.", role: "Pakar Planologi & Pembangunan" },
      { seat: 8, name: "Arumi Bachsin, S.E.", role: "Ketua Dekranasda Jatim" }
    ]
  }
};

// CAD Coordinates Map (Sayap Kiri: 3, 4, 3, 4, 3, 3; Sayap Kanan: 3, 4, 3, 4, 3, 3)
const CAD_POSITIONS = {
  1: { x: 180, y: 80, wing: 'left', name: "Pemerintah Provinsi Jawa Timur" },
  3: { x: 290, y: 80, wing: 'left', name: "Koarmada II & Polda Jatim" },
  5: { x: 400, y: 80, wing: 'left', name: "PT Jawa Pos Koran & Percetakan" },
  7: { x: 125, y: 200, wing: 'left', name: "Pemerintah Kota Surabaya" },
  9: { x: 235, y: 200, wing: 'left', name: "Bank Jatim & BUMN Perbankan" },
  11: { x: 345, y: 200, wing: 'left', name: "Petrokimia Gresik & Industri" },
  13: { x: 455, y: 200, wing: 'left', name: "Dewan Rektor Perguruan Tinggi" },
  15: { x: 180, y: 320, wing: 'left', name: "Pemkab Gresik & Pemkab Sidoarjo" },
  17: { x: 290, y: 320, wing: 'left', name: "Pelindo Regional 3 & Maritim" },
  19: { x: 400, y: 320, wing: 'left', name: "JTV Surabaya & Aliansi Media" },
  21: { x: 125, y: 440, wing: 'left', name: "Kepala Daerah Wilayah Mataraman" },
  23: { x: 235, y: 440, wing: 'left', name: "Ciputra & Pakuwon Real Estate" },
  25: { x: 345, y: 440, wing: 'left', name: "Dinas Penanaman Modal & OPD Jatim" },
  27: { x: 455, y: 440, wing: 'left', name: "Telkomsel & Ekosistem Digital" },
  29: { x: 180, y: 560, wing: 'left', name: "Pemerintah Wilayah Pantura" },
  31: { x: 290, y: 560, wing: 'left', name: "Koperasi & UMKM Ekspor Binaan" },
  33: { x: 400, y: 560, wing: 'left', name: "Litbang Riset Otonomi (JPIP)" },
  35: { x: 180, y: 680, wing: 'left', name: "RSUD Dr. Soetomo & IDI Jatim" },
  37: { x: 290, y: 680, wing: 'left', name: "Dinas LH & Proper Hijau Jatim" },
  39: { x: 400, y: 680, wing: 'left', name: "KONI Jatim & Atlet Juara PON" },

  2: { x: 620, y: 80, wing: 'right', name: "Sekretariat Daerah Provinsi Jatim" },
  4: { x: 730, y: 80, wing: 'right', name: "Yayasan Perintis Jawa Pos" },
  6: { x: 840, y: 80, wing: 'right', name: "Dewan Pakar JawaPos Awards" },
  8: { x: 565, y: 200, wing: 'right', name: "Pemerintah Wilayah Malang Raya" },
  10: { x: 675, y: 200, wing: 'right', name: "Wings Surya & Korporasi FMCG" },
  12: { x: 785, y: 200, wing: 'right', name: "KAI Daop 8 & Bandara Juanda" },
  14: { x: 895, y: 200, wing: 'right', name: "Auto2000 & Kendaraan Listrik" },
  16: { x: 620, y: 320, wing: 'right', name: "Pemerintah Wilayah Tapal Kuda" },
  18: { x: 730, y: 320, wing: 'right', name: "BPD PHRI & Dewan Kesenian Jatim" },
  20: { x: 840, y: 320, wing: 'right', name: "AJI Surabaya & Radio Suara Surabaya" },
  22: { x: 565, y: 440, wing: 'right', name: "Pemkot Probolinggo & Pasuruan" },
  24: { x: 675, y: 440, wing: 'right', name: "PT Jamkrida & Bank UMKM Jatim" },
  26: { x: 785, y: 440, wing: 'right', name: "Tim Penggerak PKK Provinsi Jatim" },
  28: { x: 895, y: 440, wing: 'right', name: "DPD PERADI & Advokat Hukum" },
  30: { x: 620, y: 560, wing: 'right', name: "Pemerintah Wilayah Pulau Madura" },
  32: { x: 730, y: 560, wing: 'right', name: "DPD KNPI & Pegiat Kreatif Jatim" },
  34: { x: 840, y: 560, wing: 'right', name: "Perum Bulog & Ketahanan Pangan" },
  36: { x: 620, y: 680, wing: 'right', name: "Forum Kerukunan Umat Beragama (FKUB)" },
  38: { x: 730, y: 680, wing: 'right', name: "BAZNAS & Lembaga Filantropi" },
  40: { x: 840, y: 680, wing: 'right', name: "Satgas Pengamanan VVIP Korem 084" }
};

// Fill tables 7 to 40 with 8 chairs each
for (let id = 7; id <= 40; id++) {
  if (!BALLROOM_TABLES_DATA[id]) {
    const pos = CAD_POSITIONS[id] || { x: 500, y: 500, wing: id % 2 === 1 ? 'left' : 'right', name: 'Delegasi Tamu Khusus' };
    const seats = [];
    for (let s = 1; s <= 8; s++) {
      seats.push({
        seat: s,
        name: s === 1 ? "Pimpinan Delegasi Meja " + id : "Anggota Tamu Delegasi " + s,
        role: s === 1 ? "Ketua Delegasi" : "Tamu Undangan Resmi"
      });
    }
    BALLROOM_TABLES_DATA[id] = {
      id: id,
      name: "Meja " + id,
      tier: id <= 6 ? "VVIP PRESIDIUM" : (pos.wing === 'left' ? "SAYAP KIRI" : "SAYAP KANAN"),
      wing: pos.wing === 'left' ? "Sayap Kiri" : "Sayap Kanan",
      status: "8 dari 8 Kursi Terisi",
      isUserTable: false,
      institution: pos.name,
      note: "Meja perjamuan 8 kursi pada " + (pos.wing === 'left' ? "Sayap Kiri" : "Sayap Kanan") + ".",
      guests: seats
    };
  }
}

let activeSelectedTableId = 1;

// Init
document.addEventListener("DOMContentLoaded", () => {
  renderSvgTables();
  selectBallroomTable(1); // Default to Meja 1
  setupMapSearch();
});

// Render SVG Tables
function renderSvgTables() {
  const gContainer = document.getElementById("tablesGroup");
  if (!gContainer) return;

  gContainer.innerHTML = "";

  for (let id = 1; id <= 40; id++) {
    const t = BALLROOM_TABLES_DATA[id];
    const pos = CAD_POSITIONS[id];
    if (!t || !pos) continue;

    const isMeja1 = t.id === 1;

    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.setAttribute("class", "table-item");
    g.setAttribute("data-id", t.id);
    g.style.cursor = "pointer";

    // 8 Chairs around the table (radius 34px, 45 degree step)
    const angles = [0, 45, 90, 135, 180, 225, 270, 315];
    angles.forEach((angle) => {
      const rad = (angle * Math.PI) / 180;
      const cx = pos.x + 34 * Math.cos(rad);
      const cy = pos.y + 34 * Math.sin(rad);

      const chair = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      chair.setAttribute("cx", cx.toFixed(1));
      chair.setAttribute("cy", cy.toFixed(1));
      chair.setAttribute("r", "3.4");
      chair.setAttribute("fill", isMeja1 ? "#fbbf24" : "#94a3b8");
      chair.setAttribute("stroke", isMeja1 ? "#b45309" : "#061518");
      chair.setAttribute("stroke-width", "0.8");
      g.appendChild(chair);
    });

    // Golden Active Pulse Ring for Meja 1
    if (isMeja1) {
      const pulseRing = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      pulseRing.setAttribute("cx", pos.x);
      pulseRing.setAttribute("cy", pos.y);
      pulseRing.setAttribute("r", "43");
      pulseRing.setAttribute("fill", "none");
      pulseRing.setAttribute("stroke", "#f59e0b");
      pulseRing.setAttribute("stroke-width", "2");
      pulseRing.setAttribute("opacity", "0.85");
      g.appendChild(pulseRing);
    }

    // Round Table Center (Radius 25px)
    const tableCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    tableCircle.setAttribute("id", "tableCircle_" + t.id);
    tableCircle.setAttribute("cx", pos.x);
    tableCircle.setAttribute("cy", pos.y);
    tableCircle.setAttribute("r", "25");
    tableCircle.setAttribute("fill", isMeja1 ? "url(#goldMejaGrad)" : (t.id <= 6 ? "#0f363d" : "#0b2126"));
    tableCircle.setAttribute("stroke", isMeja1 ? "#ffffff" : (t.id <= 6 ? "#f59e0b" : "rgba(245, 158, 11, 0.45)"));
    tableCircle.setAttribute("stroke-width", isMeja1 ? "2.5" : "1.4");
    g.appendChild(tableCircle);

    // Number text
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", pos.x);
    text.setAttribute("y", pos.y + 4.5);
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("fill", isMeja1 ? "#061518" : "#ffffff");
    text.setAttribute("font-size", isMeja1 ? "12" : "10");
    text.setAttribute("font-weight", "800");
    text.textContent = t.id;
    g.appendChild(text);

    if (isMeja1) {
      const crown = document.createElementNS("http://www.w3.org/2000/svg", "text");
      crown.setAttribute("x", pos.x);
      crown.setAttribute("y", pos.y - 10);
      crown.setAttribute("text-anchor", "middle");
      crown.setAttribute("font-size", "9");
      crown.textContent = "👑";
      g.appendChild(crown);
    }

    g.addEventListener("click", () => {
      selectBallroomTable(t.id);
    });

    gContainer.appendChild(g);
  }
}

// Select and highlight table, update left-column inspector
function selectBallroomTable(tableId) {
  activeSelectedTableId = tableId;
  const t = BALLROOM_TABLES_DATA[tableId];
  if (!t) return;

  // Update left column active card
  const titleEl = document.getElementById("activeTableTitle");
  const wingEl = document.getElementById("activeTableWing");
  const numEl = document.getElementById("activeTableNum");
  const instEl = document.getElementById("activeTableInst");
  const rosterList = document.getElementById("activeSeatsRoster");

  if (titleEl) titleEl.textContent = t.name + " (" + t.tier + ")";
  if (wingEl) wingEl.textContent = t.wing + " · 8 Kursi";
  if (numEl) numEl.textContent = t.id;
  if (instEl) instEl.textContent = t.institution;

  if (rosterList) {
    rosterList.innerHTML = "";
    t.guests.forEach(g => {
      const isUser = g.name.includes("Sulastri");
      const div = document.createElement("div");
      div.className = "seat-entry " + (isUser ? "user-seat" : "");
      div.innerHTML = `
        <div class="seat-entry-left">
          <span class="seat-entry-idx">${g.seat}</span>
          <div class="seat-entry-names">
            <strong>${g.name} ${isUser ? '<span style="color:#061518; background:#f59e0b; font-size:9px; padding:1px 5px; border-radius:3px; font-weight:800; margin-left:4px;">ANDA</span>' : ''}</strong>
            <span>${g.role}</span>
          </div>
        </div>
        <span style="font-size:0.68rem; color:var(--emerald-live); font-weight:600; white-space:nowrap;">Terkonfirmasi</span>
      `;
      rosterList.appendChild(div);
    });
  }

  // Update SVG highlight selection outline
  document.querySelectorAll("#tablesGroup circle[id^='tableCircle_']").forEach(c => {
    const id = parseInt(c.getAttribute("id").replace("tableCircle_", ""));
    if (id === tableId) {
      c.setAttribute("stroke", "#38bdf8");
      c.setAttribute("stroke-width", "3");
    } else {
      const isMeja1 = id === 1;
      c.setAttribute("stroke", isMeja1 ? "#ffffff" : (id <= 6 ? "#f59e0b" : "rgba(245, 158, 11, 0.45)"));
      c.setAttribute("stroke-width", isMeja1 ? "2.5" : "1.4");
    }
  });
}

// Mobile View Mode Switcher (ViewBox control for zero horizontal scrolling)
function setMapView(view) {
  const svg = document.getElementById("ballroomSvg");
  if (!svg) return;

  document.querySelectorAll(".view-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.view === view);
  });

  if (view === "left") {
    // Zoom in on Left Wing (Meja 1-39)
    svg.setAttribute("viewBox", "40 -30 500 820");
  } else if (view === "right") {
    // Zoom in on Right Wing (Meja 2-40)
    svg.setAttribute("viewBox", "484 -30 500 820");
  } else {
    // Full Ballroom
    svg.setAttribute("viewBox", "0 -30 1024 820");
  }
}

// Search Map
function setupMapSearch() {
  const searchInput = document.getElementById("mapSearchInput");
  if (!searchInput) return;

  searchInput.addEventListener("input", (e) => {
    const q = e.target.value.toLowerCase().trim();
    const tableElements = document.querySelectorAll("#tablesGroup .table-item");

    tableElements.forEach(el => {
      const id = parseInt(el.getAttribute("data-id"));
      const t = BALLROOM_TABLES_DATA[id];
      if (!t) return;

      if (!q) {
        el.style.opacity = "1";
        return;
      }

      const matchName = t.name.toLowerCase().includes(q);
      const matchInst = t.institution.toLowerCase().includes(q);
      const matchGuest = t.guests.some(g => g.name.toLowerCase().includes(q) || g.role.toLowerCase().includes(q));

      if (matchName || matchInst || matchGuest) {
        el.style.opacity = "1";
      } else {
        el.style.opacity = "0.2";
      }
    });
  });
}

// Modals
function openDirectoryModal() {
  const modal = document.getElementById("directoryModal");
  if (!modal) return;

  const dirList = document.getElementById("directoryListContent");
  if (dirList) {
    dirList.innerHTML = "";
    for (let id = 1; id <= 40; id++) {
      const t = BALLROOM_TABLES_DATA[id];
      const isMeja1 = id === 1;
      const card = document.createElement("div");
      card.style.cssText = "padding:12px; border-radius:8px; background:rgba(0,0,0,0.3); border:1px solid rgba(255,255,255,0.08); cursor:pointer;";
      if (isMeja1) card.style.borderColor = "var(--gold-main)";

      card.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <strong style="color:${isMeja1 ? 'var(--gold-bright)' : '#fff'}; font-size:0.85rem;">${t.name} — ${t.tier}</strong>
          <span style="font-size:0.7rem; color:var(--emerald-live); font-weight:600;">8 Kursi Penuh</span>
        </div>
        <p style="font-size:0.75rem; color:#94a3b8; margin-top:2px;">${t.institution}</p>
      `;

      card.addEventListener("click", () => {
        closeDirectoryModal();
        selectBallroomTable(id);
      });

      dirList.appendChild(card);
    }
  }

  modal.classList.add("show");
}

function closeDirectoryModal() {
  const modal = document.getElementById("directoryModal");
  if (modal) modal.classList.remove("show");
}

function openProtocolModal() {
  const modal = document.getElementById("protocolModal");
  if (modal) modal.classList.add("show");
}

function closeProtocolModal() {
  const modal = document.getElementById("protocolModal");
  if (modal) modal.classList.remove("show");
}

function handleProtocolSubmit(e) {
  e.preventDefault();
  alert("Catatan protokol untuk Meja 1 berhasil disampaikan ke meja sekretariat panitia!");
  closeProtocolModal();
}
