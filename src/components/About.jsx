import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="about" style={{ padding: '60px 20px', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '2.5rem', color: '#ffae44', marginBottom: '20px' }}
            >
                Acerca de Mí
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{ fontFamily: '"Press Start 2P", cursive',fontSize: '1.2rem', lineHeight: '1.6', color: '#ddd' }}
            >
                Soy un desarrollador de videojuegos con experiencia en Unity, 
                progración en C# y otras herramientas como git hub.
                Me especializo en el diseño de mecánicas, implementación de prototipos,
                programación del gameplay y optimización de juegos. 
                Mi pasión es crear experiencias de juego únicas y diferenciadas,
                por lo que siempre estoy buscando nuevas formas de mejorar mis habilidades
                y aprender nuevas tecnologías.
            </motion.p>
        </section>
    );
}