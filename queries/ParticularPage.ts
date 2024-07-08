import { gql } from 'graphql-request';
import {DEFAULT_LANG} from "../utils/constants";

export const ParticularPageQuery = (language: string = DEFAULT_LANG) => {
  return gql`
    {
      particularPage {
        ParticularBanner {
          title {${language}}
          description {${language}}
          currency {${language}}
          duration {${language}}
          price
        }
        timelineTitle {${language}}
        timeline {
          steps {
            title {${language}}
            description {${language}}
            advantages {${language}}
          }
          subscriptionButtonText {${language}}
        }
        defaultOfferPack
        offers {
          Pack {
            PackName {
              ${language}
            }
            PackFees {
              ${language}
            }
            SpecialPrice {
              ${language}
            }
            CardImage {
              alternativeText
              url
            }
            PackCorlor
          }
          PackDescription {
            PackCard {
              alternativeText
              url
            }
            PackFees {
              name
            }
            title {
              ${language}
            }
            fees {
              ${language}
            }
            description {
              ${language}
            }
            callToAction {
              ${language}
            }
            BackgroundColor
            specialFees {
              ${language}
            }
          }
          PackServices {
            serviceTitle {
              ${language}
            }
            serviceDescription {
              ${language}
            }
          }
          OtherServices {
            description {
              ${language}
            }
            serviceIcon {
              alternativeText
              url
            }
          }
          OtherServicesTitle {
            ${language}
          }
          PackServicesTitle {
            ${language}
          }
          PackServicesDescription {
            ${language}
          }
          PackIdentifier
          ShowMoreButton {
            ${language}
          }
          ShowLessButton {
            ${language}
          }
          Profile
        }
      }
    }
  `;
};
