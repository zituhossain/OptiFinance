import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "OptiFinance",
  description: "One stop solution for all your finance needs",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          {/* Header */}
          <Header />
          <main className="min-h-screen">{children}</main>
          {/* Footer */}
          <footer className="bg-blue-50 py-6">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p>Made with ❤️ by OptiFinance</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
