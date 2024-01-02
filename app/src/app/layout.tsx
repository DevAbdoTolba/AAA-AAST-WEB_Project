

export const metadata = {
  title: "root route",
  description: "The first step in the website",
};

import React from "react";
import { Box } from "@mui/material";
import ThemeComponent from "./ThemeComponent";
import Head from "./head";
import Header from "./util/components/header";
import Footer from "./util/components/footer";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <html lang="en">
      <Head />
      <body>
        
          <ThemeComponent>
            <Header />
            <Box
              sx={{
                mx: {
                  xs: 0,
                  sm: "5%",
                },
              }}
            >
              {children}
            </Box>
            <Box
              sx={{
                mx: {
                  xs: 0,
                  sm: "5%",
                },
              }}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Footer />
            </Box>
          </ThemeComponent>
        
      </body>
    </html>
  );
}
