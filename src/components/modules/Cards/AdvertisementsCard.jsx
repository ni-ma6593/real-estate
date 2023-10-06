import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, IconButton } from "@mui/material";
import { AiOutlineArrowLeft, AiOutlineShareAlt } from "react-icons/ai";
import { e2p, sp } from "@/utils/replaceNumber";
import { GrLocation } from "react-icons/gr";
import { FaEuroSign } from "react-icons/fa";
import Link from "next/link";
import persianUrl from "@/utils/persianUrl";

export default function AdvertisementsCard({ ad }) {
  return (
    <Card>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={ad.image ? ad.image : `images/${ad.category}.png`}
      />
      <CardContent
        sx={{
          minHeight: "170px",
          maxHeight: "170px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography gutterBottom variant="h6" component="div">
          {ad.title}
        </Typography>
        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              py: "5px",
            }}
          >
            <span>
              <GrLocation />
            </span>{" "}
            <Typography px={"6px"} variant="body2" color="text.secondary">
              {ad.location}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              py: "5px",
            }}
          >
            <span>
              <FaEuroSign />
            </span>{" "}
            <Typography px={"6px"} variant="body2" color="text.secondary">
              {sp(ad.price)} تومان
            </Typography>
          </Box>
        </Box>
      </CardContent>
      <CardActions>
        <IconButton color="primary" size="small">
          <AiOutlineShareAlt />
        </IconButton>
        <Button
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderRadius: "50px",
          }}
          size="small"
          fullWidth
          component={Link}
          href={`/advertisements/${ad._id}`}
          endIcon={<AiOutlineArrowLeft />}
        >
          رفتن به آگهی
        </Button>
      </CardActions>
    </Card>
  );
}
