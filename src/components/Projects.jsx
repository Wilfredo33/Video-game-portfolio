import { motion } from 'framer-motion';

export default function Projects() {
    const baseUrl = import.meta.env.BASE_URL;
    const projects = [
        {
            title: 'Asteroids Energy',
            image: `${baseUrl}images/asteroids-energy.png`,
            link: 'https://wilfredo-rivera.itch.io/asteroids-energy',
            description: 'Un juego de acción espacial donde debes evitar asteroides y recolectar energía. Desarrollado en Unity y C#.'
        },
        {
            title: 'Hungry Bites',
            image: `${baseUrl}images/hungry-bites.png`,
            link: 'https://wilfredo-rivera.itch.io/hungry-bites',
            description: 'Un juego arcade donde controlas a un personaje hambriento recolectando comida. Desarrollado en Unity y C#.'
        },
        {
            title: 'Drifting Death',
            image: `${baseUrl}images/drifting-death.png`,
            link: 'https://wilfredo-rivera.itch.io/drifting-death',
            description: 'Un desafiante juego de carreras con elementos de supervivencia. Desarrollado en Unity y C#.'
        }
    ];

    return (
        <section id="projects" className="projects">
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                Proyectos
            </motion.h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="project-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                    >
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <img src={project.image} alt={project.title} />
                        </a>
                        <h3>{project.title}</h3>
                        <p style={{ color: '#bbb', fontSize: '0.9rem', margin: '10px 0' }}>{project.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}