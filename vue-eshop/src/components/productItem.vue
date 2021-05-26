<template>
  <div class="card" style="width: 18rem;">
    <img src="http://placehold.it/200x150" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title product-name" :id="id">{{name}}</h5>
      <p class="card-text product-price">{{price}}</p>
      <a href="#" class="btn btn-primary product-button" :id="id">В корзину</a>
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
  }
}

</script>

<style scoped>

</style>