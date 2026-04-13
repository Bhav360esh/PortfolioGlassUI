import { useEffect, useState } from "react";

const sections = ["home", "about", "skills", "projects", "services", "testimonials"];

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop - 120;
          if (window.scrollY >= top) {
            current = id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="flex justify-between items-center px-10 py-6 bg-[#050816] sticky top-0 z-50">

      <h1 className="text-xl font-bold text-orange">
        Portfolio
      </h1>

      <div className="flex gap-6 text-gray-300">

        {sections.map((item) => (
          <a
            key={item}
            href={`#${item}`}
            className={`capitalize transition relative ${
              active === item ? "text-orange" : "hover:text-orange"
            }`}
          >
            {item}

            {/* 🔥 ACTIVE UNDERLINE */}
            {active === item && (
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-orange rounded-full"></span>
            )}
          </a>
        ))}

      </div>
    </nav>
  );
}