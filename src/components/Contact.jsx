import { Mail, Linkedin, MessageSquare, Copy, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = (e, text) => {
        e.preventDefault();
        e.stopPropagation();
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const socialLinks = [
        {
            name: "Email",
            id: "sushantdevadhe007@gmail.com",
            icon: <Mail className="w-6 h-6" />,
            link: "mailto:sushantdevadhe007@gmail.com",
            canCopy: true
        },
        {
            name: "LinkedIn",
            id: "sushant-devadhe",
            icon: <Linkedin className="w-6 h-6" />,
            link: "https://www.linkedin.com/in/sushant-devadhe/",
        },
        {
            name: "Discord",
            id: "paradise07911",
            icon: <MessageSquare className="w-6 h-6" />,
            link: "#",
            canCopy: true
        }
    ];

    return (
        <section id="contact" className="py-24 px-4 sm:px-8 md:px-24 border-t border-warrior-red/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-warrior-red/5 via-transparent to-transparent opacity-10" />

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-16 leading-none"
                >
                    LET'S <span className="text-warrior-red">CONNECT</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {socialLinks.map((social, index) => (
                        <motion.a
                            key={index}
                            href={social.link}
                            target="_blank"
                            rel="noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-8 bg-neutral-900/50 rounded-2xl border border-white/5 hover:border-warrior-red/50 transition-all duration-300 backdrop-blur-sm relative"
                        >
                            {social.canCopy && (
                                <button
                                    onClick={(e) => handleCopy(e, social.id)}
                                    className="absolute top-4 right-4 p-2 rounded-lg bg-neutral-800 text-gray-400 hover:text-white hover:bg-neutral-700 transition-all z-20 group/copy"
                                    title="Copy to clipboard"
                                >
                                    <AnimatePresence mode="wait">
                                        {copied ? (
                                            <motion.div
                                                key="check"
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                exit={{ scale: 0 }}
                                            >
                                                <Check className="w-4 h-4 text-green-500" />
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                key="copy"
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                exit={{ scale: 0 }}
                                            >
                                                <Copy className="w-4 h-4" />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* Tooltip */}
                                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-mono bg-neutral-800 text-white px-2 py-1 rounded opacity-0 group-hover/copy:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-white/5">
                                        {copied ? "COPIED!" : "COPY ID"}
                                    </span>
                                </button>
                            )}

                            <div className={`mb-4 w-12 h-12 mx-auto flex items-center justify-center rounded-xl bg-neutral-800 text-white group-hover:bg-warrior-red group-hover:text-white transition-all duration-300`}>
                                {social.icon}
                            </div>
                            <h3 className="text-white font-bold text-lg mb-1">{social.name}</h3>
                            <p className="text-gray-500 font-mono text-sm">{social.id}</p>
                        </motion.a>
                    ))}
                </div>


            </div>
        </section>
    );
};

export default Contact;

