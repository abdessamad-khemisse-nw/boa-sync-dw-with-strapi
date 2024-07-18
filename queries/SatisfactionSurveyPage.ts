import { gql } from "graphql-request";
import {DEFAULT_LANG} from "../utils/constants";

export const SatisfactionSurveyPageQuery = (
    language: string = DEFAULT_LANG
) => {
  return gql`
    query {
      satisfactionSurveyPage {
        title {${language}}
        satisfied {${language}}
        dissatisfied {${language}}
        complicated {${language}}
        simple  {${language}}
        QuestionResponse {
          questionTitle {${language}}
          questionIdentifier
          responseType
          response {
            responseItem {${language}}
            responseIdentifier
          }
        }
        sendButton {${language}}
        suggestionErrorMessage {${language}}
        surveySentSuccessMessage {${language}}
      }
    }
  `;
};
