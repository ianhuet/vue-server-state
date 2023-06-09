import gql from 'graphql-tag';

const listFilms = gql`
  query AllFilms {
    allFilms {
      films {
        id
        title
        episodeID
        releaseDate
      }
    }
  }
`;

const filmDetail = gql`
  query FilmDetail($id: ID) {
    film(id: $id) {
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