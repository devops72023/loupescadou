import { useContext, useEffect, useRef, useState } from "react";
import {
  PhoneIcon,
  ExpandIcon,
  CloseIcon,
  CameraIcon,
  MicrophoneIcon,
} from '../Global/Icons';

import "../../assets/styles/video_call.css";
import { AppContext } from "../../App";

const VideoCall = ({ setIsCalling, setIsAnswered, socket, from}) => {
  const [ isFullScreen, setIsFullScreen ] = useState(false);
  const [ isCameraOpen, setIsCameraOpen ] = useState(true);
  const [ isAudioOpen, setIsAudioOpen ] = useState(true);
  const videoHolder = useRef(); // This is for the full screen mode
  const local = useRef();
  const remote = useRef();
  const peer = useRef();
  let streamRef = useRef();

  function enterFullscreen() {
    if (videoHolder.current.requestFullscreen) {
      videoHolder.current.requestFullscreen();
      setIsFullScreen(true);
    } else if (videoHolder.current.mozRequestFullScreen) {
      // Firefox
      videoHolder.current.mozRequestFullScreen();
      setIsFullScreen(true);
    } else if (videoHolder.current.webkitRequestFullscreen) {
      // Chrome, Safari and Opera
      videoHolder.current.webkitRequestFullscreen();
      setIsFullScreen(true);
    } else if (videoHolder.current.msRequestFullscreen) {
      // IE/Edge
      videoHolder.current.msRequestFullscreen();
      setIsFullScreen(true);
    }
  }
  function exitFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
      setIsFullScreen(false);
    } else if (document.mozCancelFullScreen) {
      // Firefox
      document.mozCancelFullScreen();
      setIsFullScreen(false);
    } else if (document.webkitExitFullscreen) {
      // Chrome, Safari and Opera
      document.webkitExitFullscreen();
      setIsFullScreen(false);
    } else if (document.msExitFullscreen) {
      // IE/Edge
      document.msExitFullscreen();
      setIsFullScreen(false);
    }
  }
  async function endCall() {
    const admin = await getAdmin();
    peer.current.close();
    peer.current = null;
    streamRef.current.getTracks().forEach((track) => track.stop());
    local.current.srcObject = null;
    remote.current.srcObject = null;
    setIsCalling(false)
    setIsAnswered(false)
    socket.emit("end-call", { to: admin.socket });
    location.reload();
  }

  function stopAudio() {
    if(isAudioOpen){
        streamRef.current
            .getAudioTracks()
            .forEach((track) => (track.enabled = false));
    }else{
        streamRef.current
            .getAudioTracks()
            .forEach((track) => (track.enabled = true));
    }
    setIsAudioOpen(prv => !prv)
  }

  function stopCamera() {
        if (isCameraOpen){
            streamRef.current
                .getVideoTracks()
                .forEach((track) => (track.enabled = false));
        }else{
            streamRef.current
                .getVideoTracks()
                .forEach((track) => (track.enabled = true));
        }
        setIsCameraOpen(prv => !prv)
  }
  async function getAdmin() {
    const req = await fetch(`${import.meta.env.VITE_API}/availableAdmin`);
    return await req.json();
  }
  useEffect(() => {
    const constraints = { video: true, audio: true };
    try {
      navigator.mediaDevices.getUserMedia(constraints).then(async stream => {
        local.current.srcObject = stream
        streamRef.current = stream
        console.log(stream);
        stream.getTracks().forEach(track => {
            peer.current.addTrack(track, stream)
        })
        const admin = await getAdmin();
        peer.current
          .createOffer({
            offerToreceiveAudio: 1,
            offerToReceiveVideo: 1,
          })
          .then((sdp) => {
            peer.current.setLocalDescription(sdp);
            socket.emit("sdp", { from: socket.id, to: admin.socket, sdp });
          });
      })
    } catch (err) {
      console.log(err);
    }
    socket.on("sdp", ({ sdp }) => {
        console.log(peer.current)
      if(peer.current.signalingState == 'have-local-offer'){peer.current.setRemoteDescription(new RTCSessionDescription(sdp))
      .then(() => {
        // Do something after successfully setting the remote description
      })
      .catch((error) => {
        console.error("Error setting remote description:", error);
      });
      }
    });

    socket.on("candidate", ({ candidate }) => {
      peer.current.addIceCandidate(new RTCIceCandidate(candidate));
    });

    socket.on('end-call', ()=>{
      window.location.reload()
    })

    const _pc = new RTCPeerConnection(null);
    _pc.onicecandidate = async (e) => {
      if (e.candidate) {
        const admin = await getAdmin();
        socket.emit("candidate", {
          from: socket.id,
          to: admin.socket,
          candidate: e.candidate,
        });
      }
    };
    _pc.ontrack = (e) => {
      remote.current.srcObject = e.streams[0];
    };
    peer.current = _pc;

    return ()=>{
      location.reload();
    };
  }, []);

  return (
    <div
      ref={videoHolder}
      className={`videoContainer flex justify-center items-center relative w-full max-w-lg rounded-md shadow-md bg-colors-light overflow-hidden ${
        isFullScreen ? "fullscreen" : ""
      }`}
    >
      <video className="w-full h-full" ref={remote} autoPlay loop></video>
      <video
        className="absolute top-2 right-2 max-h-20 rounded-lg overflow-hidden shadow-xl"
        ref={local}
        autoPlay
      ></video>
      <div className="absolute flex justify-center items-center gap-2 bottom-0 w-full py-2 bg-colors-blue bg-opacity-20 backdrop-blur-lg">
        <MicrophoneIcon
          onClick={stopAudio}
          className={`w-14 h-14 p-4 cursor-pointer rounded-full ${isAudioOpen ? 'fill-colors-blue bg-colors-light bg-opacity-50' : 'fill-colors-light bg-colors-blue' } transition-all hover:bg-light`}
        />
        <CameraIcon
          onClick={stopCamera}
          className={`w-14 h-14 p-4 cursor-pointer rounded-full ${isCameraOpen ? 'fill-colors-blue bg-colors-light bg-opacity-50' : 'fill-colors-light bg-colors-blue' } transition-all hover:bg-light`}
        />
        <PhoneIcon
          onClick={endCall}
          className="w-14 h-14 p-3 bg-red-800 rounded-full cursor-pointer stroke-colors-light fill-colors-light transition-all hover:bg-colors-light hover:fill-red-800 hover:stroke-red-800"
        />
        {isFullScreen ? (
          <CloseIcon
            onClick={exitFullscreen}
            className="w-14 h-14 p-4 cursor-pointer rounded-full fill-colors-blue bg-colors-light bg-opacity-50 transition-all hover:bg-colors-light"
          />
        ) : (
          <ExpandIcon
            onClick={enterFullscreen}
            className="w-14 h-14 p-4 cursor-pointer rounded-full fill-colors-blue bg-colors-light bg-opacity-50 transition-all hover:bg-colors-light"
          />
        )}
      </div>
    </div>
  );
};

export default VideoCall;
