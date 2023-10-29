/* eslint-disable no-unused-vars */
import React from 'react'
import {useNavigate, useLocation} from 'react-router-dom'
import Sidebar from '../components/Sidebar'

function DetailAdmin() {
  const navigate = useNavigate();
  const location = useLocation();
  const {state} = location
  const { id, nama, gambar, harga, deskripsi, kategori } = state;
  function formatRupiah(harga) {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(harga).replace(/\s/g, '.');
  }

  return (
    <>
      <section>
          <Sidebar/>

          <div className="p-1 sm:ml-64 bg-slate-200 h-screen">
            <div className="p-4 border-2 border-gray-200 border-solid rounded-sm dark:border-gray-700 h-[567px]">
            <h1 className='text-2xl text-[#1E2022]'>Detail produk</h1>
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
            <div className='flex mt-16 pb-8'>
          <div className='w-80 '>
            <img className='rounded-md' src={gambar} alt="" />
          </div>
          <div className='p-5 pl-8'>
            <h1 className='text-2xl font-semibold'>{nama}</h1>
            <p className='mt-7'><span className='font-medium'>Harga</span> : {formatRupiah(harga)}</p>
            <p className='mt-2'><span className='font-medium'>Kategori</span> : {kategori}</p>
            <p className='mt-2'><span className='font-medium'>Deskripsi</span> : {deskripsi}</p>
          </div>
        </div>
            </div>
          </div>
      </section>
    </>
  )
}

export default DetailAdmin