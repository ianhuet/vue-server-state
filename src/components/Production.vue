<script setup lang="ts">
import type { PropType } from 'vue';

interface Production {
  director: string;
  producers: string[];
  releaseDate: string;
}

defineProps({ production: Object as PropType<Production> });
</script>

<template>
  <div class="production">
    <h3>Production</h3>
    <ul>
      <li>Release Date: {{ production?.releaseDate }}</li>
      <li>Director: {{ production?.director }}</li>
      <li>Producers:
        <ul>
          <li v-for="producer in production?.producers" :key="producer">{{ producer }}</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.production {
  background-color: lightgrey;
  color: black;
  padding: 1rem;
}
.production h3 {
  border-bottom: 1px solid grey;
  font-size: 11px;
  margin-bottom: 0.6rem;
  padding-bottom: 0.2rem;
  text-transform: uppercase;  
}
.production ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.production ul ul {
  padding-left: 0.4rem;
}
</style>