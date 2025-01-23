import React from "react";
import {
  FaWhatsapp,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaHeart,
} from "react-icons/fa";

const BigFooter = () => {
  return (
    <footer className="bg-[#360f62] text-white px-8 py-10">
      {/* Contenedor principal con ancho máximo y columnas */}
      <div className="max-w-6xl mx-auto grid grid-cols-3 gap-8">
        {/* Columna 1: Información */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-bold">¿Por qué Daniel Ximénez?</h2>
          <p className="text-sm leading-relaxed">
            Daniel Ximénez representa la mejor opción para el progreso y
            desarrollo de Lavalleja. Su compromiso con la transparencia, la
            innovación y la honestidad, junto a una Plataforma de Gobierno sólido y
            propuestas concretas, garantiza el futuro que nuestra comunidad
            merece. Con un enfoque participativo y un equipo dedicado, Daniel
            trabaja día a día para que cada vecino sea parte activa de la
            transformación de Lavalleja.
          </p>
        </div>
        {/* Columna 2: Enlaces útiles (ejemplo) */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-bold">Enlaces</h2>
          <ul className="text-sm space-y-2">
            <li>
              <a href="/propuestas" className="hover:underline">
                Plataforma de Gobierno
              </a>
            </li>
            <li>
              <a href="/sumate" className="hover:underline">
                +Sumate al Equipo
              </a>
            </li>
            <li>
              <a href="https://giana-ai.streamlit.app/" target="_blank" className="hover:underline">
                Chatea con GIANA
              </a>
            </li>
            <li>
              <a href="https://street-sheriff.netlify.app/" target="_blank" className="hover:underline">
                Street Sheriff
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
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition-colors duration-300"
            >
              <FaWhatsapp size={22} />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors duration-300"
            >
              <FaFacebookF size={22} />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition-colors duration-300"
            >
              <FaYoutube size={22} />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition-colors duration-300"
            >
              <FaInstagram size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Línea divisoria y mensaje inferior */}
      <div className="max-w-6xl mx-auto mt-6 border-t border-gray-600 pt-4 flex flex-col lg:flex-row items-center justify-between space-y-2 lg:space-y-0">
        {/* Mensaje de derechos y autoría */}
        <div className="text-sm">
          Hecho en Lavalleja con <FaHeart className="inline text-red-500" /> por
          el Equipo de Daniel &copy; {new Date().getFullYear()}
        </div>

        {/* Ejemplo: puedes colocar aquí alguna frase o sublinks */}
        <div className="text-sm text-gray-300">"Vamos por nuestros sueños"</div>
      </div>
    </footer>
  );
};

export default BigFooter;
