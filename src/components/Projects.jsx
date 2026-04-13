import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import img5 from "../assets/5.png";
import img6 from "../assets/6.png";
import img7 from "../assets/7.png";
import img8 from "../assets/8.png";
import img9 from "../assets/ambulance.png";
import img10 from "../assets/abp.png";
import img11 from "../assets/DD.png";
import img12 from "../assets/momsco.png";
import img13 from "../assets/jagran.png";
import img14 from "../assets/11.png";
import img15 from "../assets/12.png";
import img16 from "../assets/13.png";

import { useEffect, useRef, useState } from "react";

// const projectsData = [
//   { title: "MomsCo Campaign", image: img1, canva: "#" },
//   { title: "Jagran Media", image: img2, canva: "#" },
//   { title: "Brand Identity", image: img3, canva: "#" },
//   { title: "Oblytech", image: img4, canva: "#" },
//   { title: "ABP Case Study", image: img5, canva: "#" },
//   { title: "EAmbulance", image: img6, canva: "#" },
//   { title: "DigitalDecoders", image: img7, canva: "#" },
//   { title: "Magazines&Interviews", image: img8, canva: "#" },
// ];
const projectsData = [
    {
      title: "The MomsCo",
      image: img1,
      canva: img12,
      refer: "https://drive.google.com/drive/folders/1nUFvVVF7zp2KZQ2PAsJ-Iq0VPVN6YyVD",
      points: [
        "Executed 360° SKU launch campaigns across digital platforms",
        "Developed 30+ influencer & video scripts for brand campaigns",
        "Managed content creation across Instagram, WhatsApp & web",
        "Collaborated with influencers for brand amplification",
        "Delivered high-ROAS performance marketing campaigns",
        "Achieved 5M+ views and 100K+ engagement across content",
        "Handled cross-platform content distribution (social + CMS)",
        "Contributed to revenue-driven campaign performance"
      ],
      
      desc: "Led end-to-end campaign execution for The Moms Co., focusing on content strategy, influencer marketing, and performance-driven campaigns to enhance brand visibility, engagement, and conversions across digital platforms.",
    },
    {
        title: "Jagran Media",
        image: img2,
        canva: img13,
        refer: "https://drive.google.com/drive/folders/1gYJilhZOg3WhhqOX4-Auvg23KDeDAvDo",
        points: [
            "Executed integrated digital marketing campaigns across Jagran platforms",
            "Managed social media creatives, gamification & campaign engagement strategies",
            "Handled brand collaborations and partnerships worth ₹50L+",
            "Worked on influencer engagement and content amplification campaigns",
            "Planned campaign strategies for platforms like Her Zindagi & Jagran Josh",
            "Developed content calendars and cross-platform content distribution",
            "Contributed to campaign ideation, execution, and performance tracking",
          ],
          
          desc: "At Jagran New Media, contributed to high-impact digital campaigns by managing content strategy, influencer engagement, and brand collaborations. Supported multi-platform campaign execution and brand visibility.",
        },
    {
      title: "Influencer Marketing Brands (K Social, UR Popular, AnalyticsJobs)",
      image: img3,
      canva: img14,
      refer: "https://drive.google.com/drive/folders/1gbVTRflSivoVAYRJuHCN4MENut6H_tlR",
      points: [
        "Managed influencer marketing campaigns for regional & national brands",
        "Planned and executed content calendars across Instagram & LinkedIn",
        "Handled UGC content creation including scripts, shoots & engagement",
        "Collaborated with creators for outreach, partnerships & MOU execution",
        "Delivered growth-focused campaigns improving engagement & reach",
        "Managed cross-platform content (social, CMS & website integration)"
      ],
      
      desc: "Handled multiple brand accounts across industries, focusing on influencer marketing, content strategy, and performance-driven digital campaigns. Led end-to-end execution from planning and content creation to campaign optimization and audience growth.",
    },
    {
        title: "Campaign Design — E-Ambulance Initiative",
        image: img6,
        canva: img9,
        refer: "https://drive.google.com/drive/folders/17GO9rNREYgelqJiDAS5wNtneBqzHAZq0",
        points: [
            "Developed complete brand identity for Government E-Ambulance initiative",
            "Created naming, logo, EV-centric typography & color system",
            "Designed campaign mockups aligned with PM E-Drive vision",
            "Built sustainability-focused visual storytelling for healthcare innovation",
            "Crafted brand communication around safety, speed & modern emergency care"
          ],
          
          desc: "Designed a full-scale branding and campaign system for the Government’s E-Ambulance initiative, focusing on sustainability, innovation, and healthcare accessibility. Delivered a cohesive brand identity and visual narrative aligned with EV adoption and modern emergency response systems."
      },
      {
        title: "Ideathon — Digital Marketing Agency",
        image: img7,
        canva: img11,
        refer: "https://drive.google.com/drive/folders/1i9n8L4e9o_ZYh6UlXujNB-wjQ7bem8OY",
        points: [
            "Conceptualized digital marketing agency model for MSMEs in India",
            "Designed scalable campaign strategies for businesses at different growth stages",
            "Developed complete startup plan including structure & client management",
            "Focused on homegrown advertising and cost-effective marketing solutions",
            "Proposed performance-driven marketing approach for small businesses"
          ],
          
          desc: "Built a comprehensive digital marketing agency concept tailored for MSMEs, focusing on scalable growth and affordable campaign solutions. Developed a full business model covering strategy, operations, and client lifecycle to enable businesses to grow through structured digital marketing.",
      },
      {
        title: "Magazine Design & Expert Interviews",
        image: img8,
        canva: img15,
        refer  : "https://drive.google.com/drive/folders/17GO9rNREYgelqJiDAS5wNtneBqzHAZq0",
        points: [
            "Designed multiple volumes of department magazine & newsletter(Trailblazers & MediaPreneurs)",
            "Created layouts using Adobe InDesign & Photoshop",
            "Managed content structuring and visual storytelling",
            "Conducted expert interviews with media professionals",
            "Researched media trends, leadership insights & journalism ethics"
          ],
          
          desc: "Led the design and development of departmental publications, combining editorial planning with visual design. Conducted expert interviews to bring industry insights into the publication, showcasing strong skills in content creation, research, and media communication.",
      },
      {
        title: "ABP Group Case Study",
        image: img5,
        canva: img10,
        refer: "https://drive.google.com/drive/folders/1toRs0t-Ioh8jh_R9NI9rgbv6-uyr8Iyo",
        points: [
            "Designed multiple volumes of department magazine & newsletter",
            "Created layouts using Adobe InDesign & Photoshop",
            "Managed content structuring and visual storytelling",
            "Conducted expert interviews with media professionals",
            "Researched media trends, leadership insights & journalism ethics"
          ],
          
          desc: "Led the design and development of departmental publications, combining editorial planning with visual design. Conducted expert interviews to bring industry insights into the publication, showcasing strong skills in content creation, research, and media communication.",
      },
      {
        title: "Oblytech Technology",
        image: img4,
        canva: img16,
        refer: "https://drive.google.com/drive/folders/1vdshv6DHyPttGkQYB5b6cX3kfACi2O8J",
        points: [
            "Designed multiple volumes of department magazine & newsletter",
            "Created layouts using Adobe InDesign & Photoshop",
            "Managed content structuring and visual storytelling",
            "Conducted expert interviews with media professionals",
            "Researched media trends, leadership insights & journalism ethics"
          ],
          
          desc: "Led the design and development of departmental publications, combining editorial planning with visual design. Conducted expert interviews to bring industry insights into the publication, showcasing strong skills in content creation, research, and media communication.",
      },
    // 👉 same for others
  ];


export default function ProjectsFit() {
  const [selected, setSelected] = useState(null);
  const sliderRef = useRef();

  const looped = [...projectsData, ...projectsData];

  // 🔥 AUTO SCROLL (SMOOTH INFINITE)
  useEffect(() => {
    const slider = sliderRef.current;

    const interval = setInterval(() => {
      if (!slider) return;

      slider.scrollLeft += 0.5;

      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft = 0;
      }
    }, 16);

    return () => clearInterval(interval);
  }, []);

  // 🔥 SCALE BASED ON CENTER
  const handleScroll = () => {
    const slider = sliderRef.current;
    const cards = slider.querySelectorAll(".card");

    const center = slider.offsetWidth / 2;

    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.left + rect.width / 2;

      const distance = Math.abs(center - cardCenter);

      let scale = 1 - distance / 800;
      scale = Math.max(0.75, Math.min(1.15, scale));

      card.style.transform = `scale(${scale})`;
      card.style.zIndex = Math.round(scale * 100);
      card.style.opacity = scale < 0.8 ? 0.5 : 1;
    });
  };

  useEffect(() => {
    const slider = sliderRef.current;
    slider.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => slider.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-24 bg-[#050816] text-center relative overflow-hidden">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-purple blur-[120px] opacity-20 top-[-100px] left-[-100px]"></div>
      <div className="absolute w-[500px] h-[500px] bg-orange blur-[120px] opacity-20 bottom-[-100px] right-[-100px]"></div>

      <h2 className="text-4xl md:text-5xl font-bold mb-12 relative z-10">
        My <span className="text-orange">Projects</span>
      </h2>

      {/* 🔥 CAROUSEL */}
      <div
        ref={sliderRef}
        className="flex gap-10 overflow-x-scroll no-scrollbar px-10 py-10 relative z-10"
      >
        {looped.map((project, i) => (
          <div
            key={i}
            className="card min-w-[260px] transition-all duration-300 cursor-pointer"
            onClick={() => setSelected(project)}
          >

            {/* 🔥 GLASS CARD */}
            <div className="rounded-2xl overflow-hidden 
                            bg-white/[0.05] backdrop-blur-2xl 
                            border border-white/10 
                            shadow-xl">

              <img
                src={project.image}
                className="w-full h-[260px] object-cover transition duration-500"
              />

            </div>

          </div>
        ))}
      </div>

      {/* 🔥 MODAL */}
      {selected && (
  <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-6">

    <div className="bg-white/[0.05] backdrop-blur-2xl border border-white/20 
                    w-full max-w-6xl h-[80vh] max-h-[90vh] rounded-2xl overflow-y-auto relative grid md:grid-cols-2">

      {/* 🔥 CLOSE */}
      <button
        onClick={() => setSelected(null)}
        className="absolute top-4 right-4 text-white text-xl hover:text-orange transition z-10"
      >
        ✕
      </button>

      {/* 🔥 LEFT: CANVA */}
      <div className="h-full border-r border-white/10 flex items-center justify-center bg-black/20 p-6">

        <div className="w-full max-w-[700px] aspect-video bg-black/30 rounded-xl overflow-hidden">
            <img
            src={selected.canva}
            className="w-full h-full object-cover"
            />
        </div>

    </div>

      {/* 🔥 RIGHT: DETAILS */}
      <div className="p-8 flex flex-col justify-between text-left">

        <div>
          <h3 className="text-2xl font-bold mb-4 text-white">
            {selected.title}
          </h3>

          <p className="text-gray-300 mb-6 leading-relaxed">
            {selected.desc}
          </p>

          {/* 🔥 POINTS */}
          <ul className="space-y-3">
            {selected.points.map((point, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-300">

                {/* Bullet */}
                <span className="w-2 h-2 mt-2 rounded-full bg-orange"></span>

                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* 🔥 CTA */}
        <a
  href={selected.refer}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-6 bg-orange px-6 py-2 rounded-full hover:scale-105 transition self-start inline-block"
>
  View Full Project
</a>

      </div>

    </div>
  </div>
)}
    </section>
  );
}