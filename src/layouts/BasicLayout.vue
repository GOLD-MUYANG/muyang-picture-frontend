<template>
  <div id="basicLayout">
    <a-layout style="min-height: 100vh">
      <a-layout-header class="header"><GlobalHeader/></a-layout-header>
      <a-layout-content class="content">
        <router-view/>
      </a-layout-content>
      <a-layout-footer class="footer"> by 牧羊/金鱼卷/灵魂酸/单脚自行车 </a-layout-footer>
    </a-layout>
  </div>
</template>

<script setup lang="ts">
import GlobalHeader from "@/components/GlobalHeader.vue";
</script>

<style scoped>

#basicLayout .header{
  background: white;
  color: unset;
  margin-bottom: 16px;
  padding-inline: 20px;
}

#basicLayout .content{
  padding: 20px;
  background: linear-gradient(to right,#fefefe,#fff);
  margin-bottom: 28px;
}

#basicLayout .footer{
  background: #efefef;
  padding: 16px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
</style>
