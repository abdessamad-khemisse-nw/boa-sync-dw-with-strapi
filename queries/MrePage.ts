import { gql } from 'graphql-request';

export const MrePageQuery = (language: string = 'fr') => {
  return gql`
  {
    mrePage {
    
    personalizedPackSteps {
    
    ControlledList {
    UseConditionsLink {
        ${language}
    }
    
     }
    }
    
    }
    
  }
`;
};
