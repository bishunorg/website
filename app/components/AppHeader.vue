<template>
  <header class="flex items-center justify-between">
    <h1 class="flex items-center gap-2 my-4">
      <img
        src="/img/logo.png"
        alt="Bishun Logo"
        class="w-6 h-6"
      >
      <span>Bishun</span>
    </h1>
    <div class="flex items-center gap-2 text-sm">
      <button
        v-for="locale in locales"
        :key="locale.code"
        :class="locale.code === currentLocale ? 'font-semibold text-[#16a085]' : 'text-gray-500 cursor-pointer hover:text-[#16a085]'"
        @click="setLocale(locale.code)"
      >
        {{ locale.name }}
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
const { locale: currentLocale, locales, setLocale } = useI18n()
</script>
