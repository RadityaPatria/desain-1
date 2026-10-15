/**
 * JAWAPOS AWARDS 2026 — DESAIN 2 CLIENT ENGINE (VIP COCKPIT)
 * Handles Split-Screen Interactive Explorer, Category Filter Pills,
 * Touchscreen Kiosk, and Web Audio API Chime.
 */

const COCKPIT_BALLROOM_DB = {
  1: {
    id: 1,
    name: "Meja 1",
    tier: "VVIP FRONT ROW (SAYAP KIRI)",
    wing: "Sayap Kiri (Dekat Catwalk)",
    category: "vvip",
    status: "8 dari 8 Kursi Terisi",
    isUserTable: true,
    note: "Posisi terdepan paling terhormat, menghadap langsung panggung utama dan catwalk tengah.",
    parties: [
      { name: "Ibu Gubernur Jawa Timur (Dra. Hj. Sulastri Hadiningrat)", role: "Tamu Utama", count: "1 orang", color: "gold" },
      { name: "Siti Rahmawati", role: "Staf Protokol Gubernur", count: "1 orang", color: "blue" },
      { name: "Pendamping 3 & Pendamping 4", role: "Ajudan / ADC Delegasi", count: "2 orang", color: "blue" },
      { name: "Polda Gresik & Mitra Forkopimda", role: "Kapolres & Jajaran PJU", count: "4 orang", color: "gold" }
    ]
  },
  2: {
    id: 2,
    name: "Meja 2",
    tier: "VIP UTAMA (SAYAP KIRI)",
    wing: "Sayap Kiri",
    category: "vvip",
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
    category: "vvip",
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
    category: "bumn",
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
    category: "vvip",
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
    category: "bumn",
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
    category: "pers",
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
    category: "vvip",
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
    category: "bumn",
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
    category: "vvip",
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
    category: "bumn",
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
    category: "vvip",
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
    category: "bumn",
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
    category: "pers",
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
    category: "vvip",
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
    category: "bumn",
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
    category: "vvip",
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
    category: "bumn",
    status: "8 dari 8 Kursi Terisi",
    isUserTable: false,
    note: "Baris keenam Sayap Kiri.",
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
    category: "vvip",
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
    category: "pers",
    status: "8 dari 8 Kursi Terisi",
    isUserTable: false,
    note: "Baris keenam Sayap Kiri.",
    parties: [
      { name: "Dewan Kesenian Jawa Timur", role: "Ketua & Seniman Senior", count: "4 orang", color: "blue" },
      { name: "Tokoh Literasi & Pendidikan", role: "Penggerak Pendidikan", count: "4 orang", color: "blue" }
    ]
  },

  // SAYAP KANAN
  21: {
    id: 21,
    name: "Meja 21",
    tier: "VVIP FRONT ROW (SAYAP KANAN)",
    wing: "Sayap Kanan (Dekat Catwalk)",
    category: "vvip",
    status: "8 dari 8 Kursi Terisi",
    isUserTable: false,
    note: "Baris terdepan Sayap Kanan berhadapan langsung dengan Meja 1.",
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
    category: "vvip",
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
    category: "vvip",
    status: "8 dari 8 Kursi Terisi",
    isUserTable: false,
    note: "Baris pertama Sayap Kanan.",
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
    category: "pers",
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
    category: "vvip",
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
    category: "bumn",
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
    category: "pers",
    status: "8 dari 8 Kursi Terisi",
    isUserTable: false,
    note: "Baris kedua Sayap Kanan.",
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
    category: "vvip",
    status: "8 dari 8 Kursi Terisi",
    isUserTable: false,
    note: "Baris ketiga Sayap Kanan.",
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
    category: "bumn",
    status: "8 dari 8 Kursi Terisi",
    isUserTable: false,
    note: "Baris ketiga Sayap Kanan.",
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
    category: "vvip",
    status: "8 dari 8 Kursi Terisi",
    isUserTable: false,
    note: "Baris ketiga Sayap Kanan.",
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
    category: "bumn",
    status: "8 dari 8 Kursi Terisi",
    isUserTable: false,
    note: "Baris keempat Sayap Kanan.",
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
    category: "vvip",
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
    category: "bumn",
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
    category: "pers",
    status: "8 dari 8 Kursi Terisi",
    isUserTable: false,
    note: "Baris keempat Sayap Kanan.",
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
    category: "vvip",
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
    category: "bumn",
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
    category: "vvip",
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
    category: "pers",
    status: "8 dari 8 Kursi Terisi",
    isUserTable: false,
    note: "Baris keenam Sayap Kanan.",
    parties: [
      { name: "Yayasan Peduli Jawa Timur", role: "Ketua Pengurus & Mitra", count: "4 orang", color: "blue" },
      { name: "Forum CSR Korporasi Jatim", role: "Koordinator Program", count: "4 orang", color: "blue" }
    ]
  },
  39: {
    id: 39,
    name: "Meja 39",
    tier: "MADURA RAYA",
    wing: "Sayap Kanan",
    category: "vvip",
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
    category: "pers",
    status: "8 dari 8 Kursi Terisi",
    isUserTable: false,
    note: "Baris keenam Sayap Kanan.",
    parties: [
      { name: "KONI Provinsi Jawa Timur", role: "Ketua Umum & Pengurus", count: "4 orang", color: "gold" },
      { name: "Atlet Peraih Medali Emas PON & Internasional", role: "Atlet Kehormatan", count: "4 orang", color: "blue" }
    ]
  }
};

// 1. Select Table in Cockpit
function selectCockpitTable(tableId) {
  document.querySelectorAll('.cockpit-table').forEach(n => n.classList.remove('active'));

  const activeNode = document.getElementById(`nodeTable-${tableId}`);
  if (activeNode) {
    activeNode.classList.add('active');
  }

  // Dim other tables
  document.querySelectorAll('.cockpit-table').forEach(n => {
    if (n.id === `nodeTable-${tableId}`) {
      n.style.opacity = '1';
    } else {
      n.style.opacity = '0.72';
    }
  });

  const data = COCKPIT_BALLROOM_DB[tableId];
  if (!data) return;

  const numBox = document.getElementById('dockNumBox');
  const tierBadge = document.getElementById('dockTierBadge');
  const seatCount = document.getElementById('dockSeatCount');
  const tableName = document.getElementById('dockTableName');
  const wingLabel = document.getElementById('dockWingLabel');
  const grid = document.getElementById('dockDelegationGrid');

  if (numBox) numBox.textContent = data.id;
  if (tierBadge) {
    tierBadge.textContent = data.isUserTable ? '★ MEJA ANDA (VVIP)' : data.tier;
    tierBadge.style.color = data.isUserTable ? 'var(--brass-soft)' : '#a3cbef';
  }
  if (seatCount) seatCount.textContent = data.status;
  if (tableName) tableName.textContent = data.name;
  if (wingLabel) wingLabel.textContent = `${data.wing} · ${data.note}`;

  if (grid) {
    grid.innerHTML = data.parties.map(p => `
      <div class="dock-party-tile ${p.color === 'gold' ? 'featured' : ''}">
        <div class="tile-party-header">
          <span class="tile-party-dot ${p.color}"></span>
          <strong class="tile-party-name">${p.name}</strong>
        </div>
        <div class="tile-party-meta">
          <span>${p.role}</span>
          <span style="color:var(--brass-soft);font-weight:700;">${p.count}</span>
        </div>
      </div>
    `).join('');
  }
}

// 2. Focus Table 1
function focusMyTable() {
  selectCockpitTable(1);
  const target = document.getElementById('nodeTable-1');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    showToast("Meja 1 VVIP (Ibu Gubernur Jatim) disorot di dekat catwalk.");
  }
}

// 3. Category Filter Pills
function filterCategory(categoryKey, btn) {
  document.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  for (let id = 1; id <= 40; id++) {
    const data = COCKPIT_BALLROOM_DB[id];
    const node = document.getElementById(`nodeTable-${id}`);
    if (!data || !node) continue;

    if (categoryKey === 'all' || data.category === categoryKey || (categoryKey === 'vvip' && data.isUserTable)) {
      node.style.opacity = '1';
    } else {
      node.style.opacity = '0.22';
    }
  }

  showToast(`Menampilkan kategori: ${btn.textContent}`);
}

// 4. Live Search in Canvas
function handleLiveSearch(query) {
  const q = query.toLowerCase().trim();
  if (!q) {
    document.querySelectorAll('.cockpit-table').forEach(n => n.style.opacity = '1');
    return;
  }

  let firstFound = null;
  for (let id = 1; id <= 40; id++) {
    const data = COCKPIT_BALLROOM_DB[id];
    const node = document.getElementById(`nodeTable-${id}`);
    if (!data || !node) continue;

    const matches = data.name.toLowerCase().includes(q) ||
                    data.tier.toLowerCase().includes(q) ||
                    data.parties.some(p => p.name.toLowerCase().includes(q) || p.role.toLowerCase().includes(q));

    if (matches) {
      node.style.opacity = '1';
      if (!firstFound) firstFound = id;
    } else {
      node.style.opacity = '0.2';
    }
  }

  if (firstFound) {
    selectCockpitTable(firstFound);
  }
}

// 5. Directory Modal Handlers
function openDirectoryModal() {
  const modal = document.getElementById('directoryModal');
  if (modal) {
    modal.classList.remove('hidden');
    renderCockpitDirectory('');
  }
}

function closeDirectoryModal() {
  const modal = document.getElementById('directoryModal');
  if (modal) modal.classList.add('hidden');
}

function renderCockpitDirectory(query) {
  const grid = document.getElementById('cockpitDirGrid');
  if (!grid) return;

  const q = query.toLowerCase();
  let html = '';

  for (let id = 1; id <= 40; id++) {
    const data = COCKPIT_BALLROOM_DB[id];
    if (!data) continue;

    const matches = !q ||
      data.name.toLowerCase().includes(q) ||
      data.tier.toLowerCase().includes(q) ||
      data.parties.some(p => p.name.toLowerCase().includes(q) || p.role.toLowerCase().includes(q));

    if (!matches) continue;

    html += `
      <div class="dir-card-item ${data.isUserTable ? 'is-meja1' : ''}" onclick="jumpFromDir(${id})">
        <div class="d-top">
          <div class="d-num-badge">${data.id}</div>
          <div>
            <strong class="d-title">${data.name}</strong>
            <span class="d-tier">${data.tier}</span>
          </div>
        </div>
        <div class="d-party-list">
          ${data.parties.map(p => `<span>• ${p.name}</span>`).join('')}
        </div>
      </div>
    `;
  }

  grid.innerHTML = html || '<p style="color:var(--text-muted);text-align:center;grid-column:1/-1;">Tidak ada hasil.</p>';
}

function filterModalDirectory(val) {
  renderCockpitDirectory(val);
}

function jumpFromDir(tableId) {
  closeDirectoryModal();
  selectCockpitTable(tableId);
  const target = document.getElementById(`nodeTable-${tableId}`);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

// 6. Protocol Drawer
function openProtocolDrawer() {
  const m = document.getElementById('protocolModal');
  if (m) m.classList.remove('hidden');
}

function closeProtocolDrawer() {
  const m = document.getElementById('protocolModal');
  if (m) m.classList.add('hidden');
}

function handleProtocolSubmit(e) {
  e.preventDefault();
  const alert = document.getElementById('protocolSuccessAlert');
  const btn = document.getElementById('btnProtocolSend');
  if (alert) alert.classList.remove('hidden');
  if (btn) btn.disabled = true;
  showToast("Catatan protokol tersimpan ke sistem.");
}

function downloadQRCode() {
  showToast("E-Ticket disimpan ke perangkat.");
}

// 7. Kiosk Tablet Check-in Logic
function toggleKioskSeat(btn, seatNum) {
  const on = btn.classList.toggle('on');
  btn.classList.toggle('off', !on);
  const badge = btn.querySelector('.st-badge');
  if (badge) badge.textContent = on ? 'hadir' : 'belum';

  const total = document.querySelectorAll('.seat-touch-tile').length;
  const count = document.querySelectorAll('.seat-touch-tile.on').length;
  const countEl = document.getElementById('presentCount');
  const noteEl = document.getElementById('counterNote');

  if (countEl) countEl.textContent = count;
  if (noteEl) {
    noteEl.textContent = count === total ? "Semua ditandai hadir" : `${count} dari ${total} orang hadir`;
  }
}

function markAllPresent() {
  document.querySelectorAll('.seat-touch-tile').forEach(btn => {
    btn.classList.add('on');
    btn.classList.remove('off');
    const b = btn.querySelector('.st-badge');
    if (b) b.textContent = 'hadir';
  });
  const countEl = document.getElementById('presentCount');
  const noteEl = document.getElementById('counterNote');
  if (countEl) countEl.textContent = 4;
  if (noteEl) noteEl.textContent = "Semua ditandai hadir";
  simulateScanSound();
  showToast("Semua kursi delegasi ditandai hadir.");
}

function printGuestBadge() {
  showToast("Mengirim cetak ID Badge ke printer lobi...");
}

function resetCheckinDemo() {
  markAllPresent();
  showToast("Status simulasi direset.");
}

function simulateScanSound() {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, audioCtx.currentTime);
    gain.gain.setValueAtTime(0.14, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.18);

    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.18);
  } catch (e) {
    console.log(e);
  }
}

function openKioskSearchModal() {
  const m = document.getElementById('kioskSearchModal');
  if (m) m.classList.remove('hidden');
}

function closeKioskSearchModal() {
  const m = document.getElementById('kioskSearchModal');
  if (m) m.classList.add('hidden');
}

function selectSearchGuest(name, tableNum) {
  closeKioskSearchModal();
  showToast(`Tamu terpilih: ${name} (Meja ${tableNum})`);
  simulateScanSound();
}

function filterKioskSearch(val) {
  const q = val.toLowerCase();
  document.querySelectorAll('.search-touch-item').forEach(item => {
    item.style.display = item.textContent.toLowerCase().includes(q) ? 'flex' : 'none';
  });
}

// 8. Toast Helper
let tTimer = null;
function showToast(msg) {
  const toast = document.getElementById('cockpitToast');
  const content = document.getElementById('toastContent');
  if (!toast || !content) return;

  content.textContent = msg;
  toast.classList.remove('hidden');

  clearTimeout(tTimer);
  tTimer = setTimeout(() => {
    toast.classList.add('hidden');
  }, 3200);
}

// 9. Live Clock
function updateClock() {
  const c = document.getElementById('kioskClock');
  if (c) {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');
    c.textContent = `${h}:${m}:${s} WIB`;
  }
}

setInterval(updateClock, 1000);
updateClock();

// Initialize Table 1
document.addEventListener('DOMContentLoaded', () => {
  selectCockpitTable(1);
});
