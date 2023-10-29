/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react'
import axios from "axios";
import {  useNavigate } from "react-router-dom";
import Swal from "sweetalert2"
import Sidebar from '../components/Sidebar'

function Admin() {
    const navigate = useNavigate();
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [productToDeleteIndex, setProductToDeleteIndex] = useState(null);

    const getLiquids = () => {
        setLoading(true);
        axios.get(
            `https://651eb45144a3a8aa4768d77a.mockapi.io/liquid`
        )
        .then((response) => {
            setData(response?.data);
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

    useEffect(() => {
        getLiquids()
    }, [])

    useEffect(() => {
        if (searchQuery === "") {
            getLiquids();
        }
    }, [searchQuery]);

    const handleDelete = (id) => {
        axios
        .delete(`https://651eb45144a3a8aa4768d77a.mockapi.io/liquid/${id}`)
        .then((response) => {
          Swal.fire({
            icon:'success',
            title: 'Berhasil menghapus data',
            confirmButtonText: "OK"
          })
          console.log('Data berhasil dihapus:', response);
          getLiquids();
          setShowDeleteModal(false);
          setProductToDeleteIndex(null);
        })
        .catch((error) => {
          Swal.fire({
            icon:'error',
            title: 'Gagal menghapus data',
            text: `Pesan kesalahan : ${error}`,
            confirmButtonText: "OK"
          })
        });
    }

    function formatRupiah(harga) {
        return new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
          minimumFractionDigits: 0,
        }).format(harga).replace(/\s/g, '.');
      }

    const handleShowDeleteModal = (id) => {
        setProductToDeleteIndex(id);
        setShowDeleteModal(true);
    };
  
    const handleCloseDeleteModal = () => {
        setShowDeleteModal(false);
        setProductToDeleteIndex(null);
    };
    
  return (
    <>
    <section>
        {/* Sidebar Start */}
        <Sidebar/>
        {/* Sidebar End */}


        <div className="p-1 sm:ml-64 bg-slate-200 h-screen">
            <div className="p-4 border-2 border-gray-200 border-solid rounded-sm border-gray-700">
                <h1 className='text-2xl text-[#1E2022]'>Daftar produk</h1>
                <div className='md:flex'>
                    <a
                        onClick={() => {
                            navigate('tambah')
                        }}
                        className="cursor-pointer text-sm flex items-center p-2 text-white rounded-sm bg-[#1E2022] w-[150px] mt-4 hover:bg-[#484d4e] group">
                        <svg className="flex-shrink-0 w-4 h-4 transition duration-75 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
                        </svg>
                        <span className="flex-1 ml-1 whitespace-nowrap">Tambah Produk</span>
                    </a>
                    <div className='mt-4 md:ml-5'>
                        <div className="block md:flex rounded-md">
                            <input 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search here..." type="text" className="py-2 px-3 pr-11 w-100 border-gray-200 outline outline-1 shadow-sm rounded-l-md text-sm focus:z-10 focus:outline-2 bg-white border-gray-700 text-[#1E2022]"/>
                            <button 
                            onClick={handleSearch}
                            className="px-4 min-w-fit h-9 rounded-r-md border border-l-0 border-gray-200 text-sm text-gray-500 bg-[#1E2022] border-gray-700 text-white hover:bg-[#484d4e]">Search</button>
                        </div>
                        </div>
                </div>
                <div className='mt-6'>
                    <div className="relative overflow-x-auto rounded-sm">
                        <table className="w-full text-sm text-left text-gray-500 text-gray-400">
                            <thead className="text-xs text-white uppercase bg-gray-50 bg-gray-700 text-white">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-center">
                                        No
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Nama
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Kategori
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        harga
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-center">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data &&
                                    data.map((item, index) => (
                                        <tr key={index} className="bg-white border-b bg-gray-800 border-gray-700 hover:bg-gray-900 cursor-pointer hover:text-white">
                                            <th
                                            onClick={() => navigate(`/admin/detail/${item?.id}`, {
                                                state: {
                                                    id: item.id,
                                                    nama: item.nama,
                                                    kategori: item.kategori,
                                                    gambar: item.gambar,
                                                    harga: item.harga,
                                                    deskripsi: item.deskripsi
                                                }
                                            })}
                                            scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-white text-center">
                                                {index+1}
                                            </th>
                                            <td 
                                            onClick={() => navigate(`/admin/detail/${item?.id}`, {
                                                state: {
                                                    id: item.id,
                                                    nama: item.nama,
                                                    kategori: item.kategori,
                                                    gambar: item.gambar,
                                                    harga: item.harga,
                                                    deskripsi: item.deskripsi
                                                    }
                                            })}
                                            className="px-6 py-4 ">
                                                {item?.nama}
                                            </td>
                                            <td 
                                            onClick={() => navigate(`/admin/detail/${item?.id}`, {
                                                state: {
                                                    id: item.id,
                                                    nama: item.nama,
                                                    kategori: item.kategori,
                                                    gambar: item.gambar,
                                                    harga: item.harga,
                                                    deskripsi: item.deskripsi
                                                    }
                                            })}
                                            className="px-6 py-4">
                                                {item?.kategori}
                                            </td>
                                            <td 
                                            onClick={() => navigate(`/admin/detail/${item?.id}`, {
                                                state: {
                                                    id: item.id,
                                                    nama: item.nama,
                                                    kategori: item.kategori,
                                                    gambar: item.gambar,
                                                    harga: item.harga,
                                                    deskripsi: item.deskripsi
                                                    }
                                            })}
                                            className="px-6 py-4">
                                                {formatRupiah(item?.harga)}
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className='flex gap-x-2'>
                                                    <a
                                                        onClick={() => navigate(`/admin/update/${item?.id}`, {
                                                            state: {
                                                                id: item.id,
                                                                nama: item.nama,
                                                                kategori: item.kategori,
                                                                gambar: item.gambar,
                                                                harga: item.harga,
                                                                deskripsi: item.deskripsi
                                                                }
                                                        })}
                                                        className="cursor-pointer text-sm flex items-center p-1 text-black rounded-lg bg-yellow-500 w-[60px] hover:bg-yellow-700 group">
                                                        <svg className="flex-shrink-0 w-4 h-4 transition duration-75 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                                                        <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/>
                                                        </svg>
                                                        <span className="flex-1 ml-1 whitespace-nowrap">Edit</span>
                                                    </a>
                                                    <a
                                                        data-toggle="modal"
                                                        data-target="#confirmationModal" 
                                                        onClick={() => handleShowDeleteModal(item.id)}
                                                        className="cursor-pointer text-sm flex items-center p-1 text-black rounded-lg bg-red-500 w-[75px] hover:bg-red-700 group">
                                                        <svg className="flex-shrink-0 w-4 h-4 transition duration-75 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                                                        <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/>
                                                        </svg>
                                                        <span className="flex-1 ml-1 whitespace-nowrap">Hapus</span>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                        {showDeleteModal && (
                            <div className="fixed inset-0 flex items-center justify-center z-50" id="confirmationModal">
                                <div className="modal-dialog" role="document">
                                <div className="modal-content bg-white shadow-lg rounded-lg">
                                    <div className="modal-header bg-gray-200 border-b p-4 rounded-t-lg flex justify-between">
                                    <h5 className="modal-title">Confirmation</h5>
                                    <button
                                        type="button"
                                        className="close"
                                        data-dismiss="modal"
                                        aria-label="Close"
                                        onClick={handleCloseDeleteModal}
                                    >
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                    </div>
                                    <div className="modal-body p-4">
                                    Are you sure you want to delete this product?
                                    </div>
                                    <div className="modal-footer bg-gray-200 border-t p-4 rounded-b-lg flex justify-around">
                                    <button
                                        type="button"
                                        className="my-2 bg-green-500 block text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
                                        onClick={handleCloseDeleteModal}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="button"
                                        className="my-2 bg-red-500 block text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
                                        onClick={() => handleDelete(productToDeleteIndex)}
                                    >
                                        Delete
                                    </button>
                                    </div>
                                </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Admin