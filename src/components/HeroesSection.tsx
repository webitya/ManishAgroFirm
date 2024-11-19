import poster from "../assets/photos/agricylture_poster.jpg";

const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-gradient-to-r from-green-100 to-blue-100 p-8 items-center">
      {/* Left Section: Text Content */}
      <div className="flex-1 flex justify-center items-center">
        <div className="h-fit flex flex-col gap-6 text-center lg:text-left">
          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1f2937] tracking-wide flex flex-col gap-2">
            Experience Our <span className="text-[#4c956c]">Original Products</span>
          </h2>
          
          {/* Paragraph */}
          <p className="text-base sm:text-lg lg:text-xl max-w-full lg:w-[34rem] text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, pariatur? Repudiandae eius vitae minima praesentium ratione necessitatibus, illum soluta blanditiis.
          </p>
          
          {/* Buttons */}
          <div className="flex gap-4 justify-center lg:justify-start">
            <button
              className="text-lg sm:text-xl bg-[#4c956c] rounded-xl px-4 py-2 text-white transition-transform transform hover:scale-105 hover:text-black"
            >
              Get In Touch
            </button>
            <button
              className="text-lg sm:text-xl border bg-white border-[#4c956c] rounded-xl px-4 py-2 text-black transition-transform transform hover:scale-105 hover:border-blue-400 hover:text-blue-400"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
      
      {/* Right Section: Image */}
      <div className="flex-1 flex justify-center mt-8 lg:mt-0">
        <img
          src={poster}
          alt="Agriculture Poster"
          className="w-[20rem] h-[20rem] sm:w-[24rem] sm:h-[24rem] lg:w-[30rem] lg:h-[30rem] object-cover rounded-lg transform hover:scale-105 transition-transform"
        />
      </div>
    </div>
  );
};

export default HeroSection;
