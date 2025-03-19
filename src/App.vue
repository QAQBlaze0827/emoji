<template>
  <div class="container">
    <!-- 主要內容 -->
    <div class="content">
      <Home />
    </div>
    <div class="login">
      <button v-if="true">
        <RouterLink to=/profile>進入</RouterLink>
      </button>
      <button>
        <RouterLink to="/">返回</RouterLink>
      </button>
    </div>
  </div>
    <RouterView></RouterView>
  


</template>
<script lang="ts" setup name="App">
import Home from './components/Home.vue';
import { RouterLink, RouterView } from 'vue-router';

</script>

<style scoped>
.container {
  display: flex;
  /* 使用 flex 讓內容置中 */
  flex-direction: column;
  /* 垂直排列 */
  /* justify-content: center; */
  /* 垂直置中 */
  align-items: center;
  /* 水平置中 */
  /* 讓整個畫面滿版 */
}

button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  /* 增加內邊距 */
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button a {
  text-decoration: none;
  color: white;
}
.login{
  display:flex;
  gap:10px;
}
</style>