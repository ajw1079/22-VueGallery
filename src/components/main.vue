<template>
    <div>
        <v-carousel height="75vh" color="grey">
            <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" reverse-transition="fade-transition" transition="fade-transition"></v-carousel-item>
            <!-- v-for="(item, i) in items"  ==>  item : 배열 데이터의 value / i : 배열 데이터의 인덱스 번호 -->
            <!-- v-for 디렉토리는 반복하는 과정에서 에러 발생이 존재한다. 이를 해결하고자 v-bind:key="" 속성값 내부에는 고유값을 넣을 수 있는 데이터를 넣어준다. 인덱스번호, 동일하지 않은 타이틀도 대체 가능" -->

        </v-carousel>

        <v-container>
            <v-spacer></v-spacer>
            <v-content>
                <div class="text-center py-3 mt-3 mb-10">
                    <h3 class="title py-5 mb-4">Works...</h3>
                    <v-row class="justify-center">
                        <v-col v-for="item in workItems" :key="item.id" class="col-lg-3 col-md-4 col-6">
                            <img :src="'./img/'+item.img" alt="" width="100%">
                            <h4>{{item.title}}</h4>
                        </v-col>
                    </v-row>
                </div>
            </v-content>
        </v-container>
        <div class="mb-9 bottom_banner" style="background-image:url(./img/bottom_banner.jpg); height:300px; background-size:cover; background-position:50% 50%;"></div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            items : [
                {
                    src : "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2148769293/settings_images/mzS8Hd0XQrGu8k1k6jYR_AM_Banner_Chalk2000px.jpg", 
                },
                {
                    src : "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2148769293/settings_images/37hBYt1ZTIOhzeBrwoyM_AM_Banner_Textile2_2000px.jpg", 
                },
                {
                    src : "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2148769293/settings_images/6lp5VxLXQgucPrzdCJbg_AM_Banner_Retro_2000px.jpg", 
                },
                {
                    src : "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2148769293/settings_images/cv4l79HQRrSdYI0xW4GY_AM_Banner_3D_2000px.jpg", 
                },
            ],
            workItems : [
                {img:"cont1.jpg", title:"Retro Symbol"}, 
                {img:"cont2.jpg", title:"Retro Sign"}, 
                {img:"cont3.jpg", title:"Days of Type"}, 
                {img:"cont4.jpg", title:"Murals"}, 
                {img:"cont5.jpg", title:"Wedding Invitations"}, 
                {img:"cont6.jpg", title:"Watercolour Lettering"}, 
                {img:"cont7.jpg", title:"Days of Type"}, 
                {img:"cont8.jpg", title:"Chalk Typography"},
            ]
        }
    }
}
</script>