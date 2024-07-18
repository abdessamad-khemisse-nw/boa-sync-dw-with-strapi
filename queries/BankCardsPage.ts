import { gql } from "graphql-request";
import { DEFAULT_LANG } from "../utils/constants";

export const BankCardsPageQuery = (language: string = DEFAULT_LANG) => {
  return gql`
    query {
      bankCardsPage {
        CardsBanner {
          title {${language}}
          description {${language}}
        }
        CardsList {
          title {${language}}
          subTitle {${language}}
          BankCards {
            title {${language}}
            text {${language}}
          }
        }
        CardsAdvantages {
          text {${language}}
          list {
            description {${language}}
          }
        }
        CardsOffer {
          profils {
            type {${language}}
          }
          buttonText {${language}}
        }
      }
    }
  `;
};