// import { useState } from 'react';
// import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
// import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
// import CategoryIcon from '@mui/icons-material/Category';
// import ExploreIcon from '@mui/icons-material/Explore';

// export const Expertise = () => {

//     return(
//         <div className="w-[90%] mx-auto mb-32 mt-16 flex flex-col gap-24 relative">
//             <h2 className="text-4xl uppercase text-[#4c956c] text-center">Reason why you should trust us.</h2>
//             <div className="w-[42rem] h-px bg-[#4c956c] absolute top-12 left-1/2 -translate-x-1/2"></div>
            
//             <div className="flex justify-between">
//                 <ReasonCard title={"expertise"} des={"With over 35 year of experince of making high quality and multitudes of different products,Madhavs Creation can proudly calim high expertise."}>
//                     <MilitaryTechIcon style={{fontSize:'4rem', color: "#4c956c"}}/>
//                 </ReasonCard>

//                 <ReasonCard title={"quality"} des={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad fugiat placeat dolor recusandae error repellat quasi nisi mollitia velit est ipsam odio eligendi soluta incidunt"}>
//                     <AssignmentTurnedInIcon style={{fontSize:'4rem', color: "#4c956c"}}/>
//                 </ReasonCard>

//                 <ReasonCard title={"range"} des={" Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aperiam aliquid,cumque alias qui nesciunt fugit! Aliquid blanditiis iusto."}>
//                     <CategoryIcon style={{fontSize:'4rem', color: "#4c956c"}}/>
//                 </ReasonCard>

//                 <ReasonCard title={"reach"} des={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam facilis iste praesentium.Nam mollitia ducimus, atque obcaecati dolore rem voluptas praesentium hic cum "}>
//                     <ExploreIcon style={{fontSize:'4rem', color: "#4c956c"}}/>
//                 </ReasonCard>
//             </div>
//         </div>
//     );
// }

// interface PropType{
//     children: React.ReactNode,
//     title: string,
//     des: string
// }

// function ReasonCard({ children, title, des }: PropType) {
//     const [hoverBoxShadow, setHoverBoxShadow]= useState(false);

//     function handleMouseEnter() {
//         setHoverBoxShadow(true);
//     }

//     function handleMouseLeave() {
//         setHoverBoxShadow(false);
//     }
//     return(
//         <div 
//         className="w-[15rem] flex flex-col gap-10 items-center p-4" 
//         style={{
//             boxShadow: hoverBoxShadow? 
//             "0px 3px 5px 4px rgba(0, 0, 0, 0.1)": 
//             "none",
//             transition: "box-shadow 150ms ease-in-out"
//         }}
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//         >
//         {children}
//         <div className='flex flex-col items-center gap-2'>
//             <h3 className="text-3xl capitalize font-semibold">{title}</h3>
//             <p className="text-center text-sm">
//                 {des}
//             </p>
//             </div>
//         </div>
//     );
// }


import { useState } from 'react';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import CategoryIcon from '@mui/icons-material/Category';
import ExploreIcon from '@mui/icons-material/Explore';

export const Expertise = () => {
    return (
        <div className="w-[90%] mx-auto mb-32 mt-16 flex flex-col gap-8 items-center">
    <h2 className="text-4xl uppercase text-[#4c956c] text-center">Reason why you should trust us.</h2>
    <div className="w-[80%] max-w-[42rem] h-px bg-[#4c956c]"></div>

    <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between gap-8 md:gap-14">
        <ReasonCard title="Expertise" des="With over 35 years of experience making high-quality and a variety of different products, Madhavs Creation can proudly claim high expertise.">
            <MilitaryTechIcon style={{ fontSize: '4rem', color: "#4c956c" }} />
        </ReasonCard>
        <ReasonCard title="Quality" des="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad fugiat placeat dolor recusandae error repellat quasi nisi mollitia velit est ipsam odio eligendi soluta incidunt.">
            <AssignmentTurnedInIcon style={{ fontSize: '4rem', color: "#4c956c" }} />
        </ReasonCard>
        <ReasonCard title="Range" des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aperiam aliquid, cumque alias qui nesciunt fugit! Aliquid blanditiis iusto.">
            <CategoryIcon style={{ fontSize: '4rem', color: "#4c956c" }} />
        </ReasonCard>
        <ReasonCard title="Reach" des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam facilis iste praesentium. Nam mollitia ducimus, atque obcaecati dolore rem voluptas praesentium hic cum.">
            <ExploreIcon style={{ fontSize: '4rem', color: "#4c956c" }} />
        </ReasonCard>
    </div>
</div>

    );
};

interface PropType {
    children: React.ReactNode;
    title: string;
    des: string;
}

function ReasonCard({ children, title, des }: PropType) {
    const [hoverBoxShadow, setHoverBoxShadow] = useState(false);

    function handleMouseEnter() {
        setHoverBoxShadow(true);
    }

    function handleMouseLeave() {
        setHoverBoxShadow(false);
    }

    return (
        <div
            className="w-1/2 sm:w-[12.5rem] md:w-[13.15rem]  flex flex-col gap-6 items-center p-4 transition-all duration-300"
            style={{
                boxShadow: hoverBoxShadow ? "0px 3px 5px 4px rgba(0, 0, 0, 0.1)" : "none",
                transition: "box-shadow 150ms ease-in-out"
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {children}
            <div className="flex flex-col items-center gap-2">
                <h3 className="text-2xl md:text-3xl capitalize font-semibold">{title}</h3>
                <p className="text-center text-sm">{des}</p>
            </div>
        </div>
    );
}

