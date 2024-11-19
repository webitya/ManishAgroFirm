import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import logo from "../assets/photos/logo.png";

const Footer = () => {
  const currentYear = new Date();
  const pageStyle = `text-sm w-fit hover:text-green-700 font-medium tracking-widest capitalize transition-colors duration-300`;
  const getInTouchStyle = `text-sm font-medium tracking-widest text-center`;

  return (
    <div className="bg-[#202020]">
      {/* Main Footer Content */}
      <div className="flex flex-col md:flex-row flex-wrap gap-12 justify-center text-white py-16 items-center">
        {/* Logo and Brand Section */}
        <div className="flex flex-col gap-4 items-center text-center">
          <div className="w-full h-0.5 bg-white"></div>
          <h2 className="text-3xl font-cursive font-semibold tracking-wider capitalize">
            <a href="#">Manish Agro Firms</a>
          </h2>
          <img src={logo} alt="logo" className="w-20" />
        </div>

        {/* Pages Links Section */}
        <div className="flex flex-col gap-4 items-center text-center">
          <div className="w-full h-0.5 bg-white"></div>
          <h2 className="uppercase text-2xl font-semibold tracking-widest">Pages</h2>
          <ul className="flex flex-col gap-3 items-center">
            {['Products', 'Gallery', 'About Us', 'Contact Us'].map((page, index) => (
              <li key={index} className={pageStyle}>
                <a href="#">{page}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Get In Touch Section */}
        <div className="flex flex-col gap-4 items-center text-center">
          <div className="w-full h-0.5 bg-white"></div>
          <h2 className="capitalize text-2xl font-semibold tracking-wider">Get In Touch</h2>
          <ul className="space-y-2">
            <li className={getInTouchStyle}>c/o: Manish Raj</li>
            <li className={getInTouchStyle}>Phone: +91 9304404578</li>
            <li className={getInTouchStyle}>Email: XYZ@gmail.com</li>
            <li className={getInTouchStyle}>
              Address: Hajam Dundigara, Namkum, Ranchi, Jharkhand, 835221
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col gap-4 items-center text-center">
          <div className="w-full h-0.5 bg-white"></div>
          <h2 className="capitalize text-2xl font-semibold tracking-wider">Social Media</h2>
          <ul className="flex gap-6 justify-center">
            <li>
              <a href="#" className="hover:text-green-500">
                <WhatsAppIcon fontSize="large" />
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                <FacebookIcon fontSize="large" />
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">
                <XIcon fontSize="large" />
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500">
                <InstagramIcon fontSize="large" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="bg-[#1a1a1a] py-4 px-6 text-gray-400 flex flex-col sm:flex-row justify-between items-center text-center">
        <p className="text-lg font-semibold">Privacy Policy</p>
        <p className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <span className="text-lg font-medium">
            &copy; {currentYear.getFullYear()} Manish Agro Firms
          </span>
        </p>
      </div>

      {/* Made by Webitya Web Services Section */}
      <div className="bg-[#141414] py-6 text-center text-white">
        <p className="text-lg font-semibold">
          Made By{' '}
          <a
            href="https://webitya.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:text-green-700 underline transition-colors duration-300"
          >
            Webitya Web Services
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
