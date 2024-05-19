/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { OpenAIApi, Configuration } from "openai";
import Swal from "sweetalert2";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Support() {
  // const configuration = new Configuration({
  //   apiKey: import.meta.env.VITE_OPENAI_KEY,
  // });
  // const openai = new OpenAIApi(configuration);

  // const [prompt, setPrompt] = useState("");
  // const [result, setResult] = useState("");
  // const [loading, setLoading] = useState(false);

  // const handleResult = async () => {
  //   setLoading(true);
  //   await openai
  //     .createCompletion({
  //       model: "text-davinci-003",
  //       prompt: prompt,
  //       temperature: 0.5,
  //       max_tokens: 1000,
  //     })
  //     .then((response) => {
  //       setResult(response.data.choices[0].text);
  //     })
  //     .catch ((error) => {
  //       console.log(error)
  //     })
  //     setLoading(false);
  // };
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [pesan, setPesan] = useState("");

  console.log(nama);

  const handleSubmit = () => {
    if (nama && email && pesan) {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Pesan telah terkirim",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload();
        }
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Tolong isi semua form tersebut",
      });
    }
  };

  return (
    <section>
      {/* Navbar Start */}
      <Navbar />
      {/* Navbar End */}

      <div>
        <h1 className=" text-3xl font-bold mt-8 text-center">
          Customer Support
        </h1>
        <div className="">
          {/* Container for demo purpose  */}
          <div className="container my-6 mx-auto md:px-6">
            {/* Section: Design Block */}
            <section className="mb-24">
              <div className="md:px-12">
                <div className="container mx-auto xl:px-32">
                  <div className="grid items-center lg:grid-cols-2">
                    <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
                      <div className="relative z-[1] block rounded-lg bg-[#1E2022] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:px-12 lg:-mr-14">
                        <h2 className="mb-12 text-36xl font-bold text-white text-center">
                          Contact us
                        </h2>
                        <form>
                          <label
                            htmlFor="nama"
                            className="text-white text-left"
                          >
                            Name
                          </label>
                          <div
                            className="relative mb-6 border rounded-md"
                            data-te-input-wrapper-init
                          >
                            <input
                              type="text"
                              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                              id="nama"
                              placeholder="Name"
                              value={nama}
                              onChange={(e) => setNama(e.target.value)}
                            />
                          </div>
                          <label className="text-white" htmlFor="email">
                            Email address
                          </label>
                          <div
                            className="relative mb-6 border rounded-md"
                            data-te-input-wrapper-init
                          >
                            <input
                              type="email"
                              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                              id="email"
                              placeholder="Email address"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                          <label htmlFor="pesan" className="text-white">
                            Message
                          </label>
                          <div
                            className="relative mb-6 border rounded-md"
                            data-te-input-wrapper-init
                          >
                            <textarea
                              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                              id="pesan"
                              rows="3"
                              placeholder="Your message"
                              value={pesan}
                              onChange={(e) => setPesan(e.target.value)}
                            ></textarea>
                          </div>
                          <button
                            type="button"
                            onClick={handleSubmit}
                            data-te-ripple-init
                            data-te-ripple-color="light"
                            className="inline-block w-full rounded bg-white px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] lg:mb-0"
                          >
                            Send
                          </button>
                        </form>
                      </div>
                    </div>
                    <div className="md:mb-12 lg:mb-0">
                      <div className="relative h-[700px] rounded-lg shadow-lg dark:shadow-black/20">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.868363609115!2d110.50937807403729!3d-7.0247555688164995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708d8e0c246f27%3A0xf796a13baf668d1f!2sPasar%20Mranggen!5e0!3m2!1sid!2sid!4v1716091451010!5m2!1sid!2sid"
                          className="absolute left-0 top-0 h-full w-full rounded-lg"
                          frameBorder={0}
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Section: Design Block */}
          </div>
          {/* Container for demo purpose */}
        </div>
        {/* <div className='flex w-full justify-center mt-5'>
            <div>
            <div className="block md:flex rounded-md px-5 md:px-0">
                <input 
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Type here..." type="text" className="py-2 px-3 mx-auto md:pr-11 text-center md:text-left w-full md:w-[350px] border-gray-200 outline outline-1 shadow-sm rounded-md md:rounded-r-none md:rounded-l-md text-sm focus:z-10 focus:outline-2 bg-white border-gray-700 text-[#1E2022]"/>
                <button onClick={() => handleResult()} className="px-4 items-center w-full h-9 md:w-0 mt-3 md:mt-0 min-w-fit rounded-md rounded-r-md md:rounded-l-none border border-l-0 border-gray-200 text-sm text-gray-500 bg-[#1E2022] border-gray-700 text-white hover:bg-[#484d4e]">Click</button>
              </div>
            </div>
          </div> */}
        {/* <div className='flex justify-center mt-5'>
            <textarea 
            value={result} 
            placeholder={loading ? "Please wait, your prompt is in progress" : ""}
            onChange={(e) => setResult(e.target.value)} cols="30" rows="10" 
            className='py-1 px-3 pr-11 w-[300px] md:w-[420px] border-gray-200 outline outline-1 shadow-sm rounded-md text-sm focus:z-10 focus:outline-2 dark:bg-white dark:border-gray-700 dark:text-[#1E2022]'
            />
          </div> */}
      </div>

      {/* Footer Start */}
      <Footer />
      {/* Footer End */}
    </section>
  );
}

export default Support;
