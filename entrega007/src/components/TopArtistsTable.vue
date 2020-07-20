<template>
  <div id="artists" class="principal">
    <input type="search" v-model="search" placeholder="Busca por artista" />

    <ul v-for="artist in filtered" :key="artist.id">
      <li>
        <p>{{ artist.name }}</p>
        <img :src="artist.image[2]['#text']" />
        <p>{{ artist.listeners }} oyentes</p>
        <button>
          <a href="artist.url">Visitar {{artist.name}}</a>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TopArtists",
  props: {
    artists: Array
  },
  data() {
    return {
      search: ""
    };
  },
  computed: {
    filtered() {
      if (!this.search) {
        return this.artists;
      }
      return this.artists.filter(item =>
        item.name.toLowerCase().includes(this.search.toLowerCase())
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
  list-style: none;
  display: flex;
  border-radius: 10px;
}

div ul {
  display: inline-flex;
}

div ul li {
  list-style: none;
}
</style>
