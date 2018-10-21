<template>
  <div class="container">
    here goes nothing...

  </div>
</template>

<script>
import {Label} from "../models/Label";

export default {
  name: "Label",
  props: {
    back: {
      type: Boolean,
      default: function () {
        return false;
      }
    },
    label: {
      type: Object,
      default: function () {
        return Label();
      }
    }
  }
  //TODO componenente für liste und elemente > size sind, dann aufklappbar
}
</script>

<style scoped>

</style>
