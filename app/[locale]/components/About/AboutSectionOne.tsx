"use client"
import Image from "next/image";
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import SectionTitleFull from "../Common/SectionTitleFull";
import Modal from "react-modal";
import { Icon } from '@iconify/react';
const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-[green] bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  //For modal regis
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '30%',
      borderRadius: '20px'
    },
    overlay: {
      backgroundColor: "rgba(69, 68, 68, 0.8)",
      zIndex: '200'
    }
  }

  const [modalIsOpen, setIsOpen] = useState(false);
  const [price, setPrice] = useState([])

  const openModal = (price: number) => {
    setIsOpen(true);
    setPrice((prev) => [...prev, price]);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  //For submit form
  const { handleSubmit, register, formState: { errors } } = useForm();
  const [reqCustomer, setReqCustomer] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    companyAddress: '',
    reqContent: '',
    price: []
  });

  const onSubmit = (data: any) => {
    const reqCustomerTemp = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      company: data.company,
      companyAddress: data.companyAddress,
      reqContent: data.reqContent,
      price: price
    }
    setReqCustomer(reqCustomerTemp)
    sessionStorage.setItem("infoCustom", JSON.stringify(reqCustomerTemp));
    closeModal();
  }
  const data = [{
    package: 'Gói TimeSheet+',
    decription: 'Số hóa và tự động hóa chấm công, tính lương nhân sự',
    price: '20.000',
    feature: ['Bao gồm tính năng chấm công di động & tính lương trực tuyến']
  }, {
    package: 'Gói HRM+',
    decription: 'Đầy đủ các chức năng phân hệ HRM+ giải quyết bài toán quản trị & phát triển nhân sự',
    price: '45.000',
    feature: ['Tặng phân hệ OFFICE+', 'Sử dụng đầy đủ tính năng thuộc phân hệ HRM+']
  }, {
    package: 'Gói WORK+',
    decription: 'Đầy đủ các chức năng phân hệ WORK+ giải quyết bài toán quản trị công việc & hiệu suất',
    price: '45.000',
    feature: ['Tăng phân hệ OFFOCE+', 'Sử dụng đầy đủ tính năng thuộc phân hệ WORK+']
  }, {
    package: 'Gói CRM+',
    decription: 'Đầy đủ các chức năng phân hệ CRM+ giải quyết bài toán tăng trưởng doanh thu, khách hàng',
    price: '60.000',
    feature: ['Tặng phân hệ OFFICE+', 'Sử dụng đầy đủ tính năng thuộc phân hệ CRM+']
  }, {
    package: 'Gói SME+',
    decription: 'Đầy đủ 4 phân hệ WORK+, OFFICE+, HRM+, CRM+ cho doanh nghiệp nhỏ và vừa',
    price: '100.000',
    feature: ['Sử dụng đầy đủ 4 phân hệ WORK+, HRM+, CRM+, OFFICE+']
  }]
  return (
    <section id="about" className="">
      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h1 className="text-3xl text-[green] font-bold ">Gửi yêu cầu tư vấn</h1>
          <form className="flex flex-col py-5" onSubmit={handleSubmit(onSubmit)}>
            <input className="border text-sm rounded-lg block w-full p-2.5 mb-3 mt-3" {...register("name", { required: true })} placeholder="Tên của bạn" />
            {errors.name && <span className="text-[red] mb-3">Không được để trống mục này</span>}
            <input className="border text-sm rounded-lg block w-full p-2.5 mb-3" {...register("email", { required: true })} placeholder="Địa chỉ email" />
            {errors.email && <span className="text-[red] mb-3">Không được để trống mục này</span>}
            <input className="border text-sm rounded-lg block w-full p-2.5 mb-3" {...register("phone", { required: true })} placeholder="Số điện thoại" />
            {errors.phone && <span className="text-[red] mb-3">Không được để trống mục này</span>}
            <input className="border text-sm rounded-lg block w-full p-2.5 mb-3" {...register("company", { required: true })} placeholder="Công ty" />
            {errors.company && <span className="text-[red] mb-3">Không được để trống mục này</span>}
            <input className="border text-sm rounded-lg block w-full p-2.5 mb-3" {...register("companyAddress", { required: true })} placeholder="Địa chỉ công ty" />
            {errors.companyAddress && <span className="text-[red] mb-3">Không được để trống mục này</span>}
            <input className="border text-sm rounded-lg block w-full p-2.5 mb-3" {...register("reqContent", { required: true })} placeholder="Nội dung yêu cầu" />
            {errors.reqContent && <span className="text-[red] mb-3">Không được để trống mục này</span>}
            <input type="submit" className="bg-[green] text-white p-3 rounded-lg font-semibold cursor-pointer" value="Gửi yêu cầu" />
          </form>
        </Modal>
      </div>
      <div className="container max-w-full sm:max-w-screen-xl ">
        <div
        //className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28"
        >
          <div className="-mx-4 flex flex-col items-center text-center">
            <div className="flex flex-col justify-center items-center" >
              <SectionTitleFull title="Bảng giá theo gói" paragraph="Đăng ký theo gói để được hưởng mức giá hấp dẫn với nhiều ưu đãi kèm theo" mb="44px"
              />
              <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
                {data?.map((d, i) => (
                  <div className="flex flex-col w-full " key={i}>
                    <div className="mx-3  rounded-2xl shadow-lg border-[1px] border-gray-200 " >
                      <div className="px-2 py-4">
                        <div className="mb-2 rounded-lg bg-[#8acb8a] px-2 py-6 text-xl font-bold">
                          {d.package}
                        </div>
                        <p className="text-gray-700 text-lg">
                          {d.decription}
                        </p>
                        <br />
                      </div>
                      <div className="">
                        <div className="packages">
                          <span style={{ fontWeight: "40px" }}>
                            Giá khi mua theo combo
                          </span>
                          <div id="text1">
                            <h2 className="pt-5 text-4xl font-semibold leading-loose text-orange">
                              {d.price} đ
                            </h2>
                          </div>
                          <div>
                            <span className="text-body-color">/user/tháng</span>
                          </div>
                        </div>
                        <button className="rounded-lg bg-[#269126] text-white" onClick={() => openModal(20000)}>
                          <a className="flex px-6">
                            <span className=" py-4">ĐĂNG KÝ NGAY</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              className="w-6"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                              ></path>
                            </svg>
                          </a>
                        </button>
                      </div>
                      <div className="px-6 pt-4 pb-2">
                        {d?.feature.map((f, i) => (
                          <span key={i} className="bg-gray-200 text-gray-700 mr-2 mb-2 inline-block rounded-full px-3 py-1 text-sm font-semibold">
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                    <a className="cursor-pointer flex justify-center items-center pl-5 text-lg text-[#53e153] group hover:text-[#0da20d]">
                      <span className="px-1 py-1">
                        Xem bảng so sánh tính năng chi tiết giữa các gói{" "}
                        <Icon icon="ph:arrow-right-light" color="#53e153" className="md:hidden inline group-hover:translate-x-4 group-hover:scale-105 ease-linear duration-100 text-[30px] sm:text-[40px] " />
                      </span>
                      <Icon icon="ph:arrow-right-light" color="#53e153" className="hidden md:block group-hover:translate-x-4 group-hover:scale-105 ease-linear duration-100 text-[30px] sm:text-[80px] " />
                    </a>
                  </div>
                ))}
              </div>

              <div className="flex bg-rose-100 w-[90%] p-2 lg:flex-row flex-col justify-start gap-8 items-center rounded-2xl shadow-2xl">
                <div className=" w-full lg:w-[70%] flex flex-col">
                  <div className="px-4 py-4 ">
                    <div className="mb-2 rounded-lg bg-[#8acb8a] px-4 py-6 font-bold" >
                      Gói 3I
                    </div>
                    <p className="font-bold text-[green]" >
                      3i for Construction
                    </p>
                  </div>
                  <div className="divider-wrap" data-alignment="default">
                    <div style={{ height: "20px" }} className="divider"></div>
                  </div>
                  <div className="">
                    <div className="packages text-lg" >
                      <span className="font-normal">
                        Gói giải pháp dành cho doanh nghiệp lĩnh vực Xây dựng
                      </span>
                    </div>
                    <ul className="px-3 pt-2 pb-2">
                      <li className="bg-gray-200 text-gray-700 mr-2 mb-2 inline-block rounded-full px-3 py-1 text-lg font-semibold">
                        Bao gồm tính năng chấm công di động & tính lương
                        trực tuyến
                      </li>
                    </ul>
                  </div>
                </div>
                <div className=" w-full lg:w-[30%]">
                  <div id="text6">
                    <h2 className="pt-5 text-4xl font-semibold leading-loose text-orange">
                      150.000 đ
                    </h2>
                  </div>
                  <div>
                    <span className="text-body-color">/user/tháng</span>
                  </div>
                  <button className="rounded-lg bg-[#269126] hover:bg-[#117611] group text-white group">
                    <a className=" flex justify-center items-center">
                      <span className="py-4 pl-[20px]">ĐĂNG KÝ NGAY</span>
                      <Icon icon="basil:arrow-right-solid" className="text-[30px] group-hover:translate-x-1 ease-linear duration-100" />
                    </a>
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSectionOne;
