import React, { useState, useEffect } from 'react'
import PositionPicker from './PositionPicker';
import CallingCard from './CallingCard';

function Call() {
    const [ socket, setSocket ] = useState({emit: ()=>{}});
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
  }, []);
  return (
    <div className='w-full flex justify-center items-center'>
        <div className="w-[85%] max-w-[1434px] flex gap-5 mx-auto py-8 px-4 flex-col md:flex-row">
            <CallingCard />
            <div className="w-full flex - justify-center items-center">
                <PositionPicker 
                    POSITION={position } 
                    className="w-full aspect-[5/4] max-w-[400px] rounded-lg"/>
            </div>
        </div>
    </div>
  )
}

export default Call