import { Box, Button, Grid, Typography } from "@mui/material";
import AdvertisementsCard from "../Cards/AdvertisementsCard";
import Sidebar from "../Sidebar";

const AdvertisementsPage = ({ ads = [] }) => {
  return (
    <Box paddingTop={"20px"}>
      <Grid container spacing={3}>
        <Grid
          item
          xs={3}
          sx={{
            height: "80vh",
          }}
        >
          <Sidebar />
        </Grid>
        <Grid item xs={9}>
          {ads.length ? (
            <Grid container spacing={2}>
              {ads.map((ad) => (
                <Grid key={ad._id} item xs={4}>
                  <AdvertisementsCard ad={ad} />
                </Grid>
              ))}
            </Grid>
          ) : (
            <Box
              width={"100%"}
              height={"100%"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Typography variant="h4" fontWeight={"bold"} component={"h2"}>
                هنوز آگهی ثبت نشده است
              </Typography>
              <Button>ثبت آگهی</Button>
            </Box>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};
export default AdvertisementsPage;
