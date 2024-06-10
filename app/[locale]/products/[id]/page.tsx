"use client";
import Head from "next/head";
import { useRouter, usePathname } from "next/navigation";
import productsData from "../../components/Products/productsData";
import { useState, useEffect } from "react";
import { ResolvingMetadata, type Metadata } from "next";
import { Merriweather, Noto_Serif, Inter } from "next/font/google";
import SnowAnimation from "../../components/snowAnimation";
import { GetItem } from "../../apis/GetDataHome";
import { getImg } from "../../utils/util";
import Contact from "../../components/Contact";
import Document from "../../components/Products/Document";
import Introduction from "../../components/Common/Introduction";
import ProductSystem from "../../components/Products/ProductSystem";
import {
  blogFont,
  blogTitleFont,
  blogDescriptionFont,
  systemStructure,
} from "../../utils/fonts";
import { type } from "os";
import { local } from "../../utils/http";
import Hero from "../../components/Products/Hero";
import Feature from "../../components/Products/Feature";
import Feedback from "../../components/Products/Feedback";
import Chat from "../../components/Chat/Chat";
import ChatIcon from "../../components/Chat/ChatIcon";
import ProductPrices from "../../components/Products/ProductPrices";
import { GetAbout } from "../../apis/GetDataHome";
import BnIwindoor from "../../components/Products/BnIwindoor";
import BnMetalearn from "../../components/Products/BnMetalearn";
import OpenTimes from "../../components/Products/OpenTimes";
import SlideProduct from "../../components/Products/SlideProduct";
import Link from "next/link";
import { boolean } from "yup";
import BnTest from "../../components/Products/BnTest";
interface Props {
  params: { locale: string; id: string };
}

// export async function generateMetadata(
//   { params }: Props,
//   parent: ResolvingMetadata
// ): Promise<Metadata> {

//   const id = params.id;
//   const product = await GetItem(Number(id));
//   const previousImages = (await parent).openGraph?.images || [];

//   return {
//     title: product?.data?.title,
//     description: product?.data?.short_content,
//     openGraph: {
//       images: [`${getImg(product?.data?.gallery)}`, ...previousImages],
//     },
//   };
// }

const Page = ({ params }: Props) => {
  const [dataFile, setDataFile] = useState(null);
  const [dataProduct, setDataProduct] = useState(null);
  const [gallery, setGallery] = useState(null);
  const [dataContent, setDataContent] = useState(null);
  const [titleContent, setTitleContent] = useState(null);
  const [descriptionContent, setDescriptionContent] = useState(null);
  const [catId, setCatId] = useState(null);
  const [dataLanguage, setDataLanguage] = useState(null);
  const router: any = usePathname();
  const newPath = router.replace(/^\/default/, "");

  useEffect(() => {
    const data = productsData.find((p) => p.id.toString() === params.id);
    setDataProduct(data);

    const fetchData = async () => {
      try {
        const result = await GetItem(Number(params?.id));

        if (result && result.data) {
          const {
            attributes,
            content,
            title,
            short_content,
            cat_id,
            gallery,
            multiple_language,
          } = result.data;
          setGallery(gallery);
          setDataFile(attributes);
          setDataContent(content);
          setTitleContent(title);
          setDescriptionContent(short_content);
          setCatId(cat_id);
          setDataLanguage(multiple_language);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
    // Gọi hàm fetchData khi params thay đổi hoặc khi component được tạo ra lần đầu tiên
  }, [params.id]);
  // if (languageChoose !== "vi" && params.id !== "383") {
  //   const multiLanguage = JSON.parse(dataLanguage);
  //   multiLanguage.map((item) => {
  //     if (item.lgn === languageChoose){
  //       dataContent = item.content;
  //       titleContent = item.title;
  //       descriptionContent = item.short_content;
  //       return [dataContent, titleContent, descriptionContent];
  //     }
  //   });
  // }

  const [benafitImages, setBenafitImage] = useState([]);
  const [slideHero, setSlideHero] = useState([]);
  useEffect(() => {
    const data = dataFile?.filter((d, i) => {
      return d.code === "Slide";
    });
    setBenafitImage(data);
  }, [dataFile]);

  useEffect(() => {
    const data = dataFile?.filter((d, i) => {
      return d.code === "SlideHero";
    });
    setSlideHero(data);
  }, [dataFile]);
  return (
    <div className="relative flex flex-col bg-repeat pb-20 font-serif xs:pb-40">
      <Head>
        <title>{titleContent}</title>
        <meta name="description" content={descriptionContent} />
        <meta property="og:image" content={getImg(gallery)} />
      </Head>
      {/* A1 
            ảnh theo dạng sơ đồ có input output , na ná sơ đồ của iwindoor */}
      <Hero
        slideHero={slideHero}
        pageName={titleContent}
        metaImage={getImg(gallery)}
        description={descriptionContent}
        fontTitle={systemStructure.className}
      />

      {/* {newPath === '/products/2833' && <BnIwindoor dataFile={dataFile} metaImage={getImg(gallery)} />} */}
      {/* {newPath === '/products/2805' && <BnTest />} */}
      {/* {newPath === '/products/2805' && <BnMetalearn />} */}

      {/* <BnIwindoor metaImage={getImg(gallery)} /> */}
      {/* {dataContent?.length > 0 && <Introduction
        dataContent={dataContent}
        dataProduct={dataProduct}
        pageName={titleContent}
        description={descriptionContent}
        metaImage={getImg(gallery)}
        fontTitle={systemStructure.className}
      />} */}

      <SlideProduct pageName={titleContent} benafitImages={benafitImages} />
      <ProductSystem
        fontTitle={systemStructure.className}
        title={titleContent}
        catId={catId}
      />
      {dataFile && (
        <Document
          fontTitle={systemStructure.className}
          title={titleContent}
          content={dataFile}
        />
      )}

      {/* A4 
            thêm loạt social vào bên cạnh  */}
      {/* <Contact /> */}
      <ProductPrices
        dataProduct={dataProduct}
        pageName={titleContent}
        fontTitle={systemStructure.className}
      />
      <OpenTimes fontTitle={systemStructure.className} />
      {/* A5  có rồi*/}
      {/* <Link href='#chat' className="">
        <div className="fixed bottom-8 right-0 z-[1000]">
          <div
            className={"mr-2 px-6 cursor-pointer flex h-10 w-10 items-center justify-center rounded-md bg-[green] text-white shadow-md transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp "}
          >
            Chat
          </div>
        </div>
      </Link> */}
    </div>
  );
};
export default Page;
