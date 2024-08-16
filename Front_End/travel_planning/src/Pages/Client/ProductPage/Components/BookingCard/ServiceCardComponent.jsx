import React from 'react'

const BookingCardComponent = () => {
  return (
    <div>
         {/* Service Start */}
         <div className="py-12">
          <div className="container mx-auto text-center">
            <div className="mb-8">
              <h6 className="text-primary text-2xl text-[#7AB730] uppercase tracking-widest">Services</h6>
              <h1 className="text-5xl font-semibold">Tours & Travel Services</h1>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-white shadow-lg p-8 text-center">
                <div className="border-2 border-transparent hover:border-[#7AB730] transition flex items-center justify-center w-20 h-20 mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24"><g fill="none" stroke="#7AB730" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}><path d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0"></path><circle cx={12} cy={8} r={2}></circle><path d="M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712"></path></g></svg>
                </div>
                <h5 className="text-xl mb-2">Travel Guide</h5>
                <p className="text-gray-600">Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem est amet labore</p>
              </div>
              <div className="bg-white shadow-lg p-8 text-center">
                <div className="border-2 border-transparent hover:border-[#7AB730] transition flex items-center justify-center w-20 h-20 mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 576 512"><path fill="#7AB730" d="M128 160h320v192H128zm400 96c0 26.51 21.49 48 48 48v96c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48v-96c26.51 0 48-21.49 48-48s-21.49-48-48-48v-96c0-26.51 21.49-48 48-48h480c26.51 0 48 21.49 48 48v96c-26.51 0-48 21.49-48 48m-48-104c0-13.255-10.745-24-24-24H120c-13.255 0-24 10.745-24 24v208c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24z"></path></svg>
                </div>
                <h5 className="text-xl mb-2">Ticket Booking</h5>
                <p className="text-gray-600">Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem est amet labore</p>
              </div>
              <div className="bg-white shadow-lg p-8 text-center">
                <div className="border-2 border-transparent hover:border-[#7AB730] transition flex items-center justify-center w-20 h-20 mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 576 512"><path fill="#7AB730" d="M560 64c8.84 0 16-7.16 16-16V16c0-8.84-7.16-16-16-16H16C7.16 0 0 7.16 0 16v32c0 8.84 7.16 16 16 16h15.98v384H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h240v-80c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v80h240c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16h-16V64zm-304 44.8c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8zm0 96c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8zm-128-96c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8zM179.2 256h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4c0 6.4-6.4 12.8-12.8 12.8M192 384c0-53.02 42.98-96 96-96s96 42.98 96 96zm256-140.8c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8zm0-96c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8z"></path></svg>
                </div>
                <h5 className="text-xl mb-2">Hotel Booking</h5>
                <p className="text-gray-600">Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem est amet labore</p>
              </div>
              <div className="bg-white shadow-lg p-8 text-center">
                <div className="border-2 border-transparent hover:border-[#7AB730] transition flex items-center justify-center w-20 h-20 mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24"><g fill="none" stroke="#7AB730" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}><path d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0"></path><circle cx={12} cy={8} r={2}></circle><path d="M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712"></path></g></svg>
                </div>
                <h5 className="text-xl mb-2">Travel Guide</h5>
                <p className="text-gray-600">Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem est amet labore</p>
              </div>
              <div className="bg-white shadow-lg p-8 text-center">
                <div className="border-2 border-transparent hover:border-[#7AB730] transition flex items-center justify-center w-20 h-20 mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 576 512"><path fill="#7AB730" d="M128 160h320v192H128zm400 96c0 26.51 21.49 48 48 48v96c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48v-96c26.51 0 48-21.49 48-48s-21.49-48-48-48v-96c0-26.51 21.49-48 48-48h480c26.51 0 48 21.49 48 48v96c-26.51 0-48 21.49-48 48m-48-104c0-13.255-10.745-24-24-24H120c-13.255 0-24 10.745-24 24v208c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24z"></path></svg>
                </div>
                <h5 className="text-xl mb-2">Ticket Booking</h5>
                <p className="text-gray-600">Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem est amet labore</p>
              </div>
              <div className="bg-white shadow-lg p-8 text-center">
                <div className="border-2 border-transparent hover:border-[#7AB730] transition flex items-center justify-center w-20 h-20 mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 576 512"><path fill="#7AB730" d="M560 64c8.84 0 16-7.16 16-16V16c0-8.84-7.16-16-16-16H16C7.16 0 0 7.16 0 16v32c0 8.84 7.16 16 16 16h15.98v384H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h240v-80c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v80h240c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16h-16V64zm-304 44.8c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8zm0 96c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8zm-128-96c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8zM179.2 256h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4c0 6.4-6.4 12.8-12.8 12.8M192 384c0-53.02 42.98-96 96-96s96 42.98 96 96zm256-140.8c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8zm0-96c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8z"></path></svg>
                </div>
                <h5 className="text-xl mb-2">Hotel Booking</h5>
                <p className="text-gray-600">Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem est amet labore</p>
              </div>
            </div>
          </div>
        </div>

        {/* Service End */}
    </div>
  )
}

export default BookingCardComponent