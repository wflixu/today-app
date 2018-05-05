<template>
<div class="my_content">
    <div class="my_header">
        <div class="top">

        </div>
        <div class="my_avatar">
            <img src="../assets/logo.png" alt="" srcset="">
        </div>
        <div class="my_name">
            <h2>username</h2>
        </div>
    </div>
    <div>
        <mt-navbar v-model="selected">
            <mt-tab-item id="1">选项一</mt-tab-item>
            <mt-tab-item id="2">选项二</mt-tab-item>
            <mt-tab-item id="3">选项三</mt-tab-item>
        </mt-navbar>

        <!-- tab-container -->
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <mt-cell v-for="n in 10" :title="'内容 ' + n" :key="n" />
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <mt-cell v-for="n in 4" :title="'测试 ' + n" :key="n" />
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                <mt-cell v-for="n in 6" :title="'选项 ' + n" :key="n" />
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</div>
</template>

<script>
import { Navbar, TabItem ,TabContainer, TabContainerItem, Cell } from 'mint-ui';


export default {
  data() {
    return {
        selected:'1'
    };
  },
  components: {
      'mt-navbar':Navbar,
      'mt-tab-item':TabItem,
      'mt-tab-container':TabContainer,
      'mt-tab-container-item':TabContainerItem,
      'mt-cell':Cell
  }
};
</script>
<style scoped>
.my_header {
  position: relative;
}

.top {
  height: 80px;
  background-color: coral;
}

.my_name {
  background-color: hotpink;
}

.my_avatar {
  position: absolute;
  z-index: 200;
  top: 60px;
  height: 40px;
  width: 100%;
  text-align: center;
}

.my_avatar > img {
  height: 40px;
  width: 40px;
  border: 2px solid #ccc;
  background-color: #fff;
  border-radius: 4px;
}

.my_name > h2 {
  padding-top: 20px;
  line-height: 60px;
}
</style>

