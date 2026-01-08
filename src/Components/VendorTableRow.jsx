import { useNavigate } from "react-router-dom";

//import dummmy data
import { mockVendors } from '../data/Vendor'

//import component
import StatusBadge from "../Components/StatusBadge"

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
                            <td ><StatusBadge status={status}/></td>
                            <td >{rating}</td>
                            <td > <Eye className="cursor-pointer" onClick={()=>{navigate(`/viewallDetailsofvendor/${id}`)}}/> </td>
                        </tr>
                    )
                })
            }
        </>
    )
}

export default VendorTableRow