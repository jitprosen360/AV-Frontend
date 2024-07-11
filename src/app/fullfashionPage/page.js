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

function FullfashionPage() {
    const nineShowcaseRef = useRef(null);
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
    //     const showNineShowcase = () => {

    //         gsap.killTweensOf(nineShowcaseRef.current);
    //         gsap.killTweensOf(compresDivRef.current);
    //         gsap.killTweensOf(compresTextRef.current);

    //         gsap.fromTo('.coverVideo',
    //             { display: 'block',  duration: 0, },
    //             { display: 'none', duration: 0, }
    //         );

    //         gsap.fromTo(nineShowcaseRef.current,
    //             { display: 'none', opacity:0, duration: 0.5, },
    //             { display: 'block', duration: 0.5, opacity:1 }
    //         );

    //         gsap.fromTo(compresDivRef.current,
    //             { width: '0%', right: '0', left: 'auto' },
    //             { width: '100%', duration: 1, ease: "power4.out" }
    //         );

    //         gsap.fromTo(compresTextRef.current,
    //             {opacity:0, x:-200},
    //             {opacity:1,x:0, duration:0.5 }
    //         );


    //     };

    //     const hideNineShowcase = () => {

    //         gsap.killTweensOf(nineShowcaseRef.current);
    //         gsap.killTweensOf(compresDivRef.current);
    //         gsap.killTweensOf(compresTextRef.current);

    //         gsap.fromTo('.coverVideo',
    //             { display: 'none',  duration: 0, },
    //             { display: 'block', duration: 0, }
    //         );


    //         gsap.to(nineShowcaseRef.current,
    //             { display: 'none', duration: 0.1 }
    //         );

    //         gsap.to(compresDivRef.current,
    //             { width: '0%', duration: 1, ease: "power4.out" }
    //         );
    //     };

    //     const spanElement = document.querySelector('.nine');
    //     if (spanElement) {
    //         spanElement.addEventListener('mouseenter', showNineShowcase);
    //         spanElement.addEventListener('mouseleave', hideNineShowcase);
    //     }

    //     return () => {
    //         if (spanElement) {
    //             spanElement.removeEventListener('mouseenter', showNineShowcase);
    //             spanElement.removeEventListener('mouseleave', hideNineShowcase);
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
        <div ref={nineShowcaseRef} className="ShowCaseSection   bg-[url('/fullfashion_bg.jpg')] ">
           <div className='nineShowcase'> 
            <div className="flex flex-col lg:flex-row justify-center">
                <div className='pt-24 lg:pt-24 pr-0 lg:pr-10 sansita text-6xl text-white'>
                Full Fashion
                </div>
                <div className='pt-20 lg:pt-20'>
                    <div className='compresCoverSM lg:compresCover'>
                        <div ref={compresDivRef} className='compresDivSM right-0 mr-4 lg:compresDiv'>
                            <div className="compresImgSM lg:compresImg bg-[url('/fullfashion_box.jpg')] bg-contain">
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
                                    <p className='text-[60px] font-medium text-[#00305F] gurmukhi' >Full Fashion</p>
                                </div>
                                <div  className='lg:basis-1/2 pt-[85px]'>
                                    <p className='text-[33px] font-medium text-[#00305F] gurmukhi' >A luxury full-fashion brand seeking high-quality yarn and statement pieces, combining timeless designs with modern touches, from grade A cashmere, wool, alpaca, to organic cotton, and more.</p>
                                </div>
                            </div>
                        </div>
        </div>
        </div>
        </>
    );
}

export default FullfashionPage;
