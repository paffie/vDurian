<template>
<div class="Search">
  <section id="main" class="timeline-box features">
    <div class="container">
      <h2 class="major"><span>搜索</span></h2>
      <div class="row gtr-200">
        <div class="col-12 ">
          <form @submit.prevent="search()" class="form-search">
            <input class="discover-search" name="keyword"  placeholder="开始美术欣赏之旅：输入关键词，按下回车" type="text" v-model="key" @keyup.enter="showAnswer">
            <!--<button type="submit" class="button-search">搜索</button>-->
          </form>
        </div>
      </div>
    <br><br>
    </div>
    <div class="container">
    <Answer></Answer>
    </div>
<!--    <p>Hello</p>-->
    <div v-if="showAnswer" class="container"><Answer></Answer></div>
  </section>
</div>
</template>

<script>
import Answer from "@/components/Answer";

export default {
name: "Search",
  data(){
    return{
      showAnswer:false,
      key:'',
  }
 },
  method: {
    search(){
      this.showAnswer=true;
    }
  },
  components: {
  Answer,
  }
}
</script>

<style scoped>

</style>
