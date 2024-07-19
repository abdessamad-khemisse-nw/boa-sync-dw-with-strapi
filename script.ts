import { LandingPageQuery } from './queries/LandingPage';
import fs from 'node:fs';
import { useWordingQueryOrDefault } from './utils/wording';
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
  ConventionWordingQuery,
  SatisfactionSurveyPageQuery,
  NotificationsQuery,
  WelcomePageQuery,
  MySpacePageQuery,
  DistributionPaymentQuery
};



config.queries.forEach((queryConfig) => {
  const queryName = queryConfig.queryName;
  const exportName = queryConfig.exportName;
  const queryPath = queryConfig.path;

  config.languages.forEach((language) => {
    useWordingQueryOrDefault(
      queriesMap[queryName](language),
      language,
      config.mediaDir
    ).then((data) => {
      const filePath = `${queryPath}/${language}.ts`;
      const fileContent = `export const ${exportName}${language.toUpperCase()} = ${JSON.stringify(data)}`;
      fs.mkdirSync(queryPath, { recursive: true });

      fs.writeFile(filePath, fileContent, (err) => {
        if (err) {
          console.log('Writing Query Error : ' + err);
        }
      });
    });
  });
});
