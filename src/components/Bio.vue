<template>
  <text-block style="padding: 1rem">
    {{bio.text}}
    <i>Sources: <a v-for="(link, index) in bio.sources" :key="index" :href="link.link">{{link.text}}</a></i>
  </text-block>
</template>

<script>
import TextBlock from "./TextBlock";
import Bio from "../models/Bio";
export default {
  name: "Bio",
  components: {TextBlock},
  props: {
    bio: {
      type: Object,
      default: function () {
        return Bio();
      }
    }
  }
}
</script>

<style scoped>

</style>
