"use client";


import React, { useEffect, useState } from "react";
import axios from "@/app/instance"

function page() {
    
      


    
  return (
    <div className="flex flex-col ">
    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
        <div className="overflow-hidden">
          <table
            className="min-w-full text-center text-sm font-light text-surface dark:text-white">
            <thead
              className="border-b border-neutral-200 bg-neutral-50 font-medium dark:border-white/10 dark:text-neutral-800">
              <tr>
            
                <th scope="col" className=" px-6 py-4">Name</th>
                <th scope="col" className=" px-6 py-4">Role</th>
                <th scope="col" className=" px-6 py-4">Subscribers</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-neutral-200 dark:border-white/10 bg-[#5985C6]">
              
                <td className="whitespace-nowrap  px-6 py-4">Romario </td>
                <td className="whitespace-nowrap  px-6 py-4">Manager</td>


                <td className="whitespace-nowrap  px-6 py-4">10000</td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  
  );
}

export default page;
