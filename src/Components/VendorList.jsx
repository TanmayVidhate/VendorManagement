import { useNavigate } from 'react-router-dom';
import { useState } from "react";

//import dummmy data
import { tableHeadings, mockVendors } from '../data/Vendor'

// import  Component
import VendorTableRow from './VendorTableRow'
import FilterBar from './FilterBar';

//lucid icons
import { Plus } from 'lucide-react';

function VendorList() {

    const [searchText, setSearchText] = useState("");
    const [statusFilter, setStatusFilter] = useState("");
    const [serviceTypeFilter,setServiceTypeFilter] = useState("");


    const navigate = useNavigate();

    // Filter vendors from name
    const filteredVendors = mockVendors.filter(mockVendor => {

        const searchMatch = !searchText || mockVendor.name.toLowerCase().includes(searchText.toLowerCase());
        const statusMatch = !statusFilter || mockVendor.status === statusFilter;
        const typeMatch = !serviceTypeFilter || mockVendor.serviceType === serviceTypeFilter;

        return searchMatch && statusMatch && typeMatch ;
    });

    return (
        <>
            {/* Main Div / outer Divs */}
            <div className='w-screen h-screen bg-gradient-to-t from-red-500  to-fuchsia-600 relative '>
                <div className='absolute w-full h-20 flex items-end justify-center'>
                    <FilterBar
                        searchText={searchText}
                        setSearchText={setSearchText}

                        statusFilter={statusFilter}
                        setStatusFilter={setStatusFilter}

                        serviceTypeFilter={serviceTypeFilter}
                        setServiceTypeFilter={setServiceTypeFilter}
                    />
                </div>
                
                <div className='h-full flex justify-center items-center  '>

                    <table className="w-4/5 rounded-lg overflow-hidden text-white  border-white font-bold">
                        <thead className="bg-white text-black">
                            <tr>
                                {
                                    tableHeadings.map((tableHeading, i) => {
                                        return (
                                            <th className="p-3 text-center" key={i}>{tableHeading}</th>
                                        )
                                    })
                                }
                            </tr>
                        </thead>
                        <tbody >
                            <VendorTableRow filteredVendors={filteredVendors} />
                        </tbody>
                    </table>
                </div>
                <button className='absolute right-8 bottom-10' onClick={() => navigate(`/addvendor`)}><Plus color='white' size={40} /></button>
            </div>
        </>
    )
}

export default VendorList