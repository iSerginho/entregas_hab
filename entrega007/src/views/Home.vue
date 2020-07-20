<template>
  <div class="home">
    <!-- <vue-headful title="Hack a Music 2020(c) | Home" /> -->
    <toptags :toptags="toptags" />
  </div>
</template>

<script>
import api from "@/api/index.js";
import toptags from "@/components/TopTagsTable.vue";

export default {
  name: "Home",
  components: { toptags },
  data() {
    return {
      toptags: []
    };
  },

  created() {
    api.getTopTags().then(response => (this.toptags = response.data.tags.tag));
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
</style>