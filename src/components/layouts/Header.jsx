"use client";
import { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";

import {
  ButtonGroup,
  Link,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  Divider,
} from "@mui/material";

import { TiThMenu } from "react-icons/ti";

import LogoPNG from "@/public/images/logo.png";
import { useSession } from "next-auth/react";
import HeaderUserSetting from "../modules/HeaderUserSetting";

function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const { data } = useSession();
  const pages = [
    { name: "خانه", path: "/" },
    { name: "آگهی ها", path: "/advertisements" },
  ];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box
            display={"flex"}
            alignItems={"center"}
            component={NextLink}
            href="/"
            sx={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <Image
              alt="Logo"
              src={LogoPNG}
              width={80}
              height={80}
              style={{
                width: "48px",
                height: "auto",
              }}
            />
            <Typography
              variant="h6"
              noWrap
              component={"h1"}
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: 700,
                letterSpacing: ".2px",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              مشاور املاک
            </Typography>
          </Box>

          {/* ________________________________________NAVBAR__MENU________________________________________ */}
          <Typography
            variant="h5"
            noWrap
            component={NextLink}
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: ".2px",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            مشاور املاک
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              flexDirection: "row-reverse",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <TiThMenu />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.name}
                  LinkComponent={NextLink}
                  href={page.path}
                  onClick={handleCloseNavMenu}
                >
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
              <Divider />
              {data ? (
                <HeaderUserSetting />
              ) : (
                <ButtonGroup
                  color="secondary"
                  variant="text"
                  aria-label="text button group"
                >
                  <Button component={NextLink} href="/signin">
                    ورود
                  </Button>
                  <Button component={NextLink} href="/signup">
                    ثبت نام
                  </Button>
                </ButtonGroup>
              )}
            </Menu>
          </Box>
          {/* ________________________________________NAVBAR__MENU________________________________________ */}

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box display={"flex"}>
              {pages.map((page) => (
                <Link
                  component={NextLink}
                  key={page.name}
                  href={page.path}
                  // onClick={handleCloseNavMenu}
                  sx={{ py: 2, px: 2, color: "white", display: "flex" }}
                >
                  {page.name}
                </Link>
              ))}
            </Box>
            <Box>
              {data ? (
                <>
                  <HeaderUserSetting />
                </>
              ) : (
                <>
                  <ButtonGroup
                    color="secondary"
                    variant="text"
                    aria-label="text button group"
                  >
                    <Button component={NextLink} href="/signin">
                      ورود
                    </Button>
                    <Button component={NextLink} href="/signup">
                      ثبت نام
                    </Button>
                  </ButtonGroup>
                </>
              )}
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
