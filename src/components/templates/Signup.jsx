"use client";
import { useState } from "react";
import {
  Box,
  Grid,
  Link,
  Avatar,
  Button,
  Checkbox,
  TextField,
  Container,
  Typography,
  CssBaseline,
  FormControlLabel,
} from "@mui/material/";

import NextLink from "next/link";

import { Toaster, toast } from "react-hot-toast";

import { AiFillLock } from "react-icons/ai";
import axios from "axios";
import { useRouter } from "next/navigation";
import { InfinitySpin } from "react-loader-spinner";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"©"}
      <Link color="inherit" href="https://mui.com/">
        مشاوراملاک
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function SignUpPage() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    rePassword: "",
  });
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    setLoading(true);
    // e.preventDefault();
    if (inputs.password !== inputs.rePassword) {
      toast.error("پسورد شما با تکرارش همخوانی ندارد!", {
        position: "bottom-left",
      });
      setLoading(false);
    }
    try {
      const { data } = await axios.post("/api/auth/signup", {
        email: inputs.email,
        password: inputs.password,
      });
      if (data) {
        toast.success(data.message, {
          position: "bottom-left",
        });
        router.push("/signin");
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.error, {
        position: "bottom-left",
      });
      setLoading(false);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <AiFillLock />
        </Avatar>
        <Typography component="h1" variant="h5">
          ثبت نام
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="ایمیل"
            name="email"
            autoFocus
            value={inputs.email}
            onChange={(e) => handleChange(e)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="کلمه عبور"
            type="password"
            id="password"
            value={inputs.password}
            onChange={(e) => handleChange(e)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="rePassword"
            label="تکرار کلمه عبور"
            type="password"
            id="rePassword"
            value={inputs.rePassword}
            onChange={(e) => handleChange(e)}
          />
          {!loading ? (
            <>
              <Button
                onClick={(e) => handleSubmit(e)}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                ثبت نام
              </Button>
            </>
          ) : (
            <>
              <InfinitySpin width="200" color="#1f3643" />
            </>
          )}

          <Grid container>
            <Grid item>
              <Link component={NextLink} href="/">
                {"حساب کاربری دارید؟ واد شوید"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}
