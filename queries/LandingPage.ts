import {gql} from "graphql-request";


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
    }
  }
`;
};