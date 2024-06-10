import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { BsChevronDown } from "react-icons/bs";

import { handleItemNavBar } from "../../utils/util";
import menuData from "./menuData";
import menuMobileBg from "@/public/images/menu/map_menu.jpg";
import LanguageToggle from './LanguageToggle';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { IoIosSearch } from "react-icons/io";
import { IoClose } from "react-icons/io5";

interface IPathName {
    pathNameUrl : string,
    id:string
    
}
interface Icon {
    icon : any
    id: string
    id2:number
}
const MainMenu = ({dataMenu, navbarOpen, navbarToggleHandler, languageData, sticky}) => {
    // submenu handler
    const [openIndex, setOpenIndex] = useState(-1);
    const pathName = usePathname()
    const handleSubmenu = (index) => {
        if (openIndex === index) {
            setOpenIndex(-1);
        } else {
            setOpenIndex(index);
        }
    };

    

    const pathNameMenu:IPathName[] = [
        {
            id:"Trang chủ",
            pathNameUrl : "/"
        },
        {
            id:"Sản phẩm",
        
        pathNameUrl : "/products"
    },
    {
        id:"Dịch vụ",
        pathNameUrl : "/services"
    },
    {
        id:"Công nghệ",
        pathNameUrl : "/technology"
    },
    {
        id:"Tuyển dụng",
        pathNameUrl : "/careers"
    },
    {
        id:"Giới thiệu",
        pathNameUrl : "/about-us"
    },
    {
        id:"Liên hệ",
        pathNameUrl : "/contact"
    }
]
const iconSubMenuProduct = [{
    icon:"https://cdn-icons-png.flaticon.com/512/686/686051.png",
    id:"Sản phẩm",
    id2 :   383
},
{
    icon:"https://cdn-icons-png.flaticon.com/128/12058/12058638.png",
    id:"Sản phẩm",
    id2 :   413
},
{
    icon:"https://cdn-icons-png.flaticon.com/512/686/686051.png",
    id:"Sản phẩm",
    id2 :   446
}
,{
    icon:"https://cdn-icons-png.flaticon.com/128/9770/9770743.png",
    id:"Sản phẩm",
    id2 :   448
},
{
    icon:"https://cdn-icons-png.flaticon.com/128/1433/1433114.png",
    id:"Sản phẩm",
    id2 :   449
},
{
    icon:"https://cdn-icons-png.flaticon.com/128/12394/12394277.png",
    id:"Sản phẩm",
    id2 :   451
},
{
    icon:"https://cdn-icons-png.flaticon.com/128/702/702455.png",
    id:"Sản phẩm",
    id2 :   452
},
{
    icon:"https://cdn-icons-png.flaticon.com/128/12058/12058638.png",
    id:"Sản phẩm",
    id2 :   469
},
{
    icon:"https://cdn-icons-png.flaticon.com/128/2544/2544175.png",
    id:"Sản phẩm",
    id2 :   476
},
{
    icon:"https://cdn-icons-png.flaticon.com/128/2961/2961593.png",
    id:"Sản phẩm",
    id2 :   503
},
{
    icon:"https://cdn-icons-png.flaticon.com/128/699/699404.png",
    id:"Sản phẩm",
    id2 :   568
},
{
    icon:"https://cdn-icons-png.flaticon.com/128/9116/9116491.png",
    id:"Sản phẩm",
    id2 :   569
},

{
    icon:"https://cdn-icons-png.flaticon.com/128/2056/2056096.png",
    id:"Dịch vụ",
    id2 :   2712
},
{
    icon:"https://cdn-icons-png.flaticon.com/128/12783/12783466.png",
    id:"Dịch vụ",
    id2 :   2714
},
{
    icon:"https://cdn-icons-png.flaticon.com/128/12856/12856494.png",
    id:"Dịch vụ",
    id2 :   2715
},
{
    icon:"https://cdn-icons-png.flaticon.com/128/10435/10435272.png",
    id:"Dịch vụ",
    id2 :   2716
},
{
    icon:"https://cdn-icons-png.flaticon.com/128/977/977597.png",
    id:"Dịch vụ",
    id2 :    2717
},
{
    icon:"https://cdn-icons-png.flaticon.com/128/9438/9438411.png",
    id:"Dịch vụ",
    id2 :    2718
},
{
    icon:"https://cdn-icons-png.flaticon.com/128/3289/3289920.png",
    id:"Dịch vụ",
    id2 :    2719
},
{
    icon:"https://cdn-icons-png.flaticon.com/128/3913/3913448.png",
    id:"Dịch vụ",
    id2 :   2720
},

,



]

const iconSubMenuService:Icon[] =[
    
] 

const iconSubMenuTech:Icon[] = [
    {icon : "https://cdn-icons-png.flaticon.com/128/402/402184.png",
    id:"Công nghệ",
    id2 :   378
}
,
{icon : "https://cdn-icons-png.flaticon.com/128/2721/2721627.png",
    id:"Công nghệ",
    id2 :   379
}
,
{icon : "https://cdn-icons-png.flaticon.com/128/5726/5726104.png",
    id:"Công nghệ",
    id2 :   380
}
,
{icon : "https://cdn-icons-png.flaticon.com/128/2331/2331002.png",
    id:"Công nghệ",
    id2 :   381
}
,
{icon : "https://cdn-icons-png.flaticon.com/128/2782/2782058.png",
    id:"Công nghệ",
    id2 :   384
}
,
{icon : "https://cdn-icons-png.flaticon.com/128/2152/2152349.png",
    id:"Công nghệ",
    id2 :   385
}
,
{icon : "https://cdn-icons-png.flaticon.com/128/6403/6403594.png",
    id:"Công nghệ",
    id2 :   386
}
,
{icon : "https://cdn-icons-png.flaticon.com/128/11068/11068861.png",
    id:"Công nghệ",
    id2 :   388
}
,
{icon : "https://cdn-icons-png.flaticon.com/128/1185/1185915.png",
    id:"Công nghệ",
    id2 :   389
}
]

const iconSubMenuCareer:Icon[] = [
    {icon : "https://cdn-icons-png.flaticon.com/128/402/402184.png",
    id:"Tuyển dụng",
    id2 :   2724
},
{
    icon: "https://cdn-icons-png.flaticon.com/128/5726/5726104.png",
    id:"Tuyển dụng",
    id2 :   2725
}
,{
    icon : "https://cdn-icons-png.flaticon.com/128/4299/4299932.png",
    id:"Tuyển dụng",
    id2 :   2726
},
{
    icon : "https://cdn-icons-png.flaticon.com/128/4157/4157156.png",
    id:"Tuyển dụng",
    id2 :   2734
},
] 

const iconSubMenuIntro :Icon[] =[
    {
        icon: "https://cdn-icons-png.flaticon.com/128/6211/6211090.png",
        id: "Giới thiệu",
        id2 :   2730
    },
]
const iconSubMenuContact :Icon[] =[
    {
        icon: "https://cdn-icons-png.flaticon.com/128/1034/1034153.png",
        id: "Liên hệ",
        id2 :   2733  
    }
]


    
    return (
        <nav
            id="navbarCollapse"
            className={`font-serif max-[1200px]:overflow-y-auto max-[1200px]:h-screen bg-nav-mobile xl:bg-none navbar fixed top-0 right-0 bottom-0 z-30 ease border-body-color/50 bg-white px-4 pt-3 lg:py-4 duration-300 dark:border-body-color/20 dark:bg-dark xl:visible xl:static xl:w-auto xl:border-none xl:!bg-transparent xl:p-0 xl:opacity-100 ${
            navbarOpen
                ? "visibility left-[0] opacity-100"
                : "invisible left-[-100%] opacity-0"
            }`}
        >
            <div className="w-[80%] relative md:hidden">
                <input type="text" className="w-full pl-8 py-1 bg-gray-50 border rounded-md border-green-500"/>
                <IoIosSearch className='absolute top-[6px] left-2 text-xl'/>
            </div>
            <ul className="max-lg:mt-3 block xl:flex items-center gap-1 xl:space-x-[20px]">
            {dataMenu.map((menuItem, index) => (
                <li key={menuItem.id} className="group relative">
                    <>
                    {console.log("check item", menuItem)}
                    
                    </>
                {menuItem.title ? (
                    <>
                    {menuItem?.children.length > 0 ? (
                        <span
                        onClick={() => handleSubmenu(index)}
                        className={`w-full flex items-center justify-between py-3 text-base xl:text-[12px] 2xl:text-base  ${sticky ? "text-[#002968]" : "text-white"} max-lg:text-white cursor-pointer uppercase font-bold dark:text-white xl:mr-0 xl:inline-flex xl:py-6 xl:px-0`}
                        >
                        {menuItem.title}
                        {/* <BsChevronDown size={16} className="ml-[7px] font-bold"/> */}
                        </span>
                    ) : (
                        <Link
                            href={`/${handleItemNavBar(
                                menuItem.multiple_language
                            )}`}
                            className={`flex py-2 text-base xl:text-[12px] 2xl:text-base ${sticky ? "text-[#002968]" : "text-white"} max-lg:text-white cursor-pointer uppercase font-bold dark:text-white lg:mr-0 lg:inline-flex lg:py-6 lg:px-0 pointer`}
                        >
                        {menuItem.title}
                        </Link>
                    )}

                    {menuItem?.children.length > 0 && (
                        <div
                            className={`submenu relative top-[80%] left-0 rounded-b-md pl-[20px] bg-none xl:bg-white transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark xl:invisible xl:absolute xl:top-[110%] xl:block xl:w-[250px] xl:p-4 xl:opacity-0 xl:shadow-lg xl:group-hover:visible xl:group-hover:top-[80%] ${
                                openIndex === index ? "block" : "hidden"
                            }`}
                        >
                            {menuItem?.children.map((submenuItem, index) => (
                                <div key={index} className='flex  items-center gap-1  group/submenu'>
                                    
                                    <Image src={`${ iconSubMenuProduct[index]?.icon}`} width={25} height={25} alt='no mimg'></Image>
                                    <Link
                                onClick={navbarToggleHandler}

                                href={`/${handleItemNavBar(
                                    menuItem.multiple_language
                                )}/${submenuItem.first_id === -1 ?String(submenuItem.id): String(submenuItem.first_id)}`}
                                key={submenuItem.id}
                                className="block py-2  text-sm text-white lg:text-[#002968]  group-hover/submenu:text-green-700 duration-200 ease-in font-semibold dark:text-white lg:px-3"
                                >
                                {submenuItem.title}
                                </Link>
                                </div>
                            ))}
                        </div>
                    )}
                    </>
                ) : (
                    <Link
                        href="/"
                        onClick={() => handleSubmenu(index)}
                        className="flex cursor-pointer items-center justify-between py-2 text-base text-white group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:py-6 lg:px-0"
                    >
                        {menuItem.title}
                        {/* <span className="pl-3">
                            <BsChevronDown size={16} className="ml-[7px] font-bold" />
                        </span> */}
                    </Link>
                )}
                
                <div className={`max-lg:hidden absolute bottom-[20%] left-0  h-[3px] ${pathName.includes(pathNameMenu[index]?.pathNameUrl) && menuItem.title === pathNameMenu[index]?.id ? " origin-left  transform bg-[#00a455] w-full scale-x-100 lg:block": "w-0 origin-left scale-x-0 transform bg-[#00a455] duration-700 ease-in-out group-hover:w-full group-hover:scale-x-100 lg:block" }`}></div>
                </li>
            ))}
            <li><LanguageToggle sticky={sticky ? sticky : true} languageData={languageData} /></li>
            
            </ul>
        </nav>
);
}

export default MainMenu;