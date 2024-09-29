"use client";

import axios from "@/src/app/instance";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import chip from "@/public/chip.png";
import person from "@/public/person.png";
import BottomNavbar from "@/src/app/(components)/BottomNavbar";
import Ham from "@/src/app/(components)/Ham";

function ViewSubscriber() {
  const params = useParams();
  const passwordRef = useRef();
  
  const [users_data, setUsersData] = useState({});
  const [subscriber_data, setSubscriberData] = useState({});
  const [subscriber_user_data, setSubscriberUserData] = useState({});
  const [subordinate_data, setSubordinateData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [toastMessage, setToastMessage] = useState(""); // State for toast message
  const [toastType, setToastType] = useState(""); // State for toast type (success/error)

  const router = useRouter();

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/subscriber/viewSubscriber`,
          { params }
        );
        
        const { user_data, subscriber_data, subscriber_user_data, subordinate_data } = response.data;
        
        setUsersData(user_data);
        setSubscriberData(subscriber_data);
        setSubscriberUserData(subscriber_user_data);
        setSubordinateData(subordinate_data);

      } catch (err) {
        console.error(err);
        alert("An error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    })();
  }, [params]);

  if (loading) return <div>Loading...</div>;

  const handleResetPassword = async () => {
    console.log("I will reset....");
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/users/resetUserPassword`,
        {
          user_id: subscriber_user_data.id,
          newpassword: passwordRef.current.value,
        }
      );

      console.log(res.data);

      if (res.data.message === "password saved successfully") {
        passwordRef.current.value = "";
        // Show success toast
        setToastMessage("Password reset successfully!");
        setToastType("success");
        
        // Automatically hide the toast after a few seconds
        setTimeout(() => {
          setToastMessage("");
          setToastType("");
        }, 3000); // Change to 3000 milliseconds for a shorter duration
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while resetting the password.");
    }
  };

  return (
    <div className="w-full min-h-screen overflow-y-scroll">
      <Ham />
      <div className="pl-4 pr-4 pt-4 grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <input
            ref={passwordRef}
            type="text"
            placeholder="Type new password"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="col-span-1">
          <button
            className="btn btn-secondary"
            onClick={handleResetPassword}
          >
            Reset Password
          </button>
        </div>
      </div>

      {/* Toast Notifications */}
      {toastMessage && (
        <div className={`toast toast-start toast-middle`}>
          <div className={`alert ${toastType === "success" ? "alert-success" : "alert-error"}`}>
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

      {/* Subscriber Info */}
      <div className="p-2">
        <div className="w-90 flex justify-center items-center mt-[2rem]">
          <div className="w-full flex flex-col justify-center h-[28vh] bg-[#9A8C3C] rounded-md px-5">
            <div className="flex h-10 justify-between items-center">
              <h4 className="text-[#C6C6C6] font-semibold textshadow">happymom.com.in</h4>
              <h6 className="text-[#C6C6C6] text-sm font-semibold textshadow">{subscriber_user_data.mobile_number}</h6>
            </div>

            <div className="mt-5 flex ">
              <Image src={chip} alt="logo" width={40} height={40} />
              <h4 className="text-[#C6C6C6] font-semibold">{subscriber_data.subscriber_id}</h4>
            </div>

            <div className="flex h-10 justify-between items-center">
              <h4 className="text-[#C6C6C6] font-semibold textshadow">{subscriber_data.name}</h4>
              <div className="flex flex-col items-center text-[#C6C6C6] text-sm font-semibold">
                <h6 className="textshadow">Valid Till</h6>
                <h6 className="textshadow">{subscriber_data.validity_date}</h6>
              </div>
            </div>
          </div>
        </div>

        {/* Subordinate Data */}
        <div className="flex flex-col overflow-y-scroll">
          <div className="overflow-x-hidden max-h-[45vh]">
            {subordinate_data.length > 0 && (
              <table className="table w-full py-2">
                {/* Table Head */}
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Position</th>
                  </tr>
                </thead>
                {/* Table Body */}
                <tbody>
                  {subordinate_data.map((subscriber) => (
                    <tr key={subscriber.subscriber_id}>
                      <td onClick={() => router.push(`/subscriber/viewsubscriber/${subscriber.subscriber_id}`)}>
                        <div className="flex items-center gap-3 cursor-pointer">
                          <Image alt="person" src={person} width={40} height={40} />
                          <div>
                            <div className="font-bold">{subscriber.name}</div>
                            <div className="text-sm opacity-50">{subscriber.position_id}</div>
                          </div>
                        </div>
                      </td>
                      <td>{subscriber.position_id}</td>
                    </tr>
                  ))}
                </tbody>
                {/* Table Foot */}
                <tfoot>
                  <tr>
                    <th>Name</th>
                    <th>Position</th>
                  </tr>
                </tfoot>
              </table>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Navbar */}
      <div className="w-full h-16 bg-[#4F95FF] fixed z-10 bottom-0 flex justify-between items-center px-5">
        <BottomNavbar />
      </div>
    </div>
  );
}

export default ViewSubscriber;