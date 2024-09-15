// src/app/layout.tsx
import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "./components/customCursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SNW",
  description: "Portfolio of Stanley Nathanael Wijaya",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/images/pp.png" type="image/png" />
      <body className={inter.className}>
        {children}
        <CustomCursor />
      </body>
    </html>
  );
}
