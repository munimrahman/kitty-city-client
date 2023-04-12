import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://kitty-city-server.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);
  return products;
};

export default useProducts;
