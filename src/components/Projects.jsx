import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useRef } from 'react';

const featuredProjects = [
    {
        title: "TROX",
        subtitle: "A post-apocalyptic survival horror game",
        technologies: ["Unity", "C#"],
        role: "Lead Gameplay Developer",
        challenge: "Developing atmospheric mechanics and resource management systems under tight constraints.",
        image: `${import.meta.env.BASE_URL}projects/trox.png`,
        link: "https://troj4nblazing.itch.io/trox"
    },
    {
        title: "THE PREPARATION",
        subtitle: "A short psychological horror based on a true story.",
        technologies: ["Unity", "C#"],
        role: "Lead Developer",
        challenge: "Building a tense, atmospheric experience in just 30 days while staying true to the source material.",
        image: `${import.meta.env.BASE_URL}projects/thepreparation.png`,
        link: "https://troj4nblazing.itch.io/thepreparation"
    },
    {
        title: "DREADVAULT",
        subtitle: "A modern psx style horror game",
        technologies: ["Unity", "C#", "Unity Localization"],
        role: "Gameplay Programmer",
        challenge: "Developing modular systems and mechanics which can easily be used for further projects",
        image: `${import.meta.env.BASE_URL}projects/dreadvault.png`,
        link: "https://troj4nblazing.itch.io/dreadvault"
    },
    {
        title: "CRIMSON TACTICS",
        subtitle: "A turn-based tactical RPG",
        technologies: ["Unity", "C#", "Steam API"],
        role: "Professional QA Tester",
        challenge: "Ensuring mechanical stability and identifying critical edge-case bugs for a professional commercial launch.",
        image: `${import.meta.env.BASE_URL}projects/crimsontactics.jpg`,
        link: "https://store.steampowered.com/app/1480810/Crimson_Tactics_The_Rise_of_The_White_Banner/"
    },
    {
        title: "FASTBITE RUSH",
        subtitle: "Gamification concept for the fast food business",
        technologies: ["Canva"],
        role: "Gamification Designer",
        challenge: "Developing engaging gamified loops and reward systems for high-frequency consumer environments.",
        image: `${import.meta.env.BASE_URL}projects/fastbiterush.png`,
        link: "https://www.canva.com/design/DAG47N0hm-Q/G4Bepnz5_b-faaZSyNKDZw/view?utm_content=DAG47N0hm-Q&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h933a984da0#5"
    },
    {
        title: "TRAUMATIZED",
        subtitle: "A psychological horror game",
        technologies: ["Unity", "C#"],
        role: "Gameplay Programmer",
        challenge: "Developing an hour long game in 3 months and some features",
        image: `${import.meta.env.BASE_URL}projects/traumatized.jpg`,
        link: "https://sushantsocial.itch.io/traumatized"
    },
    {
        title: "FALLING WORLD",
        subtitle: "A mobile chain-reaction game made for WTF game jam.",
        technologies: ["Unity", "C#"],
        role: "Designer and Developer",
        challenge: "Completing the game in 48 hours",
        image: `${import.meta.env.BASE_URL}projects/fallingworld.png`,
        link: "https://paradisesan.itch.io/falling-world"
    },
    {
        title: "HEROES VS HORDES",
        subtitle: "Game Monetization Analysis Breakdown",
        technologies: ["Canva", "Photoshop"],
        role: "Game Economy Analyst",
        challenge: "Breaking down complex mobile monetization loops into clear, actionable pros and cons for academic evaluation.",
        image: `${import.meta.env.BASE_URL}projects/heroesvshordes.png`,
        link: "https://www.canva.com/design/DAGitNCgbhU/9n9y8XPpDfYchFL9BqJirg/view?utm_content=DAGitNCgbhU&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=ha4410aa85b#1"
    },
    {
        title: "GAME MONETIZATION",
        subtitle: "Analysis of DLCs, Expansions, IAPs, and Social Features",
        technologies: ["Canva"],
        role: "Game Economy Analyst",
        challenge: "Analyzing and categorizing various monetization models and social features for game sustainability.",
        image: `${import.meta.env.BASE_URL}projects/gamemonetization.png`,
        link: "https://www.canva.com/design/DAGqxIJqoYM/zHXcqn5R0--Jv5fqEXBp-g/view?utm_content=DAGqxIJqoYM&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h48a43165d5#2"
    }
];

const TiltCard = ({ project }) => {
    return (
        <motion.a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="group block bg-[#0a0c14] rounded-2xl overflow-hidden border border-white/5 hover:border-warrior-red/30 transition-all duration-300 shadow-xl h-full"
        >
            {/* Project Image */}
            <div className="relative aspect-video overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c14] to-transparent opacity-60" />
            </div>

            {/* Project Details */}
            <div className="p-6 space-y-5">
                <div>
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-warrior-red transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-slate-400 text-sm font-medium">
                        {project.subtitle}
                    </p>
                </div>

                {/* Technologies */}
                <div className="space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-warrior-red">
                        Technologies
                    </span>
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                            <span
                                key={tech}
                                className="px-2.5 py-1 text-[11px] font-medium bg-white/5 border border-white/10 rounded-md text-slate-300"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Role */}
                <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-warrior-red">
                        Role
                    </span>
                    <p className="text-slate-300 text-sm font-medium">
                        {project.role}
                    </p>
                </div>

                {/* Key Challenge */}
                <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-warrior-red">
                        Key Challenge
                    </span>
                    <p className="text-slate-400 text-xs leading-relaxed italic">
                        "{project.challenge}"
                    </p>
                </div>
            </div>
        </motion.a>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="py-24 md:py-32 px-4 sm:px-8 md:px-24 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-warrior-red/5 rounded-full blur-[120px] -mr-64 -mt-64" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-warrior-red/5 rounded-full blur-[120px] -ml-64 -mb-64" />

            <div className="max-w-5xl mx-auto relative z-10">
                <header className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-10 h-[2px] bg-warrior-red" />
                            <span className="text-warrior-red font-mono text-xs tracking-widest uppercase font-bold">
                                Work Archive
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-none mb-6">
                            FEATURED <br />
                            <span className="text-warrior-red">MISSIONS</span>
                        </h2>
                    </div>
                    <p className="opacity-90 max-w-xs font-medium text-base mb-2">
                        A collection of interactive experiences and technical experiments built with passion.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {featuredProjects.map((project, index) => (
                        <TiltCard key={index} project={project} />
                    ))}
                </div>
            </div>

            <style jsx>{`
                .outline-text {
                    -webkit-text-stroke: 1px rgba(255, 255, 255, 0.2);
                }
                .group:hover .outline-text {
                    -webkit-text-stroke: 1px #ff3e3e;
                }
            `}</style>
        </section>
    );
};

export default Projects;

