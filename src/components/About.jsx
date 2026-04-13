import profile from "../assets/Profile.png"

export default function About() {
  return (
    <section className="px-10 py-20 bg-[#050816] text-center relative overflow-hidden">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute w-[400px] h-[400px] bg-purple blur-3xl opacity-20 top-0 left-0"></div>
      <div className="absolute w-[400px] h-[400px] bg-orange blur-3xl opacity-20 bottom-0 right-0"></div>

      <h2 className="text-4xl font-bold mb-10 relative z-10">
        About <span className="text-orange">Me</span>
      </h2>

      {/* 🔥 MAIN CARD */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 mt-10 bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-xl relative z-10 max-w-5xl mx-auto">

        {/* IMAGE */}
        <div className="relative">
          <div className="absolute -inset-[3px] bg-gradient-to-r from-orange to-purple rounded-full blur opacity-50"></div>

          <div className="relative bg-white/10 backdrop-blur-lg p-3 rounded-full">
            <img
              src={profile}
              className="rounded-full border-4 border-orange w-[250px] h-[250px] object-cover"
            />
          </div>
        </div>

        {/* TEXT */}
        <div className="max-w-xl text-left">
          <h3 className="text-2xl font-semibold mb-4 text-white">
          Crafting Impactful Brand Stories Through Strategy, Content and Sales Data
          </h3>

          <p className="text-gray-400 mb-6 leading-relaxed">
          Experienced in executing high-impact campaigns, managing brand partnerships, and creating data-driven strategies that enhance engagement and conversions.
          </p>

          <div className="flex gap-4 flex-wrap">
          <a
              href="mailto:workanjalitripathi@gmail.com"
              className="bg-orange px-5 py-2 rounded-full hover:scale-105 transition shadow-lg inline-block"
            >
              Contact Me
            </a>


            <a
                href="/resume.pdf"  // 👉 put file in public folder
                download="Resume(Concised).pdf"
                className="bg-white/10 backdrop-blur border border-white/20 px-5 py-2 rounded-full hover:bg-white/20 transition inline-block"
              >
                Download Resume
              </a>
          </div>
        </div>

      </div>
    </section>
  );
}