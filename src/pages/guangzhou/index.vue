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
            <!-- 九龙冰室 -->
            <el-card class="box-card foodHeader" @click.native="OpenDetail(9)">
              <div slot="header" class="clearfix flexboxtitle">
                <span class="Titleflex1">美食</span>
                <span class="Titleflex2">九龙冰室（正佳广场店）</span>
              </div>
              <div class="text item">
                <div class="flexbox">
                  <span class="flex1">地址</span>
                  <span class="flex2">天河路228号正佳广场M层E107号~E111号铺</span>
                </div>
                <div class="flexbox">
                  <span class="flex1">电话</span>
                  <span class="flex2">
                    <a href="tel:020-38060020">020-38060020</a>
                  </span>
                </div>
                <div class="flexbox">
                  <span class="flex1">地铁</span>
                  <span class="flex2">1号线 体育中心 D3号口</span>
                </div>
                <div class="flexbox">
                  <span class="flex1">备注</span>
                  <span class="flex2">有外卖<br>一口西多士 手摇弹珠奶茶</span>
                </div>
              </div>
            </el-card>
            <!-- Pelicana百利家炸鸡(正佳广场店) -->
            <el-card class="box-card foodHeader" @click.native="OpenDetail(10)">
              <div slot="header" class="clearfix flexboxtitle">
                <span class="Titleflex1">美食</span>
                <span class="Titleflex2">Pelicana百利家炸鸡<br>(正佳广场店)</span>
              </div>
              <div class="text item">
                <div class="flexbox">
                  <span class="flex1">地址</span>
                  <span class="flex2">天河路228号正佳广场B1层</span>
                </div>
                <div class="flexbox">
                  <span class="flex1">地铁</span>
                  <span class="flex2">1号线 体育中心 D3号口</span>
                </div>
                <div class="flexbox">
                  <span class="flex1">备注</span>
                  <span class="flex2">有外卖<br>蒜香鸡翅 薯条</span>
                </div>
              </div>
            </el-card>
            <!-- 星美乐(天环广场店) -->
            <el-card class="box-card foodHeader" @click.native="OpenDetail(11)">
              <div slot="header" class="clearfix flexboxtitle">
                <span class="Titleflex1">美食</span>
                <span class="Titleflex2">星美乐(天环广场店)</span>
              </div>
              <div class="text item">
                <div class="flexbox">
                  <span class="flex1">地址</span>
                  <span class="flex2">天河路212 214、216、218、220号天环广场ParcCentralB218</span>
                </div>
                <div class="flexbox">
                  <span class="flex1">地铁</span>
                  <span class="flex2">1号线 体育中心 D3号口</span>
                </div>
                <div class="flexbox">
                  <span class="flex1">备注</span>
                  <span class="flex2">草莓丹麦酥 绿茶茉莉班戟</span>
                </div>
              </div>
            </el-card>
            <!-- 炳胜品味(天河店) -->
            <el-card class="box-card foodHeader" @click.native="OpenDetail(12)">
              <div slot="header" class="clearfix flexboxtitle">
                <span class="Titleflex1">美食</span>
                <span class="Titleflex2">炳胜品味(天河店)</span>
              </div>
              <div class="text item">
                <div class="flexbox">
                  <span class="flex1">地址</span>
                  <span class="flex2">天河东路168号石牌酒店1-2楼(近太古汇)</span>
                </div>
                <div class="flexbox">
                  <span class="flex1">地铁</span>
                  <span class="flex2">3号线 石牌桥 BRT/B口</span>
                </div>
                <div class="flexbox">
                  <span class="flex1">备注</span>
                  <span class="flex2">两个挑一家去</span>
                </div>
              </div>
            </el-card>
            <!-- 炳胜品味(珠江新城店) -->
            <el-card class="box-card foodHeader" @click.native="OpenDetail(13)">
              <div slot="header" class="clearfix flexboxtitle">
                <span class="Titleflex1">美食</span>
                <span class="Titleflex2">炳胜品味(珠江新城店)</span>
              </div>
              <div class="text item">
                <div class="flexbox">
                  <span class="flex1">地址</span>
                  <span class="flex2">珠江新城冼村路2号首府大厦1-4楼(省博物馆对面)</span>
                </div>
                <div class="flexbox">
                  <span class="flex1">地铁</span>
                  <span class="flex2">APM线 大剧院 B号口</span>
                </div>
                <div class="flexbox">
                  <span class="flex1">备注</span>
                  <span class="flex2">两个挑一家去</span>
                </div>
              </div>
            </el-card>
            <!-- 广州塔 -->
            <el-card class="box-card sceneryHeader" @click.native="OpenDetail(14)">
              <div slot="header" class="clearfix flexboxtitle">
                <span class="Titleflex1">景点</span>
                <span class="Titleflex2">广州塔</span>
              </div>
              <div class="text item">
                <div class="flexbox">
                  <span class="flex1">地址</span>
                  <span class="flex2">阅江西路222号首层</span>
                </div>
                <div class="flexbox">
                  <span class="flex1">地铁</span>
                  <span class="flex2">APM线/3号线 广州塔 AB出口反面</span>
                </div>
                <div class="flexbox">
                  <span class="flex1">备注</span>
                  <span class="flex2">广州塔：9:30-22:30<br> 摩天轮：15:00-22:30(星期一)/10:00-22:30(周二-周日)
                    <br> 极速云霄：12:00-22:30(星期一)/10:00-22:30(周二-周日)
                    <br> 携程： 游玩前1天23:00前预订
                  </span>
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
            <!-- 北京路步行街 -->
            <el-card class="box-card sceneryHeader" @click.native="OpenDetail(16)">
              <div slot="header" class="clearfix flexboxtitle">
                <span class="Titleflex1">景点</span>
                <span class="Titleflex2">北京路步行街</span>
              </div>
              <div class="text item">
                <div class="flexbox">
                  <span class="flex1">地铁</span>
                  <span class="flex2">6号线 北京路 AB出口皆可</span>
                </div>
                <div class="flexbox">
                  <span class="flex1">备注</span>
                  <span class="flex2">陶陶居(这是个面包店)
                    <br> 仁信双皮奶
                    <br> 百花甜品店
                  </span>
                </div>
              </div>
            </el-card>
            <!-- 仁信双皮奶 -->
            <el-card class="box-card foodHeader" @click.native="OpenDetail(17)">
              <div slot="header" class="clearfix flexboxtitle">
                <span class="Titleflex1">美食</span>
                <span class="Titleflex2">仁信双皮奶</span>
              </div>
              <div class="text item">
                <div class="flexbox">
                  <span class="flex1">地址</span>
                  <span class="flex2">惠福东路553号(近摩登百货)</span>
                </div>
                <div class="flexbox">
                  <span class="flex1">地铁</span>
                  <span class="flex2">6号线 北京路 AB出口皆可</span>
                </div>
                <div class="flexbox">
                  <span class="flex1">备注</span>
                  <span class="flex2">红豆双皮奶</span>
                </div>
              </div>
            </el-card>
            <!-- 百花甜品店 -->
            <el-card class="box-card foodHeader" @click.native="OpenDetail(18)">
              <div slot="header" class="clearfix flexboxtitle">
                <span class="Titleflex1">美食</span>
                <span class="Titleflex2">百花甜品店</span>
              </div>
              <div class="text item">
                <div class="flexbox">
                  <span class="flex1">地址</span>
                  <span class="flex2">文明路210号(近中山图书馆)</span>
                </div>
                <div class="flexbox">
                  <span class="flex1">地铁</span>
                  <span class="flex2">6号线 北京路 离地铁比较远 可能得骑个摩拜</span>
                </div>
                <div class="flexbox">
                  <span class="flex1">备注</span>
                  <span class="flex2">红豆沙 凤凰奶糊 木瓜西米露</span>
                </div>
              </div>
            </el-card>
            <!-- 上下九步行街 -->
            <el-card class="box-card sceneryHeader" @click.native="OpenDetail(19)">
              <div slot="header" class="clearfix flexboxtitle">
                <span class="Titleflex1">景点</span>
                <span class="Titleflex2">上下九步行街</span>
              </div>
              <div class="text item">
                <div class="flexbox">
                  <span class="flex1">地铁</span>
                  <span class="flex2">1/6号线 黄沙 下地铁摩拜
                    <br> 1号线 长寿路 边上恒宝广场有美心西饼
                  </span>
                </div>
                <div class="flexbox">
                  <span class="flex1">备注</span>
                  <span class="flex2">和沙面可以一起去
                  </span>
                </div>
              </div>
            </el-card>
            <!-- 沙面 -->
            <el-card class="box-card sceneryHeader" @click.native="OpenDetail(20)">
              <div slot="header" class="clearfix flexboxtitle">
                <span class="Titleflex1">景点</span>
                <span class="Titleflex2">沙面</span>
              </div>
              <div class="text item">
                <div class="flexbox">
                  <span class="flex1">地铁</span>
                  <span class="flex2">1/6号线 黄沙 E/F号口
                  </span>
                </div>
                <div class="flexbox">
                  <span class="flex1">备注</span>
                  <span class="flex2">陶然轩
                  </span>
                </div>
              </div>
            </el-card>
            <!-- 陶然轩 -->
            <el-card class="box-card foodHeader" @click.native="OpenDetail(21)">
              <div slot="header" class="clearfix flexboxtitle">
                <span class="Titleflex1">美食</span>
                <span class="Titleflex2">陶然轩-岭南·文博食荟(沙面店)</span>
              </div>
              <div class="text item">
                <div class="flexbox">
                  <span class="flex1">地址</span>
                  <span class="flex2">沙面南街50号(近沙面玫瑰园)</span>
                </div>
                <div class="flexbox">
                  <span class="flex1">地铁</span>
                  <span class="flex2">1/6号线 黄沙 E/F出口</span>
                </div>
                <div class="flexbox">
                  <span class="flex1">备注</span>
                  <span class="flex2">陶然轩虾饺皇 香滑流沙包</span>
                </div>
              </div>
            </el-card>
            <!-- 珠江游船 -->
            <el-card class="box-card sceneryHeader" @click.native="OpenDetail(15)">
              <div slot="header" class="clearfix flexboxtitle">
                <span class="Titleflex1">景点</span>
                <span class="Titleflex2">珠江游船</span>
              </div>
              <div class="text item">
                <div class="flexbox">
                  <span class="flex1">上船时间</span>
                  <span class="flex2">建议19:00 ~ 20:00</span>
                </div>
                <div class="flexbox">
                  <span class="flex1">上船地址</span>
                  <span class="flex2">沿江东路466号大沙头码头</span>
                </div>
                <div class="flexbox">
                  <span class="flex1">预约电话</span>
                  <span class="flex2">17070858288</span>
                </div>
                <div class="flexbox">
                  <span class="flex1">地铁</span>
                  <span class="flex2">6号线 东湖站 A出口</span>
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
            <!-- 长隆水上乐园 -->
            <el-card class="box-card sceneryHeader" @click.native="OpenDetail(22)">
              <div slot="header" class="clearfix flexboxtitle">
                <span class="Titleflex1">景点</span>
                <span class="Titleflex2">长隆水上乐园</span>
              </div>
              <div class="text item">
                <div class="flexbox">
                  <span class="flex1">地址</span>
                  <span class="flex2">广东省广州市番禺区迎宾路长隆旅游度假区内</span>
                </div>
                <div class="flexbox">
                  <span class="flex1">地铁</span>
                  <span class="flex2">3/7号线 汉溪长隆 D/E号口</span>
                </div>
                <div class="flexbox">
                  <span class="flex1">备注</span>
                  <span class="flex2">九月: 09:30 ~ 18:30</span>
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
            <!-- 长隆欢乐世界 -->
            <el-card class="box-card sceneryHeader" @click.native="OpenDetail(23)">
              <div slot="header" class="clearfix flexboxtitle">
                <span class="Titleflex1">景点</span>
                <span class="Titleflex2">长隆欢乐世界</span>
              </div>
              <div class="text item">
                <div class="flexbox">
                  <span class="flex1">地址</span>
                  <span class="flex2">广东省广州市番禺区迎宾路长隆旅游度假区内</span>
                </div>
                <div class="flexbox">
                  <span class="flex1">地铁</span>
                  <span class="flex2">3/7号线 汉溪长隆 D/E号口</span>
                </div>
                <div class="flexbox">
                  <span class="flex1">备注</span>
                  <span class="flex2"></span>
                </div>
              </div>
            </el-card>
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
        <el-collapse accordion>
          <!-- 飞机 -->
          <el-collapse-item>
            <template slot="title">
              <div class="TitleLeft">飞机</div>
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
          <!-- 酒店 -->
          <el-collapse-item>
            <template slot="title">
              <div class="TitleLeft">酒店</div>
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

          <!-- 景点 -->
          <el-collapse-item>
            <template slot="title">
              <div class="TitleLeft">景点</div>
            </template>
            <!-- 广州塔 -->
            <el-card class="box-card sceneryHeader" @click.native="OpenDetail(14)">
              <div slot="header" class="clearfix flexboxtitle">
                <span class="Titleflex1">景点</span>
                <span class="Titleflex2">广州塔</span>
              </div>
              <div class="text item">
                <div class="flexbox">
                  <span class="flex1">地址</span>
                  <span class="flex2">阅江西路222号首层</span>
                </div>
                <div class="flexbox">
                  <span class="flex1">地铁</span>
                  <span class="flex2">APM线/3号线 广州塔 AB出口反面</span>
                </div>
                <div class="flexbox">
                  <span class="flex1">备注</span>
                  <span class="flex2">广州塔：9:30-22:30<br> 摩天轮：15:00-22:30(星期一)/10:00-22:30(周二-周日)
                    <br> 极速云霄：12:00-22:30(星期一)/10:00-22:30(周二-周日)
                    <br> 携程： 游玩前1天23:00前预订
                  </span>
                </div>
              </div>
            </el-card>
            <!-- 北京路步行街 -->
            <el-card class="box-card sceneryHeader" @click.native="OpenDetail(16)">
              <div slot="header" class="clearfix flexboxtitle">
                <span class="Titleflex1">景点</span>
                <span class="Titleflex2">北京路步行街</span>
              </div>
              <div class="text item">
                <div class="flexbox">
                  <span class="flex1">地铁</span>
                  <span class="flex2">6号线 北京路 AB出口皆可</span>
                </div>
                <div class="flexbox">
                  <span class="flex1">备注</span>
                  <span class="flex2">陶陶居(这是个面包店)
                    <br> 仁信双皮奶
                    <br> 百花甜品店
                  </span>
                </div>
              </div>
            </el-card>
            <!-- 上下九步行街 -->
            <el-card class="box-card sceneryHeader" @click.native="OpenDetail(19)">
              <div slot="header" class="clearfix flexboxtitle">
                <span class="Titleflex1">景点</span>
                <span class="Titleflex2">上下九步行街</span>
              </div>
              <div class="text item">
                <div class="flexbox">
                  <span class="flex1">地铁</span>
                  <span class="flex2">1/6号线 黄沙 下地铁摩拜
                    <br> 1号线 长寿路 边上恒宝广场有美心西饼
                  </span>
                </div>
                <div class="flexbox">
                  <span class="flex1">备注</span>
                  <span class="flex2">和沙面可以一起去
                  </span>
                </div>
              </div>
            </el-card>
            <!-- 沙面 -->
            <el-card class="box-card sceneryHeader" @click.native="OpenDetail(20)">
              <div slot="header" class="clearfix flexboxtitle">
                <span class="Titleflex1">景点</span>
                <span class="Titleflex2">沙面</span>
              </div>
              <div class="text item">
                <div class="flexbox">
                  <span class="flex1">地铁</span>
                  <span class="flex2">1/6号线 黄沙 E/F号口
                  </span>
                </div>
                <div class="flexbox">
                  <span class="flex1">备注</span>
                  <span class="flex2">陶然轩
                  </span>
                </div>
              </div>
            </el-card>
            <!-- 珠江游船 -->
            <el-card class="box-card sceneryHeader" @click.native="OpenDetail(15)">
              <div slot="header" class="clearfix flexboxtitle">
                <span class="Titleflex1">景点</span>
                <span class="Titleflex2">珠江游船</span>
              </div>
              <div class="text item">
                <div class="flexbox">
                  <span class="flex1">上船时间</span>
                  <span class="flex2">建议19:00 ~ 20:00</span>
                </div>
                <div class="flexbox">
                  <span class="flex1">上船地址</span>
                  <span class="flex2">沿江东路466号大沙头码头</span>
                </div>
                <div class="flexbox">
                  <span class="flex1">预约电话</span>
                  <span class="flex2">17070858288</span>
                </div>
                <div class="flexbox">
                  <span class="flex1">地铁</span>
                  <span class="flex2">6号线 东湖站 A出口</span>
                </div>

              </div>
            </el-card>
            <!-- 长隆水上乐园 -->
            <el-card class="box-card sceneryHeader" @click.native="OpenDetail(22)">
              <div slot="header" class="clearfix flexboxtitle">
                <span class="Titleflex1">景点</span>
                <span class="Titleflex2">长隆水上乐园</span>
              </div>
              <div class="text item">
                <div class="flexbox">
                  <span class="flex1">地址</span>
                  <span class="flex2">广东省广州市番禺区迎宾路长隆旅游度假区内</span>
                </div>
                <div class="flexbox">
                  <span class="flex1">地铁</span>
                  <span class="flex2">3/7号线 汉溪长隆 D/E号口</span>
                </div>
                <div class="flexbox">
                  <span class="flex1">备注</span>
                  <span class="flex2">九月: 09:30 ~ 18:30</span>
                </div>
              </div>
            </el-card>
            <!-- 长隆欢乐世界 -->
            <el-card class="box-card sceneryHeader" @click.native="OpenDetail(23)">
              <div slot="header" class="clearfix flexboxtitle">
                <span class="Titleflex1">景点</span>
                <span class="Titleflex2">长隆欢乐世界</span>
              </div>
              <div class="text item">
                <div class="flexbox">
                  <span class="flex1">地址</span>
                  <span class="flex2">广东省广州市番禺区迎宾路长隆旅游度假区内</span>
                </div>
                <div class="flexbox">
                  <span class="flex1">地铁</span>
                  <span class="flex2">3/7号线 汉溪长隆 D/E号口</span>
                </div>
                <div class="flexbox">
                  <span class="flex1">备注</span>
                  <span class="flex2"></span>
                </div>
              </div>
            </el-card>
          </el-collapse-item>

          <!-- 美食 -->
          <el-collapse-item>
            <template slot="title">
              <div class="TitleLeft">美食</div>
            </template>
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
            <!-- 九龙冰室 -->
            <el-card class="box-card foodHeader" @click.native="OpenDetail(9)">
              <div slot="header" class="clearfix flexboxtitle">
                <span class="Titleflex1">美食</span>
                <span class="Titleflex2">九龙冰室（正佳广场店）</span>
              </div>
              <div class="text item">
                <div class="flexbox">
                  <span class="flex1">地址</span>
                  <span class="flex2">天河路228号正佳广场M层E107号~E111号铺</span>
                </div>
                <div class="flexbox">
                  <span class="flex1">电话</span>
                  <span class="flex2">
                    <a href="tel:020-38060020">020-38060020</a>
                  </span>
                </div>
                <div class="flexbox">
                  <span class="flex1">地铁</span>
                  <span class="flex2">1号线 体育中心 D3号口</span>
                </div>
                <div class="flexbox">
                  <span class="flex1">备注</span>
                  <span class="flex2">有外卖<br>一口西多士 手摇弹珠奶茶</span>
                </div>
              </div>
            </el-card>
            <!-- Pelicana百利家炸鸡(正佳广场店) -->
            <el-card class="box-card foodHeader" @click.native="OpenDetail(10)">
              <div slot="header" class="clearfix flexboxtitle">
                <span class="Titleflex1">美食</span>
                <span class="Titleflex2">Pelicana百利家炸鸡<br>(正佳广场店)</span>
              </div>
              <div class="text item">
                <div class="flexbox">
                  <span class="flex1">地址</span>
                  <span class="flex2">天河路228号正佳广场B1层</span>
                </div>
                <div class="flexbox">
                  <span class="flex1">地铁</span>
                  <span class="flex2">1号线 体育中心 D3号口</span>
                </div>
                <div class="flexbox">
                  <span class="flex1">备注</span>
                  <span class="flex2">有外卖<br>蒜香鸡翅 薯条</span>
                </div>
              </div>
            </el-card>
            <!-- 星美乐(天环广场店) -->
            <el-card class="box-card foodHeader" @click.native="OpenDetail(11)">
              <div slot="header" class="clearfix flexboxtitle">
                <span class="Titleflex1">美食</span>
                <span class="Titleflex2">星美乐(天环广场店)</span>
              </div>
              <div class="text item">
                <div class="flexbox">
                  <span class="flex1">地址</span>
                  <span class="flex2">天河路212 214、216、218、220号天环广场ParcCentralB218</span>
                </div>
                <div class="flexbox">
                  <span class="flex1">地铁</span>
                  <span class="flex2">1号线 体育中心 D3号口</span>
                </div>
                <div class="flexbox">
                  <span class="flex1">备注</span>
                  <span class="flex2">草莓丹麦酥 绿茶茉莉班戟</span>
                </div>
              </div>
            </el-card>
            <!-- 炳胜品味(天河店) -->
            <el-card class="box-card foodHeader" @click.native="OpenDetail(12)">
              <div slot="header" class="clearfix flexboxtitle">
                <span class="Titleflex1">美食</span>
                <span class="Titleflex2">炳胜品味(天河店)</span>
              </div>
              <div class="text item">
                <div class="flexbox">
                  <span class="flex1">地址</span>
                  <span class="flex2">天河东路168号石牌酒店1-2楼(近太古汇)</span>
                </div>
                <div class="flexbox">
                  <span class="flex1">地铁</span>
                  <span class="flex2">3号线 石牌桥 BRT/B口</span>
                </div>
                <div class="flexbox">
                  <span class="flex1">备注</span>
                  <span class="flex2">两个挑一家去</span>
                </div>
              </div>
            </el-card>
            <!-- 炳胜品味(珠江新城店) -->
            <el-card class="box-card foodHeader" @click.native="OpenDetail(13)">
              <div slot="header" class="clearfix flexboxtitle">
                <span class="Titleflex1">美食</span>
                <span class="Titleflex2">炳胜品味(珠江新城店)</span>
              </div>
              <div class="text item">
                <div class="flexbox">
                  <span class="flex1">地址</span>
                  <span class="flex2">珠江新城冼村路2号首府大厦1-4楼(省博物馆对面)</span>
                </div>
                <div class="flexbox">
                  <span class="flex1">地铁</span>
                  <span class="flex2">APM线 大剧院 B号口</span>
                </div>
                <div class="flexbox">
                  <span class="flex1">备注</span>
                  <span class="flex2">两个挑一家去</span>
                </div>
              </div>
            </el-card>
            <!-- 仁信双皮奶 -->
            <el-card class="box-card foodHeader" @click.native="OpenDetail(17)">
              <div slot="header" class="clearfix flexboxtitle">
                <span class="Titleflex1">美食</span>
                <span class="Titleflex2">仁信双皮奶</span>
              </div>
              <div class="text item">
                <div class="flexbox">
                  <span class="flex1">地址</span>
                  <span class="flex2">惠福东路553号(近摩登百货)</span>
                </div>
                <div class="flexbox">
                  <span class="flex1">地铁</span>
                  <span class="flex2">6号线 北京路 AB出口皆可</span>
                </div>
                <div class="flexbox">
                  <span class="flex1">备注</span>
                  <span class="flex2">红豆双皮奶</span>
                </div>
              </div>
            </el-card>
            <!-- 百花甜品店 -->
            <el-card class="box-card foodHeader" @click.native="OpenDetail(18)">
              <div slot="header" class="clearfix flexboxtitle">
                <span class="Titleflex1">美食</span>
                <span class="Titleflex2">百花甜品店</span>
              </div>
              <div class="text item">
                <div class="flexbox">
                  <span class="flex1">地址</span>
                  <span class="flex2">文明路210号(近中山图书馆)</span>
                </div>
                <div class="flexbox">
                  <span class="flex1">地铁</span>
                  <span class="flex2">6号线 北京路 离地铁比较远 可能得骑个摩拜</span>
                </div>
                <div class="flexbox">
                  <span class="flex1">备注</span>
                  <span class="flex2">红豆沙 凤凰奶糊 木瓜西米露</span>
                </div>
              </div>
            </el-card>
            <!-- 陶然轩 -->
            <el-card class="box-card foodHeader" @click.native="OpenDetail(21)">
              <div slot="header" class="clearfix flexboxtitle">
                <span class="Titleflex1">美食</span>
                <span class="Titleflex2">陶然轩-岭南·文博食荟(沙面店)</span>
              </div>
              <div class="text item">
                <div class="flexbox">
                  <span class="flex1">地址</span>
                  <span class="flex2">沙面南街50号(近沙面玫瑰园)</span>
                </div>
                <div class="flexbox">
                  <span class="flex1">地铁</span>
                  <span class="flex2">1/6号线 黄沙 E/F出口</span>
                </div>
                <div class="flexbox">
                  <span class="flex1">备注</span>
                  <span class="flex2">陶然轩虾饺皇 香滑流沙包</span>
                </div>
              </div>
            </el-card>

          </el-collapse-item>

        </el-collapse>

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
          window.location.href = "http://m.ctrip.com/webapp/ticket/dest/t107540.html";
          break;
        case 15:
          // 珠江夜游
          window.location.href = "https://h5.m.taobao.com/trip/search/list/index.html?searchType=%E9%97%A8%E7%A5%A8&keyword=%E7%8F%A0%E6%B1%9F%E5%A4%9C%E6%B8%B8&_req_param_=%7B%22searchQuery%22%3A%22%E7%8F%A0%E6%B1%9F%E5%A4%9C%E6%B8%B8%22%7D&globalSearchSource=default&rword=%E7%8F%A0%E6%B1%9F%E5%A4%9C%E6%B8%B8&isFromFZSeHome=1&spm=181.7871893.1998854396.0701&ttid=12bai0000004&_projVer=0.2.53";
          break;
        case 16:
          // 北京路
          window.location.href = "https://m.dianping.com/shoplist/4/search?from=m_search&keyword=%E5%8C%97%E4%BA%AC%E8%B7%AF";
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
          window.location.href = "https://m.dianping.com/shoplist/4/search?from=m_search&keyword=%E4%B8%8A%E4%B8%8B%E4%B9%9D%E6%AD%A5%E8%A1%8C%E8%A1%97&from_suggest=history";
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
          window.location.href = "https://h5.m.taobao.com/trip/ticket/detail/index.html";
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
  font-size: 18px !important;
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
