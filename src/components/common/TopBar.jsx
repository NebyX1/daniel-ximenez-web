import React from "react";
import { FaWhatsapp, FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="bg-[#ffde59] w-full flex top-0 justify-center items-center py-2">
      <span className="text-[#360f62] font-semibold mr-4">Seguinos en:</span>
      <div className="flex space-x-4">
        <a
          href="https://wa.me/+573108275815"
          className="text-[#360f62] hover:scale-110 transition-transform"
          aria-label="WhatsApp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp size={20} />
        </a>
        <a
          href="https://www.facebook.com/danielximenez"
          className="text-[#360f62] hover:scale-110 transition-transform"
          aria-label="Facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF size={20} />
        </a>
        <a
          href="https://www.youtube.com/@danielximenez"
          className="text-[#360f62] hover:scale-110 transition-transform"
          aria-label="YouTube"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube size={20} />
        </a>
        <a
          href="https://www.instagram.com/danielximenez"
          className="text-[#360f62] hover:scale-110 transition-transform"
          aria-label="Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={20} />
        </a>
      </div>
    </div>
  );
};

export default TopBar;
