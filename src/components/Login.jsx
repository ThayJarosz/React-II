import React from 'react';
import { useNavigate } from 'react-router-dom';
import bgimage from '../assets/bgimage.jpg';
import logo from '../assets/logo.png';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

import { toast } from 'react-toastify';

const Login = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const enteredEmail = e.target.elements.email.value;
        const enteredPassword = e.target.elements.password.value;

        if (enteredEmail === 'thayjarosz@gmail.com' && enteredPassword === '123') {
            login();
            toast.success('Você está logado')
            navigate('/products');
        } else {
            toast.error('Login Invalido!', { position: toast.POSITION.TOP_CENTER });

            console.log('Login Invalido!');
        }
    };

    return (<>
        <section class="h-96 lg:h-screen font-poppins">
            <div class="relative z-10 flex justify-center h-screen py-7 lg:py-16 dark:bg-gray-800 2xl:py-44">
                <div
                    class="absolute top-0 bottom-0 left-0 w-full h-full bg-gray-50 dark:bg-gray-900 lg:bottom-0 lg:h-auto lg:w-full">
                    <div class="absolute inset-0 lg:bg-[#00000066] "></div>
                    <img src={bgimage}
                        alt="" class=" object-cover w-full h-full  lg:block" />
                </div>
                <div className='z-50 absolute top-4 left-4 w-72 h-72'>
                    <img src={logo} alt="" className='filter invert' />
                </div>

                <div>
                    <div class="absolute inset-0 bg-black opacity-30"></div>

                </div>
                <div class="flex items-center justify-center">
                    <div class="relative max-w-6xl px-4 mx-auto">
                        <div class="max-w-xl mx-auto lg:max-w-5xl">
                            <div class="flex flex-wrap items-center -mx-4">
                                <div class="hidden w-full px-6 mb-16 lg:w-3/5 lg:mb-0 lg:block">
                                    <h2
                                        class="text-4xl font-bold leading-loose text-left text-gray-100 dark:text-gray-300 mb-9 lg:text-6xl">
                                        Bem vindo à livraria Mundo Encantado!</h2>
                                    <p class="text-lg text-left text-gray-200 dark:text-gray-300 ">Sua loja de livros!</p>
                                </div>
                                <div class="w-full px-4 lg:w-2/5">
                                    <div class="p-6 shadow-md lg:p-9 bg-gray-50 dark:bg-gray-900 rounded-lg">
                                        <h2 class="mb-4 text-xl font-bold lg:mb-8 lg:text-3xl dark:text-gray-400">
                                            Faça seu login</h2>
                                        <form onSubmit={handleSubmit} action="" class="p-0 m-0">
                                            <div>
                                                <label for=""
                                                    class="text-lg font-medium text-gray-700 dark:text-gray-400">Email:</label>
                                                <input type="email"
                                                    class="w-full px-4 py-3 mt-3 bg-gray-200 rounded-lg dark:text-gray-400 dark:bg-gray-800 "
                                                    name="email" placeholder="Enter your email" />
                                            </div>
                                            <div class="mt-5">
                                                <div>
                                                    <label for=""
                                                        class="text-lg font-medium text-gray-700 dark:text-gray-400 ">Senha:</label>
                                                    <div class="relative flex items-center mt-2">
                                                        <input type="password"
                                                            class="w-full px-4 py-3 bg-gray-200 rounded-lg dark:text-gray-400 dark:bg-gray-800 "
                                                            name="password" placeholder="Enter password" />
                                                    </div>
                                                </div>
                                            </div>
                                            <button
                                                class="w-full px-4 py-3 mt-8 font-semibold text-gray-200 bg-blue-500 rounded-lg dark:bg-blue-500 hover:text-blue-200 "
                                                type="submit">LOGIN</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}

export default Login