<template>
  <div>
    <Sidebar />
    <NavBar />
  </div>
</template>

<script>
// @ is an alias to /src
import Sidebar from '../components/Navigation/Sidebar.vue'
import NavBar from '../components/Navigation/NavBar.vue'

export default {
  name: 'Home',
  components: {
    Sidebar,
    NavBar

  }
}
</script>
