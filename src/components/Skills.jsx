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
      <section className="px-10 py-20 bg-[#050816] text-center">
        
        <h2 className="text-4xl font-bold mb-4">
          My Work <span className="text-orange">Skills</span>
        </h2>
  
        <p className="text-gray-400 mb-12 max-w-xl mx-auto">
          Technical expertise across marketing tools, analytics platforms, and creative software.
        </p>
  
        <div className="grid md:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="bg-[#0a0f2c] border border-gray-800 p-6 rounded-xl hover:border-purple transition"
            >
              {/* Icon */}
              <div className="text-4xl mb-4 flex justify-center text-purple ">
                {skill.icon}
              </div>
  
              {/* Name */}
              <h3 className="mb-3 font-medium">{skill.name}</h3>
  
              {/* Progress */}
              <div className="bg-gray-700 h-2 rounded-full">
                <div
                  className="bg-orange h-2 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
  
              <p className="mt-2 text-orange text-sm font-semibold">
                {skill.level}%
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }