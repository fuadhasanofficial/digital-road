import React, { useState } from "react";

const LoginPage = () => {
  const [language, setLanguage] = useState("bn"); // 'bn' for Bangla, 'en' for English

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "bn" ? "en" : "bn"));
  };

  const text = {
    bn: {
      title: "সরকারি সেবা লগইন পেজ",
      email: "ইমেইল",
      password: "পাসওয়ার্ড",
      emailPlaceholder: "আপনার ইমেইল লিখুন",
      passwordPlaceholder: "আপনার পাসওয়ার্ড লিখুন",
      login: "লগইন",
      registerPrompt: "আপনি কি নিবন্ধন করেননি?",
      registerLink: "নিবন্ধন করুন",
      switchTo: "Switch to English",
    },
    en: {
      title: "Government Service Login Page",
      email: "Email",
      password: "Password",
      emailPlaceholder: "Enter your email",
      passwordPlaceholder: "Enter your password",
      login: "Login",
      registerPrompt: "Haven't registered yet?",
      registerLink: "Register here",
      switchTo: "বাংলায় যান",
    },
  };

  const t = text[language];

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/path-to-your-background-image.jpg')" }}
    >
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg max-w-md w-full">
        <button
          onClick={toggleLanguage}
          className="absolute top-4 right-4 bg-green-700 text-white py-1 px-3 rounded-md hover:bg-green-800"
        >
          {t.switchTo}
        </button>
        <h1 className="text-2xl font-bold text-center text-green-700 mb-6">
          {t.title}
        </h1>
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              {t.email}
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              placeholder={t.emailPlaceholder}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              {t.password}
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              placeholder={t.passwordPlaceholder}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-700 text-white py-2 px-4 rounded-md hover:bg-green-800"
          >
            {t.login}
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          {t.registerPrompt}{" "}
          <a href="/register" className="text-green-700 hover:underline">
            {t.registerLink}
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
