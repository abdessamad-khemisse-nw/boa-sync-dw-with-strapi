import {DEFAULT_LANG} from "../utils/constants";
import {gql} from "graphql-request";

export const WelcomePageQuery = (
    lang: string = DEFAULT_LANG
) => gql`
  query {
    bienvenus {
      name
      clientPath
      clientProfile
      content {
        ${lang}
      }
    }
  }
`;