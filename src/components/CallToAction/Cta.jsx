import React from "react";
import { Link } from "react-router-dom";
import cta from "../../assets/cta-bg.jpg";

const Cta = () => {
  return (
    <section id="cta" class="relative py-10 overflow-hidden bg-black sm:py-16 lg:py-18 xl:py-24">
      <div class="absolute inset-0">
        <img
          class="object-cover w-full h-full"
          src={cta}
          alt="cta-bg"
        />
      </div>
      <div class="absolute inset-0 hidden bg-gradient-to-r md:block from-[#4e271b] to-transparent"></div>
      <div class="absolute inset-0 block bg-black/60 md:hidden"></div>
      <div class="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl" data-aos="fade-up-right">
        <div class="text-center md:w-2/3 lg:w-1/2 xl:w-1/3 md:text-left">
          <h2 class="text-3xl font-bold font-serif leading-tight text-white sm:text-4xl lg:text-5xl" data-aos="fade-up">
            Get full access to Celebration
          </h2>
          <p class="mt-4 text-base text-gray-200" data-aos="fade-up">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam.
          </p>
          <form class="mt-8 lg:mt-12" data-aos="fade-up">
            <div class="flex flex-col items-center sm:flex-row sm:justify-center">
              <div class="flex-1 w-full min-w-0 px-4 sm:px-0">
                <div class="relative text-gray-400 focus-within:text-gray-600">
                  <label for="email" class="sr-only"></label>
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      class="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      />
                    </svg>
                  </div>
                  <input type="text" disabled name="text" className="px-4 w-full py-4 md:rounded-s-xl bg-gray-200 transition-all focus:outline-none focus:bg-gray-200 focus:shadow-inset"/>
                </div>
              </div>
              <Link
                to={"/contact"}
                type="submit"
                class="inline-flex items-center justify-center flex-shrink-0 w-auto px-4 py-4 mt-4 font-semibold text-white transition-all duration-200 bg-[#16A34A] border border-[#16A34A] rounded-md sm:mt-0 sm:rounded-l-none sm:w-auto hover:bg-[#16A34A] cursor-pointer"
              >
                Reach us
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Cta;
