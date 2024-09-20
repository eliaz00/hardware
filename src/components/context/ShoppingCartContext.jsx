import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext(null);

const getCartFromLocalStorage = () => {
  const cart = localStorage.getItem('cart');
  return cart ? JSON.parse(cart) : [];
};


export const ShoppingCartProvider = ({ children }) => {
  const [cart, setCart] = useState(getCartFromLocalStorage());

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);// para que los productos no se borren al cargar la pagina

  const addToCart = (product) => {// para agregar los productos al carrito
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const increaseQuantity = (productId) => { //para incrementar el producto al darle al +
    setCart(
      cart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (productId) => {// para disminuir el producto al darle -
    setCart(
      cart.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const eliminate = (productId) => { // para eliminar el producto
    setCart(cart.filter(product => product.id != productId));
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, increaseQuantity, decreaseQuantity, eliminate }}>
      {children}
    </CartContext.Provider>
  );

  // const [cart, setCart] = useState([]);

  // return (
  //   <CartContext.Provider value={[cart, setCart]}>
  //     {children}
  //   </CartContext.Provider>
  // );
};
