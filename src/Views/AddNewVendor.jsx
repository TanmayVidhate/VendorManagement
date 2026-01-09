import React from 'react'
import { mockVendors } from "../data/Vendor"

import { useNavigate } from 'react-router-dom';

//import component
import Form from '../Components/Form'

//Lucid import
import { House } from 'lucide-react';

function AddNewVendor() {
    const navigate = useNavigate();
    return (
        <>
            <div className='min-h-screen h-[100vh] overflow-hidden overflow-y-auto  bg-gradient-to-t from-red-500  to-fuchsia-600 relative  '>
                <Form />
                
                <div className='fixed right-6 bottom-6 cursor-pointer bg-black/40 hover:bg-black/60 p-4 rounded-full transition" '>
                    <House color='white' onClick={()=>{navigate("/")}} size={40} />
                </div>
            </div>
        </>
    )
}

export default AddNewVendor