import { GraphQLClient, gql } from 'graphql-request';
import {LandingPageQuery} from "./queries/LandingPage";
import fs from 'node:fs'
import {useWordingQueryOrDefault} from "./utils/wording";




    ['en', 'fr', 'es', 'ar', 'it', 'nl', 'de'].map(language => useWordingQueryOrDefault(LandingPageQuery(language),language).then(data => {
        fs.writeFile(`out/${language}.ts`, `export const wording = ${JSON.stringify(data)}` , (err) => {
            if (err) {
                console.log("Writing Query Error : " + err);
            }
        });
        })
    )

