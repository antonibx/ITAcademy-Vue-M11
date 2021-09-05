<template>
    <div class="container mt-5 text-center">
        <div class="row justify-content-center">
            <nuxt-link to="../" class="my-auto mr-2 btn-primary btn-sm text-decoration-none">⮪</nuxt-link>
            <h1>Àlbum {{album}}</h1>
        </div>
        <div class="container d-flex justify-content-center" style="flex-flow:row wrap">
            <div v-for="foto of fotos" v-bind:key="foto.id">
                <nuxt-link v-if="foto.albumId == $route.params.id" :to="'/albums/' + album + '/'+ foto.id" >
                    <b-button class="border-success bg-warning text-dark btn-sm m-2">
                        Foto {{foto.id}}<br>
                        <img :src='foto.thumbnailUrl'>
                    </b-button>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return {
            fotos: '',
            album: this.$route.params.id
        }
    },
    async created() {
        try {
            const response = await axios.get('http://jsonplaceholder.typicode.com/photos/');
            this.fotos = response.data;
        } catch (error) {
            console.log(error);
        }
    }
}
</script>