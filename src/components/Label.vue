<template>
  <div class="card">
    <div class="card-content">
      <p class="title is-4">{{label.name}}</p>
    </div>
    <footer class="card-footer">
      <social-link v-for="(social,index) in socials" :key="index" :social="social"></social-link>

      <router-link v-if="!back" class="card-footer-item" :to="`/label/${label.id}`">
        <b-icon
            icon="arrow-right-thick"
            size="is-medium"></b-icon>
      </router-link>
      <a v-else class="card-footer-item" @click="$router.go(-1)">
        <b-icon icon="arrow-left-thick" size="is-medium"></b-icon>
      </a>

    </footer>
  </div>
</template>

<script>
import {Label} from "../models/Label";
import SocialLink from "./SocialLink";
export default {
  name: "Label",
  components: {
    SocialLink
  },
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
  },
  computed: {
    socials: function () {
      return this.label.socials
    }
  }
  //TODO componenente für liste und elemente > size sind, dann aufklappbar
}
</script>

<style scoped>

</style>
