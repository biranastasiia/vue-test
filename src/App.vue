<template>
  <div id="app">
    <Header />
    <Banner />
    <About />
    <Advantages />
    <Products />
    <Testimonials />
    <Blog />
    <Subscribe />
    <Footer />
  </div>
</template>

<script>
    import Header from './components/Header.vue'
    import Banner from './components/Banner.vue'
    import About from './components/About.vue'
    import Advantages from './components/Advantages.vue'
    import Products from './components/Products.vue'
    import Testimonials from './components/Testimonials.vue'
    import Blog from './components/Blog.vue'
    import Subscribe from './components/Subscribe.vue'
    import Footer from './components/Footer.vue'

    export default {
        components: {
            Header,
            Banner,
            Advantages,
            Products,
            About,
            Testimonials,
            Subscribe,
            Footer,
            Blog
        }
    }
</script>