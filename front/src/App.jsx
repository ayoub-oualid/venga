import React from "react";
import { Route, Routes } from "react-router-dom";
import { useAuth } from "./pages/auth/Session/useAuth";
import Dashboard from "./pages/Dashboard";
import Table from "./pages/Table";
import AuthLayout from "./components/Layout/AuthLayout";
import GuestLayout from "./components/Layout/GuestLayout";
import Login from "./pages/auth/Login";
import Blank from "./pages/Blank";
import NotFound from "./pages/NotFound";
import Form from "./pages/Form";
import Validation1 from "./pages/Validation1";
import Validation2 from "./pages/Validation2";
import Profile from "./pages/Profile";
import RegisterIndex from "./pages/auth/Register";
import Points from "./pages/Points";
import FlightList from "./pages/FlightList";
import TicketList from "./pages/TicketList";
function App() {

  const { user, loading, logout } = useAuth();

  return (
    <Routes>
      <Route path="/auth" element={<GuestLayout />}>
        <Route path="/auth/login" element={<Login />}></Route>
        <Route path="/auth/register" element={<RegisterIndex />}></Route>
      </Route>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/table" element={<Table />}></Route>
        <Route path="/blank" element={<Blank />}></Route>
        <Route path="/404" element={<NotFound />}></Route>
        <Route path="/form" element={<Form />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/validation1" element={<Validation1 />}></Route>
        <Route path="/validation2" element={<Validation2 />}></Route>
        <Route path="/points" element={<Points />}></Route>
        <Route path="/flights" element={<FlightList />}></Route>
        <Route path="/tickets" element={<TicketList />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
