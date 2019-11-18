<!-- home主页 -->
<template>
  <div class="wrapper">
    <mt-header title="休假/加班">
      <router-link to="/" slot="left">
        <mt-button icon="back" @click="callback">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <mt-navbar v-model="selected" @click.native="changestatus">
      <mt-tab-item id="0">
        <dl>
          <dt class="iconfont icon-05"></dt>
          <dd>待处理</dd>
        </dl>
      </mt-tab-item>
      <mt-tab-item id="1">
        <dl>
          <dt class="iconfont icon-07"></dt>
          <dd>已发起</dd>
        </dl>
      </mt-tab-item>
      <mt-tab-item id="2">
        <dl>
          <dt class="iconfont icon-xuanzhong-01"></dt>
          <dd>已处理</dd>
        </dl>
      </mt-tab-item>
    </mt-navbar>
    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="0">
        <div class="nav">
          <span :class="{active:Overtimeflag}" @click="changenav">加班</span>
          <span :class="{active:Vacationflag}" @click="changenav">休假</span>
        </div>
        <List :list="list"></List>
      </mt-tab-container-item>
      <mt-tab-container-item id="1">
        <div class="nav">
          <span :class="{active:Overtimeflag}" @click="changenav">加班</span>
          <span :class="{active:Vacationflag}" @click="changenav">休假</span>
        </div>
        <List :list="list"></List>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <div class="nav">
          <span :class="{active:Overtimeflag}" @click="changenav">加班</span>
          <span :class="{active:Vacationflag}" @click="changenav">休假</span>
        </div>
        <List :list="list"></List>
      </mt-tab-container-item>
    </mt-tab-container>
    <div :class={show:showflag} @click="showflag=false">
      <footer v-show="showflag"><span @click="toform">加班</span><span @click="toform">休假</span></footer>
    </div>
    <span class="btn" @click="showflag=true" >发布任务</span>
  </div>
  
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import List from "./List";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    List
  },
  data() {
    //这里存放数据
    return {
      selected: "0",
      Overtimeflag: true,
      Vacationflag: false,
      list: [],
      showflag:false
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    callback() {
      this.$router.go(-1);
    },
    changenav(e) {
      if (e.target.innerHTML === "休假") {
        this.Vacationflag = true;
        this.Overtimeflag = false;
        this.requestdata(this.selected,"vacation")
      } else if (e.target.innerHTML === "加班") {
        this.Vacationflag = false;
        this.Overtimeflag = true;
        this.requestdata(this.selected,"overtime")
      }
    },
    changestatus() {
      this.requestdata(this.selected,"overtime")
    },
    //axios请求函数
    requestdata(status,type) {
      console.log(status,type)
      this.axios.get("http://localhost:3000/api/task/list", {params: {status,type,create_at: 0,
          pageSize:50}})
        .then(res => {console.log(res.data.data);this.list = res.data.data;});
    },
    toform(e){
      if(e.target.innerHTML === "休假"){
        this.$router.push({name:"Form",params:{type:"vacation"}})
      }else{
        this.$router.push({name:"Form",params:{type:"overtime"}})
      }
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.axios
      .get("http://localhost:3000/api/task/list", {
        params: {
          status: 0,
          type: "overtime",
          create_at: 0,
          pageSize:50
        }
      })
      .then(res => {
        console.log(res.data.data);
        this.list = res.data.data;
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
.mint-header {
  background-color: white;
  color: black;
  font-size: 0.4rem;
}

.iconfont {
  color: #cbc9c9;
  font-size: 0.7rem;
}

dd {
  color: #cbc9c9;
}

.mint-tab-item.is-selected {
  border: none;

  dl dt {
    color: #0c6142;
  }

  dl dd {
    color: #0c6142;
  }
}

.nav {
  width: 50%;
  height: 1rem;
  display: flex;
  margin: 0.3rem auto;
  line-height: 1rem;
  border: 1px solid #0c6142;
  border-radius: 0.5rem;
  overflow: hidden;

  span {
    flex: 1;
    color: #0c6142;
    font-size: 0.42rem;
    text-align: center;
    text-decoration: none;
    overflow: hidden;
  }

  span.active {
    background-color: #0c6142;
    color: #FFF;
  }
}

.mint-tab-container{
  height 83%;
}


.mint-tab-container >>> .mint-tab-container-wrap {
  width: 100%;
  height: 100%;

}

.btn{
  position fixed;
  width 3rem;
  height 1rem;
  background-color #0c6142;
  color  white;
  text-align center;
  line-height 1rem;
  right 5%;
  bottom 3%;
  border-radius 0.5rem;
  text-decoration none;
}

.show{
  width 100%;
  height 100%;
  background-color rgba(0,0,0,0.2);
  position fixed;
  z-index 1;
  top 0px;
  left 0px;
}

footer{
  background-color white;
  position fixed;
  bottom 0px;
  left 0px;
  width 100%;
  height 1.6rem;
  line-height 1.6rem;
  display flex;
  span{
    flex 1;
    text-align center;
    border 1px solid #CCC;
  }
}
</style>