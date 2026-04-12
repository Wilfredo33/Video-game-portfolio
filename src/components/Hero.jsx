import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section id="hero" className="hero">
            <motion.div
                className="hero-content"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <motion.h1
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    Bienvenido a mi Portafolio de Videojuegos
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    Donde la creatividad se encuentra
                    con la tecnología para dar vida a nuevos mundos.
                </motion.p> 
            </motion.div>
        </section>
    );
}