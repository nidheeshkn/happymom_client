"use client";
import React, { useEffect, useRef, useState } from "react";
import axios from "@/app/instance";

import { useRouter } from "next/navigation";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import BottomNavbar from "@/app/(components)/BottomNavbar";
import Ham from "../(components)/Ham";

function Wallet() {
  const [wallet, setWallet] = useState([]);
  const [userwallet, setUserWallet] = useState({});

  const [link, setLink] = useState("");
  const router = useRouter();

  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/walletDetails`
        );

        // console.log(response.data);
        console.log(response.data);

        setWallet(response.data.my_wallet_data);
        setUserWallet(response.data.subscriber_data);
        // console.log(wallet);
        // let linkfromjs = JSON.parse(JSON.stringify(response.data.user_data.link));
        // setLink(linkfromjs);
        // console.log([...response.data.subordinate_data], "results");
        // setUsersData({ ...results });
        // setSubordinateData([...response.data.subordinate_data]);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <div className="max-w-[100%] overflow-hidden">
      
<div>
        <Ham/>
      </div>
      <div className="w-full flex justify-center pt-3  bg-white">
        <span className="text-xl font-semibold   "> Wallet</span>
      </div>
      <div>
        <div className="flex justify-center items-center text-sm">
          <div className="w-[90vw] sm:w-[90vw] fixed top-24 bg-[#1EA1DA] h-[9rem] px-5 rounded-lg">
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

        <div className="fixed flex flex-col max-w-full  min-w-full  max-h-[42vh]   overflow-y-scroll  top-64 ">
          <div className="overflow-x-hidden  sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="">
                {/* <table className="min-w-full text-center  text-sm font-light text-surface dark:text-white">
                  <thead className="      sticky border-b border-neutral-200 bg-neutral-50 font-medium dark:border-white/10 dark:text-neutral-800">
                    <tr>
                      <th scope="col" className=" px-5 py-4 text-[0.7rem]">
                        Subscriber
                      </th>
                      <th scope="col" className=" px-5 py-4 text-[0.7rem]">
                        Date
                      </th>
                      <th scope="col" className=" px-5 py-4 text-[0.7rem]">
                        Amount
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {wallet.map((i, ind) => {
                      return (
                        <tr className="w-full h-11  " key={ind}>
                          <td className="text-[0.6rem] text-black">
                            {i.description}
                          </td>
                          <td className="text-[0.6rem] text-black">
                            {i.createdAt.split("T")[0]}
                          </td>
                          <td className="text-[0.6rem] text-black">
                            {i.credit}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table> */}
                <TableContainer component={Paper}>
      <Table className = "w-full" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Description</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Amount</TableCell>
           
           
          </TableRow>
        </TableHead>
        <TableBody>
          {wallet.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">


                {row.description}
              </TableCell>
              <TableCell component="th" scope="row">


                {row.createdAt.split("T")[0]}
              </TableCell>
              <TableCell component="th" scope="row">


                {row.credit}
              </TableCell>
              
           
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
      <BottomNavbar />
      </div>
    </div>
  );
}

export default Wallet;
