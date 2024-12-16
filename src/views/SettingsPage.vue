<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Settings</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div class="settings-container">
        <h2>Settings Page</h2>
        <p>Here you can configure your settings.</p>
        <div class="count-display">{{ count }}</div>
        <button class="reset-button" @click="resetCounter">Reset</button>
        <button class="decrement-button" @click="decrementCounter">-</button>
        <button class="save-button" @click="saveChanges">Save</button>
        <button class="cancel-button" @click="cancelChanges">Cancel</button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const count = ref(0);
const router = useRouter();

onMounted(() => {
  const storedCount = localStorage.getItem('count');
  if (storedCount !== null) {
    count.value = parseInt(storedCount, 10);
  }
});

function resetCounter() {
  count.value = 0;
}

function decrementCounter() {
  if (count.value > 0) {
    count.value--;
  }
}

function saveChanges() {
  localStorage.setItem('count', count.value.toString());
  router.push('/home');
}

function cancelChanges() {
  router.push('/home');
}
</script>

<style scoped>
.settings-container {
  text-align: center;
  margin-top: 20%;
}

.settings-container h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.settings-container p {
  font-size: 18px;
}

.count-display {
  font-size: 48px;
  text-align: center;
  margin-top: 20px;
}

.reset-button,
.decrement-button,
.save-button,
.cancel-button {
  display: block;
  margin: 10px auto;
  padding: 10px 20px;
  font-size: 18px;
}
</style>
