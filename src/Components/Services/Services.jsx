// Import necessary modules
import { Icon } from "@iconify/react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../Context/LangContext";

const AdditionalServices = () => {
  const { language } = useContext(AppContext); // 'bn' for Bangla, 'en' for English

  const content = {
    bn: [
      {
        title: "নতুন গাড়ির নিবন্ধন",
        description:
          "আপনার যানবাহন আমাদের নিরাপদ এবং সহজ প্রক্রিয়ার মাধ্যমে নিবন্ধন করুন।",
        button: "এখন নিবন্ধন করুন",
        icon: "mdi:car-connected",
      },
      {
        title: "অভিযোগ নিষ্পত্তি",
        description: "অভিযোগ জমা দিন এবং নিষ্পত্তির অগ্রগতি পর্যবেক্ষণ করুন।",
        button: "অভিযোগ করুন",
        icon: "mdi:file-document-outline",
      },
    ],
    en: [
      {
        title: "New Car Registration",
        description:
          "Register your vehicle with our streamlined and secure process.",
        button: "Register Now",
        icon: "mdi:car-connected",
      },
      {
        title: "Complain Disposal",
        description:
          "File complaints and track their resolutions through our efficient disposal system.",
        button: "File a Complaint",
        icon: "mdi:file-document-outline",
      },
    ],
  };

  const services = content[language];

  return (
    <section id="additional-services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">
          {language === "bn" ? " সেবা" : " Services"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow rounded-lg p-6 text-center border border-gray-200"
            >
              <Icon
                icon={service.icon}
                className="text-5xl text-blue-600 mb-4"
              />
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link
                to="/add-new-car"
                className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
              >
                {service.button}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalServices;
