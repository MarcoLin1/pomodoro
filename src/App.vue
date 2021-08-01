<template>
  <div id="app">
    <TopNavbar />
    <router-view />
  </div>
</template>

<style>

</style>

<script>
import TopNavbar from './components/TopNavbar.vue'
export default {
  components: {
    TopNavbar
  }
}
</script>

<style lang="scss" scoped>
@import './assets/scss/reset.scss';
#app {
  background: #BC2B35;
  min-width: 650px;
}
</style>
