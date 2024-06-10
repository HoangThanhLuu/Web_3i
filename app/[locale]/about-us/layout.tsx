import { Inter } from "next/font/google";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ClientOnly from "../components/ClientOnly";

const inter = Inter({ subsets: ["latin"], display: 'swap', adjustFontFallback: false });

export const metadata = {
  title: "3i - AboutUs - Platform điều hành doanh nghiệp",
  description: "Được thành lâp vào tháng 3 năm 2006 với tiền thân là một đội chuyên gia phần mềm và giải pháp viễn thông có kinh nghiệm từ Hàn Quốc. Chúng tôi đang từng bước đạt được uy tín và niềm tin từ khách hàng với những sản phẩm công nghệ hiện đại và phù hợp với các doanh nghiệp trong nước và các đối tác nước ngoài như Hàn Quốc , Nhật Bản , Trung Quốc.",
};

export default function Aboutus({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>

      {/* <ClientOnly> */}

      {/* <Header /> */}
      {children}
      {/* <Footer /> */}
      {/* </ClientOnly> */}
    </div>


  );
}