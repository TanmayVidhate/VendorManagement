
//import dummmy data
import { mockVendors, tableHeadings } from '../data/Vendor'

function VendorList() {
    return (
        <>
            {/* Main Div / outer Divs */}
            <div>
                <div>

                    <table className="w-[80%] ">
                        <thead className="bg-blue-600 text-white">
                            <tr>
                                {
                                    tableHeadings.map((tableHeading, i) => {
                                        return (
                                            <th className="p-2 text-left">{tableHeading}</th>
                                        )
                                    })
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                mockVendors.map((mockVendor, i) => {
                                    const { id, name, serviceType, contactPerson, email, status, rating } = mockVendor;

                                    return (
                                        <tr key={id}>
                                            <td>{name}</td>
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