import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Manish Exports",
  description: "Precision Engineered Metal Components for the World’s Leading OEMs & Distributors",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
