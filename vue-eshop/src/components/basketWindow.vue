<template>
  <!-- КОРЗИНА -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Корзина</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <basket-item v-for="product in basketInWindow"
                       :key=product.id_product
                       :id=product.id_product
                       :name=product.product_name
                       :price=product.price
                       @del-basket-item = "(...args) => $emit('del-basket-item', args)"
          />
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
          <button type="button" class="btn btn-primary">Сохранить</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import basketItem from "@/components/basketItem";
export default {
  name: "basketWindow",
  props: {
    basketInWindow: Array
  },
  components: {
    basketItem,
  },
}
</script>

<style scoped>
</style>