import type { Metadata } from "next";
import "./globals.css";

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
        <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 bg-gray-50">
          {children}
        </div>
      </body>
    </html>
  );
}
