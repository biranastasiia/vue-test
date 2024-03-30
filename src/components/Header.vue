<template>
    <header class="header">
        <div class="container">
            <a href="#" class="logo">
                Go<span>Vacation</span>
            </a>
            <nav class="menu">
                <div class="menu__burger" @click="toggleClass">
                    <span></span>
                </div>
                <ul class="menu__list" :class="{'visible': visible}">
                    <li class="menu__item"><a href="#">About</a></li>
                    <li class="menu__item"><a href="#">Products</a></li>
                    <li class="menu__item"><a href="#">Contacts</a></li>
                </ul>
            </nav>
            <a href="#" class="user-sign-in">
                Sign in
            </a>
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