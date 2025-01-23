import React, { useState, useEffect } from "react";
import DanielLogo from "../../../assets/DanielLogo.png";
import TopBar from "../TopBar";

const BigNav = () => {
  // Estado para controlar el scroll y cambiar el estilo del nav
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 p-0 ${
          scrolled ? "bg-white shadow-lg" : "bg-white"
        }`}
      >
        {/* Barra superior: se muestra solo si NO se ha hecho scroll */}
        {!scrolled && <TopBar />}

        {/* Contenido del Nav */}
        <div className="max-w-7xl mx-auto mt-2 px-4 sm:px-6 lg:px-8">
          {/* Alto del Nav */}
          <div className="flex flex-col items-center justify-center h-20">
            {/* Logo */}
            <a href="/" className="flex items-center space-x-2">
              <img
                src={DanielLogo.src}
                alt="Daniel Logo"
                className="h-12 w-auto"
              />
            </a>
            {/* Links */}
            <div className="mt-2 mb-2 flex space-x-6 text-[#360f62] text-base font-medium">
              <a
                href="/"
                className="hover:text-purple-500 transition-colors duration-300"
              >
                Inicio
              </a>
              <a
                href="/bio"
                className="hover:text-purple-500 transition-colors duration-300"
              >
                Conocé a Daniel
              </a>
              {/* <a
                href="#"
                className="hover:text-purple-500 transition-colors duration-300"
              >
                Equipo
              </a> */}
              <a
                href="/propuestas"
                className="hover:text-purple-500 transition-colors duration-300"
              >
                Propuestas
              </a>
              <a
                href="/contacto"
                className="hover:text-purple-500 transition-colors duration-300"
              >
                +Sumate
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default BigNav;

