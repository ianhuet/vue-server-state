<script setup lang="ts">
import type { PropType } from 'vue';
import { RouterLink } from 'vue-router'

interface Film {
  id: string;
  title: string;
  episodeID: number;
  director: string;
  producers: string[];
  releaseDate: string;
  openingCrawl: string;
  characterConnection: {
    totalCount: number;
    characters: {
      name: string;
      species: {
        name: string;
      }
    }
  }
}

defineProps({ films: Array as PropType<Film[]> });
</script>

<template>
  <table class="film-list">
    <thead>
      <tr>
        <td>Episode</td>
        <td>Title</td>
        <td>Release Date</td>
        <td></td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="film in films" :key="film.episodeID">
        <td>{{ film.episodeID }}</td>
        <td>{{ film.title }}</td>
        <td>{{ film.releaseDate }}</td>
        <td><RouterLink :to="{ name: 'detail', params: { id: film.id }}">Detail</RouterLink></td>
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
