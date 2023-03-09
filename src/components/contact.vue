<template>
    <div class="container pt-10">
        <form class="gform form-elements" name="contactUs" action="https://script.google.com/macros/s/AKfycbzQQ4-EvV4HWQcphMpTSkoouCj0VUb2lwXsRO53/exec" method="post">
            <fieldset class="pa-4">
                <legend>구글 메일 발송</legend>
                <v-row>
                    <v-col class="col-12">
                        <v-row class="align-sm-center">
                            <v-col class="col-sm-4">
                                <label for="name">이름 또는 회사명 <v-icon>mdi-star</v-icon></label>
                            </v-col>
                            <v-col class="col-sm-8">
                                <input class="col-12 yellow lighten-3" type="text" id="name" name="name" placeholder="이름을 입력해 주세요." required>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col class="col-12">
                        <v-row class="align-sm-center">
                            <v-col class="col-sm-4">
                                <label for="email">답변받을 이메일 <v-icon>mdi-star</v-icon></label>
                            </v-col>
                            <v-col class="col-sm-8">
                                <input class="col-12 yellow lighten-3" type="email" id="email" name="email" placeholder="이메일을 입력해 주세요." required>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col class="col-12">
                        <v-row class="align-sm-start">
                            <v-col class="col-sm-4 mt-2">
                                <label class="" for="message">문의내용 <v-icon>mdi-star</v-icon></label>
                            </v-col>
                            <v-col class="col-sm-8">
                                <textarea class="col-12 yellow lighten-3" name="message" id="message" placeholder="문의사항을 입력해 주세요."></textarea>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>

                <v-row class="">
                    <v-col class="col-12 d-flex justify-end">
                        <v-btn type="submit" class="btn primary pa-3 dark " rounded-lg>문의하기</v-btn>
                    </v-col>
                </v-row>
                <div class="thankyou_message">
                    <article>
                        <h1>작성한 내용이 모두 전송되었습니다.</h1>
                        <p>메일 확인 후 연락드리겠습니다.</p>
                        <!-- <v-btn class="close red">닫기</v-btn> -->
                    </article>
                </div>
            </fieldset>
        </form>
    </div>
</template>
<!--
<style>
    .thankyou_message{position: absolute; max-width:500px; min-width:300px;background-color: #fff; border-radius:4px; padding: 20px; top:50%; left:50%; transform: translate(-50%, -50%); border:1px solid #ccc; display: none;}
</style>
-->
<style>
    @import url(../assets/css/contact.css);
</style>


<!--<script src="../assets/js/contact.js"></script>-->
<!--
<script>
    const close1 = document.querySelector(".close");
    const thankyou_message1 = document.querySelector(".thankyou_message");
    console.log(close1);
    console.log(thankyou_message1);


    const closePop = function(){
        thankyou_message1.style.display="none";
    }
    close.onclick = closePop;

//    const time = setTimeout(() => {
//     thankyou_message1.style.display="none";
// },3000);

</script>
-->
<script src="../assets/js/form-submission-handler.js"></script>

