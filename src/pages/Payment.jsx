import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Imggopay from "../../src/assets/gopay.png";
import Imgdana from "../../src/assets/dana.png";
import Imgalfa from "../../src/assets/ALFAMART.png";
import Imgshope from "../../src/assets/shope.png";
import Imgbank from "../../src/assets/bank.jpg";

const Payment = () => {
  const [selectedPayment, setSelectedPayment] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pin, setPin] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const [ongkir, setOngkir] = useState(0);

  const { Total } = state;
  const TotalWithOngkir = Total + parseFloat(ongkir);
  const handleOngkirChange = (event) => {
    setOngkir(event.target.value);
  };
  const handlePaymentChange = (paymentMethod) => {
    setSelectedPayment(paymentMethod);
    setPin("");
    setPaymentSuccess(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedPayment === "gopay" || selectedPayment === "dana") {
      setIsModalOpen(true);
    } else {
      setPaymentSuccess(true);
    }
  };

  const handleModalSubmit = (e) => {
    e.preventDefault();
    // Lakukan validasi PIN di sini, misalnya cek apakah PIN sesuai
    setIsModalOpen(false);
    setPaymentSuccess(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-3 text-center">TOKO MASLIQUID</h2>
        <h2 className="text-2xl font-bold mb-6 text-center">
          Pilih Metode Pembayaran
        </h2>

        <div className="mb-4">
          {/* <h1 className=" text-xl -ml-5 mb-2 -mt- font-medium pl-5">
            Total harga :{" "}
            <span className="bg-gray-500 p-1 rounded text-md text-white">
              {TotalWithOngkir}
            </span>
          </h1> */}
          <label className="block text-gray-700 mb-2">Metode Pembayaran:</label>
          <div className="flex mb-3">
            <button
              type="button"
              onClick={() => handlePaymentChange("gopay")}
              className={`p-2 border rounded ${
                selectedPayment === "gopay"
                  ? "border-blue-500 bg-blue-100"
                  : "border-gray-300"
              }`}
            >
              <div className="w-full">
                <img src={Imggopay} alt="" className="w-[80px] h-[25px]" />
              </div>
            </button>
            <button
              type="button"
              onClick={() => handlePaymentChange("dana")}
              className={`p-2 border ml-5 rounded ${
                selectedPayment === "dana"
                  ? "border-blue-500 bg-blue-100"
                  : "border-gray-300"
              }`}
            >
              <div className="w-full">
                <img src={Imgdana} alt="" className="w-[80px]" />
              </div>
            </button>
          </div>
          <div className="flex ">
            <button
              type="button"
              onClick={() => handlePaymentChange("indomaret")}
              className={`p-2 border rounded ${
                selectedPayment === "indomaret"
                  ? "border-blue-500 bg-blue-100"
                  : "border-gray-300"
              }`}
            >
              <div className="w-full">
                <img src={Imgalfa} alt="" className="w-[80px]" />
              </div>
            </button>
            <button
              type="button"
              onClick={() => handlePaymentChange("kartu_debit")}
              className={`p-2 border ml-5 rounded ${
                selectedPayment === "kartu_debit"
                  ? "border-blue-500 bg-blue-100"
                  : "border-gray-300"
              }`}
            >
              <div className="w-full">
                <img src={Imgbank} alt="" className="w-[80px] h-[40px]" />
              </div>
            </button>
            <button
              type="button"
              onClick={() => handlePaymentChange("shopee")}
              className={`p-2 border ml-5 rounded ${
                selectedPayment === "shopee"
                  ? "border-blue-500 bg-blue-100"
                  : "border-gray-300"
              }`}
            >
              <div className="w-full">
                <img src={Imgshope} alt="" className="w-[80px]" />
              </div>
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {selectedPayment === "gopay" && (
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Nomor GoPay:</label>
              <input
                type="text"
                className="block w-full p-2 border border-gray-300 bg-white rounded"
                placeholder="Masukkan nomor GoPay"
                required
              />
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Nama:</label>
                <input
                  type="text"
                  className="block w-full p-2 border border-gray-300 bg-white rounded"
                  placeholder="Masukkan nama"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Alamat:</label>
                <textarea
                  className="w-full h-[100px] p-2 border border-gray-300 bg-white rounded"
                  name="comment"
                  form="usrform"
                  placeholder="Masukkan alamat"
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Kode Pos:</label>
                <input
                  type="text"
                  className="block w-full p-2 border border-gray-300 bg-white rounded"
                  placeholder="Masukkan kode pos"
                  required
                />
              </div>
            </div>
          )}

          {selectedPayment === "dana" && (
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Nomor DANA:</label>
              <input
                type="text"
                className="block w-full p-2 border border-gray-300 bg-white rounded"
                placeholder="Masukkan nomor DANA"
                required
              />
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Nama:</label>
                <input
                  type="text"
                  className="block w-full p-2 border border-gray-300 bg-white rounded"
                  placeholder="Masukkan nama"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Alamat:</label>
                <textarea
                  className="w-full h-[100px] p-2 border border-gray-300 bg-white rounded"
                  name="comment"
                  form="usrform"
                  placeholder="Masukkan alamat"
                ></textarea>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Kode Pos:</label>
                <input
                  type="text"
                  className="block w-full p-2 border border-gray-300 bg-white rounded"
                  placeholder="Masukkan kode pos"
                  required
                />
              </div>
            </div>
          )}
          {selectedPayment === "shopee" && (
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">
                Nomor Shopeepay:
              </label>
              <input
                type="text"
                className="block w-full p-2 border border-gray-300 bg-white rounded"
                placeholder="Masukkan nomor Shopeepay"
                required
              />
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Nama:</label>
                <input
                  type="text"
                  className="block w-full p-2 border border-gray-300 bg-white rounded"
                  placeholder="Masukkan nama"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Alamat:</label>
                <textarea
                  className="w-full h-[100px] p-2 border border-gray-300 bg-white rounded"
                  name="comment"
                  form="usrform"
                  placeholder="Masukkan alamat"
                ></textarea>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Kode Pos:</label>
                <input
                  type="text"
                  className="block w-full p-2 border border-gray-300 bg-white rounded"
                  placeholder="Masukkan kode pos"
                  required
                />
              </div>
            </div>
          )}
          {selectedPayment === "indomaret" && (
            <div className="mb-4">
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Nama:</label>
                <input
                  type="text"
                  className="block w-full p-2 border border-gray-300 bg-white rounded"
                  placeholder="Masukkan nama"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Alamat:</label>
                <textarea
                  className="w-full h-[100px] p-2 border border-gray-300 bg-white rounded"
                  name="comment"
                  form="usrform"
                  placeholder="Masukkan alamat"
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Kode Pos:</label>
                <input
                  type="text"
                  className="block w-full p-2 border border-gray-300 bg-white rounded"
                  placeholder="Masukkan kode pos"
                  required
                />
              </div>
              <p className="text-gray-700 mb-2">
                Silakan lanjutkan pembayaran di Indomaret terdekat dengan kode
                transaksi yang akan diberikan setelah mengklik tombol di bawah
                ini.
              </p>
            </div>
          )}

          {selectedPayment === "kartu_debit" && (
            <div>
              <div className="mb-4">
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Nama:</label>
                  <input
                    type="text"
                    className="block w-full p-2 border border-gray-300 bg-white rounded"
                    placeholder="Masukkan nama"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Alamat:</label>
                  <textarea
                    className="w-full h-[100px] p-2 border border-gray-300 bg-white rounded"
                    name="comment"
                    form="usrform"
                    placeholder="Masukkan alamat"
                  ></textarea>
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Kode Pos:</label>
                  <input
                    type="text"
                    className="block w-full p-2 border border-gray-300 bg-white rounded"
                    placeholder="Masukkan kode pos"
                    required
                  />
                </div>
                <label className="block text-gray-700 mb-2">Nomor Kartu:</label>
                <input
                  type="text"
                  className="block w-full p-2 border border-gray-300 bg-white rounded"
                  placeholder="Masukkan nomor kartu debit"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">PIN:</label>
                <input
                  type="password"
                  className="block w-full p-2 border border-gray-300 bg-white rounded"
                  required
                />
              </div>
            </div>
          )}
          <div className={`w-full rounded transition duration-200`}>
            <label className="block text-gray-700 mb-2">Ongkos Kirim:</label>
            <select
              className="block w-full p-2 border border-gray-300 bg-white rounded"
              disabled={!selectedPayment}
              value={ongkir}
              onChange={handleOngkirChange}
              required
            >
              <option value="" disabled>
                Pilih jenis pengiriman
              </option>
              <option value="15000">Hemat - Rp 15,000</option>
              <option value="23000">Reguler - Rp 23,000</option>
              <option value="35000">Next Day - Rp 35,000</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 border-none mt-5 text-xl">
              Total Pembayaran:
            </label>
            <input
              type="text"
              className="block w-full p-2 outline-none bg-white rounded text-xl"
              value={`Rp ${TotalWithOngkir.toFixed(2)}`}
              readOnly
            />
          </div>

          <button
            type="submit"
            className={`w-full bg-blue-500 text-white p-2 rounded transition duration-200 ${
              selectedPayment
                ? "hover:bg-blue-600"
                : "opacity-50 cursor-not-allowed"
            }`}
            disabled={!selectedPayment}
          >
            Lanjutkan Pembayaran
          </button>
        </form>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
              <h2 className="text-xl font-bold mb-4">
                Masukkan PIN {selectedPayment === "gopay" ? "GoPay" : "DANA"}{" "}
                Anda
              </h2>
              <form onSubmit={handleModalSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">PIN:</label>
                  <input
                    type="password"
                    className="block w-full p-2 border border-gray-300 bg-white rounded"
                    placeholder="Masukkan PIN"
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
                >
                  Konfirmasi Pembayaran
                </button>
              </form>
            </div>
          </div>
        )}

        {paymentSuccess && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className=" bg-white p-6 rounded shadow-md w-full max-w-sm text-center">
              <h2 className="text-xl font-bold mb-4">Pembayaran Berhasil</h2>
              <p className="mb-4">Terima kasih telah melakukan pembayaran.</p>
              <div className="flex space-x-3">
                <button
                  onClick={() => setPaymentSuccess(false)}
                  className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
                >
                  Tutup
                </button>
                <button
                  onClick={() => navigate("/")}
                  className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
                >
                  Kembali ke Home
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Payment;
