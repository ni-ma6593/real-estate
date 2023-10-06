import NextLink from "next/link";
import {
  Box,
  List,
  Link,
  Grid,
  Button,
  Avatar,
  Divider,
  ListItem,
  Typography,
  ListItemText,
} from "@mui/material";
import MobileDashboardMenu from "../modules/MobileDashboardMenu";
import SignOutButton from "../modules/SignOutButton";
import StringAvatar from "@/helpers/StringAvatar";

const DashboardSidebar = async ({ children, email = "", role = "" }) => {
  const dashboardMenu = [
    {
      id: 1,
      path: "/dashboard/profile",
      name: "پروفایل",
    },
    {
      id: 2,
      path: "/dashboard/my-advertising",
      name: "آگهی های من",
    },
    {
      id: 3,
      path: "/dashboard/add-advertising",
      name: "ثبت آگهی جدید",
    },
    role === "OWNER"
      ? {
          id: 4,
          path: "/admin/awaiting-confirmation",
          name: "در انتظار تایید",
        }
      : null,
  ];
  // const roleLowerCase = role.toLowerCase();
  // const Role = roleLowerCase.charAt(0).toUpperCase() + roleLowerCase.slice(1);
  // console.log(Role);
  return (
    <Grid container spacing={4} columns={12} pt={5}>
      <Grid item md={3} lg={3} xl={3} display={{ xs: "none", md: "block" }}>
        <Box
          bgcolor={"#254441"}
          p={2}
          sx={{
            // bgcolor: "",
            borderRadius: "16px",
            minHeight: "80vh",
            boxShadow:
              "rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 16%) 0px 0px 0px 1px, rgb(0 0 0 / 23%) 0px 10px 15px -3px, rgb(0 0 0 / 0%) 0px 4px 6px -2px",
            xs: {
              boxShadow: "none",
            },
          }}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
        >
          <Box component={"div"}>
            <Box
              component={"div"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Avatar {...StringAvatar("Nima Ahmadi")} />
              {role === "OWNER" ? (
                <Typography color={"white"}>سازنده</Typography>
              ) : null}
              {role === "ADMIN" ? (
                <Typography color={"white"}>رئیس</Typography>
              ) : null}
              {role === "WRITER" ? (
                <Typography color={"white"}>نویسنده</Typography>
              ) : null}
              <Typography color={"white"}>{email}</Typography>
            </Box>
            <Divider
              sx={{
                background: "white",
                my: 2,
              }}
            />
            <Box component={"div"}>
              <List>
                {dashboardMenu.map((item) => (
                  <Link
                    key={item.id}
                    underline="hover"
                    component={NextLink}
                    href={item.path}
                  >
                    <Button fullWidth variant="text" color="secondary">
                      <ListItem sx={{ padding: 0 }}>
                        <ListItemText primary={item.name} />
                      </ListItem>
                    </Button>
                  </Link>
                ))}
              </List>
            </Box>
          </Box>
          <Box component={"div"}>
            <SignOutButton />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} display={{ md: "none" }}>
        <Box>
          <MobileDashboardMenu dashboardMenu={dashboardMenu} />
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={9}
        lg={9}
        xl={9}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"stretch"}
      >
        <Box>{children}</Box>
      </Grid>
    </Grid>
  );
};

export default DashboardSidebar;
