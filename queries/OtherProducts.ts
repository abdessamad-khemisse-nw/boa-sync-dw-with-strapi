import { gql } from 'graphql-request';

const OtherProductsWordingQuery = (lang: string) => {
    return gql`
      query {
        otherProduct{
        title {
            ${lang}
        }
        product {
            title {
                ${lang}
            }
            description {
                ${lang}
            }
            callToAction {
                ${lang}
            }
            actionLink
        }
    }
    }
  `;
};

export default OtherProductsWordingQuery;