import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaItchIo } from 'react-icons/fa';

export default function Contact() {
    return (
        <section id="contact" style={{ padding: '60px 20px', textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '2.5rem', color: '#ffae44', marginBottom: '20px' }}
            >
                Contacto
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{ fontSize: '1.2rem', lineHeight: '1.6', color: '#ddd', marginBottom: '30px' }}
            >
                ¿Te interesa mi trabajo? ¡Contáctame!
            </motion.p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                <a href="mailto:riverarojasw@gmail.com" style={{ color: '#ddd', fontSize: '2rem', transition: '0.3s' }}>
                    <FaEnvelope />
                </a>
                <a href="https://wilfredo-rivera.itch.io" target="_blank" rel="noopener noreferrer" style={{ color: '#ddd', fontSize: '2rem', transition: '0.3s' }}>
                    <FaItchIo />
                </a>
            </div>
        </section>
    );
}