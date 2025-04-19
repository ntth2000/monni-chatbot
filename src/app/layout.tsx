import type { Metadata } from "next";
import "./globals.css";
import TopBar from "./ui/topbar";

export const metadata: Metadata = {
  title: "Monni chatbot",
  description: "Help you manage your personal spending",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="bg-gradient fixed top-0 bottom-0 left-0 right-0"></div>
        <main className="h-screen w-screen overflow-hidden flex flex-col items-center justify-center text-sm md:text-base">
          {children}
        </main>
      </body>
    </html>
  );
}
