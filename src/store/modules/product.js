import shop from "@/api/shop";

export default {
    state : {
         //=data
        items: [],
    },
    getters : {
         //=computed properties
        availableProducts(state) {
             return state.items.filter(product => product.inventory > 0)
         },
        productInStock(){
            return (product) => {
            return product.inventory > 0
            }
        }
    },
    mutations : {
        setProducts(state, products){
            //products is payload
            state.items = products
          },
         
        decrementItemQuantity(state, product){
            product.inventory--
        },
    },
    actions :{
        fetchProducts({commit}){
          //make the caall
          //call setProducts mutation
          return new Promise((resolve) => {
            shop.getProducts(products => {
              commit('setProducts', products)
            })
            resolve()
          })
        },
    }
}