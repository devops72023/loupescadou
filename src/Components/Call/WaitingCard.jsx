import React, { useRef } from 'react';
import * as LottiePlayer from "@lottiefiles/lottie-player";

function WaitingCard() {
    const playerRef = useRef();
  return (
    <div className="flex justify-center items-center w-full min-h-screen absolute top-0 z-[60] bg-dark-blue-500 bg-opacity-30 backdrop-blur-sm">
        <div className="flex flex-col justify-center items-center gap-4 max-w-fit h-fit bg-white rounded-xl px-6 py-3 pb-14">
            <lottie-player
                autoplay
                ref={playerRef}
                loop
                style={{width: "400px"}}
                mode="normal"
                src="/src/assets/animations/callLoading.json">
            </lottie-player>
            <button type="button" className="font-poppins w-fit text-white bg-red-500 px-5 py-2 h-fit cursor-pointer rounded-lg">
                <span>Disconnect</span>
            </button>
        </div>
    </div>
  )
}

export default WaitingCard