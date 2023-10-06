import Link from "next/link";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

export default function HomeCard({ CityName, ImageURL, path, ButtonTitle }) {
  return (
    <Card elevation={16}>
      <CardMedia sx={{ height: 140 }} image={ImageURL} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {CityName}
        </Typography>
      </CardContent>
      <CardActions>
        <Button component={Link} href={path}>
          {ButtonTitle}
        </Button>
      </CardActions>
    </Card>
  );
}
