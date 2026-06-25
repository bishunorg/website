<template>
  <div class="max-w-7xl px-3 md:px-6 md:mx-auto">
    <AppHeader />
    <NuxtPage />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();

const seoTitle = computed(() => t("seo.title"));
const seoDescription = computed(() => t("seo.description"));
const seoTwitterDescription = computed(() => t("seo.twitterDescription"));
const seoKeywords = computed(() => t("seo.keywords"));

useSeoMeta({
  title: seoTitle,
  description: seoDescription,
  keywords: seoKeywords,
  ogTitle: seoTitle,
  ogDescription: seoDescription,
  twitterTitle: seoTitle,
  twitterDescription: seoTwitterDescription,
});
</script>
