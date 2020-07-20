<template>
  <div>
    <h1>Top Tags</h1>

    <!-- <input type="search" v-model="search" placeholder="Busca por genero" /> -->

    <ul v-for="tag in filtered" :key="tag.id">
      <li>
        <p>{{ tag.name }}</p>
        <p>{{ tag.taggings }} reproducciones</p>
        <button>
          <a href="tag.url">Visitar {{tag.name}}</a>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TopTags",
  props: {
    toptags: Array
  },
  data() {
    return {
      search: ""
    };
  },
  computed: {
    filtered() {
      if (!this.search) {
        return this.toptags;
      }
      return this.toptags.filter(item =>
        item.name.ToLowerCase().includes(this.search.ToLowerCase())
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
  display: inline-flex;
  align-items: left;
  justify-content: left;
  border-radius: 10px;
}

div ul {
  list-style: none;

  display: list-item;
  align-content: center;
  justify-items: center;
  align-items: center;
}

div ul li {
  list-style: none;
}
</style>