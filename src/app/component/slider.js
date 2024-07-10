import React, { useState, useEffect, useRef } from 'react';
import Card from '../component/Card';
import { gsap } from 'gsap';

const cards = [
  { cardNo: '01', cardTitle: 'DESIGN', bgCardColor: 'bg-red-500', textColor: 'text-black', videoSource: '/artwork_simple.mp4', content: "Using 3D design software, our designer can create a detailed digital version of your concept in real time,including how it looks on a person, and make modifications as needed." },
  { cardNo: '02', cardTitle: 'TECHPAC', bgCardColor: 'bg-orange-700', textColor: 'text-black', videoSource: '/artwork_simple.mp4', content: "Using 3D design software, our designer can create a detailed digital version of your concept in real time,including how it looks on a person, and make modifications as needed." },
  { cardNo: '03', cardTitle: 'FABRIC', bgCardColor: 'bg-green-400', textColor: 'text-black', videoSource: '/artwork_simple.mp4', content: "Using 3D design software, our designer can create a detailed digital version of your concept in real time,including how it looks on a person, and make modifications as needed." },
  { cardNo: '04', cardTitle: 'PROTOTYPE', bgCardColor: 'bg-gray-700', textColor: 'text-black', videoSource: '/artwork_simple.mp4', content: "Using 3D design software, our designer can create a detailed digital version of your concept in real time,including how it looks on a person, and make modifications as needed." },
  { cardNo: '05', cardTitle: 'PRODUCTION', bgCardColor: 'bg-blue-600', textColor: 'text-black', videoSource: '/artwork_simple.mp4', content: "Using 3D design software, our designer can create a detailed digital version of your concept in real time,including how it looks on a person, and make modifications as needed." },
];

const Slider = () => {
  const [selected, setSelected] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const cardRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin();
    cardRefs.current.forEach((cardRef, index) => {
      gsap.set(cardRef, {
        width: index === 0 ? '70%' : '5.5rem',
      });
    });

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (selected !== null) {
      gsap.to(cardRefs.current[selected], {
        width: '70%',
        duration: 1,
        ease: 'power4.inOut',
      });

      cardRefs.current.forEach((cardRef, index) => {
        if (index !== selected) {
          gsap.to(cardRef, {
            width: '5.5rem',
            duration: 1,
            ease: 'power4.inOut',
          });
        }
      });
    }
  }, [selected]);

  const handleClick = (key) => {
    setSelected(key);
  };

  const handleNext = () => {
    setSelected((prevSelected) => (prevSelected === cards.length - 1 ? 0 : prevSelected + 1));
  };

  const handlePrev = () => {
    setSelected((prevSelected) => (prevSelected === 0 ? cards.length - 1 : prevSelected - 1));
  };

  return (
    <div className='main-yell-bg h-full gurmukhi'>
      <div className='pt-[230px] text-black pb-[120px] pl-[50px] text-[35px] md:text-[55px] font-medium md:w-2/4 w-full'>
        Our 5 steps end-to-end process created with emerging brands in mind
      </div>
      <div className='hidden md:block'>
        <div className='h-screen flex items-center justify-center'>
          {cards.map((card, key) => (
            <div
              key={key}
              ref={el => cardRefs.current[key] = el}
              className={`${key === 0 ? 'w-70' : 'w-22'} cursor-pointer ml-custom relative `}
              onClick={() => handleClick(key)}
            >
              <Card card={card} selected={selected === key} isMobile={isMobile} />
            </div>
          ))}
        </div>
      </div>

      <div className='block md:hidden relative h-screen'>
        <div className='flex flex-col items-center justify-center'>
          {cards.map((card, key) => (
            <div
              key={key}
              className={`w-full cursor-pointer items-center justify-center relative`}
              onClick={() => handleClick(key)}
            >
              <Card card={card} selected={selected === key} isMobile={isMobile} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
