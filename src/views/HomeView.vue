<template>
  <hello-world :user="user" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// Components
import HelloWorld from '../components/HelloWorld.vue';

export default defineComponent({
  name: 'HomeView',
  data () {
    return {
      user: {
        id: 1,
        name: 'doe',
        age: 30,
      }
    }
  },
  computed: {
    person(): object {
      return this.user;
    }
  },
  components: {
    HelloWorld,
  },
});
</script>
