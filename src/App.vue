<template>
  <template v-if="!shouldNotRenderNavigationAndFooter">
    <Navigation />
    <RouterView />
    <Footer />
  </template>

  <template v-else>
    <RouterView />
  </template>
</template>

<script setup>
import { ref, watchEffect, onMounted } from "vue";
import { useRouter } from "vue-router";
import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue";


const router = useRouter();
const shouldNotRenderNavigationAndFooter = ref(false);

watchEffect(() => {
  shouldNotRenderNavigationAndFooter.value = [
    "/admin",
    "/admin-login",
  ].includes(router.currentRoute.value.path);
});
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
