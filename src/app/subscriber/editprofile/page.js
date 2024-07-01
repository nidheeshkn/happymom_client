"use client";

import axios from "@/app/instance";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import TextField from "@mui/material/TextField";
import Ham from "@/app/(components)/Ham";

function page() {
  const [data,setData] = useState({});

  const router = useRouter();

  const [name, setName] = useState("");
  const [dob, setDob] = useState("");

  const [aadhar, setAadhar] = useState("");
  const [pan, setPan] = useState("");
  const [housename, setHouseName] = useState("");

  const [street, setStreet] = useState("");
  const [place, setPlace] = useState("");
  const [po, setPo] = useState("");

  const [pin, setPin] = useState("");

  const [district, setDistrict] = useState("");

  const [state, setState] = useState("");

  const [country, setCountry] = useState("");

  const [account_num, setAccountNum] = useState("");

  const [bank_name, setBankName] = useState("");

  const [account_holder_name, setAccountHolderName] = useState("");
  const [toggle, setToggle] = useState(false);
  const [toast, setToast] = useState(false);
  const [toastText, setToastText] = useState("");



  const [ifsc, setIfsc] = useState("");



  const [loading, setLoading] = useState(true);


 
  useEffect(() => {
    console.log("profile");

    (async function () {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/subscriber/profile`
      );
      console.log(response.data.my_data,'line 51');
      setData({...response.data.my_data});
      setLoading(false);

    })();
  }, [toast]);


  async function handleUpdate() {

    try {

      const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/subscriber/update_me`, {

        name: name ? name : data.name,
        dob: dob ? dob : data.dob,
        adhaar_num: aadhar ? aadhar : data.aadhar,
        pan_num: pan ? pan : data.pan,
        house_name: housename ? housename : data.housename,
        street: street ? street : data.street,
        place: place ? place : data.place,
        po: po ? po : data.po,


        pin: pin ? pin : data.pin,
        district: district ? district : data.district,
        state: state ? state : data.state,
        country: country ? country : data.country,
        account_num: account_num ? account_num : data.account_num,
        bank_name: bank_name ? bank_name : data.bank_name,
        account_holder_name: account_holder_name ? account_holder_name : data.account_holder_name,
        ifsc_code: ifsc ? ifsc : data.ifsc,
      });

    

      
      
      
      console.log(response);
      
      if(response.data.status==="success"){
        
        setToggle(false);
        setToast(true)
        setToastText("Successfuly Updated...");

        setTimeout(() => {
          setToast(false);
        }, 5000);

      }
    } catch (error) {
      setToastText("Failed to update details...")
    }


  }
  // account_holder_name
  // account_num

  // active

  // adhaar_num

  // bank_name

  // country

  // createdAt

  // district

  // dob

  // doj

  // house_name

  // ifsc_code

  // name

  // pan_num

  // parent_id

  // pin

  // place

  // position_id

  // subscriber_id

  // null
  // updatedAt

  // wallet_balance

  return (
    <div className="w-full max-h-screen h-screen overflow-y-scroll">
      {toast&&(
        <div className="toast toast-middle toast-center z-50" >
        <div className="alert alert-info">
          <span>{toastText}</span>
        </div>
        
      </div>
      )}
      {toggle && (
        <div className="w-full h-[100vh] bg-slate-50 filter z-50 absolute top-0 flex justify-center items-center px-5">
          <div className="w-full h-[30vh] bg-slate-400  shadow">
            <div className="w-full bg-indigo-500 py-5 shadow flex justify-center items-center font-semibold text-white">
              Confirm Updating
            </div>

            <div className="w-full  flex px-7 justify-between items-center mt-[3rem]">

              <button className="px-5 py-4 bg-red-500 text-white font-semibold rounded-md" onClick={() => setToggle(false)}>Cancel</button>
              <button className="px-5 py-4 bg-indigo-500 text-white font-semibold rounded-md" onClick={handleUpdate} >Update</button>
            </div>
          </div>
        </div>
      )}
      {/* popup */}
      <div className="  ">
        {/* popup */}

        <Ham/>
      </div>

      <div className="mb-5 mt-[7vh] w-full flex justify-between px-5">
        <button
          className="px-5 py-1 bg-slate-500 rounded-md text-white "
          onClick={() => {
            router.push("/subscriber/home");
          }}
        >
          Home
        </button>
        <div></div>
      </div>

      
      <div className=" px-5 max-h-[65vh] overflow-y-scroll overflow-x-hidden">
      {loading ? (
        <div className="text-center">Loading data...</div>
      ) : <>
              <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          margin="normal"
          className="w-full font-semibold py-3 text-black"
          defaultValue={`${data.name}`}
          onChange={(e) => {
           
            setName(e.target.value)
          }}
        />
        <TextField
          id="outlined-basic"
          label="DOB"
          variant="outlined"
          
         
       
          margin="normal"
          className="w-full font-semibold setmargin  text-black"
          defaultValue={`${data.dob}`}
          onChange={(e) => {
            setDob(e.target.value);
          }}
        />

        <TextField
          id="outlined-basic"
          label="Aadhar"
          variant="outlined"
           margin="normal"
          className="w-full font-semibold mt-5 text-black"
          defaultValue={`${data.adhaar_num}`}
          onChange={(e) => {
            setAadhar(e.target.value);
          }}
        />

        <TextField
          id="outlined-basic"
          label="PAN"
          variant="outlined"
           margin="normal"
          className="w-full font-semibold mt-5 text-black"
          defaultValue={`${data.pan_num}`}
          onChange={(e) => {
            setPan(e.target.value);
          }}
        />

        <TextField
          id="outlined-basic"
          label="House Name"
          variant="outlined"
           margin="normal"
          className="w-full font-semibold mt-5 text-black"
          defaultValue={`${data.house_name}`}
          onChange={(e) => {
            setHouseName(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="Street"
          variant="outlined"
           margin="normal"
          className="w-full font-semibold mt-5 text-black"
          defaultValue={`${data.street}`}
          onChange={(e) => {
            setStreet(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="Place"
          variant="outlined"
           margin="normal"
          className="w-full font-semibold mt-5 text-black"
          defaultValue={`${data.place}`}
          onChange={(e) => {
            setPlace(e.target.value);
          }}
        />


        <TextField
          id="outlined-basic"
          label="P.O"
          variant="outlined"
           margin="normal"
          className="w-full font-semibold mt-5 text-black"
          defaultValue={`${data.po}`}
          onChange={(e) => {
            setPo(e.target.value);
          }}
        />

        <TextField
          id="outlined-basic"
          label="PIN"
          variant="outlined"
           margin="normal"
          className="w-full font-semibold mt-5 text-black"
          defaultValue={`${data.pin}`}
          onChange={(e) => {
            setPin(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="District"
          variant="outlined"
           margin="normal"
          className="w-full font-semibold mt-5 text-black"
          defaultValue={`${data.district}`}
          onChange={(e) => {
            setDistrict(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="State"
          variant="outlined"
           margin="normal"
          className="w-full font-semibold mt-5 text-black"
          defaultValue={`${data.state}`}
          onChange={(e) => {
            setState(e.target.value);
          }}
        />

        <TextField
          id="outlined-basic"
          label="Country"
          variant="outlined"
           margin="normal"
          className="w-full font-semibold mt-5 text-black"
          defaultValue={`${data.country}`}
          onChange={(e) => {
            setCountry(e.target.value);
          }}
        />

        <TextField
          id="outlined-basic"
          label="Bank Name"
          variant="outlined"
           margin="normal"
          className="w-full font-semibold mt-5 text-black"
          defaultValue={`${data.bank_name}`}
          onChange={(e) => {
            setBankName(e.target.value);
          }}
        />

        <TextField
          id="outlined-basic"
          label="Account Number"
          variant="outlined"
           margin="normal"
          className="w-full font-semibold text-black mt-5"
          defaultValue={`${data.account_num}`}
          onChange={(e) => {
            setAccountNum(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="Account Holder"
          variant="outlined"
           margin="normal"
          className="mt-5 w-full font-semibold text-black"
          defaultValue={`${data.account_holder_name
            }`}
          onChange={(e) => {
            setAccountHolderName(e.target.value);
          }}
        />

        <TextField
          id="outlined-basic"
          label="IFSC Code"
          variant="outlined"
           margin="normal"
          className="w-full  mt-5 font-semibold text-black"
          defaultValue={`${data.ifsc_code}`}
          onChange={(e) => {
            setIfsc(e.target.value);
          }}
        />
        </>
}

      </div>
      <div className="w-full px-5 mt-3">
        {loading === false ?<button onClick={() => setToggle(true)} className="py-2 w-full          bg-[#4E95FF] font-semibold text-white rounded-md">
          Update
        </button>:<></>}
      </div>
    </div>
  );
}

export default page;
