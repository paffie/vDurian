<template>
<div class="Introduction">
  <!-- carousel -->

  <Banner></Banner>
  <div class="container">
    <div class="row gtr-200">
      <div class="col-12">

        <!-- Highlight -->
        <section class="box highlight">


          <ul class="special">
            <li class="icon solid fa-search" ><span class="label">Magnifier</span></li>
            <li class="icon solid fa-tablet-alt"><span class="label">Magnifier</span></li>
            <li class="icon solid fa-flask"><span class="label">Magnifier</span></li>
            <li class="icon solid fa-cog"><span class="label">Magnifier</span></li>
          </ul>
          <header>
            <h2>你能发现什么？</h2>
            <p>发现板块介绍</p>

          </header>
          <p>
            最近的绘画知识，最好的画作欣赏<br />
            最新的绘画趣闻，最潮的绘画风向
          </p>
        </section>
      </div>

      <div class="col-12">
        <!-- Features -->
        <section class="container features">
          <h2 class="major"><span>推荐</span></h2>

            <div class="row">
              <div class="col-3 col-6-medium col-12-small">

                <!-- Feature -->
                <section class="box feature">
                  <a href="#" class="image featured"><img src="../assets/images/main/guohua.jpg" alt="" /></a>
                  <h3><a href="#">国画</a></h3>
                  <p>
                    国画一词起源于汉代，主要指的是画在绢、宣纸、帛上并加以装裱的卷轴画。国画是中国的传统绘画形式，是用毛笔蘸水、墨、彩作画于绢或纸上。
                    工具和材料有毛笔、墨、国画颜料、宣纸、绢等，题材可分人物、山水、花鸟等，技法可分具象和写意。中国画在内容和艺术创作上，体现了古人对自然、社会及与之相关联的政治、哲学、宗教、道德、文艺等方面的认知。
                  </p>
                </section>

              </div>
              <div class="col-3 col-6-medium col-12-small">

                <!-- Feature -->
                <section class="box feature">
                  <a href="#" class="image featured"><img src="../assets/images/main/youhua.jpg" alt="" /></a>
                  <h3><a href="#">油画</a></h3>
                  <p>
                    油画是以用快干性的植物油（亚麻仁油、罂粟油、核桃油等）调和颜料，在画布亚麻布，纸板或木板上进行制作的一个画种。
                    作画时使用的稀释剂为挥发性的松节油和干性的亚麻仁油等。画面所附着的颜料有较强的硬度，当画面干燥后，能长期保持光泽。
                    凭借颜料的遮盖力和透明性能较充分地表现描绘对象，色彩丰富，立体质感强。油画是西洋画的主要画种之一。
                  </p>
                </section>

              </div>
              <div class="col-3 col-6-medium col-12-small">

                <!-- Feature -->
                <section class="box feature">
                  <a href="#" class="image featured"><img src="../assets/images/main/sumiao.jpg" alt="" /></a>
                  <h3><a href="#">素描</a></h3>
                  <p>
                    由木炭，铅笔，钢笔等，以线条来画出物象明暗的单色画，称作素描。单色水彩和单色油画也可以算作素描；中国传统的白描和水墨画也可以称之为素描。通常讲的素描多元化指铅笔画和炭笔画。素描是一切绘画的基础，这是研究绘画艺术所必须经过的一个阶段。
                    素描通常采用可于平面留下痕迹的方法.素描具备了自然律动感。不同的笔触营造出不同的线条及横切关系和节奏、主动与被动的周围环境、平面、体积、色调、及质感。
                  </p>
                </section>

              </div>
              <div class="col-3 col-6-medium col-12-small">

                <!-- Feature -->
                <section class="box feature">
                  <a href="#" class="image featured"><img src="../assets/images/main/shuicai.jpg" alt="" /></a>
                  <h3><a href="#">水粉</a></h3>
                  <p>
                    水粉画是以水作为媒介，这一点，它与水彩画是相同的。所以，水粉画也可以画出水彩画一样的酣畅淋漓的效果。但是，它没有水彩画透明。它和油画也有相同点，就是它也有一定的覆盖能力。由于水粉画是以水加粉的形式来出现的，干湿变化很大。
                    它的表现力介于油画和水彩画之间。表现特点是处在不透明和半透明之间。 有经验的画家往往就是利用它的这种特性来表达水粉色彩自身的和特有的艺术魅力。
                  </p>
                </section>

              </div>
              <div class="col-12">
                <ul class="actions">
                  <li><router-link :to="{path:'/search'}" class="button large">查看更多</router-link></li>
                  <li><router-link :to="{path:'/join_us'}" class="button alt large">加入我们</router-link></li>
                </ul>
              </div>
            </div>

        </section>
<!--        <Carousel></Carousel>-->
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Banner from "@/components/Banner";
// import Carousel from "@/components/Carousel";
export default {
name: "Introduction",
  components: { Banner}
}
</script>

<style scoped>

</style>
