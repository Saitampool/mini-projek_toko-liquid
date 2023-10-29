/* eslint-disable no-unused-vars */
import React, {useRef, useState, useEffect} from 'react'
import {  useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cartSlice";
import axios from "axios";
import Cookies from "js-cookie";
import Swal from "sweetalert2"
import {ChevronDownIcon, ChevronUpIcon, PlusCircleIcon} from "@heroicons/react/24/outline"
import Navbar from '../components/Navbar'
import Footer from "../components/Footer";

function Produk() {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [searchQuery, setSearchQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [loading, setLoading] = useState(true);
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();

  const getLiquids = (kategori) => {
    setLoading(true);
    axios.get(
      `https://651eb45144a3a8aa4768d77a.mockapi.io/liquid?kategori=${kategori ? kategori : ``}`
    )
    .then((response) => {
        setData(response?.data)
        setLoading(false);
    })
    .catch((error) => {
      setLoading(false);
      Swal.fire({
          icon:'error',
          title: 'Gagal mengambil data',
          text: `Pesan kesalahan : ${error}`,
          confirmButtonText: "OK"
      })
    })
  }

  const handleSearch = () => {
    const liquidCopy = [...data];
    const filteredLiquids = liquidCopy.filter((item) =>
      item.nama.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setData(filteredLiquids);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const closeDropdownOnOutsideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setShowDropdown(false);
    }
  };

  const handleAddToCart = (item) => {
    const token = Cookies.get("token");
    if (!token) {
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
        id: item?.id,
        nama: item?.nama,
        gambar: item?.gambar,
        kategori: item?.kategori,
        deskripsi: item?.deskripsi,
        harga: item?.harga,
      };
      dispatch(addItem(newItem));
      Swal.fire({
        icon: "success",
        text: "Produk berhasil ditambahkan",
        confirmButtonText: "OK",
      })
    }
  };

  function formatRupiah(harga) {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(harga).replace(/\s/g, '.');
  }

  useEffect(() => {
    document.addEventListener("mousedown", closeDropdownOnOutsideClick);

    return () => {
      document.removeEventListener("mousedown", closeDropdownOnOutsideClick);
    };
  }, []);

  useEffect(() => {
    getLiquids()
  }, [])

  useEffect(() => {
    if (searchQuery === "") {
      getLiquids();
    }
  }, [searchQuery]);
  
  return (
    <section>
        <Navbar/>
        <h1 className="text-3xl font-bold  text-center mt-7" >Produk Kami</h1>
        <div className="block md:flex items-center justify-center mt-5">
          <div>
            <div className="block md:flex rounded-md px-5 md:px-0">
              <input 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search here..." type="text" className="py-2 px-3 mx-auto md:pr-11 text-center md:text-left rounded-md md:rounded-r-none w-full md:w-100 border-gray-200 outline outline-1 shadow-sm rounded-l-md text-sm focus:z-10 focus:outline-2 bg-white border-gray-700 text-[#1E2022]"/>
              <button 
              onClick={handleSearch}
              className="px-4 h-9 mb-4 md:mb-0 items-center mt-3 md:mt-0 w-full md:w-0 min-w-fit rounded-md md:rounded-l-none rounded-r-md border border-l-0 border-gray-200 text-sm text-gray-500 bg-[#1E2022] border-gray-700 text-white hover:bg-[#484d4e]">Search</button>
            </div>
          </div>
        <div className="flex justify-center md:block md:ml-10" ref={dropdownRef}>
            <button onClick={toggleDropdown} className="cursor-pointer text-[#1E2022] bg-white rounded-md p-1 px-4 outline outline-2 outline-[#1E2022] flex items-center">Kategori&nbsp;&nbsp;{showDropdown == false ? <ChevronDownIcon width={20} height={20} /> : <ChevronUpIcon width={20} height={20} />}</button>
              {showDropdown && (
                  <ul className="absolute z-50 mt-10 md:mt-2 rounded-md bg-white text-gray-800 hover:outline-none text-center">
                      <li><a onClick={() => getLiquids("")}  className="cursor-pointer block text-sm px-5  py-2 hover:bg-[#1E2022] rounded-sm hover:outline-none hover:text-white">All category</a></li>
                      <li><a onClick={() => getLiquids("freebase")} className="cursor-pointer block text-sm px-5  py-2 hover:bg-[#1E2022] rounded-sm hover:outline-none hover:text-white">Freebase</a></li>
                      <li><a onClick={() => getLiquids("pods")} className="cursor-pointer block text-sm px-5 py-2 hover:bg-[#1E2022] rounded-sm hover:outline-none hover:text-white">Pods</a></li>
                      <li><a onClick={() => getLiquids("saltnic")} className="cursor-pointer block text-sm px-5  py-2 hover:bg-[#1E2022] rounded-sm hover:outline-none hover:text-white">Salt Nic</a></li>
                  </ul>
              )}
          </div>
        </div>
        {
          loading ? (
            <div className="h-72 flex items-center justify-center font-medium text-2xl">Loading....</div>
          ) : (
            <div className='flex flex-col md:grid md:grid-cols-5 mt-2'>
              {
                data && 
                data.map((item, index) => (
                  <section className="mx-auto my-5" key={index}>
                      <div className="w-60 md:w-40 h-100 border border-gray-200 rounded-lg shadow bg-gray-800 border-gray-700 z-0 transform transition-transform hover:scale-105 hover:shadow-md">
                          <a 
                            onClick={() => navigate(`/produk/${item?.id}`, {
                              state: {
                                id: item.id,
                                nama: item.nama,
                                kategori: item.kategori,
                                gambar: item.gambar,
                                harga: item.harga,
                                deskripsi: item.deskripsi
                              }
                            })}
                          className="cursor-pointer flex justify-center">
                              <img className="rounded-t-lg object-fill" src={item?.gambar} alt="" />
                          </a>
                          <div className="p-2 cursor-pointer h-[160px] flex flex-col justify-between">
                              <a 
                                onClick={() => navigate(`/produk/${item?.id}`, {
                                  state: {
                                    id: item.id,
                                    nama: item.nama,
                                    gambar: item.gambar,
                                    kategori: item.kategori,
                                    harga: item.harga,
                                    deskripsi: item.deskripsi
                                  }
                                })}
                              >
                                <h5 className="mb-2 text-sm text-center font-medium tracking-tight text-gray-900 text-white">{item?.nama}</h5>
                              </a>
                              <div>
                                <h5 className="mb-2 mt-3 text-xs text-center tracking-tight text-gray-900 text-white">{formatRupiah(item?.harga)}</h5>
                                <div className="flex justify-center">
                                <a 
                                onClick={() => handleAddToCart(item)}
                                className="cursor-pointer inline-flex items-center px-8 md:px-3 py-1 mb-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">
                                    add 
                                    <PlusCircleIcon width={20} height={20} />
                                </a>
                                </div>
                              </div>
                          </div>
                      </div>
                    </section>
                ))
              }
            </div>
          )
        }
        
        {/* Footer Start */}
        <Footer/>
        {/* Footer End */}
    </section>
  )
}

export default Produk