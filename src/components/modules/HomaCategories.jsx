"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";

import { FreeMode, Scrollbar } from "swiper/modules";

// import "./styles.css";
import { Box, Card, CardContent } from "@mui/material";

import { allCities } from "@/data/cities";

const HomaCategories = () => {
  return (
    <Box p={3} bgcolor={"#254441"} borderRadius={"16px"}>
      <Swiper
        dir="rtl"
        slidesPerView={1}
        spaceBetween={8}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          1024: {
            slidesPerView: 5,
            spaceBetween: 8,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 8,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 8,
          },
        }}
        freeMode={true}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[FreeMode, Scrollbar]}
        className="mySwiper"
      >
        <Box>
          {allCities.map((city, i) => (
            <SwiperSlide key={i}>
              <Card
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "84px",
                  background:
                    "linear-gradient(to top , rgb(179 174 255 / 85%) 50%, rgb(143 199 255 / 56%) 0)",
                  color: "#ebebeb",
                  boxShadow: "none",
                  borderRadius: "16px",
                  border: "#2544414f 1px solid",
                }}
              >
                <CardContent>{city.title}</CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Box>
      </Swiper>
    </Box>
  );
};
export default HomaCategories;
