import { gql } from '../generated/gql';

const filmDetail = gql(`
  query FilmDetail($id: ID) {
    film(id: $id) {
      openingCrawl
      ...FilmMeta
      ...FilmPlanets
      ...FilmProduction
      ...FilmCharacters
    }
  }
`);

const listFilms = gql(`
  query AllFilms {
    allFilms {
      films {
        ...FilmMeta
      }
    }
  }
`);

export const queries = {
  filmDetail,
  listFilms,
};
