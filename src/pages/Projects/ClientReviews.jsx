import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectFlip, Pagination, Navigation, Autoplay } from "swiper/modules";

const ClientReviews = () => {
  return (
    <Swiper
      effect={"flip"}
      grabCursor={true}
      pagination={{ clickable: true }}
      //   navigation={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }} // AutoPlay Added
      modules={[EffectFlip, Pagination, Navigation, Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 dark:bg-gray-50 dark:text-gray-800">
          <img
            src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-in-shirt-smiles-and-gives-thumbs-up-to-show-approval-png-image_13146336.png"
            alt=""
            className="w-20 h-20 rounded-full dark:bg-gray-500"
          />
          <blockquote className="max-w-lg text-lg italic font-medium text-center">
            "Et, dignissimos obcaecati. Recusandae praesentium doloribus vitae?
            Rem unde atque mollitia!"
          </blockquote>
          <div className="text-center dark:text-gray-600">
            <p>Leroy Jenkins</p>
            <p>CEO of Company Co.</p>
          </div>
          <div className="flex space-x-2">
            <button
              type="button"
              aria-label="Page 1"
              className="w-2 h-2 rounded-full dark:bg-gray-900"
            ></button>
            <button
              type="button"
              aria-label="Page 2"
              className="w-2 h-2 rounded-full dark:bg-gray-400"
            ></button>
            <button
              type="button"
              aria-label="Page 3"
              className="w-2 h-2 rounded-full dark:bg-gray-400"
            ></button>
            <button
              type="button"
              aria-label="Page 4"
              className="w-2 h-2 rounded-full dark:bg-gray-400"
            ></button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 dark:bg-gray-50 dark:text-gray-800">
          <img
            src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-in-shirt-smiles-and-gives-thumbs-up-to-show-approval-png-image_13146336.png"
            alt=""
            className="w-20 h-20 rounded-full dark:bg-gray-500"
          />
          <blockquote className="max-w-lg text-lg italic font-medium text-center">
            "Et, dignissimos obcaecati. Recusandae praesentium doloribus vitae?
            Rem unde atque mollitia!"
          </blockquote>
          <div className="text-center dark:text-gray-600">
            <p>Leroy Jenkins</p>
            <p>CEO of Company Co.</p>
          </div>
          <div className="flex space-x-2">
            <button
              type="button"
              aria-label="Page 1"
              className="w-2 h-2 rounded-full dark:bg-gray-900"
            ></button>
            <button
              type="button"
              aria-label="Page 2"
              className="w-2 h-2 rounded-full dark:bg-gray-400"
            ></button>
            <button
              type="button"
              aria-label="Page 3"
              className="w-2 h-2 rounded-full dark:bg-gray-400"
            ></button>
            <button
              type="button"
              aria-label="Page 4"
              className="w-2 h-2 rounded-full dark:bg-gray-400"
            ></button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 dark:bg-gray-50 dark:text-gray-800">
          <img
            src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-in-shirt-smiles-and-gives-thumbs-up-to-show-approval-png-image_13146336.png"
            alt=""
            className="w-20 h-20 rounded-full dark:bg-gray-500"
          />
          <blockquote className="max-w-lg text-lg italic font-medium text-center">
            "Et, dignissimos obcaecati. Recusandae praesentium doloribus vitae?
            Rem unde atque mollitia!"
          </blockquote>
          <div className="text-center dark:text-gray-600">
            <p>Leroy Jenkins</p>
            <p>CEO of Company Co.</p>
          </div>
          <div className="flex space-x-2">
            <button
              type="button"
              aria-label="Page 1"
              className="w-2 h-2 rounded-full dark:bg-gray-900"
            ></button>
            <button
              type="button"
              aria-label="Page 2"
              className="w-2 h-2 rounded-full dark:bg-gray-400"
            ></button>
            <button
              type="button"
              aria-label="Page 3"
              className="w-2 h-2 rounded-full dark:bg-gray-400"
            ></button>
            <button
              type="button"
              aria-label="Page 4"
              className="w-2 h-2 rounded-full dark:bg-gray-400"
            ></button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 dark:bg-gray-50 dark:text-gray-800">
          <img
            src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-in-shirt-smiles-and-gives-thumbs-up-to-show-approval-png-image_13146336.png"
            alt=""
            className="w-20 h-20 rounded-full dark:bg-gray-500"
          />
          <blockquote className="max-w-lg text-lg italic font-medium text-center">
            "Et, dignissimos obcaecati. Recusandae praesentium doloribus vitae?
            Rem unde atque mollitia!"
          </blockquote>
          <div className="text-center dark:text-gray-600">
            <p>Leroy Jenkins</p>
            <p>CEO of Company Co.</p>
          </div>
          <div className="flex space-x-2">
            <button
              type="button"
              aria-label="Page 1"
              className="w-2 h-2 rounded-full dark:bg-gray-900"
            ></button>
            <button
              type="button"
              aria-label="Page 2"
              className="w-2 h-2 rounded-full dark:bg-gray-400"
            ></button>
            <button
              type="button"
              aria-label="Page 3"
              className="w-2 h-2 rounded-full dark:bg-gray-400"
            ></button>
            <button
              type="button"
              aria-label="Page 4"
              className="w-2 h-2 rounded-full dark:bg-gray-400"
            ></button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 dark:bg-gray-50 dark:text-gray-800">
          <img
            src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-in-shirt-smiles-and-gives-thumbs-up-to-show-approval-png-image_13146336.png"
            alt=""
            className="w-20 h-20 rounded-full dark:bg-gray-500"
          />
          <blockquote className="max-w-lg text-lg italic font-medium text-center">
            "Et, dignissimos obcaecati. Recusandae praesentium doloribus vitae?
            Rem unde atque mollitia!"
          </blockquote>
          <div className="text-center dark:text-gray-600">
            <p>Leroy Jenkins</p>
            <p>CEO of Company Co.</p>
          </div>
          <div className="flex space-x-2">
            <button
              type="button"
              aria-label="Page 1"
              className="w-2 h-2 rounded-full dark:bg-gray-900"
            ></button>
            <button
              type="button"
              aria-label="Page 2"
              className="w-2 h-2 rounded-full dark:bg-gray-400"
            ></button>
            <button
              type="button"
              aria-label="Page 3"
              className="w-2 h-2 rounded-full dark:bg-gray-400"
            ></button>
            <button
              type="button"
              aria-label="Page 4"
              className="w-2 h-2 rounded-full dark:bg-gray-400"
            ></button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 dark:bg-gray-50 dark:text-gray-800">
          <img
            src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-in-shirt-smiles-and-gives-thumbs-up-to-show-approval-png-image_13146336.png"
            alt=""
            className="w-20 h-20 rounded-full dark:bg-gray-500"
          />
          <blockquote className="max-w-lg text-lg italic font-medium text-center">
            "Et, dignissimos obcaecati. Recusandae praesentium doloribus vitae?
            Rem unde atque mollitia!"
          </blockquote>
          <div className="text-center dark:text-gray-600">
            <p>Leroy Jenkins</p>
            <p>CEO of Company Co.</p>
          </div>
          <div className="flex space-x-2">
            <button
              type="button"
              aria-label="Page 1"
              className="w-2 h-2 rounded-full dark:bg-gray-900"
            ></button>
            <button
              type="button"
              aria-label="Page 2"
              className="w-2 h-2 rounded-full dark:bg-gray-400"
            ></button>
            <button
              type="button"
              aria-label="Page 3"
              className="w-2 h-2 rounded-full dark:bg-gray-400"
            ></button>
            <button
              type="button"
              aria-label="Page 4"
              className="w-2 h-2 rounded-full dark:bg-gray-400"
            ></button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default ClientReviews;
