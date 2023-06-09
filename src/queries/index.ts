import gql from 'graphql-tag';

const listFilms = gql`
  query AllFilms {
    allFilms {
      films {
        title
        episodeID
        releaseDate
      }
    }
  }
`;

const filmDetail = gql`
  query FilmDetail($filmId: ID) {
    film(filmID: $filmId) {
      title
      episodeID
      director
      producers
      releaseDate
      openingCrawl
      characterConnection {
        totalCount
        characters {
          name
          species {
            name
          }
        }
      }
    }
  }
`;

export const queries = {
  filmDetail,
  listFilms,
};