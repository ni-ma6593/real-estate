import DashboardSidebar from "@/components/layouts/DashboardSidebar";
import { Container } from "@mui/material";
import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import connectDB from "@/utils/connectDB";
import User from "@/models/User";

// در پیج ها تکی هم میشه نوشت اما اه داخل روتی چند فایل داشته باشیم بهتره تو لی اوت بنویسیم
export const metadata = {
  title: "املاک | پنل کاربری",
};

const DashboardLayaout = async ({ children }) => {
  const session = await getServerSession(authOptions);
  if (!session) return redirect("/signin");
  await connectDB();
  const user = await User.findOne({ email: session.user.email });
  console.log(user);
  if (!user) return <h3>مشکلی برات پیش آمده کسکم؟</h3>;
  // if (user.role === "OWNER")
  //   return (
  //     <>

  //     </>
  //   );

  return (
    <>
      <Container maxWidth="lg">
        <DashboardSidebar role={user.role} email={user.email}>
          <Container
            maxWidth="lg"
            sx={{
              marginTop: "20px",
            }}
          >
            {children}
          </Container>
        </DashboardSidebar>
      </Container>
    </>
  );
};

export default DashboardLayaout;
