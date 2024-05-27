import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "../contexts/authContext/Index";
import Login from "../pages/Login";
import Index from "../pages/Index";
import Produk from "../pages/Produk";
import Detail from "../pages/Detail";
import About from "../pages/About";
import Support from "../pages/Support";
import Cart from "../pages/Cart";
import Admin from "../pages/Admin";
import DetailAdmin from "../pages/DetailAdmin";
import Update from "../pages/Update";
import Tambah from "../pages/Tambah";
import Register from "../pages/Register";
// import Payment from "../pages/payment";
import Bayar from "../pages/Bayar";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Index />} path="/" />
          <Route element={<Cart />} path="/cart" />
          <Route element={<About />} path="/about" />
          <Route element={<Support />} path="/support" />
          {/* <Route element={<Payment />} path="/payment" /> */}
          <Route element={<Bayar />} path="/bayar" />
          <Route element={<Produk />} path="/produk" />
          <Route element={<Detail />} path="/produk/:id" />
          <Route element={<Login />} path="/auth/login" />
          <Route element={<Register />} path="/auth/register" />
          <Route element={<Admin />} path="/admin" />
          <Route element={<DetailAdmin />} path="/admin/detail/:id" />
          <Route element={<Tambah />} path="/admin/tambah" />
          <Route element={<Update />} path="/admin/update/:id" />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
