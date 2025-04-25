import { BrowserRouter, Routes, Route } from "react-router-dom"
import DashboardLayout from "../layouts/DashboardLayout"
import Homepage from "../pages/Homepage"
import LoginPage from "../pages/LoginPage"
import SignUpPage from "../pages/SignUpPage"

const MainRoute = () => {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/home" element={<Homepage/>}/>
    <Route path="/" element={<DashboardLayout/>}/>
    <Route path="/signUp" element={<SignUpPage/>}/>
    <Route path="/login" element={<LoginPage/>}/>
  </Routes>
  </BrowserRouter>
  )
}
export default MainRoute