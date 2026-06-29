import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { OrderNotificationProvider } from "@/context/OrderNotificationContext";
import { AuthProvider } from "@/context/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  preload: false,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  preload: false,
});

export const metadata = {
 title: "FlavorHub",
  description: "Delicious meals delivered fresh to your door",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}

    >
       <body>

      <AuthProvider>
          <CartProvider>
            <OrderNotificationProvider>
              {children}
            </OrderNotificationProvider>
          </CartProvider>
      </AuthProvider>
       
      </body>
    </html>
  );
}
