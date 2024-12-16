<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Notch</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div class="number-display">{{ count }}</div>
      <button class="count-button" @click="incrementCount">count</button>
      <button class="settings-button" @click="goToSettings">
        <ion-icon :icon="settings"></ion-icon>
      </button>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon } from '@ionic/vue';
import { settings } from 'ionicons/icons';
import { ref, onMounted, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const count = ref(0);
const router = useRouter();
const route = useRoute();

onMounted(() => {
  const storedCount = localStorage.getItem('count');
  if (storedCount !== null) {
    count.value = parseInt(storedCount, 10);
  }
});

watch(route, () => {
  const storedCount = localStorage.getItem('count');
  if (storedCount !== null) {
    count.value = parseInt(storedCount, 10);
  }
});

function incrementCount() {
  count.value++;
  localStorage.setItem('count', count.value.toString());
}

function goToSettings() {
  router.push('/settings');
}
</script>

<style scoped>
.number-display {
  font-size: 48px;
  text-align: center;
  margin-top: 20%;
}

.count-button {
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  font-size: 24px;
}

.settings-button {
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  font-size: 24px;
}
</style>
