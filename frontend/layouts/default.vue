<template>
  <div class="bg-gray-50">
    <!-- Navbar goes here -->
    <nav class="bg-white shadow-lg">
      <div class=" mx-5 md:mx-20 lg:mx-20 ">
          <div class="flex my-auto space-x-4  justify-between">
            <!-- Website Logo -->
            <nuxt-link
              :to="{name: 'index'}"
              class="flex my-2"
              >
            <client-only>
              <nuxt-img src="logo.svg" alt="Logo" class="m-auto h-12 w-12 hover:text-cyan transition duration-300" />
            </client-only>
            </nuxt-link>
            <!-- Primary Navbar items -->
            <div class="hidden md:flex items-center space-x-1">
              <nuxt-link
                :to="{name: 'index'}"
                class="py-4 px-2 text-brown font-semibold hover:text-cyan transition duration-300"
                >PETICE
                </nuxt-link>
              <nuxt-link
                :to="{name: 'call'}"
                class="py-4 px-2 text-brown font-semibold hover:text-cyan transition duration-300"
                >CELÉ ZNĚNÍ VÝZVY
              </nuxt-link>
              <nuxt-link
                :to="{name: 'signatories'}"
                class="py-4 px-2 text-brown font-semibold hover:text-cyan transition duration-300"
                >SIGNATÁŘI
              </nuxt-link>
            </div>
        </div>
      </div>
    </nav>
    <Nuxt />
    <section class="text-serif  mx-5 md:mx-15 lg:mx-20 my-5 md:flex justify-between items-center">
      <a href="https://fb.me/e/dVFOUI5Y8" target="_blank" class="text-blue hover:text-cyan hover:underline font-bold transition duration-300">
        Přijďte na Stávku za klima! V pátek 6.5. 2022 ve 13h na Malostranském náměstí.
      </a>
      <div>
        Kontakt: info@fridaysforfuture.cz
      </div>
    </section>
  </div>
</template>

