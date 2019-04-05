<template>
  <div class="hello">
    <h1>{{msg}}</h1>
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
    document.getElementsByTagName("title")[0].innerText = "星尘_StarDust";
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
img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}

/* .div1 {
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
} */

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
