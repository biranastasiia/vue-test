<template>
    <section class="subscribe section">
        <div class="container">
            <h2 class="section__title">Stay informed about new tours</h2>
            <div class="subscribe__form">
                <input class="subscribe__form-input"
                    :class="{'error': error}"
                    type="email"
                    placeholder="Type your e-mail" 
                    v-model="email">
                <button class="subscribe__form-button" @click="subscribe">
                    <img src="../assets/images/icons/send_white.png" alt="send">
                    Subscribe</button>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data(){
            return {
                email: '',
                error: false
            }
        },
        methods: {
            subscribe(){
                this.error = false;
                if(this.email){
                    console.log('subscribe');
                } else {
                    console.log('error');
                    this.error = true;
                }
            }
        }
    }
</script>