"use client"
import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import MenuAnimation from '../menu';
import LeftNavInner from '../leftNavinner';
import TopNav from '../topNav';
import CustomCursor from '../component/customCursor';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import LeftNav2 from '../leftNav2';
import SquerAnimation from '../squerAnimation';
 

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);


function HighstreetPage() {
    const fiveShowcaseRef = useRef(null);
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
    //     const showFiveShowcase = () => {

    //         gsap.killTweensOf(fiveShowcaseRef.current);
    //         gsap.killTweensOf(compresDivRef.current);
    //         gsap.killTweensOf(compresTextRef.current);

    //         gsap.fromTo('.coverVideo',
    //             { display: 'block',  duration: 0, },
    //             { display: 'none', duration: 0, }
    //         );


    //         gsap.fromTo(fiveShowcaseRef.current,
    //             { display: 'none', opacity:0, duration: 0.5, },
    //             { display: 'block', duration: 0.5, opacity:1 }
    //         );

    //          // left to right
    //          gsap.fromTo(compresDivRef.current,
    //             { width: '0%', left: '0',right:'auto' },
    //             { width: '100%', duration: 1, ease: "power4.out", }
    //         );

    //         gsap.fromTo(compresTextRef.current,
    //             {opacity:0, x:-200},
    //             {opacity:1,x:0, duration:0.5 }
    //         );


    //     };

    //     const hideFiveShowcase = () => {

    //         gsap.killTweensOf(fiveShowcaseRef.current);
    //         gsap.killTweensOf(compresDivRef.current);
    //         gsap.killTweensOf(compresTextRef.current);

    //         gsap.fromTo('.coverVideo',
    //             { display: 'none',  duration: 0, },
    //             { display: 'block', duration: 0, }
    //         );


    //         gsap.to(fiveShowcaseRef.current,
    //             { display: 'none', duration: 0.1 }
    //         );

    //         gsap.to(compresDivRef.current,                
    //             { width: '100%', duration: 1, ease: "power4.out", },
    //             { width: '0%', left: '0',right:'auto' }
    //         );
    //     };

    //     const spanElement = document.querySelector('.five');
    //     if (spanElement) {
    //         spanElement.addEventListener('mouseenter', showFiveShowcase);
    //         spanElement.addEventListener('mouseleave', hideFiveShowcase);
    //     }

    //     return () => {
    //         if (spanElement) {
    //             spanElement.removeEventListener('mouseenter', showFiveShowcase);
    //             spanElement.removeEventListener('mouseleave', hideFiveShowcase);
    //         }
    //     };
    // }, []);

    return (
        <>
       <CustomCursor />
       <SquerAnimation/>
            <div id="smooth-wrapper" ref={main}>
                <div id="smooth-content">
       <TopNav />
       <LeftNav2/>
       <LeftNavInner />
        <div ref={fiveShowcaseRef} className="ShowCaseSection   bg-[url('/highstreet_bg.jpg')] ">
           
           <div className='fiveShowcase'> 
            <div className="flex flex-col lg:flex-row justify-center">
                <div className='pt-24 lg:pt-24 pr-0 lg:pr-10 sansita text-6xl text-white'>
                High Street
                </div>
                <div className='pt-20 lg:pt-20'>
                    <div className='compresCoverSM lg:compresCover'>
                        <div ref={compresDivRef} className='compresDivSM right-0 mr-4 lg:compresDiv'>
                            <div className="compresImgLtoRSM lg:compresImgLtoR bg-[url('/highstreet_box.jpg')] bg-contain">
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
                                    <p className='text-[60px] font-medium text-[#00305F] gurmukhi' >High Street</p>
                                </div>
                                <div  className='lg:basis-1/2 pt-[85px]'>
                                    <p className='text-[33px] font-medium text-[#00305F] gurmukhi' >A luxury streetwear brand merges high-end fashion with urban, street-inspired styles, featuring premium materials, unique designs, and exclusivity. Examples include Balenciaga and Fear of God.</p>
                                </div>
                            </div>
                        </div>
        </div>
        </div>
        </>
    );
}

export default HighstreetPage;
