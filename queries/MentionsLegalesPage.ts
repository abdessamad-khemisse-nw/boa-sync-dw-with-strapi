import { gql } from 'graphql-request';
import {DEFAULT_LANG} from "../utils/constants";

const MentionsLegalesPageQuery = (langage: any = DEFAULT_LANG) => {
    return gql`
  query{
    mentionslegales(limit: 50){id, Nom, Content_${langage}}
    footers{
      mentionsLegales {
        ${langage}
      }
    }
  }
    `;
};
export default MentionsLegalesPageQuery;