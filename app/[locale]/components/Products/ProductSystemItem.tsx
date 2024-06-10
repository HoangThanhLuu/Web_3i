"use client";
import { useState, useEffect, useLayoutEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { IconType } from "react-icons"
import { BsFiletypeDoc, BsFilePpt } from "react-icons/bs";
import { SiMicrosoftexcel } from "react-icons/si";
import { GetListCmsItem } from "../../apis/GetDataLogin";
import Modal from "../Modals/Modal";
import useModal from "../../hooks/useModal";
import DocumentFile from "./DocumentFile";
import Link from "next/link";
interface User {
  Id: string,
  Title: string,
  Image: string
}

interface ProductSystemItemProps {
  data: User;
}

interface FileProps {
  icon: IconType;
  label: string;
  selected?: boolean;
}

const ProductSystemItem: React.FC<ProductSystemItemProps> = ({ data }) => {
  const [listCmsItem, setListCmsItem] = useState<any>({});
  const [selectedItemId, setSelectedItemId] = useState(null);
  const router: any = usePathname();

  useEffect(() => {
    const fetchData = async () => {
      setListCmsItem(await GetListCmsItem(data.Id));
    };
    fetchData();
  }, [data.Id]);

  const bodyReactElement: React.ReactElement = <div dangerouslySetInnerHTML={{ __html: listCmsItem?.data?.Object[0]?.full_text }} />;
  const bodyContent = (
    <div className="w-full">{bodyReactElement}</div>
  )

  const attachments = (
    <ul className="px-0 py-[15px]">
      {listCmsItem?.data?.Object[0]?.attachments.map((file) => (
        <li key={file.id} className="inline mr-[10px] pr-[10px] border-r-[1px] border-[#71bc42] last:border-r-0">
          <DocumentFile type={file.file_name} icon={BsFiletypeDoc} label={file.file_name} link={`${process.env.BACKEND_UR}${file.file_url}`} />
        </li>
      ))}
    </ul>
  )

  const handleOpenModal = (id) => {
    setSelectedItemId(id);
  }

  const handleClose = () => {
    setSelectedItemId(null);
  }
  const [isMobile, setIsMobile] = useState(false);
  useLayoutEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
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

  return (
    <li className="w-full mr-2 text-start flex justify-start mb-[5px] px-[3px]" id={data.Id}>
      {isMobile &&
        <Link href={{
          pathname: ` ${router}/${String(data.Id)}`,
          query: {
            data: data.Id
          }
        }}>
          <span
            className="p-2 hover:scale-105 text-[#000000c7] ease-linear duration-100 rounded-sm cursor-pointer flex justify-center items-center xs:py-[10px]"
          >
            {data?.Image ?
              <Image src={`${process.env.BACKEND_URL}/${data?.Image}`} width={20} height={20} alt={data.Title} className="inline mr-[5px] align-middle" />
              :
              <Image src="/images/common/icon-structure-default.png" width={20} height={20} alt={data.Title} className="inline mr-[5px] align-middle" />
            }
            <span className="inline align-middle text-sm font-medium">{data.Title}</span>
          </span>
        </Link>}
      {!isMobile &&
        <>
          <span
            onClick={() => handleOpenModal(data.Id)}
            className="p-2 hover:scale-[1.03] text-[#000000c7] ease-linear duration-100  rounded-sm cursor-pointer  flex justify-center items-center xs:py-[3px]"
          >
            {data?.Image ?
              <Image src={`${process.env.BACKEND_URL}/${data?.Image}`} width={25} height={25} alt={data.Title} className="inline mr-[5px] align-middle" />
              :
              <Image src="/images/common/icon-structure-default.png" width={25} height={25} alt={data.Title} className="inline mr-[5px] align-middle" />
            }
            <span className="inline align-middle text-sm xl:text-base 5xl:text-lg font-medium ">{data.Title}</span>
          </span>
          {selectedItemId === data.Id &&
            <Modal id={data.Id} isOpen={true} onClose={handleClose} title={`Chi tiết về ${listCmsItem?.data?.Object[0]?.title}`} body={bodyContent} attachments={attachments} modalWidth="w-5/6 lg:w-4/6 xl:w-4/6 " />
          }
        </>

      }
    </li>
  );
};

export default ProductSystemItem;
