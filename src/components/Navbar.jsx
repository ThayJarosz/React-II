import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {

    const navigate = useNavigate();


    const handleClick  =  () => {
        navigate('/cart'); 
    }

    return (
        <header className="antialiased">
            <nav className="bg-white flex items-center justify-between border-b-2 border-black drop-shadow-xl px-4 lg:px-6 py-2.5 ">
                <div className="flex flex-wrap justify-between items-center">
                    <div className="flex justify-start items-center pl-10">
                        <a href="/products" className="flex ">
                            <img src={logo} className="h-24 w-24" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap font-poppins dark:text-white">Livraria Mundo Encantado</span>
                        </a>
                    </div>

                </div>

                <div className='mr-40'>
                        <button onClick ={handleClick} className='bg-blue-700  text-white font-poppins px-5 py-2 rounded-md'>Carrinho</button>
                </div>

            </nav>
        </header>



    )
}

export default Navbar