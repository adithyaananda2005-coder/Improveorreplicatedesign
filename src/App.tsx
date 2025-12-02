import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import svgPaths from "./imports/svg-m59p2qe2os";
import imgImage2 from "figma:asset/3787650c8216c66f97786963cbbc8afb0ef7775b.png";
import imgImage3 from "figma:asset/b6780b20b909a70bbe0d9f97d20c2ecab9b1f82d.png";
import imgImage8RemovebgPreview1 from "figma:asset/f1877df2cf948be4e3d25b64a3bd3501c4e0756f.png";
import imgImage6 from "figma:asset/f6fe0d530241727a578886f0be7e593fd4d3556f.png";

type NavItem = "HOME" | "VISI & MISI" | "JOB PROFILE" | "REGISTRASI" | "LOGIN" | "FAQ";

export default function App() {
  const [activeNav, setActiveNav] = useState<NavItem>("HOME");
  const [isScrolled, setIsScrolled] = useState(false);
  const [showKAIModal, setShowKAIModal] = useState(false);
  const [showDasarHukumModal, setShowDasarHukumModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [jenisOpen, setJenisOpen] = useState(false);
  const [kategoriOpen, setKategoriOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: { name: NavItem; width: string }[] = [
    { name: "HOME", width: "111.332px" },
    { name: "VISI & MISI", width: "156.877px" },
    { name: "JOB PROFILE", width: "156.877px" },
    { name: "REGISTRASI", width: "156.877px" },
    { name: "LOGIN", width: "111.332px" },
    { name: "FAQ", width: "67.052px" }
  ];

  const jenisOptions = ["Pegawai Tetap", "Kontrak", "Magang", "Outsourcing"];
  const kategoriOptions = ["Lowongan Kerja", "Pengumuman", "Info Rekrutmen", "Hasil Seleksi"];

  return (
    <div className="bg-white min-h-screen w-full flex justify-center overflow-x-hidden">
      <div className="relative w-[1440px] min-h-screen">
      {/* Background Gradients with Animation */}
      <motion.div 
        className="absolute left-0 top-0 w-full h-[673px] bg-gradient-to-b from-[#2d2a70] to-[#5650d6]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />
      
      <motion.div 
        className="absolute left-0 top-[673px] w-full h-[93px] bg-[#ed6b23]"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        style={{ transformOrigin: "left" }}
      />
      
      <motion.div 
        className="absolute left-0 top-[766px] w-full h-[186px] bg-gradient-to-b from-[#5650d6] to-[#2d2a70]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      />

      {/* Logo and Header */}
      <motion.div 
        className="absolute left-[27px] top-[79px] flex flex-col items-start w-[354.567px]"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="flex gap-[16.995px] items-center w-full">
          <motion.div 
            className="h-[46.131px] w-[109.347px] relative cursor-pointer"
            whileHover={{ scale: 1.05, rotate: 3 }}
            whileTap={{ scale: 0.95 }}
          >
            <img alt="KAI Logo" className="absolute inset-0 object-cover size-full" src={imgImage2} />
          </motion.div>
          <p className="font-semibold text-[#ed6b23] text-[30px] leading-[38px]">| REKRUTMEN</p>
        </div>
        <p className="text-white text-[12px] leading-[16px] tracking-[0.4px]">
          PT KERETA API INDONESIA (PERSERO)
        </p>
      </motion.div>

      {/* Navigation */}
      <motion.div 
        className="absolute left-[406px] top-[86px] flex gap-[2.53px] items-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {navItems.map((item, index) => (
          <motion.div
            key={item.name}
            className="h-[41.75px] rounded-[2.53px] cursor-pointer relative overflow-hidden"
            style={{ width: item.width }}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveNav(item.name)}
          >
            <motion.div
              className="absolute inset-0"
              initial={false}
              animate={{ 
                backgroundColor: activeNav === item.name ? '#ffffff' : '#2d2a70'
              }}
              transition={{ duration: 0.3 }}
            />
            {activeNav === item.name && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
              />
            )}
            
            {index === 0 && (
              <motion.div 
                className="absolute left-[11.39px] top-[6.33px] size-[30.363px]"
                animate={{ rotate: activeNav === "HOME" ? 360 : 0 }}
                transition={{ duration: 0.5 }}
              >
                <svg className="block size-full" fill="none" viewBox="0 0 31 31">
                  <path d={svgPaths.p158bff90} fill={activeNav === item.name ? "#DC6803" : "#ffffff"} />
                </svg>
              </motion.div>
            )}
            
            <motion.p 
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold text-[17.712px] whitespace-nowrap"
              animate={{
                color: activeNav === item.name ? '#ed6b23' : '#ffffff'
              }}
              transition={{ duration: 0.3 }}
              style={{ paddingLeft: index === 0 ? '30px' : '0' }}
            >
              {item.name}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>

      {/* Hero Title */}
      <motion.div
        className="absolute left-[41px] top-[352px] w-[526px]"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <p className="text-[30px] leading-[38px] font-bold">
          <motion.span 
            className="text-[#ed6b23]"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            SISTEM SELEKSI
          </motion.span>{" "}
          <motion.span 
            className="text-[#2d2a70]"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            CALON PEGAWAI
          </motion.span>
        </p>
      </motion.div>

      {/* Small Logo */}
      <motion.div 
        className="absolute h-[24px] left-[553px] top-[359px] w-[56px]"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.6, delay: 0.9, type: "spring" }}
        whileHover={{ rotate: 360 }}
      >
        <img alt="" className="absolute inset-0 object-cover size-full" src={imgImage2} />
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        className="absolute left-[37px] top-[406px]"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.1 }}
      >
        <motion.div 
          className="bg-[#ed6b23] h-[38px] rounded-[10px] w-[300px] cursor-pointer relative overflow-hidden"
          whileHover={{ scale: 1.03, boxShadow: "0 15px 40px rgba(237, 107, 35, 0.4)" }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setShowKAIModal(true)}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.6 }}
          />
          <div className="absolute left-[45px] top-1/2 -translate-y-1/2 flex items-center gap-2">
            <p className="font-semibold text-[16px] text-white">CEK PENDATAAN LOLOS KAI 2024</p>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="size-[11.197px]"
            >
              <svg className="block size-full" fill="none" viewBox="0 0 12 10">
                <path d={svgPaths.p1ed93700} fill="white" />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute left-[344px] top-[406px]"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <motion.div 
          className="bg-[#2d2a70] h-[38px] rounded-[10px] w-[383px] cursor-pointer relative overflow-hidden"
          whileHover={{ scale: 1.03, boxShadow: "0 15px 40px rgba(45, 42, 112, 0.4)" }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setShowDasarHukumModal(true)}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.6 }}
          />
          <div className="absolute left-[8px] top-1/2 -translate-y-1/2 flex items-center gap-2 w-full">
            <p className="font-semibold text-[16px] text-white">DASAR HUKUM PENYELENGGARAN SELEKSI</p>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, delay: 0.3 }}
              className="size-[14.05px]"
            >
              <svg className="block size-full rotate-90" fill="none" viewBox="0 0 14 14">
                <path d={svgPaths.p2b60b400} fill="white" />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Hero Images with Parallax */}
      <motion.div 
        className="absolute h-[329px] left-[836px] top-[194px] w-[493px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden rounded-lg"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        whileHover={{ scale: 1.02, y: -8 }}
      >
        <motion.img 
          alt="Train Staff" 
          className="absolute inset-0 object-cover size-full" 
          src={imgImage3}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>

      <motion.div 
        className="absolute h-[249px] left-[760px] top-[377px] w-[393px] z-10"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        <motion.img 
          alt="Train" 
          className="absolute inset-0 object-cover size-full" 
          src={imgImage6}
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        />
      </motion.div>

      <motion.div 
        className="absolute left-[1102px] top-[377px] size-[267px] z-20"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.1, type: "spring", stiffness: 150 }}
      >
        <motion.img 
          alt="Officer" 
          className="absolute inset-0 object-cover size-full" 
          src={imgImage8RemovebgPreview1}
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
        />
      </motion.div>

      {/* Info Text */}
      <motion.p 
        className="absolute left-[831px] top-[609px] w-[578px] text-[9.701px] leading-[14.551px] text-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.3 }}
      >
        e-recruitment.kai.id merupakan website resmi rekrutmen PT Kereta Api Indonesia (Persero) yang baru. Bagi calon pelamar yang ingin mengikuti rekrutmen di PT Kereta Api Indonesia (Persero), agar melakukan registrasi ulang.
      </motion.p>

      {/* Search Section */}
      <motion.div 
        className="absolute left-[150px] top-[733px] flex gap-[48.629px] items-center"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Search Input */}
        <motion.div 
          className="relative w-[308.857px]"
          whileHover={{ scale: 1.01 }}
        >
          <motion.input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-white h-[46px] rounded-[13.143px] w-full px-4 outline-none text-[#475467]"
            placeholder="INFORMASI YANG DI CARI :"
            whileFocus={{ boxShadow: "0 0 0 3px rgba(237, 107, 35, 0.3)" }}
          />
          {!searchTerm && (
            <p className="absolute left-[22px] top-[8px] font-bold text-[20px] text-[#475467] pointer-events-none">
              INFORMASI YANG DI CARI :
            </p>
          )}
        </motion.div>

        {/* Jenis Penerimaan Dropdown */}
        <div className="relative w-[287.829px]">
          <motion.div
            className="bg-white h-[46px] rounded-[13.143px] cursor-pointer relative"
            onClick={() => {
              setJenisOpen(!jenisOpen);
              setKategoriOpen(false);
            }}
            whileHover={{ scale: 1.01 }}
            animate={{
              boxShadow: jenisOpen ? "0 0 0 3px rgba(237, 107, 35, 0.3)" : "0 0 0 0px rgba(237, 107, 35, 0)"
            }}
          >
            <p className="absolute left-[8px] top-[8px] font-bold text-[20px] text-[#475467]">
              JENIS PENERIMAAN
            </p>
            <motion.div
              className="absolute right-4 top-1/2 -translate-y-1/2 size-[18.562px]"
              animate={{ rotate: jenisOpen ? 0 : 180 }}
              transition={{ duration: 0.3 }}
            >
              <svg className="size-full" fill="none" viewBox="0 0 19 19">
                <path d={svgPaths.p6fb9f00} fill="#475467" />
              </svg>
            </motion.div>
          </motion.div>
          
          <AnimatePresence>
            {jenisOpen && (
              <motion.div
                className="absolute top-[50px] left-0 w-full bg-white rounded-[13.143px] shadow-lg overflow-hidden z-30"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {jenisOptions.map((option, index) => (
                  <motion.div
                    key={option}
                    className="px-4 py-3 cursor-pointer text-[#475467] hover:bg-[#f0f0f0]"
                    whileHover={{ backgroundColor: "#ed6b23", color: "#ffffff" }}
                    onClick={() => setJenisOpen(false)}
                  >
                    {option}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Kategori Informasi Dropdown */}
        <div className="relative w-[304.914px]">
          <motion.div
            className="bg-white h-[46px] rounded-[13.143px] cursor-pointer relative"
            onClick={() => {
              setKategoriOpen(!kategoriOpen);
              setJenisOpen(false);
            }}
            whileHover={{ scale: 1.01 }}
            animate={{
              boxShadow: kategoriOpen ? "0 0 0 3px rgba(237, 107, 35, 0.3)" : "0 0 0 0px rgba(237, 107, 35, 0)"
            }}
          >
            <p className="absolute left-[8px] top-[8px] font-bold text-[20px] text-[#475467]">
              KATEGORI INFORMASI
            </p>
            <motion.div
              className="absolute right-4 top-1/2 -translate-y-1/2 size-[18.562px]"
              animate={{ rotate: kategoriOpen ? 0 : 180 }}
              transition={{ duration: 0.3 }}
            >
              <svg className="size-full" fill="none" viewBox="0 0 19 19">
                <path d={svgPaths.p3d7bfb80} fill="#475467" />
              </svg>
            </motion.div>
          </motion.div>
          
          <AnimatePresence>
            {kategoriOpen && (
              <motion.div
                className="absolute top-[50px] left-0 w-full bg-white rounded-[13.143px] shadow-lg overflow-hidden z-30"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {kategoriOptions.map((option, index) => (
                  <motion.div
                    key={option}
                    className="px-4 py-3 cursor-pointer text-[#475467]"
                    whileHover={{ backgroundColor: "#ed6b23", color: "#ffffff" }}
                    onClick={() => setKategoriOpen(false)}
                  >
                    {option}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Search Button */}
        <motion.div 
          className="bg-[#bebdd3] h-[46px] rounded-[13.143px] w-[92px] cursor-pointer flex items-center justify-center relative overflow-hidden"
          whileHover={{ 
            scale: 1.05, 
            backgroundColor: "#9c9bb3",
            boxShadow: "0 8px 20px rgba(190, 189, 211, 0.5)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.5 }}
          />
          <p className="font-semibold text-[21.029px] text-[#344054] z-10">CARI</p>
          <div className="absolute right-3">
            <svg className="size-[27.6px]" fill="none" viewBox="0 0 28 28">
              <path d={svgPaths.pcdb6d00} fill="#475467" />
            </svg>
          </div>
        </motion.div>
      </motion.div>

      {/* Footer Section */}
      <motion.div 
        className="absolute left-[82px] top-[879px] flex gap-[19px] items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          className="h-[38.898px] w-[92.202px]"
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <img alt="KAI Logo" className="object-cover size-full" src={imgImage2} />
        </motion.div>
        <p className="text-[12px] leading-[18px] text-white w-[236px]">
          PT Kereta Api Indonesia (Persero) atau disingkat KAI adalah Badan Usaha Milik Negara (BUMN) Indonesia yang menyelenggarakan jasa angkutan kereta api.
        </p>
      </motion.div>

      {/* Contact Section */}
      <motion.div 
        className="absolute left-[1108px] top-[851px] w-[248px] p-[10px]"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col gap-[4px] text-white text-[16px]">
          <p className="font-bold leading-[14.4px]">CONTACT</p>
          <div className="leading-[24px]">
            <p>No Telepon: 121</p>
            <p>Email: cs@kai.id</p>
            <p>Website Resmi: www.kai.id</p>
            <p>Rekrutmen Resmi: e-recruitment.kai.id</p>
          </div>
        </div>
      </motion.div>

      {/* Contact Icons */}
      <motion.div 
        className="absolute left-[1091.2px] top-[881.5px] p-[10px] flex flex-col gap-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <ContactIcon>
          <svg className="size-[19px]" fill="none" viewBox="0 0 19 19">
            <path d={svgPaths.p1be43d60} fill="white" />
          </svg>
        </ContactIcon>
        <ContactIcon>
          <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
            <path d={svgPaths.p1faf1700} fill="white" />
          </svg>
        </ContactIcon>
        <ContactIcon>
          <svg className="size-[21px]" fill="none" viewBox="0 0 21 21">
            <path d={svgPaths.p2e8adc40} fill="white" />
          </svg>
        </ContactIcon>
      </motion.div>

      {/* Social Media */}
      <motion.div
        className="absolute left-[690.2px] top-[897.92px] text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-bold text-[16px] leading-[14.4px]">SOCIAL MEDIA</p>
      </motion.div>

      <motion.div 
        className="absolute left-[701px] top-[916px] flex gap-[3px] items-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {[
          { Icon: FacebookIcon, name: "Facebook" },
          { Icon: InstagramIcon, name: "Instagram" },
          { Icon: TwitterIcon, name: "Twitter" },
          { Icon: YoutubeIcon, name: "Youtube" }
        ].map(({ Icon, name }, index) => (
          <motion.div
            key={name}
            whileHover={{ scale: 1.3, y: -8 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="cursor-pointer"
          >
            <Icon />
          </motion.div>
        ))}
      </motion.div>

      {/* Copyright */}
      <motion.p 
        className="absolute left-[565px] top-[1009px] w-[416px] text-[12px] leading-[18px] text-white text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Copyright © 2024 Recruitment Human Capital Management PT Kereta Api Indonesia (Persero)
      </motion.p>

      {/* Modals */}
      <AnimatePresence>
        {showKAIModal && (
          <Modal onClose={() => setShowKAIModal(false)} title="CEK PENDATAAN LOLOS KAI 2024">
            <div className="space-y-4">
              <p className="text-[#2d2a70]">
                Silakan masukkan nomor registrasi Anda untuk mengecek status pendaftaran:
              </p>
              <input
                type="text"
                placeholder="Nomor Registrasi"
                className="w-full px-4 py-3 border-2 border-[#bebdd3] rounded-lg outline-none focus:border-[#ed6b23] transition-colors"
              />
              <motion.button
                className="w-full bg-[#ed6b23] text-white py-3 rounded-lg font-semibold"
                whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(237, 107, 35, 0.3)" }}
                whileTap={{ scale: 0.98 }}
              >
                CEK STATUS
              </motion.button>
              <div className="bg-[#f0f0f0] p-4 rounded-lg">
                <p className="text-sm text-[#475467]">
                  <strong>Catatan:</strong> Pastikan nomor registrasi yang Anda masukkan sesuai dengan yang diterima saat pendaftaran.
                </p>
              </div>
            </div>
          </Modal>
        )}

        {showDasarHukumModal && (
          <Modal onClose={() => setShowDasarHukumModal(false)} title="DASAR HUKUM PENYELENGGARAN SELEKSI">
            <div className="space-y-4 max-h-[500px] overflow-y-auto">
              <div className="space-y-3">
                <div className="bg-[#f0f0f0] p-4 rounded-lg">
                  <h3 className="font-bold text-[#2d2a70] mb-2">1. Undang-Undang Nomor 23 Tahun 2007</h3>
                  <p className="text-sm text-[#475467]">
                    Tentang Perkeretaapian yang mengatur penyelenggaraan perkeretaapian di Indonesia.
                  </p>
                </div>
                <div className="bg-[#f0f0f0] p-4 rounded-lg">
                  <h3 className="font-bold text-[#2d2a70] mb-2">2. Peraturan Pemerintah Nomor 72 Tahun 2013</h3>
                  <p className="text-sm text-[#475467]">
                    Tentang Penyelenggaraan Usaha Angkutan Kereta Api.
                  </p>
                </div>
                <div className="bg-[#f0f0f0] p-4 rounded-lg">
                  <h3 className="font-bold text-[#2d2a70] mb-2">3. Keputusan Direksi PT KAI</h3>
                  <p className="text-sm text-[#475467]">
                    Tentang Pedoman Rekrutmen dan Seleksi Calon Pegawai PT Kereta Api Indonesia (Persero).
                  </p>
                </div>
                <div className="bg-[#f0f0f0] p-4 rounded-lg">
                  <h3 className="font-bold text-[#2d2a70] mb-2">4. Standar Kompetensi Nasional</h3>
                  <p className="text-sm text-[#475467]">
                    Berbagai standar kompetensi yang berlaku untuk industri perkeretaapian di Indonesia.
                  </p>
                </div>
              </div>
            </div>
          </Modal>
        )}
      </AnimatePresence>
      </div>
    </div>
  );
}

// Component: Modal
function Modal({ onClose, title, children }: { onClose: () => void; title: string; children: React.ReactNode }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
      
      <motion.div
        className="relative bg-white rounded-2xl p-8 max-w-2xl w-full mx-4 shadow-2xl"
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-[#2d2a70]">{title}</h2>
          <motion.button
            className="text-[#475467] hover:text-[#ed6b23] text-3xl"
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
          >
            ×
          </motion.button>
        </div>
        {children}
      </motion.div>
    </motion.div>
  );
}

// Component: ContactIcon
function ContactIcon({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="cursor-pointer"
      whileHover={{ scale: 1.4, x: 8 }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </motion.div>
  );
}

// Social Media Icons
function FacebookIcon() {
  return (
    <div className="size-[24px] relative">
      <svg className="block size-full" fill="none" viewBox="0 0 20 22">
        <path d={svgPaths.p2e95ec00} fill="white" fillRule="evenodd" clipRule="evenodd" />
      </svg>
    </div>
  );
}

function InstagramIcon() {
  return (
    <div className="size-[24px]">
      <svg className="block size-full" fill="none" viewBox="0 0 24 24">
        <path d={svgPaths.p2c5f2300} fill="white" />
      </svg>
    </div>
  );
}

function TwitterIcon() {
  return (
    <div className="size-[24px]">
      <svg className="block size-full" fill="none" viewBox="0 0 24 24">
        <path d={svgPaths.p1be9b500} stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function YoutubeIcon() {
  return (
    <div className="size-[24px] relative">
      <svg className="block size-full" fill="none" viewBox="0 0 22 16">
        <path d={svgPaths.pf0eaf00} fill="white" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d={svgPaths.p1981c80} stroke="white" strokeWidth="1.5" />
      </svg>
    </div>
  );
}