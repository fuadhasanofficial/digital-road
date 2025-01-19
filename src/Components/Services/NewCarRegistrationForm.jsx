import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AppContext } from "../../Context/LangContext";

const NewCarRegistrationForm = () => {
  const { language } = useContext(AppContext);
  const [expiryDate, setExpiryDate] = useState("");
  const [expireYear, setExpireYear] = useState("");
  const calculateExpiryDate = (years) => {
    const currentDate = new Date();
    currentDate.setFullYear(currentDate.getFullYear() + parseInt(years, 10));
    setExpiryDate(currentDate.toISOString().split("T")[0]);
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const [imagePreview, setImagePreview] = useState(null);

  const content = {
    bn: {
      title: "নতুন গাড়ির নিবন্ধন ফর্ম",
      fields: {
        ownerName: "মালিকের নাম",
        vehicleType: "যানবাহনের ধরন",
        registrationNumber: "নিবন্ধন নম্বর",
        chassisNumber: "চ্যাসিস নম্বর",
        engineNumber: "ইঞ্জিন নম্বর",
        phoneNumber: "ফোন নম্বর",
        nid: "জাতীয় পরিচয়পত্র (NID)",
        drivingLicense: "ড্রাইভিং লাইসেন্স নম্বর",
        address: "ঠিকানা",
        carColor: "গাড়ির রং",
        loadWeight: "লোড ওজন",
        emptyWeight: "খালি ওজন",
        ownerImage: "মালিকের ছবি",
      },
      submitButton: "জমা দিন",
    },
    en: {
      title: "New Car Registration Form",
      fields: {
        ownerName: "Owner's Name",
        vehicleType: "Vehicle Type",
        registrationNumber: "Registration Number",
        chassisNumber: "Chassis Number",
        engineNumber: "Engine Number",
        phoneNumber: "Phone Number",
        nid: "National ID (NID)",
        drivingLicense: "Driving License Number",
        address: "Address",
        carColor: "Car Color",
        loadWeight: "Load Weight",
        emptyWeight: "Empty Weight",
        ownerImage: "Owner's Image",
      },
      submitButton: "Submit",
    },
  };

  const formContent = content[language];

  const onSubmit = async (data) => {
    expiryDate;
    console.log(data);
    const newData = { ...data, complain: [], expiryDate };
    try {
      const response = await fetch("http://localhost:5000/new-car", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      });

      if (response) {
        const result = await response.json();
        alert("Form submitted successfully!");
        console.log("Server response:", result);
        // Reset the form after successful submission
      } else {
        console.error("Failed to submit form:", response.statusText);
        alert("Failed to submit form. Please try again.");
      }
    } catch (error) {
      console.error("Error during form submission:", error);
      alert("An error occurred while submitting the form.");
    }
  };
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=7b904baec93efa246cd1b497bb2538d8`,
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();
      if (result.success) {
        const imageUrl = result.data.display_url;
        setValue("ownerImage", imageUrl); // Save the image URL in the form data
        setImagePreview(imageUrl); // Set the preview image
        console.log("Uploaded Image URL:", imageUrl);
      } else {
        console.error("Image upload failed:", result);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold text-center mb-4">
        {formContent.title}
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {Object.entries(formContent.fields).map(([key, label]) =>
          key !== "ownerImage" ? (
            <div key={key}>
              <label htmlFor={key} className="block font-medium mb-1">
                {label}
              </label>
              {key === "carColor" ? (
                <input
                  id={key}
                  type="color"
                  {...register(key, { required: `${label} is required` })}
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-green-500"
                />
              ) : (
                <input
                  id={key}
                  type={
                    key === "loadWeight" || key === "emptyWeight"
                      ? "number"
                      : "text"
                  }
                  {...register(key, { required: `${label} is required` })}
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-green-500"
                />
              )}
              {errors[key] && (
                <p className="text-red-500 text-sm mt-1">
                  {errors[key].message}
                </p>
              )}
            </div>
          ) : (
            <div key={key}>
              <label htmlFor={key} className="block font-medium mb-1">
                {label}
              </label>
              <input
                id={key}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-green-500"
              />
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="mt-4 w-32 h-32 object-cover rounded"
                />
              )}
              {errors[key] && (
                <p className="text-red-500 text-sm mt-1">
                  {errors[key].message}
                </p>
              )}
            </div>
          )
        )}

        {
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="validityYears"
            >
              Registration Validity (Years)
            </label>

            <input
              id="validityYears"
              {...register("validityYears", { required: true })}
              onChange={(e) => {
                calculateExpiryDate(e.target.value);
                setExpireYear(e.target.value);
              }}
              type="number"
            />
          </div>
        }

        {
          // <div className="mb-4">
          //   <label
          //     className="block text-gray-700 text-sm font-bold mb-2"
          //     htmlFor="validityYears"
          //   >
          //     Registration Validity (Years)
          //   </label>
          //   <input
          //     name="validityYears"
          //     type="number"
          //     value=""
          //     {...register("validityYears", { required: true })}
          //     onChange={(e) => {
          //       calculateExpiryDate(e.target.value);
          //       setExpireYear(e.target.value);
          //     }}
          //     className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-green-500"
          //   />
          // </div>
        }
        {expiryDate && (
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="expiryDate"
            >
              Expiry Date
            </label>
            <input
              id="expiryDate"
              type="text"
              value={expiryDate}
              readOnly
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100"
            />
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          {formContent.submitButton}
        </button>
      </form>
    </div>
  );
};

export default NewCarRegistrationForm;
