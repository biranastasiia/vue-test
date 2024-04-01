<template>
   <section class="banner">
        <div class="container">
            <div class="banner__background">
                <div class="banner__background-box"></div>
                <div class="banner__background-box"></div>
                <div class="banner__background-box">
                    <div class="banner__background-box-small"></div>
                    <div class="banner__background-box-small"></div>
                    <div class="banner__background-box-small"></div>
                    <div class="banner__background-box-small"></div>
                    <BannerPopup 
                        title="Book"
                        imgsrc="./assets/images/icons/call.png"
                        imgalt="call"
                        position="top"
                        :list="phoneList" />
                </div>
                <div class="banner__background-box"></div>
                <div class="banner__background-box"></div>
                <div class="banner__background-box"></div>
                <div class="banner__background-box">
                    <div class="banner__background-box-small"></div>
                    <div class="banner__background-box-small"></div>
                    <div class="banner__background-box-small"></div>
                    <div class="banner__background-box-small"></div>
                    <BannerPopup 
                        title="Chat"
                        imgsrc="./assets/images/icons/chat.png"
                        imgalt="chat"
                        position="bottom"
                        :list="contactsList" />
                </div>
                <div class="banner__background-box"></div>
                <div class="banner__background-box"></div>
            </div>
            <div class="banner__content">
                <h1 class="banner__title">
                    Find peace and relax<div class="banner__title-stroke">on miracle ISLAND</div>
                </h1>
            </div>
        </div>
   </section>
</template>

<script>
    import BannerPopup from './BannerPopup.vue';
    export default {
        components: {
            BannerPopup
        },
        data(){
            return {
                contactsList: [
                    {   
                        "content": "telegram",
                        "link": "http://tg",
                        "img": "./assets/images/icons/telegram.png"
                    },
                    {   
                        "content": "whatsup",
                        "link": "http://whatsup",
                        "img": "./assets/images/icons/whatsup.png"
                    },
                    {   
                        "content": "viber",
                        "link": "http://viber",
                        "img": "./assets/images/icons/viber.png"
                    }
                ],
                phoneList: [
                    {   
                        "content": "+380777777777",
                        "link": "tel:+380777777777",
                        "img": "./assets/images/icons/phone.png"
                    },
                    {   
                        "content": "+380888888888",
                        "link": "tel:+380888888888",
                        "img": "./assets/images/icons/phone.png"
                    },
                    {   
                        "content": "+380999999999",
                        "link": "tel:+380999999999",
                        "img": "./assets/images/icons/phone.png"
                    }
                ]
            }
        },
        methods: {
            
        }
    }
</script>