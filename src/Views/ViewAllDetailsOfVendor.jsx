import React from 'react'
import { useParams,useNavigate } from "react-router-dom";


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
    <div className="h-[100vh] w-[100vw]  bg-gradient-to-t from-red-500  to-fuchsia-600   overflow-hidden p-6  text-white  ">

        <VendorCard record={record}/>

        <div className='absolute right-8 bottom-10 '>
          <House color='white' onClick={() => { navigate("/") }} size={40} />
        </div>
    </div>
  )
}

export default ViewAllDetailsOfVendor