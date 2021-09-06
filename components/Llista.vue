<template>
  <div class="card p-4 border border-dark my-2" style="overflow-x: auto">
    <h1>{{ msg }}</h1>

    <table v-if="msg=='Usuaris'" class="table table-striped table-dark">
      <thead class="table table-striped table-warning">
        <tr class="text-dark">
          <th>ID</th>
          <th>Nom</th>
          <th>Visites</th>
        </tr>
      </thead>
      <tbody v-for="(element, index) in usuarisVisitats" :key="index">
          <tr>
            <td >{{element[0].id}}</td>
            <td >{{element[0].name}}</td>
            <td>{{element[1]}}</td>
          </tr>
      </tbody>
    </table>

    <table v-else-if="msg=='Fotos'" class="table table-striped table-dark">
      <thead class="table table-striped table-warning">
        <tr class="text-dark">
          <th>Foto</th>
          <th>Album</th>  
          <th>Visites</th>
        </tr>
      </thead>
      <tbody v-for="(element, index) in fotosVisitades" :key="index">
          <tr>
            <td>{{element[0].id}}</td>
            <td>{{element[0].albumId}}</td>
            <td>{{element[1]}}</td>
          </tr>
      </tbody>
    </table>

    <table v-else class="table table-striped table-dark">
      <thead class="table table-striped table-warning">
        <tr class="text-dark">
          <th>Album</th>
          <th>Visites</th>
        </tr>
      </thead>
      <tbody v-for="(element, index) in albumsVisitats" :key="index">
          <tr>
            <td>{{element[0]}}</td>
            <td>{{element[1]}}</td>
          </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  name: 'Llista',
  props: {
    msg: String
  },
  computed: mapState(['usuarisVisitats','fotosVisitades','albumsVisitats']),
  methods: {...mapActions(['obtenirUsuaris'])}
}
</script>
