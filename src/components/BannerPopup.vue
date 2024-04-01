<template>
    <div class="banner__contacts" :class="position">
        <div class="banner__contacts-title" @click="togglePopup()">
            <span v-if="position==='top'">{{ title }}</span>
            <img :src="imgsrc" :alt="imgalt">
            <span v-if="position==='bottom'">{{ title }}</span>
        </div>
        <div class="banner__contacts-popup" v-if="popup">
            <ul class="banner__contacts-list">
                <li class="banner__contacts-item" v-for="item in list" :key="item.content">
                    <a :href="item.link" target="_blank">
                        <img :src="item.img" :alt="item.content">
                        {{item.content}}
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['position', 'list', 'title', 'imgsrc', 'imgalt'],
        data(){
            return {
                popup: false
            }
        },
        mounted(){
            window.addEventListener('click', (event) => this.closeOutside(event))
        },
        methods: {
            togglePopup(){
                this.popup = !this.popup;
            },
            closeOutside(e){
                if(e.target.closest('.banner__contacts') == null){
                    this.popup = false;
                }
            }
        }
    }
</script>