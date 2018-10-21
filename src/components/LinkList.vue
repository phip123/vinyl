<template>

  <b-field grouped group-multiline>
    <a rel="noopener" :href="link.link" class="control" v-for="(link, index) in links" :key="index">
      <b-taglist attached>
        <b-tag size="is-medium" type="is-dark">
          <b-icon
              :icon="getIconForSocialPlatform(link.platform)"></b-icon>
        </b-tag>
        <b-tag size="is-medium" type="is-primary">{{link.text}}</b-tag>
      </b-taglist>
    </a>
  </b-field>
</template>

<script>
import * as socialService from "../services/SocialService";


export default {
  name: "LinkList",
  props: {
    links: {
      type: Array,
      default: function () {
        return [];
      }
    }
  },
  methods: {
    getIconForSocialPlatform: function (platform) {
      return socialService.getIconForPlatform(platform)
    }
  }
}
</script>

<style scoped>

</style>
