import { gql } from 'graphql-request';
import { DEFAULT_LANG } from '../utils/constants';

const getDgsnQuestionQuery = (lang: string = DEFAULT_LANG) => `dgsnQuestion {
          question {
            ${lang}
          }
          residenceCard {
            ${lang}
          }
          cinImage{
            url
            alternativeText
          }
          cin2Image{
            url
            alternativeText
          }
          cin1InformativeText{
            ${lang}
          }
          cin2InformativeText{
            ${lang}
          }
        }`;
export const VerificationStepWordingQuery = (lang: string = DEFAULT_LANG) => {
  return gql`
    query {
      verificationStep {
        description{
          ${lang}
        }
        verificationPaths {
          identifier
          title {
            ${lang}
          }
          description {
            ${lang}
          }
          button {
            text {
              ${lang}
            }
          }
          icon {
            url
            alternativeText
          }
        }
        ${getDgsnQuestionQuery(lang)}
      }
    }
  `;
};

export default VerificationStepWordingQuery;
