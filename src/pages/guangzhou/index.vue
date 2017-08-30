<template>
  <div>
    <mt-header fixed title="广州"></mt-header>
    <div style="height:45px"></div>
    <el-collapse accordion>
      <el-collapse-item>
        <template slot="title">
          <div class="TitleLeft">Day 1</div>
          <div class="TitleCenter">2017-09-08</div>
          <div class="TitleRight">星期五</div>
        </template>
        <div>
          <ul>飞机</ul>
          <li>MU9315</li>
        </div>
      </el-collapse-item>
      <div class="clear"></div>
      <el-collapse-item>
        <template slot="title">
          <div class="TitleLeft">Day 2</div>
          <div class="TitleCenter">2017-09-09</div>
          <div class="TitleRight">星期六</div>

        </template>
        <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
        <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
      </el-collapse-item>
      <div class="clear"></div>

      <el-collapse-item>
        <template slot="title">
          <div class="TitleLeft">Day 3</div>
          <div class="TitleCenter">2017-09-09</div>
          <div class="TitleRight">星期日</div>

        </template>
        <div>简化流程：设计简洁直观的操作流程；</div>
        <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
        <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
      </el-collapse-item>
      <div class="clear"></div>

      <el-collapse-item>
        <template slot="title">
          <div class="TitleLeft">Day 4</div>
          <div class="TitleCenter">2017-09-10</div>
          <div class="TitleRight">星期一</div>

        </template>
        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
        <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
      </el-collapse-item>
      <div class="clear"></div>

      <el-collapse-item>
        <template slot="title">
          <div class="TitleLeft">Day 5</div>
          <div class="TitleCenter">2017-09-11</div>
          <div class="TitleRight">星期二</div>

        </template>
        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
        <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
      </el-collapse-item>
      <div class="clear"></div>

      <el-collapse-item>
        <template slot="title">
          <div class="TitleLeft">Day 6</div>
          <div class="TitleCenter">2017-09-12</div>
          <div class="TitleRight">星期三</div>
        </template>
        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
        <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
