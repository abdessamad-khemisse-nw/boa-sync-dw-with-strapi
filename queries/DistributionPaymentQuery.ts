import {DEFAULT_LANG} from "../utils/constants";
import {gql} from "graphql-request";

export const DistributionPaymentQuery = (
    lang: string = DEFAULT_LANG
) => gql`
    query {
      distributionPayment(id: 1) {
        title {
          ${lang}
        },
        subTitle {
          ${lang}
        },
      }
    }`;