<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Vuetify 3 Beta {{ user }}
        </h1>


        <p class="subheading font-weight-regular">
          For help and collaboration with other Vuetify developers,
          <br>please join our online
          <a
            href="https://community.vuetifyjs.com"
            target="_blank"
          >Discord Community</a>
        </p>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-5">
          What's next?
        </h2>

        <v-row justify="center">
          <a
            v-for="(next, i) in whatsNext"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ next.text }}
          </a>
        </v-row>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-5">
          Important Links
        </h2>

        <v-row justify="center">
          <a
            v-for="(link, i) in importantLinks"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ link.text }}
          </a>
        </v-row>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-5">
          Ecosystem
        </h2>

        <v-row justify="center">
          <a
            v-for="(eco, i) in ecosystem"
            :key="i"
            :href="eco.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ eco.text }}
          </a>
        </v-row>
      </v-col>
      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-5">
          Add link
        </h2>

        <v-row justify="center">
          <router-link
            to="about"
            class="mx-3">
            About
          </router-link>
          <router-link
            to="contact"
            class="mx-3">
            Contact
          </router-link>
        </v-row>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-5">
          Users
        </h2>

        <v-row justify="center">
          <ul v-for="(user, index) in userList" :key="index">
            <li>
              <p>{{ user.id }}</p>
              <p>{{ user.name }}</p>
              <p>{{ user.email }}</p>
              <p>{{ user.created_at }}</p>
              <p>{{ user.updated_at }}</p>
            </li>
          </ul>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang='ts'>
import { defineComponent, PropType } from 'vue';
import UserApiService from '../services/UserApiService';

interface User {
  id: number;
  name: string;
  age: number;
}

export default defineComponent({
  name: 'HelloWorld',
  props: {
    user: {
      type: Object as PropType<User>,
      required: true,
    }
  },
  data(): {
    ecosystem: string | any[],
    importantLinks: string | any[],
    whatsNext: string | any[],
    userList: string | any[],
  } {
    return {
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader/tree/next',
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify/tree/next',
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify',
        },
      ],
      importantLinks: [
        {
          text: 'Chat',
          href: 'https://community.vuetifyjs.com',
        },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuejs.com/vuetify',
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/vuetifyjs',
        },
        {
          text: 'Articles',
          href: 'https://medium.com/vuetify',
        },
      ],
      whatsNext: [
        {
          text: 'Explore components',
          href: 'https://vuetifyjs.com',
        },
        {
          text: 'Roadmap',
          href: 'https://vuetifyjs.com/en/introduction/roadmap/',
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
        },
      ],
      userList: [],
    }
  },
  created() {
    UserApiService.getAll()
      .then(response => (this.userList = response.data));
    // console.log(UserApiService.get(0));
    // console.log(UserApiService.deleteAll());
  }
})
</script>
