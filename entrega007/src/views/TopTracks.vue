<template>
  <div class="TopTracks">
    <!-- <vue-headful title="Hack a Music 2020(c) | Top Tracks" /> -->

    <toptracks :toptracks="toptracks" />
  </div>
</template>

<script>
import api from "@/api/index.js";
import toptracks from "@/components/TopTracksTable.vue";

export default {
  name: "TopTracks",
  components: { toptracks },
  data() {
    return {
      toptracks: []
    };
  },
  created() {
    api
      .getTopTracks()
      .then(response => (this.toptracks = response.data.tracks.track));
  }
};
</script>
