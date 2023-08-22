import React from "react";
import { Link } from "react-router-dom";

export default function SideText( { className } ) {
  return (

      <div className={`${className}`}>
        <h3 className="text-5xl md:text-8xl text-[#A0D8F8]">Quoi De Neuf</h3>
        <p className="text-xl text-center md:text-2xl text-white">
          Vous désirez assouvir votre appétit ? Commencez
          par lire nos succulents articles !
        </p>
      </div>

  );
}