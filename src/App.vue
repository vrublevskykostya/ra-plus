<template>
  <v-app>
    <div>
      <v-app-bar color="red">
        <Navbar />
      </v-app-bar>
    </div>

    <div class="app-page mt-10">
      <router-view />
    </div>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar';

export default {
  name: 'App',
  data: () => ({}),
  components: {
    Navbar,
  },
};
</script>

<style></style>
