import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartItem = ({ item }) => {
    const { removeItem } = useContext(CartContext);

    return (
        <div className="CardItem">
            <div className="ItemHeader">{item.nombre}</div>
            <div className="ItemImg">
                <img src={item.img} alt={`${item.img}`} />
            </div>
            <div className="Info">
                <p>{item.dias}</p>
                <p>Cantidad: {item.quantity}</p>
                <p>Precio Unitario: ${item.precio}</p>
                <hr />
                <h2>Subtotal: ${item.precio * item.quantity}</h2>
            </div>
            <div className="ItemFooter">
                <button className="Option" onClick={() => removeItem(item.id)}>🗑️</button>
            </div>
        </div>
    );
};

export default CartItem;
