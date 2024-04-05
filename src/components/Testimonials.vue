<template>
    <section class="testimonials section" id="testimonials">
        <div class="container">
            <h2 class="section__title">What customers say</h2>
            <div class="swiper">
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
                <div class="swiper-wrapper">
                    <div class="swiper-slide testimonial" v-for="testimonial in testimonialsList" :key="testimonial.id">
                        <div class="testimonial__user">
                            <div class="testimonial__user-photo">
                                <img :src="testimonial.photo" :alt="testimonial.name" loading="lazy">
                            </div>
                            <div class="testimonial__user-info">
                                <div class="testimonial__user-name">{{ testimonial.name }}</div>
                                <div class="testimonial__user-position">{{ testimonial.position }}</div>
                            </div>
                        </div>
                        <div class="testimonial__content">
                            <p>{{ testimonial.text }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import axios from 'axios';
    import Swiper from 'swiper';
    import { Navigation, Autoplay } from 'swiper/modules';
    import 'swiper/css';
    import 'swiper/css/navigation';
    
    export default {
        data(){
            return {
                testimonialsList: []
            }
        },
        mounted(){
            this.getTestimonials();
        },
        methods: {
            getTestimonials(){
                const _self = this;
                axios.get('./mocks/testimonials.json')
                .then(function (response) {
                    if(response.status === 200){
                        _self.testimonialsList = response.data;
                        _self.initSwiper();
                    }
                })
                .catch(function (error) {
                    console.log(error);
                })
            },
            initSwiper(){
                new Swiper('.swiper', {
                    modules: [Navigation, Autoplay],
                    speed: 1000,
                    slidesPerView: 1,
                    autoplay: {
                        delay: 3000
                    },
                    loop: true,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }
                });
            }
        }
    }
</script>