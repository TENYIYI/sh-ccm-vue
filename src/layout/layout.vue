<template>
  <div class="pageBox">
    <div class="header_content">
      <Header></Header>
    </div>
    <div class="main_content">
      <router-view></router-view>
      <Loading></Loading>
    </div>
  </div>
</template>

<script>
import Loading from "./loading.vue";
import Header from "./header.vue";
// import store from "./";
export default {
  name: "pageBox",
  components: {
    Header,
    Loading
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
