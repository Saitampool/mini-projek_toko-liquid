/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import Swal from "sweetalert2"
import Sidebar from '../components/Sidebar'

function Tambah() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        nama: "",
        kategori: "",
        gambar: "",
        deskripsi: "",
        harga: 0,
    });

    const handleChange =  (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newProduk = {
            nama: data.nama,
            kategori: data.kategori,
            gambar: data.gambar,
            deskripsi: data.deskripsi,
            harga: data.harga,
          };

        try {
          const response  = await axios.post("https://651eb45144a3a8aa4768d77a.mockapi.io/liquid", newProduk);

          if (response.status === 201) {
            Swal.fire({
              icon:'success',
              title: 'Berhasil menambah data',
              confirmButtonText: "OK"
            })
            console.log('Data berhasil ditambahkan:', response.data);
            navigate(-1);
        }
        } catch (error) {
          Swal.fire({
            icon:'error',
            title: 'Gagal menambah data',
            text: `Pesan kesalahan : ${error}`,
            confirmButtonText: "OK"
        })
        }
    }
    

    console.log(data)
    
    return (
        <section>
            <Sidebar/>

            <div className="p-1 sm:ml-64 bg-slate-200 h-screen">
                <div className="p-4 border-2 border-gray-200 border-solid rounded-sm dark:border-gray-700 h-[567px]">
                <h1 className='text-2xl text-[#1E2022]'>Tambah produk</h1>
                <a
                onClick={() => {
                    navigate(-1)
                }}
                    className="cursor-pointer text-sm flex items-center p-2 text-white rounded-sm bg-[#1E2022] w-[100px] mt-4 hover:bg-[#484d4e] group">
                    <svg className="flex-shrink-0 w-4 h-4 transition duration-75 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                    <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
                    </svg>
                    <span className="flex-1 ml-1 whitespace-nowrap">Kembali</span>
                </a>

                {/* Form Start */}
                <div className='mt-4'>
                    <form onSubmit={handleSubmit}>
                        <div className='form-group mb-3'>
                            <label htmlFor="nama">Nama</label>
                            <input 
                                id="nama"
                                name="nama"
                                type="text"
                                autoComplete='off'
                                placeholder='Masukan nama...'
                                value={data.nama}
                                onChange={handleChange}
                                required
                                className="w-full rounded-md border-1 px-4 py-1 outline-1 outline outline-black bg-white focus:border-black focus:outline-2"
                            />
                        </div>
                        <div className='form-group mb-3'>
                            <label htmlFor="nama">Gambar</label>
                            <input 
                                id="gambar"
                                name="gambar"
                                type="text"
                                autoComplete='off'
                                placeholder='Masukan link gambar...'
                                value={data.gambar}
                                onChange={handleChange}
                                required
                                className="w-full rounded-md border-1 px-4 py-1 outline-1 outline outline-black bg-white focus:border-black focus:outline-2"
                            />
                        </div>
                        <div className='flex'>
                            <div className='form-group mb-3'>
                                <label htmlFor="nama">Harga</label>
                                <input 
                                    id="harga"
                                    name="harga"
                                    type="number"
                                    autoComplete='off'
                                    placeholder='Masukan harga...'
                                    value={data.harga}
                                    onChange={handleChange}
                                    required
                                    className="w-full rounded-md border-1 px-4 py-1 outline-1 outline outline-black bg-white focus:border-black focus:outline-2"
                                />
                            </div>
                            <div className='form-group mb-3 ml-4'>
                                <label htmlFor='kategori'>Kategori</label>
                                    <select
                                        name='kategori'
                                        id="kategori"
                                        placeholder="kategori.."
                                        value={data.kategori}
                                        onChange={handleChange}
                                        required
                                        className='w-full rounded-md py-1 pl-2 outline-1 outline outline-black bg-white focus:border-black focus:outline-2'
                                    >
                                        <option value=''>Pilih kategori</option>
                                        <option value="freebase">freebase</option>
                                        <option value="pods">pods</option>
                                        <option value="saltnic">saltnic</option>
                                    </select>
                            </div>
                        </div>
                        <div className='form-group mb-3'>
                            <label htmlFor="nama">Deskripsi</label>
                            <textarea
                                id="deskripsi"
                                name='deskripsi'
                                rows="5"
                                autoComplete='off'
                                placeholder='Masukan deskripsi...'
                                value={data.deskripsi}
                                required
                                onChange={handleChange}
                                className="w-full resize-none rounded border-1 px-4 py-1 outline-1 outline outline-black bg-white focus:border-black focus:outline-2"
                            />
                        </div>
                        <button
                            type="submit" 
                            className="cursor-pointer text-sm flex items-center p-2 text-white rounded-sm bg-green-700 w-[100px] mt-4 hover:bg-green-800 group">
                            <svg className="flex-shrink-0 w-4 h-4 transition duration-75 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                                <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V173.3c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32H64zm0 96c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V128zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
                            </svg>
                            <span className="flex-1 ml-1 whitespace-nowrap">Simpan</span>
                        </button>
                    </form>
                    {/* Form End */}
                </div>
                </div>
            </div>
        </section>
    )
}

export default Tambah