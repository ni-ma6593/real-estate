import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import HomaCategories from "@/components/modules/HomaCategories";
import HomeCard from "../../modules/Cards/HomeCard";
import Advertising from "@/models/Advertising";
import HomeSearchbox from "./HomeSearchBox";
import connectDB from "@/utils/connectDB";
import { topCities } from "@/data/cities";
import CategorieCard from "@/components/modules/Cards/CategorieCard";

const HomePage = async () => {
  await connectDB();
  const result = await Advertising.find();

  const services = ["خرید", "فروش", "رهن", "اجاره"];

  return (
    <>
      <Box
        component={"main"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        textAlign={"center"}
        bgcolor={"#a5c3cb3d"}
        height={"80vh"}
      >
        <Box width={"560px"}>
          <Typography component={"h1"} variant="h1" fontWeight={"bold"}>
            لوگو
          </Typography>
          <HomeSearchbox result={JSON.parse(JSON.stringify(result))} />
        </Box>
        <Container maxWidth={"lg"}>
          <CategorieCard />
        </Container>
      </Box>
      <Container component={"div"}>
        <Typography component={"h2"} my={4} variant="h4" fontWeight={"bold"}>
          همه شهر ها
        </Typography>
        <HomaCategories />
      </Container>

      <Container component={"div"}>
        <Typography component={"h2"} my={4} variant="h4" fontWeight={"bold"}>
          شهر های پربازدید
        </Typography>
        <Grid container spacing={2}>
          {topCities.map((city, i) => (
            <Grid key={i} item md={3}>
              <HomeCard
                CityName={city.title}
                ButtonTitle={`مشاهده آگهی های شهر ${city.title}`}
                ImageURL={city.image}
                path={city.path}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default HomePage;
