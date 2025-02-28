import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import styles from "../../../styles/smallnav.module.css";

const SmallNav = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className="bg-white text-[#253f5f] fixed w-full top-0 left-0 z-50">
      {/* Contenedor principal */}
      <div className="max-w-md mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo (texto o imagen, personalízalo a tu gusto) */}
        <div className="text-xl font-bold tracking-wide">
          <a className={styles.logoFont} href="/">Si!</a>
        </div>

        {/* Botón Hamburguesa */}
        <button
          className="text-[#253f5f] focus:outline-none"
          onClick={toggleMenu}
          aria-label="Menu Button"
        >
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Menú Desplegable */}
      <div
        className={`
          bg-white flex flex-col items-center transition-all duration-300
          ${menuOpen ? 'max-h-60 pb-4' : 'max-h-0 overflow-hidden'}
        `}
      >
        <a
          href="/"
          className="mt-2 text-sm hover:underline transition-colors"
          onClick={toggleMenu}
        >
          Inicio
        </a>
        <a
          href="/bio"
          className="mt-2 text-sm hover:underline transition-colors"
          onClick={toggleMenu}
        >
          Conocé a Daniel
        </a>
        {/* <a
          href="#"
          className="mt-2 text-sm hover:underline transition-colors"
          onClick={toggleMenu}
        >
          Equipo
        </a> */}
        <a
          href="/propuestas"
          className="mt-2 text-sm hover:underline transition-colors"
          onClick={toggleMenu}
        >
          Propuestas
        </a>
        <a
          href="/contacto"
          className="mt-2 text-sm hover:underline transition-colors"
          onClick={toggleMenu}
        >
          +Sumate
        </a>
      </div>
    </nav>
  )
}

export default SmallNav
