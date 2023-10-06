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
import { signIn } from "next-auth/react";

import { AiFillLock } from "react-icons/ai";
import { Toaster, toast } from "react-hot-toast";
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

export default function SignInPage() {
  const [loading, setLoading] = useState(false);

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const handleSubmit = async (e) => {
    console.log(inputs);
    // e.preventDefault();
    setLoading(true);
    const response = await signIn("credentials", {
      email: inputs.email,
      password: inputs.password,
      redirect: false,
    });
    if (response.error) {
      setLoading(false);
      console.log(response);
      toast.error(response.error, {
        position: "bottom-left",
      });
    } else {
      router.replace("/");
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
          ورود
        </Typography>
        <Box sx={{ mt: 1 }}>
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
          {/* <FormControlLabel
            label="مرا به یاد داشته باش"
            control={<Checkbox value="remember" color="primary" />}
          /> */}
          {!loading ? (
            <>
              <Button
                onClick={(e) => handleSubmit(e)}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                ورود
              </Button>
            </>
          ) : (
            <>
              <InfinitySpin width="200" color="#1f3643" />
            </>
          )}
          <Grid container>
            <Grid item xs>
              <Link component={NextLink} href="/">
                رمز عبور خود را فراموش کردید؟
              </Link>
            </Grid>
            <Grid item>
              <Link component={NextLink} href="/">
                {"حساب کاربری ندارید؟ ثبت نام"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}
