"use client";

import axios from "@/app/instance"
import Image from "next/image";
import editbtn from '../../../../public/edit.png'
import React, { useEffect, useState } from "react";
function page() {
    
    


    const [position_data,setPositionData] = useState([])
    useEffect(()=>{
        (async function (){
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/positions`)

       let results = [...JSON.parse(JSON.stringify(response.data))]
       console.log(results)
        setPositionData(results)
        })()
    },[])
  return (
    <div className="w-full h-screen px-10">
        {/* navbar */}
      <div >
        <div className="w-full flex justify-between  pt-10">
          <div className="text-xl font-bold">Happymom</div>
          <ul className="w-64 flex justify-around">
            <li>Home</li>
            <li>About</li>
            <li>Logout</li>
          </ul>
        </div>
      </div>

      
      
<div>
      <div className="w-full  flex justify-around mt-24">
        <div className=" w-[60rem] h-10">

        </div>
        <div>
            <button className="px-10 py-2 bg-[#39D376] rounded-md text-white font-bold">New +</button>
        </div>
        
      </div>
      <table className="w-full ">
           
           <thead className="w-full flex bg-[#4E95FF] py-3 px-2 rounded-md mt-5">
            <tr className="w-full flex justify-between text-white">
                <th>
                    Position Id
                </th>
                <th>
                    Position Name
                </th>
                <th>
                    Position Rank
                </th>
                <th>
                    Total Subscribers
                </th>
                <th>
                    Edit
                </th>
            </tr>
           </thead>
           <tbody className="w-full flex bg-slate-400 py-3 px-2 rounded-md mt-2">
     
         {position_data.map((i,ind)=>{
            return(
                <tr key = {ind} className="w-full flex justify-between text-white">

                    
                    
                    
                    <td>{i.position_id}</td>
                    <td>{i.position_name}</td>
                    <td>{i.position_rank}</td>
                    <td>{i.total_subscribers}</td>
                    <td><Image src = {editbtn} width={16}  height = {16}/></td>
                 </tr>
            )
            })} 
           </tbody>
        </table>
      </div>
      </div>
  
  );
}

export default page;
