import { LandingPageQuery } from './queries/LandingPage';
import fs from 'node:fs';
import { MrePageQuery } from './queries/MrePage';
import { ParticularPageQuery } from './queries/ParticularPage';
import { StudentPageQuery } from './queries/StudentPage';
import { CreateAccountPageQuery } from './queries/CreateAccountPageQuery'
import MentionsLegalesPageQuery from "./queries/MentionsLegalesPage";
import {ContactDetailsVerificationQuery} from "./queries/ContactDetailsVerification";
import {PinnedOfferQuery} from "./queries/PinnedOfferQuery";
import { VerificationStepWordingQuery } from './queries/VerificationStepWordingQuery';
import {ContactPageQuery} from "./queries/ContactPage";
import OtherProductsWordingQuery from "./queries/OtherProducts";
import { ClientInfoStepQuery } from './queries/ClientInfoStepQuery';
import { BankCardsPageQuery } from './queries/BankCardsPage';
import {SeoOpenAccountQuery} from "./queries/SeoOpenAccountPage";
import {FAQPageQuery} from "./queries/FAQPageQuery";
import ConventionWordingQuery from "./queries/ConventionWordingQuery";
import {SatisfactionSurveyPageQuery} from "./queries/SatisfactionSurveyPage";
import { NotificationsQuery } from './queries/NotificationsQuery';
import {WelcomePageQuery} from "./queries/WelcomePageQuery";
import {MySpacePageQuery} from "./queries/MySpacePageQuery";
import {DistributionPaymentQuery} from "./queries/DistributionPaymentQuery";
import {packImagesQuery} from "./queries/PackImagesQuery";
import {PaysListQuery} from "./queries/PaysListQuery";
import {AgencyListQuery} from "./queries/AgencyListQuery";
import {exportWording, useWordingQueryOrDefault} from "./utils/wording";

const config = JSON.parse(fs.readFileSync('config.json', 'utf-8'));

const queriesMap = {
  LandingPageQuery,
  MrePageQuery,
  ParticularPageQuery,
  StudentPageQuery,
  CreateAccountPageQuery,
  ContactDetailsVerificationQuery,
  MentionsLegalesPageQuery,
  OtherProductsWordingQuery,
  PinnedOfferQuery,
  VerificationStepWordingQuery,
  ContactPageQuery,
  ClientInfoStepQuery,
  FAQPageQuery,
  BankCardsPageQuery,
  SeoOpenAccountQuery,
  ConventionWordingQuery,
  SatisfactionSurveyPageQuery,
  NotificationsQuery,
  WelcomePageQuery,
  MySpacePageQuery,
  DistributionPaymentQuery,
  packImagesQuery,
  PaysListQuery,
  AgencyListQuery
};



config.queries.forEach(async (queryConfig) => {
  const { mediaDir } = config;
  const languageIndependent = queryConfig.languageIndependent;
  if(languageIndependent) {
    exportWording(queriesMap, queryConfig ,'', languageIndependent, mediaDir)
  }
  else {
    config.languages.forEach((language) => {
    exportWording(queriesMap, queryConfig, language, languageIndependent, mediaDir)
  });
  }
});


