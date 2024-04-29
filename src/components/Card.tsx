import useConsumer from "../hooks/useConsummer";
import type { product } from "../types";

type ProductoProps = {
  product: product;
  addToCart: (item: product) => void;
  setIsOpen: any;
};

export default function Card({ product, addToCart, setIsOpen }: ProductoProps) {
  const { name, imageUrl, description, price, id } = product;
  const { getProductId } = useConsumer();

  const getDetail = async () => {
    await getProductId(id);
    setIsOpen(true);
  };

  return (
    <div className="col-md-6 col-lg-4 my-4 row align-items-center">
      <div className="col-4" onClick={() => getDetail()}>
        <img className="img-fluid" src={imageUrl} alt="imagen producto" />
      </div>
      <div className="col-8">
        <h3
          className="text-black fs-4 fw-bold text-uppercase"
          onClick={() => getDetail()}
        >
          {name}
        </h3>
        <p>{description}</p>
        <p className="fw-black text-primary fs-3">${price}</p>
        <button
          type="button"
          className="btn btn-dark w-100"
          onClick={() => addToCart(product)}
        >
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
}
