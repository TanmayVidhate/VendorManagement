import  {Routes, Route } from "react-router-dom"

//import components
import VendorList from "./Components/VendorList"
import VendorCard from "./Components/VendorCard"

//import Views
import AddNewVendor from "./Views/AddNewVendor"


function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<VendorList />} />
        <Route path="/vendorcard/:id" element={<VendorCard />} />
        <Route path="/addvendor" element={<AddNewVendor/>} />
      </Routes>
    </>
  )
}

export default App
