import { motion } from 'framer-motion';

export default function Projects() {
    const baseUrl = import.meta.env.BASE_URL;
    const projects = [
        {
            title: 'Asteroids Energy',
            image: `${baseUrl}images/asteroids-energy.png`,
            link: 'https://wilfredo-rivera.itch.io/asteroids-energy',
            description:
            `Un juego de acción espacial donde debes evitar asteroides y recolectar energía,
            fue desarrollado en Unity y C# durante una game jam de 30 horas,
            donde participé en el desarrollo del game play integrando scripts
            con mecánicas del player y enemigos. \n                
            Fue una gran experiencia que resultó en un proyecto divertido y satisfactorio.`
        },
        {
            title: 'Hungry Bites',
            image: `${baseUrl}images/hungry-bites.png`,
            link: 'https://wilfredo-rivera.itch.io/hungry-bites',
            description: 
            `Un juego arcade donde controlas a un personaje hambriento que debe tomar
            la mayor cantidad de comida. Este es un juego que desarrollé durante mi
            formación como desarrollador de videojuegos, y fue mi primer proyecto completo. \n
            Desarrollado en Unity y C#.`
        },

        {
            title: 'Drifting Death',
            image: `${baseUrl}images/drifting-death.png`,
            link: 'https://wilfredo-rivera.itch.io/drifting-death',
            description: 
            `Es un juego de carreras donde los competidores van a tratar de eliminarte
            de la pista y debes hacer lo mismo usando la técnica de drifting correcta.
            Este es un juego que desarrollé durante mi formación como desarrollador de videojuegos.
            Actualmente se encuentra en fase de desarrollo.`
        },

        {
            title: 'Romance Protocol',
            image: `${baseUrl}images/romance-protocol.png`,
            link: 'https://mayvidev.itch.io/romance-protocol',
            description: 
            `Una humana queda “atrapada” en una escuela llena de monstruos. 
            Con su arma dispara corazones con el objetivo de agotar la “resistencia emocional” 
            de los monstruos hasta hacerlos desaparecer, dejando corazones como recompensa.
            El juego corresponde a mi segunda participación de una game jam de 18 horas, 
            donde participé en el desarrollo del game play integrando scripts con
            sistemas de IA para obtener mecánicas más fluidas y entretenidas. \n
            Desarrollado en Unity y C#.`
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