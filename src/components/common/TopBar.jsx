import React from "react";
import { FaWhatsapp, FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // Importar ícono de X (Twitter)

const TopBar = () => {
  return (
    <div className="bg-[#253f5f] w-full flex top-0 justify-center items-center py-2">
      <span className="text-[white] font-semibold mr-4">Seguinos en:</span>
      <div className="flex space-x-4">
        <a
          href="https://wa.me/+59899342505"
          className="text-[white] hover:scale-110 transition-transform"
          aria-label="WhatsApp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp size={20} />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61573161549182"
          className="text-[white] hover:scale-110 transition-transform"
          aria-label="Facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF size={20} />
        </a>
        <a
          href="https://www.youtube.com/@DanielX-2025"
          className="text-[white] hover:scale-110 transition-transform"
          aria-label="YouTube"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube size={20} />
        </a>
        <a
          href="https://www.instagram.com/daniel.ximenez.intendente/"
          className="text-[white] hover:scale-110 transition-transform"
          aria-label="Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="https://x.com/DanielXimenez25"
          className="text-[white] hover:scale-110 transition-transform"
          aria-label="X (Twitter)"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter size={20} />
        </a>
      </div>
    </div>
  );
};

export default TopBar;
