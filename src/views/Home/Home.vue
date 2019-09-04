<template>
  <div class="home">
    <div class="home-header">
      <p>黑马程序员--老陆超市</p>
    </div>
    </router-view>
    <div class="home-footer">
      <van-tabbar v-model="active" active-color="red">
        <van-tabbar-item name="home" to="./list">
          <van-icon name="wap-home" size="30px" color="#969696" />
          <P>首页</P>
        </van-tabbar-item>
        <van-tabbar-item name="Supermarket" to="./list">
          <van-icon name="shop-o" size="30px" color="#969696" />
          <P>闪送超市</P>
        </van-tabbar-item>
        <van-tabbar-item name="shoppingcart" to="./cart">
          <van-icon name="shopping-cart-o" size="30px" info="20" color="#969696" />
          <P>购物车</P>
        </van-tabbar-item>
        <van-tabbar-item name="mine" to="./list">
          <van-icon name="contact" size="30px" color="#969696" />
          <P>我的</P>
        </van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 'Supermarket'
    }
  }
}
</script>

<style lang='scss'>
// git remote 查看所有的存储着远程仓库的地址；git remote add 变量名 远程仓库地址

.home-header {
  background-color: #ffd600;
  width: 100%;
  line-height: 50px;
  height: 50px;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  p {
    font-size: 18px;
    font-weight: 700;
  }
}

.home-footer {
  .van-tabbar-item {
    text-align: center;
    p {
      font-size: 12px;
      color: #969696;
    }
  }
}
</style>
