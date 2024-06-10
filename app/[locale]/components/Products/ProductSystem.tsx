"use client";
import { useState, useEffect, useLayoutEffect } from "react";
import SectionTitle from "../Common/SectionTitle";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";

import { GetTreeCategoryData, GetOneTreeCategoryData } from "../../apis/GetDataLogin";
import ProductSystemItem from "../../components/Products/ProductSystemItem";
import { log } from "console";
import { Icon } from '@iconify/react';

interface ProductSystemProps {
  catId: number;
  title?: string;
  fontfamily?: string;
  fontTitle?: string;
}

const ProductSystem: React.FC<ProductSystemProps> = ({
  fontfamily,
  fontTitle,
  title,
  catId,
}) => {
  const pathname = usePathname();

  const [isLoading, setIsLoading] = useState(false);
  const [treeCategory, setTreeCategory] = useState<any>([]);

  const parentItem = [];
  const childItem = [];


  useEffect(() => {
    const fetchData = async () => {
      // const abc = await GetTreeCategoryData()
      // setTreeCategory(await GetTreeCategoryData());
      setTreeCategory(await GetOneTreeCategoryData(catId));
      // console.log('abc', abc);

      // setTreeCategory(abc.data)
    };
    fetchData();
  }, [catId]);
  console.log('parentItem', parentItem.length);


  treeCategory?.data?.forEach((obj) => {
    if (obj.ParentId === catId) {
      parentItem.push(obj);
    } else {
      childItem.push(obj);
    }
  });

  const [isSm, setSm] = useState(true);
  useLayoutEffect(() => {
    const handleResize = () => {
      const newIsInRange =
        window.innerWidth > 575;
      setSm(newIsInRange);

    };

    // Kích hoạt ngay lập tức khi component được render
    handleResize();

    // Lắng nghe sự kiện resize để cập nhật giá trị isMobile
    window.addEventListener('resize', handleResize);

    // Đảm bảo clear sự kiện khi component bị unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  console.log('catId', catId);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

  const renderItems = () => {
    const result = [];
    for (let i = 0; i < parentItem.length; i += 2) {
      const checkSm = isSm ? 2 : 1
      const group = parentItem.slice(i, i + checkSm);
      const checkGroup = group.length === 1 ? true : false
      result.push(
        <div key={i} className='gap-4 sm:mb-2 flex flex-col'>
          <div className='flex justify-start  relative items-start'>
            {group.map((parent, index) => {
              const imageParent = parent?.Image
                ? `${process.env.BACKEND_URL}${parent?.Image}`
                : "/images/common/icon-structure-default.png";
              return (
                <div className="w-full sm:w-1/2" key={index}>
                  <div key={index} className=" even:border-r-0">
                    <h3 className={` md:mr-16 mb-[10px] font-semibold text-lg tracking-tight sm:text-xl `}>
                      <Image src={imageParent} width={20} height={20} alt={parent.Title} className="inline mr-[5px]  align-middle my-3" />
                      {capitalizeFirstLetter(parent.Title)}
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-1 pl-3">
                      {childItem.map((child, index) => (
                        <> {child.ParentId === parent.Id && <ProductSystemItem data={child} />} </>
                      ))}
                    </ul>
                  </div>
                  {index === 0 &&
                    <div id="wrapper" className="hidden sm:block absolute top-0 shadow-sm left-1/2 h-full -translate-x-1/2">
                      <div className="slide-container"></div>
                      <div className="v-separator"></div>
                    </div>
                  }
                </div>
              );
            })}
          </div>

          <div className="hidden sm:block border-dashed mx-52 text-center border-t-[2px] border-b-[1px] border-b-gray-200 border-t-white"></div>
        </div>
      );
    }
    return result;
  };
  // console.log('treeCategory', treeCategory?.length);
  // console.log("parentItem", parentItem)

  return (
    <section id="productSystem" className={`bg-[#f9f9f9] py-3 w-full  ${fontfamily} `}>
      <div className="container max-w-full sm:max-w-screen-xl">
        {/* <SectionTitle
          title={`Danh mục chức năng ${title}`}
          paragraph=""
        /> */}
        <div className="flex justify-start gap-2 items-center">
          {/* <Icon icon="ic:round-featured-play-list" className={"text-amber-950 text-[40px] sm:text-[50px] ease-linear duration-150 "} /> */}
          <div className={`font-bold text-xl sm:text-2xl  `}>Phân Hệ Chức Năng</div>
        </div>
        {/* <div className="flex flex-col justify-center items-center sm:justify-start sm:items-start sm:flex-row sm:flex-wrap"> */}
        <div className="mt-3">
          {renderItems()}
        </div>
      </div>
    </section>
  );
};

export default ProductSystem;
