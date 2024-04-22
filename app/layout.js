import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const roboto = Roboto_Condensed({
  subsets: ["cyrillic"],
  weight: ["300", "400", "500", "700"],
});

export const metadata = {
  title: "Cheeses",
  description:
    "Откройте для себя эксклюзивную коллекцию редких и изысканных сыров со всего мира в Cheeses. Наслаждайтесь уникальным ассортиментом, отборным качеством и непревзойденным вкусом, который превратит каждый ваш прием пищи в настоящий праздник. Погрузитесь в мир вкуса и аромата с нашими сырами, выбранными для истинных ценителей.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
