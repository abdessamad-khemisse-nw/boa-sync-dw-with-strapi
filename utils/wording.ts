import { client } from './graphql';
import fs from 'node:fs';
import path from 'path';
import axios from 'axios';

// @ts-ignore
export const extractWordingData = (data: any, lang: string = 'fr') => {
  if (!data) return data;

  if (
    data[lang] &&
    typeof data[lang] === 'string' &&
    data[lang].includes('/adfiles/uploads')
  ) {
    const docPath = data[lang].replace('/adfiles', '');
    const docUrl = 'http://localhost:1331' + docPath;
    saveMedia(
      docUrl,
      '../project-boa-agencedirecte-frontoffice/public/backups'
    );
    return data[lang].replace('/adfiles/uploads', '/backups');
  }

  if (data.url) {
    const imageUrl = 'http://localhost:1331' + data.url;
    saveMedia(
      imageUrl,
      '../project-boa-agencedirecte-frontoffice/public/backups'
    );

    const updatedUrl = data.url.replace('/uploads', '/backups');
    const object = { url: updatedUrl, alternativeText: data.alternativeText };
    return object;
  }

  if (Array.isArray(data)) {
    // @ts-ignore
    return data.map((element) => extractWordingData(element, lang));
  }

  if (typeof data === 'object') {
    if (data.hasOwnProperty(lang)) return data[lang];

    const extractedWording = {};
    Object.keys(data).forEach((key) => {
      // @ts-ignore
      extractedWording[key] = extractWordingData(data[key], lang) ?? undefined;
      if (typeof data[key] === 'string') {
        console.log('yes');
      }
    });
    return extractedWording;
  }

  return data;
};
export const useWordingQueryOrDefault = async <TData>(
  query: string,
  language: string
) => {
  const result = await client.request(query);
  const data = result;
  return extractWordingData(data, language) as TData;
};

async function saveMedia(url, directory) {
  const filename = path.basename(url);

  const filePath = path.join(directory, filename);

  fs.mkdirSync(directory, { recursive: true });

  try {
    const response = await axios({
      url,
      method: 'GET',
      responseType: 'stream'
    });

    const writer = fs.createWriteStream(filePath);

    response.data.pipe(writer);

    return new Promise((resolve, reject) => {
      writer.on('finish', resolve);
      writer.on('error', reject);
    });
  } catch (error) {
    console.error(`Failed to download image: ${error.message}`);
    throw error;
  }
}
