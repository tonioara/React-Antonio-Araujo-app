import React, { useState, useContext } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../service/firebase';
import { CartContext } from '../context/CartContext';
import CartVacio from './CartVacio';
import { Link } from 'react-router-dom';
import '../Styles/Checkout.css';
import { useForm } from 'react-hook-form';


const CheckoutFORM = () => {

    
    
    const [orderId, setOrderId] = useState(null)
    
    const { cart, clearCart, getTotalPrice } = useContext(CartContext)
    const {register,handleSubmit, formState:{errors},getValues}=useForm()

    

    const finalizarCompra = (dataForm) => {
       
       
       
        let order = {
            comprador:{
                name: dataForm.name,
                lastname: dataForm.lastname,
                address: dataForm.address,
                email: dataForm.email
            },
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
                <form onSubmit={handleSubmit(finalizarCompra)}>

                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                {...register("name", { required: true, minLength: 2, maxLength: 30, pattern: /^[A-Za-z]+$/i })}
            
                            />
                            {errors?.name?.type === "required" && <span  style={{color:'red'}}>Por favor complete el campo.</span>}
                            {errors?.name?.type === "minLength" && <span  style={{color:'red'}}>El nombre debe contener mínimo 3 caracteres.</span>}
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="apellido" className="form-label">Apellido</label>
                            <input
                                type="text"
                                className="form-control"
                                name="lastname"
                                {...register("lastname", { required: true, minLength: 2, maxLength: 30, pattern: /^[A-Za-z]+$/i })}
                            />
                            {errors?.lastname?.type === "required" && <span  style={{color:'red'}}>Por favor complete el campo.</span>}
                            {errors?.lastname?.type === "minLength" && <span  style={{color:'red'}}>El apellido debe contener mínimo 2 caracteres.</span>}
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="direccionEnvio" className="form-label">Dirección de Domicilio</label>
                        <input
                            type="text"
                            className="form-control"
                            name="address"
                            {...register("address", { required: true, minLength: 5, maxLength: 100 })}
                        />
                        {errors?.address?.type === "required" && <span  style={{color:'red'}}>Por favor complete el campo.</span>}
                        {errors?.address?.type === "minLength" && <span  style={{color:'red'}}>La dirección debe contener mínimo 10 caracteres.</span>}
                        {errors?.address?.type === "maxLength" && <span  style={{color:'red'}}>La dirección es demasiado larga.</span>}
                    </div>

                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="mail" className="form-label">Correo Electrónico</label>
                            <input
                                type="email"
                                className="form-control"
                                name="email" 
                                {...register("email", { required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })}
                            />
                             {errors?.email?.type === "required" && <span  style={{color:'red'}}>Por favor complete el campo.</span>}
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="mailConfirmacion" className="form-label">Confirmar Correo</label>
                            <input
                                type="email"
                                className="form-control"
                                name="mailConfirm"
                                {...register("mailConfirm", { 
                                    required:true, validate:{equalsMails: mail2 => mail2 === getValues().email
                                }})}
                            />
                                {errors?.mailConfirm?.type === "required" && <span  style={{color:'red'}}>Por favor complete el campo.</span>}
                                {errors?.mailConfirm?.type === "equalsMails" && <span  style={{color:'red'}}>Los correos electrónicos no coinciden.</span>}
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

export default CheckoutFORM;