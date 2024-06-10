import Image from "next/image";
import React from "react";
import hero from "../../../../public/images/products/Smart-Learning-and-Education1.jpeg";

function InformationProducts() {
  return (
    <div
      className="basis-full"
      style={{ margin: "100px 0px 100px 0px", display: "flex" }}
    >
      <div
        className=" bg-lime-200"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="text-base font-bold">
          Hệ thống quản lý giáo dục thông minh Smart education
        </div>
        <span>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before final copy is available.
        </span>
        <div>
          <button className="m-1 rounded-lg bg-lime-500 p-0.5">
            Liên hệ chúng tôi
          </button>
          <button className="m-1 rounded-lg bg-lime-500 p-0.5">Bảng giá</button>
        </div>
      </div>

      <Image src={hero} alt="Hình sản phẩm" style={{ width: 400 }} />
    </div>
  );
}

export default InformationProducts;
