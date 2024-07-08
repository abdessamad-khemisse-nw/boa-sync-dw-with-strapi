import { gql } from 'graphql-request';


export const CreateAccountPageQuery = (lang: string) => {
  return gql`
    query {
      createAccountPage(id: 1) {
        pageTitle {
          ${lang}
        },
        steps {
          stringId,
          stepTitle {
            ${lang}
          },
          stepSubTitle {
            ${lang}
          }
        },
      },
      attachmentsSelfieSubStep(id: 1) {
        title {
          ${lang}
        }
        subTitle {
          ${lang}
        }
        nextButtonText {
          ${lang}
        }
        faceSideButtonText {
          ${lang}
        }
        backSideButtonText {
          ${lang}
        }
        takeSelfieButtonText {
          ${lang}
        }
        uploadFileButtonText {
          ${lang}
        }
        selectFileButtonText {
          ${lang}
        }
        takePictureButtonText {
          ${lang}
        }
        blocksContent {
          profile
          cinBlockTitle {
            ${lang}
          }
          dgsnBlockTitle {
            ${lang}
          }
          dgsnSuccessSignInTitle {
            ${lang}
          }
          dgsnQuestion {
            ${lang}
          }
          dgsnHelperText {
            ${lang}
          }
          dgsnYesResponse {
            ${lang}
          }
          dgsnNoResponse {
            ${lang}
          }
          cinBlockInfo {
            ${lang}
          }
          selfieBlockTitle {
            ${lang}
          }
          selfieBlockInfo {
            ${lang}
          }
          residenceBlockTitle {
            ${lang}
          }
          residenceBlockInfo {
            ${lang}
          }
          addressProofBlockTitle {
            ${lang}
          }
          addressProofBlockInfo {
            ${lang}
          }
          addressProofBlockTooltip {
            ${lang}
          }
          complementaryAttachmentsQuestion {
            ${lang}
          }
          complementaryAttachmentsPreLink {
            ${lang}
          }
          complementaryAttachmentsLink {
            ${lang}
          }
          complementaryAttachmentsPostLink {
            ${lang}
          }
          complementaryAttachmentsDescription {
            ${lang}
          }
          complementaryAttachmentsYesAnswer {
            ${lang}
          }
          complementaryAttachmentsNoAnswer {
            ${lang}
          }
          mreDeleteFileTooltipText {
            ${lang}
          }
          mreComplementaryFilesBlocTitle {
            ${lang}
          }
          mreComplementaryFilesBlocInfo {
            ${lang}
          }
          mreComplementaryFilesTitle {
            ${lang}
          }
          tuitionProofTooltipText {
            ${lang}
          }
          tuitionBlockTitle {
            ${lang}
          },
          tuitionBlockInfo {
            ${lang}
          },
          tuitionAttachmentsPreLink {
            ${lang}
          },
          tuitionAttachmentsPostLink {
            ${lang}
          },
          canSkipUploadInfo {
            ${lang}
          }
          cinTooltipText {
            ${lang}
          }
        }
      }
      residenceDocuments {
        stringId,
        documentName {
          ${lang}
        },
        documentInfo {
          ${lang}
        },
      },
      captureAttachmentPopups {
        stringId,
        title {
          ${lang}
        },
        description {
          ${lang}
        },
        buttonText {
          ${lang}
        },
      },
      cameraPopup(id: 1) {
        title {
          ${lang}
        },
        deactivatedCameraText {
          ${lang}
        },
        buttonText {
          ${lang}
        },
      },
      fileErrors {
        type
        message {
          ${lang}
        }
      },
      emailFormSubStep(id: 1) {
        title {
          ${lang}
        }
        subTitle {
          ${lang}
        }
        emailHelperText {
          ${lang}
        }
        emailTooltipText {
          ${lang}
        }
        confirmEmailHelperText {
          ${lang}
        }
        emailLabel {
          ${lang}
        }
        confirmEmailLabel {
          ${lang}
        }
        nextButtonText {
          ${lang}
        }
      },
      videoConfStep(id: 1) {
        nextButtonText {
          ${lang}
        }
        continueButtonText {
          ${lang}
        }
        titleOCR {
          ${lang}
        }
        titleClassique {
          ${lang}
        }
        subTitle {
          ${lang}
        }
        checkBoxVisioText {
          ${lang}
        }
      }
      changeClientPathPopup(id: 1) {
        cinTitle {
          ${lang}
        }
        cinDescription {
          ${lang}
        }
        selfieTitle {
          ${lang}
        }
        selfieDescription {
          ${lang}
        }
        retryButtonText {
          ${lang}
        }
        classicPathButtonText {
          ${lang}
        }
      }
      switchToClassicPathItem(id:1){
        descriptionDialog{
          ${lang}
        }
        switchPathButton{
          ${lang}
        }
        title{
          ${lang}
        }
        titleDialog{
          ${lang}
        }
        subTitle{
          ${lang}
        }
        cancelButton{
          ${lang}
        }

      }
      switchToDigitalPathItem(id:1){
        descriptionDialog{
          ${lang}
        }
        switchPathButton{
          ${lang}
        }
        title{
          ${lang}
        }
        titleDialog{
          ${lang}
        }
      }
      attachmentPreview(id:1){
        captureValidationButtonText{
          ${lang}
        }
        captureRetryButtonText{
          ${lang}
        }
        uploadRetryButtonText{
          ${lang}
        }
        uploadValidationButtonText{
          ${lang}
        }
      }
    }
  `;
};

export const UPDATE_FORM_RDV = gql`
  mutation UpdateFormRDV(
    $form_id: ID!
    $form_visio_time: String
    $form_visio_status: String
  ) {
    UpdateFormRDV(
      form_id: $form_id
      form_visio_time: $form_visio_time
      form_visio_status: $form_visio_status
    ) {
      form_id
    }
  }
`;

export const GetContactDetailsVerification = (lang, id) => {
  return gql`
  query {
    contactDetailsVerification(id: ${id}){
    stepTitle{ ${lang}}
    subStepTitle{ ${lang}}
    verificationDescription{ ${lang}}
    inputDetailLabel{ ${lang}}
    verificationSubmitButton{ ${lang}}
    otpDescription{ ${lang}}
    enterOtpText{ ${lang}}
    receiveOtpQuestion{ ${lang}}
    resendOtpText{ ${lang}}
    verificationDetailQestion{ ${lang}}
    resetVerificationDetailsText{ ${lang}}
    submitOtpButton{ ${lang}}
    inputErrorMessage {${lang}}
  }}`;
};
