import { motion } from 'framer-motion';
import { ArrowLeft, Globe, MessageSquare, Gamepad2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Trojan = () => {
    return (
        <div className="min-h-screen bg-[#020617] text-white pt-32 pb-20 px-4 md:px-24 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-warrior-red/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Back Button */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-12"
                >
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
                    >
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="font-mono text-sm uppercase tracking-widest font-bold">Return to Base</span>
                    </Link>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Side: Branding */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-[2px] bg-warrior-red" />
                            <span className="text-warrior-red font-mono text-sm tracking-widest uppercase font-bold">
                                Independent Game Studio
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-8">
                            TROJAN <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-warrior-red to-red-800">PRODUCTIONS</span>
                        </h1>
                        <p className="text-xl text-gray-400 leading-relaxed mb-12 max-w-xl">
                            Trojan Productions is currently focused on our flagship IP, <span className="text-white font-bold">TROX</span>. After a successful initial reception, we are now evolving the experience into a full-scale release for <span className="text-warrior-red font-bold">Steam</span>—pushing the boundaries of interactive horror even further.
                        </p>

                        <div className="flex flex-wrap gap-6">
                            <a
                                href="https://troj4nblazing.itch.io"
                                target="_blank"
                                rel="noreferrer"
                                className="px-8 py-4 bg-warrior-red text-white font-bold rounded-xl hover:bg-red-700 transition-all flex items-center gap-3 group"
                            >
                                <Gamepad2 size={24} />
                                PLAY OUR GAMES
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Side: Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="relative"
                    >
                        <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-xl p-8 aspect-square flex items-center justify-center group">
                            {/* Animated scanning line */}
                            <motion.div
                                animate={{ top: ["0%", "100%", "0%"] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                                className="absolute left-0 right-0 h-1 bg-warrior-red/20 shadow-[0_0_20px_rgba(239,68,68,0.5)] z-20"
                            />

                            <img
                                src={`${import.meta.env.BASE_URL}extras/trojan.png`}
                                alt="Trojan Productions"
                                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 drop-shadow-[0_0_50px_rgba(239,68,68,0.2)]"
                            />

                            {/* Corner Accents */}
                            <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-warrior-red opacity-50" />
                            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-warrior-red opacity-50" />
                        </div>

                        {/* Shadow Glow */}
                        <div className="absolute -inset-4 bg-warrior-red/10 rounded-[3rem] blur-3xl -z-10" />
                    </motion.div>
                </div>

                {/* Our Story Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-32"
                >
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <div className="w-12 h-[2px] bg-warrior-red" />
                            <span className="text-warrior-red font-mono text-sm tracking-widest uppercase font-bold">
                                Our Story
                            </span>
                            <div className="w-12 h-[2px] bg-warrior-red" />
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">
                            How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-warrior-red to-red-800">Started</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Left: The Story */}
                        <div className="space-y-8">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="border-l-2 border-warrior-red/40 pl-6"
                            >
                                <p className="text-xl text-gray-300 leading-relaxed italic">
                                    "It started with two college friends, late nights, and a shared obsession with horror games."
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="space-y-6 text-gray-400 leading-relaxed"
                            >
                                <p>
                                    What began as side projects between lectures has slowly turned into something real. People started playing. Then they started talking. Before we knew it, <span className="text-white font-medium">Trojan Productions</span> had grown from a name we made up to a community of players who genuinely care about the experiences we create.
                                </p>
                                <p>
                                    We're not a studio with departments or fancy offices. We're two friends who figured things out as we went—learning, failing, iterating, and somehow making games that people enjoy.
                                </p>
                            </motion.div>

                            {/* What a Year It's Been */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-6 mt-8"
                            >
                                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-warrior-red animate-pulse" />
                                    What a year it's been...
                                </h3>
                                <ul className="space-y-3 text-gray-400 text-sm">
                                    <li className="flex items-start gap-3">
                                        <span className="text-warrior-red mt-1">→</span>
                                        <span><span className="text-white font-medium">50K+ players</span> found our games organically</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-warrior-red mt-1">→</span>
                                        <span>A publisher reached out with a <span className="text-white font-medium">console publishing deal</span></span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-warrior-red mt-1">→</span>
                                        <span><span className="text-white font-medium">Sermon</span> got selected for Xbox DAP</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-warrior-red mt-1">→</span>
                                        <span><span className="text-white font-medium">TROX</span> made it into IGDC's Indie 40 program</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-warrior-red mt-1">→</span>
                                        <span>Taking <span className="text-white font-medium">TROX to Steam</span> in 2026 — demo already live</span>
                                    </li>
                                </ul>
                            </motion.div>
                        </div>

                        {/* Right: The Team */}
                        <div className="space-y-6">
                            <motion.h3
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="text-xl font-bold text-white mb-6 font-mono uppercase tracking-wider"
                            >
                                The Team
                            </motion.h3>

                            {/* Vinil Card */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20 rounded-2xl p-6 hover:border-blue-500/40 transition-colors"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-lg">
                                        V
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-white font-bold text-lg">Vinil Verghese</h4>
                                        <p className="text-blue-400 text-sm font-mono uppercase tracking-wider mb-3">Co-Founder</p>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            The creative force behind Trojan—<span className="text-white">design</span>, <span className="text-white">story writing</span>, and <span className="text-white">ideation</span>. Crafts the narratives and visual direction that define our games. Also jumps into programming when the workload demands it.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Sushant Card */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="bg-gradient-to-br from-warrior-red/10 to-transparent border border-warrior-red/20 rounded-2xl p-6 hover:border-warrior-red/40 transition-colors"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-warrior-red/20 flex items-center justify-center text-warrior-red font-bold text-lg">
                                        S
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-white font-bold text-lg">Sushant Devadhe</h4>
                                        <p className="text-warrior-red text-sm font-mono uppercase tracking-wider mb-3">Co-Founder</p>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            Handles the <span className="text-white">programming</span>, <span className="text-white">project coordination</span>, and <span className="text-white">strategic planning</span>—setting timelines, mapping out the roadmap, bringing in collaborators like audio designers and artists, and keeping everything moving forward. Also provides <span className="text-white">design suggestions</span> based on what players might connect with.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Closing Note */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="mt-8 p-6 bg-black/40 rounded-2xl border border-white/5"
                            >
                                <p className="text-gray-500 text-sm italic leading-relaxed">
                                    "We're still just college students who love making horror games. That hasn't changed. The only difference now is that more people are watching."
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* Canva Embed Section: TROX Deep Dive */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-32"
                >
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                        <div>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-[2px] bg-warrior-red" />
                                <span className="text-warrior-red font-mono text-sm tracking-widest uppercase font-bold">
                                    Flagship IP
                                </span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">
                                TROX: <span className="text-gray-500">The Next Chapter</span>
                            </h2>
                        </div>
                        <div className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-xs font-mono uppercase tracking-widest text-gray-300">Target Platform: STEAM</span>
                        </div>
                    </div>

                    <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black/50">
                        {/* Overlay to catch initial scrolls or adds premium feel */}
                        <div className="absolute inset-0 pointer-events-none border-2 border-white/5 rounded-3xl z-20" />

                        <iframe
                            loading="lazy"
                            className="absolute inset-0 w-full h-full border-none"
                            src="https://www.canva.com/design/DAG3Entg_Nk/8y7R-Pq7O_yGHUHpC2a0PQ/view?embed"
                            allowFullScreen
                            allow="fullscreen"
                        />
                    </div>
                </motion.div>

                {/* Status Board */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 border-t border-white/5"
                >
                    <div className="p-8 rounded-2xl bg-white/5 border border-white/5 relative group overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Gamepad2 size={80} />
                        </div>
                        <h3 className="text-warrior-red font-mono text-xs uppercase mb-4 font-bold">Current Status</h3>
                        <p className="text-2xl font-bold mb-2">Steam Production</p>
                        <p className="text-gray-500 text-sm italic">"TROX is evolving for the master build."</p>
                    </div>

                    <div className="p-8 rounded-2xl bg-white/5 border border-white/5 relative group overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Globe size={80} />
                        </div>
                        <h3 className="text-warrior-red font-mono text-xs uppercase mb-4 font-bold">Community Reach</h3>
                        <p className="text-2xl font-bold mb-2">50,000+ Survivors</p>
                        <p className="text-gray-500 text-sm italic">Across itchio and game jams.</p>
                    </div>

                    <div className="p-8 rounded-2xl bg-white/5 border border-white/5 relative group overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            <MessageSquare size={80} />
                        </div>
                        <h3 className="text-warrior-red font-mono text-xs uppercase mb-4 font-bold">Manifesto</h3>
                        <p className="text-2xl font-bold mb-2">Atmospheric Depth</p>
                        <p className="text-gray-500 text-sm italic">Mechanics that serve the story.</p>
                    </div>
                </motion.div>

                {/* Player Reactions: Fear in Real Time */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="mt-40 mb-20"
                >
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            className="inline-block"
                        >
                            <span className="text-warrior-red font-mono text-sm tracking-[0.3em] uppercase font-bold mb-4 block">
                                Global Monitoring
                            </span>
                            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6 relative">
                                THEY <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 italic">ENJOY</span> OUR GAMES
                                <div className="absolute -top-4 -right-8 w-12 h-12 border-t-2 border-r-2 border-warrior-red/30" />
                                <div className="absolute -bottom-4 -left-8 w-12 h-12 border-b-2 border-l-2 border-warrior-red/30" />
                            </h2>
                        </motion.div>
                        <p className="text-gray-500 font-mono text-sm mt-4 uppercase tracking-widest">
                            - Live feed from the community base -
                        </p>
                    </div>

                    {/* Single Scrappy Collage Panel - Optimized */}
                    <div className="relative w-full min-h-[700px] md:min-h-[800px] rounded-3xl border-2 border-white/10 bg-gradient-to-br from-black/60 to-neutral-900/80 p-8 md:p-12">
                        {/* Corner accents */}
                        <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-warrior-red/40" />
                        <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-warrior-red/40" />

                        {/* Organized video collage - 18 videos in balanced layout */}
                        <div className="relative w-full h-[800px] md:h-[900px]">
                            {/* Row 1 - Top section (6 videos) */}
                            {/* Video 1 - Top Left */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3 }}
                                className="absolute top-[1%] left-[1%] w-[19%] aspect-video rounded-xl overflow-hidden border-4 border-white/20 shadow-xl cursor-pointer hover:scale-105 hover:z-50 transition-all duration-300 will-change-transform"
                                style={{ transform: 'rotate(-1deg)' }}
                            >
                                <iframe
                                    src="https://www.youtube.com/embed/622WDORv834"
                                    title="Player Reaction Video"
                                    className="w-full h-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                                <div className="absolute top-2 left-2 px-2 py-1 bg-warrior-red/90 text-white text-[10px] font-mono uppercase tracking-wider pointer-events-none">
                                    REC •
                                </div>
                            </motion.div>

                            {/* Video 2 */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: 0.1 }}
                                className="absolute top-[2%] left-[21%] w-[19%] aspect-video rounded-xl overflow-hidden border-4 border-white/20 shadow-xl cursor-pointer hover:scale-105 hover:z-50 transition-all duration-300 will-change-transform"
                                style={{ transform: 'rotate(1deg)' }}
                            >
                                <iframe
                                    src="https://www.youtube.com/embed/piAXJlFfLn4"
                                    title="Player Reaction Video"
                                    className="w-full h-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </motion.div>

                            {/* Video 3 */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: 0.2 }}
                                className="absolute top-[1%] left-[41%] w-[19%] aspect-video rounded-xl overflow-hidden border-4 border-warrior-red/30 shadow-xl cursor-pointer hover:scale-105 hover:z-50 transition-all duration-300 will-change-transform"
                                style={{ transform: 'rotate(-2deg)' }}
                            >
                                <iframe
                                    src="https://www.youtube.com/embed/nbDT71Y1cwc"
                                    title="Player Reaction Video"
                                    className="w-full h-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                                <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-600 animate-pulse pointer-events-none" />
                            </motion.div>

                            {/* Video 4 */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: 0.3 }}
                                className="absolute top-[2%] left-[61%] w-[19%] aspect-video rounded-xl overflow-hidden border-4 border-white/20 shadow-xl cursor-pointer hover:scale-105 hover:z-50 transition-all duration-300 will-change-transform"
                                style={{ transform: 'rotate(2deg)' }}
                            >
                                <iframe
                                    src="https://www.youtube.com/embed/cs67mtPnNVM"
                                    title="Player Reaction Video"
                                    className="w-full h-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </motion.div>

                            {/* Video 5 */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: 0.4 }}
                                className="absolute top-[1%] right-[1%] w-[18%] aspect-video rounded-xl overflow-hidden border-4 border-white/20 shadow-xl cursor-pointer hover:scale-105 hover:z-50 transition-all duration-300 will-change-transform"
                                style={{ transform: 'rotate(-1deg)' }}
                            >
                                <iframe
                                    src="https://www.youtube.com/embed/4RNf6Q_iApA"
                                    title="Player Reaction Video"
                                    className="w-full h-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </motion.div>

                            {/* Row 2 - Upper middle (6 videos) */}
                            {/* Video 6 */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: 0.5 }}
                                className="absolute top-[23%] left-[1%] w-[19%] aspect-video rounded-xl overflow-hidden border-4 border-white/20 shadow-xl cursor-pointer hover:scale-105 hover:z-50 transition-all duration-300 will-change-transform"
                                style={{ transform: 'rotate(1deg)' }}
                            >
                                <iframe
                                    src="https://www.youtube.com/embed/FrcyjEvl7Ng"
                                    title="Player Reaction Video"
                                    className="w-full h-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </motion.div>

                            {/* Video 7 */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: 0.6 }}
                                className="absolute top-[24%] left-[21%] w-[19%] aspect-video rounded-xl overflow-hidden border-4 border-white/20 shadow-xl cursor-pointer hover:scale-105 hover:z-50 transition-all duration-300 will-change-transform"
                                style={{ transform: 'rotate(-2deg)' }}
                            >
                                <iframe
                                    src="https://www.youtube.com/embed/1EjOVraZT9M"
                                    title="Player Reaction Video"
                                    className="w-full h-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </motion.div>

                            {/* Video 8 */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: 0.7 }}
                                className="absolute top-[23%] left-[41%] w-[19%] aspect-video rounded-xl overflow-hidden border-4 border-white/20 shadow-xl cursor-pointer hover:scale-105 hover:z-50 transition-all duration-300 will-change-transform"
                                style={{ transform: 'rotate(2deg)' }}
                            >
                                <iframe
                                    src="https://www.youtube.com/embed/jSvm4kwpobs"
                                    title="Player Reaction Video"
                                    className="w-full h-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </motion.div>

                            {/* Video 9 */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: 0.8 }}
                                className="absolute top-[24%] left-[61%] w-[19%] aspect-video rounded-xl overflow-hidden border-4 border-warrior-red/30 shadow-xl cursor-pointer hover:scale-105 hover:z-50 transition-all duration-300 will-change-transform"
                                style={{ transform: 'rotate(-1deg)' }}
                            >
                                <iframe
                                    src="https://www.youtube.com/embed/XfslJZyXppc"
                                    title="Player Reaction Video"
                                    className="w-full h-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                                <div className="absolute bottom-3 left-3 px-3 py-1 bg-black/80 rounded pointer-events-none">
                                    <p className="text-warrior-red text-xs font-bold uppercase tracking-wider">SUBJECT #0421</p>
                                </div>
                            </motion.div>

                            {/* Video 10 */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: 0.9 }}
                                className="absolute top-[23%] right-[1%] w-[18%] aspect-video rounded-xl overflow-hidden border-4 border-white/20 shadow-xl cursor-pointer hover:scale-105 hover:z-50 transition-all duration-300 will-change-transform"
                                style={{ transform: 'rotate(1deg)' }}
                            >
                                <iframe
                                    src="https://www.youtube.com/embed/Xw1vfLX45O8"
                                    title="Player Reaction Video"
                                    className="w-full h-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </motion.div>

                            {/* Row 3 - Lower middle (6 videos) */}
                            {/* Video 11 */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: 1.0 }}
                                className="absolute top-[46%] left-[1%] w-[19%] aspect-video rounded-xl overflow-hidden border-4 border-white/20 shadow-xl cursor-pointer hover:scale-105 hover:z-50 transition-all duration-300 will-change-transform"
                                style={{ transform: 'rotate(-2deg)' }}
                            >
                                <iframe
                                    src="https://www.youtube.com/embed/b_l52wUEk_A"
                                    title="Player Reaction Video"
                                    className="w-full h-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </motion.div>

                            {/* Video 12 */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: 1.1 }}
                                className="absolute top-[47%] left-[21%] w-[19%] aspect-video rounded-xl overflow-hidden border-4 border-white/20 shadow-xl cursor-pointer hover:scale-105 hover:z-50 transition-all duration-300 will-change-transform"
                                style={{ transform: 'rotate(1deg)' }}
                            >
                                <iframe
                                    src="https://www.youtube.com/embed/6bFZ8Erc4zA"
                                    title="Player Reaction Video"
                                    className="w-full h-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </motion.div>

                            {/* Video 13 */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: 1.2 }}
                                className="absolute top-[46%] left-[41%] w-[19%] aspect-video rounded-xl overflow-hidden border-4 border-white/20 shadow-xl cursor-pointer hover:scale-105 hover:z-50 transition-all duration-300 will-change-transform"
                                style={{ transform: 'rotate(-1deg)' }}
                            >
                                <iframe
                                    src="https://www.youtube.com/embed/ynUTFCYmNV4"
                                    title="Player Reaction Video"
                                    className="w-full h-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </motion.div>

                            {/* Video 14 */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: 1.3 }}
                                className="absolute top-[47%] left-[61%] w-[19%] aspect-video rounded-xl overflow-hidden border-4 border-warrior-red/30 shadow-xl cursor-pointer hover:scale-105 hover:z-50 transition-all duration-300 will-change-transform"
                                style={{ transform: 'rotate(2deg)' }}
                            >
                                <iframe
                                    src="https://www.youtube.com/embed/0ZRm8VCwIis"
                                    title="Player Reaction Video"
                                    className="w-full h-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </motion.div>

                            {/* Video 15 */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: 1.4 }}
                                className="absolute top-[46%] right-[1%] w-[18%] aspect-video rounded-xl overflow-hidden border-4 border-white/20 shadow-xl cursor-pointer hover:scale-105 hover:z-50 transition-all duration-300 will-change-transform"
                                style={{ transform: 'rotate(-2deg)' }}
                            >
                                <iframe
                                    src="https://www.youtube.com/embed/2ME4wUhVI58"
                                    title="Player Reaction Video"
                                    className="w-full h-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </motion.div>

                            {/* Row 4 - Bottom (3 videos centered) */}
                            {/* Video 16 */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: 1.5 }}
                                className="absolute top-[69%] left-[10%] w-[19%] aspect-video rounded-xl overflow-hidden border-4 border-white/20 shadow-xl cursor-pointer hover:scale-105 hover:z-50 transition-all duration-300 will-change-transform"
                                style={{ transform: 'rotate(1deg)' }}
                            >
                                <iframe
                                    src="https://www.youtube.com/embed/sbxm8G5J_Vg"
                                    title="Player Reaction Video"
                                    className="w-full h-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </motion.div>

                            {/* Video 17 */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: 1.6 }}
                                className="absolute top-[70%] left-[40.5%] w-[19%] aspect-video rounded-xl overflow-hidden border-4 border-white/20 shadow-xl cursor-pointer hover:scale-105 hover:z-50 transition-all duration-300 will-change-transform"
                                style={{ transform: 'rotate(-1deg)' }}
                            >
                                <iframe
                                    src="https://www.youtube.com/embed/bHEWhKFk-Zc"
                                    title="Player Reaction Video"
                                    className="w-full h-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </motion.div>

                            {/* Video 18 */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: 1.7 }}
                                className="absolute top-[69%] right-[10%] w-[19%] aspect-video rounded-xl overflow-hidden border-4 border-white/20 shadow-xl cursor-pointer hover:scale-105 hover:z-50 transition-all duration-300 will-change-transform"
                                style={{ transform: 'rotate(2deg)' }}
                            >
                                <iframe
                                    src="https://www.youtube.com/embed/JoAX5wCLH4s"
                                    title="Player Reaction Video"
                                    className="w-full h-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </motion.div>

                            {/* Video 19 - Additional bottom row */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: 1.8 }}
                                className="absolute top-[70%] left-[30%] w-[19%] aspect-video rounded-xl overflow-hidden border-4 border-white/20 shadow-xl cursor-pointer hover:scale-105 hover:z-50 transition-all duration-300 will-change-transform"
                                style={{ transform: 'rotate(-2deg)' }}
                            >
                                <iframe
                                    src="https://www.youtube.com/embed/dI2tqt7BbJ0"
                                    title="Player Reaction Video"
                                    className="w-full h-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </motion.div>

                            {/* Video 20 - Additional bottom row */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: 1.9 }}
                                className="absolute top-[69%] left-[50%] w-[19%] aspect-video rounded-xl overflow-hidden border-4 border-warrior-red/30 shadow-xl cursor-pointer hover:scale-105 hover:z-50 transition-all duration-300 will-change-transform"
                                style={{ transform: 'rotate(1deg)' }}
                            >
                                <iframe
                                    src="https://www.youtube.com/embed/JwlKMeja8Nw"
                                    title="Player Reaction Video"
                                    className="w-full h-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </motion.div>

                            {/* Video 21 - Additional bottom row */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: 2.0 }}
                                className="absolute top-[70%] right-[30%] w-[19%] aspect-video rounded-xl overflow-hidden border-4 border-white/20 shadow-xl cursor-pointer hover:scale-105 hover:z-50 transition-all duration-300 will-change-transform"
                                style={{ transform: 'rotate(-1deg)' }}
                            >
                                <iframe
                                    src="https://www.youtube.com/embed/V_Qszk8N9bw"
                                    title="Player Reaction Video"
                                    className="w-full h-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </motion.div>

                            {/* Decorative red accent bars */}
                            <div className="absolute top-[35%] left-0 w-[12%] h-[2px] bg-warrior-red/60 pointer-events-none" />
                            <div className="absolute top-[58%] right-0 w-[12%] h-[2px] bg-warrior-red/60 pointer-events-none" />
                        </div>

                        {/* Bottom status bar */}
                        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between px-4 py-2 bg-black/40 rounded-lg border border-white/5">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Live Monitoring Active</span>
                            </div>
                            <span className="text-[10px] font-mono text-warrior-red uppercase tracking-widest">TROX_FEED_001</span>
                        </div>
                    </div>

                    {/* Scrolling Text Ribbon */}
                    <div className="mt-16 overflow-hidden py-4 border-y border-white/5 opacity-30">
                        <motion.div
                            animate={{ x: [0, -1000] }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="flex whitespace-nowrap gap-12 text-sm font-mono uppercase tracking-[0.5em]"
                        >
                            {Array(10).fill("FEAR IS THE BEST TEACHER • STAY ALERT • NO ONE IS SAFE • ").map((text, i) => (
                                <span key={i} className="text-gray-400">{text}</span>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div >
            <Footer />
        </div >
    );
};

export default Trojan;
