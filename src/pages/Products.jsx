import React, { useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import ProductsList from '../components/ProductsList.jsx';
import ProductDetails from '../components/ProductDetails.jsx'; // Importe o componente ProductDetails

const Products = ({ addToCart }) => {
  const [selectedProduct, setSelectedProduct] = useState(null); // Adicione o estado local selectedProduct

  // Manipulador de clique do produto
  const handleProductClick = (productName, price, description) => {
    setSelectedProduct({ productName, price, description });
  };

  return (
    <>
      <Navbar />
      {/* Renderize ProductDetails se houver um produto selecionado */}
      {selectedProduct ? (
        <ProductDetails
          productName={selectedProduct.productName}
          price={selectedProduct.price}
          description={selectedProduct.description}
        />
      ) : (
        <>
          {/* Renderize ProductsList se nenhum produto estiver selecionado */}
          <ProductsList addToCart={addToCart} onProductClick={handleProductClick} />
        </>
      )}
    </>
  );
}

export default Products;
