import { gql } from "graphql-request";

export const ProfessionalPageQuery = (language: string = "fr") => {
  return gql`
    {
        professionalPage {
          professionalBanner {
            title {
              ${language}
              
            }
            description {
              ${language}
              
            }
            price
            currency {
              ${language}
              
            }
            duration {
              ${language}
              
            }
            
          }
          timelineTitle {
            ${language}
            
          }
          timeline {
            steps {
              title {
                ${language}
                
              }
              description {
                ${language}
                
              }
              advantages {
                ${language}
                
              }
              
            }
            subscriptionButtonText {
              ${language}
              
            }
            
          }
          defaultOfferPack
          offers {
            Pack {
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
              
            }
            PackDescription {
              PackCard {
                alternativeText
                url
                
              }
              PackFees {
                name
                
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
              specialFees {
                ${language}
                
              }
              
            }
            PackServices {
              serviceTitle {
                ${language}
                
              }
              serviceDescription {
                ${language}
                
              }
              
            }
            OtherServices {
              description {
                ${language}
                
              }
              serviceIcon {
                alternativeText
                url
                
              }
              
            }
            OtherServicesTitle {
              ${language}
              
            }
            PackServicesTitle {
              ${language}
              
            }
            PackServicesDescription {
              ${language}
              
            }
            PackIdentifier
            ShowMoreButton {
              ${language}
              
            }
            ShowLessButton {
              ${language}
              
            }
            Profile
            
          }
          
        }
      }
      
    
    
    `;
};
