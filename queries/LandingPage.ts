import { gql } from 'graphql-request';

export const LandingPageQuery = (language: string = 'fr') => {
  return gql`
  {
    landingPage {
        HomeBanner{
          titlePart1{${language}}
          titlePart2{${language}}
          titlePart3{${language}}
          prefix{${language}}
          currency{${language}}
          price
        }
        Advantages{
      title{${language}}
      description{${language}}
      icon {
        alternativeText
        url
      }
    }blocVideo {
      title{${language}}
      description{${language}}
      videoId{
        text{${language}}
        link{${language}}
      }
    }
    timelineTitle{${language}}
    Experinces{
      title{${language}}
      ExperienceItem{
        ${language}
      }
    }
    ProfileTitle{${language}}
    profileList{
      text{${language}}
      link{${language}}
    }
    timeline{
      steps{
        title{${language}}
        description{${language}}
        advantages{${language}}
      }
      subscriptionButtonText{${language}}
    }
    Contacts{
    callToAction{
      text{${language}}
      link{${language}}
      icon {
        alternativeText
        url
      }
      backgroundIcon {
        alternativeText
        url
      }
    }
    text{${language}}
  }
    }
  }
`;
};
