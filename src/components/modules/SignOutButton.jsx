"use client";
import { Button } from "@mui/material";
import { signOut } from "next-auth/react";
import React from "react";

const SignOutButton = () => {
  // const handleSignOut = () => {

  // };

  return (
    <Button onClick={() => signOut()} fullWidth variant="text" color="error">
      خروج
    </Button>
  );
};

export default SignOutButton;
