"use client";
import { sp } from "@/utils/replaceNumber";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
const AdminCard = ({ ad }) => {
  const router = useRouter();

  const handlePublished = async () => {
    try {
      const { data } = await axios.patch(`/api/publish/${ad.id}`);
      toast.success(data.message);
      console.log(data);
      router.refresh();
    } catch (error) {
      console.log(error);
      toast.success(error.response.data.error);
    }
  };

  return (
    <>
      <Card
        variant="outlined"
        sx={{ minWidth: 275, borderRadius: "16px", my: 2 }}
      >
        <CardContent>
          <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
            {`عنوان آگهی : ${ad.title}`}
          </Typography>

          <Typography sx={{ fontSize: 12 }} variant="body2">
            {`توضیحات : ${ad.description}`}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {`قیمت : ${sp(ad.price)}`}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={handlePublished} color="success" size="small">
            انتشار
          </Button>
        </CardActions>
      </Card>
      <Toaster position="top-center" />
    </>
  );
};
export default AdminCard;
