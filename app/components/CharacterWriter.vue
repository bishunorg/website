<template>
  <div class="flex flex-col items-center gap-4">
    <div class="relative w-80 h-80">
      <svg
        class="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 300 300"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect
          x="1"
          y="1"
          width="298"
          height="298"
          fill="none"
          stroke="#d1d5db"
          stroke-width="1.5"
        />
        <line
          x1="1"
          y1="150"
          x2="299"
          y2="150"
          stroke="#d1d5db"
          stroke-width="1"
          stroke-dasharray="5,4"
        />
        <line
          x1="150"
          y1="1"
          x2="150"
          y2="299"
          stroke="#d1d5db"
          stroke-width="1"
          stroke-dasharray="5,4"
        />
        <line
          x1="1"
          y1="1"
          x2="299"
          y2="299"
          stroke="#d1d5db"
          stroke-width="1"
          stroke-dasharray="5,4"
        />
        <line
          x1="299"
          y1="1"
          x2="1"
          y2="299"
          stroke="#d1d5db"
          stroke-width="1"
          stroke-dasharray="5,4"
        />
      </svg>
      <div
        ref="writerTarget"
        class="absolute inset-0 w-full h-full"
      />
      <div
        v-if="hasError"
        class="absolute inset-0 flex items-center justify-center text-gray-400 text-sm text-center px-6"
      >
        {{ $t("learn.errorNotFound") }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  character: string;
}>();

const writerTarget = ref<HTMLDivElement | null>(null);
const hasError = ref(false);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let writerInstance: any = null;

async function createWriter(speed: number) {
  if (!writerTarget.value || !props.character) return null;
  hasError.value = false;
  const HanziWriter = (await import("hanzi-writer")).default;
  writerTarget.value.innerHTML = "";
  return HanziWriter.create(writerTarget.value, props.character, {
    width: 320,
    height: 320,
    padding: 10,
    strokeAnimationSpeed: speed,
    delayBetweenStrokes: Math.round(800 / speed),
    strokeColor: "#C0392B",
    outlineColor: "#e5e7eb",
    showCharacter: false,
    showOutline: true,
    onLoadCharDataError: () => {
      hasError.value = true;
    },
  });
}

async function play(speed: number, onComplete?: () => void) {
  writerInstance = await createWriter(speed);
  writerInstance?.animateCharacter({ onComplete });
}

async function loop(speed: number) {
  writerInstance = await createWriter(speed);
  writerInstance?.loopCharacterAnimation();
}

function pause() {
  writerInstance?.pauseAnimation();
}

function resume() {
  writerInstance?.resumeAnimation();
}

watch(
  () => props.character,
  async () => {
    writerInstance = await createWriter(1);
  },
  { flush: "post" },
);

onMounted(async () => {
  writerInstance = await createWriter(1);
});

defineExpose({ play, loop, pause, resume });
</script>
