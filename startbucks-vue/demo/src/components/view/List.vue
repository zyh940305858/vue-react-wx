<!-- List -->
<template>
  <div class="main">
    <ul v-if="list.length > 0">
      <li v-for="(item,index) in list" :key="index" @click="todetail(item)">
        <p>{{item.applicationNumber}}</p>
        <div v-if="item.list_type==='overtime'">
          <span>申请人:{{item.nickname}}</span>
          <span>加班类型:{{item.type===1 ? "工作日加班":item.type===2 ? "双休日加班":"假期加班" }}</span>
          <span>加班日期:{{new Date(item.create_at).toLocaleDateString()}}</span>
          <span>加班时数:{{((new Date(item.endTime)-new Date(item.startTime))/3600000).toFixed(1)}}</span>
        </div>
        <div v-else>
          <span>申请人:{{item.nickname}}</span>
          <span>休假类型:{{item.type===1 ? "调休":item.type===2 ? "事假":"其他" }}</span>
          <span>休假日期:{{new Date(item.create_at).toLocaleDateString()}}</span>
          <span>休假时数:{{((new Date(item.endTime)-new Date(item.startTime))/3600000).toFixed(1)}}</span>
        </div>
      </li>
    </ul>
    <ul v-else>
        <li>没有数据</li>
    </ul>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props: ["list"],
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    todetail(obj) {
      console.log(obj);
      this.$router.push({ name: "Detail", params: { obj } });
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='stylus' scoped>
ul {
  width: 100%;
  height: 100%;

  li {
    width: 90%;
    height: 3rem;
    padding: 0 5%;
    background-color: white;
    margin-bottom: 15px;

    p {
      width: 100%;
      height: 0.5rem;
      line-height: 0.5rem;
      text-align: left;
      font-size: 0.42rem;
      color: #CCC;
    }

    div {
      width: 100%;
      height: 2.5rem;

      span {
        float: left;
        width: 50%;
        text-align: left;
        height: 1.25rem;
        line-height: 1.25rem;
        font-size: 0.42rem;
      }
    }
  }
}

.main {
  overflow: auto;
}
</style>