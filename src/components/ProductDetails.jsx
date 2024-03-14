import React from 'react';

const ProductDetails = ({ productName, price, description }) => {
  return (
    <div>
      <h2>{productName}</h2>
      <p>Preço: R${price}</p>
      <p>Descrição: {description}</p>
    </div>
  );
};

export default ProductDetails;
