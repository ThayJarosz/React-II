import React, { useState } from 'react';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        birthDate: '',
        address: '',
        city: '',
        cep: '',
        reference: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode lidar com o envio do formulário, por exemplo, enviá-lo para o backend ou executar outras ações necessárias
        console.log(formData);
    };

    return (
        <section className="h-screen flex justify-center items-center bg-gray-100 dark:bg-gray-900">
            <div className="w-full max-w-lg">
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
                    <h2 className="text-2xl font-bold mb-4 text-center">Cadastre-se</h2>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Nome:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                            placeholder="Nome completo"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                            placeholder="Seu email"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="birthDate" className="block text-gray-700 text-sm font-bold mb-2">Data de Nascimento:</label>
                        <input
                            type="date"
                            id="birthDate"
                            name="birthDate"
                            value={formData.birthDate}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">Endereço:</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                            placeholder="Rua, número"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="city" className="block text-gray-700 text-sm font-bold mb-2">Cidade:</label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                            placeholder="Cidade"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="cep" className="block text-gray-700 text-sm font-bold mb-2">CEP:</label>
                        <input
                            type="text"
                            id="cep"
                            name="cep"
                            value={formData.cep}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                            placeholder="CEP"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="reference" className="block text-gray-700 text-sm font-bold mb-2">Ponto de Referência:</label>
                        <input
                            type="text"
                            id="reference"
                            name="reference"
                            value={formData.reference}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                            placeholder="Ponto de referência"
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-blue-600"
                        >
                            Cadastrar
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Register;
