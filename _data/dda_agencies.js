// import agencies from './directus.js';
// import { readItems } from '@directus/sdk';
//
// export default async () => {
//
//     return await agencies.request(readItems('dda_agencies')).catch(err => console.log(err)
//     )
//
//
// }



import agencies from './directus.js';
import { readItems } from '@directus/sdk';

export default async () => {
    try {
        const data = await agencies.request(readItems('dda_agencies'));
        console.log(data); // Log the fetched data to the console
        return data; // Return the data for further use
    } catch (err) {
        console.error('Error fetching data:', err);
        return null; // Or throw the error if you prefer
    }
}