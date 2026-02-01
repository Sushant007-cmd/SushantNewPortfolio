import { motion } from 'framer-motion';

const games = [
    { title: "ELDEN RING", genre: "Souls-like", color: "from-amber-700 to-amber-900" },
    { title: "CYBERPUNK 2077", genre: "RPG", color: "from-yellow-400 to-yellow-600" },
    { title: "VALORANT", genre: "FPS", color: "from-rose-500 to-rose-700" },
    { title: "HOLLOW KNIGHT", genre: "Metroidvania", color: "from-slate-700 to-slate-900" }
];

const Games = () => {
    return (
        <section className="py-24 px-6 md:px-24">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold tracking-widest text-white mb-12 uppercase flex items-center gap-4">
                    <span className="text-warrior-red">//</span> Currently Playing
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {games.map((game, index) => (
                        <div
                            key={index}
                            className={`aspect-square rounded-lg bg-gradient-to-br ${game.color} relative overflow-hidden group cursor-pointer`}
                        >
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />

                            <div className="absolute bottom-0 left-0 p-4 w-full">
                                <h3 className="font-bold text-white text-xl leading-none">{game.title}</h3>
                                <p className="font-mono text-xs text-white/70">{game.genre}</p>
                            </div>

                            <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Games;

