import Header from "@/components/Layout/Header/Header";
import Footer from "@/components/Layout/Footer/Footer";
import "./globals.css";

export const metadata = {
  title: "CodeByIO | Your Busines Digitalization Partner",
  description:
    "A website development agency that helps digitize your business with clean code, mockup design, and smart tech consultancy.",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
