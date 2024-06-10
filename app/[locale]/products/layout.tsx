import { Inter } from "next/font/google";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ClientOnly from "../components/ClientOnly";

const inter = Inter({ subsets: ["latin"], display: 'swap', adjustFontFallback: false });

export const metadata = {
  // title: "Product - 3i - Platform điều hành doanh nghiệp",
  title: "Công ty TNHH một thành viên công nghệ và truyền thông 3I",
  description: "Được thành lâp vào tháng 3 năm 2006 với tiền thân là một đội chuyên gia phần mềm và giải pháp viễn thông có kinh nghiệm từ Hàn Quốc. Chúng tôi đang từng bước đạt được uy tín và niềm tin từ khách hàng với những sản phẩm công nghệ hiện đại và phù hợp với các doanh nghiệp trong nước và các đối tác nước ngoài như Hàn Quốc , Nhật Bản , Trung Quốc.",
};

export default function Products({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>{children}</div>
  );
}