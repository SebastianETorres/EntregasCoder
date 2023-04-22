import cart from './img/Carrito.png'
const CartWidget = () => {
    return (
        <div className='cart'>
            <img src={cart} alt="cart-widget" className='cart-img'/>
            <span className="cart-counter">0</span>
        </div>
    );
}

export default CartWidget;
