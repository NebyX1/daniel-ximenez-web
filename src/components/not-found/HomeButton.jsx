import React from "react";
import { FaHome } from "react-icons/fa"; // Importa el ícono de inicio desde react-icons

const HomeButton = () => {
  return (
    <a
      href="/"
      className="flex items-center justify-center bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition"
    >
      <FaHome className="mr-2" size={24} /> {/* Ícono de Inicio */}
      Ir al Inicio
    </a>
  );
};

export default HomeButton;