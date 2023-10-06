"use client";

import AdvertisingForm from "@/components/modules/forms/AdvertisingForm";
import { p2e } from "@/utils/replaceNumber";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const EditAdPage = ({ ad }) => {
  const [loading, setLoading] = useState(false);
  const [adData, setAdData] = useState(ad);

  const handleChangeDate = (e) => {
    // console.log(e);
    const date = new Date(e);

    setAdData({ ...adData, constructionDate: date });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdData({ ...adData, [name]: p2e(value) });
  };

  const handleEdit = async () => {
    // console.log(adData);
    setLoading(true);
    try {
      const { data } = await axios.patch("/api/advertising", { adData });
      // console.log(data);
      setLoading(false);
      toast.success(data.message);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.error);
      setLoading(false);
    }
  };

  return (
    <AdvertisingForm
      PageTitle={"ویرایش آگهی"}
      ButtonTitle={"ویرایش کردن"}
      adData={adData}
      handleChange={handleChange}
      handleSubmit={handleEdit}
      loading={loading}
      setAdData={setAdData}
      handleChangeDate={handleChangeDate}
    />
  );
};
export default EditAdPage;
