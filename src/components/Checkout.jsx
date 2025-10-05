import React, { useState, useContext } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../service/firebase';
import { CartContext } from '../context/CartContext';
import CartVacio from './CartVacio';
import { Link } from 'react-router-dom';
import '../Styles/Checkout.css';


const Checkout = () => {

    const [buyer, setBuyer] = useState({})
    const [checkMail, setCheckMail] = useState('')
    const [orderId, setOrderId] = useState(null)
    const [errorMsg, setErrorMsg] = useState('')
    const { cart, clearCart, getTotalPrice } = useContext(CartContext)

    
    const buyerData = (e) => {
        setBuyer(
            {
                ...buyer,
                [e.target.name]: e.target.value
            }
        )
        
        setErrorMsg(''); 
    }

    const finalizarCompra = (e) => {
        e.preventDefault()

        
        
        
        
        
        // if (!buyer.name || !buyer.lastname || !buyer.address || !buyer.email) {
            // setErrorMsg('Por favor, complete todos los campos de información de envío.');
            // return;
        // }
        

        
        if (buyer.email !== checkMail) {
            setErrorMsg('¡Atención! Los correos electrónicos ingresados no coinciden.');
            return;
        }

        
        let order = {
            comprador: buyer,
            compras: cart,
            total: getTotalPrice(),
            fecha: serverTimestamp()
        }

        const ventas = collection(db, "orders")

        addDoc(ventas, order)
            .then((res) => {
                setOrderId(res.id)
                clearCart()
            })
            .catch((error) => {
                console.error("Error al crear la orden:", error);
                setErrorMsg('Hubo un error al procesar tu compra. Intenta de nuevo.');
            })
    }


    if (!cart.length && !orderId) {
        return <CartVacio />
    }

    
    if (orderId) {
        return (
            <div className="container mt-5 mb-5 text-center">
                <div className="alert alert-success p-5" role="alert">
                    <h4 className="alert-heading">¡Compra Finalizada con Éxito!</h4>
                    <p>Tu orden ha sido registrada correctamente en la base de datos.</p>
                    <hr />
                    <p className="mb-0">El identificador de tu pedido es: <strong>{orderId}</strong></p>
                    <Link to='/' className="btn btn-primary mt-3">Volver al Inicio</Link>
                </div>
            </div>
        )
    }

    
    return (
        <div className="container mt-5 mb-5">
            <h2 className="text-center mb-4">Finalizar Compra - Datos de Envío</h2>
            <div className="card shadow-lg p-4">


                {errorMsg && (
                    <div className="alert alert-danger" role="alert">
                        {errorMsg}
                    </div>
                )}
               

                <form onSubmit={finalizarCompra}>

                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre</label>
                            <input
                                type="text"
                                className="form-control"
                                id="nombre"
                                name="name"
                                onChange={buyerData}
                                required
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="apellido" className="form-label">Apellido</label>
                            <input
                                type="text"
                                className="form-control"
                                id="apellido"
                                name="lastname"
                                onChange={buyerData}
                                required
                            />
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="direccionEnvio" className="form-label">Dirección de Domicilio</label>
                        <input
                            type="text"
                            className="form-control"
                            id="direccionEnvio"
                            name="address" 
                            onChange={buyerData}
                            required
                        />
                    </div>

                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="mail" className="form-label">Correo Electrónico</label>
                            <input
                                type="email"
                                className="form-control"
                                id="mail"
                                name="email" 
                                onChange={buyerData}
                                required
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="mailConfirmacion" className="form-label">Confirmar Correo</label>
                            <input
                                type="email"
                                className="form-control"
                                id="mailConfirmacion"
                                name="mailConfirm"
                                
                                onChange={(e) => setCheckMail(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-success btn-lg w-100 mt-3"
                    >
                        Completar Compra
                    </button>
                </form>
            </div>
        </div>
    )
};

export default Checkout;