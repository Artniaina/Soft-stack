import { BrowserRouter, Routes, Route } from "react-router-dom"
import DashboardLayout from "../layouts/DashboardLayout"
import Homepage from "../pages/Homepage"

const MainRoute = () => {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<DashboardLayout/>}/>
    <Route path="/home" element={<Homepage/>}/>
  </Routes>
  </BrowserRouter>
  )
}
export default MainRoute