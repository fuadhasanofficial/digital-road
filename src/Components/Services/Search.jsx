import { Icon } from "@iconify/react";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AppContext } from "../../Context/LangContext";
import { turnOffServo, turnOnServo } from "../../utils/utils";
import CarDetailsTable from "./Components/CarDetailsTable";
import StatusComponent from "./StatusComponent";

const SearchComponent = () => {
  const { register, handleSubmit, watch, setValue, reset } = useForm();
  const [carData, setCarData] = useState(null);
  const searchType = watch("searchType", "registration");
  const { language, toggleLanguage } = useContext(AppContext);

  const onSubmit = (data) => {
    if (!data.searchValue.trim()) {
      alert(
        language === "en"
          ? "Please enter a search value."
          : "অনুগ্রহ করে একটি অনুসন্ধানের মান লিখুন।"
      );
      return;
    }
    console.log(data);
    fetch(`http://localhost:5000/car/${data.searchValue}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.message == "ok") {
          setCarData(data.item);
          const complain = data.item.complain;
          if (!complain.length > 0) {
            turnOnServo();
          } else {
            turnOffServo();
          }
          reset();
        } else {
          setCarData(null);
        }

        console.log(data);
      })
      .catch((error) => setCarData(null));
    console.log(`Searching by ${data.searchType}: ${data.searchValue}`);
    // Add your search logic here
  };

  const translations = {
    en: {
      title: "Search",
      registration: "Registration Number",
      car: "Car Number",
      placeholderRegistration: "Enter Registration Number",
      placeholderCar: "Enter Car Number",
      search: "Search",
    },
    bn: {
      title: "অনুসন্ধান",
      registration: "রেজিস্ট্রেশন নম্বর",
      car: "গাড়ির নম্বর",
      placeholderRegistration: "রেজিস্ট্রেশন নম্বর লিখুন",
      placeholderCar: "গাড়ির নম্বর লিখুন",
      search: "অনুসন্ধান",
    },
  };

  const t = translations[language];

  return (
    <>
      <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
        <div className="flex justify-end w-full max-w-md mb-4">
          <button
            onClick={toggleLanguage}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            {language === "en" ? "বাংলা" : "English"}
          </button>
        </div>

        <h1 className="text-2xl font-bold mb-4">{t.title}</h1>

        <div className="flex gap-4 mb-4">
          <button
            onClick={() => setValue("searchType", "registration")}
            className={`px-4 py-2 rounded-lg text-white font-medium ${
              searchType === "registration" ? "bg-blue-500" : "bg-gray-400"
            }`}
          >
            <Icon icon="mdi:car-license" className="inline-block mr-2" />
            {t.registration}
          </button>

          <button
            onClick={() => setValue("searchType", "car")}
            className={`px-4 py-2 rounded-lg text-white font-medium ${
              searchType === "car" ? "bg-blue-500" : "bg-gray-400"
            }`}
          >
            <Icon icon="mdi:car" className="inline-block mr-2" />
            {t.car}
          </button>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex items-center w-full max-w-md bg-white shadow-md rounded-lg p-4"
        >
          <input
            {...register("searchValue")}
            type="text"
            placeholder={
              searchType === "registration"
                ? t.placeholderRegistration
                : t.placeholderCar
            }
            className="flex-1 p-2 border-none focus:outline-none"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-600"
          >
            <Icon icon="mdi:magnify" className="mr-2" /> {t.search}
          </button>
        </form>

        {carData && <StatusComponent carData={carData} />}
      </div>
      {carData ? (
        <CarDetailsTable carData={carData} />
      ) : (
        <div className> No Data Found</div>
      )}
    </>
  );
};

export default SearchComponent;
