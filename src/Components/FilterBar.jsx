import React from 'react'

function FilterBar({ searchText, setSearchText }) {
  return (
    <>
      <div className='w-full '>
        <div className='w-3/5 m-auto text-center '>

          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search vendor..."
            className="  border rounded px-3 py-2 w-full md:w-1/3"
          />

        </div>
      </div>
    </>
  )
}

export default FilterBar