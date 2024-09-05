import axios from "../../Api/axios";
import { useContext, useState } from "react";
import { UrbanContext } from "../../context/UrbanContext";
import { useNavigate } from "react-router-dom";

export default function Category({ onClose }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const { setProductData, handleCloseModal, isModalOpen } = useContext(UrbanContext);
  const navigate = useNavigate();
  const categories = [
    {
      name: "Fashion & Accessories",
      subcategories: [
        "Clothing (Men's, Women's, Children's)",
        "Shoes & Footwear",
        "Handbags & Accessories",
        "Jewelry & Watches",
      ],
    },
    {
      name: "Electronics & Gadgets",
      subcategories: [
        "Smartphones & Tablets",
        "Computers & Laptops",
        "Cameras & Photography Equipment",
        "Audio & Video Devices",
      ],
    },
    {
      name: "Home & Garden",
      subcategories: [
        "Furniture & Decor",
        "Kitchenware & Cooking Utensils",
        "Home Appliances",
        "Gardening Supplies",
      ],
    },
    {
      name: "Health & Beauty",
      subcategories: [
        "Skincare Products",
        "Haircare Products",
        "Makeup & Cosmetics",
        "Personal Care Appliances",
      ],
    },
    {
      name: "Sports & Outdoors",
      subcategories: [
        "Athletic Apparel & Footwear",
        "Sports Equipment",
        "Camping & Hiking Gear",
        "Outdoor Recreation Accessories",
      ],
    },
    {
      name: "Books & Stationery",
      subcategories: [
        "Fiction & Non-fiction Books",
        "Office Supplies",
        "Writing Instruments",
        "Art Supplies",
      ],
    },
    {
      name: "Food & Beverages",
      subcategories: [
        "Gourmet Foods & Snacks",
        "Beverages",
        "Specialty Ingredients",
        "Cooking & Baking Supplies",
      ],
    },
    {
      name: "Electrical & Home Appliances",
      subcategories: [
        "Kitchen Appliances",
        "Laundry Appliances",
        "Vacuum Cleaners",
        "Air Conditioners & Fans",
      ],
    },
    {
      name: "Automotive & Accessories",
      subcategories: [
        "Car Parts & Accessories",
        "Car Care Products",
        "Automotive Electronics",
        "Vehicle Maintenance Tools",
      ],
    },
  ];

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSelectedSubcategory(null); // Reset subcategory when category changes
  };

  const handleSubcategorySelect = (subcategory) => {
    setSelectedSubcategory(subcategory);
    handleCloseModal();
    getProductByCategory(subcategory);
  };
  const getProductByCategory = async (subcat) => {
    try {
      const response = await axios.get(`/categories`, {
        params: { selectedSubcategory: subcat },
      });
      if (response.status === 200) {
        setProductData(response.data?.data?.products);
        navigate(`/${selectedCategory}/${subcat}`);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  return (
    <div className="h-[480px] shadow-md lg:flex hidden">
      <div className="w-[300px] h-full bg-[#eff1e6] flex justify-center items-center">
        <ul className="w-full">
          {categories.map((category) => (
            <li
              key={category.name}
              className={`h-[48px] ${
                selectedCategory === category.name
                  ? "bg-white"
                  : "hover:bg-white"
              } flex justify-start items-center w-full pl-4 cursor-pointer`}
              onMouseEnter={() => handleCategorySelect(category.name)}
            >
              {category.name}
            </li>
          ))}
        </ul>
      </div>
      <div>
        {selectedCategory && (
          <div>
            <ul className="flex flex-col p-8 h-[480px] w-[500px]">
              {categories
                .find((category) => category.name === selectedCategory)
                .subcategories.map((subcategory) => (
                  <li
                    key={subcategory}
                    className={`h-[48px] hover:cursor-pointer ${
                      selectedSubcategory === subcategory
                        ? "text-red-500"
                        : "hover:text-red-500"
                    }`}
                    onClick={() => handleSubcategorySelect(subcategory)}
                  >
                    {subcategory}
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
