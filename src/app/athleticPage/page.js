"use client"
import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import MenuAnimation from '../menu';
import LeftNavInner from '../leftNavinner';
import TopNav from '../topNav';
import CustomCursor from '../component/customCursor';



import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from 'gsap/ScrollSmoother';
 

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);


function AthleticPage() {
    const sixShowcaseRef = useRef(null);
    const compresDivRef = useRef(null);
    const compresTextRef = useRef(null);


    const main = useRef();
    const smoother = useRef();

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            smoother.current = ScrollSmoother.create({
                smooth: 2,
                effects: true,
            });

        }, main);
        return () => ctx.revert();


    }, []);


    // useEffect(() => {
    //     const showSixShowcase = () => {

    //         gsap.killTweensOf(sixShowcaseRef.current);
    //         gsap.killTweensOf(compresDivRef.current);
    //         gsap.killTweensOf(compresTextRef.current);

    //         gsap.fromTo('.coverVideo',
    //             { display: 'block',  duration: 0, },
    //             { display: 'none', duration: 0, }
    //         );

    //         gsap.fromTo(sixShowcaseRef.current,
    //             { display: 'none', opacity:0, duration: 0.5, },
    //             { display: 'block', duration: 0.9, opacity:1 }
    //         );

    //         gsap.fromTo(compresDivRef.current,
    //             {delay:0.5, height: '0%', bottom: '0', top: 'auto' },
    //             { height: '100%', duration: 1, ease: "power4.out", }
    //         );

    //         gsap.fromTo(compresTextRef.current,
    //             {opacity:0, x:-200},
    //             {opacity:1,x:0, duration:0.5 }
    //         );


    //     };

    //     const hideSixShowcase = () => {

    //         gsap.killTweensOf(sixShowcaseRef.current);
    //         gsap.killTweensOf(compresDivRef.current);
    //         gsap.killTweensOf(compresTextRef.current);


    //         gsap.fromTo('.coverVideo',
    //             { display: 'none',  duration: 0, },
    //             { display: 'block', duration: 0, }
    //         );

            
    //         gsap.to(sixShowcaseRef.current,
    //             { display: 'none', duration: 0.1 }
    //         );

    //         gsap.fromTo(compresDivRef.current,
    //             { height: '100%', top: 'auto' },
    //             { height: '0%', duration: 1, ease: "power4.out",  bottom: '0', }
    //         );

    //         gsap.fromTo(sixShowcaseRef.current,
               
    //             { display: 'block', duration: 0.9, opacity:1 },
    //             { display: 'none', opacity:0, duration: 0.5, }
    //         );
    //     };

    //     const spanElement = document.querySelector('.six');
    //     if (spanElement) {
    //         spanElement.addEventListener('mouseenter', showSixShowcase);
    //         spanElement.addEventListener('mouseleave', hideSixShowcase);
    //     }

    //     return () => {
    //         if (spanElement) {
    //             spanElement.removeEventListener('mouseenter', showSixShowcase);
    //             spanElement.removeEventListener('mouseleave', hideSixShowcase);
    //         }
    //     };
    // }, []);

    return (
        <>
         <CustomCursor />
            <div id="smooth-wrapper" ref={main}>
                <div id="smooth-content">
       <TopNav />
       <LeftNavInner />
        <div ref={sixShowcaseRef} className=" ShowCaseSection bg-[url('/athletics_bg.jpg')] ">          
          <div className='sixShowcase'> 
            <div className="flex flex-col lg:flex-row justify-center">
                <div className='pt-24 lg:pt-24 pr-0 lg:pr-10 sansita text-6xl text-white'>
                Athletics
                </div>
                <div className='pt-20 lg:pt-20'>
                    <div className='compresCoverSM lg:compresCover'>
                        <div ref={compresDivRef} className='compresDivSM right-0 mr-4 lg:compresDiv'>
                            <div className="compresImgBSM lg:compresImgB bg-[url('/athletics_box.jpg')] bg-contain">
                            </div>
                        </div>
                    </div>
                    <p className='text-3xl text-white'  ref={compresTextRef} >Build a quality brand <br /> worth your effort</p>
                </div>
            </div>
            </div>
        </div>
        <div className=' flex justify-center items-center relative bg-white py-5 pl-5 pr-5'>
                            <div class="flex flex-col md:flex-row  ">
                                <div className='lg:basis-1/2 pt-[115px]'>
                                    <p className='text-[30px] font-normal text-[#00305F] gurmukhi' >Brand Type: </p>
                                    <p className='text-[60px] font-medium text-[#00305F] gurmukhi' >Athletics</p>
                                </div>
                                <div  className='lg:basis-1/2 pt-[85px]'>
                                    <p className='text-[33px] font-medium text-[#00305F] gurmukhi' >A high-end athletic brand offers premium, performance-driven sportswear with advanced materials and sophisticated designs. Examples include Lululemon and Alo Yoga.</p>
                                </div>
                            </div>
                        </div>
                        </div>
                        </div>
        </>
    );
}

export default AthleticPage;
