import React from "react";

export default function SideText( { display , title , slogan , para } ) {
  return (

      <div className={`${display} flex-col items-center w-full md:w-2/4 space-y-5 md:space-y-7 font-dancing`}>
        <h3 className="text-5xl md:text-8xl text-[#A0D8F8]">Quoi De Neuf</h3>
        <h5 className="text-3xl md:text-4xl text-white">étrancher la faim</h5>

        <p className="text-xl text-center md:text-2xl text-white">
            Lou Pescadeau milite pour un 
            de croissance socialement responsable et respectueux 
            de l&apos;environnement.
        </p>
        <button className="bg-white py-2 px-3 rounded text-lg hover:bg-gray-200  cursor-pointer" onClick={() => router.push('/call')}>Vente en ligne</button>
      </div>

  );
}