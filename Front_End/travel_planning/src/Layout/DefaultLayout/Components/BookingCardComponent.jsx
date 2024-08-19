import React from 'react'

const BookingCardComponent = () => {
  return (
    <div>
          {/* Booking Start */}
          <div className=" mt-[-100px] relative z-10">
          <div className="container mx-auto px-4">
            <div className="bg-white shadow-lg p-8">
              <div className="grid md:grid-cols-5 gap-4 items-center">
                <div className="col-span-3 md:col-span-4 grid md:grid-cols-4 gap-4">
                  <select className="form-select px-4 py-2 border border-gray-300 rounded">
                    <option selected>Destination</option>
                    <option value="1">Destination 1</option>
                    <option value="2">Destination 2</option>
                    <option value="3">Destination 3</option>
                  </select>
                  <input type="text" className="px-4 py-2 border border-gray-300 rounded" placeholder="Depart Date" />
                  <input type="text" className="px-4 py-2 border border-gray-300 rounded" placeholder="Return Date" />
                  <select className="form-select px-4 py-2 border border-gray-300 rounded">
                    <option selected>Duration</option>
                    <option value="1">Duration 1</option>
                    <option value="2">Duration 2</option>
                    <option value="3">Duration 3</option>
                  </select>
                </div>
                <div>
                  <button className="w-full bg-[#7AB730] text-white py-2 rounded">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Booking End */}
    </div>
  )
}

export default BookingCardComponent