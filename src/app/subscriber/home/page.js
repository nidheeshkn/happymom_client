"use client";

import axios from "@/app/instance"

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import chip from "../../../../public/chip.png";

import BottomNavbar from "@/app/(components)/BottomNavbar";
import Ham from "@/app/(components)/Ham";
function page() {
  const [users_data, setUsersData] = useState({});
  const [subordinate_data, setSubordinateData] = useState([]);
  const [link, setLink] = useState("");
  const [popup, setPopup] = useState(true)
  const router = useRouter()
  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/subscriber/home`);

        // console.log(response.data);
        // console.log(response.data.subordinate_data)
        let results = JSON.parse(JSON.stringify(response.data.subscriber_data));
        let linkfromjs = JSON.parse(JSON.stringify(response.data.user_data.link));
        setLink(linkfromjs);
        // console.log([...response.data.subordinate_data], "results");
        setUsersData({ ...results });
        setSubordinateData([...response.data.subordinate_data]);
      }
      catch (err) {
        console.log(err)
      }
    })();
  }, []);
  return (
    <div className="w-full max-h-screen h-screen overflow-y-scroll">
      {/* navbar */}
      <Ham/>

      <div className="px-3 ">
        <div className="w-full flex justify-around items-center mt-[5rem]">
          <div className="w-full  flex flex-col justify-center h-[30vh] bg-[#3C3C3C] rounded-md px-5">
            <h2 className="mt-3 text-[#C6C6C6] font-semibold  drop-shadow-2xl ">
              Happymom
            </h2>
            <div className="mt-5">
              <Image src={chip} className="w-10 h-10" alt="logo" />

              <h4 className="text-[#C6C6C6] font-semibold ">
                {users_data.subscriber_id}
              </h4>
            </div>

            <div className="flex  h-10 justify-between items-center">
              <h4 className=" text-[#C6C6C6] font-semibold textshadow">
                {users_data.name}
              </h4>

              <div className="flex flex-col  items-center text-[#C6C6C6] text-sm font-semibold ">
                <h6 className="textshadow">Valid Till</h6>
                <h6 className="textshadow">31-05-2024</h6>
              </div>
            </div>
          </div>
        </div>


        <div className="flex flex-col overflow-y-scroll">
          <div className="overflow-x-hidden max-h-[45vh]">
            <div className="inline-block min-w-full py-2">
              <div className="">
              <TableContainer component={Paper}>
      <Table className = "w-full" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Role</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {subordinate_data.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">


                {row.name}
              </TableCell>
              <TableCell align="right">{row.position_id}</TableCell>
           
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="w-full h-16 bg-[#4F95FF] fixed z-10 bottom-0 flex justify-between items-center px-5">
       
       <BottomNavbar  />
      </div>
    </div>
  );
}

export default page;
