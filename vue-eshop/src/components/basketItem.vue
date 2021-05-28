<template>
  <div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="http://placehold.it/100x150" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ name }}</h5>
          <p class="card-text price">{{ price }}</p>
          <button type="button" class="btn btn-secondary" @click="$emit('del-basket-item', id)">Удалить</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "basketItem",

  props: {
    id: Number,
    name: String,
    price: Number,
  },

  methods: {
    delBasketItem() {
      this.$emit('click',
          {basketItem: this.$refs.id.id})
    }
  },

}
</script>


<style scoped>

</style>