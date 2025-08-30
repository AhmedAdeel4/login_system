import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import './App.css';
import Layout from "./Pages/Layout/Layout";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import PNotLogin from "./Components/Protect/PNotLogin";
import PLogin from "./Components/Protect/PLogin";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>

            <Route path="" element={<PLogin><Outlet /></PLogin>}>
              <Route index element={<Home />} />
              <Route path="*" element={'<NoPage />'} />
            </Route>

            <Route path="" element={<PNotLogin><Outlet /></PNotLogin>}>
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<SignUp />} />
              <Route path="forgotpassword" element={<ForgotPassword />} />
            </Route>
            
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
