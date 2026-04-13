import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
const socialLinks = [
  {
    icon: FaLinkedinIn,
    link: "https://www.linkedin.com/in/anjali-tripathi-a585a8227",
  },
  {
    icon: FaInstagram,
    link: "https://www.instagram.com/anjali_tripathi2507",
  },
  {
    icon: FaFacebookF,
    link: "https://facebook.com/",
  },
  {
    icon: FaTwitter,
    link: "https://twitter.com/",
  }
  
];

export default function Footer() {
  return (
    <footer className="px-10 py-20 bg-[#050816] relative overflow-hidden">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-purple blur-[120px] opacity-20 top-[-100px] left-[-100px]"></div>
      <div className="absolute w-[500px] h-[500px] bg-orange blur-[120px] opacity-20 bottom-[-100px] right-[-100px]"></div>

      {/* 🔥 MAIN CONTAINER */}
      <div className="relative z-10 bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-2xl p-10">

        <div className="grid md:grid-cols-4 gap-10">

          {/* LOGO + ABOUT */}
          <div>
            <h2 className="text-2xl font-bold text-orange mb-4">
              Shruti
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
               Driving Growth with Strategic Marketing & Content Excellence
            </p>
          </div>

          {/* NAVIGATION */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Navigation</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              {[
                { name: "Home", id: "home" },
                { name: "Services", id: "services" },
                { name: "Portfolio", id: "projects" },
                { name: "About", id: "about" },
                { name: "Contact", id: "contact" },
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href={`#${item.id}`}
                    className="hover:text-orange cursor-pointer transition"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>+91 8527609180</li>
              <li>work.anjalitripathi@email.com</li>
              <li>India</li>
              <li>Mon - Fri / 9am - 6pm</li>
            </ul>
          </div>

          {/* NEWSLETTER + SOCIAL */}
          <div>
            <h3 className="font-semibold mb-4 text-white">
              Get the latest information
            </h3>

            {/* 🔥 INPUT */}
            <div className="flex bg-white/5 backdrop-blur border border-white/10 rounded-full overflow-hidden">
              <input
                type="email"
                placeholder="Your email"
                className="bg-transparent px-4 py-2 text-sm w-full outline-none text-white placeholder-gray-500"
              />
              <button className="px-5 text-white hover:bg-orange transition">
                →
              </button>
            </div>

            {/* 🔥 SOCIAL ICONS */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((item, i) => {
                const Icon = item.icon;

                return (
                  <a
                    key={i}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full
                              bg-white/10 border border-white/10 text-white
                              hover:text-orange hover:border-orange hover:-translate-y-1
                              transition duration-300"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

        </div>

        {/* 🔥 BOTTOM */}
        <div className="text-center text-gray-500 text-sm mt-12 pt-6 border-t border-white/10">
          © 2025 All Rights Reserved | Privacy Policy
        </div>

      </div>
    </footer>
  );
}