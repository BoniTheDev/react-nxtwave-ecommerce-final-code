import Header from '../Header'
import CartListView from '../CartListView'

import CartSummary from '../CartSummary'
import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const showEmptyCartView = cartList.length === 0

      return (
        <>
          <Header />
          {showEmptyCartView ? (
            <EmptyCartView />
          ) : (
            <div className="cart-container">
              <div className="cart-content-container">
                <h1 className="cart-heading">My Cart</h1>
                <CartListView />
                <CartSummary />
              </div>
            </div>
          )}
        </>
      )
    }}
  </CartContext.Consumer>
)

export default Cart
