import { BrowserRouter, Routes, Route } from "react-router-dom";

// Páginas
import Login from "../components/pages/Login/Login";
import Register from "../components/pages/Register/Register";
import Home from "../components/pages/Home/Home";
import Destinos from "../components/pages/Destinos/Destinos";
import Lima from "../components/pages/Lima/Lima";
import Perfil from "../components/pages/Perfil/Perfil";
import Recojo from "../components/pages/Recojo/Recojo";
import ReservaFechas from "../components/pages/ReservaFechas/ReservaFechas";
import ReservaHabitacion from "../components/pages/ReservaHabitacion/ReservaHabitacion";
import Pago from "../components/pages/Pago/Pago";
import Voucher from "../components/pages/Voucher/Voucher";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/destinos" element={<Destinos />} />
        <Route path="/lima" element={<Lima />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/recojo" element={<Recojo />} />
        <Route path="/reserva-fechas" element={<ReservaFechas />} />
        <Route path="/reserva-habitacion" element={<ReservaHabitacion />} />
        <Route path="/pago" element={<Pago />} />
        <Route path="/voucher" element={<Voucher />} />
      </Routes>
    </BrowserRouter>
  );
}
