import { useRef } from 'react';
import emailjs from 'emailjs-com';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

type InputType = {
  type: string;
  placeHolder: string;
  name: string;
};

const Input = ({ type, placeHolder, name }: InputType) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeHolder}
      className="border border-[#4c956c] outline-none px-4 py-2 text-lg rounded-md w-full bg-white focus:border-blue-400 transition-colors"
    />
  );
};

const Form = () => {
  const formRef = useRef<HTMLFormElement>(null);

  // Function to handle form submission using EmailJS
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (formRef.current) {
      emailjs
        .sendForm(
          'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
          'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
          formRef.current,
          'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
        )
        .then(
          () => {
            alert('Message Sent Successfully!');
          },
          () => {
            alert('Failed to send message. Please try again.');
          }
        );
      formRef.current.reset();
    }
  };

  const socialIconStyle = "w-12 h-12 rounded-md bg-white flex justify-center items-center";

  return (
    <div className="w-full h-auto lg:h-[90vh] bg-[url('/src/assets/photos/Banner2.jpg')] bg-center bg-cover p-6 lg:p-12">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-24">
        {/* Left Section */}
        <div className="flex flex-col gap-6 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold max-w-lg">
            We can't wait for you to try our product!
          </h2>
          <div className="flex justify-center lg:justify-start gap-4 items-center">
            <a href="#" className={socialIconStyle}>
              <WhatsAppIcon style={{ width: '2.5rem', height: '2.5rem', color: '#4c956c' }} />
            </a>
            <a href="#" className={socialIconStyle}>
              <FacebookIcon style={{ width: '2.5rem', height: '2.5rem', color: '#4c956c' }} />
            </a>
            <a href="#" className={socialIconStyle}>
              <XIcon style={{ width: '2rem', height: '2rem', color: '#4c956c' }} />
            </a>
            <a href="#" className={socialIconStyle}>
              <InstagramIcon style={{ width: '2.5rem', height: '2.5rem', color: '#4c956c' }} />
            </a>
            <a href="#" className={socialIconStyle}>
              <LinkedInIcon style={{ width: '2.5rem', height: '2.5rem', color: '#4c956c' }} />
            </a>
          </div>
        </div>

        {/* Form Section */}
        <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-6 bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
          <h1 className="text-2xl font-medium text-gray-800 text-center">Let's Get In Touch!</h1>

          <div className="flex flex-col sm:flex-row gap-4">
            <Input type="text" placeHolder="First Name" name="firstName" />
            <Input type="text" placeHolder="Last Name" name="lastName" />
          </div>

          <Input type="text" placeHolder="Contact Number" name="contact" />
          <Input type="email" placeHolder="Email Address" name="email" />

          <textarea
            name="message"
            rows={4}
            placeholder="Send us your message..."
            className="w-full text-lg px-4 py-2 border border-[#4c956c] rounded-md outline-none bg-white focus:border-blue-400 transition-colors"
          ></textarea>

          <button
            type="submit"
            className="w-full text-xl px-4 py-2 rounded-md border-none bg-[#4c956c] text-white hover:bg-[#3b7a55] transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
