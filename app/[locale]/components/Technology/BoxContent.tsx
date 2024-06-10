import React from "react";
import { IoMdArrowDropright } from "react-icons/io";

interface IData {
  title: string;
}

interface IProps {
  data: IData[];
  border: boolean;
}

function BoxContent(props: IProps) {
  const { data, border } = props;
  return (
    <div
      className={`box-container rounded-sm ${
        border ? "border-[1px]" : ""
      }  border-dashed border-[#008000] px-2 py-3`}
    >
      {data &&
        data.length > 0 &&
        data.map((item, index) => (
          <div key={index} className="box-item">
            <IoMdArrowDropright size={8} className="text-[#008000]" />
            <p className="font-serif text-xs text-black dark:text-white sm:text-sm">
              {item.title}
            </p>
          </div>
        ))}
    </div>
  );
}

export default BoxContent;
