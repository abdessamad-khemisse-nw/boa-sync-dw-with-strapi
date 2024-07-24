import { gql } from "graphql-request";

export const ClientInfoStepQuery = (lang: string) => {
    return gql`
      query {
        electronicSignatureGeneralCondition(id:1) {
          label {
            ${lang}
          }
          cgFile {
            ${lang} {
              url
            }
          }
          linkFileText {
            ${lang}
          }
        }
        oldClientPopup(id: 1){
          title {
            ${lang}
          }
          description {
            ${lang}
          }
          buttonText {
            ${lang}
          }
        }
        kycTerms {
          title {
            ${lang}
          }
          body {
            ${lang}
          }
        }
        mentionslegales(limit: 50){id, Nom, Content_${lang}}
        footers{
          mentionsLegales {
            ${lang}
          }
        }
        utilButtons(limit: 50){
          name,
          content_${lang}
        }
        formulaires(limit: 100) {
          name
          label_${lang}
          errorMsg_${lang}
          helperText_${lang}
        }
        professionsLists {
          AllProfessions {
            label{
              ${lang} 
            }
            value
          }
        }
        legalStatusLists {
          AllLegalStatus {
            label{
              ${lang}
            }
            value
          }
        }
        guideMobilityBank(id: 1) {
          guideMobilityFile {
            ${lang} {
              name
              url
            }
          }
        }
        myDocument(id: 4){
          title {
            ${lang}
          }
          btnText {
            ${lang}
          }
          description {
            ${lang}
          }
          fatcaFile {
            ${lang} {
              name
              url
            }
          }
        }
      }
    `;
  };