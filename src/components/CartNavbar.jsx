import React from 'react'
import logo from '../assets/logo.png'

const CartNavbar = () => {
    return (
        <header className="antialiased">
            <nav className="bg-white flex items-center justify-between border-b-2 border-black drop-shadow-xl px-4 lg:px-6 py-2.5 ">
                <div className="flex flex-wrap justify-between items-center">
                    <div className="flex justify-start items-center pl-10">
                        <a href="/products" className="flex ">
                            <img src={logo} className="h-24 w-24" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap font-poppins dark:text-white">Carrinho</span>
                        </a>
                    </div>

                </div>

              

            </nav>
        </header>



    )
}

export default CartNavbar