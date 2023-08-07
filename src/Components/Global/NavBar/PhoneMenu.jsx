import React, { useContext } from "react";
import homeIcon from "../../../assets/Icons/navbar/home.png";
import phoneIcon from "../../../assets/Icons/navbar/call.png";
import profileIcon from "../../../assets/Icons/navbar/profile.png";
import searchIcon from "../../../assets/Icons/navbar/search.png";
import basketIcon from "../../../assets/Icons/navbar/basket_menu.png";
import { Link } from "react-router-dom";
import { AppContext } from "../../../App";

function PhoneMenu() {
  const { isBasketOpen, setIsBasketOpen, activeTab, setActiveTab } =
    useContext(AppContext);
  return (
    <div className="fixed w-full bottom-0 sm:bottom-[12px] z-40 h-[70px] flex justify-center items-center">
      <div className="max-w-[600px] w-full flex gap-4 justify-center items-center sm:rounded-2xl bg-black bg-opacity-30 backdrop-blur-xl h-full z-[100] left-[5%]">
        <Link
          to="/"
          onClick={() => {setActiveTab('Accueil')}}
          className="w-[50px] h-[50px] flex justify-center items-center"
        >
          <img
            src={homeIcon}
            className={`${
              activeTab == "Accueil" ? "" : "opacity-50"
            } max-w-[45px]`}
          />
        </Link>
        <button
            onClick={() => {setActiveTab('search')}} 
            className="w-[50px] h-[50px] flex justify-center items-center">
          <img src={searchIcon} className={`${activeTab == 'search' ? '' : 'opacity-50'} max-w-[45px]`} />
        </button>
        <button
          className="w-[50px] h-[50px] flex justify-center items-center"
          onClick={() => {
            setIsBasketOpen(true);
          }}
        >
          <img src={basketIcon} className={`opacity-50 max-w-[45px]`} />
        </button>
        <Link
          onClick={() => {setActiveTab('Vente en ligne')}}
          className="w-[50px] h-[50px] flex justify-center items-center"
          to="/call"
        >
          <img
            src={phoneIcon}
            className={`${
              activeTab == "Vente en ligne" ? "" : "opacity-50"
            } max-w-[45px]`}
          />
        </Link>
        <Link
          onClick={() => {setActiveTab('profile')}}
          className="w-[50px] h-[50px] flex justify-center items-center"
          to="/user-profile"
        >
          <img
            src={profileIcon}
            className={`${
              activeTab == "profile" ? "" : "opacity-50"
            } max-w-[45px]`}
          />
        </Link>
      </div>
    </div>
  );
}

export default PhoneMenu;
