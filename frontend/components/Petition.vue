<!-- Please remove this file from your project -->
<template>
<div class="border border-brown shadow-2xl rounded-lg
 p-5 w-full max-w-lg">
  <div class="flex flex-wrap -mx-3 mb-1">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label
      class="block uppercase tracking-wide text-brown text-xs font-bold mb-2" for="grid-first-name">
        Jméno*
      </label>
      <input
      :disabled="sended"
      v-model="signatory.firstName"
      class="appearance-none block w-full bg-gray-100 text-brown border border-brown rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane">
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-brown text-xs font-bold mb-2" for="grid-last-name">
        Příjmení*
      </label>
      <input
      :disabled="sended"
      v-model="signatory.lastName"
      class="appearance-none block w-full bg-gray-100 text-brown border border-brown rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe">
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-1">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-brown text-xs font-bold mb-2" for="grid-password">
        Email*
      </label>
      <input
      :disabled="sended"
      v-model="signatory.email"
      class="appearance-none block w-full bg-gray-100 text-brown border border-brown rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" placeholder="jane.doe@seznam.cz">
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-1">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-brown text-xs font-bold mb-2" for="grid-password">
        Zaměstnání
      </label>
      <input
      :disabled="sended"
      v-model="signatory.job"
      class="appearance-none block w-full bg-gray-100 text-brown border border-brown rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-job" type="text" placeholder="Student">
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-2">
    <div class="w-full md:w-1/3 px-3 mb-1 md:mb-0">
      <label class="block uppercase tracking-wide text-brown text-xs font-bold mb-2" for="grid-city">
        Adresa
      </label>
      <input
      :disabled="sended"
      v-model="signatory.adress"
      class="appearance-none block w-full bg-gray-100 text-brown border border-brown rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-adress" type="text" placeholder="Ukrajinských hrdinů 36">
    </div>
    <div class="w-full md:w-1/3 px-3 mb-1 md:mb-0">
      <label class="block uppercase tracking-wide text-brown text-xs font-bold mb-2" for="grid-state">
        Město
      </label>
      <div class="relative">
      <input
      :disabled="sended"
      v-model="signatory.city"
      class="appearance-none block w-full bg-gray-100 text-brown border border-brown rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Praha">
      </div>
    </div>
    <div class="w-full md:w-1/3 px-3 mb-1 md:mb-0">
      <label class="block uppercase tracking-wide text-brown text-xs font-bold mb-2" for="grid-zip">
        PSČ
      </label>
        <input
      :disabled="sended"
        v-model="signatory.zip"
        class="appearance-none block w-full bg-gray-100 text-brown border border-brown rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" pattern="[0-9]{5}"  placeholder="60200">
    </div>
  </div>
  <div class="flex form-check mt-5">
      <input
      :disabled="sended"
      v-model="accepted"
      type="checkbox"
      class="bg-red-100 border-red-300 text-red-500 focus:ring-red-200 checked:bg-cyan checked:border-cyan"
      />
        <label v-on:click="accepted = !accepted" class="mx-3 form-check-label inline-block text-gray-800" for="flexCheckDefault">
      Souhlasím se zpracováním osobních údajů za účelem informování o aktivitách v rámci výzvy Friday For Future a o jeho dalších aktivitách k ochraně klimatu a životního prostředí.
      </label>
  </div>
  <div class="flex form-check mt-3">
      <input
      :disabled="sended"
      v-model="signatory.hide"
      type="checkbox"
      class="bg-red-100 border-red-300 text-red-500 focus:ring-red-200 checked:bg-cyan checked:border-cyan"
      />
      <label v-on:click="signatory.hide = !signatory.hide" class="mx-3 form-check-label inline-block text-gray-800" for="flexCheckDefault">
      Skrýt můj podpis v seznamu petentů a petentek
      </label>
  </div>
  <div class="flex justify-center mt-3">
    <div v-if="!sended">
      <button v-if="!sending && signatory.firstName.length && signatory.lastName.length
        && signatory.email.length && accepted"
        v-on:click="send"
        class="bg-transparent hover:bg-cyan text-brown font-serif hover:text-white py-2 px-4 border border-brown hover:border-transparent rounded transition duration-300 my-3">
            Odeslat
      </button>
      <button v-else
        disabled
        class="cursor-not-allowed bg-transparent text-brown font-serif py-2 px-4 border border-brown  rounded  my-3">
          <div class="flex">
            <div>Odeslat</div>
            <div class="ml-2" v-if="sending">
              <div style="border-top-color:transparent"
              class="w-5 h-5 border-4 border-blue-400 border-solid rounded-full animate-spin"></div>
            </div>
          </div>
      </button>
    </div>
    <div class="font-bold" v-else>
      Děkujeme za vyplnění petice.
    </div>

  </div>
  <div class="flex justify-center text-brown" v-show="errorMsg">
  {{ errorMsg }}
  </div>
</div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { Signatory, RestResponse, Status } from '../types/types'

  export default Vue.extend({
    data() {
      return {
        signatory: {
        firstName: '',
        lastName: '',
        email: '',
        job: '',
        adress: '',
        city: '',
        zip: '',
        hide: false
      } as Signatory,
        sending: false,
        sended: false,
        errorMsg: "",
        accepted: false
      }
    },
    mounted() : void {
    },
    methods: {
      send(): void {
        this.sending = true;
        const url: string = process.env.apiEndpoint || "";
        fetch(url+'/sign', {
          method: 'POST',
          body: JSON.stringify(this.$data.signatory),
        }).then(response => {

          if (!response.ok)
          {
              this.sending = false;
              this.errorMsg = "HTTP Chyba :("
          }
          else{
            this.sending = false;

            response.json().then(data => {
              const restResponse = data as RestResponse

              this.errorMsg = restResponse.error

              if (!restResponse.error) {
                this.sended = true;
              }
            })

          }
        }).catch(err => {
          console.error(err)
          this.errorMsg = "Neznámá chyba"
          this.sending = false;

        })


      }
    }

})
</script>
