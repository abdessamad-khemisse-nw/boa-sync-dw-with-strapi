import { GraphQLClient, gql } from 'graphql-request';
import { LandingPageQuery } from './queries/LandingPage';
import fs from 'node:fs';
import { useWordingQueryOrDefault } from './utils/wording';
// import { MrePageQuery } from './queries/MrePage';

['en', 'fr', 'es', 'ar', 'it', 'nl', 'de'].map((language) =>
  useWordingQueryOrDefault(LandingPageQuery(language), language).then(
    (data) => {
      fs.writeFile(
        `out/${language}.ts`,
        `export const LandingPage${language.toUpperCase()} = ${JSON.stringify(data)}`,
        (err) => {
          if (err) {
            console.log('Writing Query Error : ' + err);
          }
        }
      );
    }
  )
);

// ['en', 'fr', 'es', 'ar', 'it', 'nl', 'de'].map((language) =>
//   useWordingQueryOrDefault(MrePageQuery(language), language).then((data) => {
//     fs.writeFile(
//       `out/MrePage${language}.ts`,
//       `export const MrePage${language.toUpperCase()} = ${JSON.stringify(data)}`,
//       (err) => {
//         if (err) {
//           console.log('Writing Query Error : ' + err);
//         }
//       }
//     );
//   })
// );
