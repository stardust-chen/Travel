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
            { key: "", value: "<b>6. 身份证(鼋头渚和拈花湾可刷身份证入园)" },
            { key: "", value: "7. 旅行收纳袋/保鲜袋/垃圾袋" },
            { key: "", value: "8. 牙刷/电动牙刷" },
            { key: "注意事项", value: "1. <b>拈花湾门票需要提前一天23:30之前预订！<a href='https://h5.m.taobao.com/trip/travel-detail/index/index.html?id=536530655910&_fli_newpage=1&_fli_native_ver=9.1.5&categoryId=124866006&gsCallback=536530655910&spm=181.8947139.x2895152.d0-0&ttid=sem.000000735&_projVer=0.3.198'>飞猪购票链接" },
            { key: "", value: "2. <b>鼋头渚门票早上6:45之前可定今日票，建议还是提前一两天预订！<a href='https://h5.m.taobao.com/trip/travel-detail/index/index.html?id=576481060713&_fli_newpage=1&_fli_native_ver=9.1.5&categoryId=124866006&gsCallback=576481060713&spm=181.8947139.x2895152.d0-0&ttid=sem.000000735&_projVer=0.3.198'>飞猪购票链接" },
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
            { key: "快捷导航", value: "<a href='iosamap://navi?sourceApplication=applicationName&poiname=fangheng&poiid=BGVIS&lat=31.490512&lon=120.363823&dev=0&style=2'>无锡市拈花湾" },
            { key: "停车", value: "拈花湾外围收费停车场<br>淡季每车10元<br>旺季每车20元" },
            { key: "门票", value: "<a href='https://h5.m.taobao.com/trip/travel-detail/index/index.html?id=536530655910&_fli_newpage=1&_fli_native_ver=9.1.5&categoryId=124866006&gsCallback=536530655910&spm=181.8947139.x2895152.d0-0&ttid=sem.000000735&_projVer=0.3.198'>购票链接" },
            { key: "", value: "<span style='color: red'><b>无需换票 凭身份证入园</span>" },
            { key: "时间", value: "票房售票时间9:00 - 21:00；闸口检票时间9:00 - 21:30" },
            { key: "<span style='color: red'><b>最佳赏樱地</span>", value: "<span style='color: red'><b>指月巷(樱花大道)、云树帆影生态湿地、平常居精品客栈外围及庭院、鹿鸣谷</span>" },
            { key: "夜景", value: "拈花塔、五灯湖广场、拈花湖3D水幕投影" },
            { key: "注意事项", value: "1. 进门检票口有拈花湾手册，可以查看节目表演时间和活动！" },
            { key: "美食", value: "<b>拈花禅食馆" },
            { key: "", value: "午餐时间：11:00--13:30<br>晚餐时间：17:00--20:30" },
            { key: "", value: "地址：五灯湖广场 ￥68/人" },
            { key: "", value: "<b>浣月山房和风禅意餐厅" },
            { key: "", value: "午餐时间：11:00--14:00<br>晚餐时间：17:00--21:00" },
            { key: "", value: "地址：平常居内 ￥108/人" },
            { key: "", value: "<b>拈花锡食" },
            { key: "", value: "店内有很多无锡特色小吃供选择。荠菜/刀鱼/菜肉馄饨，各种浇头面，鲜肉/蟹黄小笼等等。亲测的蟹黄小笼和刀鱼馄饨，在及格线以上。" },
          ],
          url: false
        },
        {
          Type: "foodHeader",
          Title: {
            key: "美食",
            value: "拈花禅食馆"
          },
          text: [
            { key: "地址", value: "拈花湾五灯湖广场一笑堂" },
            { key: "推荐菜", value: "珍菌鲜菇牛肉粒、滴水清香狮子头、瓜仔芙蓉烤鳗鱼" },
          ],
          url: 'https://m.dianping.com/shop/98380892'
        },
        {
          Type: "foodHeader",
          Title: {
            key: "美食",
            value: "老牛窝里"
          },
          text: [
            { key: "来源", value: "大众点评人气第一" },
            { key: "推荐菜", value: "松子牛肉炒年糕、梅汁排骨、荠菜大馄饨" },
          ],
          url: 'https://m.dianping.com/shop/6670826'
        },
        {
          Type: "foodHeader",
          Title: {
            key: "美食",
            value: "熙盛源(健康路店)"
          },
          text: [
            { key: "地址", value: "健康路84号" },
            { key: "推荐菜", value: "无锡小笼包、各种馄饨、蟹粉小笼" },
          ],
          url: 'https://m.dianping.com/shop/543873'
        },
        {
          Type: "foodHeader",
          Title: {
            key: "美食",
            value: "忆秦园小笼包(恒隆广场店)"
          },
          text: [
            { key: "地址", value: "人民中路恒隆广场5楼509" },
            { key: "推荐菜", value: "蟹粉小笼包、刀鱼小馄饨、太湖三白小馄饨" },
          ],
          url: 'https://m.dianping.com/shop/91586490'
        },
        {
          Type: "foodHeader",
          Title: {
            key: "美食",
            value: "曹张手推馄饨(曹张店)"
          },
          text: [
            { key: "地址", value: "曹张路曹张新村竹园里96号" },
            { key: "推荐菜", value: "手推拌馄饨" },
          ],
          url: 'https://m.dianping.com/shop/579188'
        },
        {
          Type: "foodHeader",
          Title: {
            key: "美食",
            value: "三凤桥肉庄(中山路总店)"
          },
          text: [
            { key: "地址", value: "中山路240号" },
            { key: "推荐菜", value: "无锡酱排骨" },
          ],
          url: 'https://m.dianping.com/shop/96316518'
        },
        {
          Type: "foodHeader",
          Title: {
            key: "美食",
            value: "天福花园餐厅"
          },
          text: [
            { key: "地址", value: "金石路与大剧院路交界处（金城湾公园内）" },
            { key: "推荐菜", value: "玉兰饼、鱼头汤、牛排" },
          ],
          url: 'https://m.dianping.com/shop/8009926'
        },
        {
          Type: "foodHeader",
          Title: {
            key: "美食",
            value: "秦德斋面馆(吴桥店)"
          },
          text: [
            { key: "地址", value: "黄巷街道后张巷8-2号" },
            { key: "推荐菜", value: "蛤蜊葱油拌面、酱爆牛蛙面、老鹅汤面" },
          ],
          url: 'https://m.dianping.com/shop/65834122'
        }
      ],
      cardDataDay2: [
        {
          Type: "sceneryHeader",
          Title: {
            key: "景点",
            value: "鼋头渚"
          },
          text: [
            { key: "快捷导航", value: "<a href='iosamap://navi?sourceApplication=applicationName&poiname=fangheng&poiid=BGVIS&lat=31.519628&lon=120.234929&dev=0&style=2'>无锡市鼋头渚充山大门" },
            { key: "开放时间", value: "非冬季：08:00~17:30；冬季：8:30~17:00" },
            { key: "门票", value: "<a href='https://h5.m.taobao.com/trip/travel-detail/index/index.html?id=576481060713&_fli_newpage=1&_fli_native_ver=9.1.5&categoryId=124866006&gsCallback=576481060713&spm=181.8947139.x2895152.d0-0&ttid=sem.000000735&_projVer=0.3.198'>购票链接" },
            { key: "<span style='color: red'><b>最佳赏樱地</span>", value: "<span style='color: red'><b>樱花谷、中日友谊林、十里芳径、长春桥</span>" },
            { key: "步行赏樱线", value: "充山大门 → 充山隐秀 → 挹秀桥 → 樱花林 （赏樱阁、人杰苑） → 樱花谷 （樱缘桥、樱谷流芳 ）→ 长春花漪 → 具境胜境 → 十里芳径" },
            { key: "骑行赏樱线", value: "充山大门 → 充山隐秀 → 十里芳径 → 樱花谷（樱缘桥、樱谷流芳） → 樱花林（人杰苑、赏樱阁） → 长春花漪 → 具区胜境" },
            { key: "注意事项", value: "1. 樱花节开幕期间，逢双休日和节假日，鼋头渚景区会实行交通限制单向通行，交通限制将持续到5月中旬春游高峰结束。如果这期间自驾的话，进入鼋头渚景区从双虹桥-鼋渚路-充山门" },
          ],
          url: false
        },
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
