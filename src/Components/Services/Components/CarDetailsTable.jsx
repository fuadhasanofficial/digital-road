import { Icon } from "@iconify/react";
import React, { useContext } from "react";
import { AppContext } from "../../../Context/LangContext";

const CarDetailsTable = ({ carData }) => {
  const { language } = useContext(AppContext);
  console.log(carData);

  const labels = {
    en: {
      title: "Car Details",
      field: "Field",
      details: "Details",
      ownerName: "Owner Name",
      vehicleType: "Vehicle Type",
      registrationNumber: "Registration Number",
      chassisNumber: "Chassis Number",
      engineNumber: "Engine Number",
      phoneNumber: "Phone Number",
      nid: "NID",
      drivingLicense: "Driving License",
      address: "Address",
      carColor: "Car Color",
      loadWeight: "Load Weight",
      emptyWeight: "Empty Weight",
      validityYears: "Validity Years",
      expiryDate: "Expiry Date",
      ownerImage: "Owner Image",
      complainList: "Complain List",
    },
    bn: {
      title: "গাড়ির বিবরণ",
      field: "ক্ষেত্র",
      details: "বিবরণ",
      ownerName: "মালিকের নাম",
      vehicleType: "যানবাহনের ধরন",
      registrationNumber: "নিবন্ধন নম্বর",
      chassisNumber: "চ্যাসিস নম্বর",
      engineNumber: "ইঞ্জিন নম্বর",
      phoneNumber: "ফোন নম্বর",
      nid: "জাতীয় পরিচয়পত্র",
      drivingLicense: "ড্রাইভিং লাইসেন্স",
      address: "ঠিকানা",
      carColor: "গাড়ির রং",
      loadWeight: "লোড ওজন",
      emptyWeight: "খালি ওজন",
      validityYears: "বৈধতার বছর",
      expiryDate: "মেয়াদ শেষ হওয়ার তারিখ",
      ownerImage: "মালিকের ছবি",
      complainList: "অভিযোগ তালিকা",
    },
  };

  const t = labels[language];

  return (
    <div className="max-w-[80%] mx-auto mt-8">
      <h2 className="text-2xl font-bold text-center mb-4">{t.title}</h2>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">{t.field}</th>
              <th className="border border-gray-300 px-4 py-2">{t.details}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2 flex items-center">
                <Icon icon="mdi:image" className="mr-2 text-blue-600" />{" "}
                {t.ownerImage}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <img
                  src={carData.ownerImage}
                  alt={t.ownerImage}
                  className="w-16 h-16 rounded-full border"
                />
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 flex items-center">
                <Icon icon="mdi:palette" className="mr-2 text-red-600" />{" "}
                {t.carColor}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <div
                  className="w-6 h-6 rounded-full inline-block"
                  style={{ backgroundColor: carData.carColor }}
                ></div>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 flex items-center">
                <Icon icon="mdi:alert" className="mr-2 text-orange-500" />{" "}
                {t.complainList}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {carData.complain.length > 0 ? (
                  <ul className="list-disc pl-5">
                    {carData.complain.map((complain, index) => (
                      <li key={index}>{complain}</li>
                    ))}
                  </ul>
                ) : (
                  <span>{carData.complain}</span>
                )}
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 flex items-center">
                <Icon icon="mdi:account" className="mr-2 text-blue-500" />{" "}
                {t.ownerName}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {carData.ownerName}
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 flex items-center">
                <Icon icon="mdi:car" className="mr-2 text-green-500" />{" "}
                {t.vehicleType}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {carData.vehicleType}
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 flex items-center">
                <Icon icon="mdi:license" className="mr-2 text-purple-500" />{" "}
                {t.registrationNumber}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {carData.registrationNumber}
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 flex items-center">
                <Icon icon="mdi:barcode-scan" className="mr-2 text-red-500" />{" "}
                {t.chassisNumber}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {carData.chassisNumber}
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 flex items-center">
                <Icon icon="mdi:engine" className="mr-2 text-orange-500" />{" "}
                {t.engineNumber}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {carData.engineNumber}
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 flex items-center">
                <Icon icon="mdi:phone" className="mr-2 text-teal-500" />{" "}
                {t.phoneNumber}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {carData.phoneNumber}
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 flex items-center">
                <Icon
                  icon="mdi:card-account-details"
                  className="mr-2 text-yellow-500"
                />{" "}
                {t.nid}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {carData.nid}
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 flex items-center">
                <Icon icon="mdi:license" className="mr-2 text-indigo-500" />{" "}
                {t.drivingLicense}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {carData.drivingLicense}
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 flex items-center">
                <Icon icon="mdi:home" className="mr-2 text-pink-500" />{" "}
                {t.address}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {carData.address}
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 flex items-center">
                <Icon icon="mdi:weight" className="mr-2 text-gray-500" />{" "}
                {t.loadWeight}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {carData.loadWeight} kg
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 flex items-center">
                <Icon icon="mdi:weight" className="mr-2 text-gray-500" />{" "}
                {t.emptyWeight}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {carData.emptyWeight} kg
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 flex items-center">
                <Icon icon="mdi:calendar" className="mr-2 text-blue-400" />{" "}
                {t.validityYears}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {carData.validityYears} years
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 flex items-center">
                <Icon icon="mdi:calendar-end" className="mr-2 text-green-400" />{" "}
                {t.expiryDate}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {carData.expiryDate}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CarDetailsTable;
