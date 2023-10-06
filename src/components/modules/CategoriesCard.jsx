// "use client";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";

const CategoriesCard = ({ path, url, title }) => {
  return (
    <Card
      component={Link}
      href={path}
      sx={{
        textDecoration: "none",
        border:'1px solid',
        borderColor: "#c5ab7b",
      }}
    >
      <CardActionArea>
        <Image
          // component={Image}
          src={url}
          alt={title}
          height={400}
          width={400}
          style={{
            width: "100%",
            height: "auto",
          }}
        />
        <CardContent>
          <Typography variant="h5" component="h4">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CategoriesCard;
