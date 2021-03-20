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
                         pattern="\w{6,10}" required>
                </div>
              </div>
              <div class="form-group has-feedback">
                <label class="col-sm-3 control-label" for="pw1">密码：</label>
                <div class="col-sm-9 require">
                  <input type="password" pattern="\w{6,10}" class="form-control" name="pwd" id="pw1"
                         required>
                </div>
              </div>
              <div class="form-group has-feedback">
                <label class="col-sm-3 control-label" for="yzm">验证码：</label>
                <div class="col-sm-5 require">
                  <input type="text" pattern="\d{4}" class="form-control" name="yzm" id="yzm"
                         required>
                </div>
                <div class="col-sm-4">
                  <img src="php/idcode.php" alt="">
                </div>
              </div>
              <div class="form-group has-feedback">
                <label id="info" class="col-sm-4 control-label pull-left"></label>
              </div>
            </div>
            <div class="modal-footer">
              <button type="submit" class="btn btn-primary" @click="addRouterUsr">登录</button>
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
export default {
name: "Login",
  methods:{
    addRouterRegist(){
      this.$router.push('/register');
    },
    addRouterUsr(){
      this.$router.push('/user');
    }
  }
}
</script>

<style scoped>

</style>
