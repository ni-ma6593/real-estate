"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Button,
  ButtonGroup,
  CardActionArea,
  CardActions,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { PiTrash, PiEye } from "react-icons/pi";
import { FiEdit3 } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Link from "next/link";
import { IoPricetagsOutline } from "react-icons/io5";
import { sp } from "@/utils/replaceNumber";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import BaseModal from "../modals/BaseModal";
export default function DashboardCard({
  adverstising: { _id, title, location, price, category },
}) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleEdit = () => {
    router.push(`/dashboard/my-advertising/edit/${_id}`);
  };
  const handleDelete = async () => {
    try {
      const { data } = await axios.delete(`/api/advertising/delete/${_id}`);
      console.log(data);
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card
        sx={{
          maxHeight: 400,
          border: "1px solid #254441",
          borderRadius: "16px",
        }}
      >
        <CardActionArea
          component={Link}
          href={`/dashboard/my-advertising/${_id}`}
        >
          <CardMedia
            component="img"
            height="160"
            image="/images/cardsTextImage.jfif"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h5">
              {title}
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon sx={{ fontSize: "24px", minWidth: "32px" }}>
                  <HiOutlineLocationMarker />
                </ListItemIcon>
                <ListItemText
                  id="switch-list-label-wifi"
                  primary={`موقعیت : ${location}`}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ fontSize: "24px", minWidth: "32px" }}>
                  <IoPricetagsOutline />
                </ListItemIcon>
                <ListItemText
                  id="switch-list-label-wifi"
                  primary={`قیمت : ${sp(price)} تومان`}
                />
              </ListItem>
            </List>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {/* <ButtonGroup> */}
          <Button
            onClick={handleEdit}
            size="small"
            color="warning"
            endIcon={<FiEdit3 />}
          >
            ویرایش
          </Button>
          <Button
            onClick={handleClickOpen}
            size="small"
            color="error"
            endIcon={<PiTrash />}
          >
            حذف
          </Button>
          {/* </ButtonGroup> */}
        </CardActions>
      </Card>
      <BaseModal
        handleSubmit={handleDelete}
        handleClose={handleClose}
        open={open}
        adTitle={title}
      />
    </>
  );
}
