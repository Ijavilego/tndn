export type CartItem = product & {
  quantityProduct: number;
};

export type product = {
  currency: string;
  description: string;
  dimensions: dimensionsProduct;
  id: string;
  imageUrl: string;
  images: imageProduct;
  link: string;
  name: string;
  price: string;
  quantity: string;
  sku: string;
  units: unitsProducts;
};

export type productId = {
  currency: string;
  description: string;
  dimensions: dimensionsProduct;
  id: string;
  imageUrl: string;
  images: imageProduct;
  link: string;
  name: string;
  price: string;
  quantity: string;
  sku: string;
  units: unitsProducts;
};

type dimensionsProduct = {
  height: string;
  length: string;
  weight: string;
  width: string;
};

type imageProduct = {
  ecartapiUrl: string;
  id: string;
  url: string;
};

type unitsProducts = {
  height: string;
  length: string;
  weight: string;
  width: string;
};
