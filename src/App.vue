<template>
  <v-app>
    <v-app-bar app color="white" light>
      <!-- 메뉴 아이콘을 클릭하면클릭 기능을 비활성화 시킨다. -->
      <v-app-bar-nav-icon @click.stop="bDrawer = !bDrawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="d-flex align-center">
        <v-img src="img/logo_full.png" width="140"></v-img>
      </v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer fixed temporary dark v-model="bDrawer" :src="require('@/assets/img/menu_bg.jpg')">
      <v-toolbar flat height="100px">
        <v-list>
          <v-list-item class="ma-2">
            <v-list-item-avatar  width="80px" height="80px">
              <img src="https://randomuser.me/api/portraits/lego/0.jpg" width="80px" height="80px"/>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>USER1</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

        </v-list>
      </v-toolbar>
      <v-divider></v-divider>
      <v-list class="pt-3">

        <v-list-item v-for="item of menu_items" :key="item.title" :href="item.link">
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-slide-x-transition mode="out-in">
        <router-view></router-view>
      </v-slide-x-transition>
    </v-main>

    <v-footer color="secondary" fixed dark>
      <div class="mx-auto">Copyrights &copy; Aurelie</div>
    </v-footer>

  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    bDrawer : false, //버튼을 클릭하면 true -> false / false -> true
    //배열로 메뉴의 제목, 아이콘, 링크
    menu_items : [
      {title:"Home", icon:"mdi-home", link:"/"},
      {title:"About", icon:"mdi-account", link:"/about"},
      {title:"Portfolio", icon:"mdi-content-copy", link:"/portfolio"},
      {title:"Contact", icon:"mdi-contacts", link:"/contact"},
    ]
  }),
};
</script>
