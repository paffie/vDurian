<template>
<div class="Register">
  <section id="main" class="box features">
    <div class="container">
      <div class="row gtr-200">
        <div class="col-12">

          <form id="form_regist" class="form-horizontal">
            <div class="modal-body">
              <div class="form-group has-feedback">
                <label class="col-sm-3 control-label" for="zh2">用户名：</label>
                <div class="col-sm-9 require">
                  <input type="text" class="form-control" name="username" id="zh2"
                         v-model="account" pattern="\w{6,10}" required>
                </div>
              </div>
              <div class="form-group has-feedback">
                <label class="col-sm-3 control-label" for="pw2">密码：</label>
                <div class="col-sm-9 require">
                  <input type="password" pattern="\w{6,10}" class="form-control" name="pwd" id="pw2" v-model="password">
                </div>
              </div>
              <div class="form-group has-feedback">
                <label class="col-sm-3 control-label" for="pw3">确认密码：</label>
                <div class="col-sm-9 require">
                  <input type="password" pattern="\w{6,10}" class="form-control" name="repwd" id="pw3" v-model="password_1">
                </div>
              </div>
              <div class="form-group has-feedback">
                <label class="col-sm-3 control-label" for="lc">昵称：</label>
                <div class="col-sm-9 require">
                  <input type="text" pattern="\S{2,10}" class="form-control" name="nc" id="lc">
                </div>
              </div>
              <div class="form-group has-feedback">
                <label id="wanner" class="col-sm-4 control-label pull-left"></label>
              </div>
            </div>
            <div class="modal-footer">
              <button type="submit" class="btn btn-primary">注册</button>
              <button type="button" class="btn btn-default" data-dismiss="modal" @click="goOff">返回</button>
            </div>
          </form>
        </div>

      </div>
    </div>
  </section>
</div>
</template>

<script>
import {setCookie} from "../assets/js/cookie"
export default {
  name: "Register",
  data() {
    return {
      account: '',
      password: '',
      password_1: '',
      showHint: false,
      hint: '',
    }
  },
  methods: {
    validate() {
      if (this.account == '' && this.password == '') {
        this.showHint = true,
            this.hint = "请输入用户名和密码"

      } else if (this.account !== '' && this.password == '') {
        this.showHint = true,
            this.hint = "请输入密码"
      } else if (this.account == '' && this.password !== '') {
        this.showHint = true,
            this.hint = "请输入用户名"
      } else if (this.account !== '' && this.password == this.password_1) {
        setCookie('account', this.account, 1000 * 60)
        setTimeout(function () {
          this.$router.push({path: '/user'})
          window.location.reload();
        }.bind(this), 1000)
      }
    },
    goOff() {
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped>

</style>
