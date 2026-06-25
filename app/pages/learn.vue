<template>
  <main class="max-w-2xl mx-auto py-12 px-4 flex flex-col items-center gap-8">
    <div class="text-center">
      <h2 class="text-3xl font-bold text-gray-900">
        {{ $t("learn.title") }}
      </h2>
      <p class="text-gray-500 mt-2">
        {{ $t("learn.subtitle") }}
      </p>
    </div>
    <div class="relative w-full max-w-sm">
      <input
        v-model="inputChar"
        type="text"
        maxlength="1"
        :placeholder="$t('learn.placeholder')"
        class="w-full px-4 py-3 pr-14 rounded-xl border border-gray-200 focus:outline-none focus:border-[#16a085] text-2xl text-center transition-colors duration-200"
        @keydown.enter="search"
      >
      <button
        class="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg text-[#16a085] hover:text-[#138a72] hover:bg-[#16a085]/10 transition-colors duration-200 cursor-pointer"
        :aria-label="$t('learn.search')"
        @click="search"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <circle
            cx="11"
            cy="11"
            r="7"
          />
          <line
            x1="16.5"
            y1="16.5"
            x2="22"
            y2="22"
          />
        </svg>
      </button>
    </div>
    <template v-if="currentChar">
      <CharacterWriter
        ref="writerRef"
        :character="currentChar"
      />
      <div class="flex flex-col items-center gap-2 w-full max-w-xs">
        <div class="flex items-center justify-between w-full text-sm">
          <span class="text-gray-500">{{ $t("learn.speed") }}</span>
          <span class="text-[#16a085] font-medium">{{ currentSpeedLabel }}</span>
        </div>
        <input
          v-model.number="speedLevel"
          type="range"
          min="1"
          max="4"
          step="1"
          class="w-full h-1.5 appearance-none rounded-full bg-gray-200 cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#16a085] [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-track]:bg-gray-200 [&::-moz-range-track]:h-1.5 [&::-moz-range-track]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[#16a085]"
        >
        <div class="flex justify-between w-full text-xs text-gray-400">
          <span>{{ $t("learn.speedSlow") }}</span>
          <span>{{ $t("learn.speedVeryFast") }}</span>
        </div>
      </div>
      <div class="flex gap-3">
        <button
          class="p-3 rounded-xl bg-[#16a085] text-white hover:bg-[#138a72] transition-colors duration-200 cursor-pointer"
          :aria-label="playState === 'playing' ? $t('learn.pause') : $t('learn.play')"
          @click="togglePlay"
        >
          <svg
            v-if="playState !== 'playing'"
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M5.25 5.25a.75.75 0 0 1 .75-.75h2.25a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H6a.75.75 0 0 1-.75-.75V5.25Zm9 0a.75.75 0 0 1 .75-.75h2.25a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" />
          </svg>
        </button>
        <button
          class="p-3 rounded-xl border border-[#16a085] text-[#16a085] hover:bg-[#16a085]/10 transition-colors duration-200 cursor-pointer"
          :aria-label="$t('learn.loop')"
          @click="loopAnimation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </template>
  </main>
</template>

<script setup lang="ts">
const { t } = useI18n();

useSeoMeta({
  title: computed(() => t("learn.seoTitle")),
  description: computed(() => t("learn.seoDescription")),
});

const SPEED_VALUES = [0.5, 1, 2, 4];

const speedLevelLabels = computed(() => [
  t("learn.speedSlow"),
  t("learn.speedNormal"),
  t("learn.speedFast"),
  t("learn.speedVeryFast"),
]);

const inputChar = ref("永");
const currentChar = ref("永");
const speedLevel = ref(2);

const currentSpeedLabel = computed(() => speedLevelLabels.value[speedLevel.value - 1]);

type PlayState = "idle" | "playing" | "paused";

const writerRef = ref<{
  play: (speed: number, onComplete?: () => void) => void;
  loop: (speed: number) => void;
  pause: () => void;
  resume: () => void;
} | null>(null);

const playState = ref<PlayState>("idle");

watch(currentChar, () => {
  playState.value = "idle";
});

function search() {
  const char = inputChar.value.trim();
  if (!char) return;
  currentChar.value = char;
}

function getSpeed(): number {
  return SPEED_VALUES[speedLevel.value - 1] ?? 1;
}

function togglePlay() {
  if (playState.value === "playing") {
    writerRef.value?.pause();
    playState.value = "paused";
  }
  else if (playState.value === "paused") {
    writerRef.value?.resume();
    playState.value = "playing";
  }
  else {
    playState.value = "playing";
    writerRef.value?.play(getSpeed(), () => {
      playState.value = "idle";
    });
  }
}

function loopAnimation() {
  playState.value = "playing";
  writerRef.value?.loop(getSpeed());
}
</script>
