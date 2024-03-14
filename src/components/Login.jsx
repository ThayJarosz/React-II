import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Importe o useNavigate
import bgimage from '../assets/bgimage.jpg';
import { AuthContext } from '../contexts/AuthContext';
import { toast } from 'react-toastify';

const Login = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate(); // Inicialize o hook useNavigate

    const handleSubmit = (e) => {
        e.preventDefault();

        const enteredEmail = e.target.elements.email.value;
        const enteredPassword = e.target.elements.password.value;

        if (enteredEmail === 'thayjarosz@gmail.com' && enteredPassword === '123') {
            login();
            toast.success('Você está logado');
            navigate('/products'); // Use o hook useNavigate para redirecionar para '/products'
        } else {
            toast.error('Login Inválido!', { position: toast.POSITION.TOP_CENTER });
            console.log('Login Inválido!');
        }
    };

    return (
        <>
            <section className="h-screen font-poppins">
                <div className="relative z-10 flex justify-center h-screen py-7 lg:py-16 dark:bg-gray-800 2xl:py-44">
                    <div className="absolute top-0 bottom-0 left-0 w-full h-full bg-gray-50 dark:bg-gray-900 lg:bottom-0 lg:h-auto lg:w-full">
                        <div className="absolute inset-0 lg:bg-[#00000066] "></div>
                        <img src={bgimage} alt="" className="object-cover w-full h-full  lg:block" />
                    </div>
                    <div>
                        <div className="absolute inset-0 bg-black opacity-30"></div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="relative max-w-6xl px-4 mx-auto">
                            <div className="max-w-xl mx-auto lg:max-w-5xl">
                                <div className="flex flex-wrap items-center -mx-4">
                                    <div className="hidden w-full px-6 mb-16 lg:w-3/5 lg:mb-0 lg:block">
                                        <h2 className="text-4xl font-bold leading-loose text-left text-gray-100 dark:text-gray-300 mb-9 lg:text-6xl">
                                            Bem vindo à livraria Mundo Encantado!
                                        </h2>
                                        <p className="text-lg text-left text-gray-200 dark:text-gray-300 ">
                                            Sua loja de livros!
                                        </p>
                                    </div>
                                    <div className="w-full px-4 lg:w-2/5">
                                        <div className="p-6 shadow-md lg:p-9 bg-gray-50 dark:bg-gray-900 rounded-lg">
                                            <h2 className="mb-4 text-xl font-bold lg:mb-8 lg:text-3xl dark:text-gray-400">
                                                Faça seu login
                                            </h2>
                                            <form onSubmit={handleSubmit} action="" className="p-0 m-0">
                                                <div>
                                                    <label
                                                        htmlFor=""
                                                        className="text-lg font-medium text-gray-700 dark:text-gray-400">
                                                        Email:
                                                    </label>
                                                    <input
                                                        type="email"
                                                        className="w-full px-4 py-3 mt-3 bg-gray-200 rounded-lg dark:text-gray-400 dark:bg-gray-800 "
                                                        name="email"
                                                        placeholder="Enter your email"
                                                    />
                                                </div>
                                                <div className="mt-5">
                                                    <div>
                                                        <label
                                                            htmlFor=""
                                                            className="text-lg font-medium text-gray-700 dark:text-gray-400 ">
                                                            Senha:
                                                        </label>
                                                        <div className="relative flex items-center mt-2">
                                                            <input
                                                                type="password"
                                                                className="w-full px-4 py-3 bg-gray-200 rounded-lg dark:text-gray-400 dark:bg-gray-800 "
                                                                name="password"
                                                                placeholder="Enter password"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <button
                                                    className="w-full px-4 py-3 mt-8 font-semibold text-gray-200 bg-blue-500 rounded-lg dark:bg-blue-500 hover:text-blue-200 "
                                                    type="submit">
                                                    LOGIN
                                                </button>
                                            </form>
                                            {/* Adicione um link ou botão para o cadastro */}
                                            <Link
                                                to="/register"
                                                className="block mt-4 text-center text-blue-500 hover:text-blue-700">
                                                Não tem uma conta? Cadastre-se
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;

