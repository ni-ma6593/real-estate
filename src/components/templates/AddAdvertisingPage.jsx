"use client";
import { useState } from "react";
import AdvertisingForm from "../modules/forms/AdvertisingForm";
import axios from "axios";
import toast from "react-hot-toast";
import { p2e } from "@/utils/replaceNumber";

const AddAdvertisingPage = () => {
  const [adData, setAdData] = useState({
    title: "",
    description: "",
    location: "",
    phone: "",
    price: "",
    realState: "",
    constructionDate: new Date(),
    category: "",
    rules: [],
    amenities: [],
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdData({ ...adData, [name]: p2e(value) });
  };
  const handleChangeDate = (e) => {
    console.log(e);
    const date = new Date(e);

    setAdData({ ...adData, constructionDate: date });
  };

  const handleSubmit = async () => {
    setLoading(true);
    console.log(adData);
    try {
      const { data } = await axios.post("/api/advertising", {
        adData,
      });

      setAdData({
        title: "",
        description: "",
        location: "",
        phone: "",
        price: "",
        realState: "",
        constructionDate: new Date(),
        category: "",
        rules: [],
        amenities: [],
      });
      setLoading(false);
      toast.success(data.message);
    } catch (error) {
      console.log(error.response.data.error);
      toast.error(error.response.data.error);
      setLoading(false);
    }
  };

  return (
    <AdvertisingForm
      PageTitle={"ثبت آگهی جدید"}
      ButtonTitle={"ثبت آگهی"}
      adData={adData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      loading={loading}
      setAdData={setAdData}
      handleChangeDate={handleChangeDate}
    />
  );
};

export default AddAdvertisingPage;
