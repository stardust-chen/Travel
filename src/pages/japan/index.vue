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
          <!-- 5-9 -->
          <el-collapse-item>
            <template slot="title">
              <div class="TitleLeft">Day 1</div>
              <div class="TitleCenter">2018-05-09</div>
              <div class="TitleRight">星期三</div>
            </template>
            <!-- 卡片渲染 -->
            <boxcard v-for="(item,index) in cardDataDay1" :key="index" :data="item">
            </boxcard>
          </el-collapse-item>
          <div class="clear"></div>
          <!-- 5-10 -->
          <el-collapse-item>
            <template slot="title">
              <div class="TitleLeft">Day 2</div>
              <div class="TitleCenter">2018-05-10</div>
              <div class="TitleRight">星期四</div>
            </template>
            <!-- 卡片渲染 -->
            <boxcard v-for="(item,index) in cardDataDay2" :key="index" :data="item">
            </boxcard>
          </el-collapse-item>
          <div class="clear"></div>
          <!-- 5-11 -->
          <el-collapse-item>
            <template slot="title">
              <div class="TitleLeft">Day 3</div>
              <div class="TitleCenter">2018-05-11</div>
              <div class="TitleRight">星期五</div>
            </template>
            <!-- 卡片渲染 -->
            <boxcard v-for="(item,index) in cardDataDay3" :key="index" :data="item">
            </boxcard>
          </el-collapse-item>
          <div class="clear"></div>
          <!-- 5-12 -->
          <el-collapse-item>
            <template slot="title">
              <div class="TitleLeft">Day 4</div>
              <div class="TitleCenter">2018-05-12</div>
              <div class="TitleRight">星期六</div>
            </template>
            <!-- 卡片渲染 -->
            <boxcard v-for="(item,index) in cardDataDay4" :key="index" :data="item">
            </boxcard>
          </el-collapse-item>
          <div class="clear"></div>
          <!-- 5-13 -->
          <el-collapse-item>
            <template slot="title">
              <div class="TitleLeft">Day 5</div>
              <div class="TitleCenter">2018-05-13</div>
              <div class="TitleRight">星期日</div>
            </template>
            <!-- 卡片渲染 -->
            <boxcard v-for="(item,index) in cardDataDay5" :key="index" :data="item">
            </boxcard>
          </el-collapse-item>
          <div class="clear"></div>
          <!-- 5-14 -->
          <el-collapse-item>
            <template slot="title">
              <div class="TitleLeft">Day 6</div>
              <div class="TitleCenter">2018-05-14</div>
              <div class="TitleRight">星期一</div>
            </template>
            <!-- 卡片渲染 -->
            <boxcard v-for="(item,index) in cardDataDay6" :key="index" :data="item">
            </boxcard>
          </el-collapse-item>
        </el-collapse>

      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <!-- 分类模式选项卡内容 -->
        <el-collapse accordion>
          <!-- 飞机 -->
          <el-collapse-item>
            <template slot="title">
              <div class="TitleLeft">飞机</div>
            </template>

            <!-- 卡片渲染 -->
            <boxcard v-for="(item,index) in cardDataFilght" :key="index" :data="item">
            </boxcard>

          </el-collapse-item>
          <!-- 酒店 -->
          <el-collapse-item>
            <template slot="title">
              <div class="TitleLeft">酒店</div>
            </template>
            <!-- 卡片渲染 -->
            <boxcard v-for="(item,index) in cardDataDay1" :key="index" :data="item">
            </boxcard>
          </el-collapse-item>

          <!-- 景点 -->
          <el-collapse-item>
            <template slot="title">
              <div class="TitleLeft">景点</div>
            </template>
            <!-- 卡片渲染 -->
            <boxcard v-for="(item,index) in cardDataDay1" :key="index" :data="item">
            </boxcard>
          </el-collapse-item>

          <!-- 美食 -->
          <el-collapse-item>
            <template slot="title">
              <div class="TitleLeft">美食</div>
            </template>
            <!-- 卡片渲染 -->
            <boxcard v-for="(item,index) in cardDataDay1" :key="index" :data="item">
            </boxcard>
          </el-collapse-item>

        </el-collapse>

      </mt-tab-container-item>
    </mt-tab-container>

  </div>
</template>

<script>
import boxcard from "@/components/box-card";
export default {
  data() {
    return {
      selected: "1",
      // 日期数据
      cardDataDay1: [
        {
          Type: "flightHeader",
          Title: {
            key: "飞机",
            value: "全日空航空 NH968"
          },
          text: [
            { key: "时间", value: "01:45 ~ 05:40" },
            { key: "From", value: "上海浦东国际机场T2" },
            { key: "To", value: "日本东京羽田航空港" },
            { key: "备注", value: "携程航班动态" }
          ],
          url:
            "https://m.ctrip.com/webapp/hybrid/schedule/detail.html?navBarStyle=gray&queryDate=2018-05-09&flightNo=NH968&queryType=1&fromurl=https%3A%2F%2Fm.ctrip.com%2Fwebapp%2Fhybrid%2Fschedule%2Fsearch.html"
        },
        {
          Type: "transportHeader",
          Title: {
            key: "交通",
            value: "JR-京急机场线 / 京浜急行電鉄<br>A-都营浅草线"
          },
          text: [
            { value: "<b>JR-京急机场线 / 京浜急行電鉄</b>" },
            { key: "From", value: "羽田机场国际线航站楼" },
            { key: "To", value: "泉岳寺" },
            {
              value:
                "<a href='http://www.haneda-tokyo-access.com/cn/sp/'>羽田机场交通指南</a>"
            },
            {
              value:
                "<a href='http://www.haneda-tokyo-access.com/cn/transport/international.html'>航站楼到车站 & 车站购票指南</a>"
            },
            {
              value:
                "<a href='http://www.haneda-tokyo-access.com/cn/transport/trainlinemap.html'>京急路线图</a>"
            },
            { value: "<b>A-都营浅草线</b>" },
            { key: "From", value: "泉岳寺" },
            { key: "To", value: "东日本桥" },
            {
              value:
                "<a href='http://www.tokyometro.jp/lang_en/station/rosen_cs_1803.pdf'>东京地铁线路图</a>"
            }
          ],
          url: ""
        },
        {
          Type: "hotelHeader",
          Title: {
            key: "住宿",
            value: "中央区民宿"
          },
          text: [
            {
              key: "地址",
              value:
                "2 Chome-4-5 Nihonbashibakurochō, 中央区, 东京市 103-0002, 日本"
            },
            { key: "房东", value: "Torinoth" },
            {
              key: "电话",
              value: "<a href='tel:+81-70-1254-0906'>+81-70-1254-0906</a>"
            },
            {
              key: "",
              value: "<a href='tel:+81-90-4436-0906'>+81-90-4436-0906</a>"
            },
            { key: "注意事项", value: "禁止吸烟，进屋请穿拖鞋；" },
            { value: "5月9日12:00后可寄放行李，16:00后可随时入住；" },
            { value: "5月14日可寄放行李至20:00，11:00后需退房；" },
            { value: "退房时请勿将任何物品放在冰箱内；" },
            { value: "除卫生纸外，请勿将任何东西冲进马桶；" },
            {
              value: "阳台上有三个大的垃圾箱，请务必把垃圾分类扔进去；"
            }
          ],
          url:
            "http://google.com/maps/place/2+Chome-4-5+Nihonbashibakuroch%C5%8D%2B%E4%B8%AD%E5%A4%AE%E5%8C%BA%2C+%E4%B8%9C%E4%BA%AC%E5%B8%82+103-0002%2B%E6%97%A5%E6%9C%AC"
        }
      ],
      cardDataDay2: [],
      cardDataDay3: [],
      cardDataDay4: [],
      cardDataDay5: [],
      cardDataDay6: [
        {
          Type: "flightHeader",
          Title: {
            key: "飞机",
            value: "全日空航空 NH967"
          },
          text: [
            { key: "时间", value: "22:30 ~ 00:35" },
            { key: "From", value: "日本东京羽田航空港" },
            { key: "To", value: "上海浦东国际机场T2" },
            { key: "备注", value: "携程航班动态" }
          ],
          url:
            "https://m.ctrip.com/webapp/hybrid/schedule/detail.html?navBarStyle=gray&queryDate=2018-05-14&flightNo=nh967&queryType=1&fromurl=https%3A%2F%2Fm.ctrip.com%2Fwebapp%2Fhybrid%2Fschedule%2Fsearch.html"
        }
      ],
      // 分类数据
      cardDataFilght: [
        {
          Type: "flightHeader",
          Title: {
            key: "飞机",
            value: "全日空航空 NH968"
          },
          text: [
            { key: "日期", value: "2018年5月9日" },
            { key: "时间", value: "01:45 ~ 05:40" },
            { key: "From", value: "上海浦东国际机场T2" },
            { key: "To", value: "日本东京羽田航空港" },
            { key: "备注", value: "携程航班动态" }
          ],
          url:
            "https://m.ctrip.com/webapp/hybrid/schedule/detail.html?navBarStyle=gray&queryDate=2018-05-09&flightNo=NH968&queryType=1&fromurl=https%3A%2F%2Fm.ctrip.com%2Fwebapp%2Fhybrid%2Fschedule%2Fsearch.html"
        },
        {
          Type: "flightHeader",
          Title: {
            key: "飞机",
            value: "全日空航空 NH967"
          },
          text: [
            { key: "日期", value: "2018年5月14日" },
            { key: "时间", value: "22:30 ~ 00:35" },
            { key: "From", value: "日本东京羽田航空港" },
            { key: "To", value: "上海浦东国际机场T2" },
            { key: "备注", value: "携程航班动态" }
          ],
          url:
            "https://m.ctrip.com/webapp/hybrid/schedule/detail.html?navBarStyle=gray&queryDate=2018-05-14&flightNo=nh967&queryType=1&fromurl=https%3A%2F%2Fm.ctrip.com%2Fwebapp%2Fhybrid%2Fschedule%2Fsearch.html"
        }
      ],
      cardDataDayTransport: [],
      cardDataDayHotel: [],
      cardDataDayFood: [],
      cardDataDayScenery: []
    };
  },
  components: {
    boxcard
  },
  created() {
    document.getElementsByTagName("title")[0].innerText =
      "2018意大利炮征战霓虹";
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
          //  携程NH968
          window.location.href =
            "https://m.ctrip.com/webapp/hybrid/schedule/detail.html?navBarStyle=gray&queryDate=2018-05-09&flightNo=NH968&queryType=1&fromurl=https%3A%2F%2Fm.ctrip.com%2Fwebapp%2Fhybrid%2Fschedule%2Fsearch.html";
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
          // 携程NH967
          window.location.href =
            "https://m.ctrip.com/webapp/hybrid/schedule/detail.html?navBarStyle=gray&queryDate=2018-05-14&flightNo=NH967&queryType=1&fromurl=https%3A%2F%2Fm.ctrip.com%2Fwebapp%2Fhybrid%2Fschedule%2Fsearch.html";
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
          // 陶陶居正佳
          window.location.href = "https://m.dianping.com/shop/23461615";
          break;
        case 9:
          // 九龙冰室正佳
          window.location.href = "https://m.dianping.com/shop/20731966";
          break;
        case 10:
          // 炸鸡
          window.location.href = "https://m.dianping.com/shop/19276441";
          break;
        case 11:
          // 星美乐
          window.location.href = "https://m.dianping.com/shop/66188262";
          break;
        case 12:
          // 炳胜品味(天河店)
          window.location.href = "https://m.dianping.com/shop/518913";
          break;
        case 13:
          // 炳胜品味(珠江新城店)
          window.location.href = "https://m.dianping.com/shop/2954893";
          break;
        case 14:
          // 广州塔
          window.location.href =
            "http://m.ctrip.com/webapp/ticket/dest/t107540.html";
          break;
        case 15:
          // 珠江夜游
          window.location.href =
            "https://h5.m.taobao.com/trip/search/list/index.html?searchType=%E9%97%A8%E7%A5%A8&keyword=%E7%8F%A0%E6%B1%9F%E5%A4%9C%E6%B8%B8&_req_param_=%7B%22searchQuery%22%3A%22%E7%8F%A0%E6%B1%9F%E5%A4%9C%E6%B8%B8%22%7D&globalSearchSource=default&rword=%E7%8F%A0%E6%B1%9F%E5%A4%9C%E6%B8%B8&isFromFZSeHome=1&spm=181.7871893.1998854396.0701&ttid=12bai0000004&_projVer=0.2.53";
          break;
        case 16:
          // 北京路
          window.location.href =
            "https://m.dianping.com/shoplist/4/search?from=m_search&keyword=%E5%8C%97%E4%BA%AC%E8%B7%AF";
          break;
        case 17:
          // 仁信双皮奶
          window.location.href = "https://m.dianping.com/shop/50322315";
          break;
        case 18:
          // 百花甜品店
          window.location.href = "https://m.dianping.com/shop/520004";
          break;
        case 19:
          // 上下九
          window.location.href =
            "https://m.dianping.com/shoplist/4/search?from=m_search&keyword=%E4%B8%8A%E4%B8%8B%E4%B9%9D%E6%AD%A5%E8%A1%8C%E8%A1%97&from_suggest=history";
          break;
        case 20:
          // 沙面
          window.location.href = "https://m.dianping.com/shop/1596313";
          break;
        case 21:
          // 陶然轩
          window.location.href = "https://m.dianping.com/shop/519515";
          break;
        case 22:
          // 长隆水上乐园
          window.location.href =
            "https://h5.m.taobao.com/trip/ticket/detail/index.html";
          break;
        case 23:
          // 长隆欢乐世界
          // window.location.href = "https://h5.m.taobao.com/trip/ticket/detail/index.html";
          break;

        default:
          break;
      }
    }
  }
};
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
  font-size: 18px !important;
  /* font-weight: bold; */
}

.el-collapse-item__header__arrow.el-icon-arrow-right {
  float: left;
  line-height: 44px;
  color: white;
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
  border: #cdcdcd solid 1px;
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
  background: #64c819;
}

.hotelHeader .el-card__header {
  background: #ee842c;
}

.foodHeader .el-card__header {
  background: #9f4fe9;
}

.sceneryHeader .el-card__header {
  background: #e14da4;
}

.el-collapse-item__content {
  padding: 0px 15px !important;
}

.el-collapse-item__wrap {
  background-color: #cdcdcd !important;
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
