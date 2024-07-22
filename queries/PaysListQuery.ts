import {gql} from "graphql-request";

export const PaysListQuery = () => { return gql`
  query {
    paysLists {
      allPays {
        name
        code
      }
    }
  }
`;
}