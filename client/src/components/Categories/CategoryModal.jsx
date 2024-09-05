"use client";
import { useContext, useEffect } from "react";
import { UrbanContext } from "../../context/UrbanContext";

const CategoryModal = ({ children }) => {
  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  const { handleCloseModal, isModalOpen } = useContext(UrbanContext);
  const handleClick = (e) => {
    e.stopPropagation();
  };
  const modalClass = isModalOpen ? "" : "hidden";

  return (
    <div
      className={modalClass}
      onClick={() => {
        handleCloseModal();
      }}
    >
      <div
        onClick={handleClick}
        className="absolute bg-white   shadow-xl "
        role="dialog"
        aria-modal="true"
      >
        <div>{children}</div>
      </div>
    </div>
  );
};

export default CategoryModal;
