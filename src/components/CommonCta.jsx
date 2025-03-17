import React from "react";
import { Link } from "react-router-dom";

const CommonCta = () => {
  return (
    <section className="mt-44 bg-gray-50">
      <div className="relative py-10 bg-[#417642] h-[300px] bg-no-repeat bg-cover bg-center ">
        <div className="absolute w-full bottom-0 mx-auto px-4">
          <div className="container mx-auto ">
            <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 ">
              <div>
                <div className="lg:block lge:block md:hidden mdsm:hidden sm:hidden ">
                  <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/045/592/909/small_2x/men-wear-vest-jacket-on-yellow-helmet-worker-on-transparent-background-png.png"
                    alt="person "
                    className="h-[500px] mx-auto "
                  />
                </div>
              </div>
              <div className="col-span-2 relative ">
                <div className="absolute bottom-0 py-10">
                  <h3 className="text-[#c7b130] font-serif relative after:bg-[#fff] after:w-[10%] text-4xl font-semibold   pb-4">
                    Get a Free Quote
                  </h3>
                  <h4 className=" text-[#fff]  text-[20px] ">
                    Looking for reliable logistics solutions? Get a free,
                    no-obligation quote today and discover how we can streamline
                    your supply chain.
                    {/* <span className=" text-[#c7b130]  underline underline-[#fff] underline-offset-2 ">
                      Request your quote now!
                    </span> */}
                  </h4>
                  <Link to={"/contact"}>
                    <button className="text-white hover:text-[#c7b130] cursor-pointer transition-all duration-300 border-[#c7b130] bg-[#c7b130] rounded-lg py-3 px-10 mt-4 hover:bg-[#fff] ">
                      Contact Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommonCta;
