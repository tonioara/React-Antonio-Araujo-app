import Swal from 'sweetalert2';
import '../Styles/ItemCart.css';

const ItemCart = ({ item, removeItem }) => {

  const removeCartItem = () => {
    Swal.fire({
            title: '¿Estás seguro de eliminar este ítem?',
           html: `Vas a remover <strong>${item.name}</strong> del carrito.`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'rgba(136, 56, 56, 1)', 
            cancelButtonColor: '#bdbb4dff',
            confirmButtonText: 'Sí, ¡Eliminar!',
            cancelButtonText: 'No, Cancelar',
            background:'#1d1c1cff',
            color:'#fff',
            toast:true,
            position:'center',
        }).then((result) => {
           
            if (result.isConfirmed) {
                removeItem(item.id)
                Swal.fire({
                    title: 'Eliminado!',
                    text: `${item.name} ha sido removido.`,
                    icon: 'success',
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 1500,
                    background:'#1d1c1cff',
                    color:'#fff',

                });
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire({
                    title: 'Cancelado',
                    text: 'El ítem permanece en el carrito.',
                    icon: 'info',
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 1500,
                    background:'#1d1c1cff',
                    color:'#fff',

                });
            }
        });
  }
  return (
    <>
       <div className="cart-item">
      <div className="item-details">
     
     <img src={item.image} alt={item.name} className="item-img" />
     <div>
       
       <p className="item-name">{item.name}</p>
       <p className="item-house">Casa: {item.house}</p>
       <p className="item-price">Precio: ${item.price}</p>
       <p className="item-quantity">Cantidad: {item.quantity}</p>
     </div>
   </div>
   <button onClick={removeCartItem} className="btn-remove">
     Remover
   </button>
 </div>
    </>
 
  );
};

export default ItemCart;