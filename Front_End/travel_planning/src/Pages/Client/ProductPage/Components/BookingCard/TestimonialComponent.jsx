import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../../../../../Assets/testimoinial/testimonial-1.jpg';
import img2 from '../../../../../Assets/testimoinial/testimonial-2.jpg';
import img3 from '../../../../../Assets/testimoinial/testimonial-3.jpg';
import img4 from '../../../../../Assets/testimoinial/testimonial-4.jpg';
import { FaStar } from 'react-icons/fa'; // Sử dụng FontAwesome để thêm icon ngôi sao

const TestimonialsComponent = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const renderStars = (rating) => {
        return [...Array(5)].map((_, index) => (
            <FaStar
                key={index}
                className={`text-yellow-500 ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
            />
        ));
    };

    return (
        <div className="container-fluid py-5 flex justify-center">
            <div className="container py-5">
                <div className="text-center mb-3 pb-3">
                <h6 className="text-primary text-2xl text-[#7AB730] uppercase tracking-widest">TESTIMONIAL</h6>
                <h1 className="text-5xl font-semibold">What Say Our Clients</h1>
                </div>
                <Slider {...settings}>
                    {[img1, img2, img3, img4].map((img, idx) => (
                        <div key={idx}>
                            <div className="text-center pb-4">
                                <img
                                    className="img-fluid mx-auto"
                                    src={img}
                                    style={{ width: '100px', height: '100px' }}
                                    alt={`Client ${idx + 1}`}
                                />
                                <div className="testimonial-text bg-slate-200 p-4 mt-n5 shadow-lg mx-52">
                                    <div className="mt-5">
                                        <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                                        <div className="flex justify-center mt-2">
                                            {renderStars(4)} {/* Giả sử mỗi khách hàng đánh giá 4 sao */}
                                        </div>
                                        <h5 className="text-truncate mt-3">Client Name</h5>
                                        <span>Profession</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default TestimonialsComponent;
