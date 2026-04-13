import { FaGoogle, FaFacebook, FaInstagram, FaChartLine } from "react-icons/fa";
import { SiMeta, SiGoogleanalytics } from "react-icons/si";
import heroic from "../assets/profilehero.png"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-[#050816] to-black px-6 relative overflow-hidden">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute w-[400px] h-[400px] bg-purple blur-3xl opacity-20 top-0 left-0"></div>
      <div className="absolute w-[400px] h-[400px] bg-orange blur-3xl opacity-20 bottom-0 right-0"></div>

      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-8 items-center relative z-10">

        {/* LEFT (GLASS TEXT BLOCK) */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-xl">

          <p className="text-orange mb-3">Brand Creator</p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Building Brand <br />
            <span className="text-orange">Story Behind Content</span>
          </h1>

          <p className="text-gray-400 mb-6">
          Blending creativity with analytics to build powerful campaigns, drive engagement, and deliver measurable growth across digital platforms.
          </p>

          <div className="flex gap-4">
          <a
                href="https://canva.link/h3nfc3k5ft07fw4"  
                target="_blank"
                className="bg-orange px-6 py-3 rounded-full hover:scale-105 transition shadow-lg inline-block"
                >
                View Portfolio
                </a>

            <a
                href="/cv.pdf"   // 👉 place your CV inside public folder
                download="Resume(Concised).pdf"
                className="border border-white/20 px-6 py-3 rounded-full hover:bg-white/10 transition backdrop-blur inline-block"
                >
                Download CV
                </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative flex items-center justify-center min-h-[500px]">

          {/* 🔥 GLASS IMAGE CONTAINER */}
          <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-full shadow-xl z-8">
            <img
              src={heroic}
              className="rounded-full border-4 border-orange min-h-[300px] max-h-[700px] object-cover"
            />
          </div>

          {/* 🔥 CORNER ICONS (GLASS STYLE) */}
          <div className="absolute top-0 left-0 text-orange glass-icon">
            <FaGoogle />
          </div>

          <div className="absolute top-0 right-0 glass-icon text-purple">
            <FaFacebook />
          </div>

          <div className="absolute bottom-0 left-0 glass-icon text-purple">
            <FaInstagram />
          </div>

          <div className="absolute bottom-0 right-0 glass-icon text-orange">
            <SiGoogleanalytics />
          </div>

          {/* MID EDGES */}
          <div className="absolute top-1/2 left-0 glass-icon text-orange">
            <FaChartLine />
          </div>

          <div className="absolute top-1/2 right-0 glass-icon text-purple">
            <SiMeta />
          </div>

          {/* RANDOM PAIRS */}
          <div className="absolute bottom-[20%] left-[25%] glass-icon text-orange small">
            <FaGoogle />
          </div>

          <div className="absolute bottom-[22%] left-[35%] glass-icon text-purple small">
            <FaFacebook />
          </div>

          <div className="absolute bottom-[25%] right-[30%] glass-icon text-orange small">
            <FaInstagram />
          </div>

          <div className="absolute bottom-[20%] right-[20%] glass-icon text-purple small">
            <SiMeta />
          </div>

          {/* GLOW */}
          <div className="w-96 h-96 bg-purple rounded-full opacity-20 blur-3xl absolute"></div>
        </div>

      </div>
    </section>
  );
}