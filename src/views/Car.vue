<template>
    <div>
      <li v-for="(item,index) in list" :key="index">
        <img :src="item.img" alt="">
      </li>
    </div>
</template>

<script>
import Axios from 'axios'

export default {
    data(){
        return {
            list:[]
        }
    },
    created(){
        Axios.get("/api/list").then(res=>{
            this.list=res.data.list
            console.log(res.data.list)
        })
    }
}
</script>

<style>
img{
  width:170px;
  height:300px;
}
li{
  width:170px;
  height:300px;
  float: left;
  margin-left:10px;
  margin-top:10px;
}
</style>