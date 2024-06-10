


"use client";

import React, { useContext, useRef, useState, useMemo, useEffect, FormEvent } from "react";
import { NextResponse, NextRequest } from "next/server";
import SectionTitle from "../Common/SectionTitle";
import { Icon } from '@iconify/react';
import Image from "next/image";
import Trees from "./Trees"
import axios from "axios";
import { CustomerRegistReq, testRegistApi } from "../../apis/GetDataHome";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import Loading from "../Common/Loading";

const FormRegist = ({ setOpen }) => {
  // const [file, setFile] = useState<File>()
  const [time, setTime] = useState('Y')


  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadedFileExel, setUploadedFileExel] = useState<{ name: string; file: File }>();
  const handleFileUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    // Kiểm tra định dạng tệp có phải là Excel không (ví dụ: kiểm tra phần mở rộng)
    const allowedExtensions = ['xls', 'xlsx'];
    const fileExtension = selectedFile?.name?.split('.').pop().toLowerCase();

    if (fileExtension && allowedExtensions.includes(fileExtension)) {
      // Thực hiện xử lý khi tệp là Excel
      setUploadedFileExel({ name: selectedFile?.name, file: selectedFile })
    } else {
      // Hiển thị thông báo hoặc thực hiện xử lý khác khi tệp không phải là Excel
      alert('Vui lòng chọn một tệp Excel');
      // Reset giá trị của input để người dùng có thể chọn lại tệp khác
      fileInputRef.current.value = '';
    }
  }

  // const handleFromValue = handleSubmit(async (data) => {
  //   try {
  //     let imageItemChange = avatar
  //     if (file) {
  //       const imageItem = new FormData()
  //       imageItem.append('image', file)
  //       const res = await upLoadAvatar.mutateAsync(imageItem)
  //       imageItemChange = res.data.data
  //     }
  //     const res = await mutation.mutateAsync({
  //       ...data,
  //       date_of_birth: data.date_of_birth?.toISOString(),
  //       avatar: imageItemChange
  //     })
  //     setProfileUser(res.data.data as user)
  //     setProfile(res.data.data as user)
  //     refetch()
  //   } catch (error) {
  //     if (axiosError<resPonseApi<FromDataError>>(error) && error.response?.status === 422) {
  //       const fromError = error.response.data.data
  //       if (fromError) {
  //         Object.keys(fromError).forEach((key) =>
  //           setError(key as keyof FromDataError, {
  //             type: 'server',
  //             message: fromError[key as keyof FromDataError]
  //           })
  //         )
  //       }
  //     }
  //   }
  // })



  const data = [
    {
      "Id": 8,
      "Code": "module3",
      "Title": "phòng nhân sự",
      "TitleJoin": null,
      "ParentId": null,
      "ParentCode": null,
      "Order": null,
      "HasChild": true,
      "Path": null,
      "Api": null,
      "Description": null,
      "Status": false,
      "Level": 0,
      "ListRepository": null,
      "TypeRepos": null,
      "CateRepoSettingId": null
    },
    {
      "Id": 21,
      "Code": "module5",
      "Title": "xa thải nhân viên",
      "TitleJoin": null,
      "ParentId": null,
      "ParentCode": "module3",
      "Order": null,
      "HasChild": false,
      "Path": null,
      "Api": null,
      "Description": null,
      "Status": false,
      "Level": 1,
      "ListRepository": null,
      "TypeRepos": null,
      "CateRepoSettingId": null
    },
    {
      "Id": 9,
      "Code": "module4",
      "Title": "tuyển nhân viên",
      "TitleJoin": null,
      "ParentId": null,
      "ParentCode": "module3",
      "Order": null,
      "HasChild": false,
      "Path": null,
      "Api": null,
      "Description": null,
      "Status": false,
      "Level": 1,
      "ListRepository": null,
      "TypeRepos": null,
      "CateRepoSettingId": null
    },
    {
      "Id": 7,
      "Code": "module2",
      "Title": "phòng hành chính",
      "TitleJoin": null,
      "ParentId": null,
      "ParentCode": null,
      "Order": null,
      "HasChild": false,
      "Path": null,
      "Api": null,
      "Description": null,
      "Status": false,
      "Level": 0,
      "ListRepository": null,
      "TypeRepos": null,
      "CateRepoSettingId": null
    },
    {
      "Id": 6,
      "Code": "module1",
      "Title": "phòng kế toán",
      "TitleJoin": null,
      "ParentId": null,
      "ParentCode": null,
      "Order": null,
      "HasChild": false,
      "Path": null,
      "Api": null,
      "Description": null,
      "Status": false,
      "Level": 0,
      "ListRepository": null,
      "TypeRepos": null,
      "CateRepoSettingId": null
    },
    {
      "Id": 2,
      "Code": "001",
      "Title": "abc",
      "TitleJoin": null,
      "ParentId": null,
      "ParentCode": null,
      "Order": null,
      "HasChild": true,
      "Path": null,
      "Api": null,
      "Description": null,
      "Status": false,
      "Level": 0,
      "ListRepository": null,
      "TypeRepos": null,
      "CateRepoSettingId": null
    },
    {
      "Id": 5,
      "Code": "module0",
      "Title": "bcd",
      "TitleJoin": null,
      "ParentId": null,
      "ParentCode": "001",
      "Order": null,
      "HasChild": false,
      "Path": null,
      "Api": null,
      "Description": null,
      "Status": false,
      "Level": 1,
      "ListRepository": null,
      "TypeRepos": null,
      "CateRepoSettingId": null
    }
  ]

  const [parents, setParents] = useState([])
  useEffect(() => {
    const parents = data.filter((d, i) => d.ParentCode === null)
    setParents(parents)

  }, [])

  const [image, setImage] = useState<{ url: string; name: string; file: File }>();
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const selectedImage = event.target.files[0];
      if (selectedImage.size > 2000000) {
        alert('Dung lượng Ảnh nền không được vượt quá 2MB');
      } else {
        setImage({ url: URL.createObjectURL(selectedImage), file: event.target.files[0], name: selectedImage.name });
      }
    }
  }

  const [logo, setLogo] = useState<{ url: string; name: string; file: File }>();
  const onImageLogo = (event) => {
    console.log('event.target.files', event.target.files);
    console.log('event.target.files[0]', event.target.files[0]);

    if (event.target.files && event.target.files[0]) {
      const selectedLogo = event.target.files[0];
      if (selectedLogo.size > 700000) {
        alert('Dung lượng logo không được vượt quá 700kB');
      } else {
        setLogo({ url: URL.createObjectURL(selectedLogo), file: event.target.files[0], name: selectedLogo.name });
      }
    }
  }
  const downloadExcelFile = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = '/exels/com_depart_struct.xlsx'; // Replace with the actual path to your Excel file
    downloadLink.download = 'thongtin.xlsx'; // Rename the downloaded file if needed
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  const [selectedOption, setSelectedOption] = useState('month');
  const [companyName, setCompanyName] = useState('3i truyền thông và công nghệ');
  const [domain, setDomain] = useState('3i.com.vn');
  const [requestTitle, setRequestTitle] = useState('vận dụng sức sáng tạo của con người về măt công nghệ để phục vụ xã hội những sản phẩm và giải pháp mang tính trí tuệ');
  const [slogan, setSlogan] = useState('Information-Intelligent-Innovation');
  // const [companyName, setCompanyName] = useState('');
  // const [domain, setDomain] = useState('');
  // const [requestTitle, setRequestTitle] = useState('');
  // const [slogan, setSlogan] = useState('');
  const [CheckedNote, setCheckedNote] = useState([]);
  const [loading, setLoading] = useState(false);


  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (CheckedNote.length === 0) {
      alert("Vui lòng lựa chọn danh mục các Module");
      return;
    }
    try {
      // CheckedNote.forEach((value, index) => {
      //   CheckNode[index]=value);
      // });
      // const obj = {
      //   CompanyName: companyName,
      //   requestTitle: requestTitle,
      //   Slogan: slogan,
      //   Domain: domain,
      //   MonthTried: selectedOption,
      //   Logo: logo?.file,
      //   Tel: '',
      //   Email: '',
      //   Background: image?.file,
      //   Noted: '',
      //   ReqCode: '',
      //   CheckedNote: CheckedNote
      // }
      const formData = new FormData();
      formData.append('Slogan', slogan);
      formData.append('Domain', domain);
      formData.append('CompanyName', companyName);
      formData.append('RequestTitle', requestTitle);
      formData.append('MonthTried', time);

      formData.append('Logo', logo?.file);
      formData.append('Background', image?.file);
      formData.append('fileUpload', uploadedFileExel?.file);
      formData.append('CheckNode', JSON.stringify(CheckedNote));

      formData.append('Username', 'admin');
      formData.append('Email', '');
      formData.append('Tel', '');
      // formData.append('Noted', '');
      // formData.append('ReqCode', '');

      // console.log('formData',formData)
      // console.log('formData',
      //   logo.file, uploadedFileExel?.file,
      //   image?.file,
      //   JSON.stringify(CheckedNote));


      try {
        setOpen(false)
        const res = await axios.post('https://os.3i.com.vn/MobileCustomer/InsertRequest', formData, {
          headers: {
            'Content-Type': 'multipart/form-data', // Đặt header 'Content-Type' là 'multipart/form-data'
          },
        })
        console.log(res);

        Swal.fire({
          title: 'success',
          text: 'Đăng kí thông tin thành công',
          icon: 'success',
          confirmButtonText: 'Xác Nhận',
        })

        setLoading(false)
        setOpen(false)

      } catch (error) {
        alert(`${error} : gọi api k thành công`)
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
  // console.log(CheckedNote)
  
  const bodulieu = [
    {
      "Code": "REGIST_SPORT_COMPANY",
      "Name": "Bộ dữ liệu đăng kí thể thao của nhân viên công ty"
    },
    {
      "Code": "CARD_DATA_LOGGER20220803143755",
      "Name": "Bộ dữ liệu đặt cơm"
    },
    {
      "Code": "CARD_DATA_LOGGER20230322201959",
      "Name": "Bộ dữ liệu khai báo lịch công tác"
    },
    {
      "Code": "CARD_DATA_LOGGER20210413114510",
      "Name": "Bộ dữ liệu báo nghỉ"
    },
    {
      "Code": "CARD_DATA_LOGGER20210413175109",
      "Name": "Đặt vé máy bay"
    },
    {
      "Code": "CARD_DATA_LOGGER20210415165622",
      "Name": "Bộ dữ liệu kết quả điều xe"
    },
    {
      "Code": "CARD_DATA_LOGGER20210504144103",
      "Name": "Kết quả hợp đồng bán"
    },
    {
      "Code": "CARD_DATA_LOGGER20210618144729",
      "Name": "Dữ liệu mẫu cho kế toán"
    },
    {
      "Code": "CARD_DATA_LOGGER20220110173427",
      "Name": "Bộ dữ liệu đấu thầu"
    },
    {
      "Code": "CARD_DATA_LOGGER20220111094752",
      "Name": "Bộ dữ liệu báo muộn"
    },
    {
      "Code": "CARD_DATA_LOGGER20220111101440",
      "Name": "Bộ dữ liệu lịch công tác"
    },
    {
      "Code": "CARD_DATA_LOGGER20220111102436",
      "Name": "Bộ dữ liệu làm thêm giờ"
    },
    {
      "Code": "CARD_DATA_LOGGER20220111102933",
      "Name": "Bộ dữ liệu báo Xin thôi việc"
    },
    {
      "Code": "CARD_DATA_LOGGER20220124140210",
      "Name": "Bộ dữ liệu đề xuất điều xe"
    },
    {
      "Code": "CARD_DATA_LOGGER20230323152057",
      "Name": "Bộ dữ liệu khai báo làm thêm"
    },
    {
      "Code": "CARD_DATA_LOGGER20221101154322",
      "Name": "Bộ dữ liệu giống cây trồng năm 2"
    },
    {
      "Code": "CARD_DATA_LOGGER20221101154326",
      "Name": "Bộ dữ liệu giống cây trồng năm 3"
    },
    {
      "Code": "REGIST_STUDY_COMPANY",
      "Name": "Bộ dữ liệu đăng kí học"
    },
    {
      "Code": "REGIST_MEAL_COMPANY",
      "Name": "Bộ dữ liệu đăng kí ăn"
    },
    {
      "Code": "CARD_DATA_LOGGER20230321142800",
      "Name": "Thông tin ứng viên"
    },
    {
      "Code": "CARD_DATA_LOGGER20231009095503",
      "Name": "Bộ dữ liệu chi tiết kiểm tra sản phẩm"
    },
    {
      "Code": "CARD_DATA_LOGGER20240104093210",
      "Name": "Bộ dữ liệu kỹ năng mềm của nhân lực"
    }
  ]

  const [dataChoosen, setDataChoosen] = useState<{ index: number, name: string }>();
  // accordionOpen có dạng { index: i, name: b.Name }
  const [accordionOpen, setAccordionOpen] = useState(true);
  const handleClickTrueData = (i, name) => {
    setDataChoosen({ index: i, name: name })
    setAccordionOpen(false)
  }

  useEffect(() => {
    setTime('Y')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedOption == 'year']);

  return (
    <>
      {/* <Loading loading={loading} /> */}
      {<form onSubmit={handleSubmit} className="fixed !m-0 top-0 right-0 left-0 w-screen h-screen th-fl bg-black bg-opacity-50 z-[10000]">
        <div
          className="wow 2xl:py-10  overflow-y-auto  flex h-full lg:h-[98%] 
          fixed gap-10 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full lg:w-[80%] 3xl:w-[65%]  justify-center 
          shadow-shadow-chat z-10 rounded-md bg-[#eff1ee]  p-2 dark:bg-[green]/10 sm:p-11 ease-linear 
          duration-100 lg:px-10 xl:px-5"
          data-wow-delay=".2s"
        >
          <div className="flex flex-col ">
            {/* icon close */}
            <div onClick={() => setOpen(false)} className="cursor-pointer fixed top-3 right-3">
              <Icon icon="mdi:close-outline" className="text-[30px]" />
            </div>
            {/* title */}
            <div className="flex justify-start items-start">
              <SectionTitle
                title="Đăng ký thông tin"
                paragraph=""
              />
            </div>
            {/* form */}
            <div className="w-full" >
              <div className="w-full flex 3xl:flex-col justify-start flex-col  gap-2 items-start 2xl:gap-10">
                <div className="w-full 3xl:w-full">
                  <div className="flex mb-3 justify-start gap-2 items-center">

                    <div className="font-bold">Thông tin :</div>
                  </div>
                  <div className="ml-4 sm:ml-8 sm:mr-16">
                    <label htmlFor="" className="text-sm font-semibold">Tiêu đề</label>
                    <input
                      // value={requestTitle}
                      onChange={(e) => setRequestTitle(e.target.value)}
                      type="text"
                      required
                      placeholder="Tiêu đề"
                      className="border-[1px] border-gray-300 mb-4 w-full text-black rounded-md  py-3 pr-6 pl-2 text-base font-medium placeholder-body-color outline-none focus:border-gray-500 focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50"
                    />
                    <label htmlFor="" className="text-sm font-semibold">Tên công ty</label>
                    <input
                      // value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      required
                      type="text"
                      placeholder="Tên Công Ty"
                      className="border-[1px] border-gray-300 mb-4 w-full text-black rounded-md  py-3 pr-6 pl-2 text-base font-medium placeholder-body-color outline-none focus:border-gray-500 focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50"
                    />
                    <label htmlFor="" className="text-sm font-semibold">Slogen</label>
                    <input
                      // value={slogan}
                      onChange={(e) => setSlogan(e.target.value)}
                      required
                      type="text"
                      placeholder="Slogen"
                      className="border-[1px] border-gray-300 mb-4 w-full text-black rounded-md  py-3 pr-6 pl-2 text-base font-medium placeholder-body-color outline-none focus:border-gray-500 focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50"
                    />
                    <label htmlFor="" className="text-sm font-semibold">Domain</label>
                    <input
                      // value={domain}
                      onChange={(e) => setDomain(e.target.value)}
                      required
                      type="text"
                      name="domain"
                      placeholder="Domain (vd:abc.com)"
                      className="border-[1px] border-gray-300 mb-4 w-full text-black rounded-md  py-3 pr-6 pl-2 text-base font-medium placeholder-body-color outline-none focus:border-gray-500 focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50"
                    />
                  </div>
                  {/* logo , ảnh nền */}
                  <div className="flex sm_p1:flex-row flex-col lg:justify-start  w-full">
                    {/* logo */}
                    <div className="w-full sm_p1:w-[50%]">
                      <div className="flex ">
                        <div className="flex justify-start gap-2 items-center">

                          <div className="font-bold">Logo :</div>
                        </div>
                        <div className="flex flex-col items-start w-fit gap-1">
                          <div className="relative">
                            {!logo?.name && <label htmlFor="logo" className="cursor-pointer underline text-sm rounded-md px-3 py-1.5">
                              Choose a image
                            </label>}
                            {logo?.name && <label htmlFor="logo" className="cursor-pointer underline text-sm hover:bg-gray-300 ease-linear duration-100 rounded-md px-3 py-1.5">
                              Change Image
                            </label>}
                            <input required type="file" id="logo"
                              name="logo" className="opacity-0 right-[50%] w-[1px] absolute" onChange={onImageLogo} accept="image/*" />
                          </div>
                          {/* <span className='text-xs font-normal text-gray-400'>File size: maximum 500 MB</span> */}
                        </div>
                      </div>
                      <div className=' sm_p1:ml-10 h-full flex gap-2 mt-3 justify-center sm_p1:justify-start items-start '>
                        {!logo?.name && <Icon icon="mingcute:user-4-line" className="text-gray-400 text-[100px]" />}
                        {logo?.name && <Image src={logo?.url} alt="" width={200} height={200} className='w-[100px] h-[100px] rounded-full ' />}

                      </div>
                    </div>
                    {/* ảnh nền */}
                    <div className="w-full sm_p1:w-[50%]">
                      <div className="flex">
                        <div className="flex justify-start gap-2 items-center">

                          <div className="font-bold">Ảnh nền :</div>
                        </div>
                        <div className="flex flex-col items-start w-fit gap-1">
                          <div className=" relative">
                            {!image?.name && <label htmlFor="anhnen" className="cursor-pointer text-sm underline rounded-md px-3 py-1.5">
                              Choose a image
                            </label>}

                            {image?.name && <label htmlFor="anhnen" className="cursor-pointer text-sm underline ease-linear duration-100 rounded-md px-3 py-1.5">
                              Change Image
                            </label>}
                            <input required type="file" id="anhnen"
                              name="anhnen" className="opacity-0 w-[1px] right-[50%] absolute" onChange={onImageChange} accept="image/*" />
                          </div>
                          {/* <span className='text-xs font-normal text-gray-400'>File size: maximum 500 MB</span> */}
                        </div>
                      </div>
                      <div className=' sm_p1:ml-10 h-full flex gap-2 justify-center sm_p1:justify-start items-start mt-3 '>
                        {!image?.name && <Icon icon="ph:image" className="text-gray-400 text-[100px]" />}
                        {image?.name && <Image src={image?.url} alt="" width={200} height={200} className='max-w-[200px] max-h-[200px] border-[1px] border-gray-300 ' />}

                      </div>
                    </div>
                  </div>
                  <div className="flex sm_p1:flex-row flex-col justify-between w-full items-start h-full 3xl:w-full">
                    {/* tải cấu trúc */}
                    <div className="mt-4 w-full sm_p1:w-[50%]">
                      <div className=" gap-2 flex justify-start items-start">
                        <div className="font-bold">Cấu trúc công ty (nhập dữ liệu theo file exel)</div>
                      </div>
                      {/* tải về  */}
                      <div className="flex justify-start gap-1 items-center mb-1">
                        <div className="min-w-[70px] ml-4">Bước 1 : </div>
                        <div className="flex justify-start items-center gap-1">
                          <div className="  cursor-pointer min-w-[80px] underline hover:scale-105 rounded-md p-2 ease-linear duration-100 text-black th-fl">
                            <input
                              type="file" id="file-dowload" name="file-dowload"
                              className="opacity-0 w-[1px]"
                            />
                            <Icon icon="ic:round-download" color="black" fontSize={20} />
                            <div onClick={downloadExcelFile} className="text-sm min-w-[45px] ">Tải về</div>
                          </div>
                          <div>(file exel)</div>
                        </div>
                      </div>
                      {/* tải lên */}
                      <div className="flex justify-start  gap-1 items-center">
                        <div className="min-w-[70px] ml-4  rounded-md">Bước 2 : </div>
                        <div className=" flex w-fit gap-1 justify-start items-center">
                          <div className="  cursor-pointer min-w-[80px] hover:scale-105 rounded-md p-2 ease-linear duration-100 text-black underline th-fl">
                            <input
                              type="file" id="file-upload" name="file-upload"
                              className="opacity-0 w-[1px]" ref={fileInputRef} onChange={handleFileChange} />
                            <Icon icon="ic:round-upload" color="black" fontSize={20} />
                            <div onClick={handleFileUpload} className="text-sm min-w-[45px]">Tải lên</div>
                          </div>
                          <div className=" min-w-[155px] w-fit flex">
                            {uploadedFileExel?.name ? <p className="w-fit  h-full">(Uploaded File: {uploadedFileExel.name})</p>
                              : <p className="text-gray-400">(vui lòng tải lên file)</p>}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* select */}
                    <div className="w-full sm_p1:w-[50%] flex flex-col justify-start gap-2 ">

                      <span>
                        <label htmlFor="cars" className="mr-3 font-bold">Thuê hoặc Mua :</label>
                        <select
                          defaultValue={selectedOption}
                          onChange={(e) => setSelectedOption(e.target.value)}
                          required name="cars" className="outline-none cursor-pointer p-2 rounded-md" id="cars">
                          <option value="month">Thuê theo tháng</option>
                          <option value="year">Mua Hẳn</option>
                        </select>
                      </span>

                      <br />
                      {
                        selectedOption == "month" ? <input defaultValue={1} min={1} max={12}  onChange={(e) => setTime(e.target.value)} className="w-[50%]" type="number" /> : <input className="w-[50%]" type="text" readOnly value={'Y'} />
                      }

                      <br />
                    </div>

                  </div>
                </div>
                <div className="flex sm_p1:flex-row flex-col justify-between w-full items-start h-full 3xl:w-full max-h-[500px]">
                  {/* bộ dữ liệu */}
                  <div className="z-[100] w-full sm_p1:w-[50%] flex flex-col font-sans justify-start gap-2 items-start">
                    <div className="w-full sm_p1:w-[80%]">
                      <div className="cursor-pointer w-full" onClick={() => setAccordionOpen(!accordionOpen)} >
                        <label htmlFor="cars" className="mr-3 font-bold">Nhóm dữ liệu :</label>
                        <div className="outline-none sm_p1:mx-0 mx-4 sm-p1:w-full h-10 bg-white border-[1px] border-gray-300 rounded-full font-medium flex justify-start items-center pl-3">{dataChoosen?.name ? dataChoosen.name : 'Chọn bộ dữ liệu'} </div>
                      </div>
                      <div
                        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-sm 
                        ${!accordionOpen
                            ? "grid-rows-[1fr] opacity-100 h-full"
                            : "grid-rows-[0fr] opacity-0 h-0"
                          }`}
                      >
                        <div className=" sm_p1:mx-0 mb-4 sm_p1:mb-60  mx-4 h-[400px] sm_p1:h-full mt-1 rounded-md">
                          <div className="flex flex-col max-h-[400px] shadow-md sm_p1:max-h-full overflow-y-auto pb-2 bg-white rounded-md">
                            {bodulieu?.map((b, i) => (
                              <div onClick={() => {
                                handleClickTrueData(i, b.Name)
                                setAccordionOpen(!accordionOpen)
                              }} key={i} className="text-black cursor-pointer  hover:bg-gray-200 duration-150 ease-linear p-2 flex text-base justify-start items-center">
                                <div>{b.Name}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                  {/* tree */}
                  <div className="w-full pb-60 sm_p1:pb-0 sm_p1:w-[50%]">
                    <div className="flex justify-start items-center gap-2 mb-4">
                      <div className="font-bold">Danh mục các Module :</div>
                    </div>
                   <div className="mb-40"> <Trees setCheckedNote={setCheckedNote} /></div>
                  </div>


                </div>
              </div>
              {/* <button
                className="duration-80 mt-12 mb-4 w-full cursor-pointer rounded-md border border-transparent bg-green-600 py-3 px-6 text-center text-base font-medium text-white outline-none transition ease-in-out hover:shadow-signUp focus-visible:shadow-none"
              >
                Đăng ký
              </button> */}
            </div>
          </div >
        </div >
        <button
          className="duration-80 z-[1000] left-1/2 -translate-x-1/2 w-[100%] lg:w-[100%] 3xl:w-[63%] bottom-0 right-0 fixed mt-12 mb-1
           cursor-pointer rounded-md border border-transparent bg-green-600 py-3  text-center text-base font-medium text-white outline-none transition ease-in-out hover:bg-green-700 hover:shadow-signUp focus-visible:shadow-none"
        >
          Đăng ký
        </button>
      </form >}
    </>

  );
};

export default FormRegist;



