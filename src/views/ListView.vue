<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable';
import { computed } from 'vue';

import FilmList from '../components/FilmList.vue';
import type { Film } from '../generated/graphql'
import { queries } from '../queries';
import { utils } from '../utils';

const { result, loading, error } = useQuery(queries.listFilms);

const films = computed((): Film[] => {
  const films = result?.value?.allFilms?.films ?? [];
  const filmsSortedByEpisodeId = utils.sortObjArray<Film>(films, 'episodeID');
  return filmsSortedByEpisodeId;
})
</script>

<template>
  <main>
    <p v-if="error">Something went wrong...</p>
    <p v-if="loading">Loading...</p>
    <FilmList v-else :films="films" />
  </main>
</template>
