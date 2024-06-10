import React from "react";

import Link from "next/link";
import { IDataLittleFeature } from "@/types/feature";

interface IProps {
  data: IDataLittleFeature[];
}

function LittleFeature(props: IProps) {
  const { data } = props;

  return (
    <div className="flex justify-center lg:justify-start items-center   max-lg:gap-12 gap-8 lg:gap-4">
      {data &&
        data.length &&
        data.map((item, index) => (
          <Link
            href={""}
            key={index}
            className="group flex flex-col justify-center  items-center gap-1 rounded-lg lg:bg-neutral-200 lg:shadow-lg lg:shadow-neutral-700 py-0 lg:py-3 lg:px-8 "
          >
            <div
              className={` h-fit w-fit rounded-full  ${item.colorBg} p-2 lg:shadow-lg ${item.shadownColor}`}
            >
              {item.icon}
            </div>
            <p className="hidden lg:block mt-1 uppercase text-xs font-bold text-neutral-500">{item.title}</p>
           
          </Link>
        ))}
    </div>
  );
}

export default LittleFeature;
