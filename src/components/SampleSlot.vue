<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>
        <slot name="pageTitle">Application</slot>
      </v-toolbar-title>
    </v-app-bar>

    <v-main>
      <p>name:<slot :userNm="userNm">{{ userNm.enName }}</slot></p>
    </v-main>
  </v-app>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SampleSlot',
  data(): {
    drawer: boolean | null,
    userNm: {
      enName: string,
      jpName: string
    }
  } {
    return {
      drawer: null,
      userNm: {
        enName: 'Mirai Taro',
        jpName: '未来太郎'
      }
    }
  }
})
</script>
