<template>
  <div class="login">
    <van-row>
      <van-col span="3" align="center">
        <van-icon size="25" @click="Back" name="arrow-left"/>
      </van-col>
      <van-col span="20" align="center">
        <span style="font-size:18px">商城登录注册</span>
      </van-col>
    </van-row>
    <van-form class="loginform" @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        label-width="60"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        loading-text="登录中..."
        label-width="60"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>
    <div class="login-tips">
      <span>注册</span>
      <span>忘记密码</span>
    </div>
    <!-- 第三方登录 -->
    <van-divider>第三方登录</van-divider>
    <div class="otherlogin">
      <div class="message">
        <van-icon size="25px" name="comment-circle" />
      </div>
      <div class="phone">
        <van-icon size="25px" name="phone-circle" />
      </div>
    </div>
    <div class="protocol">
      <span>注册即代表您同意</span>
      <span class="user-protocol">
                &lt;&lt;
                <a href="#">商城用户协议</a>&gt;&gt;
            </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    onSubmit (values) {
      console.log('submit', values)
    },
    Back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.login {
  margin-top: 15px;
}
.login-tips {
  padding: 10px;
  color: #ad1414;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
}
.protocol {
  text-align: center;
  color: #901414;}
a {
  color: blue;
}
.otherlogin {
  padding: 20px;
  display: flex;
  justify-content: space-around;}
.loginform {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
