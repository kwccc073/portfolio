<template>
    <section id="introduce">
        <!-- <h1>作品介紹</h1> -->
        <!-- <workIntroduce></workIntroduce> -->
    </section>
    <!-- id暫時叫project***待編輯*** -->
    <!-- 專專題網頁GrooveShare -->
    <section id="project">
        <h1>
            前端網頁開發技術課程－期末專題報告
            <v-btn variant="tonal" href="https://kwccc073.github.io/GrooveShare/#/">點我前往網站</v-btn>
        </h1>
        
        <!-- <v-btn to="introduceGS">點我看功能介紹</v-btn> -->
        <finalProject></finalProject>
    </section>
    <section id="lineBot">
        <h1>前端網頁開發技術課程－期中作業Line機器人</h1>
    </section>
    <section id="game">
        <h1>前端網頁開發技術課程－期中作業小遊戲</h1>
        <v-btn href="https://kwccc073.github.io/Japanese-game/">點我進入遊戲頁面</v-btn>
    </section>
</template>

<style scoped lang="scss">
section{
    width: 100%;
   

    &:nth-child(odd) {
        // background-color: lightblue;
    }
    &:nth-child(even) {
        // background-color: lightgray;
    }
}
</style>

<script>
import finalProject from '@/components/finalProject.vue';
import WorkIntroduce from '@/components/workIntroduce.vue';
</script>