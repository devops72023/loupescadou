import React, { useState } from "react";
import SideText from "./sideText";

function NotreHistoire() {
  const [openText, setOpenText] = useState(false);
  const [openText2, setOpenText2] = useState(false);
  const [isImageOpened, setIsOpenedImage] = useState(false);
  const [openedImage, setOpenedImage] = useState("");
  let ServicesItems = [
    {
      title: "Livraison Rapide",
      slug: "promesse de livraison sous 30 min",
      icon: "fa-solid fa-person-biking",
    },
    {
      title: "Détecter",
      slug: "livraison par ramassage à votre porte",
      icon: "fa-sharp fa-solid fa-bag-shopping",
    },
    {
      title: "Manger sur place",
      slug: "dégustez vos plats frais et chauds",
      icon: "fa-solid fa-utensils",
    },
  ];
  const openImage = (src) => {
    setOpenedImage(src);
    setIsOpenedImage(true);
  };
  const closeImage = () => {
    setOpenedImage("");
    setIsOpenedImage(false);
  };
  return (
    <div className="w-full flex justify-center items-center relative">
      {isImageOpened ? (
        <div
          onClick={closeImage}
          className="w-full min-h-screen overflow-auto top-0 bg-black bg-opacity-10 backdrop-blur-lg left-0 flex justify-center items-center fixed  px-[20px] py-10 z-30"
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="flex flex-col gap-5 glass max-w-[500px] w-full h-fit p-5 rounded-xl overflow-hidden"
          >
            <h1 className="text-white font-dancing text-center w-full text-3xl flex justify-between">
              Lou-Pescadou <i onClick={()=>{setIsOpenedImage(false)}} className="fas fa-close text-white text-lg cursor-pointer hover:text-2xl transition-300 w-[40px] h-[40px] rounded-full flex justify-center items-center"></i>
            </h1>
            <img src={openedImage} className="rounded-lg" />
          </div>
        </div>
      ) : (
        ""
      )}

      <div className="flex flex-col gap-5 max-w-[1434px] w-[90%]">
        <div className="@container/histoire flex w-full h-fit gap-2">
          <div className="justify-evenly w-full md:px-8 flex flex-col gap-3 @[980px]/histoire:flex-row items-center">
            <SideText />
            <div className="max-w-[400px] w-full hover:animate-spin relative bg-blue-100 rounded-full p-4 bg-opacity-10">
              <img
                src="../../../src/assets/notre-histoire/Ellipse 11.png"
                className=" max-w-[408px] w-full"
                alt=""
              />
              <div />
            </div>

            <ul className="font-poppins w-full gap-3 @[980px]/histoire:flex @[980px]/histoire:flex-col grid grid-cols-1 @[410px]/histoire:grid-cols-2 @[720px]/histoire:grid-cols-3">
              {ServicesItems.map((item) => (
                <li
                  key={item.title}
                  className="flex flex-col justify-center items-center text-center @[980px]/histoire:text-left @[980px]/histoire:flex-row gap-3 w-full"
                >
                  <i
                    className={`${item.icon} min-w-[70px] min-h-[70px] flex justify-center items-center text-center text-3xl bg-blue-500 rounded-full text-blue-200`}
                  />
                  <div className=" w-full flex flex-col items-center @[980px]/histoire:items-start gap-2">
                    <h4 className="font-semibold text-lg text-gray-900 w-full ">
                      {item.title}
                    </h4>
                    <p className="text-gray-300 text-sm w-full">{item.slug}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex gap-4 flex-col-reverse md:flex-row">
          <div class="grid grid-cols-2 gap-4 h-fit">
            <div class="grid gap-4">
              <div className="max-w-[350px] overflow-hidden">
                <img
                  onClick={() => {
                    openImage(
                      `${import.meta.env.VITE_ASSETS}/Histoire/DSC00501.JPG`
                    );
                  }}
                  class="h-auto transition-300 hover:scale-[1.05] cursor-pointer rounded-lg"
                  src={`${import.meta.env.VITE_ASSETS}/Histoire/DSC00501.JPG`}
                  alt=""
                />
              </div>
              <div className="max-w-[350px] overflow-hidden">
                <img
                  onClick={() => {
                    openImage(
                      `${import.meta.env.VITE_ASSETS}/Histoire/DSC00502.JPG`
                    );
                  }}
                  class="h-auto transition-300 hover:scale-[1.05] cursor-pointer rounded-lg"
                  src={`${import.meta.env.VITE_ASSETS}/Histoire/DSC00502.JPG`}
                  alt=""
                />
              </div>
              <div className="max-w-[350px] overflow-hidden">
                <img
                  onClick={() => {
                    openImage(
                      `${import.meta.env.VITE_ASSETS}/Histoire/DSC00523.JPG`
                    );
                  }}
                  class="h-auto transition-300 hover:scale-[1.05] cursor-pointer rounded-lg"
                  src={`${import.meta.env.VITE_ASSETS}/Histoire/DSC00523.JPG`}
                  alt=""
                />
              </div>
              <div className="max-w-[350px] overflow-hidden">
                <img
                  onClick={() => {
                    openImage(
                      `${import.meta.env.VITE_ASSETS}/Histoire/IMG_8174.JPG`
                    );
                  }}
                  class="h-auto transition-300 hover:scale-[1.05] cursor-pointer rounded-lg"
                  src={`${import.meta.env.VITE_ASSETS}/Histoire/IMG_8174.JPG`}
                  alt=""
                />
              </div>
            </div>
            <div class="grid gap-4">
              <div className="max-w-[350px] overflow-hidden">
                <img
                  onClick={() => {
                    openImage(
                      `${import.meta.env.VITE_ASSETS}/Histoire/DSC00524.JPG`
                    );
                  }}
                  class="h-auto transition-300 hover:scale-[1.05] cursor-pointer rounded-lg"
                  src={`${import.meta.env.VITE_ASSETS}/Histoire/DSC00524.JPG`}
                  alt=""
                />
              </div>
              <div className="max-w-[350px] overflow-hidden">
                <img
                  onClick={() => {
                    openImage(
                      `${import.meta.env.VITE_ASSETS}/Histoire/DSC00526.JPG`
                    );
                  }}
                  class="h-auto transition-300 hover:scale-[1.05] cursor-pointer rounded-lg"
                  src={`${import.meta.env.VITE_ASSETS}/Histoire/DSC00526.JPG`}
                  alt=""
                />
              </div>
              <div className="max-w-[350px] overflow-hidden">
                <img
                  onClick={() => {
                    openImage(
                      `${import.meta.env.VITE_ASSETS}/Histoire/DSC00527.JPG`
                    );
                  }}
                  class="h-auto transition-300 hover:scale-[1.05] cursor-pointer rounded-lg"
                  src={`${import.meta.env.VITE_ASSETS}/Histoire/DSC00527.JPG`}
                  alt=""
                />
              </div>
              <div className="max-w-[350px] overflow-hidden">
                <img
                  onClick={() => {
                    openImage(
                      `${import.meta.env.VITE_ASSETS}/Histoire/IMG_8004.JPG`
                    );
                  }}
                  class="h-auto transition-300 hover:scale-[1.05] cursor-pointer rounded-lg"
                  src={`${import.meta.env.VITE_ASSETS}/Histoire/IMG_8004.JPG`}
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="glass flex flex-col gap-4 w-full h-fit rounded-lg text-white px-5 py-3">
            <h1 className="text-5xl font-dancing">
              Lou Pescadou, une histoire de générations
            </h1>
            <p
              className={`${openText ? "line-clamp-[100]" : "line-clamp-[15]"}`}
            >
              L'histoire du Lou Pescadou, c'est avant tout l'histoire d'une
              famille, la famille Riba.Depuis aussi longtemps que nous pouvons
              nous en rappeler, c'est à dire jusqu'aux années 1870, nous avons
              toujours été "ancrés" dans la pêche et la navigation, pardonnez le
              jeu de mots.Nos aïeux étaient déjà des amoureux de la Mer, et
              c'est dans notre berceau, à La Ciotat, qu'ils ont démarré leur
              activité de pêche. André Riba, celui que beaucoup appelaient
              "Dédé", était le grand père de Pierre-Marc Riba. À 18 ans déjà, il
              menait des chalutiers, et c'est en 1952 qu'il démarre son activité
              de pêche conjointement avec son beau-père, Michel Passera, et leur
              barque, le Michel-Pierre.Vendant d'abord leur pêche quotidienne
              sur les quais du port de La Ciotat, ils décident en 1958 d'ouvrir
              leur point de vente sobrement intitulé "Chez Dédé".Rapidement, ils
              achètent plusieurs barques successives, puis font construire en
              1966 le Pierre-Michel, leur premier chalutier de 16 mètres.C'est
              enfin en 1967 que notre cher Lou Pescadou voit le jour dans la
              célèbre rue des Poilus, à La Ciotat. Pierre Riba suit les traces
              de son père André, et démarre très tôt la pêche à l'âge de 8 ans.
              A 14 ans, il est déjà en train de mener le Pierre-Michel, et ce ne
              sont pas les périodes de mauvais temps en mer qui l'effraient.Avec
              son père, il fait construire en 1975 le Méditerranée, puis en
              1977, le Marie-Michel, premier chalutier en fibre de verre et
              résine de 25 mètres, et en 1981, le Pierre-Marc, un chalutier de
              21 mètres en l'honneur de son fils.Enfin, en 1998, Pierre Riba
              fait construire le Marie-Pierre-André, notre chalutier actuel de
              18,5 mètres, spécialement étudié pour la pêche au large de La
              Ciotat.Ses caractéristiques nous permettent une pêche sélective,
              avec des "coups de chalut très courts", comme l'explique si bien
              Pierre, dans des fonds riches d’épaves.
            </p>
            <div
              onClick={() => {
                setOpenText((prv) => !prv);
              }}
              className="text-dark-blue-500 cursor-pointer -mt-4"
            >
              Lire {openText ? "moins" : "plus"}
            </div>
          </div>
        </div>

        <div className="glass flex flex-col gap-4 w-full h-fit rounded-lg text-white px-5 py-3">
          <h1 className="text-5xl font-dancing">Une évolution continuelle</h1>
          <p
            className={`${openText2 ? "line-clamp-[100]" : "line-clamp-[15]"}`}
          >
            En 2009 et 2013, Pierre-Marc et son père ouvrirent deux nouveaux
            points de vente, afin d'étendre leur activité.La Maison de la Mer,
            première créée, s'établit à Saint-Cyr-sur-Mer, ville voisine de La
            Ciotat, tandis qu'un second Lou Pescadou est ouvert à La Ciotat,
            dans une halle marchande où sont rassemblés plusieurs commerçants
            connus dans la ville. Dans ces trois poissonneries, nous proposons
            les produits de notre pêche quotidienne, que ce soient des lottes,
            des bars, des grondins, ou alors, comme nous les appelons ici, des
            baudroies, des loups et des galinettes. Des daurades royales aux
            rougets, beaucoup de merveilles de la Mer, au goût exceptionnel,
            sont présentes sur notre étal. Pierre-Marc Riba, ayant aussi suivi
            une formation de cuisinier, a rapidement cherché à développer des
            plats autour des produits de la Mer. Encornets farcis, cannelés au
            crabe, thon à la catalane, beaucoup de plats typiques sont élaborés
            ou revisités par le Lou Pescadou.La plus célèbre de ces spécialités
            reste la paella aux fruits de mer, dont la belle odeur aux accents
            safranés parcourt la rue des Poilus, et enchante les touristes
            estivants.Pierre-Marc a aussi développé une recette de soupe de
            poissons, qu'il fabrique aujourd'hui dans son laboratoire de La
            Maison de la Mer, et grâce à la pêche quotidienne de son père. Un
            produit 100% maison, en somme. Aujourd'hui, il cherche à
            correspondre aux nouvelles habitudes de la clientèle et aux nouveaux
            modes de consommation, et il peut pour cela compter sur son fils
            Anthony, qui a suivi des études de commerce et qui a ce que les
            jeunes aiment appeler...le regard jeune.Anthony a ainsi développé
            les ventes promotionnelles par messages et la présence sur Internet,
            et assiste son père pour améliorer la communication de la société à
            travers la ville, la région et plus encore.Ensemble, Pierre-Marc et
            Anthony développent l'activité d'avitaillement de yachts, que le Lou
            Pescadou a démarré il y a une dizaine d'années.Ainsi, l'évolution du
            Lou Pescadou, c'est avant tout une histoire de générations.
          </p>
          <div
            onClick={() => {
              setOpenText2((prv) => !prv);
            }}
            className="text-dark-blue-500 cursor-pointer -mt-4"
          >
            Lire {openText2 ? "moins" : "plus"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotreHistoire;
