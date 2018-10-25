<template>
  <b-tag size="is-medium" type="is-primary">
    <router-link :to="link">
      <slot></slot>
    </router-link>
  </b-tag>
</template>

<script>
import BTag from "buefy/src/components/tag/Tag";

export default {
  name: "TagLink",
  components: {BTag},
  props: {
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
