import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const About = () => {
    const images = [
        "/me.jpg",
        "/me_3.jpg",
        "/me_4.png"
    ];

    const [imgIndex, setImgIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setImgIndex((prev) => (prev + 1) % images.length);
        }, 5000); // Change image every 5 seconds
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section id="about" className="py-24 md:py-32 px-4 sm:px-8 md:px-24 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] h-[300px] bg-warrior-red/10 rounded-full blur-[100px] -ml-32" />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Image Container with Stylized Frame */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative w-full max-w-[400px] aspect-[4/5]"
                    >
                        {/* The Frame Background */}
                        <div className="absolute inset-0 border-2 border-warrior-red/30 rounded-2xl transform rotate-3 translate-x-4 translate-y-4 -z-10" />

                        {/* The Photo Container */}
                        <div className="relative w-full h-full overflow-hidden rounded-2xl border border-white/10 group bg-neutral-900">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={imgIndex}
                                    src={images[imgIndex]}
                                    alt="Sushant"
                                    initial={{ opacity: 0, scale: 1.1 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 1, ease: "easeInOut" }}
                                    className="w-full h-full object-cover transition-all duration-700 ease-in-out"
                                />
                            </AnimatePresence>

                            {/* Overlay Grain/Texture Effect */}
                            <div className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-30 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

                            {/* Scanning Line Animation */}
                            <motion.div
                                animate={{ top: ["0%", "100%", "0%"] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                className="absolute left-0 right-0 h-[2px] bg-warrior-red/40 shadow-[0_0_10px_rgba(239,68,68,0.5)] z-20"
                            />
                        </div>

                        {/* Corner Accents */}
                        <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-warrior-red" />
                        <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-warrior-red" />
                    </motion.div>

                    {/* Text Content */}
                    <div className="flex-1">
                        <motion.header
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mb-10"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-[2px] bg-warrior-red" />
                                <span className="text-warrior-red font-mono text-sm tracking-widest uppercase font-bold">
                                    Identity Verified
                                </span>
                            </div>
                            <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-none mb-6">
                                ABOUT <br />
                                <span className="text-white">ME</span>
                            </h2>
                        </motion.header>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-6 text-gray-400 text-lg md:text-xl leading-relaxed font-medium"
                        >
                            <p>
                                I’m <span className="text-white">Sushant Devadhe</span>, a Game Developer from India who loves games, movies, and learning new things. What started as a passion for playing games grew into a desire to make them.
                            </p>
                            <p>
                                I aim to build memorable experiences that leave a lasting impact—just like the games that inspired me.
                            </p>

                            <div className="pt-8 flex flex-wrap gap-8">
                                <div className="flex flex-col">
                                    <span className="text-warrior-red font-mono text-xs uppercase mb-1">Role</span>
                                    <span className="text-white font-bold">Game Developer</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-warrior-red font-mono text-xs uppercase mb-1">Origin</span>
                                    <span className="text-white font-bold">India</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-warrior-red font-mono text-xs uppercase mb-1">Status</span>
                                    <span className="text-white font-bold">Active</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .outline-text {
                    -webkit-text-stroke: 1px rgba(255, 255, 255, 0.2);
                }
            `}</style>
        </section>
    );
};

export default About;



