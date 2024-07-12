import { gql } from 'graphql-request';
import {DEFAULT_LANG} from "../utils/constants";
export const PinnedOfferQuery = (langage: any = DEFAULT_LANG) => {
  return gql`
  query{
    pinnedOffers(limit: 50){id,
    name,
    identifier
    offerTitle_${langage}
    offerSubTitle_${langage}
    Advantage_${langage}
    AdvantageTitle_${langage}
    ,
    }
    offerPages {
      packs{
        accounts_to_endorse{content_${langage} }
      }
    }
  }
  `;
};