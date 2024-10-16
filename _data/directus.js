import { createDirectus, rest } from '@directus/sdk';

const directus = createDirectus('https://fdnd-agency.directus.app/items/dda_agencies')
    .with(rest());

export default directus;