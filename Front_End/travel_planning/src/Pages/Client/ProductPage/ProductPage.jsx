import React from 'react';
import {
  BookingCardComponent,
  FooterComponent,
  ServiceCardComponent,
  TestimonialComponent,
  UpcomingTrips,
} from "./Components";
// import bookings from './data/bookings'
import bg_img from '../../../Assets/carousel-2.jpg';
import NavBarComponent from './Components/NavBarComponent';

const ProductPage = () => {
  return (
    <div className='w-screen-full'>
      <UpcomingTrips />
      <>
        <NavBarComponent />
        {/* Header Start */}
        <div className="bg-cover bg-center" style={{ backgroundImage: `url(${bg_img})` }}>
          <div className="container mx-auto flex flex-col items-center justify-center h-[400px] text-center">
            <h1 className="text-7xl text-white uppercase">Services</h1>
            <div className="flex items-center text-white mt-4">
              <p className="uppercase text-2xl"><a className="hover:underline" href="/">Home</a></p>
              <i className="fa fa-angle-double-right px-3 text-2xl">&gt;&gt;</i>
              <p className="uppercase text-2xl">Services</p>
            </div>
          </div>
        </div>
        {/* Header End */}

        <BookingCardComponent />

        <ServiceCardComponent />
      </>
      
      <TestimonialComponent/>

      <FooterComponent/>


    </div>

  )
}

export default ProductPage;
