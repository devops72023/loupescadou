import React from "react";

export default function SideText({ title, slogan, para }) {
  return (
    <div className="w-full space-y-5 ">
      <h1 className="flex flex flex-wrap space-x-3 text-5xl font-oregano text-blue-300 ">
        <div className="h-15 w-2 bg-blue-600 " />
        <span className="text-blue-700">Notre </span>
        <p>histoire</p>
      </h1>

      <p className="text-sm md:text-lg leading-9 font text-gray-200 w-full font-poppins line-clamp-[11]">
        Plongez dans notre sélection de poissons frais en ligne ! Lou Pescadou
        vous propose une sélection exceptionnelle de poissons frais et de fruits
        de mer de qualité supérieure, livrés directement chez vous. Notre
        processus de commande en ligne est simple et rapide. Vous pouvez
        facilement parcourir notre sélection de produits frais, ajouter des
        articles à votre panier, et passer votre commande en quelques clics
        seulement. Nous offrons également une livraison rapide et fiable pour
        assurer la fraîcheur de nos produits.
      </p>

      <button className="flex items-center space-x-4 font-poppins">
        <i className="fa-solid fa-circle-play text-3xl text-blue-600" />
        <p className="text-gray-800 font-semibold">Comment Commander</p>
      </button>
    </div>
  );
}
