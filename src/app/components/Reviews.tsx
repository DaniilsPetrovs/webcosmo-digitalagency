"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Tab } from "./UI/Tab";
import { ReviewSlide } from "./UI/ReviewSlide";

import donut from "../assets/donut.png";

import "swiper/css";
import Image from "next/image";
import { useLang } from "../context/LangContext";
import languages from "../data/lang";

import review1 from "../assets/Nikolay-Semeniuta.png";
import review2 from "../assets/review2.png";
import review3 from "../assets/review3.png";
import review4 from "../assets/review4.png";
import type { StaticImageData } from "next/image";

const imageMap: Record<string, StaticImageData> = {
    photo1: review1,
    photo2: review2,
    photo3: review4,
    photo4: review3,
};

export default function Reviews() {
    const { lang } = useLang();
    //@ts-ignore
    const tr = languages[lang].reviews;

    return (
        <section
            id="reviews"
            className="py-16 md:py-24 relative z-20 bg-[#EFF1F5] rounded-b-xl"
        >
            <div className="relative container mx-auto">
                <div
                    style={{ translate: "0% -85%" }}
                    className="absolute top-0 xl:top-10 -right-[100px] md:right-1/5 2xl::right-[500px] max-w-[225px] md:max-w-[250px] lg:max-w-[350px] xl:max-w-[450px]"
                >
                    <Image src={donut} alt="donut" />
                </div>

                <div className="flex flex-col justify-center items-center md:items-start">
                    <Tab name={tr.tab} />
                    <h2 className="mt-8 text-3xl text-center md:text-left md:text-4xl lg:text-5xl 2xl:text-6xl !text-[#262B3A]">
                        {tr.title}
                        <br />
                        <span>{tr.subtitle}</span>
                    </h2>
                </div>

                <div className="mt-8 md:mt-16">
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation={{
                            prevEl: ".review-prev",
                            nextEl: ".review-next",
                        }}
                        breakpoints={{
                            768: { slidesPerView: 2, spaceBetween: 20 },
                            950: { slidesPerView: 3, spaceBetween: 20 },
                            1300: { slidesPerView: 4, spaceBetween: 20 },
                        }}
                    >
                        {tr.slides.map((slide: any, i: number) => (
                            <SwiperSlide key={i}>
                                <ReviewSlide
                                    name={slide.name}
                                    job={slide.job}
                                    url={slide.url}
                                    img={imageMap[slide.img]} // ← добавили img сюда
                                />

                                {/* <ReviewSlide
                                    name={slide.name}
                                    job={slide.job}
                                    url={slide.url}
                                /> */}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            <div className="mt-8 flex xl:hidden px-4 gap-4">
                <button className="review-prev w-12 h-12 btn btn-white md:w-14 md:h-14 aspect-square flex justify-center items-center">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10.0001 2.6665L4.66675 7.99984L10.0001 13.3332L11.3334 11.9998L7.33341 7.99984L11.3334 3.99984L10.0001 2.6665Z"
                        />
                    </svg>
                </button>
                <button className="review-next w-12 h-12 btn btn-white md:w-14 md:h-14 aspect-square flex justify-center items-center">
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="rotate-180"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10.0001 2.6665L4.66675 7.99984L10.0001 13.3332L11.3334 11.9998L7.33341 7.99984L11.3334 3.99984L10.0001 2.6665Z"
                        />
                    </svg>
                </button>
            </div>
        </section>
    );
}
