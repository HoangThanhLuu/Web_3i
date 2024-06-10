import React from "react";
import Link from "next/link";

import DocumentItem from "./DocumentItem";
import SectionTitle from "../Common/SectionTitle";
import { Icon } from '@iconify/react';

export interface ItemDocumentProps {
  code: string;
  title: string;
  value?: string;
  type?: string;
  multiple_language?: string | null
}
interface DocumentProps {
  title: string;
  fontfamily?: string;
  fontTitle?: string;
  content?: ItemDocumentProps[]
}

const Document: React.FC<DocumentProps> = ({ fontfamily, fontTitle, content, title }) => {
  // Sắp xếp content theo thứ tự abc của title
  const sortedContent = content?.sort((a, b) => a.title.localeCompare(b.title));

  return (
    <section id="Document" className={` ${fontfamily}  th-fl w-full`}>
      <div className="w-full flex justify-start items-center container max-w-full sm:max-w-screen-xl">
        <div className="w-full py-2 ">
          <h2 className={`text-lg ml-4 sm:text-xl font-semibold text-center sm:text-start pt-4`}>Tài liệu</h2>
          <ul className="flex flex-wrap  flex-col justify-start items-start">
            {sortedContent?.map((item, index) => (
              <DocumentItem key={index} file={item} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Document;
