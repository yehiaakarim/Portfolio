import React, { useState, useEffect } from "react";
import { useTranslation } from "../contexts/TranslationContext";
import { useTheme } from "../contexts/ThemeContext";

const ContactForm = () => {
  const { language, isRTL } = useTranslation();
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const arabicNumbers = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  const handlePhoneChange = (e) => {
    const { value } = e.target;

    const filteredValue = value.replace(/[^0-9+٠١٢٣٤٥٦٧٨٩]/g, "");

    const processedValue =
      language === "ar"
        ? filteredValue.replace(/[0-9]/g, (digit) => arabicNumbers[digit])
        : filteredValue;

    setFormData((prev) => ({ ...prev, phone: processedValue }));

    if (errors.phone) {
      setErrors((prev) => ({ ...prev, phone: "" }));
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone" && language === "ar") {
      const convertedValue = value.replace(
        /[0-9]/g,
        (digit) => arabicNumbers[digit]
      );
      setFormData((prev) => ({ ...prev, [name]: convertedValue }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim())
      newErrors.name = language === "ar" ? "الإسم مطلوب" : "Name is required";
    if (!formData.phone.trim())
      newErrors.phone =
        language === "ar" ? "رقم الهاتف مطلوب" : "Phone is required";
    if (!formData.subject.trim())
      newErrors.subject =
        language === "ar" ? "الموضوع مطلوب" : "Subject is required";
    if (!formData.message.trim())
      newErrors.message =
        language === "ar" ? "الرسالة مطلوبة" : "Message is required";

    if (!formData.email.trim()) {
      newErrors.email =
        language === "ar" ? "البريد الإلكتروني مطلوب" : "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email =
        language === "ar"
          ? "البريد الإلكتروني غير صالح"
          : "Invalid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const submissionData = { ...formData };
    if (language === "ar") {
      submissionData.phone = formData.phone.replace(
        /[٠١٢٣٤٥٦٧٨٩]/g,
        (arabicNum) => arabicNumbers.indexOf(arabicNum)
      );
    }

    try {
      const response = await fetch("https://formspree.io/f/xeeqgpbp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submissionData),
      });

      if (response.ok) {
        setShowSuccess(true);
        setFormData({
          name: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  return (
    <div className="relative" dir={isRTL ? "rtl" : "ltr"}>
      {showSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div
            className={`p-6 rounded-lg max-w-md text-center ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <h3
              className={`text-xl font-bold mb-2 lowercase ${
              
                isDarkMode ? "text-green-400" : "text-green-600"
              }`}
            >
              {language === "ar" ? "✓ تم إرسال الرسالة!" : "✓ message sent!"}
            </h3>
            <p
              className={`lowercase ${
                isDarkMode ? "text-gray-200" : "text-gray-700"
              }`}
            >
              {language === "ar"
                ? "تم إرسال رسالتك إلى yehiaabdelkarimsoliman@gmail.com بنجاح"
                : "your message was sent to yehiaabdelkarimsoliman@gmail.com successfully."}
            </p>
            <button
              onClick={() => setShowSuccess(false)}
              className={`mt-4 px-4 py-2 rounded hover:bg-blue-600 transition lowercase ${
              
                isDarkMode ? "bg-blue-600 text-white" : "bg-blue-500 text-white"
              }`}
            >
              {language === "ar" ? "إغلاق" : "close"}
            </button>
          </div>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className={`p-4 rounded-xl shadow-lg ${
          isDarkMode
            ? "shadow-gray-800 bg-gray-700"
            : "shadow-gray-400 bg-white"
        }`}
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className={`block uppercase text-sm font-medium mb-1 ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            {language === "ar" ? "الإسم" : "Name"}{" "}
            <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className={`w-full p-2 border rounded ${
              errors.name
                ? "border-red-500"
                : isDarkMode
                ? "border-gray-600 bg-gray-800 text-white"
                : "border-gray-300"
            }`}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="phone"
            className={`block uppercase text-sm font-medium mb-1 ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            {language === "ar" ? "رقم الهاتف" : "Phone"}{" "}
            <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handlePhoneChange}
            dir="ltr"
            inputMode="numeric"
            className={`w-full p-2 border rounded text-left ${
              errors.phone
                ? "border-red-500"
                : isDarkMode
                ? "border-gray-600 bg-gray-800 text-white"
                : "border-gray-300"
            }`}
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className={`block uppercase text-sm font-medium mb-1 ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            {language === "ar" ? "البريد الإلكتروني" : "Email"}{" "}
            <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-2 border rounded ${
              errors.email
                ? "border-red-500"
                : isDarkMode
                ? "border-gray-600 bg-gray-800 text-white"
                : "border-gray-300"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="subject"
            className={`block uppercase text-sm font-medium mb-1 ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            {language === "ar" ? "الموضوع" : "Subject"}{" "}
            <span className="text-red-500">*</span>
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
            className={`w-full p-2 border rounded ${
              errors.subject
                ? "border-red-500"
                : isDarkMode
                ? "border-gray-600 bg-gray-800 text-white"
                : "border-gray-300"
            }`}
          />
          {errors.subject && (
            <p className="text-red-500 text-xs mt-1">{errors.subject}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="message"
            className={`block uppercase text-sm font-medium mb-1 ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            {language === "ar" ? "الرسالة" : "Message"}{" "}
            <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="8"
            className={`w-full p-2 border rounded ${
              errors.message
                ? "border-red-500"
                : isDarkMode
                ? "border-gray-600 bg-gray-800 text-white"
                : "border-gray-300"
            }`}
          />
          {errors.message && (
            <p className="text-red-500 text-xs mt-1">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          className={`w-full py-2 px-4 rounded hover:bg-blue-600 transition ${
            isDarkMode ? "bg-blue-600 text-white" : "bg-blue-500 text-white"
          }`}
        >
          {language === "ar" ? "إرسل الرسالة" : "Submit Your Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
