<!-- Form -->
<template>
  <div class="wrapper">
    <mt-header title="发布任务">
      <router-link to="/" slot="left">
        <mt-button icon="back" @click="callback">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="main">
      <p>
        <span>加班类型</span>
        <select name id v-model="type">
          <option value="1">工作日加班</option>
          <option value="2">双休日加班</option>
          <option value="3">假期加班</option>
        </select>
      </p>
      <div class="cell">
        <span>加班起始时间</span>
        <input type="text" v-model="startTime" @click="$refs.startTimePicker.open()" />
      </div>

      <div class="cell">
        <span>加班截止时间</span>
        <input type="text" v-model="endTime" @click="$refs.endTimePicker.open()" />
      </div>

      <div class="cell">
        <span>加班事由</span>
        <input type="text" v-model="desc" />
      </div>

      <div class="bar">
        <div class="cancel" @click="$router.go(-1)">取消</div>
        <div class="submit" @click="submit_overtime">提交</div>
      </div>

      <!-- 演示 datetime-picker组件的使用 -->
      <mt-datetime-picker ref="startTimePicker" @confirm="getStartTime"></mt-datetime-picker>
      <mt-datetime-picker ref="endTimePicker" @confirm="getEndTime"></mt-datetime-picker>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { Toast } from "mint-ui";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      type: 1,
      startTime: "",
      endTime: "",
      desc: ""
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
    getStartTime: function(date) {
      //console.log(date.toLocaleDateString());
      this.startTime = `${date.getFullYear()}-${date.getMonth() +
        1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    },
    getEndTime: function(date) {
      //console.log(new Date(date) - new Date(this.startTime));

      if (new Date(date) - new Date(this.startTime) < 0) {
        //alert('日期选择错误!');
        //Toast('日期选择错误!');
        Toast({
          message: "日期选择错误!",
          duration: 4000,
          iconClass: "iconfont icon-diannao"
        });
        return;
      }
      //console.log(date.toLocaleDateString());
      this.endTime = `${date.getFullYear()}-${date.getMonth() +
        1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    },
    /* 提交 加班申请 */
    submit_overtime: function() {
      console.log({
        annex: "",
        describes: this.desc,
        startTime: this.startTime,
        endTime: this.endTime,
        type: this.type
      });
      console.log()

      //添加token请求头
      this.axios.defaults.headers.common["token"] = localStorage.getItem(
        "token"
      );
      //发起ajax请求, 提交加班记录
      this.axios
        .post(`http://localhost:3000/api/apply/${this.$route.params.type}`, {
          annex: "",
          describe: this.desc,
          startTime: this.startTime,
          endTime: this.endTime,
          type: this.type
        })
        .then(res => {
          console.log(res.data);
        });
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
.wrapper {
  display: flex;
  flex-direction: column;
}

.mint-header {
  background-color: white;
  color: black;
  font-size: 0.4rem;
}

.main {
  flex: 1;

  p {
    width: 100%;
    height: 1.2rem;

    span {
      width: 40%;
      height: 1.2rem;
      text-align: left;
    }
  }
}
</style>