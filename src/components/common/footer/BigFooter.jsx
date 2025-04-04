import React from "react";
import {
  FaWhatsapp,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaHeart,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // Importar ícono de X (Twitter)
import styles from "../../../styles/bigfooter.module.css";
import InstagramFeed from "./InstagramFeed";

const BigFooter = () => {
  return (
    <footer className="bg-[#253f5f] text-white px-8 py-10">
      {/* Contenedor principal con ancho máximo y columnas */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Columna 1: Información */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-bold">Últimas novedades</h2>
          <InstagramFeed />
        </div>

        {/* Columna 2: Enlaces útiles */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-bold">Enlaces</h2>
          <ul className="text-sm space-y-2">
            <li>
              <a href="/propuestas" className="hover:underline">
                Plataforma de Gobierno
              </a>
            </li>
            <li>
              <a href="/contacto" className="hover:underline">
                +Sumate al Equipo
              </a>
            </li>
          </ul>
        </div>

        {/* Columna 3: Síguenos en redes sociales */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-bold">Síguenos</h2>
          <p className="text-sm">
            Mantente al día con nuestras novedades en redes sociales.
          </p>
          <div className="flex space-x-4 mt-2">
            <a
              href="https://wa.me/+59899342505"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition-colors duration-300"
            >
              <FaWhatsapp size={22} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61573161549182"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors duration-300"
            >
              <FaFacebookF size={22} />
            </a>
            <a
              href="https://www.youtube.com/@DanielX-2025"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition-colors duration-300"
            >
              <FaYoutube size={22} />
            </a>
            <a
              href="https://www.instagram.com/daniel.ximenez.intendente/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition-colors duration-300"
            >
              <FaInstagram size={22} />
            </a>
            <a
              href="https://x.com/DanielXimenez25"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors duration-300"
            >
              <FaXTwitter size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Línea divisoria y mensaje inferior */}
      <div className="max-w-6xl mx-auto mt-6 border-t border-gray-600 pt-4 flex flex-col lg:flex-row items-center justify-between space-y-2 lg:space-y-0">
        <div className="text-sm">
          Hecho en Lavalleja con <FaHeart className="inline text-red-500" /> por
          el Equipo de Daniel &copy; {new Date().getFullYear()}
        </div>
        <div className="text-sm text-gray-300">
          "Con Daniel Lavalleja <span className={`text-xl ${styles.logoFont}`}>Si!</span>"
        </div>
      </div>
    </footer>
  );
};

export default BigFooter;
