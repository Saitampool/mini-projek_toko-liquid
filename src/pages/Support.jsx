/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import {OpenAIApi, Configuration} from 'openai'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function Support() {
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPENAI_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleResult = async () => {
    setLoading(true);
    await openai
      .createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        temperature: 0.5,
        max_tokens: 1000,
      })
      .then((response) => {
        setResult(response.data.choices[0].text);
      })
      .catch ((error) => {
        console.log(error)
      }) 
      setLoading(false);
  };

  return (
    <section>
        {/* Navbar Start */}
        <Navbar/>
        {/* Navbar End */}

        <div>
          <h1 className=" text-3xl font-bold mt-8 text-center">Customer Support</h1>
          <div className='flex w-full justify-center mt-5'>
            <div>
            <div className="block md:flex rounded-md px-5 md:px-0">
                <input 
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Type here..." type="text" className="py-2 px-3 mx-auto md:pr-11 text-center md:text-left w-full md:w-[350px] border-gray-200 outline outline-1 shadow-sm rounded-md md:rounded-r-none md:rounded-l-md text-sm focus:z-10 focus:outline-2 bg-white border-gray-700 text-[#1E2022]"/>
                <button onClick={() => handleResult()} className="px-4 items-center w-full h-9 md:w-0 mt-3 md:mt-0 min-w-fit rounded-md rounded-r-md md:rounded-l-none border border-l-0 border-gray-200 text-sm text-gray-500 bg-[#1E2022] border-gray-700 text-white hover:bg-[#484d4e]">Click</button>
              </div>
            </div>
          </div>
          <div className='flex justify-center mt-5'>
            <textarea 
            value={result} 
            placeholder={loading ? "Please wait, your prompt is in progress" : ""}
            onChange={(e) => setResult(e.target.value)} cols="30" rows="10" 
            className='py-1 px-3 pr-11 w-[300px] md:w-[420px] border-gray-200 outline outline-1 shadow-sm rounded-md text-sm focus:z-10 focus:outline-2 dark:bg-white dark:border-gray-700 dark:text-[#1E2022]'
            />
          </div>
        </div>
        
        {/* Footer Start */}
        <Footer/>
        {/* Footer End */}
    </section>
  )
}

export default Support