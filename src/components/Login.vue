<template>
<div class="Login">
  <section id="main" class="box features">
    <div class="container">
      <div class="row gtr-200">
        <div class="col-12">
          <form id="form_login" class="form-horizontal">
            <div class="modal-body">
              <div class="form-group has-feedback">
                <label class="col-sm-3 control-label" for="zh1">用户名：</label>
                <div class="col-sm-9 require">
                  <input type="text" class="form-control" name="username" id="zh1"
                   v-model="account"  pattern="\w{6,10}" required>
                </div>
              </div>
              <div class="form-group has-feedback">
                <label class="col-sm-3 control-label" for="pw1">密码：</label>
                <div class="col-sm-9 require">
                  <input type="password" pattern="\w{6,10}" class="form-control" name="pwd" id="pw1"
                         v-model="password"  required>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="submit" class="btn btn-primary" @click="validate">登录</button>
              <button type="button" class="btn btn-default" @click="addRouterRegist">注册</button>
            </div>
          </form>
        </div>

      </div>

    </div>
  </section>
</div>
</template>

<script>
import {setCookie,getCookie} from "../assets/js/cookie"
export default {
name: "Login",
  data(){
  return{
    account:'',
    password:'',
    showHint:false,
    hint:'',
  }},
  mounted(){
    if(getCookie('account')){
      this.$router.push({path:'/user'})
      window.location.reload();
    }
  },
  methods:{
    validate(){
        if(this.account == '' && this.password == ''){
          this.showHint=true,
              this.hint="请输入用户名和密码"

        }else if(this.account !== '' && this.password == ''){
          this.showHint=true,
              this.hint="请输入密码"
        }else if(this.account =='' && this.password !==''){
          this.showHint=true,
              this.hint="请输入用户名"
        }else{
          // var data = {account: this.account, password: this.password};
          setCookie('account',this.account,1000*60)
          setTimeout(function(){
            this.$router.push({ name:'u_center'})
            window.location.reload();
          }.bind(this),1000)
        }
    },
    addRouterRegist(){
      this.$router.push({ name:'register'});
    },
  }
}
</script>

<style scoped>

</style>
