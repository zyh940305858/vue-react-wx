<!-- 详情页 -->
<template>
  <div class="wrapper">
    <mt-header title="加班调休申请表">
      <router-link to="/" slot="left">
        <mt-button icon="back" @click="callback">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="information">
      <img :src="data.avatar" alt />
      <p>
        <span>申请人姓名:</span>
        {{data.nickname}}
      </p>
      <p>
        <span>申请单号:</span>
        {{data.applicationNumber}}
      </p>
      <p>
        <span>发起时间:</span>
        {{new Date(data.create_at).toLocaleDateString()}}
      </p>
    </div>
    <div class="main" v-if="data.list_type==='overtime'">
      <h3>申请信息</h3>
      <p>
        <span>
          加班日期
          <b>*</b>
        </span>
        {{new Date(data.create_at).toLocaleDateString()}}
      </p>
      <p>
        <span>加班类型</span>
        {{data.type===1 ? "工作日加班":data.type===2 ? "双休日加班":"假期加班" }}
      </p>
      <p>
        <span>
          加班起始日期
          <b>*</b>
        </span>
        {{new Date(data.startTime).toLocaleDateString()}}
      </p>
      <p>
        <span>
          加班结束日期
          <b>*</b>
        </span>
        {{new Date(data.endTime).toLocaleDateString()}}
      </p>
      <p>
        <span>
          加班时长
          <b>*</b>
        </span>
        {{(new Date(data.endTime)-new Date(data.startTime))/3600000}}
      </p>
      <h3>加班事由</h3>
      <p>{{data.describes}}</p>
    </div>
    <div class="main" v-else>
      <h3>申请信息</h3>
      <p>
        <span>
          休假日期
          <b>*</b>
        </span>
        {{new Date(data.create_at).toLocaleDateString()}}
      </p>
      <p>
        <span>休假类型</span>
        {{data.type===1 ? "调休":data.type===2 ? "事假":"其他" }}
      </p>
      <p>
        <span>
          休假起始日期
          <b>*</b>
        </span>
        {{new Date(data.startTime).toLocaleDateString()}}
      </p>
      <p>
        <span>
          休假结束日期
          <b>*</b>
        </span>
        {{new Date(data.endTime).toLocaleDateString()}}
      </p>
      <p>
        <span>
          休假时长
          <b>*</b>
        </span>
        {{(new Date(data.endTime)-new Date(data.startTime))/3600000}}
      </p>
      <h3>休假事由</h3>
      <p>{{data.describes}}</p>
    </div>
    <footer>
      <span class="history">审批历史</span>
      <span class="back" @click="callback">返回</span>
      <span class="consent">同意</span>
    </footer>
  </div>
</template>
<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      obj: {},
      data: {}
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
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.obj = this.$route.params.obj;
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.axios
      .get(
        `http://localhost:3000/api/apply/${this.obj.list_type}?applicationNumber=${this.obj.applicationNumber}`,
        {
          headers: {
            token: localStorage.getItem("token")
          }
        }
      )
      .then(res => {
        if (res.data.code === 1) {
          this.data = res.data.data;
          console.log(res.data.data);
        } else {
          alert("报错!");
        }
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
.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #CCC;
}

.mint-header {
  background-color: #0c6142;
  color: white;
  font-size: 0.4rem;
}

.information {
  height: 14%;
  background-color: #0c6142;

  img {
    padding: 0.5rem;
    float: left;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
  }

  p {
    float: left;
    width: 75%;
    height: 0.8rem;
    line-height: 0.8rem;
    font-size: 0.42rem;
    color: white;

    span {
      float: left;
      width: 30%;
      text-align: left;
    }
  }
}

.main {
  flex: 1;
  width: 100%;

  h3 {
    width: 100%;
    height: 1rem;
    line-height: 1rem;
  }

  p {
    width: 80%;
    height: 1.2rem;
    line-height: 1.2rem;
    font-size: 0.42rem;
    margin-left: 10%;
    background-color: white;
    border-bottom: 1px solid #CCC;

    span {
      float: left;
      width: 40%;
      text-align: center;

      b {
        color: red;
      }
    }
  }
}
footer{
  width 100%;
  height 1.2rem;
  line-height 1.2rem;
  position fixed;
  bottom 0px;
  left 0px;
  display flex;
  span{
    flex 1;
  }
  .history{
    background-color white;
    color black;
  }
  .back{
    background-color #666;
    color white;
  }
  .consent{
    background-color #0c6142;
    color white;
  }
}
</style>