<!-- 登陆页面 -->
<template>
  <div class="wrapper">
    <div class="main">
      <p>默认手机号:13683599380</p>
      <p>默认密码:123456</p>
      <input type="phone" placeholder="手机号码" v-model="phone" />
      <input type="password" placeholder="密码" v-model="password" />
      <button @click="tolist">登陆</button>
    </div>
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
      phone: "",
      password: ""
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    tolist() {
      this.axios
        .post("http://localhost:3000/api/login", {
          phone: this.phone,
          password: this.password
        })
        .then(response => {
          if (response.data.code === 1) {
            localStorage.setItem("token", response.data.token);
            this.$router.push("/home");
          }
        })
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
input {
  width: 85%;
  height: 0.8rem;
  margin: 0.2rem;
  padding-left: 3%;
  font-size: 0.4rem;
}

button {
  width: 80%;
  height: 1.2rem;
  border-radius: 20px;
  border: none;
  background-color: #666;
  color: white;
  font-size: 0.4rem;
}
</style>