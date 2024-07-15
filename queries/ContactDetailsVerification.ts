import { gql } from 'graphql-request';

export const ContactDetailsVerificationQuery = (lang) => {
    return gql`
  query {
    contactDetailsVerifications{
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