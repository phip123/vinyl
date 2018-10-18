<template>
  <div>
    <ul>
      <li v-for="album in list" :key="album.id">
        <album :album="album"></album>
      </li>
    </ul>
  </div>
</template>

<script>
import Album from "./Album";
export default {
  name: "AlbumList",
  components: {Album},
  props: {
    list: {
      type: Array,
      default: function () {
        return []
      }
    }
  }
}
</script>

<style scoped>

</style>
