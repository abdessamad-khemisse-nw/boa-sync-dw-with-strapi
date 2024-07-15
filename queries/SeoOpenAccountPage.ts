import {DEFAULT_LANG} from "../utils/constants";
import {gql} from "graphql-request";

export const SeoOpenAccountQuery = (language: string = DEFAULT_LANG) => {
    return gql`
    query {
      openAccountPage {
        bannerTitle {${language}}
        offerList {${language}}
        exclusivityTitle1 {${language}}
        exclusivityList {${language}}
        exclusivityTitle2 {${language}}
        exclusivityDescription {${language}}
        profileCardTitle {${language}}
        profileList {
          profileTitle {${language}}
          profileDescription {${language}}
        }
        benefitTitle1 {${language}}
        benefitDescription {${language}}
        benefitList {${language}}
        benefitTitle2 {${language}}
        benefitDescription2 {${language}}
        advantageTitle {${language}}
        advantageSubTitle {${language}}
        advantageList {${language}}
        timelineTitle {${language}}
        timelineSubTitle {${language}}
        timelineList {${language}}
      }
    }
  `;
};
