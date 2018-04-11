<template>


    <el-card :class="{'box-card': true, 
    flightHeader: isflightHeader,
    transportHeader: istransportHeader,
    hotelHeader: ishotelHeader,
    foodHeader: isfoodHeader,
    sceneryHeader: issceneryHeader,
    }" 
    @click.native="OpenDetail(data.url)">
        <div slot="header" class="clearfix flexboxtitle">
            <span class="Titleflex1" v-html="data.Title.key"></span>
            <span class="Titleflex2" v-html="data.Title.value"></span>
        </div>
        <div class="text item">
            <div class="flexbox" v-for="(element,index) in data.text" :key="index">
                <span class="flex1" v-html="element.key"></span>
                <span class="flex2" v-html="element.value"></span>
            </div>
        </div>
    </el-card>
</template>

<script>
export default {
  props: ["data"],
  computed: {
    isflightHeader() {
      return this.data.Type == "flightHeader";
    },
    istransportHeader() {
      return this.data.Type == "transportHeader";
    },
    ishotelHeader() {
      return this.data.Type == "hotelHeader";
    },
    isfoodHeader() {
      return this.data.Type == "foodHeader";
    },
    issceneryHeader() {
      return this.data.Type == "sceneryHeader";
    }
  },
  //   data() {
  //     return {
  //       item: {
  //         Title: {
  //           key: "飞机",
  //           value: "全日空航空 NH968"
  //         },
  //         text: [
  //           { key: "时间", value: "01:45 ~ 05:40" },
  //           { key: "From", value: "上海浦东国际机场T2" },
  //           { key: "To", value: "日本东京羽田航空港" },
  //           { key: "备注", value: "携程航班动态" }
  //         ]
  //       }
  //     };
  //   },
  methods: {
    OpenDetail: url => {
      window.location.href = url;
    }
  }
};
</script>


<style scoped>

</style>

