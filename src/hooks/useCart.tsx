import { useState, useEffect, useMemo } from "react";
import type { product, CartItem } from "../types";

export const useCart = () => {
  const initialCart = (): CartItem[] => {
    const localStorageCart = localStorage.getItem("cart");
    return localStorageCart ? JSON.parse(localStorageCart) : [];
  };

  const [cart, setCart] = useState(initialCart);

  const MIN_ITEMS = 1;
  const MAX_ITEMS = 5;

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(item: product) {
    const itemExists = cart.findIndex((product) => product.id === item.id);
    if (itemExists >= 0) {
      // existe en el carrito
      if (cart[itemExists].quantityProduct >= MAX_ITEMS) return;
      const updatedCart = [...cart];
      updatedCart[itemExists].quantityProduct++;
      setCart(updatedCart);
    } else {
      const newItem: CartItem = { ...item, quantityProduct: 1 };
      setCart([...cart, newItem]);
    }
  }

  function removeFromCart(id: product["id"]) {
    setCart((prevCart) => prevCart.filter((product) => product.id !== id));
  }

  function decreaseQuantity(id: product["id"]) {
    const updatedCart = cart.map((item) => {
      if (item.id === id && item.quantityProduct > MIN_ITEMS) {
        return {
          ...item,
          quantityProduct: item.quantityProduct - 1,
        };
      }
      return item;
    });
    setCart(updatedCart);
  }

  function increaseQuantity(id: product["id"]) {
    const updatedCart = cart.map((item) => {
      if (item.id === id && item.quantityProduct < MAX_ITEMS) {
        return {
          ...item,
          quantityProduct: item.quantityProduct + 1,
        };
      }
      return item;
    });
    setCart(updatedCart);
  }

  function clearCart() {
    setCart([]);
  }

  // State Derivado
  const isEmpty = useMemo(() => cart.length === 0, [cart]);
  const cartTotal = useMemo(
    () =>
      cart.reduce((total, item) => {
        const price = Number(item.price);
        return total + item.quantityProduct * price;
      }, 0),
    [cart]
  );

  return {
    cart,
    addToCart,
    removeFromCart,
    decreaseQuantity,
    increaseQuantity,
    clearCart,
    isEmpty,
    cartTotal,
  };
};
