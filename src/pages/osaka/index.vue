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
      activeNames: ["5"],
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
            {
              key: "谷歌地图",
              value:
                "<a target='_blank' href='" +
                "https://www.google.com/maps/dir//%E5%A4%A9%E9%BE%99%E5%AF%BA+%EF%BC%96%EF%BC%98+Sagatenryuji+Susukinobabacho,+Ukyo+Ward,+Kyoto,+616-8385%E6%97%A5%E6%9C%AC/@33.1110456,128.5577046,5z/data=!4m7!4m6!1m1!4e2!1m2!1m1!1s0x6001aa01b80f9e93:0xcd9c3edaff3348c0!3e3?hl=zh-CN"
                + "'>天龙寺"
            },
            { key: "门票", value: "庭院 JPY 500<br>诸堂参拜 JPY 300<br>云龙图 JPY 500" },
            { key: "开放时间", value: "08:30-17:30 停止入场时间:17:00 (03月21日-10月20日)" },
            { key: "", value: "08:30-17:00 停止入场时间:16:30 (10月21日-次年03月20日)" },

          ],
          url:
            "https://m.mafengwo.cn/poi/12204.html"
        }, {
          Type: "sceneryHeader",
          Title: { key: "景点", value: "渡月桥" },
          text: [
            {
              key: "谷歌地图",
              value:
                "<a target='_blank' href='" +
                "https://www.google.com/maps/dir//%E6%97%A5%E6%9C%AC%E4%BA%AC%E9%83%BD%E5%BA%9C%E4%BA%AC%E9%83%BD%E5%B8%82%E5%8F%B3%E4%BA%AC%E5%8C%BA+Saganakanoshimacho,+%E6%B8%A1%E6%9C%88%E6%A1%A5/@33.1095817,128.5597151,5z/data=!4m7!4m6!1m1!4e2!1m2!1m1!1s0x6001075514600869:0x3eb8b22c06addcd!3e3?hl=zh-CN"
                + "'>渡月桥"
            },
            { key: "门票", value: "免费" },
          ],
          url:
            "https://m.mafengwo.cn/poi/12573.html"
        }, {
          Type: "sceneryHeader",
          Title: { key: "景点", value: "伏见稻荷大社" },
          text: [
            {
              key: "谷歌地图",
              value:
                "<a target='_blank' href='" +
                "https://www.google.com/maps/dir//%E4%BC%8F%E8%A7%81%E7%A8%BB%E8%8D%B7%E5%A4%A7%E7%A4%BE68+Fukakusa+Yabunouchicho,+Fushimi+Ward,+Kyoto,+612-0882%E6%97%A5%E6%9C%AC/@33.0866992,128.6071758,5z/data=!4m7!4m6!1m1!4e2!1m2!1m1!1s0x60010f153d2e6d21:0x7b1aca1c753ae2e9!3e3?hl=zh-CN"
                + "'>伏见稻荷大社"
            },
            { key: "门票", value: "免费" },
          ],
          url:
            "https://m.mafengwo.cn/poi/7518.html"
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
            {
              key: "谷歌地图",
              value:
                "<a target='_blank' href='" +
                "https://www.google.com/maps/dir//%E6%97%A5%E6%9C%AC%E4%BA%AC%E9%83%BD%E5%BA%9C%E4%BA%AC%E9%83%BD%E5%B8%82%E4%B8%9C%E5%B1%B1%E5%8C%BA+Kiyomizu,+1+Chome%E2%88%92294%E6%B8%85%E6%B0%B4%E5%AF%BA/@33.0866992,128.6071758,5z/data=!4m7!4m6!1m1!4e2!1m2!1m1!1s0x600108d385dcfb07:0x62af658650c434ba!3e3?hl=zh-CN"
                + "'>清水寺"
            },
            { key: "门票", value: "JPY 400" },
          ],
          url:
            "https://m.mafengwo.cn/poi/7516.html"
        }, {
          Type: "sceneryHeader",
          Title: { key: "景点", value: "花见小路" },
          text: [
            {
              key: "谷歌地图",
              value:
                "<a target='_blank' href='" +
                "https://www.google.com/maps/dir//%E8%8A%B1%E8%A7%81%E5%B0%8F%E8%B7%AF+%E8%89%BA%E5%A6%93+%E5%89%8D%E4%BA%AC%E9%83%BD%E8%8A%B1%E8%A1%97%E6%9F%B3%E5%B7%B7+%E6%97%A5%E6%9C%AC%E3%80%92600-8340+Kyoto,+Gionmachi+Minamigawa/@33.1246127,128.6027633,5z/data=!4m7!4m6!1m1!4e2!1m2!1m1!1s0x600108c173e6958f:0x792091361351619b!3e3?hl=zh-CN"
                + "'>花见小路"
            },
            { key: "", value: "" },
          ],
          url:
            "https://m.mafengwo.cn/poi/29693.html"
        }, {
          Type: "sceneryHeader",
          Title: { key: "景点", value: "三年坂二年坂" },
          text: [
            {
              key: "谷歌地图",
              value:
                "<a target='_blank' href='" +
                "https://www.google.com/maps/dir//三年坂+日本〒605-0862+Kyoto,+Higashiyama+Ward,+Kiyomizu,+2+Chome−221/@33.1209715,128.6056837,5z/data=!4m7!4m6!1m1!4e2!1m2!1m1!1s0x60010879a219f8af:0xa3504d2600725c07!3e3?hl=zh-CN"
                + "'>三年坂二年坂"
            },
          ],
          url:
            "https://m.mafengwo.cn/poi/6255112.html"
        }, {
          Type: "foodHeader",
          Title: {
            key: "美食",
            value: "一兰拉面(梅田芝田店)"
          },
          text: [
            {
              key: "地址",
              value:
                "<a href='" +
                "http://m.dianping.com/shop/93734204/map"
                + "'>大阪府 大阪市 北区芝田１丁目３−1 ギャザ阪急B1F"
            },
            {
              key: "电话",
              value: "<a href='tel:+81-72-4554521'>+81-72-4554521"
            },
            {
              key: "备注",
              value:
                "拉面+溏心蛋"
            }
          ],
          url:
            "https://m.dianping.com/shop/93734204"
        },
      ],
      cardDataDay4: [
        {
          Type: "sceneryHeader",
          Title: { key: "景点", value: "大阪海游馆" },
          text: [
            {
              key: "谷歌地图",
              value:
                "<a target='_blank' href='" +
                "https://www.google.com/maps/dir//%E6%97%A5%E6%9C%AC%E5%A4%A7%E9%98%AA%E5%BA%9C%E5%A4%A7%E9%98%AA%E5%B8%82%E6%B8%AF%E5%8C%BA+Kaigandori,+1+Chome%E2%88%921%E2%88%9210%E6%B5%B7%E6%B8%B8%E9%A6%86/@32.9501565,128.4293087,5z/data=!4m7!4m6!1m1!4e2!1m2!1m1!1s0x6000e8f48c0da9cd:0x6f83c520ae082ccc!3e3?hl=zh-CN"
                + "'>大阪海游馆"
            },
            { key: "门票", value: "JPY 2300 成人" },
            { key: "开放时间", value: "10:00-20:00；停止入场时间:19:00 (04月01日-04月30日,06月01日-07月31日,09月01日-09月30日,11月01日-12月31日 周一-周日)<br>09:30-20:00 (05月01日-05月31日,08月01日-08月31日,10月01日-10月31日 周一-周日)" }
          ],
          url:
            "https://m.mafengwo.cn/poi/6255112.html"
        }, {
          Type: "sceneryHeader",
          Title: { key: "景点", value: "圣玛利亚号" },
          text: [
            { key: "航行时间", value: "40min" },
            { key: "游览时间", value: "白天游览 45分钟<br>黄昏游览 60分钟(每小时一班)" },
            { key: "票价", value: "白天游览 成人:1600日元<br>黄昏游览 成人:2100日元<br>儿童半价" },
          ],
          url:
            "https://m.mafengwo.cn/poi/6930642.html"
        }, {
          Type: "sceneryHeader",
          Title: { key: "景点", value: "天保山大摩天轮" },
          text: [
            {
              key: "谷歌地图",
              value:
                "<a target='_blank' href='" +
                "https://www.google.com/maps/dir//%E6%97%A5%E6%9C%AC%E5%A4%A7%E9%98%AA%E5%BA%9C%E5%A4%A7%E9%98%AA%E5%B8%82%E6%B8%AF%E5%8C%BA+Kaigandori,+1+Chome%E2%88%921%E2%88%9210%E5%A4%A9%E4%BF%9D%E5%B1%B1%E6%91%A9%E5%A4%A9%E8%BC%AA/@32.951009,128.4304838,5z/data=!4m7!4m6!1m1!4e2!1m2!1m1!1s0x6000e88b5561e543:0xfe7be2a424a0c226!3e3?hl=zh-CN"
                + "'>天保山大摩天轮"
            },
            { key: "门票", value: "JPY 800 成人" },
            { key: "开放时间", value: "10:00-22:00；停止售票时间:21:30" },
          ],
          url:
            "https://m.mafengwo.cn/poi/12848.html"
        },

      ],
      cardDataDay5: [
        {
          Type: "sceneryHeader",
          Title: { key: "景点", value: "奈良公园" },
          text: [
            {
              key: "谷歌地图",
              value:
                "<a target='_blank' href='" +
                "https://www.google.com/maps/dir//%E6%97%A5%E6%9C%AC%E5%A5%88%E8%89%AF%E5%8E%BF%E5%A5%88%E8%89%AF%E5%B8%82%E5%A5%88%E8%89%AF%E5%85%AC%E5%9B%AD/@32.9649973,128.6367728,5z/data=!4m7!4m6!1m1!4e2!1m2!1m1!1s0x60013996bd8c6061:0xf96cacf357447456!3e3?hl=zh-CN"
                + "'>奈良公园"
            },
            { key: "门票", value: "免费" },
          ],
          url:
            "https://m.mafengwo.cn/poi/12415.html"
        }, {
          Type: "sceneryHeader",
          Title: { key: "景点", value: "若草山" },
          text: [
            {
              key: "谷歌地图",
              value:
                "<a target='_blank' href='" +
                "https://www.google.com/maps/dir//%E6%97%A5%E6%9C%AC%E5%A5%88%E8%89%AF%E5%8E%BF%E5%A5%88%E8%89%AF%E5%B8%82+Zoshicho,+%E8%8B%A5%E8%8D%89%E5%B1%B1/@34.6911491,135.8544345,13z/data=!4m7!4m6!1m1!4e2!1m2!1m1!1s0x600139bbcae1062f:0x3ffe7797efcbb75e!3e3?hl=zh-CN"
                + "'>若草山"
            },
            { key: "门票", value: "成人 JPY 150<br>儿童 JPY 80" },
          ],
          url:
            "https://m.mafengwo.cn/poi/6319070.html"
        }, {
          Type: "sceneryHeader",
          Title: { key: "景点", value: "心斋桥" },
          text: [
            {
              key: "谷歌地图",
              value:
                "<a target='_blank' href='" +
                "https://www.google.com/maps/dir//%E5%BF%83%E6%96%8B%E6%A1%A5+%E6%97%A5%E6%9C%AC/@32.9603795,128.4649449,5z/data=!4m7!4m6!1m1!4e2!1m2!1m1!1s0x6000e71a7502e511:0xf52ebb1984ed4516!3e3?hl=zh-CN"
                + "'>心斋桥"
            },
          ],
          url:
            "https://m.mafengwo.cn/poi/6418782.html"
        }, {
          Type: "sceneryHeader",
          Title: { key: "景点", value: "道顿堀" },
          text: [
            {
              key: "谷歌地图",
              value:
                "<a target='_blank' href='" +
                "https://www.google.com/maps/dir//%E6%97%A5%E6%9C%AC%E5%A4%A7%E9%98%AA%E5%BA%9C%E5%A4%A7%E9%98%AA%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA+Dotonbori,+1+Chome%E2%88%929,+%E9%81%93%E9%A0%93%E5%A0%80/@32.9603795,128.4649449,5z/data=!4m7!4m6!1m1!4e2!1m2!1m1!1s0x6000e713818af9fd:0xb8bb1326b48ba590!3e3?hl=zh-CN"
                + "'>道顿堀"
            },
            { key: "", value: "" },
          ],
          url:
            "https://m.mafengwo.cn/poi/12005592.html"
        },
      ],
      cardDataDay6: [
        {
          Type: "sceneryHeader",
          Title: { key: "景点", value: "日本环球影城" },
          text: [
            {
              key: "谷歌地图",
              value:
                "<a target='_blank' href='" +
                "https://www.google.com/maps/dir//%E6%97%A5%E6%9C%AC%E5%A4%A7%E9%98%AA%E5%BA%9C%E5%A4%A7%E9%98%AA%E5%B8%82%E6%AD%A4%E8%8A%B1%E5%8C%BA+Sakurajima,+2+Chome%E2%88%921%E2%88%9233%E6%97%A5%E6%9C%AC%E7%8E%AF%E7%90%83%E5%BD%B1%E5%9F%8E/@32.9548509,128.4310602,5z/data=!4m7!4m6!1m1!4e2!1m2!1m1!1s0x6000e0d083d5e25d:0x3605fe25303252aa!3e3?hl=zh-CN"
                + "'>日本环球影城"
            },
            { key: "", value: "" },
          ],
          url:
            "https://m.mafengwo.cn/poi/7538.html"
        },
      ],
      cardDataDay7: [
        {
          Type: "sceneryHeader",
          Title: { key: "景点", value: "临空奥特莱斯" },
          text: [
            {
              key: "谷歌地图",
              value:
                "<a target='_blank' href='" +
                "https://www.google.com/maps/dir//%E6%97%A5%E6%9C%AC%E5%A4%A7%E9%98%AA%E5%BA%9C%E5%A4%A7%E9%98%AA%E5%B8%82%E6%B8%AF%E5%8C%BA+Kaigandori,+1+Chome%E2%88%921%E2%88%9210%E5%A4%A9%E4%BF%9D%E5%B1%B1%E6%91%A9%E5%A4%A9%E8%BC%AA/@32.951009,128.4304838,5z/data=!4m7!4m6!1m1!4e2!1m2!1m1!1s0x6000e88b5561e543:0xfe7be2a424a0c226!3e3?hl=zh-CN"
                + "'>天保山大摩天轮"
            },
            { key: "", value: "" },
          ],
          url: false
        }, {
          Type: "foodHeader",
          Title: {
            key: "美食",
            value: "松屋(关西机场店)"
          },
          text: [
            {
              key: "地址",
              value:
                "<a href='" +
                "https://m.dianping.com/shop/32680320/map"
                + "'>大阪府 泉佐野市 泉州空港北 1 関西国際空港 エアロプラザ　3F"
            },
            {
              key: "电话",
              value: "<a href='tel:+81-72-4554521'>+81-72-4554521"
            },
            {
              key: "备注",
              value:
                "招牌牛肉饭"
            }
          ],
          url:
            "https://m.dianping.com/shop/32680320"
        }, {
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
