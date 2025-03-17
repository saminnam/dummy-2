import React from "react";
import {
  FaTools,
  FaPaintBrush,
  FaClock,
  FaGem,
  FaHandshake,
} from "react-icons/fa";
import "./WhyChooseUs.css";

const services = [
  {
    title: "Expertise You Can Trust",
    description: "Decades of experience in the construction industry.",
    icon: <FaTools />,
    aos: "zoom-in",
    step: "01",

  },
  {
    title: "Customized Solutions",
    description: "Tailored designs that reflect your vision and needs.",
    icon: <FaPaintBrush />,
    aos: "zoom-in-up",
    step: "02",
  },
  {
    title: "Timely Execution",
    description: "Efficient project management to meet deadlines.",
    icon: <FaClock />,
    aos: "zoom-in",
    step: "03",
  },
  {
    title: "Uncompromising Quality",
    description: "Premium materials and skilled craftsmanship.",
    icon: <FaGem />,
    aos: "zoom-in",
    step: "04",
  },
  {
    title: "Transparency & Integrity",
    description: "Clear communication with no hidden costs.",
    icon: <FaHandshake />,
    aos: "zoom-in",
    step: "05",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="md:py-20 bg-pattern overflow-hidden py-10 md:px-10 px-5">
      <div className="flex flex-col gap-3 items-center justify-center">
        <h2 className="lg:text-6xl text-4xl title-font" data-aos="fade-down">
          Why Choose Eshwaran Construction ?
        </h2>
        <div className="h-[4px] w-[100px] bg-amber-950 rounded"></div>
      </div>
      <div className="flex flex-wrap items-center justify-center mt-10">
        {services.map((data, index) => (
          <div className="w-full relative px-4 md:w-1/2 lg:w-1/3" key={index}>
            <div className="mb-9 bg-white  rounded-xl group overflow-y-hidden h-[270px] py-8 px-7 shadow-md card-bg transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9" data-aos={data.aos}>
              <div className="text-9xl text-gray-100 absolute right-2 top-0 font-serif">{data.step}</div>
              <div className="mx-auto mb-7 group-hover:bg-white inline-block transition-all duration-300 text-3xl border rounded-full border-gray-400 p-5 text-yellow-300">
                {data.icon}
              </div>
              <div>
                <h3 className="mb-4 text-xl font-bold group-hover:text-white transition-all duration-300 text-black sm:text-2xl lg:text-xl xl:text-2xl">
                  {data.title}
                </h3>
                <p className="text-base font-medium group-hover:text-white transition-all duration-300 text-gray-500">
                  {data.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
