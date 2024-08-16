import React, { useState } from 'react';

const NavBarComponent = () => {
  // State to track the active menu item
  const [activeItem, setActiveItem] = useState('home');

  // Function to handle menu item click
  const handleMenuItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div>
      {/* Navbar Start */}
      <div className="relative w-full">
        <div className="container mx-auto relative z-10">
          <nav className="bg-white shadow-lg py-4 px-6 lg:px-12 flex justify-between items-center">
            <a href="#" className="text-2xl font-bold text-primary">
              <h1 className="m-0 text-primary text-[#7AB730]">
                <span className="text-black">TRAVEL</span>ER
              </h1>
            </a>
            <button type="button" className="navbar-toggler lg:hidden">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="hidden lg:flex space-x-6">
              <a
                href="#"
                onClick={() => handleMenuItemClick('home')}
                className={`text-gray-800 ${activeItem === 'home' ? 'text-primary font-bold text-[#7AB730]' : 'hover:text-primary'}`}
              >
                Home
              </a>
              <a
                href="#"
                onClick={() => handleMenuItemClick('about')}
                className={`text-gray-800 ${activeItem === 'about' ? 'text-primary font-bold text-[#7AB730]' : 'hover:text-primary'}`}
              >
                About
              </a>
              <a
                href="#"
                onClick={() => handleMenuItemClick('services')}
                className={`text-primary ${activeItem === 'services' ? 'font-bold text-[#7AB730]' : 'hover:text-primary'}`}
              >
                Services
              </a>
              <a
                href="#"
                onClick={() => handleMenuItemClick('tour-packages')}
                className={`text-gray-800 ${activeItem === 'tour-packages' ? 'text-primary font-bold text-[#7AB730]' : 'hover:text-primary'}`}
              >
                Tour Packages
              </a>
              <div className="relative">
              <a
                href="#"
                onClick={() => handleMenuItemClick('pages')}
                className={`text-gray-800 ${activeItem === 'pages' ? 'text-primary font-bold text-[#7AB730]' : 'hover:text-primary'}`}
              >
                Pages
              </a>
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg hidden group-hover:block">
                  <a
                    href="#"
                    onClick={() => handleMenuItemClick('blog-grid')}
                    className={`block px-4 py-2 ${activeItem === 'blog-grid' ? 'text-primary font-bold text-[#7AB730]' : 'text-gray-800 hover:bg-gray-100'}`}
                  >
                    Blog Grid
                  </a>
                  <a
                    href="#"
                    onClick={() => handleMenuItemClick('blog-detail')}
                    className={`block px-4 py-2 ${activeItem === 'blog-detail' ? 'text-primary font-bold text-[#7AB730]' : 'text-gray-800 hover:bg-gray-100'}`}
                  >
                    Blog Detail
                  </a>
                  <a
                    href="#"
                    onClick={() => handleMenuItemClick('destination')}
                    className={`block px-4 py-2 ${activeItem === 'destination' ? 'text-primary font-bold text-[#7AB730]' : 'text-gray-800 hover:bg-gray-100'}`}
                  >
                    Destination
                  </a>
                  <a
                    href="#"
                    onClick={() => handleMenuItemClick('travel-guides')}
                    className={`block px-4 py-2 ${activeItem === 'travel-guides' ? 'text-primary font-bold text-[#7AB730]' : 'text-gray-800 hover:bg-gray-100'}`}
                  >
                    Travel Guides
                  </a>
                  <a
                    href="#"
                    onClick={() => handleMenuItemClick('testimonial')}
                    className={`block px-4 py-2 ${activeItem === 'testimonial' ? 'text-primary font-bold text-[#7AB730]' : 'text-gray-800 hover:bg-gray-100'}`}
                  >
                    Testimonial
                  </a>
                </div>
              </div>
              <a
                href="#"
                onClick={() => handleMenuItemClick('contact')}
                className={`text-gray-800 ${activeItem === 'contact' ? 'text-primary font-bold text-[#7AB730]' : 'hover:text-primary'}`}
              >
                Contact
              </a>
            </div>
          </nav>
        </div>
      </div>
      {/* Navbar End */}
    </div>
  );
}

export default NavBarComponent;
