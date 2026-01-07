
//import dummmy data
import { mockVendors, tableHeadings } from '../data/Vendor'

function VendorList() {
    return (
        <>
            {/* Main Div / outer Divs */}
            <div className='w-screen h-screen '>
                <div className='h-full flex justify-center items-center  '>

                    <table className="w-4/5 border border-gray-300 rounded-lg overflow-hidden ">
                        <thead className="bg-blue-600 text-white">
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
                            {

                                mockVendors.map((mockVendor, i) => {
                                    const { id, name, serviceType, contactPerson, email, status, rating } = mockVendor;

                                    return (
                                        <tr className='border border-gray-500 text-center' key={id}>
                                            <td className='p-5'>{name}</td>
                                            <td>{serviceType}</td>
                                            <td>{contactPerson}</td>
                                            <td>{email}</td>
                                            <td className={
                                                status === "Active" ? "bg-green-100 text-green-700" : "bg-gray-200 text-gray-700"
                                            }>{status}</td>
                                            <td >{rating}</td>

                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default VendorList