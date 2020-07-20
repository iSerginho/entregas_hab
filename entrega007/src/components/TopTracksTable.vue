<template>
  <div class="principal">
    <h1>Top Tracks</h1>

    <!-- <input type="search" v-model="search" placeholder="Busca por cancion" /> -->

    <ul v-for="track in filtered" :key="track.id">
      <li>
        <img :src="track.image[1]['#text']" />
        <p>{{track.artist.name}}</p>
        <p>{{track.name}}</p>
        <p>{{track.listeners}} oyentes</p>
        <button>
          <a href="track.url">Escuchar {{track.name}}</a>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TopTracks",
  props: {
    toptracks: Array
  },
  data() {
    return {
      search: ""
    };
  },
  computed: {
    filtered() {
      if (!this.search) {
        return this.toptracks;
      }
      return this.toptracks.filter(item =>
        item.tracks.name.ToLowerCase().includes(this.search.ToLowerCase())
      );
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

#principal {
  margin: auto;
}

div input {
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
}

div ul {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

div ul li {
  list-style: none;
}
</style>