const skills = ["Unity", "Unreal", "C++", "C#", "Java", "Git", "Level Design", "Production"];

const Skills = () => {
    return (
        <section id="skills" className="py-24 px-4 sm:px-8 md:px-24">
            <div className="max-w-4xl mx-auto">
                <h2 className="font-bold text-3xl md:text-5xl text-warm-text mb-8 text-center">Skills</h2>
                <div className="flex flex-wrap justify-center gap-4">
                    {skills.map((skill, index) => (
                        <span
                            key={index}
                            className="px-4 py-2 border border-current rounded-full text-sm font-medium opacity-80 hover:opacity-100 transition-opacity"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
