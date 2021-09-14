<template>
  <div class="app">
    <product-list></product-list>
    <hr>
    <shopping-cart></shopping-cart>
  </div>
</template>

<script>
import ProductList from './components/ShoppingList.vue';
import ShoppingCart from '@/components/ShoppingCart.vue';
export default {
  name: 'app',
  components : {
    ProductList, ShoppingCart
  }
}
</script>