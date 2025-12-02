import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { useState, useEffect } from "react";
import { 
  Home, ChevronDown, Search, Phone, Mail, MapPin, 
  Facebook, Instagram, Twitter, Youtube, MessageCircle,
  FileText, Users, Briefcase, LogIn, HelpCircle, Building2
} from "lucide-react";
import imgImage2 from "figma:asset/3787650c8216c66f97786963cbbc8afb0ef7775b.png";
import imgImage3 from "figma:asset/b6780b20b909a70bbe0d9f97d20c2ecab9b1f82d.png";
import imgImage8RemovebgPreview1 from "figma:asset/f1877df2cf948be4e3d25b64a3bd3501c4e0756f.png";
import imgImage6 from "figma:asset/f6fe0d530241727a578886f0be7e593fd4d3556f.png";

type NavItem = "HOME" | "VISI & MISI" | "JOB PROFILE" | "REGISTRASI" | "LOGIN" | "FAQ";

export default function App() {
  const [activeNav, setActiveNav] = useState<NavItem>("HOME");
  const [scrolled, setScrolled] = useState(false);
  const [showKAIModal, setShowKAIModal] = useState(false);
  const [showDasarHukumModal, setShowDasarHukumModal] = useState(false);
  const [showHelpModal, setShowHelpModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [jenisOpen, setJenisOpen] = useState(false);
  const [kategoriOpen, setKategoriOpen] = useState(false);

  const { scrollY } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: { name: NavItem; icon: any }[] = [
    { name: "HOME", icon: Home },
    { name: "VISI & MISI", icon: FileText },
    { name: "JOB PROFILE", icon: Briefcase },
    { name: "REGISTRASI", icon: Users },
    { name: "LOGIN", icon: LogIn },
    { name: "FAQ", icon: HelpCircle }
  ];

  const jenisOptions = ["Pegawai Tetap", "Kontrak PKWT", "Program Magang", "Outsourcing"];
  const kategoriOptions = ["Lowongan Kerja", "Pengumuman Resmi", "Info Rekrutmen", "Hasil Seleksi"];

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 min-h-screen w-full">
      {/* Sticky Navbar */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-lg py-3'
            : 'bg-transparent py-6'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-4 cursor-pointer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative">
              <motion.img 
                src={imgImage2} 
                alt="KAI Logo" 
                className="h-14 w-auto"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#ed6b23]/20 to-[#2d2a70]/20 rounded-lg blur-xl"
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
            <div>
              <p className="font-bold text-xl bg-gradient-to-r from-[#ed6b23] to-[#ff8c42] bg-clip-text text-transparent">
                REKRUTMEN KAI
              </p>
              <p className="text-xs text-slate-600 font-medium">PT Kereta Api Indonesia (Persero)</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <motion.button
                  key={item.name}
                  onClick={() => setActiveNav(item.name)}
                  className={`px-5 py-2.5 rounded-xl flex items-center gap-2 transition-all font-medium text-sm relative ${
                    activeNav === item.name
                      ? 'bg-gradient-to-r from-[#ed6b23] to-[#ff8c42] text-white shadow-lg shadow-orange-500/40'
                      : scrolled 
                        ? 'text-slate-700 hover:bg-slate-100' 
                        : 'text-white hover:bg-white/10'
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                  {activeNav === item.name && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-xl"
                      initial={{ x: "-100%" }}
                      animate={{ x: "100%" }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#2d2a70] via-[#4a47a3] to-[#5650d6]">
            {/* Animated Grid Pattern */}
            <motion.div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `
                  linear-gradient(to right, white 1px, transparent 1px),
                  linear-gradient(to bottom, white 1px, transparent 1px)
                `,
                backgroundSize: '60px 60px',
              }}
              animate={{
                backgroundPosition: ['0px 0px', '60px 60px'],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Gradient Orbs */}
            <motion.div
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ed6b23]/20 rounded-full blur-3xl"
              animate={{
                x: [0, 50, 0],
                y: [0, 30, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"
              animate={{
                x: [0, -50, 0],
                y: [0, -30, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <motion.div
            className="text-white space-y-8 z-10"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              <motion.div
                className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-[#ffa500] font-semibold text-sm">Portal Resmi Rekrutmen KAI</p>
              </motion.div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Sistem Seleksi<br />
                <span className="bg-gradient-to-r from-[#ffa500] via-[#ff8c42] to-[#ed6b23] bg-clip-text text-transparent">
                  Calon Pegawai
                </span>
              </h1>
            </motion.div>

            <motion.p
              className="text-xl text-blue-100 leading-relaxed max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Bergabunglah dengan PT Kereta Api Indonesia (Persero) dan jadilah bagian dari transformasi transportasi masa depan Indonesia.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.button
                className="bg-gradient-to-r from-[#ed6b23] to-[#ff8c42] text-white px-8 py-4 rounded-xl font-semibold shadow-2xl relative overflow-hidden group"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 20px 60px rgba(237, 107, 35, 0.6)" 
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowKAIModal(true)}
              >
                <span className="relative z-10 flex items-center gap-2 justify-center">
                  <Search className="w-5 h-5" />
                  CEK STATUS PENDAFTARAN
                </span>
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%", skewX: -20 }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>

              <motion.button
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold border-2 border-white/30 relative overflow-hidden group"
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: "rgba(255,255,255,0.2)",
                  borderColor: "rgba(255,255,255,0.5)"
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowDasarHukumModal(true)}
              >
                <span className="relative z-10 flex items-center gap-2 justify-center">
                  <FileText className="w-5 h-5" />
                  DASAR HUKUM
                </span>
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              {[
                { number: "10K+", label: "Pegawai" },
                { number: "50+", label: "Cabang" },
                { number: "24/7", label: "Support" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                >
                  <p className="text-3xl font-bold text-[#ffa500]">{stat.number}</p>
                  <p className="text-sm text-blue-200 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Images - LURUS & PRESISI */}
          <motion.div
            className="relative h-[550px] hidden lg:block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#ed6b23]/20 to-[#5650d6]/20 rounded-3xl blur-3xl" />

            {/* Staff Image Card - Top Right */}
            <motion.div
              className="absolute top-0 right-0 w-[420px] h-[280px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 bg-white/5 backdrop-blur-sm"
              animate={{ 
                y: [0, -12, 0],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.02, rotate: 1 }}
            >
              <img 
                src={imgImage3} 
                alt="KAI Staff" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-bold text-lg">Tim Profesional KAI</p>
                <p className="text-blue-200 text-sm">Melayani dengan Sepenuh Hati</p>
              </div>
            </motion.div>

            {/* Train Image - LURUS, HORIZONTAL, PRESISI */}
            <motion.div
              className="absolute bottom-24 left-0 w-[450px] h-[220px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 bg-white/5 backdrop-blur-sm z-10"
              animate={{ 
                y: [0, -15, 0],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Gambar kereta diposisikan LURUS dan HORIZONTAL */}
              <div className="w-full h-full relative">
                <img 
                  src={imgImage6} 
                  alt="KAI Train" 
                  className="w-full h-full object-cover object-center"
                  style={{ 
                    objectFit: 'cover',
                    objectPosition: 'center center'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-bold text-lg">Kereta Api Indonesia</p>
                  <p className="text-blue-200 text-sm">Modern & Terpercaya</p>
                </div>
              </div>
            </motion.div>

            {/* Officer Image - Presisi di samping */}
            <motion.div
              className="absolute bottom-0 right-8 w-[240px] h-[240px] z-20"
              animate={{ 
                y: [0, -18, 0],
              }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative w-full h-full">
                {/* Glow effect behind officer */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#ed6b23] to-[#ffa500] rounded-full blur-2xl opacity-50" />
                <img 
                  src={imgImage8RemovebgPreview1} 
                  alt="KAI Officer" 
                  className="relative w-full h-full object-contain drop-shadow-2xl"
                />
              </div>
            </motion.div>

            {/* Floating badge */}
            <motion.div
              className="absolute top-1/2 left-0 bg-white rounded-2xl px-6 py-4 shadow-2xl"
              animate={{ 
                x: [0, 10, 0],
                y: [0, -10, 0],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="text-2xl font-bold text-[#2d2a70]">2024</p>
              <p className="text-sm text-slate-600">Rekrutmen Aktif</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <p className="text-white/60 text-sm font-medium">Scroll untuk lanjut</p>
          <ChevronDown className="w-6 h-6 text-white/60" />
        </motion.div>
      </section>

      {/* Search Section */}
      <motion.section
        className="relative -mt-24 z-20 max-w-6xl mx-auto px-6 pb-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="bg-white rounded-3xl shadow-2xl p-8 border border-slate-200"
          whileHover={{ 
            y: -8, 
            boxShadow: "0 30px 60px rgba(0,0,0,0.15)" 
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-[#2d2a70] to-[#5650d6] bg-clip-text text-transparent mb-2">
              Cari Informasi Rekrutmen
            </h2>
            <p className="text-slate-600">Temukan lowongan dan pengumuman terbaru</p>
          </div>

          <div className="grid lg:grid-cols-4 gap-4">
            {/* Search Input */}
            <motion.div
              className="lg:col-span-1"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Kata kunci..."
                  className="w-full pl-10 pr-4 py-3.5 border-2 border-slate-200 rounded-xl outline-none focus:border-[#ed6b23] focus:ring-4 focus:ring-orange-100 transition-all text-slate-700 font-medium"
                />
              </div>
            </motion.div>

            {/* Jenis Dropdown */}
            <div className="relative">
              <motion.button
                className="w-full px-4 py-3.5 border-2 border-slate-200 rounded-xl flex items-center justify-between text-left hover:border-[#ed6b23] transition-all font-medium text-slate-700 bg-white"
                onClick={() => {
                  setJenisOpen(!jenisOpen);
                  setKategoriOpen(false);
                }}
                whileHover={{ scale: 1.02 }}
              >
                <span>Jenis Penerimaan</span>
                <motion.div
                  animate={{ rotate: jenisOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-slate-400" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {jenisOpen && (
                  <motion.div
                    className="absolute top-full mt-2 left-0 right-0 bg-white rounded-xl shadow-2xl overflow-hidden z-30 border-2 border-slate-100"
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    {jenisOptions.map((option, index) => (
                      <motion.button
                        key={option}
                        className="w-full px-4 py-3.5 text-left text-slate-700 hover:bg-gradient-to-r hover:from-[#ed6b23] hover:to-[#ff8c42] hover:text-white transition-all font-medium"
                        whileHover={{ x: 8 }}
                        onClick={() => setJenisOpen(false)}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        {option}
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Kategori Dropdown */}
            <div className="relative">
              <motion.button
                className="w-full px-4 py-3.5 border-2 border-slate-200 rounded-xl flex items-center justify-between text-left hover:border-[#ed6b23] transition-all font-medium text-slate-700 bg-white"
                onClick={() => {
                  setKategoriOpen(!kategoriOpen);
                  setJenisOpen(false);
                }}
                whileHover={{ scale: 1.02 }}
              >
                <span>Kategori Informasi</span>
                <motion.div
                  animate={{ rotate: kategoriOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-slate-400" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {kategoriOpen && (
                  <motion.div
                    className="absolute top-full mt-2 left-0 right-0 bg-white rounded-xl shadow-2xl overflow-hidden z-30 border-2 border-slate-100"
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    {kategoriOptions.map((option, index) => (
                      <motion.button
                        key={option}
                        className="w-full px-4 py-3.5 text-left text-slate-700 hover:bg-gradient-to-r hover:from-[#ed6b23] hover:to-[#ff8c42] hover:text-white transition-all font-medium"
                        whileHover={{ x: 8 }}
                        onClick={() => setKategoriOpen(false)}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        {option}
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Search Button */}
            <motion.button
              className="bg-gradient-to-r from-[#2d2a70] to-[#5650d6] text-white px-6 py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 15px 40px rgba(45, 42, 112, 0.5)" 
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Search className="w-5 h-5" />
              CARI
            </motion.button>
          </div>
        </motion.div>
      </motion.section>

      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-[#1a1852] via-[#2d2a70] to-[#1a1852] text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(to right, white 1px, transparent 1px),
                linear-gradient(to bottom, white 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* About - Left */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <img src={imgImage2} alt="KAI Logo" className="h-16 w-auto" />
                <div>
                  <p className="font-bold text-lg">PT KAI</p>
                  <p className="text-xs text-blue-300">Persero</p>
                </div>
              </div>
              <p className="text-blue-200 text-sm leading-relaxed">
                PT Kereta Api Indonesia (Persero) adalah BUMN yang menyelenggarakan jasa angkutan kereta api untuk memajukan transportasi Indonesia.
              </p>
            </motion.div>

            {/* Contact - BAGIAN KIRI BAWAH DENGAN IKON JELAS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-6"
            >
              <h3 className="font-bold text-xl mb-6 text-white">HUBUNGI KAMI</h3>
              <div className="space-y-4">
                {/* Phone */}
                <motion.a
                  href="tel:121"
                  className="flex items-center gap-4 text-blue-200 hover:text-[#ffa500] transition-colors group"
                  whileHover={{ x: 8 }}
                >
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-[#ed6b23] transition-all">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-blue-300 font-medium">Telepon</p>
                    <p className="font-semibold text-white">121 (24/7)</p>
                  </div>
                </motion.a>

                {/* Email */}
                <motion.a
                  href="mailto:cs@kai.id"
                  className="flex items-center gap-4 text-blue-200 hover:text-[#ffa500] transition-colors group"
                  whileHover={{ x: 8 }}
                >
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-[#ed6b23] transition-all">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-blue-300 font-medium">Email Resmi</p>
                    <p className="font-semibold text-white">cs@kai.id</p>
                  </div>
                </motion.a>

                {/* Address */}
                <motion.div
                  className="flex items-start gap-4 text-blue-200 group"
                  whileHover={{ x: 8 }}
                >
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-[#ed6b23] transition-all">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-blue-300 font-medium mb-1">Kantor Pusat</p>
                    <p className="font-semibold text-white text-sm leading-relaxed">
                      Jl. Perintis Kemerdekaan No. 1<br />
                      Bandung, Jawa Barat 40117
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="font-bold text-xl mb-6 text-white">TAUTAN CEPAT</h3>
              <div className="space-y-3">
                {[
                  "Website Resmi KAI", 
                  "Portal Rekrutmen", 
                  "Berita & Pengumuman", 
                  "Syarat & Ketentuan",
                  "Kebijakan Privasi",
                  "FAQ"
                ].map((link) => (
                  <motion.a
                    key={link}
                    href="#"
                    className="block text-blue-200 hover:text-[#ffa500] transition-colors font-medium"
                    whileHover={{ x: 8 }}
                  >
                    → {link}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <h3 className="font-bold text-xl mb-6 text-white">IKUTI KAMI</h3>
              <p className="text-blue-200 text-sm mb-6">
                Dapatkan update terbaru seputar rekrutmen dan informasi PT KAI
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { Icon: Facebook, name: "Facebook", color: "#1877f2" },
                  { Icon: Instagram, name: "Instagram", color: "#e4405f" },
                  { Icon: Twitter, name: "Twitter", color: "#1da1f2" },
                  { Icon: Youtube, name: "YouTube", color: "#ff0000" }
                ].map(({ Icon, name, color }) => (
                  <motion.a
                    key={name}
                    href="#"
                    className="flex items-center gap-3 px-4 py-3 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all group"
                    whileHover={{ 
                      scale: 1.05, 
                      y: -5,
                      backgroundColor: color,
                      borderColor: color
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-sm font-medium">{name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Copyright */}
          <motion.div
            className="border-t border-white/20 mt-12 pt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-blue-200 text-sm">
              © 2024 PT Kereta Api Indonesia (Persero). All rights reserved.
            </p>
            <p className="text-blue-300/60 text-xs mt-2">
              Rekrutmen Human Capital Management Division
            </p>
          </motion.div>
        </div>
      </footer>

      {/* Floating Help Button - KANAN BAWAH */}
      <motion.button
        className="fixed bottom-8 right-8 bg-gradient-to-r from-[#ed6b23] to-[#ff8c42] text-white p-5 rounded-2xl shadow-2xl z-50 group"
        whileHover={{ 
          scale: 1.15, 
          boxShadow: "0 25px 50px rgba(237, 107, 35, 0.6)",
          rotate: 5
        }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowHelpModal(true)}
        animate={{ 
          y: [0, -12, 0],
        }}
        transition={{ 
          duration: 2.5, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <MessageCircle className="w-7 h-7" />
        <motion.div
          className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        {/* Tooltip */}
        <motion.div
          className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
          initial={{ x: 10, opacity: 0 }}
          whileHover={{ x: 0, opacity: 1 }}
        >
          Butuh Bantuan?
        </motion.div>
      </motion.button>

      {/* Modals */}
      <AnimatePresence>
        {showKAIModal && (
          <Modal onClose={() => setShowKAIModal(false)} title="CEK STATUS PENDAFTARAN">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-orange-50 p-5 rounded-xl border border-blue-200">
                <p className="text-slate-700 text-sm leading-relaxed">
                  <strong className="text-[#2d2a70]">Info:</strong> Masukkan nomor registrasi yang Anda terima melalui email setelah menyelesaikan pendaftaran.
                </p>
              </div>
              
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-slate-700">
                  Nomor Registrasi
                </label>
                <input
                  type="text"
                  placeholder="Contoh: KAI2024-XXXXX-XXXXX"
                  className="w-full px-4 py-4 border-2 border-slate-200 rounded-xl outline-none focus:border-[#ed6b23] focus:ring-4 focus:ring-orange-100 transition-all text-slate-700 font-medium"
                />
              </div>

              <motion.button
                className="w-full bg-gradient-to-r from-[#ed6b23] to-[#ff8c42] text-white py-4 rounded-xl font-semibold shadow-lg"
                whileHover={{ 
                  scale: 1.02, 
                  boxShadow: "0 20px 40px rgba(237, 107, 35, 0.5)" 
                }}
                whileTap={{ scale: 0.98 }}
              >
                CEK STATUS SEKARANG
              </motion.button>
            </div>
          </Modal>
        )}

        {showDasarHukumModal && (
          <Modal onClose={() => setShowDasarHukumModal(false)} title="DASAR HUKUM SELEKSI">
            <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
              {[
                {
                  title: "1. Undang-Undang Nomor 23 Tahun 2007",
                  desc: "Tentang Perkeretaapian yang mengatur penyelenggaraan perkeretaapian di Indonesia dan standar keselamatan transportasi."
                },
                {
                  title: "2. Peraturan Pemerintah Nomor 72 Tahun 2013",
                  desc: "Tentang Penyelenggaraan Usaha Angkutan Kereta Api dan regulasi operasional perusahaan."
                },
                {
                  title: "3. Keputusan Direksi PT KAI (Persero)",
                  desc: "Tentang Pedoman Rekrutmen dan Seleksi Calon Pegawai PT Kereta Api Indonesia dengan standar kompetensi yang ditetapkan."
                },
                {
                  title: "4. Standar Kompetensi Nasional Indonesia",
                  desc: "SKKNI bidang perkeretaapian yang menjadi acuan kompetensi dan kualifikasi pegawai KAI."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-r from-blue-50 via-white to-orange-50 p-6 rounded-xl border-2 border-slate-200"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.02, 
                    borderColor: "#ed6b23",
                    boxShadow: "0 10px 30px rgba(237, 107, 35, 0.15)"
                  }}
                >
                  <h3 className="font-bold text-[#2d2a70] mb-3 text-lg">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </Modal>
        )}

        {showHelpModal && (
          <Modal onClose={() => setShowHelpModal(false)} title="PUSAT BANTUAN">
            <div className="space-y-6">
              <p className="text-slate-600 text-center">
                Pilih cara yang paling nyaman untuk menghubungi kami
              </p>
              
              <div className="grid gap-4">
                <motion.a
                  href="tel:121"
                  className="flex items-center gap-5 p-5 bg-gradient-to-r from-blue-50 to-white rounded-2xl border-2 border-slate-200 hover:border-[#ed6b23] transition-all group"
                  whileHover={{ scale: 1.03, x: 8 }}
                >
                  <div className="w-14 h-14 bg-gradient-to-r from-[#2d2a70] to-[#5650d6] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 text-lg">Call Center</p>
                    <p className="text-sm text-slate-600">121 (Tersedia 24/7)</p>
                  </div>
                </motion.a>

                <motion.a
                  href="mailto:cs@kai.id"
                  className="flex items-center gap-5 p-5 bg-gradient-to-r from-orange-50 to-white rounded-2xl border-2 border-slate-200 hover:border-[#ed6b23] transition-all group"
                  whileHover={{ scale: 1.03, x: 8 }}
                >
                  <div className="w-14 h-14 bg-gradient-to-r from-[#ed6b23] to-[#ff8c42] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 text-lg">Email Support</p>
                    <p className="text-sm text-slate-600">cs@kai.id</p>
                  </div>
                </motion.a>

                <motion.div
                  className="flex items-center gap-5 p-5 bg-gradient-to-r from-green-50 to-white rounded-2xl border-2 border-slate-200 group cursor-pointer"
                  whileHover={{ scale: 1.03, x: 8 }}
                >
                  <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Building2 className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 text-lg">Kantor Pusat</p>
                    <p className="text-sm text-slate-600">Bandung, Jawa Barat</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
}

// Modal Component
function Modal({ onClose, title, children }: { onClose: () => void; title: string; children: React.ReactNode }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="absolute inset-0 bg-black/70 backdrop-blur-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
      
      <motion.div
        className="relative bg-white rounded-3xl p-8 max-w-2xl w-full shadow-2xl max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.9, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 30 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-[#2d2a70] to-[#5650d6] bg-clip-text text-transparent">
            {title}
          </h2>
          <motion.button
            className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-[#ed6b23] text-slate-600 hover:text-white flex items-center justify-center transition-colors"
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
          >
            <span className="text-2xl">×</span>
          </motion.button>
        </div>
        {children}
      </motion.div>
    </motion.div>
  );
}