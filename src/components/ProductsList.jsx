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
                    "productName": "A sutil arte de ligar o foda-se",
                    "productImage": "/imgauto1.jpg",
                    "wholeSale": false,
                    "retail": true,
                    "orderIndex": 1,
                    "price": 25.90
                }
            },
            {
                "product": {
                    "productId": "7",
                    "productName": "Ame-se e cure a sua vida",
                    "productImage": "/imgauto2.jpg",
                    "wholeSale": false,
                    "retail": true,
                    "orderIndex": 2,
                    "price": 39.90
                }
            },
            {
                "product": {
                    "productId": "8",
                    "productName": "Você pode curar a sua vida",
                    "productImage": "/imgauto3.jpg",
                    "wholeSale": false,
                    "retail": true,
                    "orderIndex": 2,
                    "price": 39.90
                }
            },
            {
                "product": {
                    "productId": "9",
                    "productName": "Por lugares incríveis",
                    "productImage": "/imgrom1.jpg",
                    "wholeSale": false,
                    "retail": true,
                    "orderIndex": 2,
                    "price": 29.90
                }
            },
            {
                "product": {
                    "productId": "10",
                    "productName": "Todas as suas imperfeições",
                    "productImage": "/imgrom2.jpg",
                    "wholeSale": false,
                    "retail": true,
                    "orderIndex": 2,
                    "price": 39.90
                }
            },
            {
                "product": {
                    "productId": "11",
                    "productName": "Como eu era antes de você",
                    "productImage": "/imgromc3.jpg",
                    "wholeSale": false,
                    "retail": true,
                    "orderIndex": 2,
                    "price": 35.90
                }
            },
            {
                "product": {
                    "productId": "12",
                    "productName": "Cidade de vidro",
                    "productImage": "/imgfant1.png",
                    "wholeSale": false,
                    "retail": true,
                    "orderIndex": 2,
                    "price": 45.90
                }
            },
            {
                "product": {
                    "productId": "13",
                    "productName": "Cidade dos ossos",
                    "productImage": "/imgfant2.jpg",
                    "wholeSale": false,
                    "retail": true,
                    "orderIndex": 2,
                    "price": 45.90
                }
            },
            {
                "product": {
                    "productId": "14",
                    "productName": "Princesa mecânica",
                    "productImage": "/imgfant3.jpg",
                    "wholeSale": false,
                    "retail": true,
                    "orderIndex": 2,
                    "price": 39.90
                }
            },
            {
                "product": {
                    "productId": "15",
                    "productName": "Carrie a estranha",
                    "productImage": "/imgter1.jpg",
                    "wholeSale": false,
                    "retail": true,
                    "orderIndex": 2,
                    "price": 49.90
                }
            },
            {
                "product": {
                    "productId": "16",
                    "productName": "Doutor sono",
                    "productImage": "/imgter2.jpg",
                    "wholeSale": false,
                    "retail": true,
                    "orderIndex": 2,
                    "price": 45.90
                }
            },
            {
                "product": {
                    "productId": "17",
                    "productName": "It a coisa",
                    "productImage": "/imgter3.jpg",
                    "wholeSale": false,
                    "retail": true,
                    "orderIndex": 2,
                    "price": 55.90
                }
            }
        ]
    };

    useEffect(() => {
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