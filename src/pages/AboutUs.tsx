import Space from "../components/Space";
import pic7 from "../assets/photos/pic7.jpg";
import CallToActions from "../components/CallToActions";
import VisibilityIcon from '@mui/icons-material/Visibility';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const AboutUs = () => {
  return (
    <div>
      {/* Space Component */}
      <Space />

      {/* Hero Section */}
      <div className="flex bg-gradient-to-r from-green-100 to-blue-100 p-8 md:min-h-[60vh] min-h-[35vh] flex-col md:flex-row">
        <div className="flex-1 flex justify-center items-center ">
          <h2 className="text-4xl md:text-6xl font-extrabold text-[#1f2937] tracking-wide flex justify-center gap-2">
            About <span className="text-[#4c956c]">Us</span>
          </h2>
        </div>
      </div>

      {/* "Who We Are" Section */}
      <div className="p-8 flex flex-col lg:flex-row gap-4 items-center">
        {/* Text Section */}
        <div className="flex flex-col gap-8 flex-1 p-4 lg:p-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1f2937]">
            Who we are!
          </h2>
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl lg:text-3xl font-bold text-[#1f2937]">
              Manish Argo Firms
            </h3>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel labore nihil repellendus iste atque
              adipisci assumenda, provident nesciunt suscipit, obcaecati omnis! Vero laboriosam nemo ipsum
              veritatis labore nihil tempore facere tenetur quibusdam laborum recusandae deleniti ea nisi autem
              sit aut saepe sed quos, obcaecati molestias est, voluptatibus repellat amet! Libero quas dolore
              atque voluptatibus ullam aliquam modi quisquam maiores beatae.
            </p>
            <i>"Moto of the Company"</i>
            <button className="text-lg lg:text-xl bg-[#4c956c] rounded-xl px-4 py-2 text-white transform transition-transform hover:scale-105 hover:text-black w-52">
              Get In Touch
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 p-4 lg:p-12">
          <img
            src={pic7}
            alt="About Us"
            className="rounded-md hover:scale-105 transition-all"
          />
        </div>
      </div>

      {/* Mission and Vision Cards Section */}
      <div className="flex flex-col lg:flex-row gap-4 p-8 bg-blue-100 items-center">
        {/* Mission Card */}
        <div className="p-6 flex flex-col items-center gap-4 bg-white shadow-xl rounded-lg w-full lg:w-1/2">
          <EmojiEventsIcon style={{ height: "4rem", width: "4rem", color: "#4c956c" }} />
          <h2 className="text-2xl lg:text-3xl text-[#1f2937] text-center font-semibold">
            Our Mission
          </h2>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eaque deserunt maiores odit ex. Vel
            consequatur harum possimus dicta, doloribus ab. Quae molestiae unde saepe, minus quod culpa
            voluptatibus autem quidem doloribus atque totam tempore dolore odio corrupti eligendi est?
          </p>
        </div>

        {/* Vision Card */}
        <div className="p-6 flex flex-col items-center gap-4 bg-white shadow-xl rounded-lg w-full lg:w-1/2">
          <VisibilityIcon style={{ height: "4rem", width: "4rem", color: "#4c956c" }} />
          <h2 className="text-2xl lg:text-3xl text-[#1f2937] text-center font-semibold">
            Our Vision
          </h2>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eaque deserunt maiores odit ex. Vel
            consequatur harum possimus dicta, doloribus ab. Quae molestiae unde saepe, minus quod culpa
            voluptatibus autem quidem doloribus atque totam tempore dolore odio corrupti eligendi est?
          </p>
        </div>
      </div>

      {/* Call to Actions Component */}
      <CallToActions />
    </div>
  );
};

export default AboutUs;
