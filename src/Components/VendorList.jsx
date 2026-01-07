
//import dummmy data
import { tableHeadings } from '../data/Vendor'

// import  Component
import VendorTableRow from './VendorTableRow'

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
                            <VendorTableRow/>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default VendorList