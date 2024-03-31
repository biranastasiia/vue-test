<template>
    <section class="products">
        <div class="container">
            <h2 class="section__title">Top Hotels</h2>
            <div class="section__subtitle">Choose the best of the greatest</div>
            <div class="products__list">
                <ProductCard v-for="product in products_list" :key="product.id" :data="product" />
            </div>
        </div>
    </section>
</template>

<script>
    import axios from 'axios';
    import ProductCard from './ProductCard.vue'

    export default {
        components: {
            ProductCard
        },
        data() {
            return {
                products_list: [],
            }
        },
        mounted(){
            this.getProducts();
        },
        methods: {
            getProducts(){
                const _self = this;
                axios.get('./mocks/products.json')
                .then(function (response) {
                    console.log(response);
                    if(response.status === 200){
                        _self.products_list = response.data;
                    }
                })
                .catch(function (error) {
                    console.log(error);
                })
            }
        }
    }
</script>