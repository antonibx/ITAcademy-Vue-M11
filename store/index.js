import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const state = () => ({
  //Per les llistes:
  usuaris: [],
  usuarisVisitats: [],
  fotos: [],
  fotosVisitades: [],
  albums: [],
  albumsVisitats: [],
  //Per les cerques
  cerca: '',
  resultats: [],
});

export const getters = {
    cerca: (state) => {
        return state.cerca;
    }
};

export const mutations = {
  visita(state, nouElement) {
    let posicio = -1;
    let llista;
    switch(nouElement.tipus){
      case "user":
        llista = state.usuarisVisitats;
        llista.forEach((element, index) => {
          if(element[0].name==nouElement.dada.name) {
            element[1]=element[1]+1;
            posicio = index;
          }
        });
        if (posicio ==-1){
          llista.push([nouElement.dada, 1]);
        }
        break;
      case "photo":
        llista = state.fotosVisitades;
        llista.forEach((element, index) => {
          if(element[0].title==nouElement.dada.title) {
            element[1]++;
            posicio = index;
          }
        });
        if (posicio ==-1){
          llista.push([nouElement.dada, 1]);
        }
        break;
      case "album":
        llista = state.albumsVisitats;
        llista.forEach((element, index) => {
          if(element[0]==nouElement.dada) {
            element[1]++;
            posicio = index;
          }
        });
        if (posicio ==-1){
          llista.push([nouElement.dada, 1]);
        }
        break;
      default:
        alert("Alguna cosa no ha anat bé");
    }
  },
  omplirUsuaris(state, usuarisAccio) {
    state.usuaris = usuarisAccio;
  },
  omplirFotos(state, fotosAccio) {
    state.fotos = fotosAccio;
  },
  omplirResultats(state, resultatsAccio) {
    state.resultats = resultatsAccio;
  },
  canviaCerca(state, novaCerca) {
    state.cerca = novaCerca;
  }
};

export const actions = {
  obtenirUsuaris: async function ({commit}) {
    const u1 = await axios.get('http://jsonplaceholder.typicode.com/users');
    const u2 = u1.data;
    commit('omplirUsuaris', u2);
  },
  obtenirFotos: async function ({commit}) {
    const data = await fetch('http://jsonplaceholder.typicode.com/photos');
    const fotos = await data.json();
    commit('omplirFotos', fotos);
  },
  cercaUsuaris({commit,state}) {
    let resultats = [];
    (state.usuaris).forEach(element => {
      let filtreText = element.name.toLowerCase().includes(state.cerca);
      if (filtreText) {
        resultats.push(element);
      }
    });
    commit('omplirResultats', resultats);
  }
};