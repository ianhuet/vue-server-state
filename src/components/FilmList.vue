<script setup lang="ts">
import type { PropType } from 'vue';
import { RouterLink } from 'vue-router'

import type { Film } from '../generated/graphql'

const props = defineProps({ films: Array as PropType<Film[]> });

const hasNoFilms = () => !props.films || props.films?.length === 0;
</script>

<template>
  <p v-if="hasNoFilms()">No films found</p>

  <table v-else class="film-list">
    <thead>
      <tr>
        <td>Episode</td>
        <td>Title</td>
        <td>Release Date</td>
        <td></td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="film in films" :key="film?.episodeID">
        <td>{{ film?.episodeIdNumeral }}</td>
        <td>{{ film?.title }}</td>
        <td>{{ film?.releaseDate }}</td>
        <td><RouterLink :to="{ name: 'detail', params: { id: film?.id }}">Detail</RouterLink></td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
.film-list {
  width: 100%;
}
.film-list thead tr td {
  border-bottom: 1px solid lightgrey;
}
.film-list tbody tr td {
  padding: 0.4rem 0;
}
</style>
