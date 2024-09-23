import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import style from "./Carousel.module.css";
import { Pagination } from 'swiper/modules';


const Carousel1=({data,drCarousel})=> {
  return (

    <div className={style.CarouselDiv}>
      {drCarousel? <h2 style={{color:"#1B3C74",fontFamily:"Poppins",fontWeight:"600",marginBottom:"1rem"}}>Our Medical Specialist</h2>
        :null}
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: drCarousel? 5:3,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
      {data.map((data)=><SwiperSlide key={data.index}><img src={data.img} alt="CarouselImg"style={drCarousel ? {width:"300px"}:null}/></SwiperSlide> )} 
      </Swiper>
    </div>
  );
}
export default Carousel1;