<template>
<div>

  <section class="w-full h-screen">
    <client-only>
      <nuxt-img
        src="/sander-weeteling-iGDg_f_mlWo-unsplash.jpg"
        class="object-cover object-left w-full h-full"
        />
    </client-only>
    <div class="text-brown sm:w-full md:w-1/2 lg:w-1/2 h-1/2 absolute sm:mx-5 lg:mx-20 top-1/2 left-3">
      <p class="font-bold font-serif lg:text-7xl md:text-5xl text-5xl">
      <i>
      Ranec OZE, <br>
      ne uhlí na voze.
      </i>
      </p>
      <p class="font-normal font-serif lg:text-3xl md:text-2xl sm:text-1xl">
        Žádáme od vlády detailní plán výstavby OZE.
      </p>
      <button v-scroll-to="'#petition'" class="bg-transparent hover:bg-cyan text-brown font-serif hover:text-white py-2 px-4 border border-brown hover:border-transparent rounded transition duration-300 my-3">
        Podepište petici
      </button>
    </div>
  </section>

  <section class="md:flex mx-3 justify-between  py-20 sm:px-5 md:px-7 lg:px-20">
    <div class="text-brown mr-5 mb-5">
      <p class="font-bold font-serif lg:text-5xl md:text-5xl text-5xl">
      <i>My, níže podepsaní...</i>
      </p>
    </div>
    <Petition id="petition"/>
  </section>

  <section class="flex  items-center w-full pt-20 pb-10" :style="{'background-image': `url(${require('@/static/spacex--p-KCm6xB9I-unsplash.jpg')})`}">

    <div class="text-white mx-5 md:mx-15 lg:mx-20  left-3">
      <p class="font-normal font-serif lg:text-3xl md:text-2xl sm:text-1xl">
        Když John Kennedy v roce 1960 prohlásil, že do 10 let přistane USA na měsíci, bylo to totální scifi.
      </p>
      <p class="font-bold font-serif lg:text-7xl md:text-5xl text-5xl my-2">
        <i>
        Američani na měsíci byli,
        </i>
      </p>
      <p class="font-normal font-serif lg:text-xl md:text-2xl sm:text-1xl">
        máme za sebou dalších 62 let vývoje a nyní je hlavní problém v podobě energetické náročnosti systému. <br>
        Kde není vnější tlak, není ani ochota systému měnit svůj status quo.
      </p>
      <p class="font-normal font-serif lg:text-xl md:text-2xl sm:text-lg mt-6">
        <i>
          Vyzýváme vládu, aby začla řešit vážnější výzvy v podobě transformace české energetiky. <br>
          Za 10 let lze stihnout mnohé, stačí jen vůle a odhodlání.
        </i>
      </p>
    </div>
  </section>

</div>
</template>

<script lang="ts">
import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'
Vue.use(VueScrollTo)

export default Vue.extend({
  head() {
    return {
      title: "RANEC OZE, ne uhlí na voze! Petice a výzva pro českou vládu"    };
  },
})

</script>
