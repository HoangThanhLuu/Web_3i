import Image from "next/image";
import Link from "next/link";
import "./footer.css";

import { getCurrentYear } from "../../utils/util";
import {
  MdOutlineMailOutline,
  MdOutlineLocalPhone,
  MdOutlineLocationOn,
} from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { IoLogoGoogleplus } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
const Footer = () => {
  return (
    <>
      <footer
        className="wow fadeInUp relative z-10 bg-[green] bg-opacity-5 pt-4 md:pt-8"
        data-wow-delay=".1s"
      >
        <div className="mx-5 mb-8 lg:px-[100px]">
          <ul className="flex justify-between max-lg:justify-center ">
            <li>
            <h2 className="text-[#002958] lg:text-2xl font-bold tracking-wide max-lg:text-center">Công ty TNHH một thành viên công nghệ <br className="max-lg:hidden"/>
và truyền thông 3I</h2>
              <ul className="flex justify-between max-lg:gap-4 mt-6">
                <li >
                  <h4 className="text-black lg:text-lg font-bold">Liên kết nhanh</h4>
                  <ul className="flex flex-col gap-4 mt-4">
                    <li className="text-sm font-medium text-black hover:text-blue-500 duration-200 ease-in "><Link href={"/"}>Trang chủ</Link></li>
                    <li className="text-sm font-medium text-black hover:text-blue-500 duration-200 ease-in "><Link href={"/"}>Tuyển dụng</Link></li>
                    <li className="text-sm font-medium text-black hover:text-blue-500 duration-200 ease-in "><Link href={"/"}>Liên hệ</Link></li>
                  </ul>
                </li>
                <li ><h4 className="text-black lg:text-lg font-bold">Sản phẩm & dịch vụ</h4>
                <ul className="flex flex-col gap-4 mt-4">
                    <li className="text-sm font-medium text-black hover:text-blue-500 duration-200 ease-in "><Link href={"/"}>Sản phẩm</Link></li>
                    <li className="text-sm font-medium text-black hover:text-blue-500 duration-200 ease-in "><Link href={"/"}>Dịch vụ</Link></li>
                    <li className="text-sm font-medium text-black hover:text-blue-500 duration-200 ease-in "><Link href={"/"}>Công nghệ</Link></li>
                  </ul>
                </li>
                <li ><h4 className="text-black lg:text-lg font-bold">Hỗ trợ</h4>
                <ul className="flex flex-col gap-4 mt-4">
                    <li className="text-sm font-medium text-black hover:text-blue-500 duration-200 ease-in "><Link href={"/"}>Hỗ trợ kĩ thuật</Link></li>
                    <li className="text-sm font-medium text-black hover:text-blue-500 duration-200 ease-in "><Link href={"/"}>Điều khoản sử dụng</Link></li>
                    <li className="text-sm font-medium text-black hover:text-blue-500 duration-200 ease-in "><Link href={"/"}>Bảng giá</Link></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="max-lg:hidden">
              <div >
                <h3 className="text-[#002958] lg:text-xl font-bold">Liên hệ với chúng tôi</h3>
                <ul className="flex flex-col gap-4 mt-4">
                    <li className="text-sm font-medium text-black hover:text-blue-500 duration-200 ease-in ">Email: <Link href={"/"}>
info@3i.com.vn</Link></li>
                    <li className="text-sm font-medium text-black hover:text-blue-500 duration-200 ease-in ">Mua hàng: <Link href={"/"}>(+84) 0904322883</Link></li>
                    <li className="text-sm font-medium text-black hover:text-blue-500 duration-200 ease-in ">Tuyển dụng: <Link href={"/"}>(+84) 0904322883</Link></li>
                    <li className="flex  items-center gap-5"><FaFacebookF size={25} className="hover:text-blue-500 duration-200 ease-in  hover:cursor-pointer duration-200 ease-in"/><FaTwitter size={25} className="hover:text-blue-500 duration-200 ease-in  duration-200 ease-in hover:cursor-pointer"/><IoLogoGoogleplus size={30} className="hover:text-red-500 duration-200 ease-in hover:cursor-pointer"/><IoMdMail size={30} className="hover:text-yellow-600 duration-200 ease-in hover:cursor-pointer"/>
</li>
                  </ul>
              </div>
              

            </li>
            <li className="max-lg:hidden"><div className="text-[#002958] lg:text-xl font-bold">
             <h3  className="text-[#002958] lg:text-xl font-bold">Vị trí các cơ sở</h3>
             <div>
              <h4 className="text-base font-bold text-black  py-4">Hà nội :</h4>
              <div className="flex items-center gap-2">
              <FaLocationDot />
              <span className="text-sm font-medium text-black hover:text-blue-500 duration-200 ease-in  "><Link href={"/"}>Nhà B1-4 Khu đô thị Hạ Đình - Thanh Xuân - Hà Nội</Link></span>
              </div>
             </div>
             <div>
              <h4 className="text-base font-bold text-black  py-4">Hồ Chí Minh :</h4>
              <div className="flex items-center gap-2">
              <FaLocationDot />
              <span className="text-sm font-medium text-black hover:text-blue-500 duration-200 ease-in "><Link href={"/"}>Số 23-25 Trần Nhật Duật, Phường Tân Định, Quận 1, Tp Hồ Chí Minh</Link></span>
              </div>
             </div>
              </div></li>
          </ul>

        </div>
        <div className="bg-[green]/10 py-4">
          <div className="px-4 lg:px-[100px]">
          <div className=" flex justify-between items-center ">
                  <Link
                    href="/"
                    className="header-logo flex w-full items-center gap-4"
                  >
                    <Image
                      src="/images/logo/newlog.png"
                      alt="logo"
                      width={500}
                      height={60}
                      className="!w-[40px] !h-[40px] lg:!w-[80px] lg:!h-[80px]  rounded-sm dark:hidden object-contain"
                    />
                    <div className="hidden lg:flex justify-center items-center gap-2"><span className="text-[16px] font-bold uppercase text-green-500">Infomation</span><span className="text-[16px] font-bold uppercase  text-yellow-500">Intelligent</span><span className="text-[16px] uppercase font-bold text-red-500">Innovation</span></div>
                  </Link>
                  <p className="text-nowrap text-base  dark:text-white me-4">
              © Copyright {getCurrentYear()} 3I. All right reserved
            </p>
                </div>
            
          </div>
        </div>
        <div className="absolute right-0 top-14 z-[-1]">
          <svg
            width="55"
            height="99"
            viewBox="0 0 55 99"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.8" cx="49.5" cy="49.5" r="49.5" fill="#959CB1" />
            <mask
              id="mask0_94:899"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="99"
              height="99"
            >
              <circle
                opacity="0.8"
                cx="49.5"
                cy="49.5"
                r="49.5"
                fill="#4A6CF7"
              />
            </mask>
            <g mask="url(#mask0_94:899)">
              <circle
                opacity="0.8"
                cx="49.5"
                cy="49.5"
                r="49.5"
                fill="url(#paint0_radial_94:899)"
              />
              <g opacity="0.8" filter="url(#filter0_f_94:899)">
                <circle cx="53.8676" cy="26.2061" r="20.3824" fill="white" />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_f_94:899"
                x="12.4852"
                y="-15.1763"
                width="82.7646"
                height="82.7646"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="10.5"
                  result="effect1_foregroundBlur_94:899"
                />
              </filter>
              <radialGradient
                id="paint0_radial_94:899"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(49.5 49.5) rotate(90) scale(53.1397)"
              >
                <stop stopOpacity="0.47" />
                <stop offset="1" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-24 left-0 z-[-1]">
          <svg
            width="79"
            height="94"
            viewBox="0 0 79 94"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              opacity="0.3"
              x="-41"
              y="26.9426"
              width="66.6675"
              height="66.6675"
              transform="rotate(-22.9007 -41 26.9426)"
              fill="url(#paint0_linear_94:889)"
            />
            <rect
              x="-41"
              y="26.9426"
              width="66.6675"
              height="66.6675"
              transform="rotate(-22.9007 -41 26.9426)"
              stroke="url(#paint1_linear_94:889)"
              strokeWidth="0.7"
            />
            <path
              opacity="0.3"
              d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L77.1885 68.2073L50.5215 7.42229Z"
              fill="url(#paint2_linear_94:889)"
            />
            <path
              d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L76.7963 68.2073L50.5215 7.42229Z"
              stroke="url(#paint3_linear_94:889)"
              strokeWidth="0.7"
            />
            <path
              opacity="0.3"
              d="M17.9721 93.3057L-14.9695 88.2076L46.2077 62.325L77.1885 68.2074L17.9721 93.3057Z"
              fill="url(#paint4_linear_94:889)"
            />
            <path
              d="M17.972 93.3057L-14.1852 88.2076L46.2077 62.325L77.1884 68.2074L17.972 93.3057Z"
              stroke="url(#paint5_linear_94:889)"
              strokeWidth="0.7"
            />
            <defs>
              <linearGradient
                id="paint0_linear_94:889"
                x1="-41"
                y1="21.8445"
                x2="36.9671"
                y2="59.8878"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_94:889"
                x1="25.6675"
                y1="95.9631"
                x2="-42.9608"
                y2="20.668"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_94:889"
                x1="20.325"
                y1="-3.98039"
                x2="90.6248"
                y2="25.1062"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_94:889"
                x1="18.3642"
                y1="-1.59742"
                x2="113.9"
                y2="80.6826"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_94:889"
                x1="61.1098"
                y1="62.3249"
                x2="-8.82468"
                y2="58.2156"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_94:889"
                x1="65.4236"
                y1="65.0701"
                x2="24.0178"
                y2="41.6598"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </footer>
    </>
  );
};

export default Footer;
