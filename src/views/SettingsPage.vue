<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Settings</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div class="settings-buttons">
        <button class="reset-button" @click="resetCount">Reset</button>
        <button class="decrement-button" @click="decrementCount">-</button>
        <button class="save-button" @click="saveChanges">Save</button>
        <button class="cancel-button" @click="cancelChanges">Cancel</button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const count = ref(0);
const router = useRouter();

function resetCount() {
  count.value = 0;
}

function decrementCount() {
  count.value--;
}

function saveChanges() {
  // Save changes logic here
  router.push('/home');
}

function cancelChanges() {
  // Cancel changes logic here
  router.push('/home');
}
</script>

<style scoped>
.settings-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20%;
}

.settings-buttons button {
  margin: 10px;
  padding: 10px 20px;
  font-size: 24px;
}
</style>
