import { useRef, useEffect } from "react";

function Loading() {
  const ref = useRef(null);
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  }, []);
  return (
      <div className="w-screen h-screen fixed top-0 z-50 flex justify-center bg-[#fff9] backdrop-blur-3xl items-center">
        <lottie-player
          autoplay
          ref={ref}
          loop
          style={{width: "400px"}}
          mode="normal"
          src="/src/assets/animations/nGGJsdeP4J.json"
        ></lottie-player>
      </div>
  );
}

export default Loading;
