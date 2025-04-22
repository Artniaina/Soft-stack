import { BrowserRouter, Routes, Route } from "react-router-dom"
import DashboardLayout from "../layouts/DashboardLayout"

const MainRoute = () => {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<DashboardLayout/>}/>
  </Routes>
  </BrowserRouter>
  )
}
export default MainRoute