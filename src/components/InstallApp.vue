<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const deferredPrompt = ref(null);
const showDownloadPrompt = ref(true);
const showMiniBox = ref(false);

// Håndter 'beforeinstallprompt' begivenhed
const handleBeforeInstallPrompt = (e) => {
  e.preventDefault();
  deferredPrompt.value = e;
  showDownloadPrompt.value = true; // Vis prompten, når begivenheden er udløst
};

// Håndter 'appinstalled' begivenhed
const handleAppInstalled = () => {
  showDownloadPrompt.value = false; // Skjul prompten, når appen er installeret
  showMiniBox.value = false; // Skjul mini-boksen, når appen er installeret
};

onMounted(() => {
  window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
  window.addEventListener("appinstalled", handleAppInstalled);
});

onUnmounted(() => {
  window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
  window.removeEventListener("appinstalled", handleAppInstalled);
});

const installApp = () => {
  if (deferredPrompt.value) {
    deferredPrompt.value.prompt();
    deferredPrompt.value.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the A2HS prompt");
        showDownloadPrompt.value = false; // Skjul prompten efter installation
      } else {
        console.log("User dismissed the A2HS prompt");
      }
      deferredPrompt.value = null;
    });
  }
};

const closeDownloadPrompt = () => {
  showDownloadPrompt.value = false;
  showMiniBox.value = true;
};

const reopenDownloadPrompt = () => {
  showDownloadPrompt.value = true;
  showMiniBox.value = false;
};
</script>

<template>
  <div>
    <div v-if="showDownloadPrompt" class="install-app">
      <span @click="closeDownloadPrompt" class="install-app__close-button"
        >&times;</span
      >
      <p class="install-app__text">Download Geografisk Have som app!</p>
      <button @click="installApp" class="install-app__button">
        Download App
      </button>
    </div>
    <div
      v-if="showMiniBox"
      class="install-app__mini-box"
      @click="reopenDownloadPrompt"
    >
      <span class="install-app__mini-text">DOWNLOAD SOM APP</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.install-app {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 20px;
  background-color: #d97b7b;
  border-radius: 5px;
  text-align: center;
  z-index: 1000;
  &__close-button {
    position: absolute;
    top: 5px;
    right: 5px;
    font-size: 20px;
    cursor: pointer;
    color: white;
    background: none;
    border: none;
  }
  &__close-button:hover {
    color: red;
  }
  &__text {
    padding-top: 20px;
    color: white;
  }
  &__button {
    margin-top: 10px;
    padding: 10px 20px;
    background-color: #42b883;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  &__button:hover {
    background-color: #399a6e;
  }
  &__mini-box {
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 10px;
    background-color: #d97b7b;
    color: white;
    text-align: center;
    cursor: pointer;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    z-index: 1000;
  }
  &__mini-text {
    font-size: 14px;
    color: white;
  }
}
</style>
