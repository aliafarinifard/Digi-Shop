'use client'

import { useRef } from "react"

// ** Swiper
import { Swiper, SwiperSlide } from "swiper/react"
import { Swiper as SwiperType } from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/pagination'

// ** Images Data
import { images } from "@/libs/slider"

// ** Next
import Image from "next/image"

// ** Icons
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";


const Slides = () => {

    const swiperRef = useRef<SwiperType>();

    return (
        <div className="relative ___swiper-container">
            <Swiper
                grabCursor
                loop
                pagination={{
                    clickable: true,
                    el: '.swiper-pagination',
                    type: 'bullets'
                }}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                autoplay={{
                    delay: 4500,
                }}
                modules={[Autoplay, Pagination]}
                className="w-full mySwiper"
            >
                {images.map((img, index) => (
                    <>
                        <SwiperSlide key={index}>
                            <div
                                className="flex h-96 w-full items-center justify-center"
                            >
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    className="block h-96 w-full object-cover"
                                />
                            </div>
                        </SwiperSlide>
                    </>
                ))}
            </Swiper>

            <div
                className="flex items-center justify-center gap-5 absolute right-10 bottom-[2rem] z-20 ___swiper-buttons"
            >
                <button
                    onClick={() => swiperRef.current?.slidePrev()}
                    className="bg-white rounded-full text-xl w-10 h-10 flex items-center justify-center shadow-[0px_0px_3px_1px_rgba(165,165,165,0.75)]"
                >
                    <IoIosArrowBack />
                </button>

                <button
                    onClick={() => swiperRef.current?.slideNext()}
                    className="bg-white rounded-full text-xl w-10 h-10 flex items-center justify-center shadow-[0px_0px_3px_1px_rgba(165,165,165,0.75)]"
                >
                    <IoIosArrowForward />
                </button>
            </div>

            <div className="swiper-pagination" />
        </div>
    )
}

export default Slides