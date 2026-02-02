import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="min-h-[90vh] flex flex-col justify-center items-center px-4 sm:px-6 text-center pt-20 relative overflow-hidden">

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="max-w-4xl"
            >
                <div className="overflow-hidden mb-6">
                    <motion.p
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }} // Custom easing for "Lando" feel
                        className="font-sans text-warm-accent font-medium tracking-widest text-sm uppercase"
                    >
                        Welcome to my Digital Space
                    </motion.p>
                </div>

                <div className="overflow-hidden mb-4">
                    <motion.h1
                        initial={{ y: "120%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
                        className="font-bold tracking-tight text-6xl sm:text-8xl md:text-10xl text-warm-text leading-tight p-2 shrink-0 truncate"
                    >
                        Sushant
                    </motion.h1>
                </div>

                {/* Professional Title Section */}
                <div className="flex flex-col items-center mb-8">
                    <div className="overflow-hidden">
                        <motion.span
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
                            className="block text-sm md:text-lg font-black tracking-[0.4em] text-warrior-red uppercase"
                        >
                            Game Programmer
                        </motion.span>
                    </div>
                    <div className="overflow-hidden -mt-1">
                        <motion.span
                            initial={{ y: "-100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4, ease: [0.33, 1, 0.68, 1] }}
                            className="block text-[10px] md:text-xs font-bold tracking-[0.2em] text-warm-text/50 uppercase"
                        >
                            & Coordinator
                        </motion.span>
                    </div>
                </div>

                <div className="overflow-hidden">
                    <motion.p
                        initial={{ y: "100%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5, ease: [0.33, 1, 0.68, 1] }}
                        className="text-lg md:text-xl text-warm-text/70 font-sans font-light max-w-2xl mx-auto leading-relaxed"
                    >
                        I aim to build <span className="font-medium text-warm-text">memorable experiences</span> that leave a lasting impact, much like the <span className="font-medium text-warm-text">games that inspired me</span>.
                    </motion.p>
                </div>

                <div className="overflow-hidden mt-8 mb-4">
                    <motion.div
                        initial={{ y: "100%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5, ease: [0.33, 1, 0.68, 1] }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                        <Link
                            to="/trojan"
                            className="px-8 py-3 bg-red-600/10 border border-red-600/30 rounded-full text-red-500 font-bold tracking-widest text-xs uppercase hover:bg-red-600 hover:text-white transition-all duration-300"
                        >
                            Trojan Productions
                        </Link>

                        <a
                            href="https://drive.google.com/file/d/1pxnGTQ9uvHdsABhMhoM-_HH-M0T_u_-f/view?usp=sharing"
                            target="_blank"
                            rel="noreferrer"
                            className="px-8 py-3 border border-warm-text/20 rounded-full text-warm-text font-bold tracking-widest text-xs uppercase hover:bg-warm-text hover:text-white transition-all duration-300"
                        >
                            Resume
                        </a>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ delay: 0.8, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-16 origin-top"
                >
                    <div className="w-px h-24 bg-warm-text/20 mx-auto" />
                </motion.div>
            </motion.div>

        </section>
    );
};

export default Hero;
