import React, { useState } from 'react';
import { Navbar, Nav, Offcanvas } from 'react-bootstrap';
import './Header.css'; // Asegúrate de que el archivo existe

const Header = () => {
    const [show, setShow] = useState(false);

    return (
        <>
            <Navbar className="navbar" expand={false}>
                <Navbar.Brand href="#">Portafolio WEB JR. MERLO BS AS</Navbar.Brand>
                <Navbar.Toggle onClick={() => setShow(true)} />
            </Navbar>

            <Offcanvas show={show} onHide={() => setShow(false)} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Opciones</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="flex-column">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#about"> Sobre Mí</Nav.Link>
                        <Nav.Link href="#users">¿Quién Soy?</Nav.Link>
                        <Nav.Link href="#products">Habilidades y Conocimientos</Nav.Link>
                        <Nav.Link href="#services">Certificaciones y Formación</Nav.Link>
                        <Nav.Link href="#search">Metodologías de Trabajo</Nav.Link>
                        <Nav.Link href="#testimonials">Proyectos Destacados</Nav.Link>
                        <Nav.Link href="#blog">Mis trayectos</Nav.Link>
                        <Nav.Link href="#faq"> Valores Profesionales</Nav.Link>
                        <Nav.Link href="#privacy-policy">Modalidades de Trabajo</Nav.Link>
                        <Nav.Link href="#terms">Trabajos que Busco</Nav.Link>
                        <Nav.Link href="#location">Rango Salarial</Nav.Link>
                        <Nav.Link href="#location">Condiciones de Trabajo</Nav.Link>
                        <Nav.Link href="#location">Valores Heredados</Nav.Link>
                        <Nav.Link href="#contact">Contacto</Nav.Link>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default Header;
