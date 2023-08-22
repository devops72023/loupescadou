import { useContext, useEffect, useRef } from "react";
import { useState } from "react";
import { AppContext } from "../../App";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import SpinningToast from "../Global/SpinningToast";

const Register = () => {
  const { loaded, setLoaded, setIsAuth, currentUser, activeTab, setActiveTab } = useContext(AppContext);
  const [ name, setName ] = useState('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [ errors, setErrors ] = useState({})
  const passwordRef = useRef();
  const navigate = useNavigate();

  const handleTabs = (txt) => {
    setActiveTab(txt);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({})

    fetch(`${import.meta.env.VITE_API}/auth/register-user`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        password
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if ( res.type != 'error' && res.type != 'success' ) {
            setErrors(prv => {
                return {...prv, [res.type]: res.message};
            })
            return;
        }
        let toastId = toast.dark(<SpinningToast />, {
            autoClose: false,
            hideProgressBar: true,
            theme: "light",
          });
        if (res.type == 'error') {
          toast.update(toastId, {
            render: res.message,
            type: "error",
            theme: "light",
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000, // Close the alert after 3 seconds
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          return;
        }
        if (res.type == 'success') {
          toast.update(toastId, {
            render: res.message,
            type: "success",
            theme: "light",
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000, // Close the alert after 3 seconds
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          navigate('/login');
          return;
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="flex flex-col w-full min-h-fit py-5 pb-10 justify-start items-center gap-3">
      <div className="glass flex w-full max-w-[450px] rounded-2xl text-center">
        <Link
          onClick={() => handleTabs("Connexion")}
          to="/login"
          className={` ${activeTab == "Connexion" && "bg-white text-dark-blue-500 shadow-2xl"} w-full transition-300 h-fit px-8 py-3  rounded-xl rounded-r-none hover:bg-white hover:text-dark-blue-500 hover:shadow-3xl `}
        >
          <h4 className="font-dancing">
            Connexion
          </h4>
        </Link>
        <Link
          onClick={() => handleTabs("Sinscrire")}
          to="/register"
          className={` ${activeTab == "Sinscrire" && "bg-white text-dark-blue-500 shadow-2xl"} w-full transition-300 h-fit px-8 py-3  rounded-xl rounded-l-none hover:bg-white hover:text-dark-blue-500 hover:shadow-3xl `}
        >
          <h4 className="font-dancing">
            Sinscrire
          </h4>
        </Link>
      </div>
      <div className="glass flex flex-col gap-6 w-full max-w-[450px] px-8 py-6 rounded-2xl text-center">
        <h2 className="font-bold text-white text-xl w-full">Créez Votre Compte</h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-1">
                <input
                type="text"
                placeholder="Nom complet"
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="w-full px-4 py-2 outline-none border-non rounded-md text-white placeholder:text-white glass"
                />
                { errors.name &&  <div className="text-amber-950 text-sm w-full text-left">{errors.name}</div>}
                
            </div>
          <div className="flex flex-col gap-1">
            <input
              type="email"
              placeholder="Email@example.com"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="w-full px-4 py-2 outline-none border-non rounded-md text-white placeholder:text-white glass"
            />
            { errors.email &&  <div className="text-amber-950 text-sm w-full text-left">{errors.email}</div>}
            
          </div>
          <div className="flex gap-3 px-4 py-2 outline-none border-none rounded-md text-white glass">
            <input
              type={showPassword ? "text" : "password"}
              ref={passwordRef}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="********"
              className="w-full outline-none border-none bg-transparent placeholder:text-white"
            />
            <i
              onClick={() => {
                setShowPassword((prv) => !prv);
              }}
              className={`fas fa-${
                showPassword ? "eye-slash" : "eye"
              } cursor-pointer text-xl flex justify-center items-center`}
            ></i>
          </div>
          { errors.password &&  <div className="text-amber-950 text-sm w-full text-left ml-1 -mt-2">{errors.password}</div> }
          <button className="w-full px-4 py-2 bg-white text-dark-blue-500 cursor-pointer font-bold glass rounded-md">
            S'inscrire
          </button>
        </form>
      </div>
    </div>
  );
};
export default Register;
