"use client"
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import MenuAnimation from '../menu';
import LeftNavInner from '../leftNavinner';
import TopNav from '../topNav';
import CustomCursor from '../component/customCursor';
function DesignerPage() {
   
 

    return (
        <>
        <CustomCursor/>
  <TopNav/>
    <LeftNavInner />
        <div className="showcase  bg-[url('/designer_bg.jpg')]">
            <div className='oneShowcase pl-20 lg:ml-0 '> 
            <div className="flex flex-col lg:flex-row justify-center">
                <div className='pt-24 lg:pt-24 pr-0 lg:pr-10 sansita text-6xl text-white'>
                    Designer
                </div>
                <div className='pt-20 lg:pt-20'>
                    <div className='compresCover'>
                        <div  className='compresDiv'>
                            <div className="compresImgB bg-[url('/designer_box.jpg')]">
                            </div>
                        </div>
                    </div>
                    <p className='text-3xl text-white'  >Build a quality brand <br /> worth your effort</p>
                </div>
            </div>
            </div>
        </div>
      
        </>
    );
}

export default DesignerPage;