import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TechCard from './TechCard';
import './TechCarousel.css';

const TechCarousel = ({ data, rtl = false }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 9000,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        pauseOnHover: true,
        cssEase: 'linear',
        rtl: rtl,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className='carousel-container'>
            <Slider {...settings}>
                {data.map((val, ind) => (
                    <TechCard key={ind} imgsrc={val.imgsrc} title={val.title} />
                ))}
            </Slider>
        </div>
    );
};
export default TechCarousel;
