<template>
  <div class="bg-dark rounded-pill m-3 pl-5 pr-5">
    <nav class="navbar navbar-expand-lg navbar-dark m-0">
      <img src="https://www.legislaturaneuquen.gob.ar/imagenes/lupa.png" style=" height: 20px; margin-right: -30px; z-index: 2" alt="">
      <div class="dropdown" @mouseover="veure" @mouseout="veure">
        <input class="form-control mr-sm-2 text-center" type="text" placeholder="usuari" aria-label="Busca" v-model="cerca">
        <div id="myDropdown" class="dropdown-content show">
          <div v-for="(element, index) in resultats" :key="index">
            <nuxt-link :to="'/usuaris/' + element.id">{{element.name}}</nuxt-link>
          </div>
          <div v-if="((resultats).length==0)&&(cerca!='')" class="container alert alert-danger mt-3">No hi ha usuaris disponibles</div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'

export default {
  name: 'Cerca',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      cercaStore: 'cerca'
    }),
    cerca: {
        get(){
          return this.cercaStore;
        },
        set(novaEntrada){
          this.canviaCerca(novaEntrada);
          this.cercaUsuaris();
          return novaEntrada;
        } 
    },
    ...mapState(['resultats'])
  },
  methods: {
    ...mapMutations(['omplirResultats','canviaCerca']),
    ...mapActions(['cercaUsuaris', 'obtenirUsuaris']),
    veure() {
      document.getElementById("myDropdown").classList.toggle("show");
    }
  },
  created() {
    this.obtenirUsuaris()
  }
}
</script>


<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f6f6f6;
  min-width: 100%;
  border: 1px solid #ddd;
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {background-color: #e5d59d}

.show {display:block;}
</style>