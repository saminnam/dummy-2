// import React from "react";
// import "./AboutUs.css";
// import { Link } from "react-router-dom";
// import mission from "../../assets/videos/mission-video.mp4";

// const AboutUs = () => {
//   return (
//     <section className="bg-AboutUs overflow-hidden md:py-20 py-10 my-10 md:px-10 px-5">
//       <div className="container mx-auto">
//         <div className="flex flex-col gap-3 items-center justify-center md:mb-15  mb-10">
//           <h2 className="lg:text-6xl text-4xl title-font" data-aos="fade-down">
//             What We Do ?
//           </h2>
//           <div className="h-[4px] w-[100px] bg-amber-950 rounded"></div>
//         </div>
//         <div class="lg:relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
//           <div class="w-full h-64 lg:w-1/2 lg:h-[550px]" data-aos="fade-left">
//             <img
//               class="h-full w-full object-cover"
//               src="https://plus.unsplash.com/premium_photo-1682724602925-f0264b85953f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVpbGRpbmclMjBjb25zdHJ1Y3Rpb258ZW58MHx8MHx8fDA%3D"
//               alt="construction"
//               loading="lazy"
//             />
//           </div>
//           <div
//             class="max-w-lg bg-white relative md:max-w-2xl md:z-10 md:shadow-lg lg:absolute lg:top-0 md:mt-5 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12"
//             data-aos="fade-right"
//           >
//             <video
//               src={mission}
//               autoPlay
//               loop
//               muted
//               playsInline
//               className="absolute -z-50 bottom-0 right-0"
//             ></video>
//             <div class="flex group flex-col p-12 md:px-16">
//               <h2
//                 class="font-serif text-2xl font-medium uppercase text-[#00A63E] lg:text-4xl"
//                 data-aos="fade-down-right"
//               >
//                 Mission
//               </h2>
//               <p class="mt-4 text-lg text-gray-500">
//                 Our vision is to make dream living spaces a reality for every
//                 budget. With passion and dedication, we guide our clients from
//                 design finalization to the flawless completion of their dream
//                 home or space, ensuring every detail meets their expectations.
//               </p>
//               <div class="mt-8">
//                 <Link to="/about">
//                   <button className="primary-btn px-4 hover:bg-transparent hover:text-[#00A63E] border transition-all duration-300 border-[#00A63E] cursor-pointer text-white bg-[#00A63E]">
//                     Know More
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div
//           id="vission"
//           class="lg:relative flex flex-col md:gap-5 lg:gap-0 items-center mx-auto lg:flex-row lg:max-w-5xl lg:mt-12 xl:max-w-6xl"
//         >
//           <div
//             class="max-w-lg relative bg-white md:max-w-2xl md:z-10 md:shadow-lg lg:absolute lg:top-0 md:mt-5 lg:w-3/5 lg:right-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12"
//             data-aos="fade-left"
//           >
//             <div class="flex group flex-col p-12 md:px-16">
//               <h2
//                 class="font-serif text-2xl font-medium uppercase text-[#00A63E] lg:text-4xl"
//                 data-aos="fade-down-left"
//               >
//                 Vision
//               </h2>
//               <p class="mt-4 text-gray-500 text-lg">
//                 Within the next five years, our vision is to make dream homes a
//                 reality for every budget, creating spaces that blend quality,
//                 comfort, and individuality. We are committed to guiding our
//                 clients through every step of the journey from the first design
//                 sketch to the final finishing touch with a deep understanding of
//                 their aspirations.
//               </p>
//               <div class="mt-8">
//                 <Link to="/about">
//                   <button className="primary-btn px-4 hover:bg-transparent hover:text-[#00A63E] border transition-all duration-300 border-[#00A63E] cursor-pointer text-white bg-[#00A63E]">
//                     Know More
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <div class="w-full h-64 lg:w-1/2 lg:h-[550px]" data-aos="fade-right">
//             <img
//               class="h-full w-full object-cover"
//               src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/3mxES9n4fCtrwNXYqyWKaS/821300a9bf5008fb17efaac62563c9ee/Construction-workers-and-architect-looking-at-blueprints-on-construction-site-514311930_5413x3609.jpeg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000"
//               alt="construction"
//               loading="lazy"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutUs;

import React from "react";
import mission from "../../assets/mission-img.png";
import vission from "../../assets/vission.png";

const AboutUs = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="lg:h-[450px] md:h-[500px] h-[1050px]  bg-center bg-[url('https://img.freepik.com/free-photo/construction-works-frankfurt-downtown-germany_1268-20907.jpg')] bg-cover bg-no-repeat w-full">
        <div className="bg-[#00000060] lg:h-[450px] md:h-[500px] h-[1050px] absolute inset-0"></div>
        <div className="flex absolute top-10 right-0 left-0 flex-col gap-3 items-center justify-center md:mb-15 mb-10">
          <h2 className="lg:text-6xl text-4xl title-font text-white" data-aos="fade-down">
            What We Do ?
          </h2>
          <div className="h-[4px] w-[100px] bg-amber-950 rounded"></div>
        </div>
      </div>
      <div className="md:py-20 py-10 my-10 md:px-10 px-5">
        <div className="container mx-auto overflow-hidden">
          <div className="absolute md:bottom-0 md:px-10 px-5 left-0 right-0 w-full">
            <div className="grid md:grid-cols-2 grid-cols-1 justify-center w-full md:gap-[20px] gap-[95px] items-center">
              <div className="md:p-10 p-5 group relative max-width-[650px] h-full w-auto bg-white flex flex-col gap-16 items-center border border-gray-100 shadow-lg">
                <div className="w-[150px]">
                  <img
                    src={mission}
                    alt="img"
                    className="w-[200px] absolute -top-24"
                  />
                </div>
                <div className="space-y-5 mt-8">
                  <h4 className="text-2xl md:text-3xl text-[#00A63E] font-bold font-serif uppercase">
                    Mission
                  </h4>
                  <p className="text-lg text-gray-500 leading-[28px] md:leading-[32px]">
                    Our vision is to make dream living spaces a reality for
                    every budget. With passion and dedication, we guide our
                    clients from design finalization to the flawless completion
                    of their dream home or space, ensuring every detail meets
                    their expectations.
                  </p>
                </div>
                <div className="bg-gray-100 transition-all duration-300 group-hover:bg-[#00A63E] h-1.5 w-[60px] rounded"></div>
              </div>
              <div className="md:p-10 p-5 group relative max-width-[650px] h-full w-auto flex flex-col gap-16 items-center border bg-white border-gray-100 shadow-lg">
                <div className="w-[150px]">
                  <img
                    src={vission}
                    alt="img"
                    className="w-[200px] absolute -top-24"
                  />
                </div>
                <div className="space-y-5 mt-8">
                  <h4 className="text-2xl md:text-3xl text-[#00A63E] font-bold font-serif uppercase">
                    Vission
                  </h4>
                  <p className="text-lg text-gray-500 leading-[28px] md:leading-[32px]">
                    Within the next five years, our vision is to make dream
                    homes a reality for every budget, creating spaces that blend
                    quality, comfort, and individuality. We are committed to
                    guiding our clients through every step of the journey from
                    the first design sketch to the final finishing touch with a
                    deep understanding of their aspirations.
                  </p>
                </div>
                <div className="bg-gray-100 transition-all duration-300 group-hover:bg-[#00A63E] h-1.5 w-[60px] rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
