// import product from "../assets/photos/product_Img.png"
// import product2 from "../assets/photos/products_img_2.png"
// import product3 from "../assets/photos/products_img_3.png"

// const HomeProducts:React.FC= ()=> {
//     type contentType={
//         id: string,
//         img: string,
//         name: string,
//         amount: number,
//         inStock: boolean
//     }

//     const ContentArray :contentType[] =[
//         {
//             id: '1',
//             img: product3,
//             name: "Tulip Flair Flower Bulb",
//             amount: 456,
//             inStock: true
//         },
//         {
//             id: '2',
//             img: product2,
//             name: "Tulip Flower Bulb Any Color",
//             amount: 234,
//             inStock: true
//         },
//         {
//             id: '3',
//             img: product,
//             name: "Tulip Flower Bulb Any Color",
//             amount: 123,
//             inStock: false
//         },
//         {
//             id: '4',
//             img: product3,
//             name: "Tulip Flower Bulb Any Color",
//             amount: 65,
//             inStock: true
//         },
//         {
//             id: '5',
//             img: product2,
//             name: "Tulip Flower Bulb Any Color",
//             amount: 345,
//             inStock: false
//         }
//     ]

//     return (
//         <div>
//             <div className="flex justify-between items-center py-6 px-12">
//                 <span className="text-2xl font-semibold">Our Products</span>
//                 <button
//                 className="text-lg text-[#4c956c] font-medium hover:-translate-x-4 transition-all duration-500"
//                 >
//                     View all
//                 </button>
//             </div>
//             <div className="flex gap-4 justify-center">
//                 {
//                     ContentArray.map((item: contentType) => {
//                         return(
//                             <div className="p-6 bg-white shadow flex flex-col gap-4" id={item.id}>
//                                 <div className="w-52 h-52 overflow-hidden">
//                                     <img
//                                         src={item.img}
//                                         alt="product-image"
//                                         className="object-cover hover:scale-105 transition-all duration-700"
//                                     />
//                                 </div>
//                                 <h3 className="w-52 text-lg font-medium">{item.name}</h3>
//                                 <span className="text-2xl font-medium ">Rs. {(item.amount).toFixed(2)}</span>
//                                 <div className="flex gap-2 items-center">
//                                     {
//                                         item.inStock?
//                                         <>
//                                             <div className="w-2 h-2 rounded-full bg-[#4c956c]"></div>
//                                             <span className="text-[#4c956c]">In stock</span>
//                                         </>
//                                         :
//                                         <>
//                                             <div className="w-2 h-2 rounded-full bg-[#ee0000]"></div>
//                                             <span className="text-[#ee0000]">Out of stock</span>
//                                         </>

//                                     }
//                                 </div>
//                             </div>
//                         );
//                     })
//                 }
//             </div>
//         </div>
//     );
// }

// export default HomeProducts;

import product from "../assets/photos/product_Img.png";
import product2 from "../assets/photos/products_img_2.png";
import product3 from "../assets/photos/products_img_3.png";

const HomeProducts: React.FC = () => {
  type contentType = {
    id: string;
    img: string;
    name: string;
    amount: number;
    inStock: boolean;
  };

  const ContentArray: contentType[] = [
    {
      id: "1",
      img: product3,
      name: "Tulip Flair Flower Bulb",
      amount: 456,
      inStock: true,
    },
    {
      id: "2",
      img: product2,
      name: "Tulip Flower Bulb Any Color",
      amount: 234,
      inStock: true,
    },
    {
      id: "3",
      img: product,
      name: "Tulip Flower Bulb Any Color",
      amount: 123,
      inStock: false,
    },
    {
      id: "4",
      img: product3,
      name: "Tulip Flower Bulb Any Color",
      amount: 65,
      inStock: true,
    },
    {
      id: "5",
      img: product2,
      name: "Tulip Flower Bulb Any Color",
      amount: 345,
      inStock: false,
    },
  ];

  return (
    <div className="px-4 md:px-12">
      <div className="flex flex-col md:flex-row justify-between items-center py-6">
        <span className="text-2xl font-semibold">Our Products</span>
        <button className="text-lg text-[#4c956c] font-medium hover:-translate-x-2 transition-all duration-500 mt-4 md:mt-0">
          View all
        </button>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {ContentArray.map((item: contentType) => (
          <div
            className="p-4 bg-white shadow-md flex flex-col gap-3 w-full sm:w-[200px] md:w-[250px] lg:w-[250px] xl:w-[250px] min-h-[300px] max-w-xs"
            key={item.id}
          >
            <div className="w-full h-32 sm:h-36 md:h-40 overflow-hidden">
              <img
                src={item.img}
                alt="product-image"
                className="object-cover w-full h-full hover:scale-105 transition-all duration-700"
              />
            </div>
            <h3 className="text-lg font-medium text-center">{item.name}</h3>
            <span className="text-xl font-medium text-center">
              Rs. {item.amount.toFixed(2)}
            </span>
            <div className="flex gap-2 items-center justify-center">
              {item.inStock ? (
                <>
                  <div className="w-2 h-2 rounded-full bg-[#4c956c]"></div>
                  <span className="text-[#4c956c]">In stock</span>
                </>
              ) : (
                <>
                  <div className="w-2 h-2 rounded-full bg-[#ee0000]"></div>
                  <span className="text-[#ee0000]">Out of stock</span>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeProducts;
