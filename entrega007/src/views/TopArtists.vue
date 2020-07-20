<template>
  <div class="TopArtists">
    <!-- <vue-headful title="Hack a Music 2020(c) | Top Artists" /> -->
    <topartists :artists="artists" />
  </div>
</template>

<script>
import api from "@/api/index.js";
import topartists from "@/components/TopArtistsTable.vue";

export default {
  name: "TopArtists",
  components: { topartists },
  data() {
    return {
      artists: []
    };
  },
  created() {
    api
      .getArtists()
      .then(response => (this.artists = response.data.topartists.artist));
  }
};
</script>
