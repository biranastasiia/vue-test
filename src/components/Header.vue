<template>
    <header class="header">
        <div class="container">
            <a href="#" class="logo">
                <span>Best</span>Tours
            </a>
            <nav class="menu">
                <div class="menu__burger" @click="toggleClass">
                    <span></span>
                </div>
                <ul class="menu__list" :class="{'visible': visible}">
                    <li class="menu__item"><a href="#about">About</a></li>
                    <li class="menu__item"><a href="#hotels">Top Hotels</a></li>
                    <li class="menu__item"><a href="#testimonials">Testimonials</a></li>
                    <li class="menu__item"><a href="#blog">Blog</a></li>
                </ul>
            </nav>
            <a href="#" class="user-sign-in">Sign In</a>
        </div>
    </header>
</template>

<script>
    export default {
        data () {
            return {
                visible: false
            }
        },
        methods: {
            toggleClass() {
                this.visible = !this.visible
            }
        }
    }
</script>