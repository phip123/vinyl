<template>
  <div class="card">
    <div class="card-content">
      <p class="title is-4">{{name}}</p>
      <div class="content is-paddingless is-marginless">
        <section class="container">

          <bio :bio="bio"></bio>

          <div class="content has-text-left">
            <tag-list entity="label" description="Labels:" :list="labels"></tag-list>
            <tag-list entity="genre" description="Genres:" :list="genres"></tag-list>
            <tag-list entity="album" description="Albums:" :list="albums"></tag-list>


          </div>

          <link-list :links="links"></link-list>


        </section>

      </div>

    </div>
    <footer class="card-footer">
      <a target="_blank" rel="noopener" :href="discogsLink.link" class="card-footer-item">
        <b-icon
            icon="album"
            size="is-medium"></b-icon>
      </a>

      <social-link v-for="(social,index) in socials" :key="index" :social="social"></social-link>

      <router-link v-if="!back" class="card-footer-item" :to="`/album/${album.id}`">
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
import Artist from "../models/Artist";
import * as socialService from '../services/SocialService';
import SocialLink from './SocialLink';
import LinkList from "./LinkList";
import Review from "./Review";
import TextBlock from "./TextBlock";
import Bio from "./Bio";
import * as albumService from "../services/AlbumService";
import * as labelService from "../services/LabelService";
import * as genreService from "../services/GenreService";
import BTaglist from "buefy/src/components/tag/Taglist";
import TagLink from "./TagLink";
import TagList from "./TagList";

export default {
  name: "Artist",
  components: {
    TagList,
    TagLink,
    BTaglist,
    TextBlock,
    Review,
    LinkList,
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
    artist: {
      type: Object,
      default: function () {
        return Artist()
      }
    }
  },
  computed: {
    links: function () {
      return this.artist.links;
    },
    discogsLink: function () {
      return this.artist.discogsUrl;
    },
    name: function () {
      return this.artist.name;
    },
    socials: function () {
      return this.artist.socials;
    },
    hasSocialMedia() {
      return this.socials.length > 0;
    },
    bio: function () {
      return this.artist.bio;
    },
    labels: function () {
      return labelService.findLabelsForArtist(this.artist.id)
    },
    albums: function () {
      return albumService.getAlbumsForArtist(this.artist.id)
    },
    genres: function () {
      return genreService.getGenresForArtist(this.artist.id)
    }
  },
  methods: {
    getIcon: function (platform) {
      return socialService.getIconForPlatform(platform);
    }
  }
}
</script>

<style scoped>

</style>
