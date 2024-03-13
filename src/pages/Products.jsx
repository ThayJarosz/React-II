import React from 'react'
import Navbar from '../components/Navbar.jsx'
import ProductsList from '../components/ProductsList.jsx'
import SearchBar from '../components/SearchBar.jsx'


const Products = ({ addToCart }) => {
  return (
    <>
      <Navbar />
      {/* <SearchBar /> */}
      <ProductsList addToCart={addToCart} />
    </>
  )
}

export default Products