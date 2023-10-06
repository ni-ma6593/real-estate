"use client";
import Header from "@/components/layouts/Header";
import { usePathname } from "next/navigation";

const Template = ({ children }) => {
  const pathname = usePathname();
  if (pathname === "/admin") return <>{children}</>;
  else {
    return (
      <>
        <Header />
        {children}
      </>
    );
  }
};
export default Template;
