<template>
    <v-container>
        <!-- 網站介紹---------------------------------------------------------------------------- -->
        <section id="GS_introduction">
            <div id="indexImgs">
                <img src="../assets/GrooveShare/index_computer.png" alt="電腦版GrooveShare介面">
                <img src="../assets/GrooveShare/index_mobile.png" alt="手機版GrooveShare介面">
            </div>
            <div>
                <p>
                    爵士鼓展現律動與節奏的魅力，取其精髓以「Groove」作為名稱的一部份，再融合象徵分享與交流精神的「Share」，最終將網站命名為「GrooveShare」，以傳達網站的核心精神，致力於音樂與資源的共享與互動。
                </p>
                <h1>網站功能</h1>
                <v-row>
                    <v-col cols="6" md="3">
                        <v-card variant="outlined">
                            <v-card-title>
                                <v-icon> mdi-pencil-outline</v-icon>
                                寫譜
                            </v-card-title>
                        </v-card>
                    </v-col>
                    <v-col cols="6" md="3">
                        <v-card variant="outlined">
                            <v-card-title>
                                <v-icon> mdi-bullhorn-outline</v-icon>
                                鼓譜音效播放
                            </v-card-title>
                        </v-card>
                    </v-col>
                    <v-col cols="6" md="3">
                        <v-card variant="outlined">
                            <v-card-title>
                                <v-icon> mdi-folder-search-outline</v-icon>
                                搜尋與收藏鼓譜
                            </v-card-title>
                        </v-card>
                    </v-col>
                    <v-col cols="6" md="3">
                        <v-card variant="outlined">
                            <v-card-title>
                                <v-icon> mdi-home-search-outline</v-icon>
                                上傳與尋找練鼓室
                            </v-card-title>
                        </v-card>
                    </v-col>
                </v-row>
                <!-- 感覺可以以v-card呈現**待編輯** -->
                <!-- <ul>
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
                </ul> -->

             </div>
        </section>
        <!-- 開發過程---------------------------------------------------------------------------- -->
        <section id="GS_process">
            <h1>開發過程</h1>
            <!-- 初步概念--------------------------------------- -->
            <div class="GS_stage" id="GS_stage_initial">
                <div class="timeline">
                    <div class="timeMark">
                        <h2>初步概念</h2>
                    </div>
                </div>
                <div class="GS_stage_illustrate">
                    <v-row>
                        <v-col cols="12" md="4">
                            <img src="../assets/GrooveShare/01.png" alt="">
                        </v-col>
                        <v-col cols="12" md="8" class="text">
                            <p>突破常見的網站題材，以對爵士鼓的興趣為起點，並根據自己學習過程中遇到的困擾進行發想，決定打造一個專為爵士鼓學習者設計的網站。</p>
                            <div>
                                <h3>學習爵士鼓遇到的困擾</h3>
                                <ul>
                                    <li>學打鼓通常會需要自己抓歌寫譜，但手寫鼓譜的效率差且不便。</li>
                                    <li>網路上很少見到鼓譜分享的平台，很難直接找到特定曲風、歌手或樂團的鼓譜，導致學習上較不易。</li>
                                    <li>大部分練鼓室租借費用無明確標示，需自行打電話詢問，較麻煩。</li>
                                </ul>
                            </div>
                        </v-col>
                    </v-row>
                </div>

            </div>
            <!-- 功能構思--------------------------------------- -->
            <div class="GS_stage" id="GS_stage_function">
                <div class="timeline">
                    <div class="timeMark">
                        <h2>功能構思</h2>
                    </div>
                </div>
                <div class="GS_stage_illustrate">
                    <v-row>
                        <v-col cols="12">
                            <v-card variant="outlined">
                                <v-card-title>編輯鼓譜功能</v-card-title>
                                <v-card-text>建立一個寫譜的網站，使鼓譜的編輯更加便利。</v-card-text>
                            </v-card>
                        </v-col>
                        <v-col cols="12">
                            <v-card variant="outlined">
                                <v-card-title>搜尋鼓譜功能</v-card-title>
                                <v-card-text>於網站上搜尋特定曲風、歌手或樂團，快速找到需要的鼓譜。</v-card-text>
                            </v-card>
                        </v-col>
                        <v-col cols="12">
                            <v-card variant="outlined">
                                <v-card-title>練鼓室資訊上傳及查詢功能</v-card-title>
                                <v-card-text>各地區鼓手可上傳附近練鼓室價格及預約方式等資訊，方便查詢。</v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
                </div>
            </div>
            <!-- 網站架構規劃--------------------------------------- -->
            <div class="GS_stage" id="GS_stage_planning">
                <div class="timeline">
                    <div class="timeMark">
                        <h2>網站架構規劃</h2>
                    </div>
                </div>
                <div class="GS_stage_illustrate">
                    <ul>
                        <li>繪製網站架構圖，確立前後端功能配置。</li>
                        <v-row>
                            <v-col cols="6">
                                <img src="../assets/GrooveShare/Architecture_front.png" alt="前端架構" class="architectureImg">
                            </v-col>
                            <v-col cols="6">
                                <img src="../assets/GrooveShare/Architecture_back.png" alt="後端架構" class="architectureImg">
                            </v-col>
                        </v-row>
                        <br>
                        <li>透過實體關係圖(ERD)規劃資料庫結構，清楚定義資料間的邏輯與關聯性。</li>
                        <img src="../assets/GrooveShare/database.png" alt="資料庫結構" id="databaseImg">
                        <br>
                        <br>
                        <li>使用 Figma 製作介面草圖，方便後續開發階段。</li>
                        <!-- 手機版figma介面待編輯**** -->
                        <!-- 部分未完成的功能待編輯**** -->
                        <div style="overflow: hidden; width: 80%; height: 60vh;">
                            <iframe src="https://embed.figma.com/proto/lvxbUfRJcc7AGehnhCUcrs/%E5%B0%88%E9%A1%8C?node-id=1-12&scaling=min-zoom&content-scaling=fixed&page-id=1%3A11&starting-point-node-id=1%3A12&embed-host=share"
                                    style="border: none; width: 200%; height: 200%; transform: scale(0.5); transform-origin: 0 0;">
                            </iframe>
                        </div>

                    </ul>
                </div>
            </div>
            <!-- 開發階段--------------------------------------- -->
            <div class="GS_stage"  id="GS_stage_Development">
                <div class="timeline">
                    <div class="timeMark">
                        <h2>開發階段</h2>
                    </div>
                </div>

                <div class="GS_stage_illustrate">
                    <ul>
                        <li>使用技術</li>
                        <v-row id="developmentSkill">
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
                        <br>
                        <li>程式撰寫</li>
                        <v-card variant="outlined">
                            <v-card-title>前端</v-card-title>
                            <v-card-text>
                                <ul>
                                    <li>根據先前製作的介面草圖進行切版，完成導覽列與首頁、尋找練鼓室、尋找鼓譜與會員專區等頁面的版面設計。</li>
                                    <li>為提升使用者體驗，實現響應式網頁設計(RWD)，使網站能在不同裝置上保持良好視覺效果與流暢性。</li>
                                </ul>
                            </v-card-text>
                        </v-card>
                        <v-card variant="outlined">
                            <v-card-title>後端</v-card-title>
                            <v-card-text>
                                <ul>
                                    <li>建立資料庫模型</li>
                                    <li>撰寫 API 功能</li>
                                </ul>
                            </v-card-text>
                        </v-card>
                        <v-card variant="outlined">
                            <v-card-title>整合</v-card-title>
                            <v-card-text>
                                <ul>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </v-card-text>
                        </v-card>
                        <br>
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

    #indexImgs{
        width: 100%;
        // background: cadetblue;
        display: flex;
        justify-content: space-around;
        margin-bottom: 10px;
        img{
            height: 55vh;
        }
    }


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
    margin-top: 50px;
    .GS_stage{
        display: flex;
        // background: chartreuse;
        justify-content: space-around;
        .timeline{
            color: black;
            width: 10px;
            background: white;

            .timeMark{
                position: relative;
                width: 300px;
                background: white;
                display: flex;
                align-items: center;
                clip-path: polygon(25% 0, 100% 0, 100% 100%, 25% 100%, 0 50%);
                padding-left: 75px;
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
    margin-top: 15px;
    img{
        width: 100%;
    }
    ul{
        padding-left: 30px;
    }
    .GS_stage_illustrate{
        .text{
            // background: chartreuse;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
        }
    }
}

// 功能構思-------------
#GS_stage_function{
}

// 網站架構規劃-------------------
#GS_stage_planning{
    .architectureImg{
        width: 100%;
    }
    #databaseImg{
        width: 80%;
    }
}

// 開發階段-----------------------
#GS_stage_Development{
    #developmentSkill{
        .v-card{
            color: black;
            background: white;
            height: 100%;
            text-align: center;

            .v-card-text{
                display: flex;
                flex-wrap: wrap; // 自動換行
                justify-content: space-evenly;
                align-items: center;
                img{
                    height: 52px;
                    margin-left: 10px;
                }
            }
        }

    }
}
</style>