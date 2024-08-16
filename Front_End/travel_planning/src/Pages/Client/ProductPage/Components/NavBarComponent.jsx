import React, { useState } from "react";

const NavBarComponent = () => {
  const [activeItem, setActiveItem] = useState("home");

  const handleMenuItemClick = (item) => {
    setActiveItem(item);
  };

  const handleSelectChange = (e) => {
    const selectedItem = e.target.value;
    setActiveItem(selectedItem);

    // window.location.href = `#${selectedItem}`; // de navigator sang trang can thiet
  };

  return (
    <div>
      {/* Navbar Start */}
      <div className="relative w-full">
        <div className="container mx-auto relative z-10">
          <nav className="bg-white shadow-lg py-4 px-6 lg:px-12 flex justify-between items-center">
            <a href="/" className="text-2xl font-bold text-primary">
              <h1 className="m-0 text-primary text-[#7AB730]">
                <span className="text-black">TRAVEL</span>ER
              </h1>
            </a>
            <button type="button" className="navbar-toggler lg:hidden">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="hidden lg:flex space-x-6">
              <a
                href="/"
                onClick={() => handleMenuItemClick("home")}
                className={`text-primary ${
                  activeItem === "home"
                    ? "font-bold text-[#7AB730]"
                    : "hover:text-primary"
                }`}
              >
                Home
              </a>
              <a
                href="#"
                onClick={() => handleMenuItemClick("about")}
                className={`text-primary ${
                  activeItem === "about"
                    ? "font-bold text-[#7AB730]"
                    : "hover:text-primary"
                }`}
              >
                About
              </a>
              <a
                href="#"
                onClick={() => handleMenuItemClick("services")}
                className={`text-primary ${
                  activeItem === "services"
                    ? "font-bold text-[#7AB730]"
                    : "hover:text-primary"
                }`}
              >
                Services
              </a>
              <a
                href="#"
                onClick={() => handleMenuItemClick("package")}
                className={`text-primary ${
                  activeItem === "package"
                    ? "font-bold text-[#7AB730]"
                    : "hover:text-primary"
                }`}
              >
                Tour Packages
              </a>

              {/* Select for Pages */}
              <select
                value={activeItem}
                onChange={handleSelectChange}
                className="text-gray-800 hover:text-primary cursor-pointer appearance-none bg-transparent relative pl-3 pr-8"
                // onClick={() => handleMenuItemClick('page')}
                // className={`text-primary ${activeItem === 'page' ? 'font-bold text-[#7AB730]' : 'hover:text-primary'}`}
                style={{
                  backgroundImage: `url('data:image/svg+xml;charset=US-ASCII,<svg xmlns="http://www.w3.org/2000/svg" fill="%237AB730" width="24" height="24" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg>')`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 1px center",
                  backgroundSize: "16px",
                }}
              >
                <option value="pages">Pages</option>
                <option
                  value="blog-grid"
                  className="hover:bg-[#7AB730] hover:text-white"
                >
                  Blog Grid
                </option>
                <option
                  value="blog-detail"
                  className="hover:bg-[#7AB730] hover:text-white"
                >
                  Blog Detail
                </option>
                <option
                  value="destination"
                  className="hover:bg-[#7AB730] hover:text-white"
                >
                  Destination
                </option>
                <option
                  value="travel-guides"
                  className="hover:bg-[#7AB730] hover:text-white"
                >
                  Travel Guides
                </option>
                <option
                  value="testimonial"
                  className="hover:bg-[#7AB730] hover:text-white"
                >
                  Testimonial
                </option>
              </select>
              <a
                href="#"
                onClick={() => handleMenuItemClick("contact")}
                className={`text-primary ${
                  activeItem === "contact"
                    ? "font-bold text-[#7AB730]"
                    : "hover:text-primary"
                }`}
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
};

export default NavBarComponent;
