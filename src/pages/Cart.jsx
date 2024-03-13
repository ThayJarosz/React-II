import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import Navbar from '../components/CartNavbar.jsx'
import CartContext from '../contexts/CartContext.jsx';

const Cart = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const { cartItems } = useContext(CartContext);

  if (!isLoggedIn) {
    return <p>Você precisa estar logado para acessar o carrinho.</p>;
  }
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <>
      <div className='bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 h-[1620px]'>
        <Navbar />

        <div className=" w-fit mx-16 p-6 bg-white shadow-md rounded-md my-20  font-poppins">
          <h1 className="text-3xl font-bold mb-6">Carrinho</h1>
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Itens:</h2>
            {cartItems.length > 0 ? (
              <>
                <ul>
                  {cartItems.map((item, index) => (
                    <li key={index}>
                      <img src={item.imageUrl} alt={item.productName} />
                      <p>{item.productName} - ${item.price}</p>
                    </li>
                  ))}
                  <li>Total: ${totalPrice}</li>
                </ul>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Finalizar Compra:</h2>
                  <form>
                    <div>
                      <label>
                        <input type="radio" name="paymentMethod" value="card" />
                        Cartão
                      </label>
                    </div>
                    <div>
                      <label>
                        <input type="radio" name="paymentMethod" value="pix" />
                        Pix
                      </label>
                    </div>
                    <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
                      Finalizar Compra
                    </button>
                  </form>
                </section>
              </>
            ) : (
              <p>Seu carrinho está vazio.</p>
            )}
          </section>
        </div>
      </div>
    </>
  )
}

export default Cart