<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Notch</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <canvas ref="canvas" class="tally-canvas"></canvas>
      <div class="button-container">
        <button class="count-button" @click="incrementCount">count</button>
        <button class="settings-button" @click="goToSettings">
          <ion-icon :icon="settings"></ion-icon>
        </button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon } from '@ionic/vue';
import { settings } from 'ionicons/icons';
import { ref, onMounted, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const count = ref(0);
const canvas = ref<HTMLCanvasElement | null>(null);
const router = useRouter();
const route = useRoute();

onMounted(() => {
  const storedCount = localStorage.getItem('count');
  if (storedCount !== null) {
    count.value = parseInt(storedCount, 10);
  }
  drawTallyMarks();
});

watch(route, () => {
  const storedCount = localStorage.getItem('count');
  if (storedCount !== null) {
    count.value = parseInt(storedCount, 10);
  }
  drawTallyMarks();
});

function incrementCount() {
  count.value++;
  localStorage.setItem('count', count.value.toString());
  drawTallyMarks();
}

function goToSettings() {
  router.push('/settings');
}

function drawTallyMarks() {
  if (!canvas.value) return;
  const ctx = canvas.value.getContext('2d');
  if (!ctx) return;

  const width = canvas.value.width;
  const height = canvas.value.height;
  const tallyWidth = width / 10;
  const tallyHeight = height / 10;
  const maxTalliesPerRow = Math.floor(width / tallyWidth);
  const maxTalliesPerColumn = Math.floor(height / tallyHeight);

  ctx.clearRect(0, 0, width, height);
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 2;

  for (let i = 0; i < count.value; i++) {
    const row = Math.floor(i / maxTalliesPerRow);
    const col = i % maxTalliesPerRow;
    const x = col * tallyWidth;
    const y = row * tallyHeight;

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + tallyWidth, y + tallyHeight);
    ctx.stroke();
  }
}
</script>

<style scoped>
.button-container {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.count-button {
  display: inline-block;
  margin: 20px auto;
  padding: 10px 20px;
  font-size: 24px;
}

.settings-button {
  display: inline-block;
  margin: 20px auto;
  padding: 10px 20px;
  font-size: 24px;
}

.tally-canvas {
  width: 100%;
  height: 100%;
}
</style>
