import React, { useState } from "react";
import Slider from "react-slick";
import bg_video from "../../assets/videos/hero-bg.mp4";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image:
        "https://i.pinimg.com/1200x/6a/f7/ce/6af7ced476844d14c56b2c7b579eca6d.jpg",
      title: (
        <>
          Delivering <span className="bg-yellow-300">Quality</span> Construction
          with Professionalism.
        </>
      ),
      description:
        "We turn every own house dream into a stunning reality at Eshwar Construction. We specialize in building homes and commercial spaces that last for generations. Our skilled workmanship, modern designs, and customer satisfaction make us a prime choice for those seeking perfection in their future home.",
    },
    {
      image:
        "https://i.pinimg.com/1200x/6a/f7/ce/6af7ced476844d14c56b2c7b579eca6d.jpg",
      title: (
        <div className="lg:w-[700px] lg:leading-18">
          Taking construction to a
          <span className="bg-yellow-300"> new dimension</span>.
        </div>
      ),
      description:
        "Eshwar Construction never misses the precision, durability, and aesthetic appeal of residential, commercial, or infrastructure development.",
    },
  ];

  const settings = {
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  return (
    <section className="">
      <video
        src={bg_video}
        autoPlay
        muted
        playsInline
        loop
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-[#f8f8f8b7]"></div>
      <div className="flex container mx-auto lg:flex-row lg:mt-0 mt-10 md:flex-row flex-col flex-wrap overflow-hidden items-center">
        <div className="w-full md:w-8/12">
          <div className="h-full sm:p-10">
            <div className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
              <div className="w-full">
                <h1 className="text-4xl lg:text-6xl font-medium title-font animate__animated animate__fadeInDown">
                  {slides[currentSlide].title}
                </h1>
                <div className="w-20 h-2 bg-amber-950 rounded my-4"></div>
                <p className="text-xl mb-10 text-gray-500" data-aos="fade-up">
                  {slides[currentSlide].description}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:mb-0 mb-16 md:w-4/12 h-[450px] overflow-y-hidden lg:h-[600px]">
          <Slider {...settings} className="h-full">
            {slides.map((slide, index) => (
              <div key={index} className="h-full">
                <img
                  src={slide.image}
                  alt="Construction"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Hero;
