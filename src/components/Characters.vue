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
    <h3>Characters</h3>
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
.characters h3 {
  border-bottom: 1px solid grey;
  font-size: 11px;
  margin-bottom: 0.6rem;
  padding-bottom: 0.2rem;
  text-transform: uppercase;  
}
.characters ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
</style>