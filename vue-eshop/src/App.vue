<template>
  <body>
  <navigation @searchKeydown="filter"/>
  <!-- БЛОК С ТОВАРАМИ -->
  <main>
    <div style="height: 50px"></div>
    <div class="goods-list d-flex" style="justify-content: space-around">
      <p v-if="goods.length === 0">Список товаров пуст</p>
      <product-item v-else v-for="product in goods"
                    :key=product.id_product
                    :id=product.id_product
                    :name=product.product_name
                    :price=product.price
                    @click="addBasketItem"

      />
    </div>
  </main>
  <basket-window :basket-in-window=this.basket />
  </body>
</template>


<script>
import navigation from "@/components/navigation";
import basketWindow from "@/components/basketWindow";
import productItem from "@/components/productItem";

const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json'

export default {
  name: 'App',

  components: {
    navigation,
    basketWindow,
    productItem,
  },

  data: () => ({
    goods: [],
    basket: [],
  }),

  methods: {
    getDataFromServer(url) {
      fetch(url)
          .then((responce) => responce.json())
          .then((data) => this.goods = data)
    },

    filter(data) {
      const regexp = new RegExp(data.search, 'i');
      this.goods = this.goods.filter(good => regexp.test(good.product_name))
    },

    addBasketItem(data) {
      this.goods.forEach((good) => {
        if (good.id_product == data.basketItem) {
          this.basket.push(good)
        }
      })
      console.log(data)
      console.log(this.basket)
    },

  },

  mounted() {
    this.getDataFromServer(API_URL)
  }
}

</script>

<style>
goods-list {
  display: flex;
  justify-content: space-around;
}

</style>
