import Footer from "../[locale]/components/Footer";
import { useRouter, usePathname } from "next/navigation";
import Header from "../[locale]/components/Header";
import ScrollToTop from "../[locale]/components/ScrollToTop";
import "node_modules/react-modal-video/css/modal-video.css";
import "@/styles/index.css";
import "@/styles/ckeditor.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Chat from "./components/Chat/ChatIcon";
import ChatIcon from "./components/Chat/ChatIcon";
import type { Metadata } from "next";
import { Providers } from "./providers";
import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import CssBaseline from "@mui/material/CssBaseline";
import "./global.scss"
import { headers } from "next/headers";
import NextNProgressClient from "./components/Common/ProgressBar";

export const metadata: Metadata = {
  // title: "65 điều hành doanh nghiệp",
  openGraph: {
    images: [
      {
        url: "https://www.3i.com.vn/_next/static/media/slide2.7fe722ab.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  title: "Công ty TNHH một thành viên công nghệ và truyền thông 3I",
  description:
    "Công ty chuyên cung cấp giải pháp phần mềm quản lý sản xuất và quản trị doanh nghiệp, hỗ trợ doanh nghiệp chuyển đổi số, đáp ứng đầy đủ các nhu cầu về nghiệp vụ, đem tới những lợi ích vượt trội giúp doanh nghiệp phát triển bền vững và gia tăng lợi thế cạnh tranh. Đối tượng khách hàng là các nhà máy FDI, các cơ quan Chính phủ...",
};
export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params?: any;
}) {
  return (
    <html>
      {/* <CssBaseline /> */}
      <body className={`relative !overflow-x-hidden font-serif dark:bg-black`}>
        <Providers>
          <NextNProgressClient />

          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
