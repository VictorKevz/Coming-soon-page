import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import testimonialData from "./Data";
import "../css/testimonial.css";

function Testimonial() {
  return (
    <div className="testimonial wrapper">
      <div className="testimonial-inner container">
        <h4 className="testimonial-title">What they’ve said</h4>

        <Swiper
          spaceBetween={32}
          slidesPerView={3}
          loop={true}
          grabCursor={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {testimonialData.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="testimonial-card" >
              <div >
                <img
                  src={testimonial.icon}
                  alt={testimonial.name}
                  className="testimonial-img"
                />
                <p className="testimonial-name">{testimonial.name}</p>
                <p className="testimonial-parag">{testimonial.parag}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <a className="link testimonial-cta">Get Started</a>
    </div>
  );
}

export default Testimonial;