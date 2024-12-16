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
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
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
</style>
