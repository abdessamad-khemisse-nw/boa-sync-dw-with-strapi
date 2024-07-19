import { gql } from 'graphql-request';
import {DEFAULT_LANG} from "../utils/constants";
export const NotificationsQuery = (langage: any = DEFAULT_LANG) => {
  return gql`
  query {
    notifications {
        name
        message_${langage}
    }
  }`
};