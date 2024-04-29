import axios from "axios";
import { useState } from "react";
import { product, productId } from "../types";

const useConsumer = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const apiUrl = import.meta.env.VITE_API_URL;
  const [products, setProducts] = useState<product[]>([]);

  const headers = { Authorization: `Bearer ${apiKey}` };

  const httpGet = async (): Promise<any> => {
    await axios
      .get(apiUrl, { headers })
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => console.log("error", error));
  };

  const getProductId = async (id: string): Promise<any> => {
    await axios
      .get(`${apiUrl}/${id}`, { headers })
      .then((response) => {
        localStorage.setItem("product", JSON.stringify(response.data.product));
      })
      .catch((error) => console.log("errorProductId", error));
  };

  return {
    httpGet,
    getProductId,
    products,
  };
};
export default useConsumer;
