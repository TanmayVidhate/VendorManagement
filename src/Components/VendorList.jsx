
//import dummmy data
import { mockVendors } from '../data/Vendor'

function VendorList() {
    return (
        <>
            {/* Main Div / outer Divs */}
            <div>
                <div>

                    <table border="1" cellPadding="10" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Service Type</th>
                                <th>Contact Person</th>
                                <th>Email</th>
                                <th>Status</th>
                                <th>Rating</th>
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
                                                status === "Active" ? "bg-green-100 text-green-700":"bg-gray-200 text-gray-700"
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