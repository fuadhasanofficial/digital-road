import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../Context/LangContext";
const Header = () => {
  const { toggleLanguage, language } = useContext(AppContext); // 'bn' for Bengali, 'en' for English

  console.log(language);

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
        ],
      },
      footer: " সকল অধিকার সংরক্ষিত।",
      footerName: "© মানিকগঞ্জ সরকারি টেকনিক্যাল স্কুল ও কলেজ কর্তৃক|",
    },
    en: {
      header: "Bangladesh Road and Vehicle Monitoring System",
      nav: ["Home", "Services", "About", "Contact"],
      hero: {
        title: "Safe Vehicles, Orderly Roads",
        description:
          "Make traffic control and vehicle management easier and safer with our road and vehicle monitoring system.",
        button: "Learn More",
      },
      services: {
        title: "Our Services",
        cards: [
          {
            title: "Vehicle Information Verification",
            description: "Verify vehicle registration and ownership details.",
            button: "Learn More",
            icon: "mdi:car-info",
          },
          {
            title: "Traffic Fines",
            description: "Pay fines for traffic violations easily.",
            button: "Learn More",
            icon: "mdi:alert-circle-check",
          },
          {
            title: "Road Safety Reports",
            description: "Submit reports for traffic congestion and accidents.",
            button: "Learn More",
            icon: "mdi:road-variant",
          },
        ],
      },
      footer: "All rights reserved.",
      footerName: "© By Manikganj Government Technical School & College",
    },
  };

  console.log(content[language]);

  const lanContent = content[language];

  // const langContent = content[language];

  return (
    <div>
      <header className="bg-green-700 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <img src="/logo.png" alt="Bangladesh Govt Logo" className="h-12" />
          <h1 className="text-xl font-bold">{lanContent.header}</h1>
          <button
            onClick={toggleLanguage}
            className="bg-green-700 text-white py-1 px-3 rounded-md hover:bg-green-800"
          >
            {language === "en" ? "Switch to Bangla" : "Switch to English"}
          </button>
        </div>
      </header>
      <nav className="bg-green-800 text-white py-2">
        <ul className="flex justify-center space-x-8">
          {lanContent.nav.map((item, index) => (
            <li key={index}>
              <Link to="/" className="hover:underline">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
