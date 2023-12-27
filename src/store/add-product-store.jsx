import React, { createContext, useState } from "react";

export const ProductData = createContext({
  addProductData: {},
});

const ProductDataProvider = ({ children }) => {
  const [data, setData] = useState({
       productName: '',
      productImage: '',
      productId: '',
      productManufacturer: '',
      productDescription: '',
      productQuantity: '',
      productCategory: '',
      productPrice: '',
  });

  const updateData = (newData) => {
    setData(newData);
  };

  return (
    <ProductData.Provider value={{ data, updateData }}>
      {children}
    </ProductData.Provider>
  );
};

export default ProductDataProvider;
