import React, { useContext, useState } from 'react';
import CartContext from '../contexts/CartContext';
import ProductDetailsModal from './ProductDetailsModal';


const ProductCard = ({ index, imageUrl, productName, price, description, onProductClick, author }) => {
    const { addToCart } = useContext(CartContext);
    const [showModal, setShowModal] = useState(false);

    const handleAddToCart = () => {
        addToCart({ index, imageUrl, productName, price });
    };

    const handleProductClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };


    return (
        <div className="bg-green-200 p-4">
            <div className="text-center bg-white rounded shadow dark:bg-gray-700">
                <div className="block mb-2" href="#">
                    <div className="relative z- overflow-hidden">
                        <div className="mb-5 overflow-hidden">
                            <img className="object-cover w-full mx-auto transition-all rounded h-72 hover:scale-110"
                                src={imageUrl}
                                alt="" />
                        </div>
                        <a href="#">
                            <h3 className="mb-2 text-xl font-bold dark:text-white">{productName}</h3>
                            <p className="mb-2 text-lg dark:text-white">R${price}</p>
                        </a>
                        <div className="flex justify-center space-x-4">
                            <button
                                onClick={handleProductClick}
                                className="flex items-center justify-center font-bold text-center text-blue-500 dark:text-blue-300 group">
                                Ver detalhes
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="ml-2 transition-all group-hover:translate-x-2" viewBox="0 0 16 16">
                                    <path fillRule="evenodd"
                                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                </svg>
                            </button>
                            <button
                                onClick={handleAddToCart}
                                className="flex items-center justify-center font-bold text-center text-green-500 dark:text-green-300 group">
                                Adicionar ao Carrinho
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {showModal && (
                <ProductDetailsModal
                    productName={productName}
                    price={price}
                    description={description}
                    onClose={handleCloseModal}
                    author={author}
                />
            )}
        </div>
    );
};

export default ProductCard;