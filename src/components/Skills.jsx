import { motion } from 'framer-motion';
import { FaUnity, FaGamepad, FaCode, FaPaintBrush, FaGithub } from 'react-icons/fa';

export default function Skills() {
    const skills = [
        { icon: <FaUnity />, name: 'Unity' },
        { icon: <FaCode />, name: 'C#' },
        { icon: <FaPaintBrush />, name: 'Diseño de interfaces' },
        { icon: <FaGithub />, name: 'GitHub' }
    ];

    return (
        <section id="skills" style={{ padding: '60px 20px', background: '#111', textAlign: 'center' }}>
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '2.5rem', color: '#ffae44', marginBottom: '40px' }}
            >
                Habilidades
            </motion.h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', maxWidth: '1000px', margin: '0 auto' }}>
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        style={{
                            background: 'linear-gradient(145deg, #1a1a1a, #111)',
                            padding: '30px',
                            borderRadius: '10px',
                            boxShadow: '0 0 20px rgba(0,0,0,0.5)',
                            border: '1px solid #3a3a3a',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <div style={{ fontSize: '3rem', color: '#ffae44', marginBottom: '15px' }}>{skill.icon}</div>
                        <h3 style={{ color: '#ddd', fontFamily: 'Montserrat, sans-serif' }}>{skill.name}</h3>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}