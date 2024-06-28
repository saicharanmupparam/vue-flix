<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { ref, onMounted } from 'vue'
import { supabase } from './lib/supabaseClient'
import type { Movies } from './interfaces'

const countries = ref([])
const movies = ref<Movies[]>([])

async function getCountries() {
  const { data: moviesRef } = await supabase.from('movies').select()
  const { data: countriesRef } = await supabase.from('countries').select()
  countries.value = countriesRef
  movies.value = moviesRef

  console.log(movies.value)
}

onMounted(() => {
  // Load movies into state......
  
  getCountries()
})
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <div class="wrapper">
      <!-- <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
      <ul v-for="movie in movies">
        <img :src="movie.image" />
        <br />
        <img height="50px" width="100px" :src="movie.platform[0]" />
        <br />
        <li :key="movie.title">{{ movie.title }}</li>
        <li :key="movie.languages">{{ movie.languages }}</li>
        <li :key="movie.genre">{{ movie.genre }}</li>
        <li :key="movie.category">{{ movie.category }}</li>
        <li :key="movie.release_year">{{ movie.release_year }}</li>
        <li :key="movie.recommendation">{{ movie.recommendation }}</li>
      </ul>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
