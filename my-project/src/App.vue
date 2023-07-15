<template>
  <RouterView />
</template>

<script>
import { RouterView } from "vue-router"
export default {
  name: "App",
  components: { RouterView }
}
</script>

<style>
.container {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}
</style>
