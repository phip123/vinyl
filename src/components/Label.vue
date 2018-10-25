<template>
  <div class="card">
    <div class="card-content">
      <p class="title is-4">{{name}}</p>
      <bio :bio="bio"></bio>

    </div>
    <footer class="card-footer">
      <social-link v-for="(social,index) in socials" :key="index" :social="social"></social-link>

      <tag-list entity="genre" description="Genres: " :list="genres"></tag-list>
      <tag-list entity="artist" description="Artists: " :list="artists"></tag-list>

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
import TextBlock from "./TextBlock";
import Bio from "./Bio";
import TagList from "./TagList";
export default {
  name: "Label",
  components: {
    TagList,
    TextBlock,
    SocialLink,
    Bio
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
    name: function () {
      return this.label.name;
    },
    socials: function () {
      return this.label.socials;
    },
    bio: function () {
      return this.label.bio;
    },
    links: function () {
      return this.label.links;
    },
    genres: function() {
      return [];
    },
    artists: function () {
      return [];
    }
  }
  //TODO componenente für liste und elemente > size sind, dann aufklappbar
}
</script>

<style scoped>

</style>
