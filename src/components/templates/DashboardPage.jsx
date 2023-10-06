import { Alert, Box, Typography } from "@mui/material";
import React from "react";

const DashboardPage = ({ createdAt }) => {
  return (
    <>
      <Typography component={"h3"} variant="h5">
        سلام 🖐
      </Typography>
      <Typography component={"p"} variant="p">
        آگهی های خود را ثبت کنید تا هزاران نفر آن را تماشا کنند
      </Typography>
      <Alert
        severity="info"
        component={"div"}
        sx={{
          width: "fit-content",
          mt: 2,
        }}
        icon={false}
      >
        <Box display={"flex"} alignItems={"center"}>
          <Typography>تاریخ عضویت : </Typography>
          <Box component={"span"}>
            {" "}
            {new Date(createdAt).toLocaleDateString("fa-IR")}
          </Box>
        </Box>
      </Alert>
    </>
  );
};

export default DashboardPage;
