import { useState, useEffect } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import { useCart } from "./hooks/useCart";
import useConsumer from "./hooks/useConsummer";
import Modal from "./components/Modal";

function App() {
  const { httpGet, products } = useConsumer();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const {
    cart,
    addToCart,
    removeFromCart,
    decreaseQuantity,
    increaseQuantity,
    clearCart,
    isEmpty,
    cartTotal,
  } = useCart();

  useEffect(() => {
    httpGet();
  }, []);

  return (
    <>
      <Header
        cart={cart}
        removeFromCart={removeFromCart}
        decreaseQuantity={decreaseQuantity}
        increaseQuantity={increaseQuantity}
        clearCart={clearCart}
        isEmpty={isEmpty}
        cartTotal={cartTotal}
      />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestros productos</h2>

        <div className="row mt-5">
          {products && products.length > 0
            ? products.map((product: any) => (
                <Card
                  key={product.id}
                  setIsOpen={setIsOpen}
                  product={product}
                  addToCart={addToCart}
                />
              ))
            : null}
        </div>
      </main>

      {isOpen && <Modal setIsOpen={setIsOpen} />}

      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">
            Lorem ipsum dolor sit ?
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
