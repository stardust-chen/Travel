<template>
  <div>
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
            { key: "票价", value: "" },
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
          url: false
        },
        {
          Type: "hotelHeader",
          Title: {
            key: "住宿",
            value: "中央区民宿"
          },
          text: [
            {
              key: "谷歌地图",
              value:
                "<a href='http://google.com/maps/place/2+Chome-4-5+Nihonbashibakuroch%C5%8D%2B%E4%B8%AD%E5%A4%AE%E5%8C%BA%2C+%E4%B8%9C%E4%BA%AC%E5%B8%82+103-0002%2B%E6%97%A5%E6%9C%AC'>2 Chome-4-5 Nihonbashibakurochō, 中央区, 东京市 103-0002, 日本</a>"
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
          url: false
        },
        {
          Type: "sceneryHeader",
          Title: { key: "景点", value: "台场" },
          text: [{ key: "", value: "" }],
          url: false
        }
      ],
      cardDataDay2: [
        {
          Type: "sceneryHeader",
          Title: { key: "骑车", value: "镰仓江之岛" },
          text: [{ key: "", value: "" }],
          url: false
        }
      ],
      cardDataDay3: [
        {
          Type: "sceneryHeader",
          Title: { key: "景点", value: "富士山" },
          text: [{ key: "", value: "" }],
          url: false
        }
      ],
      cardDataDay4: [
        {
          Type: "sceneryHeader",
          Title: { key: "景点", value: "秋叶原步行街" },
          text: [{ key: "", value: "" }],
          url: false
        }
      ],
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
      ]
    };
  },
  computed: {
    AllCardInfo() {
      return this.cardDataDay1.concat(
        this.cardDataDay2,
        this.cardDataDay3,
        this.cardDataDay4,
        this.cardDataDay5,
        this.cardDataDay6
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
    }
  },
  components: {
    boxcard
  },
  created() {
    document.getElementsByTagName("title")[0].innerText =
      "2018意大利炮征战霓虹";
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
