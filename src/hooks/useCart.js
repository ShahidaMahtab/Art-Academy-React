import React, { useState } from "react";

const useCart = () => {
  const [cart, setCart] = useState([]);
  const handleAddToCart = (service) => {
    const checkExists = cart.find(
      (newService) => service.key === newService.key
    );
    if (checkExists) {
      return;
    }
    const newCart = [...cart, service];
    setCart(newCart);
    console.log(cart);
  };
  return {
    handleAddToCart,
    cart,
    setCart,
  };
};

export default useCart;
