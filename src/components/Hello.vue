<template>
  <div class="hello">
    <el-carousel :interval="4000" type="card" height="600px">
    <el-carousel-item class="div1">
    </el-carousel-item>    
    <el-carousel-item class="div2">
    </el-carousel-item>    
    <el-carousel-item class="div3">
    </el-carousel-item>    
    <el-carousel-item class="div4">
    </el-carousel-item>
    <el-carousel-item class="div5">
    </el-carousel-item>
    <el-carousel-item class="div6">
    </el-carousel-item>
  </el-carousel>
  </div>
</template>

<script>
export default {
  name: "hello",

  data() {
    return {
      msg: "Welcome to StarDust's HomePage"
    };
  },
  created() {
    document.getElementsByTagName("title")[0].innerText = "Relax Afternoon";
    alert("Aling你好呀~");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  text-align: center;
}

h1,
h2 {
  font-weight: normal;
  color: #42b983;
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
  color: #42b983;
}

.div1 {
  background: url(../assets/1.png) no-repeat center center;
  background-size: 100%;
}
.div2 {
  background: url(../assets/2.png) no-repeat center center;
  background-size: 100%;
}
.div3 {
  background: url(../assets/3.png) no-repeat center center;
  background-size: 100%;
}
.div4 {
  background: url(../assets/4.png) no-repeat center center;
  background-size: 100%;
}
.div5 {
  background: url(../assets/5.png) no-repeat center center;
  background-size: 100%;
}
.div6 {
  background: url(../assets/6.png) no-repeat center center;
  background-size: 100%;
}
.el-carousel__item h3 {
  /* color: #475669; */
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  /* background-color: #99a9bf; */
}

.el-carousel__item:nth-child(2n + 1) {
  /* background-color: #d3dce6; */
}
</style>
