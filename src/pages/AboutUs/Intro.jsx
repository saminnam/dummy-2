import React from "react";
import { GrStatusGood } from "react-icons/gr";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <section className="py-10 bg-gray-50 overflow-hidden sm:py-16 lg:py-24">
      <div className="flex flex-col gap-3 items-center justify-center">
        <h2 className="lg:text-6xl text-4xl title-font" data-aos="fade-down">
          About Eshwar
        </h2>
        <div className="h-[4px] w-[100px] bg-amber-950 rounded"></div>
      </div>
      <div className="px-4 mt-24 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-stretch gap-y-10 md:grid-cols-2 md:gap-x-10">
          <div className="relative grid grid-cols-2 gap-6 mt-10 md:mt-0">
            <div
              className="overflow-hidden aspect-w-3 aspect-h-4"
              data-aos="flip-left"
              data-aos-duration="1500"
            >
              <img
                className="object-cover object-top origin-top scale-150"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/features/2/team-work.jpg"
                alt="img"
              />
            </div>
            <div className="relative">
              <div
                className="h-full overflow-hidden aspect-w-3 aspect-h-4"
                data-aos="zoom-in-up"
                data-aos-duration="1500"
              >
                <img
                  className="object-cover scale-150 lg:origin-bottom-right"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/features/2/woman-working-on-laptop.jpg"
                  alt="img"
                />
              </div>
            </div>
            <div
              className="absolute -translate-x-1/2 left-1/2 -top-16"
              data-aos="fade-down-right"
              data-aos-duration="1500"
            >
              <img
                className="w-32 h-32"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/features/2/round-text.png"
                alt="img"
              />
            </div>
          </div>
          <div className="flex flex-col items-start xl:px-16">
            <h2 className="text-4xl font-serif font-bold" data-aos="fade-up">
              Best Construction Solutiuon
            </h2>
            <h3
              className="text-xl font-bold text-[#451910] my-5"
              data-aos="fade-up"
            >
              Professional Design Agency to provide solutions
            </h3>
            {/* <p className="text-amber-900 mt-2 text-xl font-bold">Lorem ipsum, dolor sit amet consectetur adipisicing</p> */}
            <p
              className="text-lg leading-relaxed text-gray-600"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cum
              voluptates sunt reiciendis molestias maxime consequatur blanditiis
              sint ipsam, ipsa ab.
            </p>
            <div className="flex gap-5 mt-7 items-center">
              <div
                className="p-5 w-[150px] border border-gray-400 shadow-lg bg-white"
                data-aos="zoom-in-down"
                data-aos-duration="1500"
              >
                <img
                  src="https://thumbs.dreamstime.com/b/quality-rubber-stamp-vector-83211803.jpg"
                  alt="img"
                />
              </div>
              <div className="flex-col flex gap-3">
                <div
                  className="flex items-center gap-2"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <GrStatusGood className="text-2xl text-green-600" />
                  <p className="text-lg">ipsum dolor lorem ipsum dolor</p>
                </div>
                <div
                  className="flex items-center gap-2"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <GrStatusGood className="text-2xl text-green-600" />
                  <p className="text-lg">ipsum dolor lorem ipsum dolor</p>
                </div>
                <div
                  className="flex items-center gap-2"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <GrStatusGood className="text-2xl text-green-600" />
                  <p className="text-lg">ipsum dolor lorem ipsum dolor</p>
                </div>
              </div>
            </div>
            <Link to="/contact" className="mt-10 w-[170px]">
              <button className="primary-btn w-full hover:bg-transparent hover:text-[#00A63E] border transition-all duration-300 border-[#00A63E] cursor-pointer text-white bg-[#00A63E]">
                Reach Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
