import { Outfit } from "next/font/google";
import "./globals.css";
import { AppContextProvider } from "@/context/AppContext";
import { Toaster } from "react-hot-toast";
import { ClerkProvider } from "@clerk/nextjs";

const outfit = Outfit({ subsets: ['latin'], weight: ["300", "400", "500"] })

export const metadata = {
  title: "CipherKart - your one-stop electronics shop",
  description: "CipherKart is an e-commerce platform for electronics, offering a wide range of products including headphones, earphones, laptops, and more. Shop now for the latest gadgets and accessories.",
  keywords: "CipherKart, e-commerce, electronics, gadgets, headphones, earphones, laptops, online shopping",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <script src="//code.tidio.co/edldzv0dia7yzssycges6pcbfsoju92s.js" async></script>
        <body className={`${outfit.className} antialiased text-gray-700`} >
          <Toaster />
          <AppContextProvider>
            {children}
          </AppContextProvider>
        </body>
      </html>
      </ClerkProvider>
  );
}
