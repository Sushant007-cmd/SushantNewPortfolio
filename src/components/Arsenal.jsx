import { motion } from 'framer-motion';

const techStack = [
    { name: "Unity", color: "#22c55e" },
    { name: "Unreal", color: "#3b82f6" },
    { name: "C++", color: "#f59e0b" },
    { name: "C#", color: "#8b5cf6" },
    { name: "Java", color: "#ef4444" },
    { name: "Git", color: "#f97316" },
    { name: "AR", color: "#06b6d4" },
    { name: "VR", color: "#ec4899" },
    { name: "Level Design", color: "#14b8a6" },
    { name: "Production", color: "#facc15" },
];

const milestones = [
    {
        title: "IGDC Indie 40 Selection",
        subtitle: "Selected among India's top 40 independent studios to showcase our game at the IGDC 2025 event.",
        image: `${import.meta.env.BASE_URL}extras/igdc.png`,
        color: "#ef4444" // Warrior Red
    },
    {
        title: "50K+ Players Reached",
        subtitle: "Co-founded Trojan Productions with college friends, building a loyal community and reaching over 50k players across our indie horror releases on itch.io.",
        image: `${import.meta.env.BASE_URL}extras/trojan.png`,
        color: "#3b82f6" // Blue
    },
    {
        title: "GOT SELECTED FOR XBOX DAP",
        subtitle: "Our game 'Sermon' from Trojan Productions was selected for the Xbox Developer Accelerator Program, bringing our indie vision to console platforms.",
        image: `${import.meta.env.BASE_URL}extras/xbox_dap.png`,
        color: "#22c55e" // Green
    },
    {
        title: "Console Publishing Deal",
        subtitle: "Negotiated and signed a publishing agreement to port independent titles to major console ecosystems, including PlayStation 5 and Xbox Series X.",
        color: "#f59e0b" // Amber
    }
];

const Arsenal = () => {
    return (
        <section id="arsenal" className="py-24 md:py-32 px-4 sm:px-8 md:px-24 relative overflow-hidden transition-colors duration-500">
            {/* Background elements */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-warrior-red/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                    {/* Left side: Skills */}
                    <div>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-[2px] bg-warrior-red" />
                            <span className="text-warrior-red font-mono text-sm tracking-widest uppercase font-bold">
                                Technical Skillset
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-none mb-12">
                            SKILLS
                        </h2>

                        <div className="flex flex-wrap gap-4">
                            {techStack.map((tech, index) => (
                                <motion.div
                                    key={tech.name}
                                    layout
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 400,
                                        damping: 30,
                                        delay: index * 0.05,
                                        layout: { duration: 0.15 }
                                    }}
                                    whileHover={{
                                        scale: 1.05,
                                        backgroundColor: `${tech.color}20`,
                                        boxShadow: `0 0 25px ${tech.color}30`,
                                        transition: { duration: 0.1, ease: "easeOut" }
                                    }}
                                    style={{
                                        backgroundColor: `${tech.color}10`,
                                        borderColor: `${tech.color}30`,
                                        willChange: "transform, opacity",
                                        transform: "translateZ(0)"
                                    }}
                                    className="relative min-w-[100px] md:min-w-[130px] h-[100px] md:h-[130px] w-fit rounded-2xl border transition-all duration-100 flex items-center justify-center px-6 py-4 cursor-default overflow-hidden group/card"
                                >
                                    {/* Tech Name */}
                                    <span
                                        className="text-xl md:text-2xl font-black tracking-tighter uppercase transition-all duration-300 text-center whitespace-nowrap"
                                        style={{ color: tech.color }}
                                    >
                                        {tech.name}
                                    </span>

                                    {/* Senior Accents */}
                                    <div className="absolute top-3 left-3 w-2 h-2 border-t-2 border-l-2 opacity-30 transition-all duration-300 group-hover/card:opacity-100" style={{ borderColor: tech.color }} />
                                    <div className="absolute bottom-3 right-3 w-2 h-2 border-b-2 border-r-2 opacity-30 transition-all duration-300 group-hover/card:opacity-100" style={{ borderColor: tech.color }} />
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right side: Extras/Accomplishments */}
                    <div className="flex flex-col justify-start">
                        <div className="flex items-center gap-4 mb-8 lg:justify-end justify-center">
                            <span className="text-warrior-red font-mono text-sm tracking-widest uppercase font-bold text-right">
                                Achievement Log
                            </span>
                            <div className="w-12 h-[2px] bg-warrior-red" />
                        </div>
                        <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-none mb-12 text-center lg:text-right">
                            EXTRAS
                        </h2>

                        <div className="space-y-6">
                            {milestones.map((milestone, index) => (
                                <motion.div
                                    key={milestone.title}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{
                                        scale: 1.02,
                                        backgroundColor: `${milestone.color}20`,
                                        transition: { duration: 0.2 }
                                    }}
                                    style={{
                                        backgroundColor: `${milestone.color}10`,
                                        borderColor: `${milestone.color}30`,
                                    }}
                                    className="group relative p-6 rounded-2xl border transition-all duration-300 flex flex-col sm:flex-row gap-6"
                                >
                                    {/* Creative Image Container */}
                                    {milestone.image && (
                                        <div className="relative w-full sm:w-40 h-32 sm:h-24 shrink-0 group/img">
                                            {/* Ambient Glow */}
                                            <div
                                                className="absolute inset-0 blur-2xl opacity-20 group-hover/img:opacity-50 transition-all duration-700"
                                                style={{ backgroundColor: milestone.color }}
                                            />

                                            <div className="relative h-full w-full rounded-xl overflow-hidden border border-white/10 bg-neutral-900/80 backdrop-blur-sm flex items-center justify-center">
                                                {/* Background Tech Grid */}
                                                <div className="absolute inset-0 opacity-[0.15] pointer-events-none"
                                                    style={{
                                                        backgroundImage: `radial-gradient(${milestone.color} 1px, transparent 1px)`,
                                                        backgroundSize: '12px 12px'
                                                    }}
                                                />

                                                <motion.img
                                                    src={milestone.image}
                                                    alt={milestone.title}
                                                    className="relative z-10 w-full h-full object-contain p-3 transition-transform duration-700 group-hover/img:scale-110 group-hover/img:rotate-2"
                                                />

                                                {/* Moving Scan Line */}
                                                <motion.div
                                                    animate={{
                                                        y: ["-100%", "100%"],
                                                        opacity: [0, 0.5, 0]
                                                    }}
                                                    transition={{
                                                        duration: 3,
                                                        repeat: Infinity,
                                                        ease: "linear"
                                                    }}
                                                    className="absolute inset-0 w-full h-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent pointer-events-none z-20"
                                                />

                                                {/* Vignette */}
                                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,black_40%)] opacity-30 pointer-events-none" />
                                            </div>

                                            {/* Cyberpunk Bracket Accents */}
                                            <div className="absolute -top-1.5 -left-1.5 w-4 h-4 border-t-2 border-l-2 opacity-40 transition-all duration-300 group-hover/img:scale-110 group-hover/img:opacity-100" style={{ borderColor: milestone.color }} />
                                            <div className="absolute -bottom-1.5 -right-1.5 w-4 h-4 border-b-2 border-r-2 opacity-40 transition-all duration-300 group-hover/img:scale-110 group-hover/img:opacity-100" style={{ borderColor: milestone.color }} />
                                        </div>
                                    )}

                                    <div className="flex-grow">
                                        <div className="flex items-start justify-between gap-4 mb-2">
                                            <h3 className="text-xl font-black tracking-tight uppercase" style={{ color: milestone.color }}>
                                                {milestone.title}
                                            </h3>
                                        </div>
                                        <p className="text-sm text-black font-medium leading-relaxed group-hover:text-black/80 transition-colors">
                                            {milestone.subtitle}
                                        </p>
                                    </div>

                                    {/* Senior Accents */}
                                    <div className="absolute top-3 left-3 w-2 h-2 border-t-2 border-l-2 opacity-30 transition-all duration-300 group-hover:opacity-100" style={{ borderColor: milestone.color }} />
                                    <div className="absolute bottom-3 right-3 w-2 h-2 border-b-2 border-r-2 opacity-30 transition-all duration-300 group-hover:opacity-100" style={{ borderColor: milestone.color }} />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Arsenal;
