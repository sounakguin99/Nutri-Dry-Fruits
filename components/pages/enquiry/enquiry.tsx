"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useState, useEffect, useRef, useCallback } from "react";
import {
  Product as ImportedProduct,
  products,
} from "../../data/products/products"; // Adjust the import path as needed

// Product interface
interface Product extends ImportedProduct {
  quantity: number;
  weight: string;
}

// Form data interface
interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  message: string;
}

const EnquiryPage: React.FC = () => {
  const searchParams = useSearchParams();
  const productId = searchParams.get("id");
  const initialQuantity = searchParams.get("quantity");
  const initialWeight = searchParams.get("weight");

  // Form state
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Product state
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ImportedProduct[]>(
    []
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleProducts, setVisibleProducts] = useState<ImportedProduct[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isProductSelected, setIsProductSelected] = useState<Set<number>>(
    new Set()
  );
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef<IntersectionObserver | null>(null);

  const lastProductElementRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [hasMore]
  );

  useEffect(() => {
    const startIndex = (page - 1) * 5;
    const endIndex = startIndex + 5;
    const newProducts = products.slice(startIndex, endIndex);

    setVisibleProducts((prevProducts) => {
      const updatedProducts = [...prevProducts, ...newProducts];
      return Array.from(new Set(updatedProducts.map((p) => p.id))).map(
        (id) => updatedProducts.find((p) => p.id === id)!
      );
    });

    setHasMore(endIndex < products.length);
  }, [page]);

  useEffect(() => {
    if (productId) {
      const selected = products.find(
        (product) => product.id === Number(productId)
      );
      if (selected) {
        const newProduct: Product = {
          ...selected,
          quantity: Number(initialQuantity) || 1,
          weight: initialWeight || "100gm",
        };
        setSelectedProducts([newProduct]);
        setIsProductSelected(new Set([selected.id]));
      }
    }
  }, [productId, initialQuantity, initialWeight]);

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Enter a valid email";
    if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Phone number must be 10 digits";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const addProduct = (product: ImportedProduct) => {
    if (!isProductSelected.has(product.id)) {
      setSelectedProducts((prev) => [
        ...prev,
        { ...product, quantity: 1, weight: "100gm" },
      ]);
      setIsProductSelected(new Set([...isProductSelected, product.id]));
    }
  };

  const toggleProductSelect = (product: ImportedProduct) => {
    if (isProductSelected.has(product.id)) {
      removeProduct(product.id);
    } else {
      addProduct(product);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredProducts(filtered.slice(0, 5));
  };

  const updateProduct = (
    id: number,
    field: "quantity" | "weight",
    value: string | number
  ) => {
    setSelectedProducts((prev) =>
      prev.map((product) =>
        product.id === id ? { ...product, [field]: value } : product
      )
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate the form
    if (!validateForm()) return;

    // Prepare the data for submission
    const enquiryData = {
      ...formData,
      selectedProducts: selectedProducts.map((product) => ({
        id: product.id,
        title: product.title,
        quantity: product.quantity,
        weight: product.weight,
      })),
    };

    setIsSubmitting(true);
    setSuccessMessage(""); // Clear previous success message
    setErrorMessage(""); // Clear previous error message

    try {
      // Send the data to the API
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(enquiryData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit the enquiry");
      }

      setSuccessMessage("Enquiry submitted successfully!");

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSuccessMessage(""); // Reset success message after timeout
      }, 5000);

      // Reset form after submission
      setFormData({ name: "", email: "", phone: "", address: "", message: "" });
      setSelectedProducts([]); // Clear selected products
      setIsProductSelected(new Set()); // Clear product selection
    } catch (error) {
      console.error("Error submitting the enquiry:", error);
      setErrorMessage(
        "An error occurred while submitting the enquiry. Please try again later."
      );

      // Clear error message after 5 seconds
      setTimeout(() => {
        setErrorMessage(""); // Reset error message after timeout
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const removeProduct = (id: number) => {
    setSelectedProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
    setIsProductSelected((prev) => {
      const newSet = new Set(prev);
      newSet.delete(id);
      return newSet;
    });
  };

  return (
    <div className="max-w-screen-lg mx-auto p-4 sm:p-6 bg-white rounded-lg border  flex flex-col space-y-6 mt-[50px] lg:mt-[80px]">
      {/* Form Section */}
      <div className="flex flex-col space-y-4  ">
        <form className="space-y-4">
          <div className="space-y-2">
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              {/* Name Field */}
              <div className="flex flex-col w-full sm:w-1/3">
                <label htmlFor="name" className="text-sm font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  id="name"
                  className="w-full p-3 border rounded"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div className="flex flex-col w-full sm:w-1/3">
                <label htmlFor="email" className="text-sm font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  id="email"
                  className="w-full p-3 border rounded"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>

              {/* Phone Field */}
              <div className="flex flex-col w-full sm:w-1/3">
                <label htmlFor="phone" className="text-sm font-semibold">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  id="phone"
                  className="w-full p-3 border rounded"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone}</p>
                )}
              </div>
            </div>
          </div>

          {/* Address Field */}
          <div className="flex flex-col">
            <label htmlFor="address" className="text-sm font-semibold">
              Address
            </label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              id="address"
              rows={2}
              className="w-full p-3 border rounded"
            ></textarea>
            {errors.address && (
              <p className="text-red-500 text-sm">{errors.address}</p>
            )}
          </div>

          {/* Message Field */}
          <div className="flex flex-col">
            <label htmlFor="message" className="text-sm font-semibold">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              id="message"
              rows={4}
              className="w-full p-3 border rounded"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>
        </form>
      </div>

      {/* Product Search and Selection Section */}
      <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6 ">
        {/* Left Side: Search Bar and Product Details */}
        <div className="flex-1 space-y-4 rounded-lg shadow-md p-4 sm:p-6 bg-white border ">
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearch}
            className="w-full p-3 border rounded"
          />

          {/* Product Details */}
          <div className="h-64 overflow-y-auto rounded ">
            {(searchQuery ? filteredProducts : visibleProducts).map(
              (product, index) => (
                <div
                  key={`${product.id}-${index}`}
                  ref={
                    index === visibleProducts.length - 1
                      ? lastProductElementRef
                      : null
                  }
                  className={`flex items-center p-2 border-b cursor-pointer ${
                    isProductSelected.has(product.id) ? "bg-blue-100" : ""
                  }`}
                  onClick={() => toggleProductSelect(product)}
                >
                  {product.src && (
                    <Image
                      src={product.src}
                      alt={product.title}
                      width={64}
                      height={64}
                      className="w-16 h-16 object-cover mr-4"
                    />
                  )}
                  <div className="flex-1">
                    <h3 className="font-bold">{product.title}</h3>
                    {product.shortdescription && (
                      <p className="text-sm text-gray-600">
                        {product.shortdescription}
                      </p>
                    )}
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        {/* Right Side: Product Table */}
        <div className="lg:flex-1 p-4 sm:p-6 rounded-lg lg:h-[380px] lg:overflow-y-auto shadow-md bg-white border ">
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse border">
              <thead>
                <tr className="border-b">
                  <th className="p-2">Product</th>
                  <th className="p-2">Quantity</th>
                  <th className="p-2">Weight</th>
                  <th className="p-2">Remove</th>
                </tr>
              </thead>
              <tbody>
                {selectedProducts.map((product, index) => (
                  <tr key={`${product.id}-${index}`} className="border-b">
                    <td className="p-2">{product.title}</td>
                    <td className="p-2">
                      <input
                        type="number"
                        min={1}
                        value={product.quantity}
                        onChange={(e) =>
                          updateProduct(
                            product.id,
                            "quantity",
                            parseInt(e.target.value) || 1
                          )
                        }
                        className="w-16 p-1 border rounded"
                      />
                    </td>
                    <td className="p-2">
                      <select
                        value={product.weight}
                        onChange={(e) =>
                          updateProduct(product.id, "weight", e.target.value)
                        }
                        className="w-20 p-1 border rounded"
                      >
                        <option value="100gm">100gm</option>
                        <option value="200gm">250gm</option>
                        <option value="500gm">500gm</option>
                        <option value="1kg">1kg</option>
                        <option value="2kg">2kg</option>
                      </select>
                    </td>
                    <td className="p-2 text-center">
                      <button
                        type="button"
                        onClick={() => removeProduct(product.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        ✕
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Submit Button */}
          <div className="mt-4 flex justify-end">
            <button
              type="submit"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className={`rounded relative w-auto py-2 px-8 ${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#65504B] text-white border hover:bg-white hover:border-[#65504B] hover:text-[#65504B] transition-colors duration-300"
              }`}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </div>
      </div>
      {successMessage && (
        <div className="pt-10 text-center" style={{ color: "green" }}>
          {successMessage}
        </div>
      )}
      {errorMessage && (
        <div className="pt-10 text-center" style={{ color: "red" }}>
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default EnquiryPage;
