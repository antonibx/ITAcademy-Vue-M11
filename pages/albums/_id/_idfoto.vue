<template>
    <div class="container mt-5 text-center">
        <div class="row justify-content-center">
            <nuxt-link to="./" class="my-auto mr-2 btn-primary btn-sm text-decoration-none">⮪</nuxt-link>
            <h1>{{foto.title}}</h1>
        </div>
        <img :src='this.foto.thumbnailUrl'><br><br>
        <p><b>Àlbum:    </b> {{foto.albumId}}</p>
        <p><b>Foto:     </b> {{foto.id}}</p>
        <p><b>Títol:    </b> {{foto.title}}</p>
        <p><b>URL:      </b> <a :href="foto.url">{{foto.url}}</a></p>
        <p><b>Thumbnail:</b> <a :href="foto.thumbnailUrl">{{foto.thumbnailUrl}}</a></p>
        
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
import axios from 'axios';

export default {
    data(){
        return {
            foto: ''
        }
    },
    computed: mapState(['fotos','fotosVisitades']),
    methods: {
        ...mapMutations(['visita'])
    },
    async created() {
        try {
            const response = await axios.get('http://jsonplaceholder.typicode.com/photos/' + this.$route.params.idfoto);
            this.foto = response.data;
            this.visita({dada: this.foto, tipus: "photo"})
        } catch (error) {
            console.log(error);
        }
    }
}
</script>