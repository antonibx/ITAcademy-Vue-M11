<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <nuxt-link to="./" class="my-auto mr-2 btn-primary btn-sm text-decoration-none">⮪</nuxt-link>
            <h1>{{usuari.id}}. {{usuari.name}}</h1>
        </div>
        <table class="table table-striped table-bordered">
            <tbody>
                <tr>
                    <th class="table-secondary">Id</th>
                    <td>{{usuari.id}}</td>
                </tr>
                <tr>
                    <th class="table-active">Nom</th>
                    <td>{{usuari.name | Majus}}</td>
                </tr>
                <tr>
                    <th class="table-secondary">Usuari</th>
                    <td>{{usuari.username}}</td>
                </tr>
                <tr>
                    <th class="table-active">Correu</th>
                    <td>{{usuari.email}}</td>
                </tr>
                <tr>
                    <th class="table-secondary">Direcció</th>
                    <td>
                        <b>Carrer:</b> {{direccio.street}} <br>
                        <b>Habitació:</b> {{direccio.suite}} <br>        
                        <b>Ciutat:</b> {{direccio.city}} <br>
                        <b>Codi postal:</b> {{direccio.zipcode}} <br>
                        <b>Coordenades:</b> ({{geo.lat}}, {{geo.lng}})
                    </td>
                </tr>
                <tr>
                    <th class="table-active">Mòbil</th>
                    <td>{{usuari.phone}}</td>
                </tr>
                <tr>
                    <th class="table-secondary">Web</th>
                    <td><a :href="'http://'+usuari.website">{{usuari.website}}</a></td>
                </tr>
                <tr>
                    <th class="table-active">Companyia</th>
                    <td>
                        <b>Nom:</b> {{companyia.name}} <br>
                        <b>Eslògan:</b> "{{companyia.catchPhrase}}"<br>
                        <b>BS:</b> {{companyia.bs}}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
import axios from 'axios'

export default {
    data(){
        return {
            usuari: '',
            direccio: '',
            geo: '',
            companyia: ''
        }
    },
    filters: {
        Majus(value) {
            if(!value) return '';
            return value.toString().toUpperCase();
        }
    }
    ,
    computed: mapState(['usuaris','usuarisVisitats']),
    methods: {
        ...mapMutations(['visita'])
    },
    async created() {
        try {
            const response = await axios.get('http://jsonplaceholder.typicode.com/users/' + this.$route.params.iduser);
            this.usuari = response.data;
            this.visita({dada: this.usuari, tipus: "user"})
            this.direccio = this.usuari.address;
            this.geo = this.direccio.geo;
            this.companyia = this.usuari.company;
        } catch (error) {
            console.log(error);
        }
    },
    mounted() {
    },
}
</script>