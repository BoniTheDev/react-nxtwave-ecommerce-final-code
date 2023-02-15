import CartItem from '../CartItem'
import CartContext from '../../context/CartContext'

import './index.css'

const CartListView = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, deleteCartItem} = value

      const removeItemFromList = id => {
        deleteCartItem(id)
      }

      return (
        <ul className="cart-list">
          {cartList.map(eachCartItem => (
            <CartItem
              key={eachCartItem.id}
              cartItemDetails={eachCartItem}
              removeItemFromSelectedList={removeItemFromList}
            />
          ))}
        </ul>
      )
    }}
  </CartContext.Consumer>
)

export default CartListView
