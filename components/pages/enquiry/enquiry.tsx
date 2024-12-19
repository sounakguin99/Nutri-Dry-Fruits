"use client";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { products } from "../../data/products/products"; // Import products

// Product interface with image as optional
interface Product {
  id: number;
  title: string;
  description: string;
  src?: string; // Mark image as optional
  quantity: number;
  weight: string;
}

const EnquiryPage: React.FC = () => {
  const searchParams = useSearchParams();
  const productId = searchParams.get("id");

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  // Product state
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleProducts, setVisibleProducts] = useState<Product[]>([]);

  const [isSubmitting, setIsSubmitting] = useState(false); // Remove this line if not used.

  const [isProductSelected, setIsProductSelected] = useState<Set<number>>(
    new Set()
  );

  useEffect(() => {
    // Load initial products (5 at a time)
    setVisibleProducts(products.slice(0, 5));

    // Auto-select product if coming from the product details page
    if (productId) {
      const selected = products.find(
        (product) => product.id === Number(productId)
      ); // Ensure productId is a number
      if (selected) addProduct(selected);
    }
  }, [productId]);

  const validateForm = () => {
    const newErrors = {
      name: !formData.name.trim() ? "Name is required" : "",
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
        ? "Enter a valid email"
        : "",
      phone: !/^\d{10}$/.test(formData.phone)
        ? "Phone number must be 10 digits"
        : "",
      address: !formData.address.trim() ? "Address is required" : "",
      message: !formData.message.trim() ? "Message is required" : "",
    };

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => !error);
  };

  // Add product to the selected list
  const addProduct = (product: Product) => {
    setSelectedProducts((prev) => [
      ...prev,
      { ...product, quantity: 1, weight: "100gm" },
    ]);
  };

  // Toggle product selection
  const toggleProductSelect = (product: Product) => {
    const newSelectedProducts = new Set(isProductSelected);
    if (newSelectedProducts.has(product.id)) {
      newSelectedProducts.delete(product.id);
      setSelectedProducts((prev) => prev.filter((p) => p.id !== product.id));
    } else {
      newSelectedProducts.add(product.id);
      addProduct(product);
    }
    setIsProductSelected(newSelectedProducts);
  };

  // Handle form changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle product search
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredProducts(filtered.slice(0, 5)); // Show only the first 5 filtered products
  };

  // Load more products on scroll
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;

    if (scrollTop + clientHeight >= scrollHeight) {
      setVisibleProducts((prev) =>
        products.slice(0, Math.min(prev.length + 5, products.length))
      );
    }
  }; // Remove `currentLength` if not utilized.

  // Update product quantity or weight
  const updateProduct = (
    id: number,
    field: "quantity" | "weight",
    value: string | number // Define the proper type here
  ) => {
    setSelectedProducts((prev) =>
      prev.map((product) =>
        product.id === id ? { ...product, [field]: value } : product
      )
    );
  };

  // Handle form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      alert("Form Submitted!");
      setFormData({ name: "", email: "", phone: "", address: "", message: "" });
      setIsSubmitting(false);
    }, 2000);
  };

  const removeProduct = (id: number) => {
    setSelectedProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  return (
    <div className="max-w-screen-lg mx-auto p-6 bg-gray-200 rounded-lg shadow flex flex-col space-y-6">
      {/* First Div: Contains the form */}
      <div className="flex flex-col space-y-4 rounded-lg shadow-md bg-white p-6">
        <form className="space-y-4">
          <div className="space-y-2">
            <div className="flex space-x-4">
              {/* Name Field */}
              <div className="flex flex-col w-1/3">
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
              <div className="flex flex-col w-1/3">
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
              <div className="flex flex-col w-1/3">
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

      {/* Second Div: Contains search bar + product details (left) and table (right) */}
      <div className="flex flex-col md:flex-row space-x-6">
        {/* Left Side: Search Bar and Product Details */}
        <div className="flex-1 space-y-4 rounded-lg shadow-md p-6 bg-white">
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearch}
            className="w-full p-3 border rounded"
          />

          {/* Product Details */}
          <div
            className="h-64 overflow-y-auto border rounded"
            onScroll={handleScroll}
          >
            {(filteredProducts.length > 0
              ? filteredProducts
              : visibleProducts
            ).map((product) => (
              <div
                key={product.id}
                className={`flex items-center p-2 border-b cursor-pointer ${
                  isProductSelected.has(product.id) ? "bg-blue-100" : ""
                }`}
                onClick={() => toggleProductSelect(product)}
              >
                {product.src && (
                  <Image
                    src={product.src || "/placeholder.png"} // Add fallback for optional `src`
                    alt={product.title}
                    width={64}
                    height={64}
                    className="w-16 h-16 object-cover mr-4"
                  />
                )}
                <div className="flex-1">
                  <h3 className="font-bold">{product.title}</h3>
                  <p className="text-sm text-gray-600">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Product Table */}
        <div className="flex-1 p-6 rounded-lg shadow-md bg-white">
          <table className="w-full table-auto border-collapse border">
            <thead>
              <tr className="border-b">
                <th className="p-2">Product</th>
                <th className="p-2">Quantity</th>
                <th className="p-2">Weight</th>
                <th className="p-2">Remove</th> {/* New Remove Column */}
              </tr>
            </thead>
            <tbody>
              {selectedProducts.map((product) => (
                <tr key={product.id} className="border-b">
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
                          parseInt(e.target.value)
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
                      <option value="200gm">200gm</option>
                      <option value="500gm">500gm</option>
                    </select>
                  </td>
                  <td className="p-2 text-center">
                    <button
                      type="button"
                      onClick={() => removeProduct(product.id)} // Function to remove a product
                      className="text-red-600 hover:text-red-800"
                    >
                      ✕
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Submit Button */}
          <div className="mt-4 flex justify-end">
            <button
              type="submit"
              onClick={handleSubmit}
              disabled={isSubmitting} // Disable button during submission
              className={`p-3 rounded ${
                isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500"
              }`}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnquiryPage;
