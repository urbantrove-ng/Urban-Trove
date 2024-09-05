import { createContext, useState, useEffect, useMemo } from "react";
import axios, { axiosPrivate } from "../Api/axios";

const UrbanContext = createContext();

const UrbanProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productData, setProductData] = useState([]);
  const [addedToCart, setAddedToCart] = useState(false);
  const [isClickedAdd, setIsClickedAdd] = useState(false);
  const [isClickedRemoved, setIsClickedRemove] = useState(false);

  const [removedFromCart, setRemovedFromCart] = useState(false);

  const [data, setData] = useState();
  const [product, setProduct] = useState([]);
  const [auth, setAuth] = useState({});
  const totalSum = data?.reduce((sum, item) => sum + item.total, 0);
  const totalNumber = data?.reduce((sum, item) => sum + item.quantity, 0);


  const handleOpenModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };
  const addToCart = async (id) => {
    setIsClickedAdd(true);
    try {
      const res = await axiosPrivate.post(
        "/cart",
        { id },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true, // This is equivalent to credentials: "include" in Fetch
        }
      );

      if (res.status === 200) {
        await fetchCart();
        setIsClickedAdd(false);
        setAddedToCart(true);
      }

      setTimeout(() => {
        setAddedToCart(false);
      }, 2000);
    } catch (error) {
      setIsClickedAdd(false);
    }
  };
  const removeItemfromCart = async (id) => {
    setIsClickedRemove(true);

    try {
      const res = await axiosPrivate.delete("/cart", {
        data: { id }, // data property is required to send the body in a DELETE request
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true, // This is equivalent to credentials: "include" in Fetch
      });

      if (res.status === 200) {
        await fetchCart();
        setIsClickedRemove(false);
        setRemovedFromCart(true);
      }

      setTimeout(() => {
        setRemovedFromCart(false);
      }, 2000);
    } catch (error) {
      setIsClickedRemove(false);
      // Optionally handle error here
      console.error("Error removing item from cart:", error);
    }
  };

  const fetchCart = async () => {
    try {
      const response = await axiosPrivate.get("/cart", {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      if (response.status === 200) {
        const cartData = response?.data?.data;
        setData(cartData);
      } else {
        console.error("Failed to fetch cart data");
      }
    } catch (error) {
      console.error("Error fetching cart data:", error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <UrbanContext.Provider
      value={{
        product,
        setProduct,
        fetchCart,
        totalSum,
        totalNumber,
        isModalOpen,
        handleCloseModal,
        removeItemfromCart,
        addedToCart,
        handleOpenModal,
        setIsModalOpen,
        removedFromCart,
        addToCart,
        data,
        setData,
        auth,
        setAuth,
        productData,
        setProductData,
        isClickedAdd,
        isClickedRemoved,
        setIsClickedRemove,
        setIsClickedAdd,
      }}
    >
      {children}
    </UrbanContext.Provider>
  );
};

export { UrbanProvider, UrbanContext };
