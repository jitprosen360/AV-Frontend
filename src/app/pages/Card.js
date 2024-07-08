
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

// Custom hook to store the previous value of selected
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
const Card = ({ card, selected }) => {
  const cardRef = useRef(null);
  const videoRef = useRef(null);
  const textRef = useRef(null);
  const prevSelected = usePrevious(selected);

  useEffect(() => {
    if (selected !== prevSelected) {
      // Determine the direction of the animation
      const direction = selected ? -1 : 1; // -1 for left to right, 1 for right to left

      // Animate the card height
      gsap.to(cardRef.current, {
        height: selected ? (window.innerWidth <= 768 ? '40rem' : '100vh') : (window.innerWidth <= 768 ? '5.5rem' : '100vh'),
        duration: 1,
        ease: 'power4.inOut',
        onComplete: () => {
          // Animate video and text after the card has fully expanded or collapsed
          if (selected) {
            gsap.fromTo(videoRef.current, { x: direction * 0, opacity: 1 }, { x: 0, opacity: 1, duration: 1, ease: 'power4.inOut' });
            gsap.fromTo(textRef.current, { x: direction * 0, opacity: 1 }, { x: 0, opacity: 1, duration: 1, ease: 'power4.inOut' });
          } else {
            gsap.fromTo(videoRef.current, { x: direction * 0, opacity: 1 }, { x: 0, opacity: 1, duration: 1, ease: 'power4.inOut' });
            gsap.fromTo(textRef.current, { x: direction * 0, opacity: 1 }, { x: 0, opacity: 1, duration: 1, ease: 'power4.inOut' });
          }
        },
      });
    }
  }, [selected, prevSelected]);

  useEffect(() => {
    // Ensure that video and text are initially static
    gsap.set(videoRef.current, { x: 0, opacity: 1 });
    gsap.set(textRef.current, { x: 0, opacity: 1 });
  }, []);

  return (
    <div className='relative overflow-hidden'>
      <div ref={cardRef} className={`md:h-screen rounded-xl ${selected ? 'h-40 md:h-screen ' : 'h-12 md:h-screen '} ${card.bgCardColor}`}>
        
      <div className="flex">

         {/* Right Side (cardTitle) */}
         <div className={`absolute ${card.textColor} ${window.innerWidth <= 768 ? 'w-1/2 left-0 mt-[35px] text-left pl-[30px]' : 'mt-[100px]'}`}>
            <h2 className=' md:rotate-90'>{card.cardTitle}</h2>
          </div>

          {/* Left Side (cardNo) */}
          <span className={`pl-[30px]  absolute ${card.textColor} ${window.innerWidth <= 768 ? 'w-1/2 right-0 text-right pr-[25px] pt-[35px]' : 'pt-[45px]'}`}>{card.cardNo}</span>

         
        </div>
        <div className={`${window.innerWidth <= 768 ? '' : 'flex'}`}>
        
            <div ref={videoRef} className={`${window.innerWidth <= 768 ? 'w-full mt-[150px]' : 'w-[60%] pl-[80px]'} h-full overflow-hidden`}>
              <video className="md:h-screen object-cover " autoPlay muted>
                <source src={card.videoSource} type="video/mp4" />
                {card.videoSource}
              </video>
            </div>
       
          <div ref={textRef} className={`flex items-center ${window.innerWidth <= 768 ? 'w-full h-[300px] text-center' : 'w-[40%] h-screen'} p-4 overflow-hidden `}>
            <p className="text-white overflow-hidden h-[120px] w-[300px] pl-[25px]">
            {card.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
