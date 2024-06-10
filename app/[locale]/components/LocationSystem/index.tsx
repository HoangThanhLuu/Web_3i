import Image from "next/image";

import SectionTitleFull from "../Common/SectionTitleFull";
import LocationMap from "@/public/images/locationsystem/customer.png";
import "./location.css";

const LocationSystem = () => {
  return (
    <section className="mt-[50px] relative">
      {/* <div className="container max-w-full sm:max-w-screen-xl">
        <SectionTitleFull
          title="Khách hàng"
          paragraph="Được thành lâp vào tháng 3 năm 2006 với tiền thân là một đội chuyên gia phần mềm và giải pháp viễn thông có kinh nghiệm từ Hàn Quốc. Chúng tôi đang từng bước đạt được uy tín và niềm tin từ khách hàng trong nước và các đối tác nước ngoài"
          mb="44px"
          center
        />
      </div> */}
      <div className="mx-auto  md:w-[700px] xl:w-[1000px] relative">
        <Image
          src={LocationMap}
          alt="logo"
          className="w-full md:w-full dark:hidden"
          width={2000}
          height={1000}
        />
        <div
          className="blinking-dot Singapore max-md:hidden absolute bottom-32 xl:bottom-[194px] right-[109px] xl:right-[164px]"
        ></div>
        <div
          className="blinking-dot Korea max-md:hidden absolute top-[116px] xl:top-[168px] right-[64px] xl:right-[96px]"
        ></div>
        <div
          className="blinking-dot Japan max-md:hidden absolute top-[116px] xl:top-[168px] right-[40px] xl:right-[64px]"
        ></div>
        <div
          className="blinking-dot Germany max-md:hidden absolute top-[70px] left-1/2 xl:top-[95px]"
        ></div>
        <div
          className="blinking-dot America max-md:hidden absolute top-[104px] xl:top-[150px] left-[118px] xl:left-[168px]"
        ></div>
      </div>
      {/* <div
        className="blinking-dot Korea"
        style={{ top: "3850px", right: "154px" }}
      ></div> */}
      {/* <div
        className="blinking-dot Japan"
        style={{ top: "3850px", right: "106px" }}
      ></div>
      <div
        className="blinking-dot Germany"
        style={{ top: "3747px", right: "715px" }}
      ></div>
      <div
        className="blinking-dot America"
        style={{ top: "3827px", left: "245px" }}
      ></div> */}
    </section>
  );
};

export default LocationSystem;
