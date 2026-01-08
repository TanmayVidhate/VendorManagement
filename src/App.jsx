import  {Routes, Route } from "react-router-dom"

//import components
import VendorList from "./Components/VendorList"
import VendorCard from "./Components/VendorCard"

//import Views
import AddNewVendor from "./Views/AddNewVendor"
import ViewAllDetailsOfVendor from "./Views/ViewAllDetailsOfVendor"


function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<VendorList />} />
        <Route path="/viewallDetailsofvendor/:id" element={<ViewAllDetailsOfVendor />} />
        <Route path="/addvendor" element={<AddNewVendor/>} />
      </Routes>
    </>
  )
}

export default App
