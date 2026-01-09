import { useNavigate } from "react-router-dom";
import { useState } from "react";

// dummy data
import { tableHeadings, mockVendors } from "../data/Vendor";

// components
import VendorTableRow from "./VendorTableRow";
import FilterBar from "./FilterBar";

// icons
import { Plus } from "lucide-react";

function VendorList() {
  const [searchText, setSearchText] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [serviceTypeFilter, setServiceTypeFilter] = useState("");

  const navigate = useNavigate();

  // filtering logic
  const filteredVendors = mockVendors.filter((vendor) => {
    const searchMatch =
      !searchText ||
      vendor.name.toLowerCase().includes(searchText.toLowerCase());

    const statusMatch = !statusFilter || vendor.status === statusFilter;
    const typeMatch =
      !serviceTypeFilter || vendor.serviceType === serviceTypeFilter;

    return searchMatch && statusMatch && typeMatch;
  });

  return (
    <div className="min-h-screen w-full bg-gradient-to-t from-red-500 to-fuchsia-600 px-4 sm:px-6 lg:px-10">
      
      {/* Filter Bar */}
      <div className="pt-6 flex justify-center">
        <FilterBar
          searchText={searchText}
          setSearchText={setSearchText}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          serviceTypeFilter={serviceTypeFilter}
          setServiceTypeFilter={setServiceTypeFilter}
        />
      </div>

      {/* Table Wrapper */}
      <div className="mt-6 flex justify-center">
        <div className="w-full max-w-7xl overflow-x-auto rounded-lg shadow-lg">
          <table className="min-w-[900px] w-full text-white font-semibold">
            <thead className="bg-white/85 text-black">
              <tr>
                {tableHeadings.map((heading, i) => (
                  <th key={i} className="p-3 text-center whitespace-nowrap">
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <VendorTableRow filteredVendors={filteredVendors} />
            </tbody>
          </table>
        </div>
      </div>

      {/* Floating Add Button */}
      <button
        onClick={() => navigate("/addvendor")}
        className="fixed right-6 bottom-6 bg-black/40 hover:bg-black/60 p-4 rounded-full transition"
      >
        <Plus className="text-white" size={32} />
      </button>
    </div>
  );
}

export default VendorList;
