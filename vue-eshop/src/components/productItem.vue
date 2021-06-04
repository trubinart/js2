<template>
  <div class="card" style="width: 18rem; margin: 5px; ">
    <img src="http://placehold.it/200x150" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title product-name">{{ name }}</h5>
      <p class="card-text product-price">{{ price }}</p>
      <a href="#" class="btn btn-primary" :product = "product"
          @click="$emit('add-basket-item', product)" >В корзину</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "productItem",
  props: {
    id: Number,
    name: String,
    price: Number,
    product: Object,
  },
}
</script>

<style scoped>
</style>