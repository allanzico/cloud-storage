import React from "react";
import { motion } from "framer-motion/dist/framer-motion";

const Modal = ({ selectedImg, setSelectedImg }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) setSelectedImg(null);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      
      className="backdrop"
      onClick={handleClick}
    >
      <img src={selectedImg} alt="full-img" />
    </motion.div>
  );
};

export default Modal;
