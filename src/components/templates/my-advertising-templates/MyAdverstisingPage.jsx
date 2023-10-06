// "use client";
import { Alert, Box, Grid, Link, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import NextLink from "next/link";
import DashboardCard from "../../modules/Cards/DashboardCard";
const MyAdverstisingPage = ({ ads }) => {
  return (
    <Box display={"flex"} flexDirection={"column"} justifyContent={"center"}>
      {ads.length ? null : (
        <Alert
          icon={false}
          color="error"
          sx={{
            borderRadius: "16px",
            width: "fit-content",
          }}
        >
          <Typography component="h3" variant="h5">
            هیچ آگهی ثبت نشده است
            <br />
            برای ثبت آگهی روی{" "}
            <Link
              color={blue[700]}
              component={NextLink}
              href={"/dashboard/add-advertising"}
            >
              لینک
            </Link>{" "}
            کلیک کنید
          </Typography>
        </Alert>
      )}
      <Grid container spacing={2}>
        {ads.map((i) => (
          <Grid key={i._id} item md={6} sm={12} xs={12}>
            <DashboardCard adverstising={JSON.parse(JSON.stringify(i))} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default MyAdverstisingPage;
