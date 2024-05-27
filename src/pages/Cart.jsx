/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeItem,
  addItem,
  reduceQuantity,
  clearCart,
} from "../features/cartSlice";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { TrashIcon } from "@heroicons/react/24/outline";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const liquid = cart.items.slice(1);
  console.log("cart : ", liquid);
  const navigate = useNavigate();

  const handleDelete = (item) => {
    dispatch(removeItem(item.id));
    Swal.fire({
      icon: "success",
      text: "Produk berhasil dihapus",
      confirmButtonText: "OK",
    });
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

  const handleReduceQuantity = (itemId) => {
    dispatch(reduceQuantity(itemId));
  };

  const handleAddQuantity = (itemId) => {
    dispatch(addItem(cart.items.find((item) => item.id === itemId)));
  };

  let totalHarga = 0;
  cart.items.forEach((item) => {
    totalHarga += item.harga * item.kuantitas;
  });

  const handleBuy = () => {
    Swal.fire({
      icon: "success",
      text: "Pembelian berhasil!",
      confirmButtonText: "OK",
    }).then(() => {
      dispatch(clearCart());
      navigate("/");
    });
  };

  return (
    <section>
      {/* Navbar Start */}
      <Navbar />
      {/* Navbar End */}

      <div>
        <h1 className=" text-3xl font-bold mt-8 text-center mb-5 md:mb-0">
          Keranjangmu
        </h1>

        {liquid.length == 0 ? (
          <div className="h-72 flex items-center text-center justify-center font-medium text-2xl">
            Keranjang belanjamu masih kosong
          </div>
        ) : (
          <div className="flex flex-col items-center md:grid grid-cols-5 mt-2">
            {liquid &&
              liquid.map((item, index) => (
                <div className="m-5" key={index}>
                  <div className="w-60 md:w-40 border border-gray-200 rounded-lg shadow bg-gray-800 border-gray-700 z-0 transform transition-transform hover:scale-102 hover:shadow-md">
                    <a className="cursor-pointer flex justify-center">
                      <img
                        className="rounded-t-lg object-fill"
                        src={item.gambar}
                        alt=""
                      />
                    </a>
                    <div className="p-1 cursor-pointer h-[185px] flex flex-col justify-between">
                      <a className="">
                        <h5 className="mb-2 text-sm text-center  font-md tracking-tight text-gray-900 text-white">
                          {item?.nama}
                        </h5>
                      </a>
                      <div>
                        <h5 className="mb-2 mt-3 text-xs text-center tracking-tight text-gray-900 text-white">
                          {formatRupiah(item?.harga)}
                        </h5>
                        {item.kuantitas > 0 && (
                          <div className="text-white flex justify-evenly">
                            <button
                              className="rounded-sm px-1 hover:bg-yellow-800 focus:outline-none focus:ring-yellow-300 bg-yellow-500 hover:bg-yellow-700"
                              onClick={() => handleReduceQuantity(item.id)}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="1em"
                                viewBox="0 0 448 512"
                              >
                                <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
                              </svg>
                            </button>
                            <span>{item.kuantitas}</span>
                            <button
                              onClick={() => handleAddQuantity(item.id)}
                              className="rounded-sm px-1 hover:bg-yellow-800 focus:outline-none focus:ring-yellow-300 bg-yellow-500 hover:bg-yellow-700"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="1em"
                                viewBox="0 0 448 512"
                              >
                                <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                              </svg>
                            </button>
                          </div>
                        )}

                        <div className="flex justify-center items-center mt-3">
                          <a
                            onClick={() => handleDelete(item)}
                            className="inline-flex items-center px-3 py-1 mb-2 text-sm font-medium text-center text-white rounded-sm hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 bg-blue-500 hover:bg-blue-700"
                          >
                            Hapus
                            <TrashIcon width={18} height={18} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
        {liquid.length > 0 ? (
          <div className="flex items-center justify-evenly">
            <div>
              <h1 className=" text-md font-medium pl-5">
                Total barang :{" "}
                {cart.items
                  ? cart.items.length - 1 == -1
                    ? 0
                    : cart.items.length - 1
                  : 0}
              </h1>
              <h1 className=" text-md font-medium pl-5">
                Total harga : {formatRupiah(totalHarga)}
              </h1>
            </div>
            <button
              onClick={() =>
                navigate("/bayar", {
                  state: {
                    Total: totalHarga,
                  },
                })
              }
              className="bg-red-600 text-white py-3 px-10 hover:bg-red-500 rounded-full"
            >
              Beli
            </button>
          </div>
        ) : (
          <div></div>
        )}
      </div>

      {/* Footer Start */}
      <Footer />
      {/* Footer End */}
    </section>
  );
}

export default Cart;
