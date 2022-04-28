<template>
<div class="h-64 mx-5 md:mx-15 lg:mx-20 my-20">
  <Signatories class="max-w-5xl mx-auto"/>
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'
Vue.use(VueScrollTo)

export default Vue.extend({
  head() {
    return {
      title: "Signatáři petice RANEC OZE, ne uhlí na voze."    };
  },
})

</script>
