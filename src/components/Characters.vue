<script setup lang="ts">
import type { PropType } from 'vue';

interface Character {
  name: string;
  species: string;
}

defineProps({ characters: Array as PropType<Character[]> });
</script>

<template>
  <div class="characters">
    <ul>
      <li v-for="character in characters" :key="character.name">{{ character.name }} ({{ character.species }})</li>
    </ul>
  </div>
</template>

<style scoped>
.characters {
  background-color: lightgrey;
  color: black;
  margin-top: 1rem;
  padding: 1rem;
}
.characters ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
</style>