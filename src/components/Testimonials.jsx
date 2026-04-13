import { FaQuoteRight, FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Achyut Daga",
    role: "Marketing Manager, The Moms Co.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    text: "Anjali played a key role in executing high-impact campaigns at The Moms Co. His ability to combine content strategy with performance marketing resulted in strong engagement and measurable growth. Highly reliable and proactive in fast-paced environments.",
  },
  {
    name: "Priyanka",
    role: "Brand Team, Jagran New Media",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "Working with Anjali during his tenure at Jagran was a great experience. He contributed effectively to campaign planning, brand collaborations, and social media execution. His strategic thinking and adaptability stood out.",
  },
  {
    name: "Shruti",
    role: "Founder, Ksocial",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    text: "Anjali demonstrated excellent skills in influencer marketing and content strategy. He understands digital ecosystems well and brings creative as well as analytical thinking to every project.",
  },
  {
    name: "Priyanka",
    role: "Faculty, IIMC",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
    text: "Anjali has consistently shown strong research, communication, and analytical abilities. His work reflects a deep understanding of media, marketing, and audience behavior.",
  },
  {
    name: "Digital Decoders Team",
    role: "Event Organizers",
    image: "https://randomuser.me/api/portraits/men/60.jpg",
    text: "Anjali delivered exceptional work during the event. His ability to manage content, coordinate execution, and ensure smooth delivery made a significant impact. A dependable and result-driven individual.",
  },
];

export default function Testimonials() {
  return (
    <section className="px-10 py-24 bg-[#050816] text-center relative overflow-hidden">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-purple blur-[120px] opacity-20 top-[-100px] left-[-100px]"></div>
      <div className="absolute w-[500px] h-[500px] bg-orange blur-[120px] opacity-20 bottom-[-100px] right-[-100px]"></div>

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold mb-4 relative z-10">
        What My <span className="text-orange">Clients Say</span>
      </h2>

      <p className="text-gray-400 mb-14 max-w-2xl mx-auto relative z-10">
        Real feedback from clients based on collaboration and results.
      </p>

      {/* 🔥 CARDS */}
      <div className="grid md:grid-cols-3 gap-8 relative z-10">

        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white/[0.04] backdrop-blur-2xl border border-white/10 p-6 rounded-2xl
                       text-left transition-all duration-500
                       hover:-translate-y-2 hover:shadow-2xl hover:border-white/20"
          >

            {/* 🔥 STARS */}
            <div className="flex text-orange mb-5 text-sm">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} />
              ))}
            </div>

            {/* 🔥 USER */}
            <div className="flex items-center gap-4 mb-5">
              <img
                src={t.image}
                className="w-12 h-12 rounded-full border border-white/20 object-cover"
              />
              <div>
                <h4 className="font-semibold text-white">
                  {t.name}
                </h4>
                <p className="text-gray-400 text-sm">
                  {t.role}
                </p>
              </div>
            </div>

            {/* 🔥 TEXT */}
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {t.text}
            </p>

            {/* 🔥 QUOTE ICON */}
            <div className="flex justify-end">
              <div className="w-10 h-10 flex items-center justify-center rounded-full 
                              bg-white/10 border border-white/20 text-orange">
                <FaQuoteRight />
              </div>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}