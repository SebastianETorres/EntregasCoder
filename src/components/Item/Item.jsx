import './Item.css';
import { Link } from 'react-router-dom';
const Item =({id, nombre, img, precio, stock, descripcion}) => {

    return (
        <div className="CardItemContainer">
            <article className="CardItem">
                <header className="Header">
                    <h2 className="ItemHeader">
                        {nombre}
                    </h2>
                </header>
                <picture>
                    <img src={img} alt={nombre} className="ItemImg" />
                </picture>
                <section>
                    <p className="Info">
                        Precio: ${precio}
                    </p>
                    <p className='Info'>
                        Descripción: {descripcion}
                    </p>
                    <p className="Info">
                        Stock Disponible: {stock}
                    </p>
                </section>
                <footer className="ItemFooter">
                    <Link to={`/item/${id}`} className="Option">Ver Detalles de Cursada</Link>
                </footer>
            </article>
        </div>
    )
}

export default Item