"use client";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRef, useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload, message } from "antd";
import type { UploadFile, UploadProps } from "antd/es/upload/interface";
import "./signup.css";
import { AiOutlineDownload } from "react-icons/ai";
import { setCookie } from "cookies-next";
import * as XLSX from "xlsx/xlsx.mjs";
import sendEmail from "../utils/sendEmail";

const schema = yup.object().shape({
  companyAddress: yup.string().required("Địa chỉ công ty không được để trống"),
  phoneNumber: yup.number().required("Số điện thoại không được để trống"),
  email: yup.string().required("Email không được để trống"),
  companyName: yup.string().required("Tên công ty không được để trống"),
  note: yup.string().notRequired(),
});
interface FormData {
  companyAddress: string;
  phoneNumber: string;
  email: string;
  note: string;
  companyName: string;
}
const fileList: UploadFile[] = [
  {
    uid: "-1",
    name: "yyy.png",
    status: "done",
    url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    thumbUrl:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
  },
];
interface FileData {
  name: string;
  size: number;
  type: string;
  file: File;
}

const SignupPage = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const getCookieByForm = (data: FormData) => {
    const dataCookie = {
      companyName: data.companyName,
      companyAddress: data.companyAddress,
      email: data.email,
      phoneNumber: data.phoneNumber,
    };
    // console.log("dataCookie", dataCookie);
    setCookie("cookie", dataCookie);
  };
  const onSignUp = (data: FormData) => {
    // console.log(data);
    getCookieByForm(data);
    sendEmail(data.email, "Test Subject", "Test Message");
    // Handle form submission
    // submitForm(form);
  };

  const [image, setImage] = useState<File>();
  const [files, setFiles] = useState<FileData[]>([]);

  const refInput = useRef<HTMLInputElement>(null);
  const handleImage = () => {
    refInput.current?.click();
  };
  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const InputFileItem = e.target.files?.[0];
    if (
      InputFileItem &&
      (InputFileItem.size >= 1048576 ||
        !InputFileItem.type.includes("image/jpeg"))
    ) {
      ("loi");
    } else {
      setImage(InputFileItem);
      // onChange(InputFileItem as File);
    }
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputFiles = e.target.files;
    if (inputFiles) {
      const newFiles: FileData[] = Array.from(inputFiles).map((file) => ({
        name: file.name,
        size: file.size,
        type: file.type,
        file: file,
      }));
      setFiles([...files, ...newFiles]);
    }
  };

  // const props: UploadProps = {
  //   action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
  //   onChange({ file, fileList }) {
  //     if (file.status !== "uploading") {
  //       console.log(file, fileList);
  //     }
  //   },
  //   defaultFileList: [
  //     {
  //       uid: "1",
  //       name: "xxx.png",
  //       status: "uploading",
  //       url: "http://www.baidu.com/xxx.png",
  //       percent: 33,
  //     },
  //     {
  //       uid: "2",
  //       name: "yyy.png",
  //       status: "done",
  //       url: "http://www.baidu.com/yyy.png",
  //     },
  //     {
  //       uid: "3",
  //       name: "zzz.png",
  //       status: "error",
  //       response: "Server Error 500", // custom error message to show
  //       url: "http://www.baidu.com/zzz.png",
  //     },
  //   ],
  // };
  const [jsonData, setJsonData] = useState({});

  const customRequest = ({ file }) => {
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: "binary" });
      const jsonData = {};
      workbook.SheetNames.forEach((sheetName) => {
        const worksheet = workbook.Sheets[sheetName];
        const sheetData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
        const filteredSheetData = sheetData.filter((row) => row.length > 0);
        jsonData[sheetName] = filteredSheetData;
      });
      setJsonData(jsonData);
    };
  };
  return (
    <>
      {/* <section className="relative z-10 overflow-hidden pt-36 pb-16 md:pb-20 lg:pt-[180px] lg:pb-28">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[500px] rounded-md bg-primary bg-opacity-5 py-10 px-6 dark:bg-dark sm:p-[60px]">
                <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
                  Đăng ký tư vấn
                </h3>
                <p className="mb-11 text-center text-base font-medium text-body-color">
                  It’s totally free and super easy
                </p>
                <button className="mb-6 flex w-full items-center justify-center rounded-md bg-white p-3 text-base font-medium text-body-color shadow-one hover:text-primary dark:bg-[#242B51] dark:text-body-color dark:shadow-signUp dark:hover:text-white">
                  <span className="mr-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_95:967)">
                        <path
                          d="M20.0001 10.2216C20.0122 9.53416 19.9397 8.84776 19.7844 8.17725H10.2042V11.8883H15.8277C15.7211 12.539 15.4814 13.1618 15.1229 13.7194C14.7644 14.2769 14.2946 14.7577 13.7416 15.1327L13.722 15.257L16.7512 17.5567L16.961 17.5772C18.8883 15.8328 19.9997 13.266 19.9997 10.2216"
                          fill="#4285F4"
                        />
                        <path
                          d="M10.2042 20.0001C12.9592 20.0001 15.2721 19.1111 16.9616 17.5778L13.7416 15.1332C12.88 15.7223 11.7235 16.1334 10.2042 16.1334C8.91385 16.126 7.65863 15.7206 6.61663 14.9747C5.57464 14.2287 4.79879 13.1802 4.39915 11.9778L4.27957 11.9878L1.12973 14.3766L1.08856 14.4888C1.93689 16.1457 3.23879 17.5387 4.84869 18.512C6.45859 19.4852 8.31301 20.0005 10.2046 20.0001"
                          fill="#34A853"
                        />
                        <path
                          d="M4.39911 11.9777C4.17592 11.3411 4.06075 10.673 4.05819 9.99996C4.0623 9.32799 4.17322 8.66075 4.38696 8.02225L4.38127 7.88968L1.19282 5.4624L1.08852 5.51101C0.372885 6.90343 0.00012207 8.4408 0.00012207 9.99987C0.00012207 11.5589 0.372885 13.0963 1.08852 14.4887L4.39911 11.9777Z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M10.2042 3.86663C11.6663 3.84438 13.0804 4.37803 14.1498 5.35558L17.0296 2.59996C15.1826 0.901848 12.7366 -0.0298855 10.2042 -3.6784e-05C8.3126 -0.000477834 6.45819 0.514732 4.8483 1.48798C3.2384 2.46124 1.93649 3.85416 1.08813 5.51101L4.38775 8.02225C4.79132 6.82005 5.56974 5.77231 6.61327 5.02675C7.6568 4.28118 8.91279 3.87541 10.2042 3.86663Z"
                          fill="#EB4335"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_95:967">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  Sign up with Google
                </button>
                <div className="mb-8 flex items-center justify-center">
                  <span className="hidden h-[1px] w-full max-w-[60px] bg-body-color sm:block"></span>
                  <p className="w-full px-5 text-center text-base font-medium text-body-color">
                    Or, register with your email
                  </p>
                  <span className="hidden h-[1px] w-full max-w-[60px] bg-body-color sm:block"></span>
                </div>
                <form onSubmit={handleSubmit(onSignUp)}>
                  <div className="mb-8">
                    <label
                      htmlFor="name"
                      className="mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                      {" "}
                      Full Name{" "}
                    </label>
                    <input
                      {...register("username")}
                      type="text"
                      // name="name"
                      placeholder="Enter your full name"
                      className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                    />
                  </div>
                  <div className="mb-8">
                    <label
                      htmlFor="email"
                      className="mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                      {" "}
                      Work Email{" "}
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      // name="email"
                      placeholder="Enter your Email"
                      className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                    />
                  </div>
                  <div className="mb-8">
                    <label
                      htmlFor="password"
                      className="mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                      {" "}
                      Your Password{" "}
                    </label>
                    <input
                      {...register("password")}
                      type="password"
                      // name="password"
                      placeholder="Enter your Password"
                      className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                    />
                  </div>
                  <div className="mb-8 flex">
                    <label
                      htmlFor="checkboxLabel"
                      className="flex cursor-pointer select-none text-sm font-medium text-body-color"
                    >
                      <div className="relative">
                        <input
                          type="checkbox"
                          id="checkboxLabel"
                          className="sr-only"
                        />
                        <div className="box mr-4 mt-1 flex h-5 w-5 items-center justify-center rounded border border-body-color border-opacity-20 dark:border-white dark:border-opacity-10">
                          <span className="opacity-0">
                            <svg
                              width="11"
                              height="8"
                              viewBox="0 0 11 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                                fill="#3056D3"
                                stroke="#3056D3"
                                strokeWidth="0.4"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                      <span>
                        By creating account means you agree to the
                        <a href="#0" className="text-primary hover:underline">
                          {" "}
                          Terms and Conditions{" "}
                        </a>
                        , and our
                        <a href="#0" className="text-primary hover:underline">
                          {" "}
                          Privacy Policy{" "}
                        </a>
                      </span>
                    </label>
                  </div>
                  <div className="mb-6">
                    <button
                      className="flex w-full items-center justify-center rounded-md bg-primary py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
                      type="submit"
                    >
                      Sign up
                    </button>
                  </div>
                </form>
                <p className="text-center text-base font-medium text-body-color">
                  Already using Startup?
                  <Link href="/signin" className="text-primary hover:underline">
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-0 top-0 z-[-1]">
          <svg
            width="1440"
            height="969"
            viewBox="0 0 1440 969"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_95:1005"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="1440"
              height="969"
            >
              <rect width="1440" height="969" fill="#090E34" />
            </mask>
            <g mask="url(#mask0_95:1005)">
              <path
                opacity="0.1"
                d="M1086.96 297.978L632.959 554.978L935.625 535.926L1086.96 297.978Z"
                fill="url(#paint0_linear_95:1005)"
              />
              <path
                opacity="0.1"
                d="M1324.5 755.5L1450 687V886.5L1324.5 967.5L-10 288L1324.5 755.5Z"
                fill="url(#paint1_linear_95:1005)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_95:1005"
                x1="1178.4"
                y1="151.853"
                x2="780.959"
                y2="453.581"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_95:1005"
                x1="160.5"
                y1="220"
                x2="1099.45"
                y2="1192.04"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section> */}
      <div
        className=" wow xl:px-28 fadeInUp relative z-10 mt-36 xl:mt-20 mb-24 rounded-md bg-[green]/[3%] p-8 dark:bg-[green]/10 sm:p-11 lg:p-8 xl:p-11"
        data-wow-delay=".2s"
      >
        <h3 className=" text-2xl font-bold leading-tight text-black dark:text-white">
          Đăng ký nhận tư vấn, yêu cầu cài đặt Smartwork
        </h3>
        <p className="mb-11 border-b border-body-color border-opacity-25 pb-11 text-base font-medium leading-relaxed text-body-color dark:border-white dark:border-opacity-25">
          Smartwork - Nâng tầm doanh nghiệp của bạn
        </p>
        <form onSubmit={() => onSignUp}>
          <input
            {...register("companyName")}
            type="text"
            // name="name"

            placeholder="Tên Công Ty"
            className="mb-4 w-full rounded-md border border-body-color border-opacity-10 py-3 px-6 text-base font-medium  placeholder-body-color outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50"
          />
          {errors.companyName && <p>{errors.companyName.message}</p>}
          <input
            {...register("email")}
            type="email"
            // onChange={writeEmail}
            placeholder="Địa Chỉ Email"
            className="mb-4 w-full rounded-md border border-body-color border-opacity-10 py-3 px-6 text-base font-medium  placeholder-body-color outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50"
          />
          {errors.email && (
            <p className="text-[#B52F7D]">{errors.email.message}</p>
          )}
          <input
            {...register("companyAddress")}
            type="text"
            // name="Địa Chỉ Công Ty"
            placeholder="Địa Chỉ Công Ty"
            className="mb-4 w-full rounded-md border border-body-color border-opacity-10 py-3 px-6 text-base font-medium  placeholder-body-color outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50"
          />
          <input
            type="text"
            {...register("phoneNumber")}
            // name="Số Điện Thoại"
            placeholder="Số Điện Thoại"
            className="mb-4 w-full rounded-md border border-body-color border-opacity-10 py-3 px-6 text-base font-medium  placeholder-body-color outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50"
          />
          <input
            type="text"
            {...register("note")}
            // name="Ghi Chú"
            placeholder="Ghi Chú"
            className="mb-4 w-full rounded-md border border-body-color border-opacity-10 py-3 px-6 text-base font-medium  placeholder-body-color outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50"
          />
          <div className="">
            <div className=" mb-4 flex justify-between">
              <div className="w-[49%]">
                <input
                  ref={refInput}
                  type="file"
                  className="hidden"
                  accept=".jpg,.jeq,.png"
                  onChange={handleChangeImage}
                />
                <button
                  onClick={handleImage}
                  type="button"
                  className="duration-80 mb-4 flex min-h-[50px] w-full cursor-pointer items-center justify-center rounded-md border border-transparent bg-[green] py-3 px-6 text-center text-base font-medium text-white outline-none transition ease-in-out hover:bg-opacity-80 hover:text-[#232628] hover:shadow-signUp focus-visible:shadow-none"
                >
                  <AiOutlineDownload className="mr-2 text-lg" />
                  Tải xuống nghiệp vụ và cấu trúc công ty
                </button>
              </div>
              <div className="w-[49%]">
                <Upload customRequest={customRequest}>
                  <Button
                    icon={<UploadOutlined />}
                    className="mb-4 min-h-[50px] w-full bg-[green] py-3 px-6 text-base font-medium text-white hover:bg-opacity-80 "
                  >
                    Tải lên nghiệp vụ và cấu trúc công ty
                  </Button>
                </Upload>
              </div>
            </div>
            <div className="w-full">
              <input
                // onClick={submitForm}
                type="submit"
                value="ĐĂNG KÝ"
                className="duration-80 mb-4 max-h-[50px] w-full cursor-pointer rounded-md border border-transparent bg-[green] py-3 px-6 text-center text-base font-medium text-white outline-none transition ease-in-out hover:bg-opacity-80 hover:shadow-signUp focus-visible:shadow-none"
              />
            </div>
          </div>

          <p className="text-center text-base font-medium leading-relaxed text-body-color">
            Đảm bảo không có thư rác, vì vậy vui lòng không gửi bất kỳ thư rác
            nào.
          </p>
        </form>
        <div className="absolute top-0 left-0 z-[-1]">
          <svg
            width="370"
            height="596"
            viewBox="0 0 370 596"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_88:141"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="370"
              height="596"
            >
              <rect width="370" height="596" rx="2" fill="#1D2144" />
            </mask>
            <g mask="url(#mask0_88:141)">
              <path
                opacity="0.15"
                d="M15.4076 50.9571L54.1541 99.0711L71.4489 35.1605L15.4076 50.9571Z"
                fill="url(#paint0_linear_88:141)"
              />
              <path
                opacity="0.15"
                d="M20.7137 501.422L44.6431 474.241L6 470.624L20.7137 501.422Z"
                fill="url(#paint1_linear_88:141)"
              />
              <path
                opacity="0.1"
                d="M331.676 198.309C344.398 204.636 359.168 194.704 358.107 180.536C357.12 167.363 342.941 159.531 331.265 165.71C318.077 172.69 318.317 191.664 331.676 198.309Z"
                fill="url(#paint2_linear_88:141)"
              />
              <g opacity="0.3">
                <path
                  d="M209 89.9999C216 77.3332 235.7 50.7999 258.5 45.9999C287 39.9999 303 41.9999 314 30.4999C325 18.9999 334 -3.50014 357 -3.50014C380 -3.50014 395 4.99986 408.5 -8.50014C422 -22.0001 418.5 -46.0001 452 -37.5001C478.8 -30.7001 515.167 -45 530 -53"
                  stroke="url(#paint3_linear_88:141)"
                />
                <path
                  d="M251 64.9999C258 52.3332 277.7 25.7999 300.5 20.9999C329 14.9999 345 16.9999 356 5.49986C367 -6.00014 376 -28.5001 399 -28.5001C422 -28.5001 437 -20.0001 450.5 -33.5001C464 -47.0001 460.5 -71.0001 494 -62.5001C520.8 -55.7001 557.167 -70 572 -78"
                  stroke="url(#paint4_linear_88:141)"
                />
                <path
                  d="M212 73.9999C219 61.3332 238.7 34.7999 261.5 29.9999C290 23.9999 306 25.9999 317 14.4999C328 2.99986 337 -19.5001 360 -19.5001C383 -19.5001 398 -11.0001 411.5 -24.5001C425 -38.0001 421.5 -62.0001 455 -53.5001C481.8 -46.7001 518.167 -61 533 -69"
                  stroke="url(#paint5_linear_88:141)"
                />
                <path
                  d="M249 40.9999C256 28.3332 275.7 1.79986 298.5 -3.00014C327 -9.00014 343 -7.00014 354 -18.5001C365 -30.0001 374 -52.5001 397 -52.5001C420 -52.5001 435 -44.0001 448.5 -57.5001C462 -71.0001 458.5 -95.0001 492 -86.5001C518.8 -79.7001 555.167 -94 570 -102"
                  stroke="url(#paint6_linear_88:141)"
                />
              </g>
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_88:141"
                x1="13.4497"
                y1="63.5059"
                x2="81.144"
                y2="41.5072"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_88:141"
                x1="28.1579"
                y1="501.301"
                x2="8.69936"
                y2="464.391"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_88:141"
                x1="338"
                y1="167"
                x2="349.488"
                y2="200.004"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_88:141"
                x1="369.5"
                y1="-53"
                x2="369.5"
                y2="89.9999"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_88:141"
                x1="411.5"
                y1="-78"
                x2="411.5"
                y2="64.9999"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_88:141"
                x1="372.5"
                y1="-69"
                x2="372.5"
                y2="73.9999"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_88:141"
                x1="409.5"
                y1="-102"
                x2="409.5"
                y2="40.9999"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </>
  );
};

export default SignupPage;