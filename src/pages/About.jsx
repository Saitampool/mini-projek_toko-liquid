/* eslint-disable no-unused-vars */
import React from 'react'
import { ShoppingCartIcon, FaceSmileIcon} from "@heroicons/react/24/outline"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function About() {
  return (
    <section>
        {/* Navbar Start */}
        <Navbar/>
        {/* Navbar End */}

        
        {/* TentangKami Start */}
        <div className='my-20'>
          <div className="flex items-center">
            <div className="pl-32">
              <img src="../../public/about.jpg" alt="" className=""/>
            </div>
            <div className="p-5 h-full">
              <h1 className=" text-3xl font-bold pb-8">Tentang Kami</h1>
              <p className="text-[#1E2022] flex items-center mb-1 font-semibold">
                <FaceSmileIcon width={25} height={25} />
                Layanan terbaik bagi konsumen
              </p>
              <p className="text-[#1E2022] flex items-center mb-1  font-semibold">
                <ShoppingCartIcon width={25} height={25} />
                Hanya menjual produk original
              </p>
              <p className="mt-4 text-[#1E2022] font-medium text-sm">
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
  )
}

export default About