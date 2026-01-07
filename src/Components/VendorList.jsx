import { useNavigate } from 'react-router-dom';
//import dummmy data
import { tableHeadings } from '../data/Vendor'

// import  Component
import VendorTableRow from './VendorTableRow'

//lucid icons
import { Plus } from 'lucide-react';

function VendorList() {
    const navigate = useNavigate();
    return (
        <>
            {/* Main Div / outer Divs */}
            <div className='w-screen h-screen bg-gradient-to-t from-red-500  to-fuchsia-600 relative '>
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
                            <VendorTableRow/>
                        </tbody>
                    </table>
                </div>
                <button className='absolute right-8 bottom-10' onClick={()=>navigate(`/addvendor`)}><Plus color='white' size={40}/></button>
            </div>
        </>
    )
}

export default VendorList