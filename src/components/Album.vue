<template>
  <div class="card">
    <div class="card-content">
      <p class="title is-4">{{name}} - {{albumName}}</p>
      <p class="subtitle is-6">@{{firstSocialAccount.name}}</p>

      <div class="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Phasellus nec iaculis mauris. <a>@bulmaio</a>.
        <a href="#">#css</a> <a href="#">#responsive</a>
        <br>
        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
      </div>
    </div>
  </div>
</template>

<script>
import Artist from "../models/Artist";
import {Label} from "../models/Label";
import Desc from "../models/Desc";
import {Social} from "../models/Social";

export default {
  name: "Album",
  props: {
    album: {
      type: Object,
      default: function() {
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
          links: []
        }
      }
    }
  },
  computed: {
    artist: function () {
      return this.album.artist.artist
    },
    socials: function() {
      return this.artist.socials;
    },
    name: function() {
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
    }
  }
}
</script>

<style scoped>

</style>
