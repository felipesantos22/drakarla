import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400"],
});

export const metadata: Metadata = {
  title: "Dra Karla Batista",
  description:
    "Site oficial da Dra Karla Batista, especialista em saúde e bem-estar. Encontre informações sobre seus serviços, agende consultas e descubra dicas para uma vida saudável. Sua saúde em boas mãos com a Dra Karla Batista.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
