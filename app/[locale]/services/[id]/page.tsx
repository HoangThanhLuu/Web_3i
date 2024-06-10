"use client";
import React from "react";
import Hero from "../../components/Services/Hero";
import Content from "../../components/Services/Content";
import axios from "axios";
import { getItemCms } from "../../apis/GetDataHome";
import { Merriweather, Noto_Serif, Inter } from "next/font/google";
import { useState, useEffect } from "react";
import { GetItemServices, GetItemService } from "../../apis/GetDataHome";
import { ResolvingMetadata, type Metadata } from "next";
import ScrollToTopICon from "../../components/ScrollToTopICon";
const Page = ({ params }) => {
  const [serviceItem, setServiceItem] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const item = await GetItemService(params?.id);
      // console.log('item', item);

      setServiceItem(item.data);
    };

    fetchData();
  }, [params.id]);
  return (
    <div className="bg-[#f9f9f9] pb-8">
      <Hero serviceItem={serviceItem} />
      <Content serviceItem={serviceItem} />
      {/* <ScrollToTopICon /> */}
    </div>
  );
};

export default Page;
