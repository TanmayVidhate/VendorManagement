import { useNavigate } from "react-router-dom";

//import dummmy data
import { mockVendors } from '../data/Vendor'

//import lucid icons
import { Eye } from 'lucide-react';

function VendorTableRow() {

    const navigate = useNavigate();
    return (
        <>
            {
                mockVendors.map((mockVendor, i) => {
                    const { id, name, serviceType, contactPerson, email, status, rating } = mockVendor;

                    return (
                        <tr className='border border-gray-500 text-center' key={id}>
                            <td className='p-5'>{name}</td>
                            <td>{serviceType}</td>
                            <td>{contactPerson}</td>
                            <td>{email}</td>
                            <td >
                                <span className={`px-7 py-3 rounded-full text-justify  ${status === "Active" ? "bg-green-100 text-green-700" : "bg-gray-200 text-gray-700"}`} >{status}</span>
                            </td>
                            <td >{rating}</td>
                            <td > <Eye className="cursor-pointer" onClick={()=>{navigate(`/vendorcard/${id}`)}}/> </td>
                        </tr>
                    )
                })
            }
        </>
    )
}

export default VendorTableRow