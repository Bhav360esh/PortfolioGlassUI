import {
    SiPython, SiWordpress, SiCanva,
    SiGoogleanalytics, SiHubspot
  } from "react-icons/si";
  
  import { FaChartBar, FaFileExcel, FaFilePowerpoint } from "react-icons/fa";
  import { MdAnalytics } from "react-icons/md";
  
  const skills = [
    { name: "Power BI", icon: <FaChartBar />, level: 90 },
    { name: "Python", icon: <SiPython />, level: 80 },
    { name: "SPSS", icon: <MdAnalytics />, level: 85 },
    { name: "WordPress", icon: <SiWordpress />, level: 90 },
    { name: "Canva", icon: <SiCanva />, level: 95 },
    { name: "Excel", icon: <FaFileExcel />, level: 92 },
    { name: "PowerPoint", icon: <FaFilePowerpoint />, level: 93 },
    { name: "Google Workspace", icon: <FaChartBar />, level: 90 },
    { name: "SEO Tools", icon: <SiGoogleanalytics />, level: 88 },
    { name: "AI Tools", icon: <MdAnalytics />, level: 90 },
    { name: "HubSpot", icon: <SiHubspot />, level: 87 },
    { name: "Lemlist", icon: <FaChartBar />, level: 85 },
  ];
  
  export default function Skills() {
    return (
      <section className="px-10 py-24 bg-[#050816] text-center relative overflow-hidden">
  
        {/* 🔥 BACKGROUND GLOW */}
        <div className="absolute w-[500px] h-[500px] bg-purple blur-[120px] opacity-20 top-[-100px] left-[-100px]"></div>
        <div className="absolute w-[500px] h-[500px] bg-orange blur-[120px] opacity-20 bottom-[-100px] right-[-100px]"></div>
  
        <h2 className="text-4xl md:text-5xl font-bold mb-4 relative z-10">
          My Work <span className="text-orange">Skills</span>
        </h2>
  
        <p className="text-gray-400 mb-14 max-w-2xl mx-auto relative z-10">
          Technical expertise across marketing tools, analytics platforms, and creative software.
        </p>
  
        {/* 🔥 GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 relative z-10">
  
          {skills.map((skill, i) => (
            <div
              key={i}
              className="bg-white/[0.04] backdrop-blur-2xl border border-white/10 p-6 rounded-2xl
                         transition-all duration-500
                         hover:-translate-y-2 hover:shadow-2xl hover:border-white/20"
            >
  
              {/* 🔥 ICON */}
              <div className="flex justify-center mb-5 skillicon">
                <div className="w-20 h-20 flex items-center justify-center rounded-full 
                                bg-white/10 border border-white/20 text-4xl
                                shadow-inner text-purple">
                  {skill.icon}
                </div>
              </div>
  
              {/* 🔥 NAME */}
              <h3 className="mb-4 font-semibold text-white tracking-wide">
                {skill.name}
              </h3>
  
              {/* 🔥 PROGRESS BAR */}
              <div className="bg-white/10 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-orange h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
  
              {/* 🔥 PERCENT */}
              <p className="mt-3 text-orange text-sm font-semibold tracking-wide">
                {skill.level}%
              </p>
  
            </div>
          ))}
  
        </div>
      </section>
    );
  }