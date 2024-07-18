import {DEFAULT_LANG} from "../utils/constants";
import {gql} from "graphql-request";

export const MySpacePageQuery = (language: any = DEFAULT_LANG) => {
    return gql`
    query{
      espacePersonnels{
        hello_${language}
        welcome_text_${language}
        title_bloc_${language}
        convention_title_${language}
        convention_download_text_${language}
        activated_on_text_${language}
        title_packs{${language}}
        title_cards{${language}}
        title_services{${language}}
        tab_offer{${language}}
        tab_documents{${language}}
        ribTitle{${language}}
        ribSubTitle{${language}}
        offersBlocTitle{${language}}
        step1{${language}}
        step2{${language}}
        step3_pending{${language}}
        step3_tobesigned{${language}}
        step3_signed{${language}}
        bannerTitle{${language}}
      }
      ${getOffersPageWording(language)}
      ${getDocumentsBlockWording(language)}
      otpElectronicSignaturePopup(id: 1) {
        titlePhone {${language}}
        titleEmail {${language}}
        subTitle {${language}}
        retryLabel {${language}}
        retryAction {${language}}
        switchLabelPhone {${language}}
        switchLabelEmail {${language}}
        switchAction {${language}}
        submitBtn {${language}}
      }
    }`;
};

const getOffersPageWording = (language) => {
    return `
    offerPages {
      packs{
        code
        title_${language}
        tarifs_${language}
        Advantages{content_${language} }
        accounts_to_endorse{content_${language} }
      }
      accounts{
        label_${language}
        tarifs_${language}
        Code
      }
      bank_card_list{
        label_${language}
        tarifs_${language}
        attachement_${language}{url}
      }
      product_and_service_list{
        label_${language}
        description_${language}
        Code
      }
    }
    ${getProfilesWording(language)}
    cardDescriptions{
      code
      title{${language}}
      description{${language}}
    }
    `;
};

const getProfilesWording = (language) => {
    return `
  profils{
      TitreProfil
      offresprofil {
        id
        Titre_${language}
        packs(sort: "id:asc") {
          id
          Titre_${language}
          Tarification_${language}
          tarification_short_${language}
          ButtonText_${language}
          code
          avantagesparpacks {
            id
            Description_${language}
          }
        }
      }
    }
  `;
};

const getDocumentsBlockWording = (language) => {
    return `
      myContractsBlock(id: 1) {
        title {${language}}
        readyToBeSignedTitle {${language}}
        readyToBeSignedBtnText {${language}}
        signContractsTitle {${language}}
        signContractsBtnText {${language}}
        downloadSignedContractsTitle {${language}}
        signedContractsNotYetSavedTitle {${language}}
        downloadSignedContractsBtnText {${language}}
        checkboxTitle {${language}}
        checkboxHelperText {${language}}
      }
      myAdditionalDocument(id: 1) {
        title {${language}}
        description {${language}}
        additionalDescription {${language}}
        downloadText {${language}}
        w9Text {${language}}
        w9File {${language}{url}}
        w8Text {${language}}
        w8File {${language}{url}}
        fileBlockTitle {${language}}
        fileBlockDescription {${language}}
        buttonText {${language}}
      }
  `;
};