<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import { default as CharactersPanel } from '../components/Characters.vue';
import { default as ProductionPanel } from '../components/Production.vue';
import type { Film, Person } from '../generated/graphql';
import { queries } from '../queries';
import type { Production } from '../queries/types';

const route = useRoute()
const filmId = typeof route.params.id === 'string' ? route.params.id : route.params.id[0];
const { result, loading, error } = useQuery(queries.filmDetail, { id: filmId });

const film = computed((): Film => result?.value?.film ?? {})
const characters = computed((): Person[] => {
  if (!result?.value?.film) {
    return [];
  }

  return result?.value.film?.characterConnection?.characters;
});
const production = computed((): Production => {
  if (!result?.value.film) {
    return {};
  }

  return {
    director: result.value.film.director,
    producers: result.value.film.producers,
    releaseDate: result.value.film.releaseDate,
  };
})
</script>

<template>
  <div class="film">
    <p><RouterLink to="/">Back to List</RouterLink></p>

    <hr/>

    <p v-if="error">Something went wrong...</p>
    <p v-if="loading">Loading...</p>
    <div v-else>
      <h1>{{ film?.title }}</h1>
      <p>Episode {{ film?.episodeIdNumeral }}</p>

      <div class="detail">
        <pre>{{ film?.openingCrawl }}</pre>
        <aside>
          <ProductionPanel :production="production" />
          <CharactersPanel :characters="characters" />
        </aside>
      </div>
    </div>

  </div>
</template>

<style scoped>
.detail {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding-top: 1rem;
}
</style>
