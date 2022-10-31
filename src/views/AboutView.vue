<template>
  <SampleSlot>
    <template #pageTitle>About Application</template>
    <template v-slot:default="slotProps">
      {{ slotProps.userNm.jpName }}
    </template>
  </SampleSlot>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// Components
import SampleSlot from '../components/SampleSlot.vue';

export default defineComponent({
  name: 'AboutView',
  data () {
    return {
    }
  },
  components: {
    SampleSlot,
  },
});
</script>
