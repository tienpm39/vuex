import shop from "@/api/shop";

export default {
    state : {
        //{id, quantity}
        items: [],
        checkoutStatus : null
    },
    getters : {
        cartProduct(state,getters, rootState){
            return state.items.map(cartItem => {
              const product = rootState.products.items.find(product => product.id === cartItem.id)
              return {
                title: product.title,
                price: product.price,
                quantity: cartItem.quantity
              }
            })
          },
        cartTotal(state,getters) {
            return getters.cartProduct.reduce((total,product)=> total + product.price * product.quantity, 0)
        },
    },
    mutations : {
        pushProductToCart(state,productId) {
            state.items.push({
              id: productId,
              quantity: 1
            })
          },
        incrementItemQuantity(state, cartItem) {
            cartItem.quantity++
        },
        setCheckoutStatus(state, status) {
            state.checkoutStatus = status
          },
        emptyCart(state) {
            state.items = []
        }
    },
    actions: {
        addProductToCart({state,getters,commit}, product){
            if(getters.productInStock(product)) {
              const cartItem = state.cart.find(item => item.id === product.id)
               //find cart item
            if(!cartItem){
              //push product to cart
              commit('pushProductToCart', product.id)
            } else {
              // increment Item quantity
              commit('incrementItemQuantity', cartItem)
            }
            commit('decrementItemQuantity', product)
            }
        },
        checkout({state, commit}) {
            shop.buyProducts(
              state.cart, () => {
                commit('emptyCart')
                commit('setCheckoutStatus', 'success')
              },
              () => {
                commit('setCheckoutStatus', 'fail')
              }
            )
        }

    }
}