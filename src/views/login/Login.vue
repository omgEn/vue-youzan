<template>
  <div class="login">
    <h3>welcome <span v-text="userinfo.username"></span> login</h3>
    <el-row>
      <el-button @click="login">login</el-button>
    </el-row>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { mapActions, mapMutations } from 'vuex';

// import { mapActions } from 'vuex'
// import { userLogin } from '@/utils/api'
export default {
  data: function() {
    return {
      username: '1',
      password: '1',
    };
  },
  computed: {
    ...mapState('user', ['userinfo']),
  },
  methods: {
    ...mapActions('user', ['userLogin']),
    ...mapMutations('user', ['updateUserinfo']),
    login() {
      const data = {
        username: this.username,
        password: this.password,
      };
      // 登录 从后端接口 验证
      /* // 这一部分放到vuex的actions中写
			fetchLogin(data).then(res=>{
				console.log('登录成功',res);
				this.$router.replace('/')
			}); */

      /* // vuex那边return出的fetchLogin，这边又调用？
			this.userLogin(data,()=>{
				this.$http.fetchLogin(data).then(res=>{
					this.updateUserinfo(res);
					// 调用的mutations的方法，什么时候可以是actions的方法
					localStorage.setItem('token',res.token);
					// token是后端给的？
					localStorage.setItem('isLogin',1);
					this.$router.replace('/');
				})
				// localStorage.setItem('token',res.token);
			}); */

      this.$http.fetchLogin(data).then((res) => {
        this.updateUserinfo(res);
        localStorage.setItem('token', res.token);
        // token是后端给的？
        localStorage.setItem('isLogin', 1);
        this.$router.replace('/');
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  h3 {
    text-align: center;
  }
  .el-button {
  }
}
</style>
