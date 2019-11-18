<!-- 商品列表 -->
<template>
  <div class="main">
    <div class="header_bg">
      <img src="../assets/images/avatar.jpg" alt />
    </div>
    <h3>爱时尚精品屋</h3>
    <p>公告:流行爆款数量有限尽快下单,谢谢</p>
    <nav>
      <span @click="changelist">价格升序↑</span>
      <span @click="changelist">价格降序↓</span>
      <span @click="changelist">销量升序↑</span>
      <span @click="changelist">销量降序↓</span>
    </nav>
    <ul>
      <li v-for="(item,index) in list" :key="index">
        <img :src="item.pic" alt />
        <p>{{item.name}}</p>
        <span>已售:{{item.buyCount}}件</span>
        <span>
          单价:
          <b>{{item.price}}</b>元
        </span>
        <button @click="addFn(item)">加入购物车</button>
      </li>
    </ul>
    <span class="shopcar" @click="toshopcarFn"><b>{{shopcarlist.length}}</b></span>
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
      list: []
    };
  },
  //监听属性 类似于data概念
  computed: {
    ...mapState(["shopcarlist"])
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    ...mapMutations(["addFn"]),
    toshopcarFn() {
      console.log(this.$router.push("/shopcar"));
    },
    changelist(e){
      switch (e.target.innerHTML) {
        case "价格升序↑":
          this.list.sort((a,b)=>{return a.price-b.price})
          break;
        case "价格降序↓":
          this.list.sort((a,b)=>{return b.price-a.price})
          break;
        case "销量升序↑":
          this.list.sort((a,b)=>{return a.buyCount-b.buyCount})
          break;
        case "销量降序↓":
          this.list.sort((a,b)=>{return b.buyCount-a.buyCount})
          break;
        default:
          break;
      }
      console.log(e.target.innerHTML)
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.axios.get("http://yantianfeng.com/api/goodList").then(res => {
      console.log(res.data);
      this.list = res.data.goodList;
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
.main {
  width: 100%;
  height: 100%;
  font-size: 0.42rem;

  .shopcar {
    border: none;
    border-radius: 50%;
    width: 15%;
    height: 8%;
    background: url('../assets/images/cart.png') no-repeat center center;
    background-size: 60%;
    position: fixed;
    right: 8%;
    bottom: 5%;
    background-color: black;
    b{
      position absolute;
      color yellow;
      right 40%;
    }
  }
}

.header_bg {
  width: 100%;
  height: 5rem;
  background: url('../assets/images/banner-2.png');
  background-size: cover;
  position: relative;

  img {
    position: absolute;
    width: 2.5rem;
    height: 2.5rem;
    border: 1px solid #CCC;
    border-radius: 50%;
    overflow: hidden;
    top: 3.75rem;
    left: 3.75rem;
  }
}

h3 {
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  margin-top: 1.5rem;
  text-align: center;
}

p {
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  font-size: 0.42rem;
  color: #666;
}

nav {
  margin-top: 0.5rem;
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
  display: flex;
  font-size: 0.42rem;
  border-bottom: 1px solid #CCC;

  span {
    flex: 1;
    text-align: center;
  }
}

ul {
  width: 100%;

  li {
    width: 100%;
    height: 3rem;
    position: relative;

    img {
      float: left;
      width: 25%;
      height: 80%;
      margin: 0.3rem;
    }

    p {
      float: left;
      width: 65%;
      color: #000;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    span {
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

    button {
      position: absolute;
      width: 25%;
      height: 0.8rem;
      border: none;
      background-color: red;
      color: white;
      right: 5%;
      bottom: 10%;
    }
  }
}
</style>