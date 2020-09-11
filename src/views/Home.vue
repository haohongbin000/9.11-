<template>
  <div class="box">
      <div class="footer">
          <router-link to="/home/list">关注</router-link>
          <router-link to="/home/car">发现</router-link>
          <router-link to="/home/my">同城</router-link>
      </div>
      <div class="main">
          <router-view></router-view>
      </div>
      
  </div>
</template>

<script>

</script>

<style scoped>

.box{
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
}
.main{

    flex:1;
    overflow: auto;
}
.footer{
    width:100%;
    height:45px;
    background: tomato;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
a{
    text-decoration:none;
    color:black;
}
.footer .active{
    color:blue;
    border:1px solid black;
}
.router-link-exact-active,.router-link-active{
    color:blue;
    border-bottom:1px solid yellow;
    text-align: center;
}
</style>