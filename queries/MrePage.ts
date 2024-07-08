import { gql } from 'graphql-request';
import { DEFAULT_LANG } from '../utils/constants';

export const MrePageQuery = (language: string = DEFAULT_LANG) => {
  return gql`
    query {
      mrePage {
        ${MreBannerQuery(language)}
        ${TimelineTitleQuery(language)}
        ${TimelineQuery(language)}
        ${OffersQuery(language)}
        ${PersonalizedPackQuery(language)}
      }
    }
  `;
};

const MreBannerQuery = (language: string = DEFAULT_LANG) => {
  return `
    mreBanner{
      title{${language}}
      description{${language}}
      price
      currency{${language}}
      duration{${language}}
    }
  `;
};

const TimelineTitleQuery = (language: string = DEFAULT_LANG) => {
  return `
    timelineTitle{
      ${language}
    }
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
    defaultOfferPack
    offers{
      ${PackQuery(language)}
      ${PackDescriptionQuery(language)}
      ${PackServicesQuery(language)}
      ${OtherServicesQuery(language)}
      OtherServicesTitle{${language}}
      PackServicesTitle{${language}}
      PackIdentifier
      ShowMoreButton{${language}}
      ShowLessButton{${language}}
      Profile
      PackServicesDescription{${language}}
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

const PersonalizedPackQuery = (language: string = DEFAULT_LANG) => {
  return `
    personalizedPackTitle{${language}}
    ${StepsQuery(language)}
  `;
};

const StepsQuery = (language: string = DEFAULT_LANG) =>
  `personalizedPackSteps {
    StepTitle {
      ${language}
    }
    NextButton {
      ${language}
    }
    BackButton {
      ${language}
    }
    ${ControlledListQuery(language)}
    ${PacksListQuery(language)}
  }`;

const ControlledListQuery = (language: string = DEFAULT_LANG) =>
  `ControlledList {
    Title {
      ${language}
    }
    Subtitle {
      ${language}
    }
    InformativeText {
        ${language}
    }
    CardDeliveryText {
      ${language}
    }
    CardDeliveryRate {
        ${language}
    }
    CardDeliveryInfoText {
        ${language}
    }
    UseConditionsText {
      ${language}
    }
    UseConditionsLink {
        ${language}
    }
    AllowMultiple
    ${ControlledListItemsQuery(language)}
    isCardList
    isOptional
    showLessText {
        ${language}
    }
    showMoreText {
        ${language}
    }

  }`;

const ControlledListItemsQuery = (language: string = DEFAULT_LANG) =>
  `ControlledListItems {

    itemId {
      ${language}
    }
    type {
      ${language}
    }
    Title {
      ${language}
    }
    Description {
      ${language}
    }
    Image{
        url
        alternativeText
    }
    CardInfoBulle {
      ${language}
    }
    SideText {
        ${language}
    }
    requireCGU
    CardDeliveryInfoText {
        ${language}
    }
  }`;

const PacksListQuery = (language: string = DEFAULT_LANG) =>
  `packsList{
    identifier
    title {
      ${language}
    }
    description {
      ${language}
    }
    image{
      url
    }
  }`;
