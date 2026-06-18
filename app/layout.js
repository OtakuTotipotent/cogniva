import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { AppContextProvider } from "@/context/AppContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Cogniva - AI Chat App",
  description: "AI Chat Web Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <ClerkProvider>
          <AppContextProvider>{children}</AppContextProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
