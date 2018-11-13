<template>
    <div>
        home页面
    </div>
</template>

<script>
  import Axios from 'axios'
    export default {
        name: "home",
      data(){
        return{
          list:[]
        }
      },
//      mounted(){
//        var api = 'http://api.douban.com/v2/movie/top250  ';
//        Axios.get(api).then((res)=>{
//          console.log(res);
//        }).catch((error)=>{
//          console.log(error);
//        })
//
//      }
    }
</script>

<style scoped>

</style>
