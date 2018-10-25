<template>
  <b-taglist>
    <b-tag v-if="description.length > 0" size="is-medium" type="is-dark">{{description}}</b-tag>
    <tag-link v-for="item in list" :key="item.id" :link="`/${entity}/${item.id}`">
      {{text(item)}}
    </tag-link>
  </b-taglist>
</template>

<script>
import TagLink from "./TagLink";

export default {
  name: "TagList",
  components: {
    TagLink
  },
  props: {
    entity: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: function () {
        return "";
      }
    },
    list: {
      type: Array,
      default: function () {
        return [];
      }
    }
  },
  methods: {
    text: function(item) {

      const t = item.name;
      if (t === undefined) {
        return item.title;
      } else {
        return t
      }
    }
  }
}
</script>

<style scoped>

</style>
