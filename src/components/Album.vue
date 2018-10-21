<template>
  <div class="card">
    <div class="card-content">
      <p class="title is-4">{{name}} - {{albumName}}</p>
      <b-tag rounded class="subtitle is-6" size="is-large">
        <router-link :to="`/artist/${album.artist.id}`">@{{firstSocialAccount.name}}</router-link>
      </b-tag>
      <div class="container is-fluid">

        <header-description :desc="shortDesc"></header-description>
        <section class="content">

          <b-collapse v-if="!back" :open="false">
            <div slot="trigger" slot-scope="props">
              <genre-list class="card-header-title" :genres="genres"></genre-list>

              <a class="content">
                <b-icon
                    size="is-medium"
                    :icon="props.open ? 'menu-down' : 'menu-up'">
                </b-icon>
              </a>
            </div>


            <review :desc="longDesc" :rating="rating"></review>

          </b-collapse>

          <div v-else>
            <genre-list class="card-header-title" :genres="genres"></genre-list>
            <review :desc="longDesc" :rating="rating"></review>

            <div class="container">
              <p class="subtitle is-5">
                More:
              </p>
              <div class="content">
                <link-list :links="links"></link-list>
              </div>


            </div>

          </div>

        </section>

      </div>

    </div>
    <footer class="card-footer">
      <a target="_blank" rel="noopener" :href="discogsLink.link" class="card-footer-item">
        <b-icon
            icon="album"
            size="is-medium"></b-icon>
      </a>
      <a target="_blank" rel="noopener" :href="youtubeLink.link" class="card-footer-item">
        <b-icon
            icon="youtube-play"
            size="is-medium"></b-icon>
      </a>
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
import {Label} from "../models/Label";
import Desc from "../models/Desc";
import {Social} from "../models/Social";
import Link from "../models/Link";
import BIcon from "buefy/src/components/icon/Icon";
import GenreList from "./GenreList";
import LinkList from "./LinkList";
import Review from "./Review";
import HeaderDescription from "./HeaderDescription";

export default {
  name: "Album",
  components: {HeaderDescription, Review, LinkList, GenreList, BIcon},
  props: {
    back: {
      type: Boolean,
      default: function () {
        return false
      }
    },
    album: {
      type: Object,
      default: function () {
        return {
          id: 0,
          artist: {id: 0, artist: Artist()},
          label: Label(),
          name: "-",
          title: "-",
          genres: [],
          year: "-",
          shortDesc: Desc(),
          longDesc: Desc(),
          links: [],
          discogsLink: Link(),
          youtubeLink: Link()
        }
      }
    }
  },
  computed: {
    youtubeLink: function () {
      return this.album.youtubeLink
    },
    label: function () {
      return this.album.label
    },
    shortDesc: function () {
      return this.album.shortDesc
    },
    longDesc: function () {
      return this.album.longDesc
    },
    links: function () {
      return this.album.links
    },
    year: function () {
      return this.album.year
    },
    genres: function () {
      return this.album.genres
    },
    artist: function () {
      return this.album.artist.artist
    },
    rating: function () {
      return this.album.rating
    },
    socials: function () {
      return this.artist.socials;
    },
    name: function () {
      return this.artist.name
    },
    hasSocialMedia() {
      return this.socials.length > 0;
    },
    firstSocialAccount() {
      if (this.hasSocialMedia) {
        return this.socials[0]
      } else {
        return Social();
      }
    },
    albumName() {
      return this.album.title
    },
    discogsLink() {
      return this.album.discogsLink
    }
  },
  methods: {}
}
</script>

<style scoped lang="scss">
blockquote {
  color: black;
  display: inline-block;
  border-left: none;
}
</style>
