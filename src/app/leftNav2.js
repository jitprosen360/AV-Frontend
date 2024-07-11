import React from 'react'

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


function LeftNav2() {

    const [hoveredItem, setHoveredItem] = useState(null);
    const menuItems = useRef([]);
  
    useLayoutEffect(() => {
     
  
        menuItems.current.forEach((item) => {
          const underline = item.querySelector('.underline');
          const textWidth = item.offsetWidth;
  
  
          item.addEventListener('mouseenter', () => {
            gsap.fromTo(underline,
              { width: '0', duration: 0.5, left: 0 },
              { width: textWidth, duration: 0.5, left: 0 });
          });
  
          item.addEventListener('mouseleave', () => {
            gsap.fromTo(underline,
              { width: textWidth, duration: 0.5, right: 0 },
              { width: '0', duration: 0.5, right: 0 }
            );
          });
        });
  
  
 
  
    }, []);



  return (
    <>
        
        <div className="leftPanel2 absolute inset-0 flex items-center w-64 z-40">
            <div className="pl-3">
              <div className='menuContent'>
                <li ref={el => menuItems.current[0] = el} className="menuItem">
                  What We Do
                  <div className="underline"></div>
                </li>
                <li ref={el => menuItems.current[1] = el} className="menuItem">
                  About Us
                  <div className="underline"></div>
                </li>
                <li ref={el => menuItems.current[2] = el} className="menuItem">
                  Latest News
                  <div className="underline"></div>
                </li>
                <li ref={el => menuItems.current[3] = el} className="menuItem">
                  Get in Touch
                  <div className="underline"></div>
                </li>
              </div>


              {Object.keys(images).map((item, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredItem(item)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="left_nav"
                >
                  <a>{item}</a>
                </div>
              ))}
            </div>
          </div>

    </>
  )
}

export default LeftNav2