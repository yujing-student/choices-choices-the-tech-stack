// importeer de directus.js
import agencies from './directus.js';
// lees de items uit de database
import { readItems } from '@directus/sdk';

export default async () => {
    try {
        // verzoek om de items uit te lezen
        const data = await agencies.request(readItems('dda_agencies'));
        // console.log(data); // laat de opgehaalde data zien
        return data; // geef de data mee
    } catch (err) {
        // een catch als de data niet word opgehaald
        console.error('Error de data word niet opgehaald', err);
    }
}