"use client";

import axios from "@/src/app/instance";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import chip from "../../../../public/chip.png";

import BottomNavbar from "@/src/app/(components)/BottomNavbar";
import Ham from "@/src/app/(components)/Ham";
function page() {
  const [users_data, setUsersData] = useState({});
  const [subscriber_data, setSubscriberData] = useState({});
  const [subordinate_data, setSubordinateData] = useState([]);
  const [link, setLink] = useState("");
  const [popup, setPopup] = useState(true);
  const router = useRouter();

  let sub_name;
  useEffect(() => {
    const token = sessionStorage.getItem("sls_token");
    // console.log(token);
    (async function () {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/subscriber/home`
        );

        let result_user = JSON.parse(JSON.stringify(response.data.user_data));
        setUsersData({ ...result_user });
        let result_subscriber = JSON.parse(
          JSON.stringify(response.data.subscriber_data)
        );
        setSubscriberData({ ...result_subscriber });

        setSubordinateData([...response.data.subordinate_data]);
        // console.log(users_data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  return (
    <div className="w-full min-h-screen  overflow-y-scroll">
      <Ham />

      <div className="">
        <div className="w-90 flex justify-center items-center mt-[2rem]">
          <div className="w-full  flex flex-col justify-center h-[30vh] bg-[#3C3C3C] rounded-md px-5">
            <h2 className="mt-3 text-[#C6C6C6] font-semibold  drop-shadow-2xl ">
            happymom.com.in
            </h2>
            <div className="mt-5">
              <Image src={chip} className="w-10 h-10" alt="logo" />

              <h4 className="text-[#C6C6C6] font-semibold ">
                {subscriber_data.subscriber_id}
              </h4>
            </div>

            <div className="flex  h-10 justify-between items-center">
              <h4 className=" text-[#C6C6C6] font-semibold textshadow">
                {subscriber_data.name}
              </h4>

              <div className="flex flex-col  items-center text-[#C6C6C6] text-sm font-semibold ">
                <h6 className="textshadow">Valid Till</h6>
                <h6 className="textshadow">{subscriber_data.validity_date}</h6>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col overflow-y-scroll">
          <div className="overflow-x-hidden max-h-[45vh]">
            <div className="inline-block min-w-full py-2">
              <div className="">
                <TableContainer component={Paper}>
                  <Table className="w-full" aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        {/* <TableCell>id</TableCell> */}
                        <TableCell>Name</TableCell>
                        <TableCell>Role</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {subordinate_data.map((row) => {
                        // Preprocess row.name to use subscriber_id if name is blank
                        const displayName =
                          row.name === null ? row.subscriber_id : row.name;

                        return (
                          <TableRow
                            key={row.subscriber_id}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            {users_data.id === 10001 ? (
                              <TableCell
                                onClick={() => {
                                  router.push(
                                    `/subscriber/viewsubscriber/${row.subscriber_id}`
                                  );
                                }}
                                component="th"
                                scope="row"
                              >
                                {displayName}
                              </TableCell>
                            ) : (
                              <TableCell component="th" scope="row">
                                {displayName}
                              </TableCell>
                            )}
                            <TableCell align="right">
                              {row.position_id}
                            </TableCell>
                          </TableRow>
                        );
                      })}
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

export default page;
