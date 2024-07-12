"use client";
import React, { useState, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

const images = {
    Designer: 'designer_box.jpg',
    Casual: 'casual_box.jpg',
    Athleisure: 'athleisure_box.jpg',
    Lounge: 'lounge_box.jpg',
    HighStreet: 'highstreet_box.jpg',
    Athletic: 'athletics_box.jpg',
    Swim: 'swim_box.jpg',
    Denim: 'denim_box.jpg',
    Fullfashion: 'fullfashion_box.jpg',
    Outdoors: 'outdoors_box.jpg'
  };

function SquerAnimation() {

    const [hoveredItem, setHoveredItem] = useState(null);
    const menuItems = useRef([]);
  

  return (
    <>
        

        <div className="leftBar"></div>
              <div className="righttBar"></div>
              <div className="topBar"></div>
              <div className="bottomBar"></div>
              <div className="cornerShowcase z-50">

                <div className="absolute top-0 left-0 z-50">
                  <img src="corner-left-top-2.svg" alt="top-left corner" className="w-8 h-8" />
                </div>

                <div className="absolute top-0 right-0 z-50">
                  <img src="corner-right-top-2.svg" alt="top-right corner" className="w-8 h-8" />
                </div>

                <div className="absolute bottom-0 left-0 z-50">
                  <img src="corner-left-bottom-2.svg" alt="bottom-left corner" className="w-8 h-8" />
                </div>

                <div className="absolute bottom-0 right-0 z-50">
                  <img src="corner-right-bottom-2.svg" alt="bottom-right corner" className="w-8 h-8" />
                </div>

                {Object.keys(images).map((item, index) => (
                  <img
                    key={index}
                    src={images[item]}
                    alt={item}
                    className={`cornerBox absolute w-64 h-auto transition-opacity duration-300 ${hoveredItem === item ? 'opacity-100' : 'opacity-0'}`}
                    style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)',zIndex:100, }}
                  />
                ))}
              </div>

    </>
  )
}

export default SquerAnimation