"use client";
import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

const cardItem = [
  {
    image: "/images/apartment.png",
    title: "آپارتمان",
  },
  {
    image: "/images/villa.png",
    title: "ویلا",
  },
  {
    image: "/images/store.png",
    title: "مغازه",
  },
  {
    image: "/images/office.png",
    title: "محل کار",
  },
];

const CategorieCard = () => {
  return (
    <Box>
      <Swiper
        dir="rtl"
        slidesPerView={1}
        spaceBetween={8}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          1024: {
            slidesPerView: 4,
            spaceBetween: 8,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 8,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 8,
          },
        }}
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper"
      >
        <Box>
          {cardItem.map((type, i) => (
            <SwiperSlide key={i}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    sx={{ height: 140 }}
                    image={type.image}
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {type.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </SwiperSlide>
          ))}
        </Box>
      </Swiper>
    </Box>
  );
};
export default CategorieCard;
