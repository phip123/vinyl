<template>

  <div class="content">
    <text-block>
      <p style="padding: 2rem" class="has-text-weight-light has-text-left">{{desc.text}} <i><b>Rating: {{rating}}</b></i></p>
    </text-block>
  </div>


</template>

<script>
import Desc from "../models/Desc";
import TextBlock from "./TextBlock";

export default {
  name: "Review",
  components: {TextBlock},
  props: {
    desc: {
      type: Object,
      default: function () {
        return Desc();
      }
    },
    rating: {
      type: Number,
      default: function () {
        return 0.0;
      }
    }
  }
}
</script>

<style scoped>



</style>
