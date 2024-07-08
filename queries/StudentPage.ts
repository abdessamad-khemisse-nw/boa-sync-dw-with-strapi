import { gql } from 'graphql-request';
import { DEFAULT_LANG } from '../utils/constants';

export const StudentPageQuery = (language: string = DEFAULT_LANG) => {
  return gql`
      query {
        studentPage {
            ${StudentBannerQuery(language)}
            ${TimelineTitleQuery(language)}
            ${TimelineQuery(language)}
            ${OffersQuery(language)}
        }
      }
    `;
};

const StudentBannerQuery = (language: string = DEFAULT_LANG) => {
  return `
    StudentBanner{
        title{${language}}
        description{${language}}
        price
        currency{${language}}
        prefix{${language}}
    }
  `;
};

const TimelineTitleQuery = (language: string = DEFAULT_LANG) => {
  return `
  timelineTitle{${language}}
  `;
};

const TimelineQuery = (language: string = DEFAULT_LANG) => {
  return `
    timeline{
      steps{
        title{${language}}
        description{${language}}
        advantages{${language}}
      }
      subscriptionButtonText{${language}}


    }
  `;
};

const OffersQuery = (language: string = DEFAULT_LANG) => {
  return `
    offers{
      ${PackQuery(language)}
      ${PackDescriptionQuery(language)}
      ${PackServicesQuery(language)}
      ${OtherServicesQuery(language)}
      OtherServicesTitle{${language}}
      PackServicesTitle{${language}}
      PackServicesDescription{${language}}
      PackIdentifier
      ShowMoreButton{${language}}
      ShowLessButton{${language}}
      Profile
    }
  `;
};

const PackQuery = (language: string = DEFAULT_LANG) =>
  `Pack {
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
  }`;

const PackDescriptionQuery = (language: string = DEFAULT_LANG) =>
  `PackDescription {
    PackCard {
      alternativeText
      url
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

  }`;

const PackServicesQuery = (language: string = DEFAULT_LANG) =>
  `PackServices {
    serviceTitle {
      ${language}
    }
    serviceDescription {
      ${language}
    }
  }`;
const OtherServicesQuery = (language: string = DEFAULT_LANG) =>
  `OtherServices {
    description {
      ${language}
    }
    serviceIcon {
      alternativeText
      url
    }
  }`;
