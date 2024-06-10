"use client"
import Link from "next/link";

import { FaAngleRight } from "react-icons/fa6";
import { usePathname, useSearchParams } from "next/navigation";
import { IoChevronForward } from "react-icons/io5";

import { useEffect, useState } from "react";


const Breadcrumb = ({
  pageName,
  description,
  renderHTML,
  classitem,
}: {
  pageName: string;
  description?: string;
  renderHTML?: string;
  classitem?: string;
}) => {
  // console.log("check html", renderHTML);
 

  const data1 = [
    {
      title:
        "10+ years of leading and building the position of Saigon Technology in the IT industry in Vietnam.",
    },
    {
      title: "10+ years of offering .NET development services.",
    },
    {
      title:
        "Honored to receive Gold Partner in Application Development from Microsoft.",
    },
    {
      title:
        "Quality and information security are internationally certified, Saigon Technology got ISO 27001 and 9001 certified for many years continuously.",
    },
    {
      title: "100+ .NET Developers with high expertise and enthusiasm.",
    },
  ];

  const data2 = [
    {
      title:
        "70+ Quality Assurance Engineers with advanced degrees and extensive experience.",
    },
    {
      title: "100% of well-versed and all-encompassing Project Managers.",
    },
    {
      title:
        "24/7 support from professionals for custom .NET development services.",
    },
    {
      title:
        "100% of staff members are trained, with the goal of advancing to the Senior level.",
    },
    {
      title: "900+ successful projects as a leading .NET development company.",
    },
    {
      title:
        "4+ subsidiaries and offices worldwide: Singapore, Australia, Switzerland, and the USA.",
    },
  ];

  const dataAdvantage = [
    {
      title:
        "Rapid business analysis, helping you find the perfect solution for your requirements.",
    },
    {
      title:
        "High levels of user engagement achieved by an easy-to-use interface and modern design.",
    },
    {
      title: "Timely and high-quality results thanks to Agile methodology.",
    },
    {
      title: "Integrate effortlessly to simplify processes.",
    },
    {
      title: "Updates to the .NET app are released every two to six weeks.",
    },
    {
      title: "Support is available around the clock.",
    },
  ];

  const dataServices = [
    {
      svg: "",
      title: "1. UX/UI Design",
      text: "For most .NET projects, our thorough user experience (UX) research, narrative mapping, and usability testing culminate in the polished UI mockups you agree to before we commence production. With your end-users in mind, our UX/UI designers will create beautiful, easy-to-use interfaces for your .NET application.",
    },
    {
      svg: "",
      title: "2. Business Analysis & .NET Project Management",
      text: "Our business analysts, who have experience in more than 30 different sectors, will handle the needs analysis and broad scope definition for your project through .NET consulting. With the support of Project Managers, the business and technical requirements, platform, timetable, and other issues will all be specified and managed strictly.",
    },
    {
      svg: "",
      title: "3. Application Development in the .NET Framework",
      text: "Our team uses Xamarin, Universal Windows Platform, Windows Presentation Foundation, and many more technologies in addition to .NET Core, ADO.NET, and ASP.NET. Thanks to the Agile and Lean procedures we've put in place and the Key Performance Indicators we've set up, we can ensure on-time software deliveries.",
    },
    {
      svg: "",
      title: "4. Cloud Migration for .NET Applications",
      text: "As an ultimate .NET software development company, Saigon Technology also offers app migration to the cloud service. Our team can help you design a realistic plan for adopting the cloud and carry out seamless, secure migrations of your.NET apps to the cloud, ensuring little downtime and maximum ROI.",
    },
    {
      svg: "",
      title: "5. Integration of .NET-based Applications",
      text: "Your .NET application development services may help the specified app connect with other systems in your company or in the outside world with the help of our integration architects and developers. Our team will leverage pre-built ESBs/iPaaS from many vendors or construct our own integration points.",
    },
    {
      svg: "",
      title: "6. Quality Assurance to be Included",
      text: "As a leading .NET software development company, Saigon Technology has almost 90 QA experts that employ an ISO 9001-certified, stringent quality control system to run a broad range of tests. We assist you in lowering your testing expenses while maintaining a high level of test coverage.",
    },
    {
      svg: "",
      title: "7. In-depth .NET Software Maintenance and Development",
      text: "We provide our clients with round-the-clock maintenance for the .NET development services, including improvement of performance, management of compliance requirements, and surveillance for potential security breaches (in addition to providing first-, second-, and third-level support).",
    },
  ];

  const dataDevTrust1 = [
    {
      title: "You may use .NET Core on any platform.",
    },
    {
      title: "There are no licensing fees for .NET Core.",
    },
    {
      title:
        "Extensive, proven infrastructure and popular languages for coding of .NET projects.",
    },
    {
      title: "Many different kinds of applications can be run on .NET Core.",
    },
  ];
  const dataDevTrust2 = [
    {
      title: "Safer coding practices with .NET Core.",
    },
    {
      title: "Superior app performance is now possible with .NET Core.",
    },
    {
      title:
        "Easy to pick out a .NET development company working on your demands.",
    },
    {
      title: "Microsoft developed .NET Core.",
    },
  ];

  

  return (
    <>
      <section className="relative z-10 overflow-hidden pb-[100px]">
        <div className="flex items-center">
          

          <div>
            <span className="absolute left-0 top-0 z-[-1]">
              <svg
                width="287"
                height="254"
                viewBox="0 0 287 254"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.1"
                  d="M286.5 0.5L-14.5 254.5V69.5L286.5 0.5Z"
                  fill="url(#paint0_linear_111:578)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_111:578"
                    x1="-40.5"
                    y1="117"
                    x2="301.926"
                    y2="-97.1485"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#4A6CF7" />
                    <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span className="absolute right-0 top-0 z-[-1]">
              <svg
                width="628"
                height="258"
                viewBox="0 0 628 258"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.1"
                  d="M669.125 257.002L345.875 31.9983L524.571 -15.8832L669.125 257.002Z"
                  fill="url(#paint0_linear_0:1)"
                />
                <path
                  opacity="0.1"
                  d="M0.0716344 182.78L101.988 -15.0769L142.154 81.4093L0.0716344 182.78Z"
                  fill="url(#paint1_linear_0:1)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_0:1"
                    x1="644"
                    y1="221"
                    x2="429.946"
                    y2="37.0429"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#4A6CF7" />
                    <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_0:1"
                    x1="18.3648"
                    y1="166.016"
                    x2="105.377"
                    y2="32.3398"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#4A6CF7" />
                    <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </div>
        </div>
        <div className="h-[50vh] bg-[url('https://img.freepik.com/free-vector/gradient-connection-background_23-2150453413.jpg')]
        bg-no-repeat bg-cover  flex  items-center">
          <div className="flex gap-[18rem]">
          <h1 className="ml-[120px] text-4xl p-4 text-white">
            Technology
            <span className="mt-2 block h-[2px] w-1/2 bg-green-500">
            </span>
          </h1>
          <div className="p-4 shadow-2xl  ">
            <h3 className="tracking-wide text-xl  text-justify  text-white leading-8">ASP.NET Core</h3>
          <h2 className="mr-[120px]  tracking-wide text-md text-justify text-white leading-8 ">Miễn phí, đa nền tảng, mã nguồn mở <br />
Một khung để xây dựng các ứng dụng  và dịch vụ web với .NET </h2>
          </div>
          </div>
        </div>
        <div className="py-2 px-4 md:px-[120px] bg-neutral-200 flex  items-center gap-1">
          <Link
          href="/"
          className="text-base font-bold  text-blue-800 hover:underline duration-200 ease-in"
          >
            Home
          </Link>
          <IoChevronForward size={13} className="text-blue-800"/>
          <p className=" text-blue-800 text-xs">{pageName}</p>
        </div>

        {renderHTML && (
          <div
            className={`container  max-w-full sm:max-w-screen-xl ${
              classitem ? classitem : "mt-10"
            }  font-mono-san`}
            dangerouslySetInnerHTML={{ __html: renderHTML }}
          ></div>
         
        )}
        
      </section>
    </>
  );
};

export default Breadcrumb;
