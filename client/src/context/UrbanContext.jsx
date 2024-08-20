import { createContext, useContext, useState, useEffect, useMemo } from "react";
import axios from "../Api/axios";

const UrbanContext = createContext();

const UrbanProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productData, setProductData] = useState([]);
  const [addedToCart, setAddedToCart] = useState(false);
  const [isClickedAdd, setIsClickedAdd] = useState(false);
  const [isClickedRemoved, setIsClickedRemove] = useState(false);

  const [removedFromCart, setRemovedFromCart] = useState(false);

  const [data, setData] = useState([]);
  const [product, setProduct] = useState([]);
  const [auth, setAuth] = useState({});

  const totalSum = useMemo(() => {
    return data?.reduce((sum, item) => Number(sum) + Number(item.total), 0);
  }, [data]);

  const totalNumber = useMemo(() => {
    return data?.reduce((sum, item) => Number(sum) + Number(item.quantity), 0);
  }, [data]);

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
      const res = await fetch("https://urbantrove.adaptable.app/api/v1/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
        credentials: "include",
      });
      const data = await res.json();
      if (data.code == 200) {
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
      const response = await axios.delete("/cart", {
        data: { id },
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      console.log(response.status);
      if (response.status == 200) {
        await fetchCart();

        setRemovedFromCart(true);
        setIsClickedRemove(false);
      }
      setTimeout(() => {
        setRemovedFromCart(false);
      }, 2000);
    } catch (error) {
      setIsClickedRemove(false);
    }
  };

  const fetchCart = async () => {
    const response = await axios.get("/cart", {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    const data = response?.data?.data?.cart;
    setData(data);
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <UrbanContext.Provider
      value={{
        product,
        setProduct,
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

const useUrban = () => {
  const context = useContext(UrbanContext);
  if (context === undefined) {
    throw new Error("useUrban must be used within an UrbanProvider");
  }
  return context;
};

export { UrbanProvider, useUrban };
