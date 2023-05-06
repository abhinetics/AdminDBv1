import { BrowserRouter, Route, Routes } from "react-router-dom";
import Customers from "../../Pages/Customers";
import Dashboard from "../../Pages/Dashbaord";
import Featured from "../../Pages/Feature";
import Social from "../../Pages/Social";
import Login from "../../Login";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element= {<Login/>}> </Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/featured" element={<Featured />}></Route>
      <Route path="/social" element={<Social />}></Route>
      <Route path="/customers" element={<Customers />}></Route>
    </Routes>
  );
}
export default AppRoutes;
