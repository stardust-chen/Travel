<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
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
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  text-align: center;
}
</style>
