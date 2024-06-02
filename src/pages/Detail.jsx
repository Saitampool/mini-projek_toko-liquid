/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cartSlice";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
// import Cookies from "js-cookie";
import Swal from "sweetalert2";
import { useAuth } from "../contexts/authContext/Index";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Detail() {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();
  const location = useLocation();
  const dispatch = useDispatch();
  const { state } = location;
  const { id, nama, gambar, harga, deskripsi, kategori, stok } = state;

  const handleAddToCart = (item) => {
    // const token = Cookies.get("token");
    if (!userLoggedIn) {
      Swal.fire({
        icon: "warning",
        title: "Tolong login terlebih dahulu",
        confirmButtonText: "OK",
      }).then((res) => {
        if (res.isConfirmed) {
          navigate("/auth/login");
        }
      });
    } else {
      const newItem = {
        id: id,
        nama: nama,
        gambar: gambar,
        kategori: kategori,
        deskripsi: deskripsi,
        harga: harga,
      };
      dispatch(addItem(newItem));
      Swal.fire({
        icon: "success",
        text: "Produk berhasil ditambahkan",
        confirmButtonText: "OK",
      });
    }
  };

  function formatRupiah(harga) {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    })
      .format(harga)
      .replace(/\s/g, ".");
  }

  return (
    <>
      <section>
        <Navbar />

        <div className="ml-8 md:ml-56">
          <a
            onClick={() => {
              navigate(-1);
            }}
            className="cursor-pointer text-sm flex items-center p-2 text-white rounded-sm bg-[#1E2022] w-[100px] mt-4 hover:bg-[#484d4e] group"
          >
            <svg
              className="flex-shrink-0 w-4 h-4 transition duration-75 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 448 512"
            >
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
            <span className="flex-1 ml-1 whitespace-nowrap">Kembali</span>
          </a>
        </div>

        <div className="md:flex mt-5 pb-8">
          <div className="w-80 md:ml-56 mx-auto md:mx-0">
            <img className="rounded-md" src={gambar} alt="" />
          </div>
          <div className="p-5 pl-8">
            <h1 className="text-2xl font-semibold">{nama}</h1>
            <p className="mt-7">
              <span className="font-medium">Harga</span> : {formatRupiah(harga)}
            </p>
            <p className="mt-2">
              <span className="font-medium">Kategori</span> : {kategori}
            </p>
            <p className="mt-2">
              <span className="font-medium">Deskripsi</span> : {deskripsi}
            </p>
            <p className="mt-2">
              <span className="font-medium">Stok</span> : {stok}
            </p>
            <div className="flex justify-center md:block mt-5">
              <a
                onClick={() =>
                  handleAddToCart(id, nama, gambar, harga, deskripsi, kategori)
                }
                className="cursor-pointer inline-flex items-center px-8 md:px-3 py-1 mb-2 text-sm font-medium text-center text-white bg-blue-700 rounded-sm hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
              >
                add
                <PlusCircleIcon width={20} height={20} />
              </a>
            </div>
          </div>
        </div>

        <Footer />
      </section>
    </>
  );
}

export default Detail;
