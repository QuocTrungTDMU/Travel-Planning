import NavBarComponent from "./Components/NavBarComponent";
import BookingCardComponent from "./Components/BookingCardComponent";
import FooterComponent from "./Components/FooterComponent";
import UpCommingTrips from "./Components/UpCommingTrip";
import bg_img from '../../Assets/carousel-2.jpg';
import { Outlet } from "react-router-dom";
function DefaultLayout() {
  return (
    <div className="mx-auto">
      <UpCommingTrips/>
      <>
        <NavBarComponent/>
        {/* Header Start */}
        <div
          className="bg-cover bg-center"
          style={{ backgroundImage: `url(${bg_img})` }}
        >
          <div className="container mx-auto flex flex-col items-center justify-center h-[400px] text-center">
            <h1 className="text-7xl text-white uppercase">Services</h1>
            <div className="flex items-center text-white mt-4">
              <p className="uppercase text-2xl">
                <a className="hover:underline" href="/">
                  Home
                </a>
              </p>
              <i className="fa fa-angle-double-right px-3 text-2xl">&gt;&gt;</i>
              <p className="uppercase text-2xl">Services</p>
            </div>
          </div>
        </div>
        {/* Header End */}
        <BookingCardComponent/>
      </>
        <Outlet/>
      <FooterComponent/>
    </div>
  );
}

export default DefaultLayout;
