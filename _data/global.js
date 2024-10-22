import agencies from './directus.js';
import { readItems } from '@directus/sdk';

export default async () => {

    return await agencies.request(readItems('dda_agencies'))

        .catch(
        err => console.log(err)
    )


}