import React, { useContext } from "react";
import { motion } from "framer-motion";
import CountUp from 'react-countup';
import { AppContext } from "../../App";

function CallingCard(props) {
  const { isAuth, currentUser } = useContext(AppContext)
  const { isCalling, setIsCalling, socket, } = props;
  async function getAdmin() {
    const req = await fetch(`${import.meta.env.VITE_API}/availableAdmin`);
    return await req.json();
  }
  const call = async () => {
    if (isCalling) return;
    const admin = await getAdmin();
    if (!admin.available) return;
    setIsCalling(true);
    console.log(isAuth)
    socket.emit("call", { from: socket.id, to: admin.socket, user_id: isAuth ? currentUser._id : 'anonymous' });
    const constraints = { video: true, audio: true };
    try {
      navigator.mediaDevices.getUserMedia(constraints)
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="w-full flex flex-col gap-4 text-white font-poppins">
      <h2 className="text-3xl">Vente En ligne</h2>
      <p>
          Chez Lou Pescadou, il y en a pour tous les goûts,
        et pour tout le monde. Alors que vous soyez notre
        voisin ou habitiez à l’autre bout de la France,
        n’hésitez pas à essayer notre service de livraison !
      </p>
      <motion.button onClick={call} className="mt-5 md:mt-0 space-x-2 gap-3 w-fit animate-bounce text-white bg-red-500 duration-300 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2 ">
        <i className="fas fa-phone-volume"></i>
        Appeler
      </motion.button>
      <div className="flex items-center space-x-10">
        <div className="flex flex-col items-start space-y-2 font-poppins">
          <span>En moyenne</span>
          <strong className="text-5xl">
            <CountUp end={30} duration={3} />
          </strong>
          <span>appels par jours</span>
        </div>
        <div className="flex flex-col items-start space-y-2">
          <span>En moyenne</span>
          <strong className="text-5xl">
            <CountUp end={25} duration={3} />
          </strong>
          <span>ventes par jours</span>
        </div>
      </div>
    </div>
  );
}

export default CallingCard;
