import { useContext, useState } from "react";
import { overlayContext } from "../App";

import CloseIcon from '@mui/icons-material/Close';
import pic1 from "../assets/photos/pic1.jpg";
import pic2 from "../assets/photos/pic2.jpg";
import pic3 from "../assets/photos/pic3.jpg";
import pic4 from "../assets/photos/pic4.jpg";
import pic5 from "../assets/photos/pic5.jpg";
import pic6 from "../assets/photos/pic6.jpg";
import "../assets/styles/Component.css";

const GalleryContainer = () => {
  const pics = [pic1, pic2, pic3, pic4, pic5, pic6];
  const Value = useContext(overlayContext);
  const [isFadingOut, setIsFadingOut] = useState(false);

  function handleClick(event: React.MouseEvent<HTMLDivElement>) {
    const { id } = event.currentTarget;
    Value?.setImage(pics[Number(id)]);
  }

  function handleCancelClick() {
    setIsFadingOut(true);
    setTimeout(() => Value?.setImage(undefined), 300);
    setTimeout(() => {
      setIsFadingOut(false);
    }, 400);
  }

  return (
    <div className="px-4 py-12">
      {/* Gallery Heading */}
      <h2 className="text-4xl font-bold text-[#1f2937] text-center mb-8">Gallery</h2>
      
      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {pics.map((pic, index) => (
          <div
            id={String(index)}
            key={index}
            className="w-full cursor-pointer"
            onClick={handleClick}
          >
            <img
              src={pic}
              alt={`Gallery Image ${index + 1}`}
              className="object-cover h-52 w-full rounded-md hover:scale-105 transition-transform"
            />
          </div>
        ))}
      </div>

      {/* Modal for Enlarged Image */}
      {Value?.image && (
        <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50`}>
          <div className={`relative ${isFadingOut ? 'fade-out' : 'fade-in'}`}>
            <img
              src={Value?.image}
              alt="Enlarged View"
              className="max-w-full max-h-[80vh] rounded-lg object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white bg-gray-800 rounded-full p-2 hover:bg-gray-600 transition"
              onClick={handleCancelClick}
            >
              <CloseIcon style={{ width: "2rem", height: "2rem" }} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryContainer;
