import {gql} from "graphql-request";

export const packImagesQuery= () => {
        return gql`
    query {
      packImages(limit: 50) {
        packImage {
          packIdentifier
          image {
            url
          }
        }
      }
    }
  `;
};