<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

import Characters from '../components/Characters.vue';
import Production from '../components/Production.vue';
import { queries } from '../queries';

const route = useRoute()
const queryVars = ref({ filmId: route.params.id });
const { result, loading, error } = useQuery(queries.filmDetail, queryVars);

const film = computed(() => result.value?.film ?? {})
</script>

<template>
  <div class="film">
    <p><RouterLink to="/">Back to List</RouterLink></p>

    <hr/>

    <p v-if="error">Something went wrong...</p>
    <p v-if="loading">Loading...</p>
    <div v-else>
      <h1>{{ film?.title }}</h1>
      <p>Episode #{{ $route.params.id }}</p>

      <div class="detail">
        <pre class="opening-crawl">{{ film?.openingCrawl }}</pre>
        <aside>
          <Production :production="film" />
          <Characters :characters="film" />
        </aside>
      </div>
    </div>

  </div>
</template>

<style scoped>
.detail {
  display: flex;
  flex-flow: row nowrap;
}
.opening-crawl {
  padding: 1rem 2rem 0 0;
}
</style>
