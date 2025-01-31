<template>
    <v-container>
        <!-- 網站介紹---------------------------------------------------------------------------- -->
        <section id="GS_introduction">
            <img src="../assets/GrooveShare/LOGO-wr.png" alt="網站LOGO" id="GS_logo">
             <div>
                <p>
                    爵士鼓展現律動與節奏的魅力，取其精髓以「Groove」作為名稱的一部份，再融合象徵分享與交流精神的「Share」，最終將網站命名為「GrooveShare」，以傳達網站的核心精神，致力於音樂與資源的共享與互動。
                </p>
                <h2>GrooveShere功能：</h2>
                <!-- 感覺可以以v-card呈現**待編輯** -->
                <ul>
                    <li>
                        <b>寫譜專區：</b>輕鬆創作並上傳鼓譜，記錄每段喜愛的節奏。
                    </li>
                    <li>
                        <b>播放鼓譜音效：</b>每個鼓譜都能即時播放音效，快速掌握音樂律動。
                    </li>
                    <li>
                        <b>搜尋與收藏鼓譜：</b>不僅能輕鬆搜尋鼓譜，還能收藏喜愛的作品，隨時隨地回顧與練習。
                    </li>
                    <li>
                        <b>尋找練鼓室：</b>快速找到適合的練習場地，提供地址、電話及租借費用等詳細資訊。
                    </li>
                </ul>

             </div>
        </section>
        <!-- 開發過程---------------------------------------------------------------------------- -->
        <section id="GS_process">
            <h1>開發過程</h1>
            <!-- 初步概念--------------------------------------- -->
            <div class="GS_stage" id="GS_stage_initial">
                <div class="timeline">
                    <div class="timeMark">
                        <div class="dot"></div>
                        <h2>初步概念</h2>
                    </div>
                </div>
                <div class="GS_stage_illustrate">
                    <img src="../assets/GrooveShare/01.png" alt="">
                    <div class="text">
                        <p>突破常見的網站題材，以對爵士鼓的興趣為起點，並根據自己學習過程中遇到的困擾進行發想，決定打造一個專為爵士鼓學習者設計的網站。</p>
                        <div>
                            <h3>學習爵士鼓遇到的困擾</h3>
                            <ul>
                                <li>學打鼓通常會需要自己抓歌寫譜，但鼓譜手寫很麻煩。</li>
                                <li>網路上很少見到鼓譜分享的平台，很難直接找到特定曲風、歌手或樂團的鼓譜，導致學習上較不易。</li>
                                <li>大部分練鼓室租借費用無明確標示，需至打電話詢問，較麻煩。</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
            <!-- 功能構思與效益分析--------------------------------------- -->
            <div class="GS_stage" id="GS_stage_function">
                <div class="timeline">
                    <div class="timeMark">
                        <div class="dot"></div>
                        <h2>功能構思與效益分析</h2>
                    </div>
                </div>
                <div class="GS_stage_illustrate">
                    <!-- <h3>期望帶來的效益</h3>
                    <ul>
                        <li>建立一個寫譜的網站，使鼓譜的編輯更加便利</li>
                        <li>於網站上搜尋特定曲風、歌手或樂團，快速找到需要的鼓譜</li>
                        <li>各地區鼓手可上傳附近練鼓室價格及預約方式等資訊，方便查詢</li>
                    </ul> -->

                    <!-- <h3>期望功能</h3> -->
                    <ul>
                        <li><b>鼓譜編輯功能：</b><br>建立一個寫譜的網站，使鼓譜的編輯更加便利。</li>
                        <li><b>鼓譜搜尋功能：</b><br>於網站上搜尋特定曲風、歌手或樂團，快速找到需要的鼓譜</li>
                        <li><b>練鼓室資訊上傳及查詢功能：</b><br>各地區鼓手可上傳附近練鼓室價格及預約方式等資訊，方便查詢</li>
                    </ul>
                </div>
            </div>
            <!-- 網站架構規劃--------------------------------------- -->
            <div class="GS_stage" id="GS_stage_planning">
                <div class="timeline">
                    <div class="timeMark">
                        <div class="dot"></div>
                        <h2>網站架構規劃</h2>
                    </div>
                </div>
                <div class="GS_stage_illustrate">
                    <ul>
                        <li>繪製網站架構圖，確立前後端功能配置。</li>
                        <!-- *****圖待重新製作***** -->
                        <img src="../assets/GrooveShare/Architecture.png" alt="網站架構">
                        <li>使用 Figma 製作介面草圖，方便後續開發階段。</li>
                        <!-- 手機版figma介面待編輯**** -->
                        <!-- 部分未完成的功能待編輯**** -->
                        <!-- iframe大小待編輯**** -->
                        <div style="overflow: hidden; width: 80%; height: 100vh;">
                            <iframe src="https://embed.figma.com/proto/lvxbUfRJcc7AGehnhCUcrs/%E5%B0%88%E9%A1%8C?node-id=1-12&scaling=min-zoom&content-scaling=fixed&page-id=1%3A11&starting-point-node-id=1%3A12&embed-host=share"
                                    style="border: none; width: 200%; height: 200%; transform: scale(0.5); transform-origin: 0 0;">
                            </iframe>
                        </div>
                        <li>透過實體關係圖(ERD)規劃資料庫結構，清楚定義資料間的邏輯與關聯性。</li>
                        <img src="../assets/GrooveShare/database.png" alt="資料庫結構">
                    </ul>
                </div>
            </div>
            <!-- 開發階段--------------------------------------- -->
            <div class="GS_stage"  id="GS_stage_Development">
                <div class="timeline">
                    <div class="timeMark">
                        <div class="dot"></div>
                        <h2>開發階段</h2>
                    </div>
                </div>

                <div class="GS_stage_illustrate">
                    <ul>
                        <li>使用技術</li>
                        <v-row>
                            <v-col cols="12" md="4">
                                <v-card
                                    class="mx-auto"
                                    title="前端">
                                        <v-card-text>
                                            <img src="../assets/skills/html.png" alt="html">
                                            <img src="../assets/skills/js.png" alt="js">
                                            <img src="../assets/skills/scss.png" alt="scss">
                                            <img src="../assets/skills/vueJS.png" alt="vueJS">
                                            <img src="../assets/skills/vuetify.png" alt="vuetify">
                                        </v-card-text>
                                </v-card>
                            </v-col>
                            <v-col cols="12" md="4">
                                <v-card
                                    class="mx-auto"
                                    title="後端">
                                        <v-card-text>
                                            <img src="../assets/skills/nodeJS.png" alt="nodeJS">
                                            <img src="../assets/skills/mongoDB.png" alt="mongoDB">
                                        </v-card-text>
                                </v-card>
                            </v-col>
                            <v-col cols="12" md="4">
                                <v-card
                                    class="mx-auto"
                                    title="視覺">
                                        <v-card-text>
                                            <img src="../assets/skills/figma.png" alt="figma">
                                            <img src="../assets/skills/ai.png" alt="ai">
                                        </v-card-text>
                                </v-card>
                            </v-col>
                        </v-row>
                        <li>程式撰寫</li>
                        <li>功能測試</li>
                    </ul>
                </div>
            </div>
        </section>
        <section id="GS_keyPoint">
            <h1>重點介紹</h1>
        </section>
    </v-container>
</template>

<style lang="scss">
.v-container{
    // background: cadetblue;
    padding: 0;
}

section{
    padding: 15px;
    font-size: 20px;
    h1{
        font-size: 30px;
    }
    h2{
        font-size: 24px;
    }
}

/* 網站介紹---------------------------------------------------------------------------- */
#GS_introduction{
    // background: blue;
    #GS_logo{
        width: 70%;
        display: block;
        margin: auto;
    }
    div{
        p{
            // background: rebeccapurple;
            padding-bottom: 3%;
        }
        ul{
            padding-left: 50px;
        }
    }
}


/* 開發過程---------------------------------------------------------------------------- */
#GS_process{
    .GS_stage{
        display: flex;
        // background: chartreuse;
        justify-content: space-around;
        .timeline{
            color: black;
            width: 10px;
            // margin-top: 20px;
            background: white;

            .timeMark{
                position: relative;
                width: 300px;
                background: white;
                display: flex;
                align-items: center;
                .dot{
                    display: inline-block;
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    // background: rebeccapurple;
                }
            }
        }
        .GS_stage_illustrate{
            // background: chocolate;
            padding-top: 50px;
            padding-bottom: 50px;
            width: 80%;


        }
    }
}
// 初步概念-----------------------
#GS_stage_initial{
    img{
        width: 300px;
    }
    ul{
        padding-left: 30px;
    }
    .GS_stage_illustrate{
        display: flex;

        .text{
            // background: chartreuse;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
        }
    }
}

// 功能構思與效益分析-------------
#GS_stage_function{
    ul{
        // background: cadetblue;
        height: 220px;
        padding-left: 30px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
}

// 網站架構規劃-------------------
#GS_stage_planning{
    img{
        width: 300px;
    }
}

// 開發階段-----------------------
#GS_stage_Development{
    .v-card{
        color: black;
        background: white;

        img{
            height: 50px;
            margin-left: 10px;
        }
    }
}
</style>