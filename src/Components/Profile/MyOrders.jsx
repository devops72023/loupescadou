import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";
import SideBar from "./SideBar";
import { toast } from "react-toastify";
import SpinningToast from "../Global/SpinningToast";
import Order from "./Order";

function MyOrders() {
  const { currentUser, setCurrentUser } = useContext(AppContext);
  const [orders, setOrders] = useState({});

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API}/users/current-user/orders`,
    {
      method: "GET",
      headers: { Authorization: "Bearer " + localStorage.getItem('jwt'), }
    }
    )
    .then(res => res.json())
    .then(res => {
      setOrders(res)
    })
  },[]);

  return (
    <div className="w-full min-h-[300px] flex justify-center items-center @container/profile">
      <div className="glass w-[90%] max-w-[1434px] min-h-[300px] mx-auto rounded-xl px-6 py-6 md:py-16 flex flex-col gap-6 @[760px]/profile:flex-row">
        <SideBar />
        <div className="flex flex-col w-full">
          {orders?.orders?.length !== 0 ? (
            <div className="text-white flex w-full flex-col items-center justify-center mx-auto space-y-3 col-span-4">
              <div className="w-full">
                <h1 className="font-bold text-3xl text-gray-50">
                  Mes Commandes
                </h1>
                <table className=" items-center mt-5 w-full">
                  <thead className="justify-between w-full shadow-sm">
                    <th>Order ID</th>
                    <th>Delivery Date</th>
                    <th>Prix</th>
                    <th>Status</th>
                    <th>Details</th>
                  </thead>
                  <tbody className=" flex-grow">
                    {orders?.orders?.slice(0, 5).map((order) => (
                      <Order key={order._id} order={order} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="flex w-3/4 flex-col items-center justify-center mx-auto space-y-3 col-span-4">
              <img
                src="/assets/fish_sad.webp"
                className="h-52"
                alt=""
                srcSet=""
              />
              <h1 className="text-gray-50 font-bold text-2xl">
                OUPS ! C&apos;est vide
              </h1>
              <h3 className="text-gray-50 pb-5 text-center md:text-left">
                Il semble que vous n&apos;ayez pas encore ajouté de nouvelle
                commande...!!
              </h3>
              <button
                onClick={() => router.push("/")}
                className="bg-blue-600 text-white w-full md:w-1/4 py-2 rounded mt-3 px-2 text-sm hover:bg-cyan-600 duration-300"
              >
                Commandez Maintenant
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MyOrders;
