<template>
    
    <!-- <section id="aboutMe" class="scroll-margin-top">簡歷</section> -->
    <!-- <section id="skills" class="scroll-margin-top">具備技能</section> -->
    <!-- <section id="experience" class="scroll-margin-top">過往歷程</section> -->
    <!-- <section id="autobiography" class="scroll-margin-top">自傳</section> -->
    <!-- 以下是myWork.vue分頁的內容 -->
    <!-- <section id="introduce"> -->
        <!-- <h1>作品介紹</h1> -->
        <!-- <workIntroduce></workIntroduce> -->
    <!-- </section> -->
    <section id="finalProject">
        <h1>
            前端網頁開發技術課程－期末專題報告
            <v-btn variant="tonal" href="https://kwccc073.github.io/GrooveShare/#/">點我前往網站</v-btn>
        </h1>
        
        <!-- <v-btn to="introduceGS">點我看功能介紹</v-btn> -->
        <finalProject></finalProject>
    </section>
    <!-- <section id="lineBot"> -->
        <!-- <h1>前端網頁開發技術課程－期中作業Line機器人</h1> -->
        <!-- <lineBot></lineBot> -->
    <!-- </section> -->
    <!-- <section id="game"> -->
        <!-- <h1>前端網頁開發技術課程－期中作業小遊戲</h1> -->
        <!-- <v-btn href="https://kwccc073.github.io/Japanese-game/">點我進入遊戲頁面</v-btn> -->
    <!-- </section> -->

</template>

<style scoped lang="scss">
section{
    width: 100%;
    // height: 100vh;

    // &:nth-child(odd) {
    //     background-color: lightblue;
    // }
    h1{
        // margin-bottom: 1rem;
    }
}
// 跳到特定區塊的時候會被導覽列遮住部分***待編輯***
</style>

<script setup>
// 以下是myWork.vue分頁的內容
import WorkIntroduce from '@/components/workIntroduce.vue';
import finalProject from '@/components/finalProject.vue';
import lineBot from '@/components/lineBot.vue';
</script>