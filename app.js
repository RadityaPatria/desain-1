/**
 * JAWAPOS AWARDS 2026 â€” CLIENT ENGINE
 * Handles Dynamic SVG Ballroom Inspector (40 Tables Â· 8 Chairs),
 * Real-time Guest Directory, Search & Highlight, and Web Audio API.
 */

// Comprehensive Database for all 40 Tables in Grand Ballroom
const BALLROOM_TABLES_DATA = {
  1: {
    id: 1,
    name: "Meja 1",
    tier: "VVIP FRONT ROW (SAYAP KIRI)",
    wing: "Sayap Kiri (Dekat Catwalk)",
    status: "8 dari 8 Kursi Terisi",
    isUserTable: true,
    note: "Posisi terdepan paling terhormat, menghadap langsung panggung utama dan catwalk tengah.",
    parties: [
      { name: "Gubernur & 4 Pendamping", role: "Tamu Utama & Rombongan Resmi (5 Orang)", count: "5 orang", color: "gold" },
      { name: "Polda Gresik & Mitra Forkopimda", role: "Kapolres & Jajaran PJU", count: "3 orang", color: "gold" }
    ]
  },
  2: {
    id: 2,
    name: "Meja 2",
    tier: "VIP UTAMA (SAYAP KIRI)",
    wing: "Sayap Kiri",
    status: "8 dari 8 Kursi Terisi",
    isUserTable: false,
    note: "Baris pertama Sayap Kiri berdampingan dengan Meja 1.",
    parties: [
      { name: "Pangdam V / Brawijaya", role: "Pangdam & ADC", count: "4 orang", color: "blue" },
      { name: "Danlanud Iswahjudi", role: "Komandan & Staf Khusus", count: "4 orang", color: "blue" }
    ]
  },
  3: {
    id: 3,
    name: "Meja 3",
    tier: "VIP HUKUM & YUDIKATIF",
    wing: "Sayap Kiri",
    status: "8 dari 8 Kursi Terisi",
    isUserTable: false,
    note: "Baris pertama Sayap Kiri dekat posisi Stand Kamera 1.",
    parties: [
      { name: "Kejaksaan Tinggi Jawa Timur", role: "Kajati & Aspidsus", count: "4 orang", color: "blue" },
      { name: "Pengadilan Tinggi Surabaya", role: "Ketua & Hakim Tinggi", count: "4 orang", color: "blue" }
    ]
  },
  4: {
    id: 4,
    name: "Meja 4",
    tier: "BUMN & KORPORASI UTAMA",
    wing: "Sayap Kiri",
    status: "8 dari 8 Kursi Terisi",
    isUserTable: false,
    note: "Baris kedua Sayap Kiri menghadap lorong tengah VIP.",
    parties: [
      { name: "PT Semen Indonesia (Persero) Tbk", role: "Direktur Utama & BOD", count: "4 orang", color: "blue" },
      { name: "PT Bank Jatim Tbk", role: "Direksi & Sekretaris Perusahaan", count: "4 orang", color: "gold" }
    ]
  },
  5: {
    id: 5,
    name: "Meja 5",
    tier: "PEMERINTAH KOTA SURABAYA",
    wing: "Sayap Kiri",
    status: "8 dari 8 Kursi Terisi",
    isUserTable: false,
    note: "Baris kedua Sayap Kiri, tengah.",
    parties: [
      { name: "Pemerintah Kota Surabaya", role: "Walikota & Asisten Sekda", count: "4 orang", color: "blue" },
      { name: "DPRD Kota Surabaya", role: "Ketua & Pimpinan Komisi", count: "4 orang", color: "blue" }
    ]
  },
  6: {
    id: 6,
    name: "Meja 6",
    tier: "INDUSTRI STRATEGIS NASIONAL",
    wing: "Sayap Kiri",
    status: "8 dari 8 Kursi Terisi",
    isUserTable: false,
    note: "Baris kedua Sayap Kiri.",
    parties: [
      { name: "PT Petrokimia Gresik", role: "Direksi & Humas", count: "4 orang", color: "blue" },
      { name: "PT PAL Indonesia", role: "BOD & Senior Manager", count: "4 orang", color: "blue" }
    ]
  },
  7: {
    id: 7,
    name: "Meja 7",
    tier: "AKADEMISI & PERGURUAN TINGGI",
    wing: "Sayap Kiri",
    status: "8 dari 8 Kursi Terisi",
    isUserTable: false,
    note: "Baris kedua Sayap Kiri, tepi barat.",
    parties: [
      { name: "Universitas Airlangga (UNAIR)", role: "Rektor & Wakil Rektor", count: "4 orang", color: "blue" },
      { name: "Institut Teknologi Sepuluh Nopember (ITS)", role: "Rektor & Dekan", count: "4 orang", color: "blue" }
    ]
  },
  8: {
    id: 8,
    name: "Meja 8",
    tier: "KABUPATEN SIDOARJO",
    wing: "Sayap Kiri",
    status: "8 dari 8 Kursi Terisi",
    isUserTable: false,
    note: "Baris ketiga Sayap Kiri dekat lorong utama.",
    parties: [
      { name: "Pemerintah Kabupaten Sidoarjo", role: "Bupati & Forkopimda", count: "4 orang", color: "blue" },
      { name: "Polresta Sidoarjo", role: "Kapolresta & Jajaran", count: "4 orang", color: "blue" }
    ]
  },
  9: {
    id: 9,
    name: "Meja 9",
    tier: "LOGISTIK & TELEKOMUNIKASI",
    wing: "Sayap Kiri",
    status: "8 dari 8 Kursi Terisi",
    isUserTable: false,
    note: "Baris ketiga Sayap Kiri, tengah.",
    parties: [
      { name: "PT Pelabuhan Indonesia (Pelindo Regional 3)", role: "Regional Head & BOD", count: "4 orang", color: "blue" },
      { name: "PT Telkom Indonesia Regional V Jatim", role: "Executive VP", count: "4 orang", color: "blue" }
    ]
  },
  10: {
    id: 10,
    name: "Meja 10",
    tier: "KABUPATEN GRESIK",
    wing: "Sayap Kiri",
    status: "8 dari 8 Kursi Terisi",
    isUserTable: false,
    note: "Baris ketiga Sayap Kiri dekat menara kamera.",
    parties: [
      { name: "Pemerintah Kabupaten Gresik", role: "Bupati & Sekda", count: "4 orang", color: "blue" },
      { name: "DPRD Kabupaten Gresik", role: "Pimpinan Dewan", count: "4 orang", color: "blue" }
    ]
  },
  11: {
    id: 11,
    name: "Meja 11",
    tier: "ENERGI & KETENAGALISTRIKAN",
    wing: "Sayap Kiri",
    status: "8 dari 8 Kursi Terisi",
    isUserTable: false,
    note: "Baris keempat Sayap Kiri dekat lorong tengah.",
    parties: [
      { name: "PT PLN (Persero) UID Jawa Timur", role: "General Manager & SRM", count: "4 orang", color: "blue" },
      { name: "PT Perusahaan Gas Negara (PGN) SOR 3", role: "Area Head", count: "4 orang", color: "blue" }
    ]
  },
  12: {
    id: 12,
    name: "Meja 12",
    tier: "MALANG RAYA",
    wing: "Sayap Kiri",
    status: "8 dari 8 Kursi Terisi",
    isUserTable: false,
    note: "Baris keempat Sayap Kiri.",
    parties: [
      { name: "Pemerintah Kota Malang & Pemkab Malang", role: "Walikota & Bupati", count: "4 orang", color: "blue" },
      { name: "Polresta Malang Kota", role: "Kapolresta & PJU", count: "4 orang", color: "blue" }
    ]
  },
  13: {
    id: 13,
    name: "Meja 13",
    tier: "PERBANKAN NASIONAL",
    wing: "Sayap Kiri",
    status: "8 dari 8 Kursi Terisi",
    isUserTable: false,
    note: "Baris keempat Sayap Kiri.",
    parties: [
      { name: "PT Bank Mandiri (Persero) Region VIII", role: "Regional CEO", count: "4 orang", color: "blue" },
      { name: "PT Bank Rakyat Indonesia (BRI) RO Surabaya", role: "Regional CEO", count: "4 orang", color: "blue" }
    ]
  },
  14: {
    id: 14,
    name: "Meja 14",
    tier: "TOKOH PERS & PWI JAWA TIMUR",
    wing: "Sayap Kiri",
    status: "8 dari 8 Kursi Terisi",
    isUserTable: false,
    note: "Baris keempat Sayap Kiri, tepi barat.",
    parties: [
      { name: "Persatuan Wartawan Indonesia (PWI) Jatim", role: "Ketua & Dewan Kehormatan", count: "4 orang", color: "blue" },
      { name: "Serikat Media Siber Indonesia (SMSI)", role: "Pengurus Wilayah", count: "4 orang", color: "blue" }
    ]
  },
  15: {
    id: 15,
    name: "Meja 15",
    tier: "MOJOKERTO RAYA",
    wing: "Sayap Kiri",
    status: "8 dari 8 Kursi Terisi",
    isUserTable: false,
    note: "Baris kelima Sayap Kiri.",
    parties: [
      { name: "Pemkot & Pemkab Mojokerto", role: "Walikota & Bupati", count: "4 orang", color: "blue" },
      { name: "Korem 082/CPYJ Mojokerto", role: "Danrem & Kasrem", count: "4 orang", color: "blue" }
    ]
  },
  16: {
    id: 16,
    name: "Meja 16",
    tier: "INDUSTRI MANUFAKTUR & TRANSPORTASI",
    wing: "Sayap Kiri",
    status: "8 dari 8 Kursi Terisi",
    isUserTable: false,
    note: "Baris kelima Sayap Kiri.",
    parties: [
      { name: "PT Industri Kereta Api (INKA) Persero", role: "Direksi", count: "4 orang", color: "blue" },
      { name: "PT Kereta Api Indonesia (KAI Daop 8 Surabaya)", role: "Executive VP", count: "4 orang", color: "blue" }
    ]
  },
  17: {
    id: 17,
    name: "Meja 17",
    tier: "PASURUAN RAYA",
    wing: "Sayap Kiri",
    status: "8 dari 8 Kursi Terisi",
    isUserTable: false,
    note: "Baris kelima Sayap Kiri.",
    parties: [
      { name: "Pemkab Pasuruan & Pemkot Pasuruan", role: "Bupati & Walikota", count: "4 orang", color: "blue" },
      { name: "Polres Pasuruan", role: "Kapolres & Staf", count: "4 orang", color: "blue" }
    ]
  },
  18: {
    id: 18,
    name: "Meja 18",
    tier: "ASOSIASI PENGUSAHA & INDUSTRI",
    wing: "Sayap Kiri",
    status: "8 dari 8 Kursi Terisi",
    isUserTable: false,
    note: "Baris keenam (belakang) Sayap Kiri.",
    parties: [
      { name: "Kadin Jawa Timur", role: "Ketua Umum & Wakil Ketua", count: "4 orang", color: "blue" },
      { name: "HIPMI Jawa Timur", role: "Ketua BPD & Pengurus", count: "4 orang", color: "blue" }
    ]
  },
  19: {
    id: 19,
    name: "Meja 19",
    tier: "BOJONEGORO & LAMONGAN",
    wing: "Sayap Kiri",
    status: "8 dari 8 Kursi Terisi",
    isUserTable: false,
    note: "Baris keenam Sayap Kiri.",
    parties: [
      { name: "Pemkab Lamongan & Pemkab Bojonegoro", role: "Pj Bupati & Sekda", count: "4 orang", color: "blue" },
      { name: "Forkopimda Pantai Utara", role: "Pejabat Wilayah", count: "4 orang", color: "blue" }
    ]
  },
  20: {
    id: 20,
    name: "Meja 20",
    tier: "BUDAYAWAN & PENDIDIKAN",
    wing: "Sayap Kiri",
    status: "8 dari 8 Kursi Terisi",
    isUserTable: false,
    note: "Baris keenam Sayap Kiri.",
    parties: [
      { name: "Dewan Kesenian Jawa Timur", role: "Ketua & Seniman Senior", count: "4 orang", color: "blue" },
      { name: "Tokoh Literasi & Pendidikan", role: "Penggerak Pendidikan", count: "4 orang", color: "blue" }
    ]
  },

  // ================= SAYAP KANAN (EAST WING) =================
  21: {
    id: 21,
    name: "Meja 21",
    tier: "VVIP FRONT ROW (SAYAP KANAN)",
    wing: "Sayap Kanan (Dekat Catwalk)",
    status: "8 dari 8 Kursi Terisi",
    isUserTable: false,
    note: "Baris terdepan Sayap Kanan berhadapan langsung dengan Meja 1 melewati catwalk tengah.",
    parties: [
      { name: "Menteri BUMN / Perwakilan Kabinet", role: "Menteri & Staf Khusus", count: "4 orang", color: "gold" },
      { name: "Dewan Direksi Jawa Pos Media Group", role: "Direktur Utama & Direktur Pemberitaan", count: "4 orang", color: "gold" }
    ]
  },
  22: {
    id: 22,
    name: "Meja 22",
    tier: "VIP POLRI & HARKAMTIBMAS",
    wing: "Sayap Kanan",
    status: "8 dari 8 Kursi Terisi",
    isUserTable: false,
    note: "Baris pertama Sayap Kanan.",
    parties: [
      { name: "Kepolisian Daerah Jawa Timur (Polda Jatim)", role: "Kapolda & Wakapolda", count: "4 orang", color: "gold" },
      { name: "Badan Narkotika Nasional Provinsi (BNNP)", role: "Kepala BNNP Jatim", count: "4 orang", color: "blue" }
    ]
  },
  23: {
    id: 23,
    name: "Meja 23",
    tier: "VIP TNI AL & MARITIM",
    wing: "Sayap Kanan",
    status: "8 dari 8 Kursi Terisi",
    isUserTable: false,
    note: "Baris pertama Sayap Kanan, tepi timur.",
    parties: [
      { name: "Komando Armada II (Koarmada II)", role: "Pangkoarmada II & Asisten", count: "4 orang", color: "blue" },
      { name: "Kodiklatal Surabaya", role: "Dankodiklatal & Staf", count: "4 orang", color: "blue" }
    ]
  },
  24: {
    id: 24,
    name: "Meja 24",
    tier: "DEWAN REDAKSI JAWA POS GROUP",
    wing: "Sayap Kanan",
    status: "8 dari 8 Kursi Terisi",
    isUserTable: false,
    note: "Baris kedua Sayap Kanan menghadap lorong tengah.",
    parties: [
      { name: "Pemimpin Redaksi Jawa Pos", role: "Pemred & Redaktur Eksekutif", count: "4 orang", color: "gold" },
      { name: "Redaktur Senior & Kolumnis Tamu", role: "Wartawan Utama", count: "4 orang", color: "blue" }
    ]
  },
  25: {
    id: 25,
    name: "Meja 25",
    tier: "SEKRETARIAT DAERAH PROVINSI JATIM",
    wing: "Sayap Kanan",
    status: "8 dari 8 Kursi Terisi",
    isUserTable: false,
    note: "Baris kedua Sayap Kanan.",
    parties: [
      { name: "Sekda Provinsi Jawa Timur", role: "Sekdaprov & Para Asisten", count: "4 orang", color: "blue" },
      { name: "Bappeda Jawa Timur", role: "Kepala Bappeda & Tim Ahli", count: "4 orang", color: "blue" }
    ]
  },
  26: {
    id: 26,
    name: "Meja 26",
    tier: "KORPORASI FMCG & AGRIBISNIS",
    wing: "Sayap Kanan",
    status: "8 dari 8 Kursi Terisi",
    isUserTable: false,
    note: "Baris kedua Sayap Kanan.",
    parties: [
      { name: "PT Gudang Garam Tbk", role: "Direksi & Corporate Secretary", count: "4 orang", color: "blue" },
      { name: "PT Djarum Indonesia Regional Jatim", role: "Head of Regional", count: "4 orang", color: "blue" }
    ]
  },
  27: {
    id: 27,
    name: "Meja 27",
    tier: "AKADEMISI & RISET INOVASI",
    wing: "Sayap Kanan",
    status: "8 dari 8 Kursi Terisi",
    isUserTable: false,
    note: "Baris kedua Sayap Kanan, tepi timur.",
    parties: [
      { name: "Universitas Brawijaya (UB Malang)", role: "Rektor & Senat Akademik", count: "4 orang", color: "blue" },
      { name: "UIN Sunan Ampel Surabaya", role: "Rektor & Dekan", count: "4 orang", color: "blue" }
    ]
  },
  28: {
    id: 28,
    name: "Meja 28",
    tier: "TAPAL KUDA & BANYUWANGI",
    wing: "Sayap Kanan",
    status: "8 dari 8 Kursi Terisi",
    isUserTable: false,
    note: "Baris ketiga Sayap Kanan dekat lorong.",
    parties: [
      { name: "Pemkab Banyuwangi & Pemkab Jember", role: "Bupati & Kadiskominfo", count: "4 orang", color: "blue" },
      { name: "Forkopimda Wilayah Besuki", role: "Pejabat Daerah", count: "4 orang", color: "blue" }
    ]
  },
  29: {
    id: 29,
    name: "Meja 29",
    tier: "OTOMOTIF & ENERGI REGIONAL",
    wing: "Sayap Kanan",
    status: "8 dari 8 Kursi Terisi",
    isUserTable: false,
    note: "Baris ketiga Sayap Kanan, tengah.",
    parties: [
      { name: "PT Astra International Tbk Jatim", role: "Chief Operation Officer", count: "4 orang", color: "blue" },
      { name: "PT Pertamina Patra Niaga Jatimbalinus", role: "Executive GM", count: "4 orang", color: "blue" }
    ]
  },
  30: {
    id: 30,
    name: "Meja 30",
    tier: "KEDIRI RAYA",
    wing: "Sayap Kanan",
    status: "8 dari 8 Kursi Terisi",
    isUserTable: false,
    note: "Baris ketiga Sayap Kanan dekat Stand Kamera 2.",
    parties: [
      { name: "Pemkab Kediri & Pemkot Kediri", role: "Bupati & Walikota", count: "4 orang", color: "blue" },
      { name: "Polres Kediri Kota", role: "Kapolres & Staf", count: "4 orang", color: "blue" }
    ]
  },
  31: {
    id: 31,
    name: "Meja 31",
    tier: "PERBANKAN SWASTA NASIONAL",
    wing: "Sayap Kanan",
    status: "8 dari 8 Kursi Terisi",
    isUserTable: false,
    note: "Baris keempat Sayap Kanan dekat lorong tengah.",
    parties: [
      { name: "PT Bank Central Asia (BCA) Kanwil Jatim", role: "Kepala Kantor Wilayah", count: "4 orang", color: "blue" },
      { name: "PT Bank Danamon Indonesia Tbk", role: "Regional Head", count: "4 orang", color: "blue" }
    ]
  },
  32: {
    id: 32,
    name: "Meja 32",
    tier: "MADIUN RAYA",
    wing: "Sayap Kanan",
    status: "8 dari 8 Kursi Terisi",
    isUserTable: false,
    note: "Baris keempat Sayap Kanan.",
    parties: [
      { name: "Pemkot Madiun & Pemkab Madiun", role: "Walikota & Bupati", count: "4 orang", color: "blue" },
      { name: "Bakorwil Madiun", role: "Kepala Bakorwil & Staf", count: "4 orang", color: "blue" }
    ]
  },
  33: {
    id: 33,
    name: "Meja 33",
    tier: "LEMBAGA JAMINAN SOSIAL & FINANSIAL",
    wing: "Sayap Kanan",
    status: "8 dari 8 Kursi Terisi",
    isUserTable: false,
    note: "Baris keempat Sayap Kanan.",
    parties: [
      { name: "BPJS Ketenagakerjaan Kantor Wilayah Jatim", role: "Kakanwil & Deputi", count: "4 orang", color: "blue" },
      { name: "Otoritas Jasa Keuangan (OJK) Regional 4 Jatim", role: "Kepala OJK & Direktur", count: "4 orang", color: "blue" }
    ]
  },
  34: {
    id: 34,
    name: "Meja 34",
    tier: "PENYIARAN & TELEKOMUNIKASI REGULATOR",
    wing: "Sayap Kanan",
    status: "8 dari 8 Kursi Terisi",
    isUserTable: false,
    note: "Baris keempat Sayap Kanan, tepi timur.",
    parties: [
      { name: "Komisi Penyiaran Indonesia Daerah (KPID) Jatim", role: "Ketua & Komisioner", count: "4 orang", color: "blue" },
      { name: "Dinas Kominfo Provinsi Jawa Timur", role: "Kadis Kominfo & Kabid", count: "4 orang", color: "blue" }
    ]
  },
  35: {
    id: 35,
    name: "Meja 35",
    tier: "TUBAN & BLITAR RAYA",
    wing: "Sayap Kanan",
    status: "8 dari 8 Kursi Terisi",
    isUserTable: false,
    note: "Baris kelima Sayap Kanan.",
    parties: [
      { name: "Pemkab Tuban & Pemkab Blitar", role: "Bupati & Sekda", count: "4 orang", color: "blue" },
      { name: "Forkopimda Wilayah Selatan", role: "Pejabat Daerah", count: "4 orang", color: "blue" }
    ]
  },
  36: {
    id: 36,
    name: "Meja 36",
    tier: "INDUSTRI PUPUK & PERTANIAN",
    wing: "Sayap Kanan",
    status: "8 dari 8 Kursi Terisi",
    isUserTable: false,
    note: "Baris kelima Sayap Kanan.",
    parties: [
      { name: "PT Pupuk Indonesia (Persero)", role: "SVP Penjualan Wilayah", count: "4 orang", color: "blue" },
      { name: "Dinas Pertanian & Ketahanan Pangan Jatim", role: "Kadis & Tim Teknis", count: "4 orang", color: "blue" }
    ]
  },
  37: {
    id: 37,
    name: "Meja 37",
    tier: "PROBOLINGGO & PARIWISATA BROMO",
    wing: "Sayap Kanan",
    status: "8 dari 8 Kursi Terisi",
    isUserTable: false,
    note: "Baris kelima Sayap Kanan.",
    parties: [
      { name: "Pemkab & Pemkot Probolinggo", role: "Pj Bupati & Walikota", count: "4 orang", color: "blue" },
      { name: "Balai Besar TN Bromo Tengger Semeru", role: "Kepala Balai & Staf", count: "4 orang", color: "blue" }
    ]
  },
  38: {
    id: 38,
    name: "Meja 38",
    tier: "FILANTROPI & YAYASAN CSR",
    wing: "Sayap Kanan",
    status: "8 dari 8 Kursi Terisi",
    isUserTable: false,
    note: "Baris keenam (belakang) Sayap Kanan.",
    parties: [
      { name: "Yayasan Peduli Jawa Timur", role: "Ketua Pengurus & Mitra", count: "4 orang", color: "blue" },
      { name: "Forum CSR Korporasi Jatim", role: "Koordinator Program", count: "4 orang", color: "blue" }
    ]
  },
  39: {
    id: 39,
    name: "Meja 39",
    tier: "MADURA RAYA (PAMEKASAN, SUMENEP, SAMPANG, BANGKALAN)",
    wing: "Sayap Kanan",
    status: "8 dari 8 Kursi Terisi",
    isUserTable: false,
    note: "Baris keenam Sayap Kanan.",
    parties: [
      { name: "Pemkab Wilayah Madura Raya", role: "Bupati Pamekasan & Sumenep", count: "4 orang", color: "blue" },
      { name: "Bakorwil Pamekasan", role: "Kepala Badan & Staf", count: "4 orang", color: "blue" }
    ]
  },
  40: {
    id: 40,
    name: "Meja 40",
    tier: "KONI & ATLET BERPRESTASI JAWA TIMUR",
    wing: "Sayap Kanan",
    status: "8 dari 8 Kursi Terisi",
    isUserTable: false,
    note: "Baris keenam Sayap Kanan.",
    parties: [
      { name: "KONI Provinsi Jawa Timur", role: "Ketua Umum & Pengurus", count: "4 orang", color: "gold" },
      { name: "Atlet Peraih Medali Emas PON & Internasional", role: "Atlet Kehormatan", count: "4 orang", color: "blue" }
    ]
  }
};

// 1. Select and Highlight Table in Ballroom Floor Plan
let currentSelectedTableId = 1;

function selectBallroomTable(tableId) {
  currentSelectedTableId = tableId;

  // 1. Remove active state from all nodes
  document.querySelectorAll('.interactive-table').forEach(node => {
    node.classList.remove('active');
  });

  // 2. Add active state to clicked node
  const selectedNode = document.getElementById(`tableNode-${tableId}`);
  if (selectedNode) {
    selectedNode.classList.add('active');
  }

  // 3. Dim other tables to make selected table pop visually
  document.querySelectorAll('.interactive-table').forEach(node => {
    if (node.id === `tableNode-${tableId}`) {
      node.style.opacity = '1';
    } else {
      node.style.opacity = '0.72';
    }
  });

  // 4. Update Inspector Card
  const data = BALLROOM_TABLES_DATA[tableId];
  if (!data) return;

  const nameEl = document.getElementById('inspTableName');
  const tagsEl = document.getElementById('inspTags');
  const partyListEl = document.getElementById('inspPartyList');
  const noteEl = document.querySelector('.detail-note span');

  if (nameEl) nameEl.textContent = data.name;
  
  if (tagsEl) {
    const isUser = data.isUserTable;
    tagsEl.innerHTML = `
      <span class="tag-badge-gold" style="${!isUser ? 'background: rgba(223, 168, 55, 0.08); border-color: rgba(223, 168, 55, 0.35); color: #dfa837;' : ''}">
        ${isUser ? 'â˜… Meja Anda (VVIP)' : data.tier}
      </span>
      <span class="tag-badge-seat">${data.status}</span>
    `;
  }

  if (partyListEl) {
    partyListEl.innerHTML = data.parties.map(p => `
      <li class="party-item ${p.color === 'gold' ? 'primary-highlight' : ''}">
        <div class="party-info">
          <span class="party-dot ${p.color}"></span>
          <strong>${p.name}</strong>
        </div>
        <div class="party-sub-row">
          <span class="party-role">${p.role}</span>
          <span class="party-count">${p.count}</span>
        </div>
      </li>
    `).join('');
  }

  if (noteEl) {
    noteEl.textContent = `${data.wing} Â· ${data.note}`;
  }
}

// 2. Center and Highlight Table 1 (Meja Anda)
function centerOnMyTable() {
  selectBallroomTable(1);
  const table1 = document.getElementById('tableNode-1');
  if (table1) {
    table1.scrollIntoView({ behavior: 'smooth', block: 'center' });
    showToast("Meja 1 VVIP (Ibu Gubernur Jatim) disorot di baris depan dekat catwalk.");
  }
}

// 3. Search and Highlight Table by Guest Name, Agency, or Table Number
function filterBallroomSearch() {
  const inputEl = document.getElementById('guestSearchInput');
  if (!inputEl) return;
  const query = inputEl.value.toLowerCase().trim();

  if (!query) {
    // Reset opacity
    document.querySelectorAll('.interactive-table').forEach(node => {
      node.style.opacity = '1';
    });
    return;
  }

  // Find matching tables
  let firstMatch = null;
  for (let id = 1; id <= 40; id++) {
    const data = BALLROOM_TABLES_DATA[id];
    const node = document.getElementById(`tableNode-${id}`);
    if (!data || !node) continue;

    const matchesName = data.name.toLowerCase().includes(query);
    const matchesTier = data.tier.toLowerCase().includes(query);
    const matchesParty = data.parties.some(p => 
      p.name.toLowerCase().includes(query) || 
      p.role.toLowerCase().includes(query)
    );

    if (matchesName || matchesTier || matchesParty) {
      node.style.opacity = '1';
      if (!firstMatch) firstMatch = id;
    } else {
      node.style.opacity = '0.25';
    }
  }

  if (firstMatch) {
    selectBallroomTable(firstMatch);
  }
}

// 4. Directory Modal: Browse all 40 tables & guests
function openGuestDirectoryModal() {
  const modal = document.getElementById('guestDirectoryModal');
  if (modal) {
    modal.classList.remove('hidden');
    renderDirectoryList('');
  }
}

function closeGuestDirectoryModal() {
  const modal = document.getElementById('guestDirectoryModal');
  if (modal) modal.classList.add('hidden');
}

function renderDirectoryList(filterQuery) {
  const container = document.getElementById('directoryCardsGrid');
  if (!container) return;

  const q = filterQuery.toLowerCase();
  let html = '';

  for (let id = 1; id <= 40; id++) {
    const data = BALLROOM_TABLES_DATA[id];
    if (!data) continue;

    const matches = !q || 
      data.name.toLowerCase().includes(q) || 
      data.tier.toLowerCase().includes(q) ||
      data.parties.some(p => p.name.toLowerCase().includes(q) || p.role.toLowerCase().includes(q));

    if (!matches) continue;

    html += `
      <div class="dir-table-card ${data.isUserTable ? 'is-user' : ''}" onclick="jumpToTableFromDirectory(${id})">
        <div class="dir-card-header">
          <div class="dir-card-num-box">
            <span class="dir-num">${data.id}</span>
          </div>
          <div class="dir-card-title-col">
            <div class="dir-title-row">
              <strong class="dir-table-title">${data.name}</strong>
              ${data.isUserTable ? '<span class="badge-mini-gold">MEJA ANDA</span>' : ''}
            </div>
            <span class="dir-tier">${data.tier}</span>
          </div>
        </div>
        <ul class="dir-party-mini-list">
          ${data.parties.map(p => `
            <li>
              <span class="bullet-dot ${p.color}"></span>
              <span class="p-name">${p.name}</span>
            </li>
          `).join('')}
        </ul>
        <div class="dir-card-footer">
          <span>${data.wing}</span>
          <span class="dir-action-hint">Lihat di Denah &rarr;</span>
        </div>
      </div>
    `;
  }

  container.innerHTML = html || '<p class="dir-empty-msg">Tidak ada meja atau tamu yang cocok dengan pencarian.</p>';
}

function filterDirectoryModal() {
  const input = document.getElementById('modalDirSearchInput');
  if (input) {
    renderDirectoryList(input.value);
  }
}

function jumpToTableFromDirectory(tableId) {
  closeGuestDirectoryModal();
  selectBallroomTable(tableId);
  const targetNode = document.getElementById(`tableNode-${tableId}`);
  if (targetNode) {
    targetNode.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
  const data = BALLROOM_TABLES_DATA[tableId];
  showToast(`Menampilkan posisi ${data.name} (${data.tier}) di denah.`);
}

// 5. Kiosk Seat Attendance Checklist
function toggleKioskSeat(btn, seatNumber) {
  const isOn = btn.classList.toggle('on');
  btn.classList.toggle('off', !isOn);
  
  const statusBadge = btn.querySelector('.seat-badge-status');
  if (statusBadge) {
    statusBadge.textContent = isOn ? 'hadir' : 'belum';
  }

  updateKioskAttendanceSummary();
}

function updateKioskAttendanceSummary() {
  const allSeatBtns = document.querySelectorAll('.kiosk-seat-btn');
  const activeCount = document.querySelectorAll('.kiosk-seat-btn.on').length;
  const total = allSeatBtns.length;

  const countEl = document.getElementById('presentCount');
  const noteEl = document.getElementById('counterStatusNote');

  if (countEl) countEl.textContent = activeCount;
  if (noteEl) {
    if (activeCount === total) {
      noteEl.textContent = "Semua ditandai hadir";
      noteEl.style.color = "var(--brass-light)";
    } else {
      noteEl.textContent = `${activeCount} dari ${total} orang terkonfirmasi hadir`;
      noteEl.style.color = "var(--brass-soft)";
    }
  }
}

function markAllPresent() {
  document.querySelectorAll('.kiosk-seat-btn').forEach(btn => {
    btn.classList.add('on');
    btn.classList.remove('off');
    const badge = btn.querySelector('.seat-badge-status');
    if (badge) badge.textContent = 'hadir';
  });
  updateKioskAttendanceSummary();
  simulateScanSound();
  showToast("Semua kursi delegasi (3/3) ditandai hadir.");
}

function printGuestBadge() {
  showToast("Mencetak ID Badge untuk tamu Meja 1...");
}

function resetCheckinDemo() {
  document.querySelectorAll('.kiosk-seat-btn').forEach(btn => {
    btn.classList.add('on');
    btn.classList.remove('off');
    const badge = btn.querySelector('.seat-badge-status');
    if (badge) badge.textContent = 'hadir';
  });
  updateKioskAttendanceSummary();
  showToast("Status simulasi check-in direset.");
}

// 6. Web Audio API Scanner Bip
function simulateScanSound() {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, audioCtx.currentTime);
    gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.18);

    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.18);
  } catch (e) {
    console.log("AudioContext simulation:", e);
  }
}

// 7. Form RSVP & Protokol
function handleMessageSubmit(e) {
  e.preventDefault();
  const alertEl = document.getElementById('rsvpAlertSuccess');
  const btn = document.getElementById('btnSubmitMessage');

  if (alertEl) {
    alertEl.classList.remove('hidden');
    if (btn) {
      btn.disabled = true;
      btn.style.opacity = '0.6';
    }
    showToast("Pesan permohonan berhasil dikirim ke protokol panitia.");
  }
}

function downloadQRCode() {
  showToast("Kartu masuk elektronik (E-Ticket) disimpan ke perangkat Anda.");
}

// 8. Kiosk Search Modal
function openSearchModal() {
  const modal = document.getElementById('searchModal');
  if (modal) {
    modal.classList.remove('hidden');
    const input = document.getElementById('manualSearchInput');
    if (input) setTimeout(() => input.focus(), 100);
  }
}

function closeSearchModal(event) {
  const modal = document.getElementById('searchModal');
  if (modal) modal.classList.add('hidden');
}

function selectSearchGuest(name, tableNum) {
  closeSearchModal();
  showToast(`Tamu terpilih: ${name} (Meja ${tableNum}). Memuat detail...`);
  simulateScanSound();
}

function filterGuestTable() {
  const inputEl = document.getElementById('manualSearchInput');
  if (!inputEl) return;
  const val = inputEl.value.toLowerCase();
  const items = document.querySelectorAll('.search-result-item');
  items.forEach(item => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(val) ? 'flex' : 'none';
  });
}

// 9. Toast Helper
let toastTimer = null;
function showToast(message) {
  const toast = document.getElementById('toastBox');
  const text = document.getElementById('toastMessage');
  if (!toast || !text) return;

  text.textContent = message;
  toast.classList.remove('hidden');

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.add('hidden');
  }, 3200);
}

// 10. Live Clock
function updateLiveClock() {
  const timeEl = document.getElementById('liveTimestamp');
  if (timeEl) {
    const now = new Date();
    const hrs = String(now.getHours()).padStart(2, '0');
    const mins = String(now.getMinutes()).padStart(2, '0');
    const secs = String(now.getSeconds()).padStart(2, '0');
    timeEl.textContent = `${hrs}:${mins}:${secs} WIB`;
  }
}

setInterval(updateLiveClock, 1000);
updateLiveClock();

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  selectBallroomTable(1);
});

