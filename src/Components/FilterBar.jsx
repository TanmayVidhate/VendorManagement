//import component
import Label from "./Label"

function FilterBar({ searchText, setSearchText, statusFilter, setStatusFilter, serviceTypeFilter, setServiceTypeFilter }) {
  return (
    <>
      <div className='w-full  '>
        <div className='w-1/2 m-auto flex justify-evenly items-center '>
          {/* Search Bar */}
          <div className=' '>
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search vendor By Name"
              className="w-full border rounded px-3 py-2  "
            />
          </div>
          {/* Status */}
          <div className="flex justify-center items-center gap-1">
            <Label title="Status"/>
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
          <div className="flex justify-center items-center gap-1">
            <Label title="Service Type"/>
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