import { createApp, provide, h } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { ApolloClient, InMemoryCache } from '@apollo/client/core'

import App from './App.vue'
import router from './router'
import { utils } from './utils'

import './assets/main.css'


const cacheConfig = {
  typePolicies: {
    Film: {
      fields: {
        releaseDate: {
          read(releaseDate: string): string {
            const date = new Date(releaseDate);
            return `${date.getDate()} / ${date.getMonth() + 1} / ${date.getFullYear()}`;
          }
        },
        episodeIdNumeral: {
          read(_value: string, cache) {
            const episodeId: number = cache.readField('episodeID')
            return utils.romanise(episodeId)
          },  
        },
      },
    },
  },
};
const cache = new InMemoryCache(cacheConfig)
const apolloClient = new ApolloClient({
  cache,
  uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
})

const app = createApp({
  setup () {
    provide(DefaultApolloClient, apolloClient)
  },

  render: () => h(App),
})

app.use(router)

app.mount('#app')
