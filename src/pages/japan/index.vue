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
            { key: "票价", value: "590日元" },
            { value: "<b>JR-京急机场线 / 京浜急行電鉄" },
            { key: "From", value: "羽田机场国际线航站楼" },
            { key: "To", value: "泉岳寺" },
            {
              value:
                "<a href='http://www.haneda-tokyo-access.com/cn/sp/'>羽田机场交通指南"
            },
            {
              value:
                "<a href='http://www.haneda-tokyo-access.com/cn/transport/international.html'>航站楼到车站 & 车站购票指南"
            },
            {
              value:
                "<a href='http://www.haneda-tokyo-access.com/cn/transport/trainlinemap.html'>京急路线图"
            },
            { value: "<b>A-都营浅草线" },
            { key: "From", value: "泉岳寺" },
            { key: "To", value: "东日本桥" },
            {
              value:
                "<a href='http://www.tokyometro.jp/lang_en/station/rosen_cs_1803.pdf'>东京地铁线路图"
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
                "<a href='http://google.com/maps/place/2+Chome-4-5+Nihonbashibakuroch%C5%8D%2B%E4%B8%AD%E5%A4%AE%E5%8C%BA%2C+%E4%B8%9C%E4%BA%AC%E5%B8%82+103-0002%2B%E6%97%A5%E6%9C%AC'>2 Chome-4-5 Nihonbashibakurochō, 中央区, 东京市 103-0002, 日本"
            },
            { key: "房东", value: "Torinoth" },
            {
              key: "电话",
              value: "<a href='tel:+81-70-1254-0906'>+81-70-1254-0906"
            },
            {
              key: "",
              value: "<a href='tel:+81-90-4436-0906'>+81-90-4436-0906"
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
          Title: {
            key: "景点",
            value: "天空树Tokyo Skytree"
          },
          text: [
            { key: "", value: "<b>A-都营浅草线" },
            { key: "To", value: "押上（晴空塔）" },
            { key: "开放时间", value: "展望台8:00-22:00（21:00停止入场）" },
            { key: "门票", value: "当日票成人2820日元" },
            {
              key: "介绍",
              value:
                "<a href='https://m.mafengwo.cn/poi/11977.html'>天空树Tokyo Skytree"
            },
            {
              value:
                "<a href='https://m.ctrip.com/html5/you/sight/dongjing294/109876.html#ctm_ref=www_hp_bs_lst'>携程购票链接"
            }
          ],
          url: false
        },
        {
          Type: "sceneryHeader",
          Title: {
            key: "景点",
            value: "目黑川赏樱"
          },
          text: [
            { key: "", value: "<b>H-日比谷线" },
            { key: "To", value: "中目黑" },
            { key: "开放时间", value: "全天" },
            {
              key: "介绍",
              value:
                "<a href='https://m.mafengwo.cn/poi/6777538.html'>目黑川Meguro Gawa"
            }
          ],
          url: false
        }
      ],
      cardDataDay2: [
        {
          Type: "sceneryHeader",
          Title: { key: "骑车", value: "东京-镰仓-江之岛" },
          text: [
            {
              key: "Strava路书",
              value:
                "<a href='https://www.strava.com/routes/12613154'>东京-镰仓-江之岛"
            },
            { key: "总长度", value: "116.2KM" },
            {
              key: "途径点",
              value:
                "<a href='https://m.mafengwo.cn/poi/6929887.html'>镰仓高校前车站"
            },
            {
              value:
                "<a href='https://m.mafengwo.cn/poi/18548704.html'>江之岛展望台"
            }
          ],
          url: false
        },
        {
          Type: "sceneryHeader",
          Title: {
            key: "景点",
            value: "台场"
          },
          text: [
            { key: "", value: "<b>百合鸥临海线" },
            {
              key: "To",
              value: "<a href='https://m.mafengwo.cn/poi/12384.html'>台场"
            },
            {
              key: "景点介绍",
              value:
                "<a href='https://m.mafengwo.cn/poi/7390777.html'><b>高达博物馆DiverCity Tokyo"
            },
            {
              value:
                "<a href='https://m.mafengwo.cn/poi/13237.html'><b>日本科学未来馆"
            },
            {
              value:
                "<a href='https://m.mafengwo.cn/poi/13386.html'><b>富士电视台"
            }
          ],
          url: false
        }
      ],
      cardDataDay3: [
        {
          Type: "sceneryHeader",
          Title: { key: "景点", value: "富士山Mount Fuji" },
          text: [
            { key: "交通", value: "租车来回" },
            { key: "费用", value: "人均¥400左右" },
            {
              value:
                "<a href='https://h5.m.taobao.com/trip/travel-detail/index/index.html?id=521694052066&scm=20140635.-2_1_4..0b87615115244660868942181e5f2e&spm=181.8947139.4973919.d0&ttid=&_preProjVer=0.2.132&_projVer=0.3.98'>飞猪租车链接"
            },
            {
              key: "介绍",
              value: "<a href='https://m.mafengwo.cn/mdd/10747'><b>富士山"
            },
            {
              key: "攻略",
              value:
                "<a href='https://m.mafengwo.cn/gonglve/ziyouxing/249.html'>富士山N种玩法大揭秘"
            }
          ],
          url: false
        },
        {
          Type: "sceneryHeader",
          Title: { key: "景点", value: "河口湖" },
          text: [
            {
              key: "介绍",
              value: "<a href='https://m.mafengwo.cn/poi/7554.html'><b>河口湖"
            },
            {
              key: "攻略",
              value:
                "<a href='https://m.mafengwo.cn/gonglve/ziyouxing/21802.html'>除了观览富士山，河口湖一日游应该这么玩"
            }
          ],
          url: false
        },
        {
          Type: "sceneryHeader",
          Title: { key: "景点", value: "忍野八海Oshino Hakkai" },
          text: [
            {
              key: "介绍",
              value:
                "<a href='https://m.mafengwo.cn/poi/12861.html'><b>忍野八海"
            }
          ],
          url: false
        },
        {
          Type: "sceneryHeader",
          Title: { key: "景点", value: "新仓山浅间公园" },
          text: [
            {
              key: "介绍",
              value:
                "<a href='https://m.mafengwo.cn/poi/8963256.html'><b>新仓山浅间公园"
            },
            {
              key: "攻略",
              value:
                "<a href='https://m.mafengwo.cn/gonglve/ziyouxing/21463.html'>远观富士山，新仓山浅间公园比忍野八海更好"
            }
          ],
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
      cardDataDay5: [
        {
          Type: "sceneryHeader",
          Title: { key: "景点", value: "东京迪士尼海洋乐园" },
          text: [
            { key: "", value: "<b>JR京叶线、武藏野线" },
            { key: "To", value: "舞滨站" },
            { key: "票价", value: "一日游门票为7400日元/人" },
            { key: "", value: "<b>1.神秘岛" },
            { key: "FastPass", value: "地心探险之旅" },
            { key: "", value: "海底两万里" },
            { key: "", value: "<b>2.阿拉伯海岸" },
            { key: "FastPass", value: "神灯剧场" },
            { key: "", value: "茉莉公主的飞天魔毯" },
            { key: "", value: "辛巴达传奇之旅" },
            { key: "", value: "沙漠商队旋转木马" },
            { key: "", value: "<b>3.失落河三角洲" },
            { key: "FastPass", value: "水晶骷髅头魔宫" },
            { key: "FastPass", value: "忿怒双神" },
            { key: "", value: "迪士尼海洋渡轮航线" },
            { key: "", value: "<b>4.美国海滨" },
            { key: "FastPass", value: "惊魂古塔" },
            { key: "FastPass", value: "玩具总动员疯狂游戏屋" },
            { key: "", value: "大都会交通工具" },
            { key: "", value: "迪士尼海洋电气化铁路" },
            { key: "", value: "龟龟漫谈" },
            { key: "", value: "迪士尼海洋渡轮航线" },
            { key: "", value: "<b>5.发现港" },
            { key: "FastPass", value: "海底巡游艇：尼莫和好友的海洋世界" },
            { key: "", value: "水上逗趣船" },
            { key: "", value: "迪士尼海洋电气化铁路" },
            { key: "", value: "<b>6.美人鱼礁湖" },
            { key: "FastPass", value: "美人鱼礁湖剧场" },
            { key: "", value: "小胖的飞鱼云霄飞车" },
            { key: "", value: "史卡托的寄居蟹" },
            { key: "", value: "跳跃水母" },
            { key: "", value: "河豚气球竞赛" },
            { key: "", value: "旋转海藻杯" },
            { key: "", value: "爱丽儿游乐场" },
            { key: "", value: "<b>7.地中海港湾" },
            { key: "", value: "迪士尼海洋渡轮航线" },
            { key: "", value: "威尼斯贡多拉游船" },
            { key: "", value: "要塞探险" },
            {
              key: "介绍",
              value:
                "<a href='https://m.mafengwo.cn/poi/5441833.html'><b>东京迪士尼海洋乐园"
            },
            {
              key: "攻略",
              value:
                "<a href='https://m.mafengwo.cn/gonglve/ziyouxing/21910.html'><b>从白天嗨到夜晚！一篇攻略带你玩转东京迪士尼Sea"
            }
          ],
          url: false
        }
      ],
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
