<template>

  <section class="section">
    <div class="container">
      <h1 class="title">Albums</h1>
      <h2 class="subtitle">
        ....
      </h2>
      <album-list :list="albums"></album-list>
    </div>
  </section>

</template>

<script>
// @ is an alias to /src
import AlbumList from "../components/AlbumList";
import {getAlbums} from "../services/AlbumService";


export default {
  name: 'home',
  components: {
    AlbumList
  },
  data: function () {
    return {
      albums: getAlbums()
    }
  }
}
</script>
