"use client";
import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    terms: false,
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    terms: "",
  });

  // Regex for validation
  const nameRegex = /^[a-zA-Z\s]{3,50}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{10}$/;

  const validateField = (field: string, value: string | boolean) => {
    switch (field) {
      case "name":
        return nameRegex.test(value as string)
          ? ""
          : "Name must be 3-50 characters long and only letters";
      case "email":
        return emailRegex.test(value as string) ? "" : "Invalid email address";
      case "phone":
        return phoneRegex.test(value as string)
          ? ""
          : "Phone number must be 10 digits";
      case "message":
        return (value as string).trim().length > 0 ? "" : "Message is required";
      case "terms":
        return value ? "" : "You must agree to the terms";
      default:
        return "";
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    const fieldValue =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: fieldValue,
    }));

    const debounce = setTimeout(() => {
      setErrors((prev) => ({
        ...prev,
        [name]: validateField(name, fieldValue),
      }));
    }, 300);

    return () => clearTimeout(debounce);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = Object.keys(formData).reduce((acc, key) => {
      const typedKey = key as keyof typeof formData;
      acc[typedKey] = validateField(typedKey, formData[typedKey]);
      return acc;
    }, {} as typeof errors);

    setErrors(validationErrors);

    if (!Object.values(validationErrors).some((error) => error !== "")) {
      console.log("Form submitted:", formData);
    } else {
      console.error("Validation errors:", validationErrors);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-md space-y-4"
    >
      <h2 className="text-xl font-semibold">SEND US YOUR MESSAGE</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block font-medium">
            Name*
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full mt-1 p-2 border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } rounded-md`}
              placeholder="Enter your name"
            />
            {errors.name && (
              <span className="text-red-500 text-sm">{errors.name}</span>
            )}
          </label>
        </div>
        <div>
          <label className="block font-medium">
            Email*
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full mt-1 p-2 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-md`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">{errors.email}</span>
            )}
          </label>
        </div>
        <div>
          <label className="block font-medium">
            Phone*
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full mt-1 p-2 border ${
                errors.phone ? "border-red-500" : "border-gray-300"
              } rounded-md`}
              placeholder="Enter your Number"
            />
            {errors.phone && (
              <span className="text-red-500 text-sm">{errors.phone}</span>
            )}
          </label>
        </div>
      </div>
      <div>
        <label className="block font-medium">
          Message*
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={`w-full mt-1 p-2 border ${
              errors.message ? "border-red-500" : "border-gray-300"
            } rounded-md`}
            placeholder="Write your message here"
          />
          {errors.message && (
            <span className="text-red-500 text-sm">{errors.message}</span>
          )}
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          name="terms"
          checked={formData.terms}
          onChange={handleChange}
          className="w-4 h-4"
        />
        <span className="text-sm">
          you agree to our{" "}
          <a href="#" className="text-blue-500 underline">
            privacy policy
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-500 underline">
            terms & conditions
          </a>
          .
        </span>
        {errors.terms && (
          <span className="text-red-500 text-sm ml-2">{errors.terms}</span>
        )}
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-700"
      >
        SEND MESSAGE
      </button>
    </form>
  );
};

export default ContactForm;
