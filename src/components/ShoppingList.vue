<template>
  <div>
      <h1>Product List</h1>
      <img v-if="loading" src="https://i.imgur.com/JfPpwOA.gif" />
      <ul v-else>
          <li v-for="product in products" :key="product.id"> {{product.title }} - {{$filters.currency(product.price) }}
              <button :disabled="!productInStock(product)" @click="addProductToCart(product)">Add To Cart</button>
          </li>
      </ul>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions} from "vuex"
export default {
    data(){
        return {
            loading: false,
            productIndex: 1
        }
    },

    computed : {
        ...mapState({
            products: state => state.products.items
        }),
        ...mapGetters({
            productInStock: 'productInStock'
        }),
    },

    created() {
        this.loading = true
        this.fetchProducts()
        .then(()=> this.loading = false)
    },
    methods: {
        ...mapActions({
            fetchProducts: 'fetchProducts',
            addProductToCart: 'addProductToCart'
        }),
       
    }
}
</script>

<style>

</style>