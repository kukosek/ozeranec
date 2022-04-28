<template>
<div>
  <div v-if="errorMsg" class="text-red-500 font-bold m-5">
    {{errorMsg}}.
    <button
      v-on:click="reload()"
      class="bg-transparent hover:bg-red-400
      text-red-500  hover:text-white mx-2 py-1 px-2 border border-red-500
      hover:border-transparent rounded transition duration-300 ">
      Zkusit znovu
    </button>
  </div>
   <div v-on:scroll="onScroll" class="relative h-64 overflow-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                  <th scope="col" class="px-6 py-3">
                    ID
                  </th>
                  <th scope="col" class="px-3 py-3">
                    Jméno
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Příjmení
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Zaměstnání
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Obec
                  </th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="(item, key) in signatories" :key="item.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    {{item.id}}
                  </th>
                  <td class="px-3 py-4">
                    {{item.firstName}}
                  </td>
                  <td class="px-6 py-4">
                    {{item.lastName}}
                  </td>
                  <td class="px-6 py-4">
                    {{item.job}}
                  </td>
                  <td class="px-6 py-4">
                    {{item.city}}
                  </td>
              </tr>
          </tbody>
      </table>
  </div>
</div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { Signatory, RestResponse, Status } from '../types/types'

  var skip = 0;
  var more = false;
  export default Vue.extend({
    data() {
      return {
        errorMsg: "",
        signatories: [] as Signatory[],
        accepted: false

      }
    },
    mounted() : void {
      this.reload()
    },
    methods: {
      onScroll (e: Event) {
        const target = e.target as HTMLDivElement
        if (more && target.scrollTop + target.clientHeight >= target.scrollHeight) {
          this.reload()
        }
      },
      reload(): void {
        const url: string = process.env.apiEndpoint || "";
        console.log(url)
        fetch(url+'/signatories?' +
          new URLSearchParams({
            skip: String(skip),
          }), {
        }).then(response => {

          if (!response.ok)
          {
              this.errorMsg = "HTTP Chyba :("
          }
          else{

            response.json().then(data => {
              const restResponse = data as RestResponse

              this.errorMsg = restResponse.error

              if (!restResponse.error) {
                this.signatories = [...this.signatories, ...restResponse.data]
                skip += restResponse.data.length
                more = restResponse.more

                if(this.signatories.length < 20 && more) this.reload()
              }
            })

          }
        }).catch(err => {
          console.error(err)
          this.errorMsg = "Neznámá chyba"

        })
      }
    }

})
</script>
