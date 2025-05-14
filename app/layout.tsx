import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Vitalsync",
  description: "Symptom Tracker & Personal Health Logbook",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased font-sans`}
      >
        <Navbar />
        <div className="flex flex-col items-center w-full">
          <div className="max-w-7xl w-full">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
