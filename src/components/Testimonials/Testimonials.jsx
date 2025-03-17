import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "UX Designer",
    image: "https://randomuser.me/api/portraits/women/91.jpg",
    feedback:
      "This product exceeded all my expectations. It's intuitive, powerful, and has dramatically improved my workflow. I can't imagine working without it now!",
  },
  {
    id: 2,
    name: "David Smith",
    role: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    feedback:
      "Absolutely love it! The performance boost and ease of use are unmatched. Highly recommend to anyone looking for a seamless experience.",
  },
  {
    id: 3,
    name: "Emily White",
    role: "Product Manager",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    feedback:
      "A game-changer for our team! The integration and features make it a must-have for productivity and efficiency.",
  },
  {
    id: 4,
    name: "Michael Brown",
    role: "Marketing Specialist",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
    feedback:
      "I've tried many tools before, but this one stands out. The user-friendly interface and powerful features make it indispensable.",
  },
  {
    id: 5,
    name: "Sophia Martinez",
    role: "Entrepreneur",
    image: "https://randomuser.me/api/portraits/women/23.jpg",
    feedback:
      "It's the best investment I've made! The support team is fantastic, and the continuous updates make it even better.",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    infinite: true,
    slidesToScroll: 1,
    centerPadding: "60px",
    className: "center",
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="md:py-20 py-10 md:px-10 px-5 bg-[#F4F4F4]">
      <div className="flex flex-col gap-3 items-center justify-center md:mb-15 mb-10">
        <h2 className="lg:text-6xl text-4xl title-font" data-aos="fade-down">What Our Client Say's</h2>
        <div className="h-[4px] w-[100px] bg-amber-950 rounded"></div>
      </div> 
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="px-4">
            <div className="relative overflow-hidden bg-gradient-to-r from-[#BA825B] to-[#421A10] rounded-xl shadow-2xl p-8 text-white">
              <div className="absolute top-0 left-0 w-full bg-white opacity-10 transform -skew-x-12"></div>
              <div className="relative z-10">
                <svg className="w-12 h-12 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-xl font-medium mb-4">"{testimonial.feedback}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 border-2 border-purple-300"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonials;
