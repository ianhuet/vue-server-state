<script setup lang="ts">
import type { PropType } from 'vue';
import { RouterLink } from 'vue-router'

interface Film {
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

const props = defineProps({
  films: Array as PropType<Film[]>,
});

console.log('Films ***', props.films)
</script>

<template>
  <table>
    <thead>
      <tr>
        <td>Episode</td>
        <td>Title</td>
        <td>Release Date</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="film in films" :key="film.episodeID">
        <td>{{ film.episodeID }}</td>
        <td>{{ film.title }}</td>
        <td>{{ film.releaseDate }}</td>
        <td><RouterLink :to="{ name: 'detail', params: { id: film.episodeID }}">Detail</RouterLink></td>
      </tr>
    </tbody>
  </table>
</template>
