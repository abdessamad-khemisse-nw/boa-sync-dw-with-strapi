# AD wordings generator

## Description
ADWG is a script and a set of strapi queries that are built to facilitate and automatize the process of wordings integration.

## Features 
- Generate wordings based on the strapi content
- Fetches static files for backups

## How to use
- run `npm install`

To integrate a new query you can follow the following steps
- Add the query to queries folder (try to have the same query from the frontoffice)
- Add a json object to config.json where you define the following : 
```
{
  "queryName": "MrePageQuery",
  "exportName": "MREPage",
  "path": "out/MrePage"
},

queryName   : is the name of the query from the front office 
exportName  : is the name that will be used in the generated translation files 
path        : is the destination of the wordings
```

- In the `queryMap` in the file `script.ts` Import and add the integrated query

Then you can run the script by typing the following command : 
```
npm run launch
```
- Check if the wordings are generated in the out directory

## Nice to have
To facilitate the process more and make it 10X effective, try to add the project script in the same directory as your frontoffice app, and you can change the path from the config to your destination from the front office 
Ex : 

for MRE you can add `path: '../project-boa-agencedirecte-frontoffice/src/pages/morrocan-abroad/wordings/'`
And this change will automatically include the wordings to the exact destination

And voila 

[Thank you for contributing to this impactful migration] 😀
