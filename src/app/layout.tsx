import "./globals.css";
import { Inter } from "next/font/google";

import Navbar from "@/components/section/NavBar";
import Footer from "@/components/section/Footer";
// clerk layout section
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });
import SearchProvider from "../context/searchContext";
import CartProvider from "../context/cartContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "Marketplace_Builder_Hackathon_2025",
  description: "nextjs-glow-haven-e-commerce-store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} max-w-none w-auto`}>
          <SearchProvider>
            <CartProvider>
              <Navbar />
              {children}
              <ToastContainer />
              <Footer />
            </CartProvider>
          </SearchProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
