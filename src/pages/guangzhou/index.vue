<template>
  <div>
    <!-- <mt-header title="广州移动路书"></mt-header> -->
    <!-- <div style="height:45px"></div> -->
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">Date</mt-tab-item>
      <mt-tab-item id="2">Category</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <!-- <div style="height = 4px;">&nbsp;</div> -->
        <!-- 日期模式选项卡内容 -->
        <el-collapse accordion>
          <!-- 9-8 -->
          <el-collapse-item>
            <template slot="title">
              <div class="TitleLeft">Day 1</div>
              <div class="TitleCenter">2017-09-08</div>
              <div class="TitleRight">星期五</div>
            </template>
            <!-- MU9315 -->
            <el-card class="box-card flightHeader" @click.native="OpenDetail(0)">
              <div slot="header" class="clearfix flexboxtitle">
                <span class="Titleflex1">飞机</span>
                <span class="Titleflex2">中国东方航空&上海航空 MU9315</span>
              </div>
              <div class="text item">
                <div class="flexbox">
                  <span class="flex1">时间</span>
                  <span class="flex2">20:35 ~ 23:00</span>
                </div>
                <div class="flexbox">
                  <span class="flex1">From</span>
                  <span class="flex2">上海虹桥机场T2</span>
                </div>
                <div class="flexbox">
                  <span class="flex1">To</span>
                  <span class="flex2">广州白云国际机场</span>
                </div>
                <div class="flexbox">
                  <span class="flex1">备注</span>
                  <span class="flex2">携程航班动态</span>
                </div>
              </div>
            </el-card>
            <!-- 白云机场接机 -->
            <el-card class="box-card transportHeader">
              <div slot="header" class="clearfix flexboxtitle">
                <span class="Titleflex1">接机</span>
                <span class="Titleflex2">飞猪旅行</span>
              </div>
              <div class="text item">
                <div class="flexbox">
                  <span class="flex1">时间</span>
                  <span class="flex2">23:00 ~ 00:00</span>
                </div>
                <div class="flexbox">
                  <span class="flex1">From</span>
                  <span class="flex2">广州白云国际机场</span>
                </div>
                <div class="flexbox">
                  <span class="flex1">To</span>
                  <span class="flex2">全季酒店广州火车东站店</span>
                </div>
                <div class="flexbox">
                  <span class="flex1">司机</span>
                  <span class="flex2">曾奎新&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="tel:18620188634">18620188634</a>
                  </span>
                </div>
                <div class="flexbox">
                  <span class="flex1">备注</span>
                  <span class="flex2">粤A7HJ70&nbsp;&nbsp;&nbsp;免费等待一小时</span>
                </div>
              </div>
            </el-card>
          </el-collapse-item>
          <div class="clear"></div>
          <!-- 9-9 -->
          <el-collapse-item>
            <template slot="title">
              <div class="TitleLeft">Day 2</div>
              <div class="TitleCenter">2017-09-09</div>
              <div class="TitleRight">星期六</div>

            </template>
            <!-- 全季酒店 -->
            <el-card class="box-card hotelHeader" @click.native="OpenDetail(1)">
              <div slot="header" class="clearfix flexboxtitle">
                <span class="Titleflex1">酒店</span>
                <span class="Titleflex2">全季酒店广州火车东站店</span>
              </div>
              <div class="text item">
                <div class="flexbox">
                  <span class="flex1">地址</span>
                  <span class="flex2">林和中路180号</span>
                </div>
                <div class="flexbox">
                  <span class="flex1">电话</span>
                  <span class="flex2">
                    <a href="tel:020-38770000">020-38770000</a>
                  </span>
                </div>
                <div class="flexbox">
                  <span class="flex1">地铁</span>
                  <span class="flex2">3号线 广州东站 F号口</span>
                </div>
              </div>
            </el-card>
            <!-- 点都德 -->
            <el-card class="box-card foodHeader" @click.native="OpenDetail(7)">
              <div slot="header" class="clearfix flexboxtitle">
                <span class="Titleflex1">美食</span>
                <span class="Titleflex2">点都德（和兴楼店）</span>
              </div>
              <div class="text item">
                <div class="flexbox">
                  <span class="flex1">地址</span>
                  <span class="flex2">林和中路148号(嘉逸豪庭酒店旁)</span>
                </div>
                <div class="flexbox">
                  <span class="flex1">电话</span>
                  <span class="flex2">
                    <a href="tel:020-87573586">020-87573586</a>
                  </span>
                </div>
                <div class="flexbox">
                  <span class="flex1">备注</span>
                  <span class="flex2">8.8折 周一至周五指定时间<br>步行5分钟(454米) 提前排号<br>凤凰流沙包 四色虾饺 荔湾艇仔粥</span>
                </div>
              </div>
            </el-card>
            <!-- 喜茶 -->
            <el-card class="box-card foodHeader" @click.native="OpenDetail(2)">
              <div slot="header" class="clearfix flexboxtitle">
                <span class="Titleflex1">美食</span>
                <span class="Titleflex2">喜茶（东方宝泰店）</span>
              </div>
              <div class="text item">
                <div class="flexbox">
                  <span class="flex1">地址</span>
                  <span class="flex2">广州东站东方宝泰B3层大食代附近</span>
                </div>
                <div class="flexbox">
                  <span class="flex1">电话</span>
                  <span class="flex2">
                    <a href="tel:020-38615321">020-38615321</a>
                  </span>
                </div>
                <div class="flexbox">
                  <span class="flex1">地铁</span>
                  <span class="flex2">3号线 广州东站 G号口</span>
                </div>
              </div>
            </el-card>
            <!-- 芳叔 -->
            <el-card class="box-card foodHeader" @click.native="OpenDetail(3)">
              <div slot="header" class="clearfix flexboxtitle">
                <span class="Titleflex1">美食</span>
                <span class="Titleflex2">芳叔（东方宝泰店）</span>
              </div>
              <div class="text item">
                <div class="flexbox">
                  <span class="flex1">地址</span>
                  <span class="flex2">广州东站东方宝泰B2层2003B</span>
                </div>
                <div class="flexbox">
                  <span class="flex1">电话</span>
                  <span class="flex2">
                    <a href="tel:020-38096403">020-38096403</a>
                  </span>
                </div>
                <div class="flexbox">
                  <span class="flex1">地铁</span>
                  <span class="flex2">3号线 广州东站 G号口</span>
                </div>
              </div>
            </el-card>
            <!-- 陶陶居酒家 -->
            <el-card class="box-card foodHeader" @click.native="OpenDetail(8)">
              <div slot="header" class="clearfix flexboxtitle">
                <span class="Titleflex1">美食</span>
                <span class="Titleflex2">陶陶居酒家（正佳广场店）</span>
              </div>
              <div class="text item">
                <div class="flexbox">
                  <span class="flex1">地址</span>
                  <span class="flex2">天河路228号正佳广场6层C059铺</span>
                </div>
                <div class="flexbox">
                  <span class="flex1">电话</span>
                  <span class="flex2">
                    <a href="tel:020-38373301">020-38373301</a>
                  </span>
                </div>
                <div class="flexbox">
                  <span class="flex1">地铁</span>
                  <span class="flex2">1号线 体育中心 D3号口</span>
                </div>
                <div class="flexbox">
                  <span class="flex1">备注</span>
                  <span class="flex2">提前排号<br>陶陶居大虾饺 榴莲天鹅酥 酥皮水牛奶菠萝包</span>
                </div>
              </div>
            </el-card>
          </el-collapse-item>
          <div class="clear"></div>
          <!-- 9-10 -->
          <el-collapse-item>
            <template slot="title">
              <div class="TitleLeft">Day 3</div>
              <div class="TitleCenter">2017-09-10</div>
              <div class="TitleRight">星期日</div>

            </template>
            <!-- 喜茶 -->
            <el-card class="box-card foodHeader" @click.native="OpenDetail(2)">
              <div slot="header" class="clearfix flexboxtitle">
                <span class="Titleflex1">美食</span>
                <span class="Titleflex2">喜茶（东方宝泰店）</span>
              </div>
              <div class="text item">
                <div class="flexbox">
                  <span class="flex1">地址</span>
                  <span class="flex2">广州东站东方宝泰B3层大食代附近</span>
                </div>
                <div class="flexbox">
                  <span class="flex1">电话</span>
                  <span class="flex2">
                    <a href="tel:020-38615321">020-38615321</a>
                  </span>
                </div>
                <div class="flexbox">
                  <span class="flex1">地铁</span>
                  <span class="flex2">3号线 广州东站 G号口</span>
                </div>
              </div>
            </el-card>
          </el-collapse-item>
          <div class="clear"></div>
          <!-- 9-11 -->
          <el-collapse-item>
            <template slot="title">
              <div class="TitleLeft">Day 4</div>
              <div class="TitleCenter">2017-09-11</div>
              <div class="TitleRight">星期一</div>

            </template>
            <!-- 长隆 -->
            <el-card class="box-card sceneryHeader" @click.native="OpenDetail(6)">
              <div slot="header" class="clearfix flexboxtitle">
                <span class="Titleflex1">景点</span>
                <span class="Titleflex2">长隆欢乐世界</span>
              </div>
              <div class="text item">
                <div class="flexbox">
                  <span class="flex1">地址</span>
                  <span class="flex2"></span>
                </div>
                <div class="flexbox">
                  <span class="flex1">电话</span>
                  <span class="flex2">
                    <!-- <a href="tel:"></a> -->
                  </span>
                </div>
                <div class="flexbox">
                  <span class="flex1">地铁</span>
                  <span class="flex2"></span>
                </div>
              </div>
            </el-card>
          </el-collapse-item>
          <div class="clear"></div>
          <!-- 9-12 -->
          <el-collapse-item>
            <template slot="title">
              <div class="TitleLeft">Day 5</div>
              <div class="TitleCenter">2017-09-12</div>
              <div class="TitleRight">星期二</div>
            </template>

            <!-- 铂尔曼 -->
            <el-card class="box-card hotelHeader" @click.native="OpenDetail(5)">
              <div slot="header" class="clearfix flexboxtitle">
                <span class="Titleflex1">酒店</span>
                <span class="Titleflex2">广州白云机场铂尔曼大酒店</span>
              </div>
              <div class="text item">
                <div class="flexbox">
                  <span class="flex1">地址</span>
                  <span class="flex2">白云国际机场出发厅13号门正对面</span>
                </div>
                <div class="flexbox">
                  <span class="flex1">电话</span>
                  <span class="flex2">
                    <a href="tel:4001208819">4001208819</a>
                  </span>
                </div>
                <div class="flexbox">
                  <span class="flex1">电话</span>
                  <span class="flex2">
                    <a href="tel:020-36068866">020-36068866</a>
                  </span>
                </div>
                <div class="flexbox">
                  <span class="flex1">地铁</span>
                  <span class="flex2">3号线 机场南 A/D号口</span>
                </div>
              </div>
            </el-card>

          </el-collapse-item>
          <div class="clear"></div>
          <!-- 9-13 -->
          <el-collapse-item>
            <template slot="title">
              <div class="TitleLeft">Day 6</div>
              <div class="TitleCenter">2017-09-13</div>
              <div class="TitleRight">星期三</div>
            </template>
            <!-- HU7141 -->
            <el-card class="box-card flightHeader" @click.native="OpenDetail(4)">
              <div slot="header" class="clearfix flexboxtitle">
                <span class="Titleflex1">飞机</span>
                <span class="Titleflex2">海南航空 HU7141</span>
              </div>
              <div class="text item">
                <div class="flexbox">
                  <span class="flex1">时间</span>
                  <span class="flex2">11:55 ~ 14:25</span>
                </div>
                <div class="flexbox">
                  <span class="flex1">From</span>
                  <span class="flex2">广州白云国际机场</span>
                </div>
                <div class="flexbox">
                  <span class="flex1">To</span>
                  <span class="flex2">上海浦东国际机场T2</span>
                </div>
                <div class="flexbox">
                  <span class="flex1">备注</span>
                  <span class="flex2">携程航班动态</span>
                </div>
              </div>
            </el-card>

          </el-collapse-item>
        </el-collapse>

      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <!-- 分类模式选项卡内容 -->
      </mt-tab-container-item>
    </mt-tab-container>

  </div>
</template>

<script>

export default {
  data() {
    return {
      selected: '1',
      msg: "Welcome to StarDust's Vue.js App",
    }
  },
  created() {
    document.getElementsByTagName("title")[0].innerText = "广州路书";
  },
  methods: {

    // 点击card打开详情
    OpenDetail: function(val) {
      // this.$router.push('/Detail/' + val)
      switch (val) {
        case -1:
          window.location.href = "http://www.baidu.com";
          break;
        case 0:
          //  携程MU9315
          window.location.href = "https://m.ctrip.com/webapp/hybrid/schedule/detail.html?navBarStyle=gray&queryDate=2017-09-08&flightNo=MU9315&queryType=1";
          break;
        case 1:
          // 全季
          window.location.href = "http://m.dianping.com/shop/38152022";
          break;
        case 2:
          // 喜茶
          window.location.href = "https://m.dianping.com/shop/27011586";
          break;
        case 3:
          // 芳叔
          window.location.href = "https://m.dianping.com/shop/15926818";
          break;
        case 4:
          // 携程HU7141
          window.location.href = "https://m.ctrip.com/webapp/hybrid/schedule/detail.html?navBarStyle=gray&queryDate=2017-09-13&flightNo=HU7141&queryType=1";
          break;
        case 5:
          // 铂尔曼
          window.location.href = "https://m.dianping.com/shop/2333011";
          break;
        case 6:
          // 长隆欢乐世界
          window.location.href = "https://m.dianping.com/shop/1880545";
          break;
        case 7:
          // 点都德和兴楼
          window.location.href = "https://m.dianping.com/shop/77343125";
          break;
        case 8:
          // 陶陶居
          window.location.href = "https://m.dianping.com/shop/23461615";
          break;
        case 9:
          // window.location.href = "";
          break;
        case 10:
          // window.location.href = "";
          break;
        case 11:
          // window.location.href = "";
          break;
        case 12:
          // window.location.href = "";
          break;
        case 13:
          // window.location.href = "";
          break;
        case 14:
          // window.location.href = "";
          break;
        case 15:
          // window.location.href = "";
          break;
        case 16:
          // window.location.href = "";
          break;
        default:
          break;
      }

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.mint-header {
  background-color: #26a2ff !important;
  height: 45px !important;
  font-size: 18px;
}

.mint-navbar {
  margin-bottom: 5px !important;
}

.mint-tab-item-label {
  font-size: 18px;
  /* font-weight: bold; */
}

.el-collapse-item__header__arrow.el-icon-arrow-right {
  float: left;
  line-height: 44px;
  color: white
}

.el-collapse-item__header {
  display: flex;
  background-color: #26a2ff !important;
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
  margin: 15px 0px !important;
}

.el-card__header {
  padding: 10px 20px !important;
}

.flightHeader .el-card__header {
  background: #4062e0;
}

.transportHeader .el-card__header {
  background: #64c819
}

.hotelHeader .el-card__header {
  background: #ee842c
}

.foodHeader .el-card__header {
  background: #9f4fe9
}

.sceneryHeader .el-card__header {
  background: #e14da4
}

.el-collapse-item__content {
  padding: 0px 15px !important;
}

.el-collapse-item__wrap {
  background-color: #CDCDCD !important;
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
