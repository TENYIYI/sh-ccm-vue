<template>
    <div class="loadingbox ccm_table" v-show="$store.getters.loadingState">
        <div class="ccm_td">
            <img src="../assets/images/loading.gif" alt="">
            <p>正在努力加载中，请耐心等待哦~</p>
        </div>
    </div>
</template>
<script>
export default {
  name: 'loading'
  // ,
  // data(){
  //     return{
  //         pageshow:false
  //       }
  // },
  // props:['loading']
  // ,
  // computed: {
  //   message() {
  //     return 'loading...'
  //   }
  // }
}
</script>

<style lang="scss" scoped>
.loadingbox{
    height:calc(100vh);width:100%;position: fixed;width:100%;top:-64px;left:0;right:0;background:#fafcfc;

        p{
            font-size:1.4rem;color:#666;line-height:1em;margin:0;
        }

        img{
            margin-bottom:20px;
        }
       &::after{content:"";height:100vh;position:absolute;bottom:-100vh;left:0;right:0;background:#fafcfc} 
}   

</style>