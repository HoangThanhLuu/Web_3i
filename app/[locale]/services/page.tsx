"use client"
import { Merriweather, Noto_Serif, Inter } from "next/font/google";
import { useState, useEffect } from 'react'
import Introduction from "../components/Common/Introduction";
import { GetItemServices } from "../apis/GetDataHome";
import { ResolvingMetadata, type Metadata } from "next";
import { GetAbout } from '../apis/GetDataHome';
import { getImg } from '../utils/util';

const blogFont = Merriweather({
  subsets: ["vietnamese"], display: 'swap', adjustFontFallback: false,
  weight: "400"
});

const blogTitleFont = Noto_Serif({
  subsets: ["vietnamese"], display: 'swap', adjustFontFallback: false,
  weight: "400"
})

const blogDescriptionFont = Inter({
  subsets: ["vietnamese"], display: 'swap', adjustFontFallback: false
})

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

// export async function generateMetadata(
//   { params, searchParams }: Props,
//   parent: ResolvingMetadata
// ): Promise<Metadata> {
//   const id = params.id;

//     const product = await GetAbout(Number(id));


//   const previousImages = (await parent).openGraph?.images || [];

//   return {
//     title:product?.data?.title,
//     description:product?.data?.short_content,
//     openGraph: {
//       images: [getImg(product?.data?.gallery), ...previousImages],
//     },
//   };
// }

const ServiceItemPage = ({ params, searchParams }: Props) => {
  // const serviceItem = await GetItemServices(params.id);
  const [serviceItem, setServiceItem] = useState(null);
  console.log('param', params);

  useEffect(() => {
    const fetchData = async () => {
      const item = await GetItemServices(params.id);
      console.log('item', item);

      setServiceItem(item);
    };

    fetchData();
  }, [params.id]);
  
  return (
    <div className="h-[500px]">
      <Introduction
        dataContent={null}
        dataProduct={null}
        pageName={serviceItem?.data?.title}
        description={serviceItem?.data?.short_content}
        metaImage={getImg(serviceItem?.data?.gallery)}
        showLink={false}
        fontFamily={blogFont.className}
        fontTitle={blogTitleFont.className}
        fontDescription={blogDescriptionFont.className}
      />

      <section id={`service-${params.id}`} className={`${blogFont.className} section-blog-detail`}>
        {/* <div className="container mt-20"><div dangerouslySetInnerHTML={{ __html: serviceItem?.data?.content }} /></div> */}
      </section>
    </div>
  );
};

export default ServiceItemPage;
