<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="6">
                <img src="../assets/lineBot/lineBot.jpg" alt="LINE機器人示意圖" id="LineBotImg">
            </v-col>
            <v-col cols="12" md="6">
                一句話介紹
            </v-col>
        </v-row>
        背景/目的/對象 之類的
        使用技術
        亮點
        功能介紹（回傳的訊息）
        開發挑戰/解決
    </v-container>
</template>

<style lang="scss" scoped>
.v-container{
    padding: 0;

    .v-row{
        .v-col{
            display: flex;
            // justify-content: center;

        }
    }
}

// LINE機器人示意圖
#LineBotImg{
    margin-top: 1.5rem;
    width: 80%;
    height: auto;
}
</style>