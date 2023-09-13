import PropTypes from 'prop-types'



import './Cart.css'

const Cart = ({cart}) => {
    return (
        <div>
            <h4>Add cart:{cart.length}</h4>
            <div className='cart'>
                {
                    cart.map(bottle=><img src={bottle.img} key={bottle.id}></img>)
                }
            </div>
        </div>
    );
};
Cart.propTypes={
    cart:PropTypes.array.isRequired
}
export default Cart;