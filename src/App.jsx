import  {Routes, Route } from "react-router-dom"

//import components
import VendorList from "./Components/VendorList"
import VendorCard from "./Components/VendorCard"

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<VendorList />} />
        <Route path="/vendorcard/:id" element={<VendorCard />} />
      </Routes>
    </>
  )
}

export default App
