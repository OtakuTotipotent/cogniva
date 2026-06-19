import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { AppContextProvider } from "@/context/AppContext";
import { Toaster } from "react-hot-toast";

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
          <AppContextProvider>
            <Toaster
              toastOptions={{
                success: {
                  style: {
                    background: "black",
                    color: "white",
                  },
                },
                error: {
                  style: {
                    background: "black",
                    color: "red",
                  },
                },
              }}
            />
            {children}
          </AppContextProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
