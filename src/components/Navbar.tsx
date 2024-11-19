// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import logo from "../assets/photos/logo.png";

// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// export default function Navbar() {
//     const navigate= useNavigate();
//     const [isOnMenubarItem, setIsOnMenuBarItem] = useState<boolean>(false);
//     const hoverStyle={
//         backgroundColor:isOnMenubarItem?"rgba(255, 255, 255, 0.15)":undefined,
//         transition:"all ease-in-out 300ms"
//     }

//     function handleMouseEnter() {
//         setIsOnMenuBarItem(true);
//     }
//     function handleMouseLeave() {
//         setIsOnMenuBarItem(false);
//     }

//     return(
//         <nav 
//         className="flex px-16 py-3 shadow-xl justify-between items-center w-[100vw] bg-[#4c956c] text-[white] fixed z-30">
            
//             <a
//              href='/' 
//             onClick={(event) => { 
//                 event.preventDefault();
//                 navigate('/')
//             }}
//             className='flex gap-1 items-center'
//             >
//                 <img src={logo} alt="logo" className='w-12'/>
//                 <h1 className='text-3xl font-bold'>
//                     Manish Agro Firms
//                 </h1>
//             </a>
//             <ul className="flex justify-between items-center w-[40%] font-semibold">
//                 <li 
//                 onMouseEnter={handleMouseEnter}
//                 onMouseLeave={handleMouseLeave}
//                 >
//                     <a 
//                     href='/products'
//                     onClick={(event) => { 
//                         event.preventDefault();
//                         navigate('/products')
//                     }}
//                     className='flex items-center relative px-3 py-1.5 rounded-lg' 
//                     style={hoverStyle}
//                     >
//                         Products <KeyboardArrowDownIcon style={{
//                             height: '1.15rem', 
//                             transform:isOnMenubarItem?"rotate(180deg)":undefined,
//                             transition:"all ease-in-out 200ms"
//                         }}/>
//                     </a> 
//                     <div className='bg-transparent'>
//                         <div className='absolute top-[48px] w-28 h-3 bg-transparent cursor-pointer'></div>
//                         <ul
//                         className={
//                             `absolute text-black top-[60px] right-[31%] translate-x-[31%] shadow-lg 
//                             w-52 p-6 bg-[white] transform origin-top 
//                             ${isOnMenubarItem? 'scale-100': 'scale-0'} flex flex-col gap-3 z-50`
//                         }
//                         style={{transition: "all ease-in-out 300ms"}}
//                         >
//                             <li className='tracking-wide hover:text-[#2ecc71] hover:translate-x-1 transition-all'> <a href="#">E-C materials</a> </li>
//                             <li className='tracking-wide hover:text-[#2ecc71] hover:translate-x-1 transition-all'> <a href="#">Medicinal plants</a> </li>
//                             <li className='tracking-wide hover:text-[#2ecc71] hover:translate-x-1 transition-all'> <a href="#">Cereal</a> </li>
//                             <li className='tracking-wide hover:text-[#2ecc71] hover:translate-x-1 transition-all'> <a href="#">Vegetables</a> </li>
//                         </ul>
//                     </div>
//                 </li>
//                 <li> 
//                     <a 
//                     href="/gallery" 
//                     className='hover:bg-[#ffffff26] px-6 py-1.5 rounded-lg' 
//                     style={{transition:"all ease-in-out 300ms"}}
//                     onClick={(event) => { 
//                         event.preventDefault();
//                         navigate('/gallery')
//                     }}
//                     > 
//                         Gallery 
//                     </a> 
//                 </li>
//                 <li> 
//                     <a 
//                     href='/about-us' 
//                     className='hover:bg-[#ffffff26] px-4 py-1.5 rounded-lg' 
//                     style={{transition:"all ease-in-out 300ms"}}
//                     onClick={(event) => { 
//                         event.preventDefault();
//                         navigate('/about-us')
//                     }}
//                     >
//                         About Us
//                     </a> 
//                 </li>
//                 <li> 
//                     <a 
//                     href='/contact-us' 
//                     className='hover:bg-[#ffffff26] px-3 py-1.5 rounded-lg'
//                     onClick={(event) => { 
//                         event.preventDefault();
//                         navigate('/contact-us')
//                     }}
//                     >
//                         Contact Us
//                     </a> 
//                 </li>
//             </ul>
//         </nav>
//     );
// }



import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import logo from "../assets/photos/logo.png";

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate();
    const [isOnMenubarItem, setIsOnMenubarItem] = useState<boolean>(false);
    const hoverStyle = {
        backgroundColor: isOnMenubarItem ? "rgba(255, 255, 255, 0.15)" : undefined,
        transition: "all ease-in-out 300ms"
    }

    function handleMouseEnter() {
        setIsOnMenubarItem(true);
    }
    function handleMouseLeave() {
        setIsOnMenubarItem(false);
    }

    return (
        <nav className="flex px-6 lg:px-12 md:px-8 py-3 shadow-xl justify-between items-center w-full bg-[#4c956c] text-white fixed z-30" style={{userSelect:"none"}}>
            <a
                href='/'
                onClick={(event) => {
                    event.preventDefault();
                    navigate('/')
                }}
                className='flex gap-1 items-center'
            >
                <img src={logo} alt="logo" className='w-10 md:w-12' />
                <h1 className='text-xl md:text-3xl font-bold'>
                    Manish Agro Firms
                </h1>
            </a>
            <ul className="hidden md:flex justify-between items-center w-[52.5%] lg:w-[40%] font-semibold">
                <li
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <a
                        href='/products'
                        onClick={(event) => {
                            event.preventDefault();
                            navigate('/products')
                        }}
                        className='flex items-center relative px-2 md:px-3 py-1.5 rounded-lg'
                        style={hoverStyle}
                    >
                        Products <KeyboardArrowDownIcon style={{
                            height: '1.15rem',
                            transform: isOnMenubarItem ? "rotate(180deg)" : undefined,
                            transition: "all ease-in-out 200ms"
                        }} />
                    </a>
                    <div className='bg-transparent'>
                        <div className='absolute top-[48px] w-28 h-3 bg-transparent cursor-pointer'></div>
                        <ul
                            className={`
                                absolute text-black top-[60px] right-[31%] translate-x-[31%] shadow-lg 
                                w-52 p-6 bg-white transform origin-top 
                                ${isOnMenubarItem ? 'scale-100' : 'scale-0'} flex flex-col gap-3 z-50
                            `}
                            style={{ transition: "all ease-in-out 300ms" }}
                        >
                            <li className='tracking-wide hover:text-[#2ecc71] hover:translate-x-1 transition-all'> <Link to="/products">Fertilizer</Link> </li>
                            <li className='tracking-wide hover:text-[#2ecc71] hover:translate-x-1 transition-all'> <Link to="/products">Fruits</Link></li>
                            
                            <li className='tracking-wide hover:text-[#2ecc71] hover:translate-x-1 transition-all'> <Link to="/products">Flowers</Link> </li>
                            <li className='tracking-wide hover:text-[#2ecc71] hover:translate-x-1 transition-all'> <Link to="/products">Vegetables</Link> </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <a
                        href="/gallery"
                        className='hover:bg-[#ffffff26] px-4 md:px-6 py-1.5 rounded-lg'
                        style={{ transition: "all ease-in-out 300ms" }}
                        onClick={(event) => {
                            event.preventDefault();
                            navigate('/gallery')
                        }}
                    >
                        Gallery
                    </a>
                </li>
                <li>
                    <a
                        href='/about-us'
                        className='hover:bg-[#ffffff26] px-4 py-1.5 rounded-lg'
                        style={{ transition: "all ease-in-out 300ms" }}
                        onClick={(event) => {
                            event.preventDefault();
                            navigate('/about-us')
                        }}
                    >
                        About Us
                    </a>
                </li>
                <li>
                    <a
                        href='/contact-us'
                        className='hover:bg-[#ffffff26] px-3 py-1.5 rounded-lg'
                        onClick={(event) => {
                            event.preventDefault();
                            navigate('/contact-us')
                        }}
                    >
                        Contact Us
                    </a>
                </li>
            </ul>

            {/* Hamburger Menu for Mobile */}
            <div className="md:hidden">
                <button
                    className="text-white focus:outline-none"
                    onClick={() => setIsOnMenubarItem(!isOnMenubarItem)}
                >
                    {/* Add a hamburger icon here, or use an icon library */}
                    ☰ 
                </button>
                {isOnMenubarItem && (
                    <ul 
                    className="absolute right-4 top-14 bg-[white] text-black w-40 p-4 rounded-lg shadow-lg flex flex-col gap-3 z-50">
                        <li>
                            <a
                                href='/products'
                                onClick={(event) => {
                                    event.preventDefault();
                                    navigate('/products')
                                    setIsOnMenubarItem(false);
                                }}
                                className='block hover:bg-[#00000048] px-1.5 py-0.5'
                            >
                                Products
                            </a>
                        </li>
                        <li>
                            <a
                                href="/gallery"
                               className='block hover:bg-[#00000048] px-1.5 py-0.5'
                                onClick={(event) => {
                                    event.preventDefault();
                                    navigate('/gallery')
                                    setIsOnMenubarItem(false);
                                }}
                            >
                                Gallery
                            </a>
                        </li>
                        <li>
                            <a
                                href='/about-us'
                                className='block hover:bg-[#00000048] px-1.5 py-0.5'
                                onClick={(event) => {
                                    event.preventDefault();
                                    navigate('/about-us')
                                    setIsOnMenubarItem(false);
                                }}
                            >
                                About Us
                            </a>
                        </li>
                        <li>
                            <a
                                href='/contact-us'
                                className='block hover:bg-[#00000048] px-1.5 py-0.5'
                                onClick={(event) => {
                                    event.preventDefault();
                                    navigate('/contact-us')
                                    setIsOnMenubarItem(false);
                                }}
                            >
                                Contact Us
                            </a>
                        </li>
                    </ul>
                )}
            </div>
        </nav>
    );
}
