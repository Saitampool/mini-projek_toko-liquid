/* eslint-disable no-unused-vars */
import {useState, useEffect} from "react";
import {  useNavigate } from "react-router-dom";
import axios from "axios";
import { ShoppingCartIcon, FaceSmileIcon} from "@heroicons/react/24/outline"
import Swal from "sweetalert2"
import Navbar from '../components/Navbar'
import Slider from "../components/Slider";
import Footer from "../components/Footer";

function Index() {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const getLiquids = () => {
    setLoading(true);
    axios.get(
        `https://651eb45144a3a8aa4768d77a.mockapi.io/liquid`
    )
    .then((response) => {
        const selectProduk = response?.data.slice(0, 6);
        setData(selectProduk);
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

  useEffect(() => {
    getLiquids()
  }, [])
  
  return (
    <>
      <section className="bg-[#F0F5F9]">
        <Navbar/>
        <div className="md:h-screen" id="home">
          <div className="text-center pt-7">
            <h1 className="text-3xl font-bold" >Mas Liquid</h1>
            <p className="mt-1 text-lg	 font-medium">Toko Vape Mas Liquid hanya menjual produk original dari brand-brand terkemuka. <br/> Produk dijamin original bergaransi.</p>
          </div>
          <div className="flex justify-center mt-3">
            <a
                  type="submit"
                  href="#produk"
                  className="w-[120px] h-10 bg-[#1E2022] text-white border-none focus:outline-none hover:bg-[#484d4e] rounded-sm flex items-center justify-center"
                  >
                  Buy now
            </a>
          </div>
          <div className="hidden md:flex items-center justify-center mt-4">
            <Slider/>
          </div>
        </div>

        {/* Produk Start */}
        <div>
          <h1 className="text-center text-3xl font-bold pt-8" id="produk">Produk Kami</h1>

        {
          loading ? (
            <div className="h-72 flex items-center justify-center font-medium text-2xl">Loading....</div>
          ) : (
            <div className="flex flex-col md:flex-row items-center gap-x-1">
              {
                data &&
                data.map((item, index) => (
                <div className="m-5" key={index}>
                  <div className="w-60 md:w-40 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 z-0 transform transition-transform hover:scale-105 hover:shadow-md">
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
                          <img className="rounded-t-lg object-fill" src={item.gambar} alt="" />
                      </a>
                      <div className="p-1 cursor-pointer h-20">
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
                          >
                              <h5 className="mb-2 pt-4 text-sm text-center  font-md tracking-tight text-gray-900 dark:text-white">{item.nama}</h5>
                          </a>
                      </div>
                  </div>
                </div>
                ))
              }
            </div>
          )
        }
        </div>
        {/* Produk End */}

        {/* TentangKami Start */}
        <div className="mt-[20px] md:mt-4">
          <div className="block md:flex md:items-center">
            <div className="pl-0 md:pl-32">
              <img src="../../public/about.jpg" alt="" className=""/>
            </div>
            <div className="p-5 h-full">
              <h1 className="text-3xl font-bold pb-8 text-center md:text-left">Tentang Kami</h1>
              <div className='flex justify-center md:block'>
                <p className="text-[#1E2022] flex items-center mb-1 font-semibold">
                  <FaceSmileIcon width={20} height={20} />
                  Layanan terbaik bagi konsumen
                </p>
              </div>
              <div className='flex justify-center md:block'>
                <p className="text-[#1E2022] flex items-center mb-1  font-semibold">
                  <ShoppingCartIcon width={20} height={20} />
                  Hanya menjual produk original
                </p>
              </div>
              <p className="mt-4 text-[#1E2022] font-medium text-sm text-center md:text-left">
              Toko Vape Mas Liquid hanya menjual produk original dari brand-brand terkemuka. Produk dijamin original bergaransi.
              </p>
            </div>
          </div>
        </div>
        {/* TentangKami End */}

        {/* Footer Start */}
        <Footer/>
        {/* Footer End */}
      </section>
    </>
  )
}

export default Index