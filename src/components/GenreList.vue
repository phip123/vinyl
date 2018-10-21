<template>
  <b-taglist>
    <b-tag rounded size="is-medium" v-for="(genre, index) in genres" :key="index" type="is-primary">{{genre.name}}
    </b-tag>
  </b-taglist>

</template>

<script>
export default {
  name: "GenreList",
  props: {
    genres: {
      type: Array,
      default: function () {
        return [];
      }
    }
  }
}
</script>

<style scoped>

</style>
