import React from "react";
interface IData {
  svg: any;
  title: string;
  text: string;
}

interface IProps {
  dataService: IData[];
}
function Service(props: IProps) {
  const { dataService } = props;
  return (
    <>
      {dataService &&
        dataService.length > 0 &&
        dataService.map((item, index) => {
          return (
            <div key={index} className="rounded-md bg-neutral-100 p-2">
              <div className="">{item.svg}</div>
              <div>
                <h3 className=" py-2 text-sm font-light text-[#008000] sm:text-xl">
                  {item.title}
                </h3>
                <p className="text-xs font-light text-black dark:text-white sm:text-sm">
                  {item.text}
                </p>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default Service;
