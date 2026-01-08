import React from 'react'

function FilterBar({ searchText, setSearchText, statusFilter, setStatusFilter, serviceTypeFilter, setServiceTypeFilter }) {
  return (
    <>
      <div className='w-full  '>
        <div className='w-1/2 m-auto flex justify-evenly items-center border border-red-700'>
          {/* Search Bar */}
          <div className=' border border-red-500'>
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search vendor By Name"
              className="w-full border rounded px-3 py-2  "
            />
          </div>
          {/* Status */}
          <div>
            <label className="font-semibold mr-2">Status:</label>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="border rounded px-3 py-2"
            >
              <option value="">All</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          {/* Service Type */}
          <div>
            <label className="font-semibold mr-2">Service Type:</label>
            <select
              value={serviceTypeFilter}
              onChange={(e) => setServiceTypeFilter(e.target.value)}
              className="border rounded px-3 py-2"
            >
              <option value="">Select Service Type</option>
              <option value="Fuel">Fuel</option>
              <option value="Catering">Catering</option>
              <option value="Ground Handling">Ground Handling</option>
              <option value="Permits">Permits</option>
            </select>
          </div>
        </div>
      </div>
    </>
  )
}

export default FilterBar