/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  return (
    <>
      {/* Footer Start */}
      <div className="bg-[#1E2022] sm:block md:flex md:flex-cols p-3 mt-10">
        <div className="sm:w-full md:w-2/5 text-center md:text-left">
          <h4 className="text-blue-600 text-lg ">Mas Liquid</h4>
          <p className="pr-3 text-white text-sm">
            Toko Vape Mas Liquid hanya menjual produk original dari brand-brand
            terkemuka. Produk dijamin original bergaransi
          </p>

          <div className="sm:pr-0 md:pr-3">
            <a href="https://web.facebook.com/dimashasim.mustofa?locale=id_ID">
              <i className="bx bxl-facebook-circle text-white mr-1 hover:text-blue-400"></i>
            </a>
            <a href="https://www.instagram.com/dimashasim_/">
              <i className="bx bxl-instagram-alt text-white mr-1 hover:text-blue-400"></i>
            </a>
            <a href="https://www.linkedin.com/in/dimas-hasim-mustofa-607a77236">
              <i className="bx bxl-linkedin-square text-white mr-1 hover:text-blue-400"></i>
            </a>
          </div>
        </div>

        <div className="text-white mt-3 md:mt-0 sm:pr-0 md:pr-3 md:pl-8 text-center md:text-left">
          <h4 className="text-blue-600 text-lg">Menu</h4>
          <ul className="list-none">
            <li
              onClick={() => {
                navigate("/");
                window.scrollTo(0, 0);
              }}
              className="list-none"
            >
              <a className="text-white text-sm cursor-pointer hover:text-blue-400">
                Beranda
              </a>
            </li>
            <li
              onClick={() => {
                navigate("/produk");
                window.scrollTo(0, 0);
              }}
              className="list-none"
            >
              <a className="text-white text-sm cursor-pointer hover:text-blue-400">
                Produk
              </a>
            </li>
            <li
              onClick={() => {
                navigate("/about");
                window.scrollTo(0, 0);
              }}
              className="list-none"
            >
              <a className="text-white text-sm cursor-pointer hover:text-blue-400">
                Tentang Kami
              </a>
            </li>
            <li
              onClick={() => {
                navigate("/support");
                window.scrollTo(0, 0);
              }}
              className="list-none"
            >
              <a className="text-white text-sm cursor-pointer hover:text-blue-400">
                CS
              </a>
            </li>
          </ul>
        </div>

        {/* <div className="text-white mt-3 md:mt-0 md:pl-20 text-center md:text-left">
          <h4 className='text-blue-600 text-lg'>Project</h4>
          <ul className="list-none">
            <li className='list-none'><a className='text-white text-sm cursor-pointer hover:text-blue-400'>Design Graphic</a></li>
            <li className='list-none'><a className='text-white text-sm cursor-pointer hover:text-blue-400'>Web development</a></li>
            <li className='list-none'><a className='text-white text-sm cursor-pointer hover:text-blue-400'>UI/UX</a></li>
            </ul>
        </div> */}

        <div className="text-white mt-3 md:mt-0 md:pl-20 text-center md:text-left">
          <h4 className="text-blue-600 text-lg">Contact</h4>
          <ul className="list-none">
            <li className="list-none ">
              <a className="text-white text-sm cursor-pointer hover:text-blue-400">
                <i className="bx bxs-map"></i> Semarang
              </a>
            </li>
            <li className="list-none">
              <a
                className="text-white text-sm cursor-pointer hover:text-blue-400"
                href="https://wa.me/6289531089653"
                target="blank"
              >
                <i className="bx bxs-phone"></i> 089-234-563-049
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Footer End */}
    </>
  );
}

export default Footer;
