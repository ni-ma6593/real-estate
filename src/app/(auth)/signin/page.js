import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import SignInPage from "@/components/templates/Signin";

const Signin = async () => {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/");
  }

  return (
    <>
      <SignInPage />
    </>
  );
};

export default Signin;
