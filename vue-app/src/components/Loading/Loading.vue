<template>
  <div class="loading-overlay" v-if="loading">
    <div class="spinner"></div>
    <div class="loading-message">{{ message }}</div>
  </div>
</template>
<script>
import "./Loading.css"
export default {
  name: "LoadingVue",
  props: {
    loading: {
      type: Boolean,
      required: true
    },
    message: {
      type: String,
      default: "Loading..."
    }
  }
}
</script>
