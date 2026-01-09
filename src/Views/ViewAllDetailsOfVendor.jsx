import React from 'react'
import { useParams, useNavigate } from "react-router-dom";


import { mockVendors } from "../data/Vendor"

//import Component
import VendorCard from '../Components/VendorCard'

//Lucid import
import { House } from 'lucide-react';

function ViewAllDetailsOfVendor() {
  const navigate = useNavigate();
  const { id } = useParams();
  const record = mockVendors.find(mockVendor => mockVendor.id === id);
  return (
    <div className="min-h-screen w-[100vw]  bg-gradient-to-t from-red-500  to-fuchsia-600   overflow-hidden p-6  text-white  ">

      <VendorCard record={record} />

      <div className='fixed right-6 bottom-6 cursor-pointer bg-black/40 hover:bg-black/60 p-4 rounded-full transition" '>
        <House color='white' onClick={() => { navigate("/") }} size={40} />
      </div>
    </div>
  )
}

export default ViewAllDetailsOfVendor