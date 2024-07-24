import { gql } from "graphql-request";

export const CommonWordingQuery = (language: string) => {
  return gql`
    query {
      headerBar {
        HowItWorks {
          text {${language}}
          link {${language}}
        }
        Contact {
          text {${language}}
          link {${language}}
        }
        MyRequest {
          text {${language}}
          link {${language}}
        }
        Disconnect{
          text {${language}}
          link {${language}}
        }
        languages {lang}
        showPopup
      }
      footerBar {
        SocialLinks{
          text {${language}}
          link {${language}}
        }
        copyright {${language}}
        LegalNotice {
          text {${language}}
          link {${language}}
        }
        CreateAccount {
          text {${language}}
          link {${language}}
        }
        BankCards {
          text {${language}}
          link {${language}}
        }
        GroupSites{
          title{${language}}
          groupSitesList{
            text{${language}}
            link{${language}}
          }
        }
      }
      cookies(limit: 50){
        name
        content_${language}
      }
      utilButtons{
          name
          content_${language}
      }
      popupalerts(limit: 50) {
        id,
        name,
        Title_${language}
      }
    }
  `;
};
