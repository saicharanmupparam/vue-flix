<template>
    <div class="wrapper">
        <v-carousel hide-delimiters>
            <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" cover></v-carousel-item>
        </v-carousel>
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
</template>

<script setup lang="ts">
import type { Movies } from '@/interfaces';
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient'

const countries = ref([])
const movies = ref<Movies[]>([])
const items = [
    {
        src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
    },
    {
        src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
    },
    {
        src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
    },
    {
        src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
    },
]

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
<style scoped>
.wrapper {
    height: calc(100% - 80px);
}
</style>