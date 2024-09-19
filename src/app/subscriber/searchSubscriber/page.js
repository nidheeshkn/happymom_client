"use client";
import React, { useEffect, useState } from "react";
import axios from "@/app/instance";
import Image from "next/image";
import chip from "../../../../public/chip.png";
import BottomNavbar from "@/app/(components)/BottomNavbar";
import Ham from "@/app/(components)/Ham";

function SearchSubscriber() {
  const [subscribersData, setSubscribersData] = useState([]);
  const [userWallet, setUserWallet] = useState(null);

  async function findSubscriber(myValue) {
    console.log(myValue);
    setSubscribersData([]);

    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/subscriber/searchSubscribers`,
        {
          params: {
            serchString: myValue,
          },
        }
      );

      setSubscribersData(response.data.subscriber_data || []);
    } catch (err) {
      console.error("Error fetching subscriber data:", err);
    }
  }

  return (
    <div className="w-full min-h-screen overflow-y-scroll">
      <Ham />
      <div>
        <div>Search Subscriber</div>

        <label className="input input-bordered flex items-center gap-2">
          <input
            onChange={(e) => findSubscriber(e.target.value)}
            type="text"
            className="grow"
            placeholder="Search"
          />
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

      {subscribersData.length > 0 && (
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Mobile Number</th>
              </tr>
            </thead>
            <tbody>
              {subscribersData.map((subscriber) => (
                <tr key={subscriber.subscriber_id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                            alt="Avatar"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{subscriber.name}</div>
                        <div className="text-sm opacity-50">Location</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {subscriber.mobile_number}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {subscriber.job_title}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
            {/* foot */}
            <tfoot>
              <tr>
                <th>Name</th>
                <th>Mobile Number</th>
              </tr>
            </tfoot>
          </table>
        </div>
      )}

      {subscribersData.length > 0 && (
        <div className="">
          <div className="w-90 flex justify-center items-center mt-[2rem]">
            <div className="w-full flex flex-col justify-center h-[30vh] bg-[#3C3C3C] rounded-md px-5">
              <h2 className="mt-3 text-[#C6C6C6] font-semibold drop-shadow-2xl">
                Happymom
              </h2>
              <div className="mt-5">
                <Image src={chip} className="w-10 h-10" alt="logo" />
                <h4 className="text-[#C6C6C6] font-semibold">
                  {subscribersData[0].subscriber_id}
                </h4>
              </div>

              <div className="flex h-10 justify-between items-center">
                <h4 className="text-[#C6C6C6] font-semibold textshadow">
                  {subscribersData[0].name}
                </h4>

                <div className="flex flex-col items-center text-[#C6C6C6] text-sm font-semibold">
                  <h6 className="textshadow">Valid Till</h6>
                  <h6 className="textshadow">
                    {subscribersData[0].validity_date}
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {userWallet && (
        <div className="flex justify-center items-center text-sm">
          <div className="w-full flex flex-col justify-center h-[30vh] bg-[#0284c7] rounded-md px-5">
            <div className="flex flex-col justify-center py-3">
              <div className="mt-1 text-[1rem] text-white font-semibold">
                {Number(userWallet.wallet_balance).toFixed(2)} ₹
              </div>
              <div className="text-white text-sm">Gross Balance</div>
              <div className="mt-1 text-[1rem] text-white font-semibold">
                {Number(userWallet.wallet_balance).toFixed(2)} ₹
              </div>
              <div className="text-white text-sm">Total Balance</div>
              <div className="mt-1 text-[1rem] text-white font-semibold">
                {Number(userWallet.wallet_balance).toFixed(2)} ₹
              </div>
              <div className="text-white">Redeemable</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchSubscriber;
