import { useParams } from "react-router-dom";

import { mockVendors } from "../data/Vendor"
import { useState } from "react";

function VendorCard() {

  const { id } = useParams();
  const record = mockVendors.find(mockVendor => mockVendor.id === id);
  return (
    <>
      <div className="h-[100vh] w-[100vw]  bg-gradient-to-t from-red-500  to-fuchsia-600   overflow-hidden p-6  text-white  ">
        <div className="max-w-xl mx-auto bg-white shadow-md rounded-xl overflow-hidden p-6 my-4 hover:shadow-lg transition-shadow duration-300">
          {/* Vendor Header */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-800">{record.name}</h2>
            <span
              className={`px-3 py-1 rounded-full text-sm font-semibold ${record.status === "Active"
                ? "bg-green-200 text-green-700"
                : "bg-gray-200 text-gray-700"
                }`}
            >
              {record.status}
            </span>
          </div>

          {/* Vendor Details */}
          <div className="text-gray-700 space-y-1">
            <p><strong>ID:</strong> {record.id}</p>
            <p><strong>Service:</strong> {record.serviceType}</p>
            <p><strong>Contact:</strong> {record.contactPerson}</p>
            <p><strong>Email:</strong> {record.email}</p>
            <p><strong>Phone:</strong> {record.phone}</p>
            <p><strong>Location:</strong> {record.location}</p>
            <p><strong>Rating:</strong> {record.rating} </p>
            <p><strong>Last Used:</strong> {record.lastUsed}</p>
          </div>

        </div>
      </div>

    </>
  )
}

export default VendorCard