/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

function Slider() {

    const slides = [
        {
            url: '../../src/assets/hero-1.jpg',
        },
        {
            url: '../../src/assets/hero-2.jpg',
        },
        {
            url: '../../src/assets/hero-3.jpg',
        },
        {
            url: '../../src/assets/hero-4.jpg',
        },
        {
            url: '../../src/assets/hero-5.jpg',
        },
        {
            url: '../../src/assets/hero-6.jpg',
        },
        {
            url: '../../src/assets/hero-7.jpg',
        },
    ];
    
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    
    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

  return (
    <div className='max-w-[1100px] h-[295px] w-[1000px] group'>
      <div className='w-full h-full flex'>
        {/* Left Arrow */}
      <div className='hidden group-hover:block w-15 h-12 mt-[145px] top-[65%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-md bg-center bg-cover duration-500'
      ></div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block w-15 h-12 mt-[145px] top-[65%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      </div>
      <div className='flex top-4 justify-center'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer hover:text-[#C9D6DF]'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Slider