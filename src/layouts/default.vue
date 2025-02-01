<template>
  <!-- 導覽列---------------------------- -->
  <!-- <v-app-bar elevation="0" color="black" height="100"> -->
    <!-- <div id="bar-container"> -->
      <!-- 我是導覽列 -->
      <!-- <v-spacer></v-spacer> -->
      <!-- 漢堡按鈕（行動裝置才會出現） -->
      <!-- <v-app-bar-nav-icon v-if="mobile"></v-app-bar-nav-icon> -->
      
      <!-- 電腦版按鈕 -->
      <!-- <template v-if="!mobile"> -->
        <!-- <template v-for="item in navItems" :key="item.to"> -->
          <!-- <v-btn -->
            <!-- :prepend-icon="item.prependIcon" -->
            <!-- :to="item.to"> -->
            <!-- {{item.title}} -->
          <!-- </v-btn> -->
        <!-- </template> -->
      <!-- </template> -->
    <!-- </div> -->
  <!-- </v-app-bar> -->
  <!-- 主要內容(page)---------- -->
  <v-main>
    <router-view />
  </v-main>
</template>

<script setup>
import { ref, computed } from 'vue'
// 引入斷點
import { useDisplay } from 'vuetify'
// 手機斷點
const { mobile } = useDisplay() 

const navItems = computed(() => {
  return [
    { title: '簡歷', to: '/#aboutMe', prependIcon: 'mdi-map-search-outline' },
    { title: '具備技能', to: '/#skills', prependIcon: 'mdi-map-search-outline' },
    { title: '過往歷程', to: '/#experience', prependIcon: 'mdi-text-search-variant' },
    { title: '自傳', to: '/#autobiographye', prependIcon: 'mdi-text-search-variant' },
    { title: '作品集', to: '/myWork', prependIcon: 'mdi-text-search-variant' }
  ]
})
</script>

<style lang="scss">
//導覽列-----------------------------------
.v-app-bar{
  #bar-container{
    /* background: blue; */
    width: 80vw;
    margin: auto;
    display: flex;
    align-items: center;
  }  
}

.v-main{
  width: 80vw;
  margin: auto;
}


</style>