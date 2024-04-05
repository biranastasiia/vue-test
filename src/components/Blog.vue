<template>
    <section class="blog section" id="blog">
        <div class="container">
            <h2 class="section__title">Blog</h2>
            <div class="blog__body">
                <div class="blog__latest">
                    <div class="blog__latest-photo">
                        <img src="../assets/images/backgrounds/blog.jpg" alt="article 1" loading="lazy">
                    </div>
                    <div class="blog__latest-content">
                        <div class="blog__latest-title">Lorem ipsum dolor sit amet!</div>
                        <div class="blog__latest-button">Read more</div>
                    </div>
                </div>
                <div class="blog__articles-list">
                    <div class="blog__article" v-for="article in articlesList" :key="article.id">
                        <div class="blog__article-photo">
                            <img :src="article.img" :alt="article.title" loading="lazy">
                        </div>
                        <div class="blog__article-content">
                            <a href="#" class="blog__article-title">{{ article.title }}</a>
                            <p>{{ article.text }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import axios from 'axios'
    export default {
        data(){
            return {
                articlesList: []
            }
        },
        mounted(){
            this.getArticles()
        },
        methods: {
            getArticles(){
                const _self = this;
                axios.get('./mocks/articles.json')
                .then(function(response){
                    if(response.status === 200){
                        _self.articlesList = response.data;
                    }
                })
                .catch(function(error){
                    console.log(error);
                })
            }
        }
    }
</script>