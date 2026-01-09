// import component
import Label from "./Label";

function FilterBar({ searchText, setSearchText, statusFilter, setStatusFilter, serviceTypeFilter, setServiceTypeFilter }) {
  return (
    <div className="w-full px-4">
      <div className="max-w-6xl mx-auto  bg-white/75 backdrop-blur rounded-xl shadow-lg p-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between
      ">
        {/* Search */}
        <div className="w-full sm:w-[40%]">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search vendor by name"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
          />
        </div>

        {/* Status */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Label title="Status" />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border rounded-lg px-3 py-2 focus:outline-none"
          >
            <option value="">All</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        {/* Service Type */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Label  title="Service Type" />
          <select
            value={serviceTypeFilter}
            onChange={(e) => setServiceTypeFilter(e.target.value)}
            className="border rounded-lg px-3 py-2 focus:outline-none"
          >
            <option value="">All</option>
            <option value="Fuel">Fuel</option>
            <option value="Catering">Catering</option>
            <option value="Ground Handling">Ground Handling</option>
            <option value="Permits">Permits</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default FilterBar;
