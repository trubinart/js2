<template>
  <body>
  <navigation @searchKeydown="filter"/>
  <!-- БЛОК С ТОВАРАМИ -->
  <main>
    <div style="height: 50px"></div>
    <div class="goods-list d-flex"
         style="justify-content: space-around;
                flex-wrap: wrap;
                 flex-direction: row;">

      <p v-if="goods.length === 0 && !errorVisible">Список товаров пуст</p>
      <product-item v-else v-for="product in goods"
                    :product=product
                    :key=product.id_product
                    :id=product.id_product
                    :name=product.product_name
                    :price=product.price
                    @add-basket-item="addBasketItem"/>
      <errorData v-if="errorVisible">
      </errorData>
    </div>
  </main>
  <basket-window
      :basket-in-window=this.basket
      @del-basket-item="deleteBasketItem"
  />
  </body>
</template>


<script>
import navigation from "@/components/navigation";
import basketWindow from "@/components/basketWindow";
import productItem from "@/components/productItem";
import errorData from "@/components/errorData";

const API_URL = 'http://localhost:3000'

export default {
  name: 'App',

  components: {
    navigation,
    basketWindow,
    productItem,
    errorData,
  },

  data: () => ({
    goods: [],
    basket: [],
    errorVisible: false
  }),

  methods: {
    getProductsFromServer(url) {
      fetch(url)
          .then((responce) => responce.json())
          .then((data) => this.goods = data)
          .catch((err) => {
            console.log(err)
            this.errorVisible = !this.errorVisible
          })
    },

    getBasketFromServer(url) {
      fetch(url)
          .then((responce) => responce.json())
          .then((data) => this.basket = data)
          .catch((err) => {
            console.log(err)
            this.errorVisible = !this.errorVisible
          })
    },


    filter(data) {
      const regexp = new RegExp(data.search, 'i');
      this.goods = this.goods.filter(good => regexp.test(good.product_name))
    },

    addBasketItem(data) {
      fetch(`${API_URL}/addToBasket`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      })
          .then((data) => {
            console.log(data.json())
            this.getBasketFromServer(`${API_URL}/basket`)
          })
    },

    deleteBasketItem(data) {
              fetch(`${API_URL}/delFromBasket`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      })
          .then((data) => {
            console.log(data.json())
            this.getBasketFromServer(`${API_URL}/basket`)
          })
    },

  },

  mounted() {
    this.getProductsFromServer(`${API_URL}/products`)
    this.getBasketFromServer(`${API_URL}/basket`)
  }
}

</script>

<style>
goods-list {
  display: flex;
  justify-content: space-around;
}
</style>