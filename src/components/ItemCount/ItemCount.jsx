import React, { useState } from "react";
const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const aumento = () => {
        if(quantity<stock){
            setQuantity(quantity + 1)
        }
    }

    const reduccion = () => {
        if(quantity > 1){
            setQuantity(quantity - 1)
        }
    }

    return(
        <div className='Contador'>
            <div className='Controles'>
                <button className="Boton" onClick={reduccion}>-</button>
                <h4 className="Numero">{quantity}</h4>
                <button className="Boton" onClick={aumento}>+</button>
            </div>
            <div>
                <button className="Boton" onClick={() => onAdd(quantity)} disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default ItemCount;