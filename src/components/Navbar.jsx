// import React, { useState } from 'react'
// import { styles } from '../style'
// import { Link } from 'react-router-dom'
// import { glogo } from '../assets'
// const Navbar = () => {
//   const [active, setActive] = useState('')
//   return (
//     <nav className={
//       `${styles.paddingX} w-full flex items-center py-5 relative top-0 z-20 bg-primary`
//     }>
//       <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
//         <Link to="/" className='flex items-center gap-2'
//           onClick={() => {
//             setActive("");
//             window.scrollTo(0, 0)
//           }}>
//           {/* <img src={glogo} className='w-9 h-9 object-contain' alt="logo"></img> */}
//           <svg className="w-9 h-9 object-contain" xmlns="http://www.w3.org/2000/svg"
//             version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink"
//             xmlnsSvgjs="http://svgjs.dev/svgjs" width="1500" height="1500"
//             viewBox="0 0 1500 1500"><rect width="1500" height="1500"
//               fill="#000000"></rect>
//             <g transform="matrix(0.6666666666666666,0,0,0.6666666666666666,249.39393939393938,435.99032258064517)">
//               <svg viewBox="0 0 396 248" data-background-color="#ffffff" preserveAspectRatio="xMidYMid meet" height="939" width="1500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
//                 <g id="tight-bounds" transform="matrix(1,0,0,1,0.2400000000000091,0.4000000000000057)">
//                   <svg viewBox="0 0 395.52 247.2" height="247.2" width="395.52">
//                     <g><svg></svg></g><g>
//                       <svg viewBox="0 0 395.52 247.2" height="247.2" width="395.52">
//                         <g transform="matrix(1,0,0,1,134.88824361917622,47.215199999999996)">
//                           <svg viewBox="0 0 125.74351276164754 152.7696" height="152.7696" width="125.74351276164754">
//                             <g><svg viewBox="0 0 125.74351276164754 152.7696" height="152.7696" width="125.74351276164754">
//                               <g><svg viewBox="0 0 125.74351276164754 152.7696" height="152.7696" width="125.74351276164754">
//                                 <g><svg viewBox="0 0 125.74351276164754 152.7696" height="152.7696" width="125.74351276164754">
//                                   <g id="textblocktransform">
//                                     <svg viewBox="0 0 125.74351276164754 152.7696" height="152.7696" width="125.74351276164754" id="textblock"><g>
//                                       <svg viewBox="0 0 125.74351276164754 152.7696" height="152.7696" width="125.74351276164754">
//                                         <g transform="matrix(1,0,0,1,0,0)"><svg width="125.74351276164754" viewBox="1.34 -35.4 29.76 36.16" height="152.7696" data-palette-color="#2a2c35"><path d="M31.1-17.36L31.1-3.54Q28.66-1.46 25.66-0.35 22.66 0.76 19.41 0.76L19.41 0.76Q16.92 0.76 14.61 0.11 12.3-0.54 10.3-1.72 8.3-2.91 6.64-4.55 4.98-6.2 3.81-8.22 2.64-10.23 1.99-12.55 1.34-14.87 1.34-17.36L1.34-17.36Q1.34-19.85 1.99-22.14 2.64-24.44 3.81-26.45 4.98-28.47 6.64-30.11 8.3-31.76 10.3-32.93 12.3-34.11 14.61-34.75 16.92-35.4 19.41-35.4L19.41-35.4Q22.66-35.4 25.66-34.29 28.66-33.18 31.1-31.1L31.1-31.1 27.44-25Q25.85-26.61 23.78-27.53 21.7-28.44 19.41-28.44L19.41-28.44Q17.11-28.44 15.1-27.56 13.09-26.68 11.57-25.18 10.06-23.68 9.18-21.67 8.3-19.65 8.3-17.36L8.3-17.36Q8.3-15.04 9.18-13.01 10.06-10.99 11.57-9.47 13.09-7.96 15.1-7.08 17.11-6.2 19.41-6.2L19.41-6.2Q20.73-6.2 21.97-6.52 23.22-6.84 24.34-7.4L24.34-7.4 24.34-17.36 31.1-17.36Z" opacity="1" transform="matrix(1,0,0,1,0,0)" fill="#ffffff" class="wordmark-text-0" data-fill-palette-color="primary" id="text-0">
//                                         </path>
//                                         </svg></g></svg></g></svg></g></svg></g></svg></g></svg></g>


//                           </svg>
//                         </g><path d="M317.19 41.215L317.19 0 69.99 0 69.99 247.2 317.19 247.2 317.19 205.985 303.413 205.985 303.413 233.423 83.766 233.423 83.766 13.777 303.413 13.777 303.413 41.215Z" fill="#ffffff" stroke="transparent" data-fill-palette-color="tertiary"></path></svg></g><defs></defs>
//                   </svg><rect width="395.52" height="247.2" fill="none" stroke="none" visibility="hidden">
//                   </rect></g></svg></g>
//           </svg>
//           <p className='text-white text-[18px] font-bold cursor-pointer'>Gyanesh <span>React js Developer</span></p>
//         </Link>
//       </div>
//     </nav>
//   )
// }

// export default Navbar
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../style";
import { navLinks } from "../constants";
import { glogo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false)
  return (
    <nav
      className={`${styles.paddingX
        } w-full flex items-center py-5 fixed top-0 z-20`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={glogo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Gyanesh &nbsp;
            <span className='sm:block hidden'> | Reactjs Developer</span>
          </p>
        </Link>
        <ul className="list-none hidden flex-row sm:flex gap-10">
          {navLinks.map((link) => (
            <li key={link.id} onClick={() => setActive(link.title)} className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain cursor-pointer" onClick={() => setToggle(!toggle)} />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.id} onClick={() => {
                  setToggle(!toggle);
                  setActive(link.title);
                  }} className={`${active === link.title ? "text-white" : "text-secondary"} font-poppins text-[16px] font-medium cursor-pointer`}>
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;