export interface GuestSeat {
  seat: number;
  name: string;
  role: string;
  confirmed: boolean;
  dietary?: string;
}

export interface TableItem {
  id: number;
  name: string;
  tier: string;
  category: "vvip" | "bumn" | "media" | "pemda";
  wing: "left" | "right";
  x: number;
  y: number;
  status: string;
  note: string;
  isUserTable: boolean;
  institution: string;
  guests: GuestSeat[];
}

export const RUN_OF_SHOW = [
  { time: "17.00 - 18.00", title: "Registrasi & Red Carpet Arrival", desc: "Penyambutan tamu di Lobi Utama Grand Ballroom Hotel Surabaya, alunan chamber gamelan & welcome mocktail." },
  { time: "18.00 - 18.15", title: "Prosesi Kehadiran VVIP & Lagu Indonesia Raya", desc: "Ibu Gubernur Jawa Timur beserta jajaran Forkopimda memasuki ruang perjamuan (Meja 1 VVIP)." },
  { time: "18.15 - 18.30", title: "Tari Kolosal 'Surabaya Gemilang'", desc: "Pertunjukan seni tari kontemporer Jawa Timur dengan pencahayaan panggung penganugerahan megah." },
  { time: "18.30 - 18.45", title: "Sambutan Direktur Utama Jawa Pos Media", desc: "Laporan dewan juri independen dan pembukaan resmi malam penganugerahan tahunan." },
  { time: "18.45 - 19.15", title: "Gala Dinner — Perjamuan Santap Malam", desc: "Sajian kuliner nusantara bintang lima kurasi istimewa untuk seluruh tamu undangan." },
  { time: "19.15 - 19.45", title: "Keynote Address: Ibu Gubernur Jawa Timur", desc: "Pidato kebangsaan dan arah transformasi pembangunan Jawa Timur Berkelanjutan." },
  { time: "19.45 - 21.30", title: "Penganugerahan Trofi JawaPos Awards 2026", desc: "Penyerahan trofi kategori Tokoh Pemerintahan, Inovasi Pelayanan Publik, BUMN/BUMD, dan Penggerak Kemajuan." },
  { time: "21.30 - 22.00", title: "Foto Kehormatan & Konferensi Pers", desc: "Sesi dokumentasi kenegaraan bersama para pemenang dan penutupan acara." }
];

export const TABLES_DATA: TableItem[] = [
  // ======================= LEFT WING (20 TABLES) =======================
  // Row 1 (y=80)
  {
    id: 1,
    name: "Meja 1",
    tier: "VVIP FRONT ROW (PRESIDIUM)",
    category: "vvip",
    wing: "left",
    x: 180,
    y: 80,
    status: "8 dari 8 Kursi Terisi",
    note: "Posisi terdepan paling terhormat menghadap langsung panggung utama dan catwalk persembahan.",
    isUserTable: true,
    institution: "Pemerintah Provinsi Jawa Timur",
    guests: [
      { seat: 1, name: "Dra. Hj. Sulastri Hadiningrat, M.Si.", role: "Gubernur Jawa Timur (Tamu Utama)", confirmed: true, dietary: "Bebas Gluten / Diet Formal" },
      { seat: 2, name: "Siti Rahmawati, S.STP.", role: "Protokol Utama Gubernur Jatim", confirmed: true, dietary: "Standard Gala Dinner" },
      { seat: 3, name: "Ajudan Gubernur (Bpk. Bambang, S.H.)", role: "Pengawal Pribadi VVIP", confirmed: true, dietary: "Standard Gala Dinner" },
      { seat: 4, name: "ADC Gubernur (Ibu Indah P., S.I.Kom.)", role: "Staf Pendamping Protokoler", confirmed: true, dietary: "Standard Gala Dinner" },
      { seat: 5, name: "Mayor Jenderal TNI Rafael G.", role: "Pangdam V/Brawijaya", confirmed: true, dietary: "Standard Gala Dinner" },
      { seat: 6, name: "Irjen Pol. Dr. H. Siswanto, M.H.", role: "Kapolda Jawa Timur", confirmed: true, dietary: "Standard Gala Dinner" },
      { seat: 7, name: "Dr. Mia Amiati, S.H., M.H.", role: "Kajati Jawa Timur", confirmed: true, dietary: "Standard Gala Dinner" },
      { seat: 8, name: "Kusnadi, S.H., M.Hum.", role: "Ketua DPRD Provinsi Jatim", confirmed: true, dietary: "Standard Gala Dinner" }
    ]
  },
  {
    id: 3,
    name: "Meja 3",
    tier: "VVIP UTAMA FORKOPIMDA",
    category: "vvip",
    wing: "left",
    x: 290,
    y: 80,
    status: "8 dari 8 Kursi Terisi",
    note: "Pimpinan komando matra TNI & tokoh masyarakat Jawa Timur.",
    isUserTable: false,
    institution: "Koarmada II & Polda Jatim",
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
  {
    id: 5,
    name: "Meja 5",
    tier: "VVIP DIREKSI JAWA POS",
    category: "media",
    wing: "left",
    x: 400,
    y: 80,
    status: "8 dari 8 Kursi Terisi",
    note: "Jajaran Direksi & Dewan Pimpinan Redaksi Jawa Pos Group.",
    isUserTable: false,
    institution: "PT Jawa Pos Koran & Percetakan",
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

  // Row 2 (y=200)
  {
    id: 7,
    name: "Meja 7",
    tier: "KEPALA DAERAH MEGAPOLITAN",
    category: "pemda",
    wing: "left",
    x: 125,
    y: 200,
    status: "8 dari 8 Kursi Terisi",
    note: "Pimpinan Pemerintah Kota Surabaya dan sekitarnya.",
    isUserTable: false,
    institution: "Pemerintah Kota Surabaya",
    guests: [
      { seat: 1, name: "Eri Cahyadi, S.T., M.T.", role: "Wali Kota Surabaya", confirmed: true },
      { seat: 2, name: "Rini Indriyani, S.Farm.", role: "Ketua TP PKK Kota Surabaya", confirmed: true },
      { seat: 3, name: "Dr. Ika Puspitasari, S.E.", role: "Wali Kota Mojokerto", confirmed: true },
      { seat: 4, name: "Drs. Santoso, M.Pd.", role: "Wali Kota Blitar", confirmed: true },
      { seat: 5, name: "Drs. H. Sutiaji", role: "Tokoh Pembangunan Malang", confirmed: true },
      { seat: 6, name: "H. Achmad Fauzi Wongsojudo", role: "Bupati Sumenep Madura", confirmed: true },
      { seat: 7, name: "H. Slamet Junaidi", role: "Bupati Sampang", confirmed: true },
      { seat: 8, name: "Badrut Tamam, S.Psi.", role: "Bupati Pamekasan", confirmed: true }
    ]
  },
  {
    id: 9,
    name: "Meja 9",
    tier: "BUMN PERBANKAN & FINANSIAL",
    category: "bumn",
    wing: "left",
    x: 235,
    y: 200,
    status: "8 dari 8 Kursi Terisi",
    note: "Perbankan Daerah & Pengawas Lembaga Keuangan.",
    isUserTable: false,
    institution: "Bank Jatim & Bank Indonesia",
    guests: [
      { seat: 1, name: "Buscemi Arif", role: "Dirut Bank Jatim", confirmed: true },
      { seat: 2, name: "Edi Masrianto", role: "Direktur Keuangan Bank Jatim", confirmed: true },
      { seat: 3, name: "Giri Laksmono", role: "Regional CEO BRI Surabaya", confirmed: true },
      { seat: 4, name: "Tri Nugroho", role: "Regional Head Mandiri Jatim", confirmed: true },
      { seat: 5, name: "Royke Tumilaar", role: "Perwakilan BNI Kanwil Surabaya", confirmed: true },
      { seat: 6, name: "Bambang Widjanarko", role: "Kepala OJK Regional 4 Jatim", confirmed: true },
      { seat: 7, name: "Doddy Zulverdi", role: "Kepala Perwakilan Bank Indonesia Jatim", confirmed: true },
      { seat: 8, name: "Hermawan Kartajaya", role: "MarkPlus Founder & Ekonom", confirmed: true }
    ]
  },
  {
    id: 11,
    name: "Meja 11",
    tier: "BUMN ENERGI & INDUSTRI",
    category: "bumn",
    wing: "left",
    x: 345,
    y: 200,
    status: "8 dari 8 Kursi Terisi",
    note: "Petrokimia, Pupuk Indonesia, Semen Indonesia, & PLN.",
    isUserTable: false,
    institution: "PT Petrokimia Gresik & PLN UID",
    guests: [
      { seat: 1, name: "Dwi Satryo Annurogo", role: "Dirut Petrokimia Gresik", confirmed: true },
      { seat: 2, name: "Budi Wahju Soesilo", role: "Direktur Keuangan & Umum", confirmed: true },
      { seat: 3, name: "Agustian Septiana", role: "GM PLN UID Jawa Timur", confirmed: true },
      { seat: 4, name: "Taufik Aditiyawarman", role: "Dirut PT Kilang Pertamina Jatim", confirmed: true },
      { seat: 5, name: "Donny Arsal", role: "Dirut PT Semen Indonesia (SIG)", confirmed: true },
      { seat: 6, name: "Subhan", role: "Direktur Bisnis SIG", confirmed: true },
      { seat: 7, name: "Ir. H. Wardoyo", role: "Ketua APINDO Jawa Timur", confirmed: true },
      { seat: 8, name: "Adik Dwi Putranto", role: "Ketua KADIN Jawa Timur", confirmed: true }
    ]
  },
  {
    id: 13,
    name: "Meja 13",
    tier: "REKTORAT PERGURUAN TINGGI",
    category: "pemda",
    wing: "left",
    x: 455,
    y: 200,
    status: "8 dari 8 Kursi Terisi",
    note: "Rektor ITS, Universitas Airlangga, UNESA & UB.",
    isUserTable: false,
    institution: "Dewan Rektor PTN Jawa Timur",
    guests: [
      { seat: 1, name: "Prof. Dr. Ir. Mochamad Ashari", role: "Rektor ITS Surabaya", confirmed: true },
      { seat: 2, name: "Prof. Dr. Mohammad Nasih, S.E.", role: "Rektor Universitas Airlangga", confirmed: true },
      { seat: 3, name: "Prof. Dr. Nurhasan, M.Kes.", role: "Rektor UNESA", confirmed: true },
      { seat: 4, name: "Prof. Widodo, Ph.D.", role: "Rektor Universitas Brawijaya", confirmed: true },
      { seat: 5, name: "Prof. Dr. H. Akh. Muzakki", role: "Rektor UIN Sunan Ampel", confirmed: true },
      { seat: 6, name: "Prof. Dr. Ir. Bambang Guritno", role: "Ketua Dewan Riset Daerah Jatim", confirmed: true },
      { seat: 7, name: "Dr. Ir. Wahid Wahyudi, M.T.", role: "Mantan Kadisdik Jatim", confirmed: true },
      { seat: 8, name: "Aries Agung Paewai, M.M.", role: "Kadisdik Jawa Timur", confirmed: true }
    ]
  },

  // Row 3 (y=320)
  {
    id: 15,
    name: "Meja 15",
    tier: "GERBANGKERTOSUSILA TIMUR",
    category: "pemda",
    wing: "left",
    x: 180,
    y: 320,
    status: "8 dari 8 Kursi Terisi",
    note: "Pemerintah Kabupaten Gresik & Sidoarjo.",
    isUserTable: false,
    institution: "Pemkab Gresik & Pemkab Sidoarjo",
    guests: [
      { seat: 1, name: "H. Fandi Akhmad Yani, S.E.", role: "Bupati Gresik", confirmed: true },
      { seat: 2, name: "Hj. Aminatun Habibah, M.Pd.", role: "Wakil Bupati Gresik", confirmed: true },
      { seat: 3, name: "H. Ahmad Muhdlor Ali, S.I.P.", role: "Bupati Sidoarjo", confirmed: true },
      { seat: 4, name: "H. Subandi, S.H.", role: "Plt. Bupati Sidoarjo", confirmed: true },
      { seat: 5, name: "dr. Hj. Ikfina Fahmawati", role: "Bupati Mojokerto", confirmed: true },
      { seat: 6, name: "H. Muhammad Albarra, M.Hum.", role: "Wabup Mojokerto", confirmed: true },
      { seat: 7, name: "Hj. Mundjidah Wahab", role: "Tokoh Masyarakat Jombang", confirmed: true },
      { seat: 8, name: "Sugeng Riyanta", role: "Sekda Kabupaten Mojokerto", confirmed: true }
    ]
  },
  {
    id: 17,
    name: "Meja 17",
    tier: "LOGISTIK & MARITIM",
    category: "bumn",
    wing: "left",
    x: 290,
    y: 320,
    status: "8 dari 8 Kursi Terisi",
    note: "PT Pelindo Regional 3 & Pengelola Pelabuhan.",
    isUserTable: false,
    institution: "PT Pelindo (Persero) Regional 3",
    guests: [
      { seat: 1, name: "Ardhy Wahyu Basuki", role: "Regional Head 3 Pelindo", confirmed: true },
      { seat: 2, name: "Ali Sodikin", role: "GM Pelindo Tanjung Perak", confirmed: true },
      { seat: 3, name: "Setyo Raharjo", role: "Direktur PT Berlian Jasa Terminal", confirmed: true },
      { seat: 4, name: "Faruk Prasetyo", role: "Ketua INSA Jawa Timur", confirmed: true },
      { seat: 5, name: "Hengky Pratama", role: "Ketua ALFI/ILFA Jawa Timur", confirmed: true },
      { seat: 6, name: "Drs. Nyoman Sudarma", role: "Kepala Kantor Otoritas Pelabuhan", confirmed: true },
      { seat: 7, name: "Ir. Bambang Soetrisno", role: "Ketua GPEI Jawa Timur", confirmed: true },
      { seat: 8, name: "H. Abdullah Faqih", role: "Ketua GINSI Jawa Timur", confirmed: true }
    ]
  },
  {
    id: 19,
    name: "Meja 19",
    tier: "MEDIA TELEVISI & SIBER",
    category: "media",
    wing: "left",
    x: 400,
    y: 320,
    status: "8 dari 8 Kursi Terisi",
    note: "Aliansi Media Siber Jatim, JTV Surabaya & LKBN Antara.",
    isUserTable: false,
    institution: "JTV Surabaya & AMSI Jawa Timur",
    guests: [
      { seat: 1, name: "Nugroho Nurcahyo", role: "Redaktur Pelaksana Jawa Pos", confirmed: true },
      { seat: 2, name: "Doan Widhiandono", role: "Redaktur Metropolis", confirmed: true },
      { seat: 3, name: "Machmud Surowidjojo", role: "Direktur JTV Surabaya", confirmed: true },
      { seat: 4, name: "Abdul Rokhim", role: "Pemimpin Redaksi JTV", confirmed: true },
      { seat: 5, name: "Budi Sugiharto", role: "Ketua AMSI Jawa Timur", confirmed: true },
      { seat: 6, name: "Dwi Eko Lokononto", role: "Ketua JMSI Jawa Timur", confirmed: true },
      { seat: 7, name: "M. Syafaruddin", role: "Kepala Biro Antara Jatim", confirmed: true },
      { seat: 8, name: "Ahmad Riyadh, Ph.D.", role: "Pakar Hukum Pers", confirmed: true }
    ]
  },

  // Row 4 (y=440)
  {
    id: 21,
    name: "Meja 21",
    tier: "KEPALA DAERAH MATARAMAN",
    category: "pemda",
    wing: "left",
    x: 125,
    y: 440,
    status: "8 dari 8 Kursi Terisi",
    note: "Pimpinan Madiun, Ngawi, Ponorogo, Pacitan & Trenggalek.",
    isUserTable: false,
    institution: "Bakorwil I Madiun",
    guests: [
      { seat: 1, name: "Drs. H. Maidi, S.H.", role: "Wali Kota Madiun", confirmed: true },
      { seat: 2, name: "H. Ahmad Dawami", role: "Bupati Madiun", confirmed: true },
      { seat: 3, name: "H. Ony Anwar Harsono", role: "Bupati Ngawi", confirmed: true },
      { seat: 4, name: "H. Sugiri Sancoko", role: "Bupati Ponorogo", confirmed: true },
      { seat: 5, name: "Indrata Nur Bayuaji", role: "Bupati Pacitan", confirmed: true },
      { seat: 6, name: "H. Mochamad Nur Arifin", role: "Bupati Trenggalek", confirmed: true },
      { seat: 7, name: "Maryoto Birowo", role: "Tokoh Tulungagung", confirmed: true },
      { seat: 8, name: "Heru Susanto, M.M.", role: "Kepala Bakorwil I Madiun", confirmed: true }
    ]
  },
  {
    id: 23,
    name: "Meja 23",
    tier: "PROPERTI & REAL ESTATE",
    category: "bumn",
    wing: "left",
    x: 235,
    y: 440,
    status: "8 dari 8 Kursi Terisi",
    note: "Ciputra Group, Pakuwon Jati, Maspion & DPD REI Jatim.",
    isUserTable: false,
    institution: "DPD Real Estate Indonesia (REI) Jatim",
    guests: [
      { seat: 1, name: "Sutoto Yakobus", role: "Senior Director Ciputra Group", confirmed: true },
      { seat: 2, name: "Nanik J. Santoso", role: "Director Ciputra Development", confirmed: true },
      { seat: 3, name: "Soeharto Djojonegoro", role: "Ketua DPD REI Jawa Timur", confirmed: true },
      { seat: 4, name: "Alexander Tedja", role: "Founder Pakuwon Group", confirmed: true },
      { seat: 5, name: "Stefanus Ridwan", role: "Presiden Direktur Pakuwon Jati", confirmed: true },
      { seat: 6, name: "Alim Markus", role: "Chairman Maspion Group", confirmed: true },
      { seat: 7, name: "Sugeng Hartono", role: "Direktur Intiland Surabaya", confirmed: true },
      { seat: 8, name: "Bambang Harijanto", role: "Ketua APERSI Jatim", confirmed: true }
    ]
  },
  {
    id: 25,
    name: "Meja 25",
    tier: "INOVASI PELAYANAN PUBLIK",
    category: "pemda",
    wing: "left",
    x: 345,
    y: 440,
    status: "8 dari 8 Kursi Terisi",
    note: "Pimpinan Dinas Penanaman Modal & OPD Provinsi Jatim.",
    isUserTable: false,
    institution: "Dinas PMPTSP Provinsi Jawa Timur",
    guests: [
      { seat: 1, name: "Dyah Wahyu Ermawati", role: "Kadis DPMPTSP Jatim", confirmed: true },
      { seat: 2, name: "Dr. Ir. Jumadi, M.MT.", role: "Kadis Kehutanan Jatim", confirmed: true },
      { seat: 3, name: "Ir. Budi Raharjo, M.T.", role: "Kadis ESDM Jatim", confirmed: true },
      { seat: 4, name: "Heru Tjahjono, Ir., M.M.", role: "Mantan Sekdaprov Jatim", confirmed: true },
      { seat: 5, name: "Dr. Hudiyono, M.Si.", role: "Kadis Pariwisata Jatim", confirmed: true },
      { seat: 6, name: "Dra. Pulung Chausar", role: "Kadispora Jatim", confirmed: true },
      { seat: 7, name: "Drs. Budi Sarwoto", role: "Kadis Perindag Jatim", confirmed: true },
      { seat: 8, name: "Ir. Dydik Rudy Prasetya", role: "Kadis Pertanian Jatim", confirmed: true }
    ]
  },
  {
    id: 27,
    name: "Meja 27",
    tier: "INFRASTRUKTUR TELEKOMUNIKASI",
    category: "bumn",
    wing: "left",
    x: 455,
    y: 440,
    status: "8 dari 8 Kursi Terisi",
    note: "Telkom Regional 5, Telkomsel & Diskominfo Jatim.",
    isUserTable: false,
    institution: "Telkom Indonesia Regional 5 Jatim",
    guests: [
      { seat: 1, name: "Teddy Hartanto", role: "EVP Telkom Regional 5", confirmed: true },
      { seat: 2, name: "Dedy Budianto", role: "VP Sales Telkomsel Jatim", confirmed: true },
      { seat: 3, name: "Andri Wibowo", role: "Head of Indosat Surabaya", confirmed: true },
      { seat: 4, name: "Bambang Hermanto", role: "Regional Head XL Axiata", confirmed: true },
      { seat: 5, name: "Sherly Octavia", role: "Ketua E-Commerce Jatim", confirmed: true },
      { seat: 6, name: "Rendra Prasetya", role: "Founder Startup Hub Jatim", confirmed: true },
      { seat: 7, name: "Dra. Sherlita Ratna Dewi", role: "Kadis Kominfo Provinsi Jatim", confirmed: true },
      { seat: 8, name: "Putut Suryawan", role: "Kabid Aptika Jatim", confirmed: true }
    ]
  },

  // Row 5 (y=560)
  {
    id: 29,
    name: "Meja 29",
    tier: "KEPALA DAERAH PANTURA",
    category: "pemda",
    wing: "left",
    x: 180,
    y: 560,
    status: "8 dari 8 Kursi Terisi",
    note: "Pemerintah Tuban, Lamongan & Bojonegoro.",
    isUserTable: false,
    institution: "Bakorwil II Bojonegoro",
    guests: [
      { seat: 1, name: "Aditya Halindra Faridzky", role: "Bupati Tuban", confirmed: true },
      { seat: 2, name: "H. Joko Sarwono", role: "Sekda Kabupaten Tuban", confirmed: true },
      { seat: 3, name: "Dr. H. Yuhronur Efendi", role: "Bupati Lamongan", confirmed: true },
      { seat: 4, name: "Drs. H. Abdul Rouf", role: "Wakil Bupati Lamongan", confirmed: true },
      { seat: 5, name: "Adriyanto, Ph.D.", role: "Pj. Bupati Bojonegoro", confirmed: true },
      { seat: 6, name: "Drs. Agung Subagyo", role: "Kepala Bakorwil II", confirmed: true },
      { seat: 7, name: "Hj. Ratna Juwita Sari", role: "Anggota DPR RI Dapil Jatim", confirmed: true },
      { seat: 8, name: "H. Mukhtom", role: "Ketua DPRD Kabupaten Tuban", confirmed: true }
    ]
  },
  {
    id: 31,
    name: "Meja 31",
    tier: "KOPERASI & UMKM UNGGULAN",
    category: "pemda",
    wing: "left",
    x: 290,
    y: 560,
    status: "8 dari 8 Kursi Terisi",
    note: "Dinas Koperasi & Pengusaha Binaan Ekspor Jatim.",
    isUserTable: false,
    institution: "Dinas Koperasi & UKM Provinsi Jatim",
    guests: [
      { seat: 1, name: "Dr. Andromeda Qomariah", role: "Kadis Koperasi & UKM Jatim", confirmed: true },
      { seat: 2, name: "H. Slamet Sutanto", role: "Ketua Dekopinwil Jatim", confirmed: true },
      { seat: 3, name: "Hj. Mursyidah, S.E.", role: "Ketua IWAPI Jatim", confirmed: true },
      { seat: 4, name: "Budi Santoso", role: "Founder Kopi Wonosalam", confirmed: true },
      { seat: 5, name: "Anang Susanto", role: "Ketua Sentra Batik Madura", confirmed: true },
      { seat: 6, name: "Dewi Kurniasih", role: "Juara UMKM Ekspor Binaan", confirmed: true },
      { seat: 7, name: "Drs. Subagyo, M.Si.", role: "Kabid Pemasaran Diskop", confirmed: true },
      { seat: 8, name: "Ir. Herman Santoso", role: "Konsultan Klinik KUKM", confirmed: true }
    ]
  },
  {
    id: 33,
    name: "Meja 33",
    tier: "RISET KEBIJAKAN & LITBANG",
    category: "media",
    wing: "left",
    x: 400,
    y: 560,
    status: "8 dari 8 Kursi Terisi",
    note: "Jawa Pos Institute of Pro-Otonomi (JPIP).",
    isUserTable: false,
    institution: "Jawa Pos Institute (JPIP)",
    guests: [
      { seat: 1, name: "Rohman Budijanto, S.H.", role: "Direktur Riset JPIP", confirmed: true },
      { seat: 2, name: "Dr. Suko Widodo, M.Si.", role: "Pakar Komunikasi Politik Unair", confirmed: true },
      { seat: 3, name: "Prof. Dr. Kacung Marijan", role: "Guru Besar Ilmu Politik Unair", confirmed: true },
      { seat: 4, name: "Dr. Phil. Bintoro Wardiyanto", role: "Pengamat Kebijakan Publik", confirmed: true },
      { seat: 5, name: "Dr. Siti Aminah, M.Si.", role: "Pakar Sosiologi Pemerintahan", confirmed: true },
      { seat: 6, name: "M. Farid Rahmat", role: "Manajer Riset Litbang Jawa Pos", confirmed: true },
      { seat: 7, name: "Nanang Supriyadi", role: "Lead Analyst Survei Kepuasan", confirmed: true },
      { seat: 8, name: "Eko Prasetyo", role: "Editor Opini Jawa Pos", confirmed: true }
    ]
  },

  // Row 6 (y=680)
  {
    id: 35,
    name: "Meja 35",
    tier: "KESEHATAN & RSUD PROVINSI",
    category: "pemda",
    wing: "left",
    x: 180,
    y: 680,
    status: "8 dari 8 Kursi Terisi",
    note: "RSUD Dr. Soetomo, RSUD Saiful Anwar & IDI Jatim.",
    isUserTable: false,
    institution: "RSUD Dr. Soetomo Surabaya",
    guests: [
      { seat: 1, name: "Prof. Dr. dr. Cita Rosita Sigit", role: "Dirut RSUD Dr. Soetomo", confirmed: true },
      { seat: 2, name: "dr. Mochamad Bachtiar Budianto", role: "Dirut RSUD Saiful Anwar", confirmed: true },
      { seat: 3, name: "Dr. Erwin Astha Triyono", role: "Kadis Kesehatan Jatim", confirmed: true },
      { seat: 4, name: "dr. Sutrisno, Sp.OG(K)", role: "Ketua IDI Wilayah Jawa Timur", confirmed: true },
      { seat: 5, name: "Prof. dr. David S. Perdanakusuma", role: "Ketua Komite Medis Soetomo", confirmed: true },
      { seat: 6, name: "dr. Hendro Soelistijono", role: "Dirut RS Haji Surabaya", confirmed: true },
      { seat: 7, name: "dr. Widodo J. Pudjirahardjo", role: "Konsultan Manajemen RS", confirmed: true },
      { seat: 8, name: "dr. Kohar Hari Santoso", role: "Mantan Kadinkes Jatim", confirmed: true }
    ]
  },
  {
    id: 37,
    name: "Meja 37",
    tier: "LINGKUNGAN & TRANSISI ENERGI",
    category: "bumn",
    wing: "left",
    x: 290,
    y: 680,
    status: "8 dari 8 Kursi Terisi",
    note: "Dinas Lingkungan Hidup & Proper Hijau Jawa Timur.",
    isUserTable: false,
    institution: "Dinas LH Provinsi Jawa Timur",
    guests: [
      { seat: 1, name: "Jaki Jauhari, M.Si.", role: "Kadis DLH Jatim", confirmed: true },
      { seat: 2, name: "Prof. Amin Setyo Leksono", role: "Pakar Ekologi Unibraw", confirmed: true },
      { seat: 3, name: "Prigi Arisandi, M.Si.", role: "Founder Ecoton", confirmed: true },
      { seat: 4, name: "Ir. H. Sudirman, M.M.", role: "VP Smelter Freeport Gresik", confirmed: true },
      { seat: 5, name: "Aryo Seno Baskoro", role: "Inisiator Komunitas Hijau", confirmed: true },
      { seat: 6, name: "Dra. Nurul Hidayati", role: "Kabid Tata Lingkungan DLH", confirmed: true },
      { seat: 7, name: "Bagus Priambodo", role: "Konservasi Mangrove Wonorejo", confirmed: true },
      { seat: 8, name: "Ir. Bambang Triharto", role: "Direktur Jasa Tirta I", confirmed: true }
    ]
  },
  {
    id: 39,
    name: "Meja 39",
    tier: "OLAHRAGA & KONI JAWA TIMUR",
    category: "pemda",
    wing: "left",
    x: 400,
    y: 680,
    status: "8 dari 8 Kursi Terisi",
    note: "KONI Jatim & Atlet Juara PON/Olimpiade.",
    isUserTable: false,
    institution: "KONI Provinsi Jawa Timur",
    guests: [
      { seat: 1, name: "Drs. H. M. Nabil, M.Si.", role: "Ketua Umum KONI Jatim", confirmed: true },
      { seat: 2, name: "Prof. Dr. H. Nurhasan", role: "Ketua Bidang Prestasi KONI", confirmed: true },
      { seat: 3, name: "H. Irmantara Subagio", role: "Ketua Harian KONI Jatim", confirmed: true },
      { seat: 4, name: "Lita Lestari", role: "Pelatih Renang Puslatda", confirmed: true },
      { seat: 5, name: "Eko Yuli Irawan", role: "Atlet Angkat Besi Olimpiade", confirmed: true },
      { seat: 6, name: "Megawati Hangestri Pertiwi", role: "Atlet Bola Voli Kebanggaan Jatim", confirmed: true },
      { seat: 7, name: "Drs. Harun, M.Si.", role: "Mantan Kadispora Jatim", confirmed: true },
      { seat: 8, name: "Akbar Faisal", role: "Humas KONI Jatim", confirmed: true }
    ]
  },

  // ======================= RIGHT WING (20 TABLES) =======================
  // Row 1 (y=80)
  {
    id: 2,
    name: "Meja 2",
    tier: "VVIP FORKOPIMDA PROVINSI",
    category: "vvip",
    wing: "right",
    x: 620,
    y: 80,
    status: "8 dari 8 Kursi Terisi",
    note: "Sekretariat Daerah Provinsi Jatim & Pimpinan Parlemen.",
    isUserTable: false,
    institution: "Sekretariat Daerah Provinsi Jawa Timur",
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
  {
    id: 4,
    name: "Meja 4",
    tier: "VVIP DEWAN KEHORMATAN",
    category: "vvip",
    wing: "right",
    x: 730,
    y: 80,
    status: "8 dari 8 Kursi Terisi",
    note: "Tokoh Nasional & Dewan Kehormatan Perintis Jawa Pos.",
    isUserTable: false,
    institution: "Yayasan Perintis Jawa Pos",
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
  {
    id: 6,
    name: "Meja 6",
    tier: "DEWAN JURI INDEPENDEN",
    category: "vvip",
    wing: "right",
    x: 840,
    y: 80,
    status: "8 dari 8 Kursi Terisi",
    note: "Panel Penilai Akademisi & Dewan Pakar Otonomi Daerah.",
    isUserTable: false,
    institution: "Dewan Pakar JawaPos Awards",
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
  },

  // Row 2 (y=200)
  {
    id: 8,
    name: "Meja 8",
    tier: "KEPALA DAERAH MALANG RAYA",
    category: "pemda",
    wing: "right",
    x: 565,
    y: 200,
    status: "8 dari 8 Kursi Terisi",
    note: "Pemerintah Kabupaten Malang, Kota Malang & Kota Batu.",
    isUserTable: false,
    institution: "Bakorwil III Malang",
    guests: [
      { seat: 1, name: "Drs. H. M. Sanusi, M.M.", role: "Bupati Malang", confirmed: true },
      { seat: 2, name: "Drs. Didik Gatot Subroto", role: "Wakil Bupati Malang", confirmed: true },
      { seat: 3, name: "Dr. Ir. Wahyu Hidayat", role: "Pj. Wali Kota Malang", confirmed: true },
      { seat: 4, name: "Aries Agung Paewai", role: "Pj. Wali Kota Batu", confirmed: true },
      { seat: 5, name: "Hj. Dewanti Rumpoko", role: "Mantan Wali Kota Batu", confirmed: true },
      { seat: 6, name: "Dr. Budi Wahyono", role: "Sekda Kota Malang", confirmed: true },
      { seat: 7, name: "Drs. Nurman Ramdansyah", role: "Sekda Kabupaten Malang", confirmed: true },
      { seat: 8, name: "Drs. Arief Tri Setyo", role: "Kepala Bakorwil III", confirmed: true }
    ]
  },
  {
    id: 10,
    name: "Meja 10",
    tier: "KORPORASI FMCG & MANUFAKTUR",
    category: "bumn",
    wing: "right",
    x: 675,
    y: 200,
    status: "8 dari 8 Kursi Terisi",
    note: "Wings Surya, Kapal Api Global & Industri Konsumsi.",
    isUserTable: false,
    institution: "Wings Corporation & Kapal Api Group",
    guests: [
      { seat: 1, name: "William Katuari", role: "Chairman Wings Group", confirmed: true },
      { seat: 2, name: "Eddy William Katuari", role: "Direktur Eksekutif Wings", confirmed: true },
      { seat: 3, name: "Herry Susanto", role: "MD PT Kapal Api Global", confirmed: true },
      { seat: 4, name: "Soedomo Mergonoto", role: "Founder Kopi Kapal Api", confirmed: true },
      { seat: 5, name: "Hartadi Angkosubroto", role: "Chairman Gunung Sewu", confirmed: true },
      { seat: 6, name: "Drs. Tan Wijaya", role: "Presdir PT HM Sampoerna Jatim", confirmed: true },
      { seat: 7, name: "Stephanus Budi", role: "Head of External Affairs Sampoerna", confirmed: true },
      { seat: 8, name: "Iwan Setiawan", role: "Ketua GAPMMI Jawa Timur", confirmed: true }
    ]
  },
  {
    id: 12,
    name: "Meja 12",
    tier: "PERHUBUNGAN & BANDARA",
    category: "bumn",
    wing: "right",
    x: 785,
    y: 200,
    status: "8 dari 8 Kursi Terisi",
    note: "KAI Daop 8, Angkasa Pura Juanda, Jasa Marga.",
    isUserTable: false,
    institution: "PT Kereta Api Indonesia & AP I Juanda",
    guests: [
      { seat: 1, name: "Wisnu Pramesti", role: "EVP KAI Daop 8 Surabaya", confirmed: true },
      { seat: 2, name: "Luqman Arif", role: "Manager Humas KAI Daop 8", confirmed: true },
      { seat: 3, name: "Sisyani Jaffar", role: "GM Bandara Juanda AP I", confirmed: true },
      { seat: 4, name: "Yuristo Ardhi Hanggoro", role: "Stakeholder Relation Juanda", confirmed: true },
      { seat: 5, name: "Ir. Nyoman Budiarsa", role: "Dirut Jasa Marga Surabaya-Gempol", confirmed: true },
      { seat: 6, name: "Dr. Nyoman Suteja", role: "Kadis Perhubungan Jatim", confirmed: true },
      { seat: 7, name: "Ir. Edy Tambeng Widjaja", role: "Kadis PU Bina Marga Jatim", confirmed: true },
      { seat: 8, name: "Ir. Bahrul Amiq, M.H.", role: "Kadis PU Bina Marga Sidoarjo", confirmed: true }
    ]
  },
  {
    id: 14,
    name: "Meja 14",
    tier: "OTOMOTIF & ELEKTRIFIKASI",
    category: "bumn",
    wing: "right",
    x: 895,
    y: 200,
    status: "8 dari 8 Kursi Terisi",
    note: "Auto2000, MPM Honda Jatim, United E-Motor.",
    isUserTable: false,
    institution: "Auto2000 (Toyota) & MPM Honda Jatim",
    guests: [
      { seat: 1, name: "Jodi Kawitantyo", role: "Senior Area Manager Auto2000", confirmed: true },
      { seat: 2, name: "Farid Sulistyo", role: "Kepala Cabang Kertajaya", confirmed: true },
      { seat: 3, name: "Agustinus", role: "Regional GM Astra Motor Jatim", confirmed: true },
      { seat: 4, name: "Suwito M.", role: "Presdir MPM Honda Jatim", confirmed: true },
      { seat: 5, name: "Dedy", role: "Direktur PT Terang Dunia (United)", confirmed: true },
      { seat: 6, name: "Rudy Susanto", role: "Ketua GAIKINDO Jatim", confirmed: true },
      { seat: 7, name: "Bambang Soedjono", role: "Ketua IMI Jawa Timur", confirmed: true },
      { seat: 8, name: "dr. Harianto", role: "Komunitas EV Jawa Timur", confirmed: true }
    ]
  },

  // Row 3 (y=320)
  {
    id: 16,
    name: "Meja 16",
    tier: "KEPALA DAERAH TAPAL KUDA",
    category: "pemda",
    wing: "right",
    x: 620,
    y: 320,
    status: "8 dari 8 Kursi Terisi",
    note: "Pemerintah Jember, Banyuwangi, Situbondo & Bondowoso.",
    isUserTable: false,
    institution: "Bakorwil V Jember",
    guests: [
      { seat: 1, name: "H. Hendy Siswanto, S.T.", role: "Bupati Jember", confirmed: true },
      { seat: 2, name: "K.H. Balya Firjaun Barlaman", role: "Wakil Bupati Jember", confirmed: true },
      { seat: 3, name: "Hj. Ipuk Fiestiandani", role: "Bupati Banyuwangi", confirmed: true },
      { seat: 4, name: "H. Sugirah, M.Si.", role: "Wakil Bupati Banyuwangi", confirmed: true },
      { seat: 5, name: "Drs. H. Karna Suswandi", role: "Bupati Situbondo", confirmed: true },
      { seat: 6, name: "Hj. Khoirani, M.M.", role: "Wakil Bupati Situbondo", confirmed: true },
      { seat: 7, name: "Drs. H. Amin Said Husni", role: "Tokoh Bondowoso", confirmed: true },
      { seat: 8, name: "Bambang Soekwanto", role: "Pj. Bupati Bondowoso", confirmed: true }
    ]
  },
  {
    id: 18,
    name: "Meja 18",
    tier: "HOSPITALITY & SENI BUDAYA",
    category: "pemda",
    wing: "right",
    x: 730,
    y: 320,
    status: "8 dari 8 Kursi Terisi",
    note: "PHRI Jatim, Grand Ballroom Hotel Surabaya & Dewan Kesenian.",
    isUserTable: false,
    institution: "BPD PHRI Jawa Timur & Dewan Kesenian",
    guests: [
      { seat: 1, name: "Dwi Cahyono, S.E.", role: "Ketua BPD PHRI Jawa Timur", confirmed: true },
      { seat: 2, name: "Yusuf Sugiono", role: "GM Grand Ballroom Hotel Surabaya", confirmed: true },
      { seat: 3, name: "Lianawati Gondowardojo", role: "MD Hotel Majapahit MGallery", confirmed: true },
      { seat: 4, name: "Purnomo Siswopranoto", role: "Ketua ASITA Jawa Timur", confirmed: true },
      { seat: 5, name: "Sucipto Kuntjoro", role: "Ketua Dewan Kesenian Jatim", confirmed: true },
      { seat: 6, name: "Dra. Hening Kencanawati", role: "Kurator Seni & Museum", confirmed: true },
      { seat: 7, name: "Didik Nini Thowok", role: "Maestro Tari Tradisional", confirmed: true },
      { seat: 8, name: "Kirun (H. Syakirun)", role: "Seniman Budayawan Ludruk", confirmed: true }
    ]
  },
  {
    id: 20,
    name: "Meja 20",
    tier: "JURNALIS INVESTIGASI NASIONAL",
    category: "media",
    wing: "right",
    x: 840,
    y: 320,
    status: "8 dari 8 Kursi Terisi",
    note: "Liputan Khusus Jawa Pos, AJI Surabaya & Radio Suara Surabaya.",
    isUserTable: false,
    institution: "Aliansi Jurnalis Independen (AJI)",
    guests: [
      { seat: 1, name: "Taufiqurrahman", role: "Koordinator Liputan Khusus", confirmed: true },
      { seat: 2, name: "Faris Alfarisi", role: "Jurnalis Investigasi Jawa Pos", confirmed: true },
      { seat: 3, name: "Eben Haezer Pambudi", role: "Ketua AJI Surabaya", confirmed: true },
      { seat: 4, name: "Andre Pareira", role: "Produser CNN Indonesia Jatim", confirmed: true },
      { seat: 5, name: "Rahmat Hidayat", role: "Kepala Biro Kompas TV Surabaya", confirmed: true },
      { seat: 6, name: "Fathur Rahman", role: "Redaktur Suara Surabaya", confirmed: true },
      { seat: 7, name: "Eddy Prastyo", role: "Manajer Pemberitaan Suara Surabaya", confirmed: true },
      { seat: 8, name: "Ina Silvianti", role: "Redaktur Foto Jawa Pos", confirmed: true }
    ]
  },

  // Row 4 (y=440)
  {
    id: 22,
    name: "Meja 22",
    tier: "KEPALA DAERAH BROMO SEMERU",
    category: "pemda",
    wing: "right",
    x: 565,
    y: 440,
    status: "8 dari 8 Kursi Terisi",
    note: "Pemerintah Probolinggo, Pasuruan & Lumajang.",
    isUserTable: false,
    institution: "Pemkot Probolinggo & Pemkab Pasuruan",
    guests: [
      { seat: 1, name: "Dr. Habib Hadi Zainal Abidin", role: "Wali Kota Probolinggo", confirmed: true },
      { seat: 2, name: "Drs. H. A. Timbul Prihanjoko", role: "Bupati Probolinggo", confirmed: true },
      { seat: 3, name: "Drs. H. Saifullah Yusuf (Gus Ipul)", role: "Wali Kota Pasuruan", confirmed: true },
      { seat: 4, name: "Adi Wibowo, M.Si.", role: "Wakil Wali Kota Pasuruan", confirmed: true },
      { seat: 5, name: "H. M. Irsyad Yusuf, M.MA.", role: "Mantan Bupati Pasuruan", confirmed: true },
      { seat: 6, name: "Andriyanto", role: "Pj. Bupati Pasuruan", confirmed: true },
      { seat: 7, name: "H. Thoriqul Haq (Cak Thoriq)", role: "Mantan Bupati Lumajang", confirmed: true },
      { seat: 8, name: "Indah Amperawati Masdar", role: "Mantan Wabup Lumajang", confirmed: true }
    ]
  },
  {
    id: 24,
    name: "Meja 24",
    tier: "PENJAMINAN KREDIT & ASURANSI",
    category: "bumn",
    wing: "right",
    x: 675,
    y: 440,
    status: "8 dari 8 Kursi Terisi",
    note: "PT Jamkrida Jatim, Askrindo & Bank UMKM.",
    isUserTable: false,
    institution: "PT Jamkrida Jatim (BUMD)",
    guests: [
      { seat: 1, name: "Untung Heri Sukoco", role: "Dirut Jamkrida Jatim", confirmed: true },
      { seat: 2, name: "Achmad Nur Cholis", role: "Direktur Operasional Jamkrida", confirmed: true },
      { seat: 3, name: "Budi Tjahjono", role: "Pimpinan Askrindo Surabaya", confirmed: true },
      { seat: 4, name: "Didiet S. Pamungkas", role: "Kepala Cabang Jasindo", confirmed: true },
      { seat: 5, name: "Hendra Lukito", role: "Ketua AAUI Jawa Timur", confirmed: true },
      { seat: 6, name: "Drs. Budi Setiawan", role: "Komisaris Bank UMKM Jatim", confirmed: true },
      { seat: 7, name: "Yudhi Wahyudi", role: "Dirut BPR Jatim (Bank UMKM)", confirmed: true },
      { seat: 8, name: "Heru Supriyanto", role: "Direktur Kepatuhan Bank Jatim", confirmed: true }
    ]
  },
  {
    id: 26,
    name: "Meja 26",
    tier: "PEMBERDAYAAN PEREMPUAN & PKK",
    category: "pemda",
    wing: "right",
    x: 785,
    y: 440,
    status: "8 dari 8 Kursi Terisi",
    note: "Tim Penggerak PKK Provinsi & BKOW Jawa Timur.",
    isUserTable: false,
    institution: "TP PKK Provinsi Jawa Timur",
    guests: [
      { seat: 1, name: "Dra. Tri Wahyu Liswati", role: "Kadis PPPA Provinsi Jatim", confirmed: true },
      { seat: 2, name: "Hj. Fatma Saifullah Yusuf", role: "Ketua BKOW Jawa Timur", confirmed: true },
      { seat: 3, name: "Dra. Hj. Aisyah Hamid Baidlowi", role: "Tokoh Muslimat NU Jatim", confirmed: true },
      { seat: 4, name: "Dra. Hj. Khofifah Mas'ud", role: "Ketua Fatayat NU Jatim", confirmed: true },
      { seat: 5, name: "Prof. Dr. Emy Susanti", role: "Pakar Gender Sosiologi Unair", confirmed: true },
      { seat: 6, name: "Dr. Sri Setyadji", role: "Aktivis Perlindungan Anak", confirmed: true },
      { seat: 7, name: "Lita Machfud Arifin", role: "Ketua Yayasan Cinta Anak", confirmed: true },
      { seat: 8, name: "Dra. Endang Sulistyowati", role: "Sekretaris TP PKK Jawa Timur", confirmed: true }
    ]
  },
  {
    id: 28,
    name: "Meja 28",
    tier: "ADVOKASI & PENEGAKAN HUKUM",
    category: "pemda",
    wing: "right",
    x: 895,
    y: 440,
    status: "8 dari 8 Kursi Terisi",
    note: "PERADI Surabaya & Pakar Hukum Acara Pidana.",
    isUserTable: false,
    institution: "DPD PERADI Jawa Timur",
    guests: [
      { seat: 1, name: "H. Abdul Salam, S.H.", role: "Ketua DPC PERADI Surabaya", confirmed: true },
      { seat: 2, name: "Hadi Mulyo, S.H.", role: "Sekretaris PERADI Surabaya", confirmed: true },
      { seat: 3, name: "Dr. Sudiman Sidabukke", role: "Pakar Hukum Pidana Senior", confirmed: true },
      { seat: 4, name: "Prof. Nur Basuki Minarno", role: "Guru Besar Pidana Unair", confirmed: true },
      { seat: 5, name: "Dr. M. Hadi Shubhan", role: "Pakar Hukum Kepailitan", confirmed: true },
      { seat: 6, name: "Drs. H. M. Sholeh, S.H.", role: "Advokat Warga", confirmed: true },
      { seat: 7, name: "Wayan Titip Sulaksana", role: "Pengamat Hukum", confirmed: true },
      { seat: 8, name: "Dr. Sunarno Edy Wibowo", role: "Ketua Ikadin Surabaya", confirmed: true }
    ]
  },

  // Row 5 (y=560)
  {
    id: 30,
    name: "Meja 30",
    tier: "KEPALA DAERAH PULAU MADURA",
    category: "pemda",
    wing: "right",
    x: 620,
    y: 560,
    status: "8 dari 8 Kursi Terisi",
    note: "Pemerintah Bangkalan, Sampang, Pamekasan, Sumenep.",
    isUserTable: false,
    institution: "Bakorwil IV Pamekasan",
    guests: [
      { seat: 1, name: "Arief M. Edie, M.Si.", role: "Pj. Bupati Bangkalan", confirmed: true },
      { seat: 2, name: "Ir. Moh. Taufan Zairinsjah", role: "Sekda Kabupaten Bangkalan", confirmed: true },
      { seat: 3, name: "Drs. Ec. Sufii, M.M.", role: "Kepala Bakorwil IV", confirmed: true },
      { seat: 4, name: "Dr. Ir. RB. Fattah Jasin", role: "Birokrat Senior Madura", confirmed: true },
      { seat: 5, name: "K.H. Kholilurrahman", role: "Tokoh Ulama Pamekasan", confirmed: true },
      { seat: 6, name: "H. Achmad Syafii", role: "Tokoh Politik Madura", confirmed: true },
      { seat: 7, name: "K.H. Muhammad Syamsul Arifin", role: "Pengasuh Ponpes Banyuanyar", confirmed: true },
      { seat: 8, name: "Dr. Safi', S.H., M.H.", role: "Rektor Universitas Trunojoyo", confirmed: true }
    ]
  },
  {
    id: 32,
    name: "Meja 32",
    tier: "PEMUDA KREATIF & KONTEN SIBER",
    category: "pemda",
    wing: "right",
    x: 730,
    y: 560,
    status: "8 dari 8 Kursi Terisi",
    note: "DPD KNPI Jatim, Sutradara Film & Pegiat Seni Kreatif.",
    isUserTable: false,
    institution: "DPD KNPI Jawa Timur & Komunitas Kreatif",
    guests: [
      { seat: 1, name: "M. Fajar Ridwan Hisjam", role: "Ketua DPD KNPI Jawa Timur", confirmed: true },
      { seat: 2, name: "Achmad Maududi", role: "Ketua Pemuda Pancasila Jatim", confirmed: true },
      { seat: 3, name: "Gus Hans (Zahrul Azhar)", role: "Tokoh Muda Pesantren", confirmed: true },
      { seat: 4, name: "Bayu Skak", role: "Sutradara & Kreator Konten Jatim", confirmed: true },
      { seat: 5, name: "Faris Naufal", role: "Founder Desain Grafis Surabaya", confirmed: true },
      { seat: 6, name: "Nanda Arsyinta", role: "Influencer Gaya Hidup Muda", confirmed: true },
      { seat: 7, name: "Rizky Ramadhan", role: "Pemuda Pelopor Teknologi Jatim", confirmed: true },
      { seat: 8, name: "Anisa Rahmawati", role: "Duta Wisata Raka-Raki Jatim", confirmed: true }
    ]
  },
  {
    id: 34,
    name: "Meja 34",
    tier: "KETAHANAN PANGAN & AGRIBISNIS",
    category: "bumn",
    wing: "right",
    x: 840,
    y: 560,
    status: "8 dari 8 Kursi Terisi",
    note: "Perum Bulog Jatim, PTPN I & Dewan Tani Nelayan.",
    isUserTable: false,
    institution: "Perum Bulog Kanwil Jawa Timur",
    guests: [
      { seat: 1, name: "Ermin Tora", role: "Pimpinan Wilayah Bulog Jatim", confirmed: true },
      { seat: 2, name: "Subali Sachmin", role: "Head of Operation Bulog Jatim", confirmed: true },
      { seat: 3, name: "Subagiyo", role: "Region Head PTPN I Regional 4", confirmed: true },
      { seat: 4, name: "Ir. H. Warsito", role: "Ketua KTNA Jawa Timur", confirmed: true },
      { seat: 5, name: "Dr. Ir. Budi Hartono", role: "Pakar Ekonomi Pertanian Unibraw", confirmed: true },
      { seat: 6, name: "H. Mustofa Kamal Pasa", role: "Pengusaha Industri Beras", confirmed: true },
      { seat: 7, name: "Ir. Indah Megahwati", role: "Kadis Peternakan Jatim", confirmed: true },
      { seat: 8, name: "Dr. M. Isa Anshori", role: "Kadis Kelautan Jatim", confirmed: true }
    ]
  },

  // Row 6 (y=680)
  {
    id: 36,
    name: "Meja 36",
    tier: "KERUKUNAN UMAT BERAGAMA",
    category: "pemda",
    wing: "right",
    x: 620,
    y: 680,
    status: "8 dari 8 Kursi Terisi",
    note: "Forum Kerukunan Umat Beragama (FKUB) & Kemenag Jatim.",
    isUserTable: false,
    institution: "FKUB Provinsi Jawa Timur",
    guests: [
      { seat: 1, name: "Drs. K.H. A. Hamid Syarif", role: "Ketua FKUB Provinsi Jawa Timur", confirmed: true },
      { seat: 2, name: "Romo Benny Susetyo, Pr.", role: "Tokoh Rohaniwan Katolik", confirmed: true },
      { seat: 3, name: "Pendeta Simon Filantropa", role: "Ketua PGI Wilayah Jatim", confirmed: true },
      { seat: 4, name: "I Ketut Sudiarta", role: "Ketua PHDI Jawa Timur", confirmed: true },
      { seat: 5, name: "Bhikkhu Jayamedho", role: "Sangha Theravada Indonesia Jatim", confirmed: true },
      { seat: 6, name: "Ongky Setio Kuncono", role: "MATAKIN Jawa Timur", confirmed: true },
      { seat: 7, name: "Dr. H. Husnul Maram", role: "Kakanwil Kemenag Jatim", confirmed: true },
      { seat: 8, name: "Dr. H. Santoso", role: "Kabag TU Kemenag Jatim", confirmed: true }
    ]
  },
  {
    id: 38,
    name: "Meja 38",
    tier: "FILANTROPI & KEMASLAHATAN",
    category: "pemda",
    wing: "right",
    x: 730,
    y: 680,
    status: "8 dari 8 Kursi Terisi",
    note: "BAZNAS Jawa Timur & Pengasuh Pesantren Besar.",
    isUserTable: false,
    institution: "Badan Amil Zakat Nasional (BAZNAS) Jatim",
    guests: [
      { seat: 1, name: "Prof. Dr. K.H. Ali Maschan Moesa", role: "Ketua BAZNAS Jawa Timur", confirmed: true },
      { seat: 2, name: "Drs. H. Muhammad Roziqi", role: "Dewan Kehormatan BAZNAS", confirmed: true },
      { seat: 3, name: "Kholid Abdillah", role: "Pimpinan Dompet Dhuafa Jatim", confirmed: true },
      { seat: 4, name: "Gus Salam (K.H. Abdussalam)", role: "Pesantren Denanyar Jombang", confirmed: true },
      { seat: 5, name: "Drs. H. Ali Badri Zabandiyah", role: "Tokoh Kerukunan Madura Surabaya", confirmed: true },
      { seat: 6, name: "Hj. Mutammimah Hasyim Muzadi", role: "Al-Hikam Malang", confirmed: true },
      { seat: 7, name: "Gus Ali (K.H. Agoes Ali Masyhuri)", role: "Bumi Shalawat Sidoarjo", confirmed: true },
      { seat: 8, name: "K.H. Dzul Hilmi", role: "Imam Masjid Al-Akbar Surabaya", confirmed: true }
    ]
  },
  {
    id: 40,
    name: "Meja 40",
    tier: "SATGAS PENGAMANAN & MEDIS VVIP",
    category: "vvip",
    wing: "right",
    x: 840,
    y: 680,
    status: "8 dari 8 Kursi Terisi",
    note: "Dansatgas Pam VVIP Korem 084/Bhaskara Jaya & Tim Dokter.",
    isUserTable: false,
    institution: "Korem 084/BJ & Tim Medis Soetomo",
    guests: [
      { seat: 1, name: "Kolonel Inf. Yuswanto", role: "Danrem 084/Bhaskara Jaya", confirmed: true },
      { seat: 2, name: "Letkol Cpm Darmawan", role: "Dandenpom V/4 Surabaya", confirmed: true },
      { seat: 3, name: "Kolonel Ckm dr. Deddy Firmansyah", role: "Kakesdam V/Brawijaya", confirmed: true },
      { seat: 4, name: "Kompol Arief Wicaksono", role: "Kabag Ops Polrestabes", confirmed: true },
      { seat: 5, name: "dr. Tri Wahyu Sarwiyata", role: "Dokter Siaga VVIP Soetomo", confirmed: true },
      { seat: 6, name: "Lettu Ckm dr. Aditya Pratama", role: "Dokter Pendamping Rombongan", confirmed: true },
      { seat: 7, name: "Kapten Inf. Suhartono", role: "Pasi Intel Korem 084", confirmed: true },
      { seat: 8, name: "Iptu Hendra Setiawan", role: "Pengendali Lalu Lintas Lobi", confirmed: true }
    ]
  }
];
