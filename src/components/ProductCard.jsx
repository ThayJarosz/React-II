import React, { useContext } from 'react';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';
import image6 from '../assets/image6.jpg';
import image7 from '../assets/image7.jpg';
import CartContext from '../contexts/CartContext';

const pics = [image1, image2, image3, image4, image5, image6, image7];
const ProductCard = ({ index, imageUrl, productName, price }) => {
    const { addToCart } = useContext(CartContext);
  
    const handleAddToCart = () => {
        addToCart({ index, imageUrl: pics[index], productName, price });
    };
    
    return (
        <div className="">
            <div className="p-4 text-center bg-white rounded shadow dark:bg-gray-700">
                <div className="block mb-2" href="#">
                    <div className="relative z- overflow-hidden">
                        <div className="mb-5 overflow-hidden">
                            <img className="object-cover w-full mx-auto transition-all rounded h-72 hover:scale-110"
                                src={pics[index]}
                                alt="" />
                        </div>
                        <a href="#">
                            <h3 className="mb-2 text-xl font-bold dark:text-white"> {productName}</h3>
                            <p className="mb-2 text-lg dark:text-white">R${price}</p>
                        </a>

                        <button
                            onClick={handleAddToCart}
                            className="flex items-center justify-center mx-auto mt-4 font-bold text-center text-blue-500 dark:text-blue-300 group">
                            Adicionar ao carrinho
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="ml-2 transition-all group-hover:translate-x-2" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard