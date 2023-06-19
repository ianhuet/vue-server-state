<script setup lang="ts">
import { computed } from 'vue';
import type { PropType } from 'vue';
import type { Person } from '../generated/graphql';
import { utils } from '../utils';

const props = defineProps({ characters: Array as PropType<Person[]> });

const sortedCharacters = computed((): Person[] => {
  if (!props.characters) {
    return [];
  }

  return utils.sortObjArray<Person>(props.characters, 'name');
});

function characterLabel(character: Person): string {
  const species = character?.species?.name ? ` (${character.species.name})` : '';
  return `${character.name} ${species}`;
}
</script>

<template>
  <div class="characters">
    <h3>Characters</h3>
    <ul>
      <li v-for="(character, index) in sortedCharacters" :key="index">{{ characterLabel(character) }}</li>
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