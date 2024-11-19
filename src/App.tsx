import { BrowserRouter as Router } from "react-router-dom"
import { Route,Routes } from "react-router-dom"

import { createContext,useState,SetStateAction } from "react"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Gallery from "./pages/Gallery"
import Overlay from "./components/Overlay";
import NotFound from "./components/NotFound"
import ContactUs from "./pages/ContactUs"
import AboutUs from "./pages/AboutUs"
import Product from "./pages/Product"

type overlayContextType= {
  image: string | undefined,
  setImage: React.Dispatch<SetStateAction<string | undefined>>
}
export const overlayContext= createContext<overlayContextType | undefined>(undefined);

function App() {
  const [image, setImage] = useState<string | undefined>(undefined);

  return (
    <>
    <overlayContext.Provider 
      value={{image, setImage}}
    >
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/products" element={<Product />} />
          
          {/* should be at last */}
          <Route path="*" element={<NotFound />}/>
        </Routes>
        { image && <Overlay /> }
        <Footer />
      </Router>
     </overlayContext.Provider> 
    </>
  )
}

export default App;
