<template>
    <section class="subscribe section">
        <div class="container">
            <h2 class="section__title">Stay informed about new tours</h2>
            <div class="subscribe__form">
                <input class="subscribe__form-input" type="email" name="subscribe_email" id="subscribe_email" placeholder="Type your e-mail" v-bind="email">
                <button class="subscribe__form-button" @click="subscribe">Subscribe</button>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data(){
            return {
                email: ''
            }
        },
        methods: {
            subscribe(){
                console.log('subscribe');
            }
        }
    }
</script>