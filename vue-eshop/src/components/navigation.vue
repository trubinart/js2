<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a class="navbar-brand" href="">eShop</a>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <!--                    <li class="nav-item">-->
          <!--                        <a class="nav-link active" aria-current="page" href="#">Корзина</a>-->
          <!--                    </li>-->
          <!--                    <li class="nav-item">-->
          <!--                        <a class="nav-link" href="#">Link</a>-->
          <!--                    </li>-->
          <!--                    <li class="nav-item">-->
          <!--                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>-->
          <!--                    </li>-->
        </ul>
        <form class="d-flex">
          <input v-model="search" class="form-control me-2" @keydown="searchFilter" placeholder="Поиск"
                 aria-label="Search">
          <button class="btn btn-outline-success">Поиск</button>
        </form>
        <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal"
                data-bs-target="#exampleModal">Корзина
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navigation",
  data: () => ({
    search: ''
  }),

  methods: {
    searchFilter() {
      this.$emit('searchKeydown',
          {search: this.search})
    }
  },

}

</script>

<style scoped>

</style>