import {gql} from "graphql-request";

export const AgencyListQuery = () => {
    return gql`
  query {
    agencyLists {
      allAgencies {
        CFR
        DENOMINATION
        ADRESSE
        X
        Y
        city
      }
    }
  }
`;
}