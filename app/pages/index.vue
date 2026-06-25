<template>
  <main>
    <!-- Hero -->
    <section class="flex flex-col items-center text-center py-20 md:py-32 gap-6">
      <div class="flex gap-3 md:gap-4 text-6xl md:text-8xl font-bold text-[#16a085] select-none leading-tight">
        <span>人</span>
        <span>水</span>
        <span>山</span>
        <span>火</span>
      </div>
      <h2 class="text-3xl md:text-6xl font-bold tracking-tight text-gray-900 max-w-3xl">
        {{ $t('site.tagline') }}
      </h2>
      <p class="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
        {{ $t('site.description') }}
      </p>
      <div class="flex items-center gap-4 mt-2">
        <NuxtLink
          to="/learn"
          class="px-8 py-3 rounded-full bg-[#16a085] text-white font-semibold text-lg hover:bg-[#138a72] transition-colors duration-200"
        >
          {{ $t('landing.hero.cta') }}
        </NuxtLink>
        <span class="text-sm text-gray-400">{{ $t('landing.hero.ctaFree') }}</span>
      </div>
    </section>

    <!-- Features -->
    <section class="py-16 md:py-24">
      <h3 class="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
        {{ $t('landing.features.title') }}
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="flex flex-col gap-3 p-6 rounded-2xl border border-gray-100 bg-gray-50 hover:border-[#16a085]/30 hover:bg-[#16a085]/5 transition-colors duration-200">
          <div class="w-10 h-10 rounded-xl bg-[#16a085]/10 flex items-center justify-center text-[#16a085] text-xl">
            ✍️
          </div>
          <h4 class="font-semibold text-gray-900">{{ $t('landing.features.strokeOrder.title') }}</h4>
          <p class="text-sm text-gray-500 leading-relaxed">{{ $t('landing.features.strokeOrder.description') }}</p>
        </div>
        <div class="flex flex-col gap-3 p-6 rounded-2xl border border-gray-100 bg-gray-50 hover:border-[#16a085]/30 hover:bg-[#16a085]/5 transition-colors duration-200">
          <div class="w-10 h-10 rounded-xl bg-[#16a085]/10 flex items-center justify-center text-[#16a085] text-xl">
            🔊
          </div>
          <h4 class="font-semibold text-gray-900">{{ $t('landing.features.pronunciation.title') }}</h4>
          <p class="text-sm text-gray-500 leading-relaxed">{{ $t('landing.features.pronunciation.description') }}</p>
        </div>
        <div class="flex flex-col gap-3 p-6 rounded-2xl border border-gray-100 bg-gray-50 hover:border-[#16a085]/30 hover:bg-[#16a085]/5 transition-colors duration-200">
          <div class="w-10 h-10 rounded-xl bg-[#16a085]/10 flex items-center justify-center text-[#16a085] text-xl">
            📖
          </div>
          <h4 class="font-semibold text-gray-900">{{ $t('landing.features.meanings.title') }}</h4>
          <p class="text-sm text-gray-500 leading-relaxed">{{ $t('landing.features.meanings.description') }}</p>
        </div>
        <div class="flex flex-col gap-3 p-6 rounded-2xl border border-gray-100 bg-gray-50 hover:border-[#16a085]/30 hover:bg-[#16a085]/5 transition-colors duration-200">
          <div class="w-10 h-10 rounded-xl bg-[#16a085]/10 flex items-center justify-center text-[#16a085] text-xl">
            🎯
          </div>
          <h4 class="font-semibold text-gray-900">{{ $t('landing.features.practice.title') }}</h4>
          <p class="text-sm text-gray-500 leading-relaxed">{{ $t('landing.features.practice.description') }}</p>
        </div>
        <div class="flex flex-col gap-3 p-6 rounded-2xl border border-gray-100 bg-gray-50 hover:border-[#16a085]/30 hover:bg-[#16a085]/5 transition-colors duration-200">
          <div class="w-10 h-10 rounded-xl bg-[#16a085]/10 flex items-center justify-center text-[#16a085] text-xl">
            🏛️
          </div>
          <h4 class="font-semibold text-gray-900">{{ $t('landing.features.etymology.title') }}</h4>
          <p class="text-sm text-gray-500 leading-relaxed">{{ $t('landing.features.etymology.description') }}</p>
        </div>
        <div class="flex flex-col gap-3 p-6 rounded-2xl border border-gray-100 bg-gray-50 hover:border-[#16a085]/30 hover:bg-[#16a085]/5 transition-colors duration-200">
          <div class="w-10 h-10 rounded-xl bg-[#16a085]/10 flex items-center justify-center text-[#16a085] text-xl">
            🧩
          </div>
          <h4 class="font-semibold text-gray-900">{{ $t('landing.features.radicals.title') }}</h4>
          <p class="text-sm text-gray-500 leading-relaxed">{{ $t('landing.features.radicals.description') }}</p>
        </div>
      </div>
    </section>
  </main>
</template>
