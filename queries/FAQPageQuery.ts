import {gql} from 'graphql-request';
import {DEFAULT_LANG} from "../utils/constants";

export const FAQPageQuery = (langage: any = DEFAULT_LANG) => {
    return gql`
        query{pagefaqs(limit: 50){id, Nom, Content_${langage}, Description_${langage}}}
    `;
};
