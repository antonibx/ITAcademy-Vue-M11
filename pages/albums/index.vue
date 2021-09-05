<template>
    <div class="container mt-5">

        <div class="row justify-content-center">
            <nuxt-link to='../' class="my-auto mr-2 btn-primary btn-sm text-decoration-none">⮪</nuxt-link>
            <h1>Àlbums</h1>
        </div>

        <div class="container d-flex justify-content-center" style="flex-flow:row wrap">
            <div class="card" v-for="album of albums" v-bind:key="album">
                <nuxt-link :to="'/albums/' + album">
                    <b-button class="btn-success btn-sm">Àlbum {{album}}</b-button>
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
            albums: []
        }
    },
    async created() {
        try {
            const response = await axios.get('http://jsonplaceholder.typicode.com/photos');
            let fotos = response.data;
            let llistaalbums = [];
            fotos.forEach(foto => llistaalbums.push(foto.albumId));
            this.albums = Array.from(new Set(llistaalbums));
        } catch (error) {
            console.log(error);
        }
        
    }
}
</script>
