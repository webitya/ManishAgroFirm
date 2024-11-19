type CardType= {
    children: React.ReactNode,
    title:string,
    para:string
}

const Cards = ({ children,title,para }: CardType) => {
    return(
        <div className='flex flex-col gap-3  items-center bg-white px-6 py-8 rounded-xl hover:shadow-md'>
            {children}
            <h3 className='text-xl text-black'>
                {title}
            </h3>
            <p className='text-lg text-center w-80'>
                {para}
            </p>
        </div>
    );
}

export default Cards;