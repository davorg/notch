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
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { ref } from 'vue';

const count = ref(0);

function incrementCount() {
  count.value++;
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
</style>
