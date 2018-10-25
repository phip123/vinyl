<template>
  <text-block class="padded">
    {{bio.text}}
    <i v-if="bio.sources.length > 0">Sources: <a v-for="(link, index) in bio.sources" :key="index" :href="link.link">{{link.text}}</a></i>
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
.padded {
  padding-bottom: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
}
</style>
