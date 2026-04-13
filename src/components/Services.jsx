import { useEffect, useRef, useState } from "react";
import { FaArrowUp, FaTimes } from "react-icons/fa";
import {
  SiGoogleanalytics,
  SiInstagram,
  SiCanva,
  SiContentful,
} from "react-icons/si";
import { MdCampaign, MdOutlinePublic } from "react-icons/md";

const services = [
  {
    title: "Brand Management",
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
    icon: <MdCampaign />,
    details: "Building strong brand identity, positioning, and long-term brand growth strategies.",
  },
  {
    title: "Social Media Marketing",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868",
    icon: <SiInstagram />,
    details: "Creating engaging content and campaigns to grow and manage social media presence.",
  },
  {
    title: "Communication Strategist",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    icon: <MdCampaign />,
    details: "Designing communication frameworks for internal and external audiences.",
  },
  {
    title: "Corporate Communication",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
    icon: <SiGoogleanalytics />,
    details: "Handling corporate messaging, stakeholder communication, and brand voice.",
  },
  {
    title: "Influencer Marketing",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    icon: <MdOutlinePublic />,
    details: "Collaborating with influencers to drive brand awareness and audience engagement.",
  },
  {
    title: "Content Strategist",
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    icon: <SiContentful />,
    details: "Planning and executing content strategies aligned with business goals.",
  },
  {
    title: "PR",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
    icon: <SiGoogleanalytics />,
    details: "Managing public relations, media outreach, and brand communication.",
  },
  {
    title: "Content Creator & Writer",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a",
    icon: <SiCanva />,
    details: "Creating impactful written and visual content for digital platforms.",
  },
];

export default function Services() {
  const [selected, setSelected] = useState(null);
  const sliderRef = useRef();

  const looped = [...services, ...services];

  useEffect(() => {
    const slider = sliderRef.current;

    const interval = setInterval(() => {
      if (!slider) return;

      slider.scrollLeft += 1;

      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft = 0;
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="px-10 py-24 bg-[#050816] text-center relative overflow-hidden">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-purple blur-[120px] opacity-20 top-[-100px] left-[-100px]"></div>
      <div className="absolute w-[500px] h-[500px] bg-orange blur-[120px] opacity-20 bottom-[-100px] right-[-100px]"></div>

      <h2 className="text-4xl md:text-5xl font-bold mb-4 relative z-10">
        My <span className="text-orange">Services</span>
      </h2>

      <p className="text-gray-400 mb-14 max-w-2xl mx-auto relative z-10">
        Delivering strategic marketing, branding, and communication solutions.
      </p>

      {/* 🔥 CAROUSEL */}
      <div
        ref={sliderRef}
        className="flex gap-8 overflow-x-scroll no-scrollbar relative z-10 py-4"
      >
        {looped.map((service, i) => (
          <div
            key={i}
            className="min-w-[320px] bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-2xl
                       transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-white/20 cursor-pointer"
            onClick={() => setSelected(service)}
          >

            {/* 🔥 IMAGE */}
            <div className="relative overflow-hidden rounded-t-2xl">
              <img
                src={service.image}
                alt=""
                className="w-full h-52 object-cover transition duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition duration-500"></div>
            </div>

            {/* 🔥 CONTENT */}
            <div className="p-6 text-left">

              {/* 🔥 ICON + TITLE */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-full 
                                bg-white/10 border border-white/20 text-orange text-lg">
                  {service.icon}
                </div>

                <h3 className="text-lg font-semibold text-white">
                  {service.title}
                </h3>
              </div>

              {/* BUTTON */}
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">View Details</span>

                <div className="w-10 h-10 flex items-center justify-center rounded-full 
                                bg-white/10 border border-white/20 text-white
                                hover:bg-orange hover:border-orange transition">
                  <FaArrowUp className="rotate-45 text-sm" />
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* 🔥 MODAL */}
      {selected && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4">

          <div className="bg-white/[0.05] backdrop-blur-2xl border border-white/20 w-full max-w-xl rounded-2xl overflow-hidden relative">

            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-white hover:text-orange transition"
            >
              <FaTimes />
            </button>

            <img src={selected.image} className="w-full h-60 object-cover" />

            <div className="p-6 text-left">
              <h3 className="text-2xl font-bold mb-3 text-white">
                {selected.title}
              </h3>

              <p className="text-gray-300 leading-relaxed">
                {selected.details}
              </p>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}