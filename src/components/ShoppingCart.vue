<template>
  <div>
      <h1>Shopping Cart</h1>
      <ul>
          <li v-for="product in products" :key="product.id">
              {{ product.title}} - {{  $filters.currency(product.price)}} = {{ product.quantity}}}
          </li>
      </ul>
      <p> Total : {{ $filters.currency(total) }}</p>
      <button @click="checkout">Checkout</button>
      <p v-if="checkoutStatus">{{$store.state.checkoutStatus}}</p>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions} from "vuex"

export default {
    computed: {
        ...mapGetters({
            products: 'cartProduct',
            total : 'cartTotal'
        }),
        ...mapState({
            checkoutStatus: state => state.cart.checkoutStatus
        })
    },
    methods: {
        ...mapActions(['checkout'])
    }
}
</script>

<style>

</style>