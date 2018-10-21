<template>
  <div class="content">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TextBlock",
}
</script>

<style scoped>
.content {
  white-space: pre-wrap;
  background-color: whitesmoke;
}
</style>
