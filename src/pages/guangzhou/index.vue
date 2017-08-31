<template>
  <div>
    <mt-header title="广州"></mt-header>
    <!-- <div style="height:45px"></div> -->
    <el-collapse accordion>
      <el-collapse-item>
        <template slot="title">
          <div class="TitleLeft">Day 1</div>
          <div class="TitleCenter">2017-09-08</div>
          <div class="TitleRight">星期五</div>
        </template>
        <el-card class="box-card" @click.native="OpenDetail(0)">
          <div slot="header" class="clearfix flexboxtitle">
            <span class="Titleflex1">飞机</span>
            <span class="Titleflex2">中国东方航空&上海航空</span>
          </div>
          <div class="text item">
            <div class="flexbox">
              <span class="flex1">时间</span>
              <span class="flex2">20:35 ~ 23:00</span>
            </div>
            <div class="flexbox">
              <span class="flex1">From</span>
              <span class="flex2">虹桥机场T2</span>
            </div>
            <div class="flexbox">
              <span class="flex1">To</span>
              <span class="flex2">白云机场</span>
            </div>
            <div class="flexbox">
              <span class="flex1">备注</span>
              <span class="flex2"></span>
            </div>
          </div>
        </el-card>
        <el-card class="box-card" @click.native="OpenDetail(0)">
          <div slot="header" class="clearfix flexboxtitle">
            <span class="Titleflex1">飞机</span>
            <span class="Titleflex2">中国东方航空&上海航空</span>
          </div>
          <div class="text item">
            <div class="flexbox">
              <span class="flex1">时间</span>
              <span class="flex2">20:35 ~ 23:00</span>
            </div>
            <div class="flexbox">
              <span class="flex1">From</span>
              <span class="flex2">虹桥机场T2</span>
            </div>
            <div class="flexbox">
              <span class="flex1">To</span>
              <span class="flex2">白云机场</span>
            </div>
            <div class="flexbox">
              <span class="flex1">备注</span>
              <span class="flex2"></span>
            </div>
          </div>
        </el-card>

      </el-collapse-item>
      <div class="clear"></div>
      <el-collapse-item>
        <template slot="title">
          <div class="TitleLeft">Day 2</div>
          <div class="TitleCenter">2017-09-09</div>
          <div class="TitleRight">星期六</div>

        </template>
        <el-card class="box-card" @click.native="OpenDetail(0)">
          <div slot="header" class="clearfix flexboxtitle">
            <span class="Titleflex1">飞机</span>
            <span class="Titleflex2">中国东方航空&上海航空</span>
          </div>
          <div class="text item">
            <div class="flexbox">
              <span class="flex1">时间</span>
              <span class="flex2">20:35 ~ 23:00</span>
            </div>
            <div class="flexbox">
              <span class="flex1">From</span>
              <span class="flex2">虹桥机场T2</span>
            </div>
            <div class="flexbox">
              <span class="flex1">To</span>
              <span class="flex2">白云机场</span>
            </div>
            <div class="flexbox">
              <span class="flex1">备注</span>
              <span class="flex2"></span>
            </div>
          </div>
        </el-card>

      </el-collapse-item>
      <div class="clear"></div>

      <el-collapse-item>
        <template slot="title">
          <div class="TitleLeft">Day 3</div>
          <div class="TitleCenter">2017-09-09</div>
          <div class="TitleRight">星期日</div>

        </template>
        <el-card class="box-card" @click.native="OpenDetail(0)">
          <div slot="header" class="clearfix flexboxtitle">
            <span class="Titleflex1">飞机</span>
            <span class="Titleflex2">中国东方航空&上海航空</span>
          </div>
          <div class="text item">
            <div class="flexbox">
              <span class="flex1">时间</span>
              <span class="flex2">20:35 ~ 23:00</span>
            </div>
            <div class="flexbox">
              <span class="flex1">From</span>
              <span class="flex2">虹桥机场T2</span>
            </div>
            <div class="flexbox">
              <span class="flex1">To</span>
              <span class="flex2">白云机场</span>
            </div>
            <div class="flexbox">
              <span class="flex1">备注</span>
              <span class="flex2"></span>
            </div>
          </div>
        </el-card>

      </el-collapse-item>
      <div class="clear"></div>

      <el-collapse-item>
        <template slot="title">
          <div class="TitleLeft">Day 4</div>
          <div class="TitleCenter">2017-09-10</div>
          <div class="TitleRight">星期一</div>

        </template>
        <el-card class="box-card" @click.native="OpenDetail(0)">
          <div slot="header" class="clearfix flexboxtitle">
            <span class="Titleflex1">飞机</span>
            <span class="Titleflex2">中国东方航空&上海航空</span>
          </div>
          <div class="text item">
            <div class="flexbox">
              <span class="flex1">时间</span>
              <span class="flex2">20:35 ~ 23:00</span>
            </div>
            <div class="flexbox">
              <span class="flex1">From</span>
              <span class="flex2">虹桥机场T2</span>
            </div>
            <div class="flexbox">
              <span class="flex1">To</span>
              <span class="flex2">白云机场</span>
            </div>
            <div class="flexbox">
              <span class="flex1">备注</span>
              <span class="flex2"></span>
            </div>
          </div>
        </el-card>

      </el-collapse-item>
      <div class="clear"></div>

      <el-collapse-item>
        <template slot="title">
          <div class="TitleLeft">Day 5</div>
          <div class="TitleCenter">2017-09-11</div>
          <div class="TitleRight">星期二</div>

        </template>
        <el-card class="box-card" @click.native="OpenDetail(0)">
          <div slot="header" class="clearfix flexboxtitle">
            <span class="Titleflex1">飞机</span>
            <span class="Titleflex2">中国东方航空&上海航空</span>
          </div>
          <div class="text item">
            <div class="flexbox">
              <span class="flex1">时间</span>
              <span class="flex2">20:35 ~ 23:00</span>
            </div>
            <div class="flexbox">
              <span class="flex1">From</span>
              <span class="flex2">虹桥机场T2</span>
            </div>
            <div class="flexbox">
              <span class="flex1">To</span>
              <span class="flex2">白云机场</span>
            </div>
            <div class="flexbox">
              <span class="flex1">备注</span>
              <span class="flex2"></span>
            </div>
          </div>
        </el-card>

      </el-collapse-item>
      <div class="clear"></div>

      <el-collapse-item>
        <template slot="title">
          <div class="TitleLeft">Day 6</div>
          <div class="TitleCenter">2017-09-12</div>
          <div class="TitleRight">星期三</div>
        </template>
        <el-card class="box-card" @click.native="OpenDetail(0)">
          <div slot="header" class="clearfix flexboxtitle">
            <span class="Titleflex1">飞机</span>
            <span class="Titleflex2">中国东方航空&上海航空</span>
          </div>
          <div class="text item">
            <div class="flexbox">
              <span class="flex1">时间</span>
              <span class="flex2">20:35 ~ 23:00</span>
            </div>
            <div class="flexbox">
              <span class="flex1">From</span>
              <span class="flex2">虹桥机场T2</span>
            </div>
            <div class="flexbox">
              <span class="flex1">To</span>
              <span class="flex2">白云机场</span>
            </div>
            <div class="flexbox">
              <span class="flex1">备注</span>
              <span class="flex2"></span>
            </div>
          </div>
        </el-card>

      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>

export default {
  data() {
    return {
      msg: "Welcome to StarDust's Vue.js App"
    }
  },
  created() {
    document.getElementsByTagName("title")[0].innerText = this.$route.meta.title;
  },
  methods: {
    OpenDetail: function(val) {
      this.$router.push('/Detail/' + val)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}


.mint-header {
  background-color: #1D8CE0 !important;
  height: 45px !important;
  font-size: 18px;
}

.el-collapse-item__header__arrow.el-icon-arrow-right {
  float: left;
  line-height: 44px;
  color: white
}

.el-collapse-item__header {
  display: flex;
  background-color: #58B7FF !important;
}

.TitleLeft {
  flex: 1;
}

.TitleCenter {
  flex: 1;
  text-align: center;
}

.TitleRight {
  flex: 1;
  margin-right: 15px;
  text-align: right;
}

.TitleLeft,
.TitleCenter,
.TitleRight {
  font-size: 16px;
  color: white;
}

.ItemBox {
  border: #CDCDCD solid 1px;
  /* background: white; */
  border-radius: 10px;
  font-size: 14px;
}

.clear {
  clear: both;
}

.el-card {
  margin: 15px 0px;
}

.el-card__header {
  padding: 10px 20px;
  background: #20A0FF;
}

.el-collapse-item__content {
  padding: 0px 15px;
}

.el-collapse-item__wrap {
  background-color: #708090;
}

.el-card .span {
  line-height: 10px;
}

.flexboxtitle {
  display: flex;
  color: white;
  font-size: 16px;
}

.Titleflex1 {
  flex: 1;
  width: 25px;
}

.Titleflex2 {
  flex: 4;
  padding-left: 10px;
}

.flexbox {
  display: flex;
  font-size: 14px;
  margin: 5px;
}

.flex1 {
  flex: 1;
}

.flex2 {
  flex: 3;
  padding-left: 10px;
}
</style>
