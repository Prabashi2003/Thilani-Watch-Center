import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";

import cr_1 from "../../assets/cr_1.jpeg";
import cr_2 from "../../assets/cr_2.jpeg";
import cr_3 from "../../assets/cr_3.jpeg";
import cr_4 from "../../assets/cr_4.jpeg";
import cr_5 from "../../assets/cr_5.jpeg";
import cr_6 from "../../assets/cr_6.jpeg";
import cr_7 from "../../assets/cr_7.jpeg";
import cr_8 from "../../assets/cr_8.jpeg";

const images = [cr_1, cr_2, cr_3, cr_4, cr_5, cr_6, cr_7, cr_8];

// Product data for each watch
const watchData = [
  { name: "382ND BLUE NOSED", subtitle: "Titanium Automatic Chrono", badge: "BIG PILOT" },
  { name: "OCEAN BLUE 2.0", subtitle: "300m Swiss Automatic", badge: "LIMITED EDITION" },
  { name: "FULL LUME 2.0", subtitle: "P-51 Titanium", badge: "NEW!" },
  { name: "CACTUS GRAY", subtitle: "P-51 Limited Series", badge: "LIMITED EDITION" },
  { name: "STEALTH COMMANDO", subtitle: "300m Swiss Chrono", badge: "NEW!" },
  { name: "DESERT SAND", subtitle: "Titanium Automatic", badge: "LIMITED EDITION" },
  { name: "ARCTIC WHITE", subtitle: "P-51 Special Edition", badge: "NEW!" },
  { name: "TACTICAL BLACK", subtitle: "Swiss Automatic Diver", badge: "LIMITED EDITION" },
];

const NewRelease = () => {
  return (
    <div className="container-swiper-wrapper">
      <h2 className="carousel-title">NEW RELEASES</h2>

      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        loop={true}
        speed={700}
        autoplay={{
          delay: 2600,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 1.5,
          slideShadows: true,
        }}
        pagination={{ 
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="liv-swiper-enhanced"
        breakpoints={{
          320: {
            slidesPerView: 1.2,
            spaceBetween: 20,
            coverflowEffect: {
              depth: 150,
              modifier: 1,
            }
          },
          640: {
            slidesPerView: 1.5,
            spaceBetween: 30,
            coverflowEffect: {
              depth: 180,
              modifier: 1.2,
            }
          },
          1024: {
            slidesPerView: 2.5,
            spaceBetween: 40,
            coverflowEffect: {
              depth: 200,
              modifier: 1.5,
            }
          },
          1440: {
            slidesPerView: 3,
            spaceBetween: 50,
            coverflowEffect: {
              depth: 220,
              modifier: 1.8,
            }
          }
        }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="watch-slide-container">
              {/* Badge */}
              <div className="watch-badge">
                {watchData[index]?.badge || "NEW!"}
              </div>

              {/* Watch Image */}
              <div className="watch-image-wrapper">
                <img src={img} alt={watchData[index]?.name || "watch"} />
              </div>

              {/* Watch Info Overlay */}
              <div className="watch-info-overlay">
                <div className="watch-details">
                  <h3 className="watch-name">
                    {watchData[index]?.name || "LUXURY TIMEPIECE"}
                  </h3>
                  <p className="watch-subtitle">
                    {watchData[index]?.subtitle || "Swiss Automatic"}
                  </p>
                  <button className="watch-cta-button">
                    GET ACCESS →
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Controls - Outside Swiper */}
      <div className="swiper-button-prev-custom side-nav-arrow">
        <ion-icon name="chevron-back-outline"></ion-icon>
      </div>
      <div className="swiper-button-next-custom side-nav-arrow">
        <ion-icon name="chevron-forward-outline"></ion-icon>
      </div>
    </div>
  );
};

export default NewRelease;