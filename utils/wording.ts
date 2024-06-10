import {client} from "./graphql";

// @ts-ignore
export const extractWordingData = (data: any, lang: string = 'fr') => {
    if (!data) return data;

    if (Array.isArray(data)) {
        // @ts-ignore
        return data.map((element) => extractWordingData(element, lang));
    }
    if (typeof data === 'object') {
        if (data.hasOwnProperty(lang)) return data[lang];

        const extractedWording = {};
        Object.keys(data).forEach((key) => {
            // @ts-ignore
            extractedWording[key] = extractWordingData(data[key], lang);
        });

        return extractedWording;
    }

    return data;
};
export const useWordingQueryOrDefault = async <TData>(
    query: string,
    language:string
) => {

    const result = await client.request(query);
    const data = result;
    return extractWordingData(data, language) as TData;
};