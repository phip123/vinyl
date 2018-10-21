<template>
  <div class="has-text-centered is-paddingless is-marginless">
    <p class="subtitle is-size-6">
      <i>
        <b>
          {{desc.text}}
        </b>
      </i>

    </p>
  </div>
</template>

<script>
import Desc from "../models/Desc";

export default {
  name: "HeaderDescription",
  props: {
    desc: {
      type: Object,
      default: function () {
        return Desc()
      }
    }
  }
}
</script>

<style scoped>

</style>
