"use client";

import { useState, useEffect } from "react";

import { useRouter } from "next/navigation";
import antiage from "../../../public/antiaging.png";

import sls from "../../../public/sls.png";
import hop from "../../../public/forgiveness.png";

import fam from "../../../public/fam.png";

import mindtra from "../../../public/mindtra.png";








import speaking from "../../../public/publicspeaking.png";



import ta from '../../../public/ta.png'
import BottomNavbar from "@/app/(components)/BottomNavbar";

import Image from "next/image";

import course from "../../../public/happymom.png";
import Ham from "../(components)/Ham";
function Courses() {
  const [link, setLink] = useState("");

  const router = useRouter();
  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/walletDetails`
        );

        setLink(response.data.user_data.link);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  return (
    <div>
      <div>
        <Ham/>
      </div>
      <div className="w-full flex justify-center pt-3  bg-white">
        <span className="text-xl font-semibold   "> Courses</span>
      </div>

      <div className="w-full px-5 mt-3 ">
        <div>
          <div className="max-h-80vh">
            <div className="w-full h-36 bg-blue-400 flex flex-col justify-center text-white text-xl rounded-md">
              <div></div>

              <div className="flex justify-between items-center px-3 rounded-md" onClick={()=>{
                

                router.push("https://mwpfn.on-app.in/app/oc/457782/mwpfn?utm_source%3Dwhatsapp%26utm_medium%3Dtutor-course-referral-wa%26utm_campaign%3Dcourse-overview-app")
              }}>
                <div className="h-full flex items-end">
                <Image src={course} height={110} width={110} />
                </div>
                <div className="flex flex-col items-center ">
                  <span className="text-[1rem] font-semibold">Happymom</span>

                  <span className="text-[1rem] font-semibold">600 RS</span>
                </div>
              </div>
            </div>

            <div className="w-full h-36 bg-blue-400 flex flex-col justify-center text-white text-xl mt-5 rounded-md">
              <div></div>

              <div className="flex justify-between items-center px-3 rounded-md" onClick={()=>{
                

                router.push("https://mwpfn.on-app.in/app/oc/234365/mwpfn?utm_source%3Dwhatsapp%26utm_medium%3Dtutor-course-referral-wa%26utm_campaign%3Dcourse-overview-app")
              }}>
                <Image src={antiage} height={110} width={110} />

                <div className="flex flex-col items-center ">
                  <span className="text-[1rem] font-semibold">Anti Aging</span>

                  <span className="text-[1rem] font-semibold">600 RS</span>
                </div>
              </div>
            </div>

            <div className="w-full h-36 bg-blue-400 flex flex-col justify-center text-white text-xl mt-5 rounded-md">
              <div></div>

              <div className="flex justify-between items-center px-3 rounded-md" onClick={()=>{
                

                router.push("https://mwpfn.on-app.in/app/oc/208923/mwpfn?utm_source%3Dwhatsapp%26utm_medium%3Dtutor-course-referral-wa%26utm_campaign%3Dcourse-overview-app")
              }}>
                <Image src={sls} height={150} width={150} />
                <div className="flex flex-col items-center ">
                  <span className="text-[1rem] font-semibold">SLS Mindful Yoganidra</span>

                  <span className="text-[1rem] font-semibold">600 RS</span>
                </div>
              </div>
            </div>

            <div className="w-full h-36  bg-blue-400 flex flex-col justify-center text-white text-xl my-5 rounded-md">
              <div></div>

              <div className="flex justify-between items-center px-3 rounded-md" onClick={()=>{
                

                router.push("https://mwpfn.on-app.in/app/oc/207244/mwpfn?utm_source%3Dwhatsapp%26utm_medium%3Dtutor-course-referral-wa%26utm_campaign%3Dcourse-overview-app")
              }}>
                <Image src={fam} height={110} />

                <div className="flex flex-col items-center ">
                  <span className="text-[1rem] font-semibold">
                    Family Life Cycle
                  </span>

                  <span className="text-[1rem] font-semibold">600 RS</span>
                </div>
              </div>
            </div>

            <div className="w-full h-36  bg-blue-400 flex flex-col justify-center text-white text-xl my-5 rounded-md">
              <div></div>

              <div className="flex justify-between items-center px-3 rounded-md" onClick={()=>{
                

                router.push("https://mwpfn.on-app.in/app/oc/198305/mwpfn?utm_source%3Dwhatsapp%26utm_medium%3Dtutor-course-referral-wa%26utm_campaign%3Dcourse-overview-app")
              }}>
                <Image src={ta} height={110} />

                <div className="flex flex-col items-center ">
                  <span className="text-[1rem] font-semibold">
                    Transactional analysis
                  </span>

                  <span className="text-[1rem] font-semibold">2000 RS</span>
                </div>
              </div>
            </div>


            <div className="w-full h-36  bg-blue-400 flex flex-col justify-center text-white text-xl my-5 rounded-md">
              <div></div>

              <div className="flex justify-between items-center px-3 rounded-md" onClick={()=>{
                

                setPayment(true)
              }}>
                <Image src={speaking} height={110} />

                <div className="flex flex-col items-center ">
                  <span className="text-[1rem] font-semibold">
                    Public Speaking
                  </span>

                  <span className="text-[1rem] font-semibold">2000 RS</span>
                </div>
              </div>
            </div>
            <div className="w-full h-36 mb-[5rem] bg-blue-400 flex flex-col justify-center text-white text-xl my-5 rounded-md">
              <div></div>

              <div className="flex justify-between items-center px-3 rounded-md" onClick={()=>{
                

                router.push("ttps://mwpfn.on-app.in/app/oc/198305/mwpfn?utm_source%3Dwhatsapp%26utm_medium%3Dtutor-course-referral-wa%26utm_campaign%3Dcourse-overview-app")
              }}>
                <Image src={mindtra} height={110} />

                <div className="flex flex-col items-center ">
                  <span className="text-[1rem] font-semibold">
                    Mind Trance
                  </span>

                  <span className="text-[1rem] font-semibold">2000 RS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>










{/* <div className="fixed w-[100vw] h-[100vh]  z-[60] top-0 px-5 flex justify-center items-center">
  <div className="text-white flex flex-col items-center">
    
    
    
    <div className="text-semibold font-xl flex justify-center items-center">Pay this number and send screen shot to the same number to enroll in this course</div>
 

<div className="text-semibold text-2xl font-extrabold mt-4">940056815</div>
<div className="text-semibold text-2xl font-extrabold mt-4">2000 Rs</div>
  </div>

</div> */}
    <div className="w-full h-16 bg-[#4F95FF] fixed z-10 bottom-0 flex justify-between items-center px-5">
      <BottomNavbar />
      </div>
    </div>
  );
}

export default Courses;
