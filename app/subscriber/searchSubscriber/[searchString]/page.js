"use client";
import React, { useEffect, useState } from "react";


import axios from "@/app/instance";

import Image from "next/image";

import chip from "@/public/chip.png";

import BottomNavbar from "@/app/(components)/BottomNavbar";
import Ham from "@/app/(components)/Ham";

function searchSubscriber() {
  const [subscribers_data, setSubscribersData] = useState({});

  const [userwallet, setUserWallet] = useState({});
  
  function findSubscriber(myValue){
    console.log(myValue);
    setSubscribersData(0);
    setUserWallet(0);
    // const token = sessionStorage.getItem("sls_token");

    // console.log(token);

    (async function () {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/subscriber/searchSubscribers/${myValue}`,
          // { myValue }
        );

       
        let result_subscriber = JSON.parse(
          JSON.stringify(response.data.subscriber_data)
        );
        setSubscribersData({ ...result_subscriber });

       
      } catch (err) {
        console.log(err);
      }
    })();
  }

  return (
    <div className="w-full min-h-screen  overflow-y-scroll">
      <Ham />
      <div>
        <div>searchSubscriber</div>

        <label className="input input-bordered flex items-center gap-2">
          <input onChange={(e) => findSubscriber(e.target.value)} type="text" className="grow" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
      {subscribers_data ? (
        <div className="">
          <div className="w-90 flex justify-center items-center mt-[2rem]">
            <div className="w-full  flex flex-col justify-center h-[30vh] bg-[#3C3C3C] rounded-md px-5">
              <h2 className="mt-3 text-[#C6C6C6] font-semibold  drop-shadow-2xl ">
                Happymom
              </h2>
              <div className="mt-5">
                <Image src={chip} className="w-10 h-10" alt="logo" />

                <h4 className="text-[#C6C6C6] font-semibold ">
                  {subscribers_data.subscriber_id}
                </h4>
              </div>

              <div className="flex  h-10 justify-between items-center">
                <h4 className=" text-[#C6C6C6] font-semibold textshadow">
                  {subscribers_data.name}
                </h4>

                <div className="flex flex-col  items-center text-[#C6C6C6] text-sm font-semibold ">
                  <h6 className="textshadow">Valid Till</h6>
                  <h6 className="textshadow">
                    {subscribers_data.validity_date}
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}

      {userwallet?
        <div>
          <div className="flex justify-center items-center text-sm">
          <div className="w-full  flex flex-col justify-center h-[30vh] bg-[#0284c7] rounded-md px-5">
              <div className="flex flex-col justify-center py-3">
                <div className="mt-1 text-[1rem] text-white font-semibold">
                  {Number(userwallet.wallet_balance).toFixed(2)} ₹
                </div>

                <div className="text-white text-sm">Gross Balance</div>
                <div className="mt-1 text-[1rem] text-white font-semibold">
                  {Number(userwallet.wallet_balance).toFixed(2)} ₹
                </div>

                <div className="text-white text-sm">Total Balance</div>
                <div className="mt-1 text-[1rem] text-white font-semibold">
                  {Number(userwallet.wallet_balance).toFixed(2)} ₹
                </div>

                <div className="text-white ">Redeemable</div>
              </div>
            </div>
          </div>
        </div>
        :
        <></>
      }
    </div>
  );
}

export default searchSubscriber;
