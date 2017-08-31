<template>
  <div>
    <mt-header fixed title="详细信息">
      <router-link to="/guangzhou" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <iframe :src="urls[$route.params.id]" frameborder="0"></iframe>
  </div>
</template>

<script>

export default {
  data() {
    return {
      urls: [
        "https://m.ctrip.com/webapp/hybrid/schedule/detail.html?navBarStyle=gray&queryDate=2017-09-08&flightNo=MU9315&queryType=1&fromurl=https://m.ctrip.com/webapp/hybrid/schedule/search.html",
        ""
      ]
    }
  },
  created() {
    document.getElementsByTagName("title")[0].innerText = this.$route.meta.title;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.mint-header {
  background-color: #1D8CE0 !important;
  height: 45px !important;
  font-size: 18px;
}


iframe {
  width: 100%;
  height: 103%;
  margin-top: -3%;
}
</style>
