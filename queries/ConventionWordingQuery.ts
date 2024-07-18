import { gql } from 'graphql-request';
import { DEFAULT_LANG } from '../utils/constants';

const ConventionWordingQuery = (langage: string = DEFAULT_LANG) => {
    return gql`
      query {
      conventions {
        title_${langage}
        Sousignes_title_${langage}
        sousignes_${langage}
        client_title_${langage}
        client_infos{
            content_${langage}
        }
        confirmation_${langage}
        accept_cg_${langage}
        cgu_pages
        {
        Column1_${langage}
        Column2_${langage}
        }
        convention_signature{
          paraphe_${langage}
          signature_${langage}
          note_${langage}
          date_${langage}
        }
        and_text{
          ${langage}
        }
      }
    }`;
}

export default ConventionWordingQuery;
