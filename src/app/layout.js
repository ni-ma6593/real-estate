import localFonts from "next/font/local";

import CssProvider from "@/providers/CssProvider";
import { Container } from "@mui/material";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import RTLProvider from "@/providers/RTLProvider";
import NextAuthProvider from "@/providers/NextAuthProvider";
import { Toaster } from "react-hot-toast";

const font = localFonts({
  src: [
    {
      path: "./../../public/fonts/Vazirmatn/webfonts/Vazirmatn[wght].woff2",
    },
  ],
});

export const metadata = {
  title: "املاک | پروژه مشاور املاک",
  description: "سایت خرید و فروش ملک",
  icons: {
    icon: "./favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      style={{
        height: "100vh",
      }}
      lang="fa"
      dir="rtl"
    >
      <body
        style={
          {
            // height: "100vh",
          }
        }
        className={font.className}
      >
        <NextAuthProvider>
          <RTLProvider>
            <CssProvider>
              {/* <Header /> */}

              {children}
            </CssProvider>
          </RTLProvider>
        </NextAuthProvider>
        <Toaster position="top-center" reverseOrder={false} />
      </body>
    </html>
  );
}
