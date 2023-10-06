"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Container, Link, TextField, Typography } from "@mui/material";
import { LuGithub, LuFacebook, LuTwitter } from "react-icons/lu";
import NextLink from "next/link";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Footer() {
  return (
    <Box
      bgcolor="primary.main"
      color={"white"}
      component={"footer"}
      sx={{
        p: 4,
        flexGrow: 1,
        position: "relative",
        bottom: 0,
        right: 0,
        left: 0,
        // backgroundColor: "#1f3643",
        // color: "white",
      }}
    >
      <Container maxWidth={"lg"}>
        <Grid container spacing={2}>
          <Grid xs={12} md={5} lg={4}>
            <Box>
              <TextField
                // disabled
                fullWidth
                id="outlined-basic"
                label="ایمیل"
                variant="outlined"
              />
              <Typography>
                ایمیل خود را وارد کنید تا از اخبار و قیمت ملک بهره مند شوید!
              </Typography>
            </Box>
          </Grid>
          <Grid container xs={12} md={7} lg={8} spacing={4}>
            <Grid xs={6} lg={6}>
              <Typography component={"h3"} variant="h4">
                سامانه خرید و اجاره ملک
              </Typography>
              <Typography mt={2} component={"p"} variant="p">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است.
              </Typography>
            </Grid>

            <Grid xs={12} lg={6}>
              <Typography component={"h3"} variant="h4" href={"/blog"}>
                <Link
                  underline="hover"
                  color={"#fff"}
                  component={NextLink}
                  href={"/blogs"}
                >
                  وبلاگ
                </Link>
              </Typography>
              <Box component="ul" aria-labelledby="category-c" sx={{ pl: 2 }}>
                <li>تعرفه قانونی</li>
                <li>دسترسی سریع</li>
                <li>مشاورین خبره</li>
                <li>قولنامه محضری</li>
              </Box>
            </Grid>
          </Grid>
          <Grid
            xs={12}
            container
            justifyContent="space-between"
            alignItems="center"
            flexDirection={{ xs: "column", sm: "row" }}
            sx={{ fontSize: "12px" }}
          >
            <Grid sx={{ order: { xs: 2, sm: 1 } }}>
              <Item>© Copyright</Item>
            </Grid>
            <Grid container columnSpacing={1} sx={{ order: { xs: 1, sm: 2 } }}>
              <Grid>
                <Link
                  component={NextLink}
                  color={"#fff"}
                  href={"https://github.com/ni-ma6593"}
                  target="_blank"
                  variant="h5"
                >
                  <LuGithub />
                </Link>
              </Grid>
              <Grid>
                <Link
                  component={NextLink}
                  color={"#fff"}
                  href={"https://github.com/ni-ma6593"}
                  target="_blank"
                  variant="h5"
                >
                  <LuTwitter />
                </Link>
              </Grid>
              <Grid>
                <Link
                  component={NextLink}
                  color={"#fff"}
                  href={"https://github.com/ni-ma6593"}
                  target="_blank"
                  variant="h5"
                >
                  <LuFacebook />
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
