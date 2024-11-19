// import { useState } from "react";
// import img from "../assets/photos/Agriculture-Banner.jpg"

// import Space from "./Space";

// const Banner: React.FC = () => {
//     const [isHovered, setIsHovered]= useState<Boolean>(false);

//     function handleMouseEnter() {
//         setIsHovered(true);
//     }

//     function handleMouseLeave() {
//         setIsHovered(false);
//     }

//     return(
//         <div>
//             <Space />
//             <div 
//             className="w-full h-[70vh] relative" 
//             onMouseEnter={handleMouseEnter} 
//             onMouseLeave={handleMouseLeave}
//             >
//                 <img src={img} alt="Banner" className="w-full h-full object-cover object-center"/>
//                 <div 
//                 className="absolute z-10 transition-all duration-500 w-full h-full bg-[#00000080]"
//                 style={{top: isHovered?"0px":"-35rem"}}
//                 ></div>
                
//                 <div 
//                 className={`absolute -translate-y-1/2 flex flex-col gap-2 z-20  left-1/2 
//                 -translate-x-1/2 w-1/2 text-center transition-all duration-500`}
//                 style={{top: isHovered?"50%":"-13rem"}}
//                 >
//                     <h2 className="text-5xl font-semibold font-mono text-white">
//                         Manish Argo Firm
//                     </h2>
//                     <p className="text-white text-lg">
//                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti enim mollitia soluta
//                         vero sunt,fugiat totam? Natus nihil ex autem! Esse, quia sint similique quisquam 
//                         mollitia eligendi ipsam nesciunt itaque ullam iusto minus excepturi nemo. Tempora 
//                         ullam quibusdam dolor itaque.
//                     </p>
//                     <div className="flex justify-center gap-3">
//                         <button className="bg-white hover:bg-[#4c956c] hover:text-white  px-6 py-3 rounded-md">LEARN MORE</button>
//                         <button className="bg-white hover:bg-[#4c956c] hover:text-white transition-colors duration-300 px-6 py-3 rounded-md ">CONTACT US</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Banner;

import { useState } from "react";
import img from "../assets/photos/Agriculture-Banner.jpg";
import Space from "./Space";

const Banner: React.FC = () => {
    const [isHovered, setIsHovered] = useState<Boolean>(false);

    function handleMouseEnter() {
        setIsHovered(true);
    }

    function handleMouseLeave() {
        setIsHovered(false);
    }

    return (
        <div>
            <Space />
            <div 
                className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] relative" 
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave}
            >
                <img 
                    src={img} 
                    alt="Banner" 
                    className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] object-cover object-center"
                />
                <div 
                    className="absolute z-10 transition-all duration-500 w-full h-[50vh] sm:h-[60vh] md:h-[70vh] bg-[#00000080] flex flex-col md:gap-4 gap-3 items-center justify-center"
                    style={{ top: isHovered ? "0" : "-100%" }}
                >
                    <h2 className="text-3xl md:text-5xl font-semibold font-mono text-white">
                        Manish Agro Firm
                    </h2>
                    <p className="text-white text-sm md:text-lg md:w-[55%] lg:w-1/2 w-2/3 text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti enim mollitia soluta
                        vero sunt, fugiat totam? Natus nihil ex autem! Esse, quia sint similique quisquam 
                        mollitia eligendi ipsam nesciunt itaque ullam iusto minus excepturi nemo. Tempora 
                        ullam quibusdam dolor itaque.
                    </p>
                    <div className="flex justify-center gap-2 md:gap-3">
                        <button className="bg-white text-sm md:text-base hover:bg-[#4c956c] hover:text-white px-4 md:px-6 py-2 md:py-3 rounded-md">
                            LEARN MORE
                        </button>
                        <button className="bg-white text-sm md:text-base hover:bg-[#4c956c] hover:text-white transition-colors duration-300 px-4 md:px-6 py-2 md:py-3 rounded-md">
                            CONTACT US
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Banner;
