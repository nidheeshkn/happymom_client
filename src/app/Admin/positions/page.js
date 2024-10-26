"use client";
import React, { useEffect, useState } from "react";
import axios from "@/src/app/instance";
import Image from "next/image";
import editbtn from "@/public/edit.png";
import Ham from "../../(components)/Ham";
import BottomNavbar from "../../(components)/BottomNavbar";

function Position() {
  const [positionData, setPositionData] = useState([]);
  const [formData, setFormData] = useState({
    position_name: "",
    position_rank: "",
    total_subscribers: "",
  });

  useEffect(() => {
    const fetchPositionData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/positions/getall`
        );
        const results = response.data;
        console.log(results);
        setPositionData(results);
      } catch (error) {
        console.error("Error fetching position data:", error);
      }
    };

    fetchPositionData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send form data as JSON
      await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/positions/add`,
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      // Clear form and refetch data
      setFormData({
        position_name: "",
        position_rank: "",
        total_subscribers: "",
      });
      
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/positions/getall`
      );
      setPositionData(response.data);
    } catch (error) {
      console.error("Error adding position:", error);
    }
  };

  return (
    <>
      <div className="w-full min-h-screen overflow-y-scroll">
        <Ham />
        <div className="flex flex-col overflow-y-scroll">
          <div className="overflow-x-hidden max-h-[45vh]">
            <div className="inline-block min-w-full py-2">
              <div className="overflow-x-auto">
                <form onSubmit={handleSubmit}>
                  <table className="table table-xs table-pin-rows table-pin-cols text-center text-xs">
                    <thead>
                      <tr>
                        <th>SL</th>
                        <td>Position</td>
                        <td>Rank</td>
                        <td>Gross Wallet</td>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>1</th>
                        <td>
                          <input
                            type="text"
                            name="position_name"
                            value={formData.position_name}
                            onChange={handleInputChange}
                            placeholder="position"
                            className="input input-bordered input-accent w-full max-w-xs p-1 text-center"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            name="position_rank"
                            value={formData.position_rank}
                            onChange={handleInputChange}
                            placeholder="rank"
                            className="input input-bordered input-accent w-full max-w-xs p-1 text-center"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            name="total_subscribers"
                            value={formData.total_subscribers}
                            onChange={handleInputChange}
                            placeholder="Amount"
                            className="input input-bordered input-accent w-full max-w-xs p-1 text-center"
                          />
                        </td>
                        <td>
                          <button type="submit" className="btn btn-outline btn-accent">
                            Add
                          </button>
                        </td>
                      </tr>
                      {positionData.map((position) => (
                        <tr key={position.position_id} className="bg-red-300 text-white">
                          <td>{position.position_id}</td>
                          <td>{position.position_name}</td>
                          <td>{position.position_rank}</td>
                          <td>{position.total_subscribers}</td>
                          <td>
                            <Image src={editbtn} width={16} height={16} alt="Edit" />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr>
                        <th>SL</th>
                        <td>Position</td>
                        <td>Rank</td>
                        <td>Gross Wallet</td>
                        <th></th>
                      </tr>
                    </tfoot>
                  </table>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-16 bg-[#4F95FF] fixed z-10 bottom-0 flex justify-between items-center px-5">
          <BottomNavbar />
        </div>
      </div>
    </>
  );
}

export default Position;