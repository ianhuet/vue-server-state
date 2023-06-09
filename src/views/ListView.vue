<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable'

import FilmList from '../components/FilmList.vue'
import { queries } from '../queries'

const { result, loading, error } = useQuery(queries.listFilms);
</script>

<template>
  <main>
    <p v-if="error">Something went wrong...</p>
    <p v-if="loading">Loading...</p>
    <FilmList v-else :films="result.allFilms.films" />
  </main>
</template>
