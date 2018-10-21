<template>
  <b-tag size="is-medium" type="is-primary">
    <router-link :to="link">
      {{text}}
    </router-link>
  </b-tag>
</template>

<script>
import BTag from "buefy/src/components/tag/Tag";

export default {
  name: "TagLink",
  components: {BTag},
  props: {
    text: {
      type: String,
      default: function () {
        return "-"
      }
    },
    link: {
      type: String,
      default: function () {
        return "-"
      }
    }
  },
  methods: {}
}
</script>

<style scoped>
a {
  color: white;
}
</style>
