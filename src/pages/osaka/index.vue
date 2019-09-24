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
        <el-collapse accordion v-model="activeNames">
          <!-- 10-03-->
          <el-collapse-item name="1">
            <template slot="title">
              <div class="TitleLeft">Day 1</div>
              <div class="TitleCenter">2019-10-03</div>
              <div class="TitleRight">星期四</div>
            </template>
            <!-- 卡片渲染 -->
            <boxcard v-for="(item,index) in cardDataDay1" :key="index" :data="item">
            </boxcard>
          </el-collapse-item>
          <div class="clear"></div>
          <!-- 10-04 -->
          <el-collapse-item name="2">
            <template slot="title">
              <div class="TitleLeft">Day 2</div>
              <div class="TitleCenter">2019-10-04</div>
              <div class="TitleRight">星期五</div>
            </template>
            <!-- 卡片渲染 -->
            <boxcard v-for="(item,index) in cardDataDay2" :key="index" :data="item">
            </boxcard>
          </el-collapse-item>
          <div class="clear"></div>
          <!-- 10-05 -->
          <el-collapse-item name="3">
            <template slot="title">
              <div class="TitleLeft">Day 3</div>
              <div class="TitleCenter">2019-10-05</div>
              <div class="TitleRight">星期六</div>
            </template>
            <!-- 卡片渲染 -->
            <boxcard v-for="(item,index) in cardDataDay3" :key="index" :data="item">
            </boxcard>
          </el-collapse-item>
          <div class="clear"></div>
          <!-- 10-06 -->
          <el-collapse-item name="4">
            <template slot="title">
              <div class="TitleLeft">Day 4</div>
              <div class="TitleCenter">2019-10-06</div>
              <div class="TitleRight">星期日</div>
            </template>
            <!-- 卡片渲染 -->
            <boxcard v-for="(item,index) in cardDataDay4" :key="index" :data="item">
            </boxcard>
          </el-collapse-item>
          <div class="clear"></div>
          <!-- 10-07 -->
          <el-collapse-item name="5">
            <template slot="title">
              <div class="TitleLeft">Day 5</div>
              <div class="TitleCenter">2019-10-07</div>
              <div class="TitleRight">星期一</div>
            </template>
            <!-- 卡片渲染 -->
            <boxcard v-for="(item,index) in cardDataDay5" :key="index" :data="item">
            </boxcard>
          </el-collapse-item>
          <div class="clear"></div>
          <!-- 10-08 -->
          <el-collapse-item name="6">
            <template slot="title">
              <div class="TitleLeft">Day 6</div>
              <div class="TitleCenter">2019-10-08</div>
              <div class="TitleRight">星期二</div>
            </template>
            <!-- 卡片渲染 -->
            <boxcard v-for="(item,index) in cardDataDay6" :key="index" :data="item">
            </boxcard>
          </el-collapse-item>
          <!-- 10-09 -->
          <el-collapse-item name="7">
            <template slot="title">
              <div class="TitleLeft">Day 7</div>
              <div class="TitleCenter">2019-10-09</div>
              <div class="TitleRight">星期三</div>
            </template>
            <!-- 卡片渲染 -->
            <boxcard v-for="(item,index) in cardDataDay7" :key="index" :data="item">
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
        <!-- <a target='_blank' href="" target="_blank"></a> -->
      </mt-tab-container-item>
    </mt-tab-container>

  </div>
</template>

<script>
import boxcard from "@/components/box-card";
export default {
  data() {
    return {
      activeNames: ["2"],
      selected: "1",
      // 注意事项
      cardNotice: [
        {
          Type: "noticeHeader",
          Title: {},
          text: [
            { key: "机场", value: "上海浦东国际机场T2航站楼" },
            { key: "行李额", value: "托运 2*23公斤/人" },
            { key: "", value: "手提 1*10公斤/人" },
            {
              key: "电话",
              value: "<a target='_blank' href='tel:4008-828-888'>4008-828-888"
            },
            {
              key: "官网",
              value:
                "<a target='_blank' href='http://www.ana.co.jp/asw/wws/cn/c/'>ANA, 全日空航空公司网站 | ANA - China"
            },
            {
              key: "起飞时间",
              value: "<span style='color: red'><b>10月3日 18:20"
            },
            {
              key: "集合时间",
              value: "<span style='color: red'><b>10月3日 15:00前"
            },
            {
              key: "集合地点",
              value: "<span style='color: red'><b>T2全日空航空值机柜台"
            },
            {
              key: "",
              value: "<span style='color: red'><b>D19 - D27 （22号门）"
            },
            {
              key: "日元现金",
              value: "<span style='color: red'><b>80000日元/人（提前兑换）"
            },
            { key: "必备证件", value: "<span style='color: red'><b>护照" },
            {
              key: "电子行程",
              value:
                "飞猪 -> 行程 -> 订单详情 -> 获取行程确认单 -> 发送至邮箱 -> 打印"
            },
            {
              key: "酒店地址",
              value: "Nest Hotel Osaka Umeda<br>大阪市北区鶴野町2-15<br>2-15 Tsurunochō Kita-ku"
            },
            {
              key: "其他物品",
              value:
                "护照 日币 黑水笔 太阳眼镜 雨伞 自拍杆 充电器 充电宝 牙刷牙膏 剃须刀 创可贴 干湿纸巾"
            },
            {
              key: "常用网站",
              value:
                "<a target='_blank' href='https://www.westjr.co.jp/global/sc/timetable/pdf/ubn_sc.pdf'>JR西日本地图"
            },
          ],
          url: false
        }
      ],
      // 日期数据
      cardDataDay1: [
        {
          Type: "flightHeader",
          Title: {
            key: "飞机",
            value: "全日空航空 NH976"
          },
          text: [
            { key: "时间", value: "18:20 ~ 21:35" },
            { key: "From", value: "上海浦东国际机场T2" },
            { key: "To", value: "关西国际机场T1" },
            { key: "备注", value: "飞常准" }
          ],
          url:
            "http://www.variflight.com/dest/vh5/#/detail?dep=PVG&arr=KIX&fnum=NH976&date=2019-10-03&token=74e5d4cac3179fc076af4f401fd4ebe3"
        }, {
          Type: "transportHeader",
          Title: {
            key: "交通",
            value: "关西机场交通车 5号站台"
          },
          text: [
            { key: "票价", value: "单程 JPY 1550" },
            { value: "往返 JPY 2760（14天内有效）" },
            { key: "时间", value: "<b>22:05 22:20 22:35 22:55 23:10 00:00 （58min）" },
            { key: "From", value: "关西国际空港KIX" },
            { key: "To", value: "新阪急酒店(大阪站前)" },
            {
              key: "备注",
              value:
                "<a target='_blank' href='http://www.kate.co.jp/scn/timetable/detail/UM'>机场巴士时刻表"
            },
            {
              value:
                "<a target='_blank' href='http://www.kate.co.jp/scn/busstop/'>乘车处指南"
            },
          ],
          url: false
        }, {
          Type: "hotelHeader",
          Title: {
            key: "住宿",
            value: "大阪梅田Nest酒店 - Nest Hotel Osaka Umeda"
          },
          text: [
            {
              key: "谷歌地图",
              value:
                "<a target='_blank' href='" +
                "https://www.google.com/maps/dir//Nest+Hotel+Osaka+Umeda,+%EF%BC%92%E4%B8%81%E7%9B%AE-15+Tsurunocho,+%E5%8C%97%E5%8C%BA%E5%A4%A7%E9%98%AA%E5%B8%82%E5%A4%A7%E9%98%AA%E5%BA%9C%E6%97%A5%E6%9C%AC/@32.9762017,128.4655697,5z/data=!4m11!4m10!1m1!4e2!1m2!1m1!1s0x6000e6913bfddf57:0x6a4c072e78d18b3f!2m3!6e0!7e2!8j1570141800!3e3?hl=zh-CN"
                + "'>大阪梅田Nest酒店 - Nest Hotel Osaka Umeda"
            },
            { key: "酒店官网", value: "<a target='_blank' href='https://www.nesthotel.co.jp/osakaumeda/'>NESTHOTEL OSAKA UMEDA | ネストホテル大阪梅田【公式】" },
            { key: "酒店电话", value: "<a target='_blank' href='tel:+81664858860'>+81664858860" },
            { key: "入住凭证", value: "护照" },
            { key: "早餐", value: "7:00 - 10:00" },

          ],
          url: false
        },
      ],
      cardDataDay2: [
        {
          Type: "sceneryHeader",
          Title: { key: "景点", value: "岚山小火车（岚山下车）" },
          text: [
            { key: "票价", value: "JPY 620 <br>所有车站同价<br>5号车厢富贵号同价" },
            { key: "小火车座位", value: "龟冈 to 嵯峨 左侧 偶数座位" },
            { key: "", value: "嵯峨 to 龟冈 右侧 奇数座位" },
            { key: "车票预约", value: "<a target='_blank' href='https://www.westjr.co.jp/global/sc/ticket/route_search/index.html?p=sagano'>西日本旅客铁道株式会社 - 选择列车" },
            { key: "小火车官网", value: "<a target='_blank' href='https://www.sagano-kanko.co.jp/sc/jikoku.php'>时刻表 | 嵯峨野观光铁道" },
            { key: "取票", value: "在线上支付时所使用的信用卡7910、预约号码40934、认证号码0124" },
            { key: "注意事项", value: "富贵号车厢(开放式车厢)车票仅限当日销售。已经先购买预售车票的旅客,请于乘车当日到小火车各站售票口换票。" },
          ],
          url: false
        }, {
          Type: "sceneryHeader",
          Title: { key: "景点", value: "天龙寺" },
          text: [
            { key: "", value: "" },
          ],
          url: false
        }, {
          Type: "sceneryHeader",
          Title: { key: "景点", value: "渡月桥" },
          text: [
            { key: "", value: "" },
          ],
          url: false
        }, {
          Type: "sceneryHeader",
          Title: { key: "景点", value: "伏见稻荷大社" },
          text: [
            { key: "", value: "" },
          ],
          url: false
        }, {
          Type: "hotelHeader",
          Title: {
            key: "住宿",
            value: "京都新阪急酒店"
          },
          text: [
            {
              key: "谷歌地图",
              value:
                "<a target='_blank' href='" +
                "https://www.google.com/maps/dir//%E6%97%A5%E6%9C%AC%E4%BA%AC%E9%83%BD%E5%BA%9C%E4%BA%AC%E9%83%BD%E5%B8%82%E4%B8%8B%E4%BA%AC%E5%8C%BA+Higashishiokojicho,+%E4%BA%AC%E9%83%BD%E6%96%B0%E9%98%AA%E6%80%A5%E3%83%9B%E3%83%86%E3%83%AB/@33.1169074,128.5940431,5z/data=!4m7!4m6!1m1!4e2!1m2!1m1!1s0x600108af3f300e59:0xa098b336c33feb21!3e3?hl=zh-CN"
                + "'>京都新阪急酒店"
            },
            { key: "酒店官网", value: "<a target='_blank' href='https://global.hankyu-hotel.com/new-hankyu-kyoto/zh/'>Kyoto Hotel: Hotel new Hankyu Kyoto | Official Website" },
            { key: "酒店电话", value: "<a target='_blank' href='tel:+1081753435300'>+1081753435300" },
            { key: "地址", value: "〒600-8216 京都府京都市下京区東塩小路町 JR京都駅烏丸中央口正面" },
            { key: "入住凭证", value: "护照（仅预订未付款 JPY11984）" },
            { key: "早餐", value: "没有早餐" },
          ],
          url: false
        },
      ],
      cardDataDay3: [
        {
          Type: "sceneryHeader",
          Title: { key: "景点", value: "清水寺" },
          text: [
            { key: "", value: "" },
          ],
          url: false
        }, {
          Type: "sceneryHeader",
          Title: { key: "景点", value: "花见小路" },
          text: [
            { key: "", value: "" },
          ],
          url: false
        }, {
          Type: "sceneryHeader",
          Title: { key: "景点", value: "三年坂二年坂" },
          text: [
            { key: "", value: "" },
          ],
          url: false
        },
      ],
      cardDataDay4: [
        {
          Type: "sceneryHeader",
          Title: { key: "景点", value: "大阪海游馆" },
          text: [
            { key: "", value: "" },
          ],
          url: false
        }, {
          Type: "sceneryHeader",
          Title: { key: "景点", value: "圣玛利亚号" },
          text: [
            { key: "", value: "" },
          ],
          url: false
        }, {
          Type: "sceneryHeader",
          Title: { key: "景点", value: "天保山大摩天轮" },
          text: [
            { key: "", value: "" },
          ],
          url: false
        },

      ],
      cardDataDay5: [
        {
          Type: "sceneryHeader",
          Title: { key: "骑车", value: "东京-镰仓-江之岛" },
          text: [
            {
              key: "Strava路书",
              value:
                "<a target='_blank' href='https://www.strava.com/routes/12613154'>东京-镰仓-江之岛"
            },
            { key: "总长度", value: "116.2KM" },
            {
              key: "途径点",
              value:
                "<a target='_blank' href='https://m.mafengwo.cn/poi/6929887.html'><b>镰仓高校前车站"
            },
            {
              value:
                "<a target='_blank' href='https://m.mafengwo.cn/poi/18548704.html'><b>江之岛展望台"
            }
          ],
          url: false
        }
      ],
      cardDataDay6: [
      ],
      cardDataDay7: [
        {
          Type: "flightHeader",
          Title: {
            key: "飞机",
            value: "全日空航空 NH975"
          },
          text: [
            { key: "时间", value: "15:45 ~ 17:10" },
            { key: "From", value: "关西国际机场T1" },
            { key: "To", value: "上海浦东国际机场T2" },
            { key: "备注", value: "飞常准" }
          ],
          url:
            "http://www.variflight.com/dest/vh5/#/detail?dep=KIX&arr=PVG&fnum=NH975&date=2019-10-09&token=74e5d4cac3179fc076af4f401fd4ebe3"
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
        this.cardDataDay6,
        this.cardDataDay7
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
    // console.log(this.$route.meta.title)
    document.getElementsByTagName("title")[0].innerText = this.$route.meta.title
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
