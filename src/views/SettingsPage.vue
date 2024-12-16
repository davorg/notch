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
import { useRouter } from 'vue-router';

const router = useRouter();

function resetCounter() {
  localStorage.setItem('count', '0');
}

function decrementCounter() {
  const storedCount = localStorage.getItem('count');
  if (storedCount !== null) {
    const count = parseInt(storedCount, 10);
    localStorage.setItem('count', (count - 1).toString());
  }
}

function saveChanges() {
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
