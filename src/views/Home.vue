<template>

  <div>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            phip123's Music
          </h1>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h1 class="title">Albums</h1>
        <h2 class="subtitle">
          Some links, interviews, reviews, etc. for music I own.
        </h2>
        <album-list :list="albums"></album-list>
      </div>
    </section>
  </div>

</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import AlbumList from "../components/AlbumList";
import {getAlbums} from "../services/AlbumService";


export default {
  name: 'home',
  components: {
    AlbumList,
    HelloWorld
  },
  data: function () {
    return {
      albums: getAlbums()
    }
  }
}
</script>
