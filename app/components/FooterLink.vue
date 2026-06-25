<template>
  <nuxt-link
    :to="to"
    class="relative text-gray-600 hover:text-(--footer-link-color) transition-colors duration-300 after:content-[''] after:absolute after:-bottom-px after:left-0 after:h-px after:w-full after:bg-current after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300"
  >
    <slot />
  </nuxt-link>
</template>

<script setup lang="ts">
defineProps<{
  to: string;
}>();
</script>
