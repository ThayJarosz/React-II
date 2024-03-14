import React from 'react';

const ProductDetailsModal = ({ productName, price, description, onClose, author }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="bg-white p-8 rounded shadow-lg z-10">
        <button 
          onClick={onClose} 
          className="float-right px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-500"
        >
          Fechar
        </button>
        <h2 className="text-2xl font-bold mb-4">{productName}</h2>
        <p className="mb-2">Preço: R${price}</p>
        <p>Descrição: {description}</p>
        <p>Autor:{author}</p>
      </div>
    </div>
  );
};

export default ProductDetailsModal;