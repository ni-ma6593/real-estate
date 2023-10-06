import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import connectDB from "@/utils/connectDB";
import User from "@/models/User";
import Header from "@/components/layouts/Header";
import DashboardSidebar from "@/components/layouts/DashboardSidebar";
import { Container } from "@mui/material";

const AdminLayout = async ({ children }) => {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signin");
  await connectDB();
  const user = await User.findOne({ email: session.user.email });
  if (!user.role === "OWNER" || !user.role === "ADMIN") redirect("/dashboard");
  return (
    <>
      {/* <Header /> */}
      <Container>
        <DashboardSidebar email={user.email} role={user.role}>
          {children}
        </DashboardSidebar>
      </Container>
    </>
  );
};
export default AdminLayout;
