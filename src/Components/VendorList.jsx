
//import dummmy data
import { mockVendors, tableHeadings } from '../data/Vendor'

function VendorList() {
    return (
        <>
            {/* Main Div / outer Divs */}
            <div className="w-screen h-screen">
                <div className="h-full flex justify-center items-center">
                    <div className="w-4/5 border border-gray-300 rounded-lg overflow-hidden">

                        {/* Table Header */}
                        <table className="w-full">
                            <thead className="bg-blue-600 text-white">
                                <tr>
                                    {tableHeadings.map((tableHeading, i) => (
                                        <th className="p-2 text-left" key={i}>{tableHeading}</th>
                                    ))}
                                </tr>
                            </thead>
                        </table>

                        {/* Scrollable Table Body */}
                        <div className="h-[50vh] overflow-y-auto">
                            <table className="w-full border-collapse">
                                <tbody>
                                    {mockVendors.map(({ id, name, serviceType, contactPerson, email, status, rating }) => (
                                        <tr key={id} className="border-b border-gray-200">
                                            <td className="p-5">{name}</td>
                                            <td className="">{serviceType}</td>
                                            <td className="">{contactPerson}</td>
                                            <td className="">{email}</td>
                                            <td className="">
                                                <span className={`px-2 py-1 rounded ${status === "Active" ? "bg-green-100 text-green-700" : "bg-gray-200 text-gray-700"}`}>
                                                    {status}
                                                </span>
                                            </td>
                                            <td className="p-2">{rating}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default VendorList