import { useState } from 'react';
import { motion } from 'framer-motion';

const achievements = [
    {
        title: 'Indie 40 Selection',
        description: 'My indie team got selected for Indie 40, showcasing our innovative game concepts.'
    },
    {
        title: 'Horror Indie Studio',
        description: 'Started a horror indie studio with cumulative downloads reaching 50k+ across releases.'
    },
    {
        title: 'Xbox DAP',
        description: 'One of our projects was selected for the Xbox Developer Accelerator Program (DAP).'
    },
    {
        title: 'Console Publishing Deal',
        description: 'Signed a publishing deal to port a small game to consoles, expanding our audience.'
    },
    {
        title: 'Professional QA Experience',
        description: 'Worked as a QA Tester for "Crimson Tactics: The Rise of The White Banner", identifying critical bugs and providing gameplay feedback for a Steam-released title.'
    }
];

const Accomplishments = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (i) => {
        setOpenIndex(openIndex === i ? null : i);
    };

    return (
        <section id="accomplishments" className="py-24 px-4 sm:px-8 md:px-24">
            <div className="max-w-4xl mx-auto">
                <h2 className="font-bold text-3xl md:text-5xl text-warm-text mb-8 text-center">Accomplishments</h2>
                <div className="space-y-4">
                    {achievements.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                        >
                            <button
                                onClick={() => toggle(i)}
                                className="w-full flex justify-between items-center p-4 bg-neutral-900/30 rounded-xl border border-white/5 hover:border-warrior-red/50 transition-colors"
                            >
                                <span className="font-medium text-lg text-white">{item.title}</span>
                                <span className="text-warrior-red">
                                    {openIndex === i ? '-' : '+'}
                                </span>
                            </button>
                            {openIndex === i && (
                                <div className="p-4 text-gray-300 border-t border-white/5">
                                    {item.description}
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Accomplishments;
