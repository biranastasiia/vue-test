<template>
  <div id="app">
    <Header />
    <Banner />
  </div>
</template>

<script>
    import Header from './components/Header.vue'
    import Banner from './components/Banner.vue'
    export default {
        components: {
            Header,
            Banner
        }
    }
</script>