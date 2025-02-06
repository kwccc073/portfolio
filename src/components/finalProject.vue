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
                <br>
                <h1>使用技術</h1>
                <v-row id="developmentSkill">
                        <v-col cols="12" md="4">
                            <v-card class="mx-auto">
                                <v-card-title><b>前端</b></v-card-title>
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
                            <v-card class="mx-auto">
                                <v-card-title><b>後端</b></v-card-title>
                                    <v-card-text>
                                        <img src="../assets/skills/nodeJS.png" alt="nodeJS">
                                        <img src="../assets/skills/mongoDB.png" alt="mongoDB">
                                    </v-card-text>
                            </v-card>
                        </v-col>
                        <v-col cols="12" md="4">
                            <v-card class="mx-auto">
                                <v-card-title><b>視覺</b></v-card-title>
                                    <v-card-text>
                                        <img src="../assets/skills/figma.png" alt="figma">
                                        <img src="../assets/skills/ai.png" alt="ai">
                                    </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>

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
                            <div class="functionBox">
                                <h4>編輯鼓譜功能</h4>
                                <p>建立一個寫譜的網站，使鼓譜的編輯更加便利。</p>
                            </div>
                        </v-col>
                        <v-col cols="12">
                            <div class="functionBox">
                                <h4>搜尋鼓譜功能</h4>
                                <p>於網站上搜尋特定曲風、歌手或樂團，快速找到需要的鼓譜。</p>
                            </div>
                        </v-col>
                        <v-col cols="12">
                            <div class="functionBox">
                                <h4>練鼓室資訊上傳及查詢功能</h4>
                                <p>各地區鼓手可上傳附近練鼓室價格及預約方式等資訊，方便查詢。</p>
                            </div>
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
                        <li>透過實體關係圖(ERD)規劃資料庫結構，清晰定義資料間的邏輯與關聯性。其中，爵士鼓的主要音色包括 HiHat、小鼓與大鼓，因此分為三個項目（scoreHiHat、scoreSnare、scoreKick），並以三層陣列結構來儲存資料。這三層由外至內分別對應小節、拍數及拍內的細分節奏單位，確保鼓譜資料能夠精準呈現與利用。</li>
                        <img src="../assets/GrooveShare/database.png" alt="資料庫結構" id="databaseImg">
                        <img src="../assets/GrooveShare/three-layerArray.png" alt="三層陣列圖說" id="three-layerArray">
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
                    <h3>程式撰寫</h3>
                    <v-row>
                        <v-col cols="2">
                            <h4>前端</h4>
                        </v-col>
                        <v-col cols="10">
                            <ul>
                                <li>根據先前製作的介面草圖進行切版，完成導覽列與各頁面的版面設計。</li>
                                <li>為提升使用者體驗，實現響應式網頁設計(RWD)，使網站能在不同裝置上保持良好視覺效果與流暢性。</li>
                            </ul>
                        </v-col>
                        <v-col cols="12">
                            <hr>
                        </v-col>
                        <v-col cols="2">
                            <h4>後端</h4>
                        </v-col>
                        <v-col cols="10">
                            <h5>建立資料庫模型</h5>
                            <ul>
                                <li>使用 Mongoose 定義資料格式與限制條件，並對特定欄位進行驗證。若格式不符即拋出錯誤，回傳錯誤訊息給前端。</li>
                            </ul>
                            <h5><br>編寫API請求</h5>
                            <ul>
                                <li>根據前端需求，撰寫不同API請求要執行的程式碼，如新增、修改、刪除和查詢的操作，並支援排序條件、每頁顯示數量等參數的動態調整。</li>
                                <li>為了應對可能的錯誤情況，也撰寫了相應的錯誤處理機制。當錯誤發生時，根據錯誤類型返回適當的 HTTP 狀態碼與詳細錯誤訊息，幫助快速釐清問題並進行修正。</li>
                            </ul>
                        </v-col>
                        <v-col cols="12">
                            <hr>
                        </v-col>
                        <v-col cols="2">
                            <h4>整合</h4>
                        </v-col>
                        <v-col cols="10">
                            <ul>
                                <li>將前後端進行整合並測試，確保前端能正確傳送請求至後端，後端也能執行對應的程式碼並回傳所需的資料。</li>
                                <li>將網站佈署至雲端並上傳至GitHub，確保網站可被外界訪問與使用。</li>
                            </ul>
                        </v-col>
                    </v-row>
                    <br>
                </div>
            </div>
        </section>
    </v-container>
</template>

<style lang="scss" scoped>
.v-container{
    // background: cadetblue;
    padding: 0;
}

section{
    padding: 15px;
    font-size: 1.2rem;
    h1{
        font-size: 1.9rem;
    }
    h2{
        font-size: 1.7rem;
    }
    h3{
        font-size: 1.5rem;
    }
    h4{
        font-size: 1.4rem;
    }
    h5{
        font-size: 1.3rem;
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
        flex-wrap: wrap;
        margin-bottom: 10px;
        img{
            height: 55vh;
            width: auto;

            // 當螢幕小尺寸時
            @media (max-width: 1330px) {
                width: 100%;
                height: auto;
                &:nth-child(2){
                    display: none;
                }
            }
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

    #developmentSkill{
        .v-card{
            height: 100%;
            background: lightgray;
            color: black;

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
        padding-left: 1rem;
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
    .functionBox{
        width: 100%;
        border-radius: 2%;
        border: 1px solid white;
        padding: 0.5rem;
    }
}

// 網站架構規劃-------------------
#GS_stage_planning{
    .architectureImg{
        width: 100%;
    }
    #databaseImg{
        width: 80%;
    }
    #three-layerArray{
        width: 70%;
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
    .v-row{
        ul{
            padding-left: 1rem;
        }
        .v-col:nth-child(1),
        .v-col:nth-child(4),
        .v-col:nth-child(7){
            // background: yellow;
            display: flex;
            justify-content: center;
            align-items: center;

            h4{
                background: lightgray;
                color: black;
                width: 5rem;
                height: 5rem;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }
}
</style>