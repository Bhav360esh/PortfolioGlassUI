import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import img5 from "../assets/5.png";
import img6 from "../assets/6.png";
import img7 from "../assets/7.png";
import img8 from "../assets/8.png";

import { useEffect, useState } from "react";
import {
  SiCanva, SiHubspot, SiGoogleanalytics, Si99Designs,
  SiPython, SiFigma, SiDocsify,
} from "react-icons/si";
import { FaChartBar, FaFileExcel, FaFileImage } from "react-icons/fa";

const BOX_WIDTH = 1300;
const BOX_HEIGHT = 650;
const CARD_SIZE = 200;

const projectsData = [
  { title: "MomsCo Campaign", image: img1, canva: "#" },
  { title: "Jagran Media", image: img2, canva: "#" },
  { title: "Brand Identity", image: img3, canva: "#" },
  { title: "Oblytech", image: img4, canva: "#" },
  { title: "ABP Case Study", image: img5, canva: "#" },
  { title: "EAmbulance", image: img6, canva: "#" },
  { title: "DigitalDecoders", image: img7, canva: "#" },
  { title: "Magazines&Interviews", image: img8, canva: "#" },
];

export default function ProjectsPhysics() {
  const [selected, setSelected] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  const [items, setItems] = useState(
    projectsData.map(() => ({
      x: Math.random() * (BOX_WIDTH - CARD_SIZE),
      y: Math.random() * (BOX_HEIGHT - CARD_SIZE),
      vx: (Math.random() - 0.5) * 3,
      vy: (Math.random() - 0.5) * 3,
    }))
  );

  // 🔥 PHYSICS LOOP (UNCHANGED)
  useEffect(() => {
    const interval = setInterval(() => {
      setItems((prev) => {
        if (isPaused) return prev;

        const updated = [...prev];

        for (let i = 0; i < updated.length; i++) {
          let item = updated[i];

          item.x += item.vx;
          item.y += item.vy;

          if (item.x <= 0) {
            item.x = 0;
            item.vx = Math.abs(item.vx);
          }

          if (item.x >= BOX_WIDTH - CARD_SIZE) {
            item.x = BOX_WIDTH - CARD_SIZE;
            item.vx = -Math.abs(item.vx);
          }

          if (item.y <= 0) {
            item.y = 0;
            item.vy = Math.abs(item.vy);
          }

          if (item.y >= BOX_HEIGHT - CARD_SIZE) {
            item.y = BOX_HEIGHT - CARD_SIZE;
            item.vy = -Math.abs(item.vy);
          }

          for (let j = i + 1; j < updated.length; j++) {
            let other = updated[j];

            const dx = other.x - item.x;
            const dy = other.y - item.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const minDist = 200;

            if (distance < minDist) {
              const overlap = minDist - distance;

              const nx = dx / distance;
              const ny = dy / distance;

              item.x -= (nx * overlap) / 2;
              item.y -= (ny * overlap) / 2;

              other.x += (nx * overlap) / 2;
              other.y += (ny * overlap) / 2;

              [item.vx, other.vx] = [other.vx, item.vx];
              [item.vy, other.vy] = [other.vy, item.vy];
            }
          }

          item.vx *= 0.999;
          item.vy *= 0.999;
        }

        return [...updated];
      });
    }, 20);

    return () => clearInterval(interval);
  }, [isPaused]);

  // 🔥 FLOATING ICONS
  const icons = [
    SiCanva, SiHubspot, SiGoogleanalytics, Si99Designs,
    SiPython, SiFigma, SiDocsify,
    FaChartBar, FaFileExcel, FaFileImage,
  ];

  const [iconItems, setIconItems] = useState(
    Array.from({ length: 20 }).map(() => ({
      x: Math.random() * (BOX_WIDTH - 40),
      y: Math.random() * (BOX_HEIGHT - 40),
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
    }))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setIconItems((prev) =>
        prev.map((item) => {
          let { x, y, vx, vy } = item;

          x += vx;
          y += vy;

          const SIZE = 30;

          if (x <= 0) {
            x = 0;
            vx = Math.abs(vx);
          }

          if (x >= BOX_WIDTH - SIZE) {
            x = BOX_WIDTH - SIZE;
            vx = -Math.abs(vx);
          }

          if (y <= 0) {
            y = 0;
            vy = Math.abs(vy);
          }

          if (y >= BOX_HEIGHT - SIZE) {
            y = BOX_HEIGHT - SIZE;
            vy = -Math.abs(vy);
          }

          return { x, y, vx, vy };
        })
      );
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-[#050816] flex flex-col items-center relative overflow-hidden">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-purple blur-[120px] opacity-20 top-[-100px] left-[-100px]"></div>
      <div className="absolute w-[500px] h-[500px] bg-orange blur-[120px] opacity-20 bottom-[-100px] right-[-100px]"></div>

      <h2 className="text-4xl md:text-5xl font-bold mb-12 relative z-10">
        My <span className="text-orange">Projects</span>
      </h2>

      {/* 🔥 GLASS CONTAINER */}
      <div
        className="relative w-[1300px] h-[650px] 
                   bg-white/[0.04] backdrop-blur-2xl 
                   border border-white/10 
                   rounded-2xl overflow-hidden shadow-2xl"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >

        {/* 🔥 PROJECT CARDS */}
        {items.map((item, i) => (
          <div
            key={i}
            onClick={() => setSelected(projectsData[i])}
            className="absolute cursor-pointer z-0"
            style={{
              transform: `translate(${item.x}px, ${item.y}px)`,
            }}
          >
            <div
              className="w-[200px] h-[200px] rounded-2xl overflow-hidden
                         bg-white/[0.05] backdrop-blur-xl
                         border border-white/10
                         transition duration-300
                         hover:shadow-2xl hover:border-white/20"
            >
              <img
                src={projectsData[i].image}
                className="w-full h-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
          </div>
        ))}

        {/* 🔥 FLOATING ICONS */}
        {iconItems.map((item, i) => {
          const Icon = icons[i % icons.length];
          const colors = ["text-orange", "text-purple"];
          const colorClass = colors[i % colors.length];

          return (
            <div
              key={i}
              className={`absolute text-2xl opacity-70 ${colorClass} z-10`}
              style={{
                transform: `translate(${item.x}px, ${item.y}px)`,
              }}
            >
              <Icon />
            </div>
          );
        })}
      </div>

      {/* 🔥 MODAL */}
      {selected && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4">

          <div className="bg-white/[0.05] backdrop-blur-2xl border border-white/20 
                          w-[90%] h-[80%] rounded-2xl relative shadow-2xl">

            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-white text-xl hover:text-orange transition"
            >
              ✕
            </button>

            <iframe
              src={selected.canva}
              className="w-full h-full rounded-2xl"
            />
          </div>
        </div>
      )}

    </section>
  );
}