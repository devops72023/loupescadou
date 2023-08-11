import React, { useState, useEffect, useRef, useContext } from "react";
import PositionPicker from "./PositionPicker";
import CallingCard from "./CallingCard";
import VideoCall from "./VideoCall";
import WaitingCard from "./WaitingCard";
import { Manager } from 'socket.io-client'
import Chat from "./Chat";
import { AppContext } from "../../App";

const manager = new Manager(import.meta.env.VITE_SOCKET)
function Call() {
  const { setLoaded } = useContext(AppContext)
  const socket = manager.socket('/')
  const [isCalling, setIsCalling] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [ from, setFrom ] = useState('');
  const [position, setPosition] = useState({
    latitude: 48.80846517371648,
    longitude: 2.530080114268687,
  });


  async function getAdmin() {
    const req = await fetch(`${import.meta.env.VITE_API}/availableAdmin`);
    return await req.json();
  }
  
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        // Success callback
        async function (position) {
          const admin = await getAdmin();
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          setPosition((prv) => {
            return {
              latitude,
              longitude,
            };
          });
          socket.emit("position", {
            from: socket.id,
            to: admin.socket,
            position: { latitude, longitude },
          });
        },

        // Error callback
        function (error) {
          console.error("Error getting location:", error.message);
          // Handle the error or show an error message to the user
        }
      );
    }

    socket.on("call-answer", async ({ from, to, answer }) => {
      const admin = await getAdmin();
      if (answer == "accepted") {
        setIsAnswered(true);
        setIsCalling(false);
        setFrom(from);
      }else{
        window.location.reload();
      }
    });

    setLoaded(true)
console.log("Loaded")
  }, []);
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[90%] max-w-[1434px] flex justify-center items-center md:items-stretch gap-5 mx-auto py-8 px-4 flex-col md:flex-row">
        {isCalling && !isAnswered ? <WaitingCard /> : null}
        {
          !isAnswered 
          ? (
            <CallingCard {...{ isCalling, setIsCalling, socket}} />
          ) : (
            <>
              <VideoCall {...{ setIsCalling, setIsAnswered, socket, from }} />
              <Chat {...{ setIsCalling, setIsAnswered, socket, from }} />
            </>
          )
        }
        <div className="w-full flex - justify-center items-center">
          <PositionPicker
            POSITION={position}
            className="w-full aspect-[5/4] max-w-[400px] rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Call;
