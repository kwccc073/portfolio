<template>
    <section id="aboutMe" class="scroll-margin-top">簡歷</section>
    <section id="skills" class="scroll-margin-top">具備技能</section>
    <section id="experience" class="scroll-margin-top">過往歷程</section>
    <section id="autobiography" class="scroll-margin-top">自傳</section>
</template>

<script setup>
</script>

<style scoped lang="scss">
section{
    width: 100%;
    height: 100vh;

    &:nth-child(odd) {
        background-color: lightblue;
    }
}

// 跳到特定區塊的時候會被導覽列遮住部分***待編輯***
</style>