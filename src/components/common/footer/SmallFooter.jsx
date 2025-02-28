import React from 'react'
import { FaWhatsapp, FaFacebookF, FaYoutube, FaInstagram, FaHeart } from 'react-icons/fa'

const SmallFooter = () => {
  return (
    <footer className="bg-[#253f5f] text-white text-xs py-4 px-6 flex flex-col items-center space-y-2">
      {/* Redes Sociales */}
      <div className="flex space-x-4">
        <a
          href="https://wa.me/+59899342505"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-400 transition-colors duration-300"
        >
          <FaWhatsapp size={20} />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61573161549182"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition-colors duration-300"
        >
          <FaFacebookF size={20} />
        </a>
        <a
          href="https://www.youtube.com/@DanielX-2025"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-500 transition-colors duration-300"
        >
          <FaYoutube size={20} />
        </a>
        <a
          href="https://www.instagram.com/daniel.ximenez.intendente/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition-colors duration-300"
        >
          <FaInstagram size={20} />
        </a>
      </div>
      
      {/* Texto de Créditos */}
      <div className="text-center">
        Hecho en Lavalleja con{" "}
        <FaHeart className="inline text-red-500" />
        {" "}por el Equipo de Daniel &copy; {new Date().getFullYear()}
      </div>
    </footer>
  )
}

export default SmallFooter
