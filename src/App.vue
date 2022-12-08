<script >
import { RouterView } from "vue-router";

import { ref, } from 'vue'
import LayoutUser from "./layouts/LayoutUser.vue";
import LayoutBlank from "./layouts/LayoutBlank.vue";
const default_layout = 'User';
export default {
    computed: {
        layout() {
            return "Layout" + (this.$route.meta.layout || default_layout);
        }
    },
    components: { LayoutUser, LayoutBlank }
}

</script>

<template>
  <component :is="layout">
    <main>
      <RouterView />
    </main>
  </component>
</template>


<style scoped>

main{
  margin: 40px auto;
}

</style>
