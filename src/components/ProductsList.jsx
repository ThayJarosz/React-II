import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import SearchBar from './SearchBar';

const ProductsList = ({ addToCart }) => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    // Dados locais
    const localData = {
        "status": {
            "code": 200,
            "message": null
        },
        "response": [
            {
                "product": {
                    "productId": "6",
                    "productName": "Millets, Grains & Flours",
                    "productImage": "https://d8kcpnmmec91a.cloudfront.net/categories/7.png",
                    "wholeSale": false,
                    "retail": true,
                    "orderIndex": 1,
                    "price": 100
                }
            },
            {
                "product": {
                    "productId": "7",
                    "productName": "Millets, Grains & Flours",
                    "productImage": "https://d8kcpnmmec91a.cloudfront.net/categories/2.png",
                    "wholeSale": false,
                    "retail": true,
                    "orderIndex": 2,
                    "price": 50
                }
            }
        ]
    };

    useEffect(() => {
        // Use dados locais em vez de buscar de uma API
        setData(localData.response);
    }, []);


    const handleSearchChange = (query) => {
        setSearchQuery(query);

        const updatedData = query
            ? data.filter(
                (item) =>
                    item.product.productName.toLowerCase().includes(query.toLowerCase())
            )
            : data;

        setFilteredData(updatedData);
    };


    const displayData = searchQuery ? filteredData : data;

    return (
        <section className="bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100  flex flex-col items-center py-10 bg-gray-100">
            <div className='w-full pb-10'>
                <SearchBar onSearchChange={handleSearchChange} />
            </div>
            <div className=" gap-4 px-10 mx-auto max-w-7xl">
                <div className='grid grid-cols-4 gap-4' >
                    {displayData.map((item, index) => (
                        <ProductCard
                            key={index}
                            index={index}
                            imageUrl={item.product.productImage}
                            productName={item.product.productName}
                            price={item.product.price}
                            addToCart={addToCart}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProductsList