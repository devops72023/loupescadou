import React from "react";

export default function SideText({ title, slogan, para }) {
  return (
    <div className="w-full space-y-5 ">
      <h1 className="flex flex-wrap space-x-3 text-5xl font-oregano text-blue-300 ">
        <div className="h-15 w-2 bg-blue-600 " />
        <span className="text-blue-700">Notre </span>
        <p>histoire</p>
      </h1>

      <p className="text-sm md:text-lg leading-9 font text-gray-200 w-full font-poppins line-clamp-[11]">
      L'histoire du Lou Pescadou, c'est avant tout l'histoire d'une famille, la famille Riba.
      Depuis aussi longtemps que nous pouvons nous en rappeler, c'est à dire jusqu'aux années 1870, nous avons toujours été "ancrés" dans la pêche et la navigation, pardonnez le jeu de mots.
      Nos aïeux étaient déjà des amoureux de la Mer, et c'est dans notre berceau, à La Ciotat, qu'ils ont démarré leur activité de pêche.
      </p>

      <button className="flex items-center space-x-4 font-poppins">
        <i className="fa-solid fa-circle-play text-3xl text-blue-600" />
        <p className="text-gray-800 font-semibold">Comment Commander</p>
      </button>
    </div>
  );
}
