<template>
  <v-app>
    <v-app-bar app color="primary" dark></v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style leng="scss">
.container {
  max-width: 1200px;
  padding: 0 15px;
  margin: 0 auto;
}
</style>
