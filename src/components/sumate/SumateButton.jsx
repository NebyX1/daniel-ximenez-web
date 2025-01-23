import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const SumateButton = () => {
  // Reemplaza el número de teléfono y el mensaje según tus necesidades
  const whatsappLink = "https://wa.me/1234567890?text=Hola,%20quiero%20sumarme%20a%20la%20campaña!";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition"
    >
      <FaWhatsapp className="mr-2" size={24} /> {/* Ícono de WhatsApp */}
      +Sumate YA!
    </a>
  );
};

export default SumateButton;
