<template>
  <div>
    <div class="box_404 ccm_table">
      <div class="ccm_td">
        <img src="../assets/images/404.png" alt="" >
        <p >哎呀! 页面飘走了呢......</p>
      </div>
    </div>
  </div>

</template>

<script>
  
  import {mapActions} from 'vuex'
  export default {
    name: 'page404',
    data() {
      return {

      }
    },
    computed: {
      message() {
        return 'The webmaster said that you can not enter this page...'
      }
    },
    methods:{
      showload(){
        
        console.log(this.$store.state.loading.loadingState)
      },
      popupload(){
        console.log(this.$store.getters)
      //  this.$store.commit("loading/showLoading");
      
       this.$store.dispatch("loading/showLoading")

      }
 
    }
  }
</script>

<style lang="scss" scoped>
  .box_404 {
    height: calc(100vh);
    margin-top: -62px;
    position: relative;
    width: 100%;
    background: #fafcfc;

    p {
      font-size: 1.4rem;
      color: #666;
      line-height: 1em;
      margin: 0
    }

    img {
      margin-bottom: 30px
    }
  }
</style>