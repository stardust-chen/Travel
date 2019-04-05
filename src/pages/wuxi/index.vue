<template>
  <div>
    <mt-navbar v-model="selected">
      <mt-tab-item id="0">Notice</mt-tab-item>
      <mt-tab-item id="1">Date</mt-tab-item>
      <mt-tab-item id="2">Category</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="0">
        <el-collapse accordion v-model="activeNames">
          <!-- 交通 -->
          <el-collapse-item name="1">
            <template slot="title">
              <div class="TitleLeft">出行前注意事项</div>
            </template>
            <!-- 卡片渲染 -->
            <boxcard v-for="(item,index) in cardNotice" :key="index" :data="item">
            </boxcard>

          </el-collapse-item>
        </el-collapse>
      </mt-tab-container-item>
      <mt-tab-container-item id="1">
        <!-- <div style="height = 4px;">&nbsp;</div> -->
        <!-- 日期模式选项卡内容 -->
        <el-collapse accordion>
          <!-- 4-13 -->
          <el-collapse-item>
            <template slot="title">
              <div class="TitleLeft">Day 1</div>
              <div class="TitleCenter">2019-04-13</div>
              <div class="TitleRight">星期六</div>
            </template>
            <!-- 卡片渲染 -->
            <boxcard v-for="(item,index) in cardDataDay1" :key="index" :data="item">
            </boxcard>
          </el-collapse-item>
          <div class="clear"></div>
          <!-- 4-14 -->
          <el-collapse-item>
            <template slot="title">
              <div class="TitleLeft">Day 2</div>
              <div class="TitleCenter">2019-04-14</div>
              <div class="TitleRight">星期日</div>
            </template>
            <!-- 卡片渲染 -->
            <boxcard v-for="(item,index) in cardDataDay2" :key="index" :data="item">
            </boxcard>
          </el-collapse-item>
          <div class="clear"></div>
        </el-collapse>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <!-- 分类模式选项卡内容 -->
        <el-collapse accordion>
          <!-- 交通 -->
          <el-collapse-item>
            <template slot="title">
              <div class="TitleLeft">交通</div>
            </template>

            <!-- 卡片渲染 -->
            <boxcard v-for="(item,index) in cardDataFilght" :key="index" :data="item">
            </boxcard>
            <!-- 卡片渲染 -->
            <boxcard v-for="(item,index) in cardDataDayTransport" :key="index" :data="item">
            </boxcard>

          </el-collapse-item>
          <!-- 酒店 -->
          <el-collapse-item>
            <template slot="title">
              <div class="TitleLeft">酒店</div>
            </template>
            <!-- 卡片渲染 -->
            <boxcard v-for="(item,index) in cardDataDayHotel" :key="index" :data="item">
            </boxcard>
          </el-collapse-item>

          <!-- 景点 -->
          <el-collapse-item>
            <template slot="title">
              <div class="TitleLeft">景点</div>
            </template>
            <!-- 卡片渲染 -->
            <boxcard v-for="(item,index) in cardDataDayScenery" :key="index" :data="item">
            </boxcard>
          </el-collapse-item>

          <!-- 美食 -->
          <el-collapse-item>
            <template slot="title">
              <div class="TitleLeft">美食</div>
            </template>
            <!-- 卡片渲染 -->
            <boxcard v-for="(item,index) in cardDataDayFood" :key="index" :data="item">
            </boxcard>
          </el-collapse-item>
          <!-- 购物 -->
          <el-collapse-item>
            <template slot="title">
              <div class="TitleLeft">购物</div>
            </template>
            <!-- 卡片渲染 -->
            <boxcard v-for="(item,index) in cardDataDayShopping" :key="index" :data="item">
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
      activeNames: ["1"],
      selected: "0",
      // 注意事项
      cardNotice: [
        {
          Type: "noticeHeader",
          Title: {},
          text: [
            { key: "出发时间", value: "2019-04-13 9:00" },
            { key: "集合地点", value: "<a href='iosamap://navi?sourceApplication=applicationName&poiname=fangheng&poiid=BGVIS&lat=31.186077&lon=121.449466&dev=0&style=2'>女神家楼下" },
            { key: "天气预报", value: "<a href='http://mfj.weather.com.cn/mweather/index.shtml?aid=101020100'>上海当前天气" },
            { key: "", value: "<a href='http://mfj.weather.com.cn/mweather/index.shtml?aid=101190201'>无锡当前天气" },
            { key: "", value: "<a href='http://mfj.weather.com.cn/mweather15d/index.shtml?aid=101190201'>无锡15日天气预报" },
            { key: "携带物品", value: "1. 自拍杆" },
            { key: "", value: "2. 墨镜/框架眼镜/隐形眼镜" },
            { key: "", value: "3. 湿巾纸&餐巾纸" },
            { key: "", value: "4. 防晒霜/护肤用品" },
            { key: "", value: "5. 运动相机" },
            { key: "", value: "<b>6. 身份证" },
            { key: "", value: "7. 旅行收纳袋/保鲜袋/垃圾袋" },
            { key: "注意事项", value: "<a href='https://h5.m.taobao.com/trip/travel-detail/index/index.html?id=536530655910&_fli_newpage=1&_fli_native_ver=9.1.5&categoryId=124866006&gsCallback=536530655910&spm=181.8947139.x2895152.d0-0&ttid=sem.000000735&_projVer=0.3.198'><b>1. 拈花湾门票需要提前一天23:30之前预订！" },
            { key: "", value: "2. " },
          ],
          url: false
        }
      ],
      // 日期数据
      cardDataDay1: [
        {
          Type: "hotelHeader",
          Title: {
            key: "住宿",
            value: "无锡新湖铂尔曼大酒店"
          },
          text: [

            {
              key: "快捷导航",
              value: "<a href='iosamap://navi?sourceApplication=applicationName&poiname=fangheng&poiid=BGVIS&lat=31.490512&lon=120.363823&dev=0&style=2'>无锡市高新开发区和风路30号"            },
            {
              key: "电话",
              value: "<a href='tel:0510-85308888'>0510-85308888"
            },
            { key: "注意事项", value: "4月13日14:00后可办理入住；" },
            { value: "4月14日12:00后需退房；" },
          ],
          url: "https://h5.m.taobao.com/trip/hotel/detail/detail.html?shid=10098131&checkIn=2019-04-05&checkOut=2019-04-06&spm=181.8947139.x2895152.d0-0&ttid=sem.000000735&_projVer=1.1.31&isInternational=0#/"
        },
        {
          Type: "sceneryHeader",
          Title: {
            key: "景点",
            value: "拈花湾"
          },
          text: [
            { key: "快捷导航", value: "" },
          ],
          url: false
        },

        // {
        //   Type: "flightHeader",
        //   Title: {
        //     key: "飞机",
        //     value: "全日空航空 NH968"
        //   },
        //   text: [
        //     { key: "时间", value: "01:45 ~ 05:40" },
        //     { key: "From", value: "上海浦东国际机场T2" },
        //     { key: "To", value: "日本东京羽田航空港" },
        //     { key: "备注", value: "携程航班动态" }
        //   ],
        //   url:
        //     "https://m.ctrip.com/webapp/hybrid/schedule/detail.html?navBarStyle=gray&queryDate=2018-05-09&flightNo=NH968&queryType=1&fromurl=https%3A%2F%2Fm.ctrip.com%2Fwebapp%2Fhybrid%2Fschedule%2Fsearch.html"
        // },
        // {
        //   Type: "transportHeader",
        //   Title: {
        //     key: "交通",
        //     value: "JR-京急机场线 / 京浜急行電鉄<br>A-都营浅草线"
        //   },
        //   text: [
        //     { key: "票价", value: "590日元" },
        //     { value: "<b>JR-京急机场线 / 京浜急行電鉄" },
        //     { key: "From", value: "羽田机场国际线航站楼" },
        //     { key: "To", value: "泉岳寺" },
        //     {
        //       value:
        //         "<a href='http://www.haneda-tokyo-access.com/cn/sp/'>羽田机场交通指南"
        //     },
        //     {
        //       value:
        //         "<a href='http://www.haneda-tokyo-access.com/cn/transport/international.html'>航站楼到车站 & 车站购票指南"
        //     },
        //     {
        //       value:
        //         "<a href='http://www.haneda-tokyo-access.com/cn/transport/trainlinemap.html'>京急路线图"
        //     },
        //     { value: "<b>A-都营浅草线" },
        //     { key: "From", value: "泉岳寺" },
        //     { key: "To", value: "东日本桥" },
        //     {
        //       value:
        //         "<a href='http://www.tokyometro.jp/lang_en/station/rosen_cs_1803.pdf'>东京地铁线路图"
        //     }
        //   ],
        //   url: false
        // },


        // {
        //   Type: "sceneryHeader",
        //   Title: {
        //     key: "景点",
        //     value: "目黑川赏樱"
        //   },
        //   text: [
        //     { key: "", value: "<b>H-日比谷线" },
        //     { key: "To", value: "中目黑" },
        //     { key: "开放时间", value: "全天" },
        //     {
        //       key: "介绍",
        //       value:
        //         "<a href='https://m.mafengwo.cn/poi/6777538.html'><b>目黑川Meguro Gawa"
        //     }
        //   ],
        //   url: false
        // },
        // {
        //   Type: "foodHeader",
        //   Title: {
        //     key: "美食",
        //     value: "キセキ食堂 Kiseki Shokudo"
        //   },
        //   text: [
        //     { key: "", value: "<b>JU-高崎线" },
        //     { key: "To", value: "上尾" },
        //     {
        //       key: "地址",
        //       value:
        //         "<a href='https://www.google.com/maps/dir/2+Chome-4-5+Nihonbashibakuroch%C5%8D,+Ch%C5%AB%C5%8D-ku,+T%C5%8Dky%C5%8D-to+103-0002%E6%97%A5%E6%9C%AC/%E6%97%A5%E6%9C%AC%E3%80%92362-0014+Saitama+Prefecture,+%E4%B8%8A%E5%B0%BE%E5%B8%82%E6%9C%AC%E7%94%BA%EF%BC%93%E4%B8%81%E7%9B%AE%EF%BC%91%EF%BC%91%E2%88%92%EF%BC%91%EF%BC%93+Kiseki+Shokudo/@35.830004,139.6855016,10z/data=!4m8!4m7!1m2!1m1!1s0x60188eadea7e94d1:0xeb07083ed634f942!1m2!1m1!1s0x6018c5f4025d0c19:0x86b42c40c8d188f!3e3'>Kiseki Shokudo, 日本〒362-0014 Saitama Prefecture, 上尾市本町３丁目１１−１３"
        //     },
        //     {
        //       key: "电话",
        //       value: "<a href='tel:+81-70-3529-8553'>+81-70-3529-8553"
        //     },
        //     { key: "开放时间", value: "周一至周五<br>11:00–14:30 17:00–19:30" },
        //     { key: "", value: "周六周日<br>休息" },
        //     {
        //       key: "介绍",
        //       value:
        //         "<a href='https://www.bilibili.com/video/av21878075?from=search&seid=8317774442469761360'><b>【孤独的美食家】S7EP01：猪肉之路深不可测"
        //     }
        //   ],
        //   url: false
        // }
      ],
      cardDataDay2: [

      ],
    };
  },
  computed: {
    AllCardInfo() {
      return this.cardDataDay1.concat(
        this.cardDataDay2
      );
    },
    cardDataFilght() {
      return this.AllCardInfo.filter(item => {
        return item.Type == "flightHeader";
      });
    },
    cardDataDayTransport() {
      return this.AllCardInfo.filter(item => {
        return item.Type == "transportHeader";
      });
    },
    cardDataDayHotel() {
      return this.AllCardInfo.filter(item => {
        return item.Type == "hotelHeader";
      });
    },
    cardDataDayFood() {
      return this.AllCardInfo.filter(item => {
        return item.Type == "foodHeader";
      });
    },
    cardDataDayScenery() {
      return this.AllCardInfo.filter(item => {
        return item.Type == "sceneryHeader";
      });
    },
    cardDataDayShopping() {
      return this.AllCardInfo.filter(item => {
        return item.Type == "shoppingHeader";
      });
    }
  },
  components: {
    boxcard
  },
  created() {
    document.getElementsByTagName("title")[0].innerText = this.$route.meta.title;
    // console.log(this.$route.meta.title)
  },
  methods: {}
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

.noticeHeader .el-card__header {
  display: none;
}

.shoppingHeader .el-card__header {
  background: #00ffdd;
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
