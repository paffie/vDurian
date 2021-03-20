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
                         pattern="\w{6,10}" required>
                </div>
              </div>
              <div class="form-group has-feedback">
                <label class="col-sm-3 control-label" for="pw2">密码：</label>
                <div class="col-sm-9 require">
                  <input type="password" pattern="\w{6,10}" class="form-control" name="pwd" id="pw2">
                </div>
              </div>
              <div class="form-group has-feedback">
                <label class="col-sm-3 control-label" for="pw3">确认密码：</label>
                <div class="col-sm-9 require">
                  <input type="password" pattern="\w{6,10}" class="form-control" name="repwd" id="pw3">
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
export default {
name: "Register",
  methods:{
    goOff(){
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped>

</style>
