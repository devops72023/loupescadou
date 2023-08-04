import { useContext, useEffect, useRef } from "react";
import { useState } from "react";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import SpinningToast from "../Global/SpinningToast";

const Login = () => {
  const { loaded, setLoaded, setIsAuth } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [ errors, setErrors ] = useState({email: undefined, password: undefined,})
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({})

    let toastId = toast.dark(<SpinningToast />, {
      autoClose: false,
      hideProgressBar: true,
      theme: "light",
    });
    fetch(`${import.meta.env.VITE_API}/auth/signin-user`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (res.type) {
            if ( res.type == 'email' || res.type == 'password') {
                setErrors(prv => {
                    return {...prv, [res.type]: res.message};
                })
            }
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
        }
        if (res.accessToken != undefined) {
          localStorage.setItem("jwt", res.accessToken);
          setIsAuth(true);
          toast.update(toastId, {
            render: "Bienvenue de nouveau !",
            type: "success",
            theme: "light",
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000, // Close the alert after 3 seconds
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="flex min-h-screen justify-center items-start">
      <div className="glass flex flex-col gap-6 w-full max-w-[450px] px-8 py-6 rounded-2xl text-center">
        <h2 className="font-bold text-white text-xl w-full">LOGIN</h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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
          { errors.password &&  <div className="text-amber-950 text-sm w-full text-left ml-1 -mt-2">{errors.password}</div>}
          <div className="flex py-5 gap-2 justify-center text-white">
            Tu N'as Pas Un Compte ?{" "}
            <Link
              to="/register"
              className="text-blue-950 underline underline-offset-4"
            >
              S'inscrire
            </Link>
          </div>
          <button className="w-full px-4 py-2 bg-white text-dark-blue-500 cursor-pointer font-bold glass rounded-md">
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
