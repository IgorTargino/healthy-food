import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import PostWidget from "../PostWidget";

SwiperCore.use([Navigation, A11y]);

const Carousel = () => {
  return (
    <Swiper
      spaceBetween={100}
      slidesPerView={3}
      navigation
    >
      <SwiperSlide>
        <PostWidget
          img={"./bloco_image_1.svg"}
          title={"Quick-start guide to nuts and seeds"}
          author={"Kevin Ibrahim"}
        />
      </SwiperSlide>
      <SwiperSlide>
        <PostWidget
          img={"./bloco_image_2.svg"}
          title={"Quick-start guide to nuts and seeds"}
          author={"Kevin Ibrahim"}
        />
      </SwiperSlide>
      <SwiperSlide>
        <PostWidget
          img={"./bloco_image_3.svg"}
          title={"Quick-start guide to nuts and seeds"}
          author={"Kevin Ibrahim"}
        />
      </SwiperSlide>
      <SwiperSlide>
        <PostWidget
          img={"./bloco_image_4.svg"}
          title={"Quick-start guide to nuts and seeds"}
          author={"Kevin Ibrahim"}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
