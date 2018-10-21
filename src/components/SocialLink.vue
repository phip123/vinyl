<template>
  <a  target="_blank" rel="noopener" :href="social.url" class="card-footer-item">
    <b-icon
        :icon="getIcon(social.platform)"
        size="is-medium"></b-icon>
  </a>
</template>

<script>
import * as socialService from '../services/SocialService';
import {Social} from "../models/Social";


export default {
  name: "SocialLink",
  props: {
    social: {
      type: Object,
      default: function () {
        return Social();
      }
    }
  },
  methods: {
    getIcon: function(platform) {
      return socialService.getIconForPlatform(platform)
    }
  }
}
</script>

<style scoped>

</style>
