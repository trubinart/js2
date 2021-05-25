<template>
  <body>
  <navigation/>
  <!-- БЛОК С ТОВАРАМИ -->
  <main>
    <div style="height: 50px"></div>
    <div class="goods-list d-flex" style="justify-content: space-around"
         >
      <product-item v-for="product in goods"
                    :key="product.id_product"
                    :id=product.id_product
                    :name=product.product_name
                    :price=product.price />
    </div>
  </main>
  <basket-window/>
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
    goods: []
  }),

  methods: {
    getDataFromServer(url) {
      fetch(url)
          .then((responce) => responce.json())
          .then((data) => this.goods = data)
          .then(console.log(this.goods))
    }
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
