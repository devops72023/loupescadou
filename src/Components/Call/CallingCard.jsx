import React from "react";
import { motion } from "framer-motion";
import CountUp from 'react-countup';

function CallingCard(props) {
  const { isCalling, setIsCalling, socket, } = props;
  async function getAdmin() {
    const req = await fetch(`${import.meta.env.VITE_API}/availableAdmin`);
    return await req.json();
  }
  const call = async () => {
    if (isCalling) return;
    setIsCalling(true);
    const admin = await getAdmin(); 
    socket.emit("call", { from: socket.id, to: admin.socket });
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas impedit
        minima voluptatem consectetur, velit libero sed ea itaque cumque
        adipisci minus soluta illum voluptas fugiat accusamus. Illum autem sequi
        voluptatibus.
      </p>
      <motion.button onClick={call} className="mt-5 md:mt-0 space-x-2 gap-3 w-fit animate-bounce text-white bg-red-500 duration-300 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2 ">
        <i className="fas fa-phone-volume"></i>
        Call Now
      </motion.button>
      <div className="flex items-center space-x-10">
        <div className="flex flex-col items-start space-y-2 font-poppins">
          <span>Up to</span>
          <strong className="text-5xl">
            <CountUp end={120} duration={3} />
          </strong>
          <span>Call per Day</span>
        </div>
        <div className="flex flex-col items-start space-y-2">
          <span>Up to</span>
          <strong className="text-5xl">
            <CountUp end={98} duration={3} />
          </strong>
          <span>Sales per Day</span>
        </div>
      </div>
    </div>
  );
}

export default CallingCard;
