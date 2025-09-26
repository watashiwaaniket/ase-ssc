import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";


const ibmPlex = IBM_Plex_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "SortaEcommerce",
  description: "Next gen e-commerce website made for the user of tommorow and present",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlex.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
