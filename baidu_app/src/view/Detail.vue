<!-- Detail -->
<template>
  <div class="detail">
      <h3>{{item.title}}</h3>
      <img v-for="(i,index) in item.imgUrl" :key="index" :src="i" alt="">
      <button @click="addFn(item)">添加收藏</button>
      <button @click="tocollect">跳转收藏</button>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { mapState, mapMutations } from "vuex";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      item: {}
    };
  },
  //监听属性 类似于data概念
  computed: {
    ...mapState(["collectlist"])
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    ...mapMutations(["addFn"]),
    tocollect(){
      this.$router.push("/collect")
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.axios.get("/list").then(res => {
      this.item = res.data[this.$route.params.index];
    });
  },
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
button{
  display block;
  margin 0 auto;
}
</style>