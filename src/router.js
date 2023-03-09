//외부 파일 연동
import Vue from "vue"
import Router from "vue-router"

//각 구성 페이지 연동
import main from "@/components/main"
import about from "@/components/about"
import portfolio from "@/components/portfolio"
import contact from "@/components/contact"

Vue.use(Router);

export default new Router({
    mode : "history",  //모드에서 history 작성시 브라우저 주소줄에 "#" 이라는 표기제거됨
    base : process.env.BASE_URL,
    routes : [
        //첫 화면은 main.vue를 가져와서 보여준다.
        {path : "/", name : "main", component : main},
        {path : "/about", name : "about", component : about},
        {path : "/portfolio", name : "portfolio", component : portfolio},
        {path : "/contact", name : "contact", component : contact},
    ]
});