/* eslint-disable no-unused-vars */
import React from 'react'
import { ShoppingCartIcon, FaceSmileIcon} from "@heroicons/react/24/outline"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ImgAbout from '../../src/assets/about.jpg'

function About() {
  return (
    <section>
        {/* Navbar Start */}
        <Navbar/>
        {/* Navbar End */}

        
        {/* TentangKami Start */}
        <div className='my-12'>
          <div className="block md:flex md:items-center">
            <div className="pl-0 md:pl-32">
              <img src={ImgAbout} alt="" className=""/>
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
  )
}

export default About