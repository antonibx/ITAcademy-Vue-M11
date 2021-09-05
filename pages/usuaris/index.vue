<template>
    <div class="container mt-5 text-center">
        <div class="row d-flex justify-content-center">
            <nuxt-link to="../" class="my-auto mr-2 btn-primary btn-sm text-decoration-none">⮪</nuxt-link>
            <h1>Usuaris</h1>
        </div>
        <table class="table table-striped table-bordered">
            <thead class="table-dark">
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Nom</th>
                    <th scope="col">Ciutat</th>
                    <th scope="col">Més</th>
                </tr>
            </thead>
            <tbody class="">
                <tr v-for="user of users" v-bind:key="user.id">
                    <th scope="row">{{user.id}}</th>
                    <td>{{user.name}}</td>
                    <td>{{user.address.city}}</td>
                    <td>
                        
                        <nuxt-link :to="'/usuaris/' + user.id">
                            <b-button class="btn-success btn-sm">+</b-button>
                        </nuxt-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';
import Usuari from '../../components/Usuari.vue';

export default {
    components: {
        Usuari: Usuari,
    },
    data(){
        return {
            users: []
        }
    },
    async created() {
        try {
            const response = await axios.get('http://jsonplaceholder.typicode.com/users');
            this.users = response.data;
        } catch (error) {
            console.log(error);
        }
        
    }
}
</script>
