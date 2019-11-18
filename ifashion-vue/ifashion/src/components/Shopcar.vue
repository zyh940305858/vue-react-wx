<!-- 购物车 -->
<template>
  <div class="main">
    <h3>购物车</h3>
    <div v-if="shopcarlist.length>0">
    <ul>
      <li v-for="(item,index) in shopcarlist" :key="index">
        <img :src="item.pic" alt />
        <p>{{item.name}}</p>
        <span>单价:￥<b>{{item.price}}</b></span>
        <button class="sub" @click="subcountFn(item)">-</button><b>{{item.count}}</b><button class="add" @click="addcountFn(item)">+</button>
      </li>
    </ul>
    </div>
    <div v-else>
      <img class="logo" src="../assets/images/没有更多.png" alt="">
      <p>没有数据</p>
    </div>
    <footer>
      <div>商品总数:{{sumcount}}</div>
      <div>商品总价:{{summoney}}</div>
    </footer>
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
    return {};
  },
  //监听属性 类似于data概念
  computed: {
    ...mapState(["shopcarlist"]),
    sumcount:function(){
      return this.shopcarlist.reduce(function(sum,obj){
        return sum + obj.count
      },0)
    },
    summoney:function(){
      return this.shopcarlist.reduce(function(sum,obj){
        return sum + obj.count * obj.price
      },0)
    }
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    ...mapMutations(["addcountFn","subcountFn"])
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
.main {
  width: 100%;
  height: 100%;

  h3 {
    width: 97%;
    padding-left: 3%;
  }

  .logo{
    display flex;
    margin 70px auto 0px auto;
  }

  p{
    text-align center;
  }

  ul {
    width: 100%;
    height: 100%;
    font-size 0.42rem;

    li {
      width: 100%;
      height: 3rem;

      img {
        float: left;
        width: 25%;
        height: 80%;
        margin: 0.3rem;
      }

      p {
        margin-top 0.1rem;
        float: left;
        width: 65%;
        color: #000;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      span {
        margin-top 0.2rem;
        float: left;
        width: 65%;
        height: 0.8rem;
        line-height: 0.8rem;
        color: #666;

        b {
          color: red;
          font-size: 0.5rem;
        }
      }

      button.sub{
        width 1rem;
        height 1rem;
        font-size 1rem;
        text-align center;
        line-height 1rem;
        background-color white;
        color blue;
        border-radius 50%;
        border 1px solid blue;
        overflow hidden;
      }

      b{
        height 1rem;
        line-height 1rem;
        font-size 0.7rem;
      }

      button.add{
        width 1rem;
        height 1rem;
        font-size 1rem;
        text-align center;
        background-color blue;
        color white;
        line-height 1rem;
        border-radius 50%;
        border 1px solid blue;
        overflow hidden;
      }
    }
  }
  footer{
    position fixed;
    bottom 0%;
    display flex;
    div{
      flex 1;
    }
  }
}
</style>