<template>
  <div class="container mt-5">
    
    <NuxtLogo />
    <div class="row d-flex justify-content-around">
      <Llista msg="Usuaris" class="bg-primary text-light text-center" style="width:30%" />
      <Llista msg="Albums" class="bg-warning text-center" style="width:30%" />
      <Llista msg="Fotos" class="bg-success text-light text-center" style="width:30%" />
    </div>
  </div>
</template>

<script>
import Llista from '@/components/Llista.vue'

export default {
  name: 'Home',
  components: {
    Llista
  },
  data() {
    return {
    }
  },
  created() {
  }
}
</script>