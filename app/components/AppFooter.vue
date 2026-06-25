<template>
  <footer class="py-10">
    <div class="flex flex-col md:flex-row gap-6 md:gap-24">
      <div class="flex flex-col gap-4 md:w-1/3">
        <img
          src="/img/logo.png"
          alt="Bishun Logo"
          class="w-10 h-10"
        >
        <p class="text-sm">{{ $t('site.description') }}</p>
      </div>
      <div class="flex flex-1 gap-x-16 md:gap-x-[25%]">
        <dl class="flex flex-col gap-y-4">
          <dt class="font-semibold text-lg">{{ $t('footer.explore') }}</dt>
          <dd class="text-sm"><FooterLink to="#">{{ $t('footer.about') }}</FooterLink></dd>
          <dd class="text-sm"><FooterLink to="#">{{ $t('footer.blog') }}</FooterLink></dd>
        </dl>
        <dl class="flex flex-col gap-y-4">
          <dt class="font-semibold text-lg">{{ $t('footer.legal') }}</dt>
          <dd class="text-sm"><FooterLink to="#">{{ $t('footer.terms') }}</FooterLink></dd>
          <dd class="text-sm"><FooterLink to="#">{{ $t('footer.privacy') }}</FooterLink></dd>
          <dd class="text-sm"><FooterLink to="#">{{ $t('footer.license') }}</FooterLink></dd>
        </dl>
      </div>
    </div>
    <p class="text-xs flex gap-x-3 text-gray-500 mt-8 pt-8 border-t border-solid border-gray-100">
      <span>{{ $t('footer.copyright') }}</span><span>{{ $t('footer.allRightsReserved') }}</span>
    </p>
  </footer>
</template>
