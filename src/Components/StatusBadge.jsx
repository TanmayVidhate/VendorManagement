import React from 'react'

import { mockVendors } from '../data/Vendor'

function StatusBadge({ status }) {
  
  return (
    <span className={`px-7 py-3 rounded-full text-justify  ${status === "Active" ? "bg-green-200 text-green-700" : "bg-gray-300 text-gray-500"}`} >{status}</span> 
  )
}

export default StatusBadge