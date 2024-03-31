<template>
    <div class="product-card">
        <div class="product-card__photo">
            <img :src="data.photo" :alt="data.title">
        </div>
        <div class="product-card__top-line">
            <div class="product-card__nights">{{ data.nights }} nights</div>
            <div class="product-card__favorite" :class="{'filled': data.isFavorite}" @click="addToFavorite">
                <img class="product-card__icon" v-if="isFavorite" src="../assets/images/icons/heart.png" alt="heart">
                <img class="product-card__icon" v-else src="../assets/images/icons/heart_filled.png" alt="heart">
            </div>
        </div>
        <div class="product-card__body">
            <h3 class="product-card__title">{{ data.title }}</h3>
            <div class="product-card__stars" :style="{'width': data.stars * (18+5) + 'px'}">
                <img class="product-card__icon" src="../assets/images/icons/star.png" alt="star">
                <img class="product-card__icon" src="../assets/images/icons/star.png" alt="star">
                <img class="product-card__icon" src="../assets/images/icons/star.png" alt="star">
                <img class="product-card__icon" src="../assets/images/icons/star.png" alt="star">
                <img class="product-card__icon" src="../assets/images/icons/star.png" alt="star">
            </div>
            <div class="product-card__date">
                <img class="product-card__icon" src="../assets/images/icons/calendar.png" alt="calendar">
                {{ data.date_start }} &mdash; {{ data.date_end }}
            </div>
            <div class="product-card__service">
                <img class="product-card__icon" src="../assets/images/icons/tray.png" alt="tray">
                {{ data.service }}
            </div>
            <div class="product-card__price">From <span>${{ data.price }}</span> for 1 person</div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['data'],
        data () {
            return {
                isFavorite: false
            }
        },
        mounted() {
            this.isFavorite = this.data.isFavorite;
        },
        methods: {
            addToFavorite(){
                this.isFavorite = !this.isFavorite;
            }
        }
    }
</script>