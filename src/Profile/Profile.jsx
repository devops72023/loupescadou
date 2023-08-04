import React, { useContext, useState } from "react";
import { AppContext } from "../App";
import SideBar from "./SideBar";

function Profile() {
  const { currentUser, setCurrentUser } = useContext(AppContext);
  const [name, setName] = useState(currentUser?.name);
  const [email, setEmail] = useState(currentUser?.email);
  const [about, setAbout] = useState(currentUser?.about);
  const [phone, setPhone] = useState(currentUser?.phone);
  const [address, setAddress] = useState(currentUser?.location);

  const onSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="w-full min-h-[300px] flex justify-center items-center @container/profile">
      <div className="glass w-[85%]  min-h-[300px] mx-auto rounded-xl px-6 py-3 flex flex-col gap-6 @[760px]/profile:flex-row">
        <SideBar />
        <div className="flex flex-col w-full">
          <h1 className="font-bold text-center text-3xl text-gray-50">
            Personal Details
          </h1>
          <form
            onSubmit={onSubmit}
            className="flex flex-col w-full py-8 space-y-7"
          >
            <div className="w-full flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-4">
              <div class="relative w-full md:w-1/2">
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  id="name"
                  class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border border-gray-300 appearance-none -:text-white -:border-gray-600 -:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  for="first_name"
                  class="absolute text-sm text-gray-700 font-bold rounded-xl -:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white -:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:-:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >
                  Nom
                </label>
              </div>
              <div class="relative w-full md:w-1/2">
                <input
                  value={email}
                  disabled
                  type="email"
                  id="email"
                  class="cursor-not-allowed text-gray-200 block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border border-gray-300 appearance-none -:text-white -:border-gray-600 -:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  for="email"
                  class="absolute text-sm text-gray-700 font-bold rounded-xl -:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white -:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:-:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >
                  Email
                </label>
              </div>
            </div>

            <div className="flex md:flex-row flex-col w-full items-center space-y-5 md:space-y-0 md:space-x-4 ">
              <div class="relative w-full md:w-1/2">
                <input
                  type="number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  id="about"
                  class=" block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border border-gray-300 appearance-none -:text-white -:border-gray-600 -:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  for="about"
                  class="absolute text-sm text-gray-700 font-bold rounded-xl -:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white -:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:-:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >
                  Phone
                </label>
              </div>
              <div class="relative w-full md:w-1/2">
                <input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  id="about"
                  class=" block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border border-gray-300 appearance-none -:text-white -:border-gray-600 -:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  for="about"
                  class="absolute text-sm text-gray-700 font-bold rounded-xl -:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white -:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:-:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >
                  Address
                </label>
              </div>
            </div>

            <div className="w-full flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-4">
              <div class="relative w-full md:w-full">
                <textarea
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                  id="about"
                  class=" block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border border-gray-300 appearance-none -:text-white -:border-gray-600 -:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  for="about"
                  class="absolute text-sm text-gray-700 font-bold rounded-xl -:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white -:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:-:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >
                  A propos
                </label>
              </div>
            </div>

            <button
              disabled={false}
              type="submit"
              class="disabled:bg-gray-500 disabled:cursor-not-allowed w-full text-lg text-white trasnition-500 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 -:focus:ring-cyan-800 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2"
            >
              {false ? (
                <SyncLoader
                  color="#fff"
                  loading={false}
                  cssOverride={{ display: "block", margin: "0 auto" }}
                  size={12}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              ) : (
                "Mise à jour"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile;
