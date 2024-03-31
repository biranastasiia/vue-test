<template>
  <div id="app">
    <Header />
    <Banner />
    <Advantages />
    <Products />
  </div>
</template>

<script>
    import Header from './components/Header.vue'
    import Banner from './components/Banner.vue'
    import Advantages from './components/Advantages.vue'
    import Products from './components/Products.vue'

    export default {
        components: {
            Header,
            Banner,
            Advantages,
            Products
        }
    }
</script>