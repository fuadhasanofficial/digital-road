import { Icon } from "@iconify/react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../Context/LangContext";

const GovServicePage = () => {
  const { language, toggleLanguage } = useContext(AppContext); // 'bn' for Bengali, 'en' for English

  const content = {
    bn: {
      header: "বাংলাদেশ সড়ক ও যানবাহন পর্যবেক্ষণ সিস্টেম",
      nav: ["হোম", "সেবা", "সম্পর্কে", "যোগাযোগ"],
      hero: {
        title: "নিরাপদ যানবাহন, সড়কে শৃঙ্খলা",
        description:
          "আমাদের সড়ক ও যানবাহন পর্যবেক্ষণ সিস্টেমের মাধ্যমে ট্রাফিক নিয়ন্ত্রণ এবং যানবাহন ব্যবস্থাপনা আরও সহজ এবং নিরাপদ করুন।",
        button: "আরও জানুন",
      },
      services: {
        title: "আমাদের সেবা",
        cards: [
          {
            title: "যানবাহনের তথ্য যাচাই",
            description: "যানবাহনের রেজিস্ট্রেশন এবং মালিকানা যাচাই করুন।",
            button: "আরও জানুন",
            icon: "mdi:car-info",
          },
          {
            title: "ট্রাফিক জরিমানা",
            description: "ট্রাফিক আইন লঙ্ঘনের জরিমানা পরিশোধ করুন।",
            button: "আরও জানুন",
            icon: "mdi:alert-circle-check",
          },
          {
            title: "রোড নিরাপত্তা প্রতিবেদন",
            description: "যানজট এবং দুর্ঘটনার প্রতিবেদন জমা দিন।",
            button: "আরও জানুন",
            icon: "mdi:road-variant",
          },
          {
            title: "অনুসন্ধান ",
            description: "যানবাহনের তথ্য অনুসন্ধান করুন ",
            button: "আরও জানুন",
            icon: "mdi:road-variant",
          },
        ],
      },
      footer: " সকল অধিকার সংরক্ষিত।",
      footerName: "© মানিকগঞ্জ সরকারি টেকনিক্যাল স্কুল ও কলেজ কর্তৃক|",
    },
    en: {
      header: "Bangladesh Road and Vehicle Monitoring System",
      nav: ["Home", "Services", "About", "Contact"],
      hero: {
        title: "Safe Vehicles, Disciplined Roads",
        description:
          "Streamline traffic control and vehicle management with our road and vehicle monitoring system.",
        button: "Learn More",
      },
      services: {
        title: "Our Services",
        cards: [
          {
            title: "Verify Vehicle Information",
            description: "Check vehicle registration and ownership details.",
            button: "Learn More",
            icon: "mdi:car-info",
          },
          {
            title: "Traffic Fines",
            description: "Pay fines for traffic rule violations.",
            button: "Learn More",
            icon: "mdi:alert-circle-check",
          },
          {
            title: "Road Safety Reporting",
            description: "Submit reports on traffic jams and accidents.",
            button: "Learn More",
            icon: "mdi:road-variant",
          },
          {
            title: "Road Safety Reporting",
            description: "Submit reports on traffic jams and accidents.",
            button: "Learn More",
            icon: "mdi:road-variant",
          },
        ],
      },
      footer: " All rights reserved.",
      footerName: " © Manikganj Govt Technical School And Collage|",
    },
  };

  const langContent = content[language];

  return (
    <div
      className="bg-gray-500"
      // style={{
      //   backgroundImage: "url('../assets/photo/bg.jpeg')",
      // }}
    >
      {/* Navigation Bar */}

      {/* Hero Section */}
      <section
        className="text-center py-16 bg-cover bg-center"
        style={{
          backgroundImage: "url('/path/to/hero-background.jpg')",
        }}
      >
        <div className="container mx-auto px-4 text-white">
          <h2 className="text-3xl font-bold mb-4">{langContent.hero.title}</h2>
          <p className="text-lg mb-6">{langContent.hero.description}</p>
          <Link to="/services">
            <button className="bg-green-700 text-white px-6 py-3 rounded shadow hover:bg-green-800">
              {langContent.hero.button}
            </button>
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">
            {langContent.services.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {langContent.services.cards.map((card, index) => (
              <div
                className="bg-white shadow rounded p-6 text-center border border-gray-200"
                key={index}
              >
                <Icon
                  icon={card.icon}
                  className="text-4xl text-green-700 mb-4"
                />
                <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
                <p to="/services" className="text-gray-600 mb-4">
                  {card.description}
                </p>
                <Link
                  to="/services"
                  className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"
                >
                  {card.button}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-700 text-white py-4">
        <div className="container mx-auto text-center">
          <p>
            <a className="text-blue-600" href="https://tsc.manikganj.gov.bd/">
              {langContent.footerName}
            </a>{" "}
            {langContent.footer}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default GovServicePage;
