export const metadata = {
  title: "root route",
  description: "The first step in the website",
};

import { Box } from "@mui/material";
import ThemeComponent from "./ThemeComponent";
import Head from "./head";
import Header from "./util/components/header";
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
          <Box mx={"5%"}>{children}</Box>
        </ThemeComponent>
      </body>
    </html>
  );
}
