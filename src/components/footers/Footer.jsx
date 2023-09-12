import React from 'react';
import CompanyLogo from '../../assets/mainlogo.png';
import { FaFacebook, FaInstagram,FaTwitter,FaLinkedinIn } from "react-icons/fa";
import appstoreLogo from "../../assets/appstore.png";
import playStoreLogo from "../../assets/playstore_logo.png";

function Footer() {
  const helveticaFontStyle = {
    fontFamily: 'Montserrat', // Specify Helvetica as the primary font, with fallbacks
    fontSize:20,
    fontWeight:"normal"
  };

  return (
    <footer className="bg-pink-500 py-16 text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
        <div className="col-span-1 md:col-span-2 lg:col-span-2 flex flex-col items-center">
          {/* Include your company logo */}
          <img src={CompanyLogo} alt="Company Logo" width={260} height={260} />
          <h1 className="px-20" style={helveticaFontStyle}>Design and development company of creative technology professionals.</h1>
          
          {/* Add social media icons */}
          <div className="space-x-4 p-5 text-center flex">

            <a href="#" className="text-white hover:text-gray-400">
              <FaFacebook style={{ width: 20, height: 20 }} />
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <FaLinkedinIn style={{ width: 20, height: 20 }} />
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <FaTwitter style={{ width: 20, height: 20 }} />
            </a>
            
            <a href="#" className="text-white hover:text-gray-400">
              <FaInstagram style={{ width: 20, height: 20 }} />
            </a>
          </div>
          
        </div>
        {/* Add additional columns */}
        <div className="col-span-1 lg:col-span-1">
          {/* Content for the first additional column */}
          <h1 style={helveticaFontStyle
        }>Home</h1>
        </div>
        <div className="col-span-1 lg:col-span-1">
          <h1 style={helveticaFontStyle}>Home</h1>
          {/* Content for the second additional column */}
        </div>
        <div className="col-span-1 lg:col-span-1 flex flex-col items-center">
          <h1 style={helveticaFontStyle}>Available</h1>
          <img className='py-0 m-0' src={appstoreLogo} style={{ width: 200, height: 200, margin: '0', padding: '0' }} />
          <img src={playStoreLogo} style={{ width: 200, height: 100, margin: '0', padding: '0' }} />
          {/* Content for the third additional column */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
