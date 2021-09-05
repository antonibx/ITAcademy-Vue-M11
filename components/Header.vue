<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#"><img src="https://cibernarium.barcelonactiva.cat/documents/10180/693138/IT+logo.png" style="height: 40px"></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <nuxt-link to="/">Inici <span class="sr-only">(current)</span></nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link to="/albums">Àlbums</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link to="/usuaris">Usuaris</nuxt-link>
      </li>
    </ul>
    <Cerca />
  </div>
</nav>
</template>

<script>
import Cerca from '@/components/Cerca.vue'

export default {
  name: 'Header',
  components: {
    Cerca
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: white;
}
</style>
