import {gql} from '@apollo/client';

export const ITEMS_QUERY = gql`
  {
    items {
      id
      title
      image
      author
      content
      category {
        id
        title
      }
    }
  }
`;

export const CATEGORIES_QUERY = gql`
  {
    categories @client {
      id
      title
    }
  }
`;
