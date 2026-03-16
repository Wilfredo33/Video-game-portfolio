import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="navbar">

            {/* LOGO */}
            <div className="nav-logo">
                <span>WILFREDO RIVERA</span>
                <p className="role">UNITY GAME DEVELOPER</p>
            </div>

            {/* BOTÓN HAMBURGUESA (MÓVIL) */}
            <div className="hamburger" onClick={() => setOpen(!open)}>
                <span className={open ? "line open" : "line"}></span>
                <span className={open ? "line open" : "line"}></span>
                <span className={open ? "line open" : "line"}></span>
            </div>

            {/* LINKS */}
            <ul className={open ? "nav-links active" : "nav-links"}>
                <li><a href="#hero">Inicio</a></li>
                <li><a href="#about">Acerca</a></li>
                <li><a href="#skills">Habilidades</a></li>
                <li><a href="#projects">Proyectos</a></li>
                <li><a href="#contact">Contacto</a></li>
            </ul>
        </nav>
    );
}